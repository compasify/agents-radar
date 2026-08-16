# AI CLI Tools Community Digest 2026-08-16

> Generated: 2026-08-15 23:11 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/earendil-works/pi)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [CodeWhale](https://github.com/Hmbown/CodeWhale)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — AI CLI Ecosystem (2026-08-16)

## 1. Ecosystem Overview

The AI CLI ecosystem is maturing from single-shot code generation toward long-running autonomous agent workflows. Community attention is concentrating on session continuity, context/compaction reliability, MCP ecosystem stability, permission safety, and usage/cost transparency. Desktop and TUI stability — particularly on Windows — is a recurring source of regressions across multiple tools. While only a few nightly/maintenance releases landed in the past 24 hours, the volume of parallel fix PRs suggests an ecosystem actively stabilizing after a period of rapid feature expansion.

## 2. Activity Comparison

Counts reflect items surfaced in today’s community digests, not full repository totals. Dash = no items surfaced in digest. No repo in this set indicated Issues/PRs are disabled upstream; DeepSeek Harness simply had no activity to report.

| Tool | Issues Count | PR Count | Discussions Count | Release Status |
|---|---:|---:|---:|---|
| Claude Code | 10 | 3 | 0 | None |
| OpenAI Codex | 10 | 10 | 3 | rust-v0.148.0-alpha.19 |
| Gemini CLI | 10 | 10 | 0 | v0.56.0-nightly.20260815 |
| GitHub Copilot CLI | 10 | 2 | 0 | v1.0.81-0 |
| OpenCode | 10 | 10 | 0 | None |
| Pi | 10 | 10 | 4 | None |
| Qwen Code | 10 | 10 | 0 | v0.21.11-nightly.20260815 |
| CodeWhale | 10 | 10 | 2 | None |
| DeepSeek Harness | — | — | — | No activity |

## 3. Shared Feature Directions

- **Session continuation and context lifecycle**  
  Users across Claude Code (#13354), Codex (rollout storage/reindex), Pi (compaction at safe boundaries), Qwen Code (long-session OOM), and CodeWhale (long-context budgets) are asking for seamless, reliable long-horizon sessions. The common need: avoid manual restarts, prevent silent data loss, and manage context growth predictably.

- **MCP reliability as first-class infrastructure**  
  Claude Code reports stale deferred-tool indexes (#66084); Copilot CLI has repeated Atlassian MCP OAuth regressions and a fixed 60s init timeout with no retry (#4480, #4490, #4421); Codex is adding MCP hook support. The ecosystem needs OAuth coverage, retry/backoff, and runtime tool refresh semantics.

- **Permission systems and security guardrails**  
  Claude Code’s `dontAsk`/`allowedTools` contradiction (#74567), Gemini subagents activating despite disabled config (#22093), Copilot `/spawn` cross-session writes (#4491), Qwen PAT-host isolation (#9089), and Pi’s Windows `taskkill` self-kill (#8170) all point to permission models that are either too coarse, too silent, or too easily bypassed.

- **Usage, billing, and cost transparency**  
  Codex wants rate-limit/reset visibility; OpenCode has paid subscriptions showing “Insufficient balance” (#37790); Copilot BYOK users are seeing prompt-cache invalidation (#4500); Qwen users are hurt by prefix-cache misses (#9230); CodeWhale had a pricing-endpoint 503 (#5241). Agentic loops make token/cost observability a core feature, not a nice-to-have.

- **Windows desktop stability**  
  Claude Code Desktop crashes (#85199), Codex Windows system-wide stutter (#38546, #38750, #38716), and Copilot Windows OOM (#4499) form a cross-tool signal: Electron-based AI CLI/desktop apps are still fragile on Windows under normal workloads.

- **TUI and headless resource hygiene**  
  OpenCode headless commands load OpenTUI and leak native temp files (#37671); Pi crashes `fullRender` on large transcripts (#8028); Qwen has long-standing Chinese IME breakage (#5966); Copilot’s paste handling and TUI focus issues recur. Terminal UX is becoming a differentiator for developer trust.

- **CI self-healing and automated quality gates**  
  Qwen is investing in runner checkout repair and narrow workspace wipes; CodeWhale fixed CI cancel-in-progress races; Gemini merged a wave of behavioral eval PRs. Tools are treating CI stability and evals as product infrastructure rather than afterthoughts.

## 4. Differentiation Analysis

- **Claude Code**  
  Strongest enterprise/IDE integration and MCP ecosystem pull. Its community is deeply engaged but currently blocked by session-limit friction, Desktop stability, and permission automation gaps. Ships conservatively; high discussion-to-release ratio.

- **OpenAI Codex**  
  Infrastructure-heavy and fast-iterating. Investing in `codex doctor`, storage diagnostics, hooks, Guardian approvals, and TUI state. The dominant pain is Windows desktop performance and unbounded local storage growth from Crashpad/session rollouts.

- **Gemini CLI**  
  Differentiates on agent reliability and safety: truthful subagent termination reporting, SSRF hardening, Node 22 sandbox migration, and behavioral evals. Focuses on making agent behavior observable and trustworthy rather than adding surface features.

- **GitHub Copilot CLI**  
  Tightly coupled to GitHub ecosystem: Codespaces, BYOK, ACP, model catalog, Actions. Currently suffering the most from MCP OAuth regressions and update/distribution friction. Less PR velocity, but issue reports are highly actionable.

- **OpenCode**  
  Open-source core plus managed Go/Zen services, with a distinct V2 performance push: batched streamed deltas, virtualized timeline memory fixes, Docker/Incus workspace isolation. Community confusion about free vs. paid is a product-positioning issue.

- **Pi**  
  Context-management specialist. Deep focus on compaction, provider compatibility, and TUI ergonomics. Has a genuine extension ecosystem and discussion culture. No release in the window, but many stabilization PRs.

- **Qwen Code**  
  Very fast-moving, especially around `/review` pipeline robustness, autofix, and web-shell UX. Heavily automated CI/autofix workflows generate their own issue/PR feedback loops. International/Chinese IME issues indicate a global user base.

- **CodeWhale**  
  In a v0.9.8 stabilization cycle. Focused on TUI architecture decomposition, provider template onboarding, and sandbox configurability. Smaller community, but responsive maintainers and active PR flow.

- **DeepSeek Harness**  
  No activity in this digest window; effectively dormant in the current snapshot.

## 5. Community Momentum & Maturity

The most active engineering communities today are **OpenAI Codex**, **Gemini CLI**, **OpenCode**, **Pi**, and **Qwen Code**, each with 10 PRs surfaced in the digest. Codex, Gemini, Qwen, and Copilot shipped releases, indicating ongoing maintenance cadence. Claude Code has high community engagement — its top session-continuation issue sits at 197 👍 — but no release in 24 hours, suggesting heavier backlog than shipping velocity. Copilot CLI shows substantial user pain but comparatively low PR throughput. CodeWhale is quietly stabilizing. DeepSeek Harness is currently inactive.

Maturity signals are mixed: the ecosystem is beyond “demo” phase, but recurring Windows regressions, MCP OAuth whack-a-mole, and session-integrity bugs show that reliability has not yet caught up with feature velocity.

## 6. Trend Signals

- **Long-running autonomy is the next battleground.**  
  Users expect agents to run for hours without manual session restarts. Tools that solve compaction, checkpointing, and rollback will win enterprise trust.

- **MCP needs production-grade engineering.**  
  Timeouts, retries, OAuth coverage, and live tool-index refresh are now baseline requirements. The tools that treat MCP as infrastructure will outpace those treating it as a plugin system.

- **Permission and safety models are becoming a differentiator.**  
  Security researchers and headless CI users are hitting false positives and bypasses. Context-aware guardrails with escalation paths are urgently needed.

- **Windows desktop reliability is a systemic risk.**  
  Multiple Electron-based tools are shipping regressions that cause system-wide stutter, OOM crashes, and disk-full incidents. Cross-tool investment in Windows telemetry and crash hardening is overdue.

- **Usage/billing transparency is a trust issue.**  
  As agent loops consume tokens autonomously, developers demand visible rate limits, resets, costs, and prefix-cache health. Tools with opaque billing will struggle to retain power users.

- **Observability and evals separate mature tools from demos.**  
  `codex doctor`, Gemini behavioral evals, Qwen CI self-healing, and CodeWhale diagnostics all point toward a future where AI CLI tools are judged by debuggability and reproducible quality, not just model cleverness.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

⚠️ Skills summary generation failed.

---

# Claude Code Community Digest — 2026-08-16

## Today's Highlights

No releases landed in the last 24 hours, but community activity stayed high. The long-running feature request to auto-continue sessions after hitting the session limit (#13354) continues to dominate with 197 👍 and 78 comments. Bug reports this week cluster around Claude Desktop stability on Windows/macOS, MCP tool-index staleness, and OAuth credential handling — while a new PR (#86870) attempts to reduce false-positive security blocks during authorized security research.

## Hot Issues

1. **[#13354 — Feature: Continue when session limit reached](https://github.com/anthropics/claude-code/issues/13354)** — The most-upvoted open issue (197 👍, 78 comments). Users want a seamless way to continue work after hitting the session limit instead of manually restarting. Clear signal of a top workflow friction point.

2. **[#85199 — Claude Desktop repeatedly crashes on Windows, requires "Repair"](https://github.com/anthropics/claude-code/issues/85199)** — Fresh report with 23 comments. Repeated crashes force users through "Advanced Options → Repair"; Windows Desktop stability remains a weak spot.

3. **[#66084 — MCP tools/list_changed doesn't refresh deferred-tool/ToolSearch index](https://github.com/anthropics/claude-code/issues/66084)** — Reproduced on 2.1.165; dynamically added MCP tools never appear in interactive sessions until restart. Hurts teams whose tooling changes at runtime.

4. **[#80094 — Claude Desktop macOS: filesystem MCP server unusable](https://github.com/anthropics/claude-code/issues/80094)** — New schema never dispatched and old schema dropped at registration; filesystem tooling broken across both package generations on macOS.

5. **[#79808 — Cannot log in: verification emails suppressed, no escalation path](https://github.com/anthropics/claude-code/issues/79808)** — Login blocked at the account level and the support bot offers no human escalation. Concerning for enterprise onboarding.

6. **[#73852 — Cowork: adding a folder fails with "overlaps a protected host location"](https://github.com/anthropics/claude-code/issues/73852)** — Inconsistent behavior on Windows: the same folder works when creating a new workspace but fails mid-session.

7. **[#74567 — --permission-mode dontAsk denies Write/Edit despite --allowedTools](https://github.com/anthropics/claude-code/issues/74567)** — Headless agents have no working scoped-write option; contradicts the documented auto-approve behavior and blocks automation use cases.

8. **[#86671 — Cross-session messages displayed but never enqueued (regression)](https://github.com/anthropics/claude-code/issues/86671)** — New Windows/agents regression: displayed messages never reach the model. A potential silent data-loss bug flagged as a regression.

9. **[#54443 — OAuth refresh returns 400 after early 401; concurrent sessions forced to /login](https://github.com/anthropics/claude-code/issues/54443)** — Closed/stale but with 15 comments. Auth server rejects refresh before the local `expiresAt`; teams running concurrent sessions hit repeated `/login` prompts.

10. **[#45374 — AskUserQuestion steals focus and keystrokes in VS Code](https://github.com/anthropics/claude-code/issues/45374)** — Closed/stale; dialog captures keyboard input while composing messages, corrupting user input. A recurring IDE-integration UX hazard.

## Key PR Progress

Only 3 PRs were updated in the last 24 hours; none were merges.

1. **[#86870 — fix: prevent false-positive CVP status changes during authorized security research](https://github.com/anthropics/claude-code/pull/86870)** — Adds context checks in `security-guidance/hooks/review_api.py`, including session metadata (CVP status, educational labs) and an `is_authorized_lab()` flag before triggering security blocks. Directly targets the recent false-positive cluster; worth watching.

2. **[#84600 — Enable frontend-design plugin at project scope](https://github.com/anthropics/claude-code/pull/84600)** — Registers the official Claude Code marketplace and enables the frontend-design skill via `.claude/settings.json`. Closed; a useful pattern for team-level plugin rollout.

3. **[#82981 — Claude/automatizar inventario insumos](https://github.com/anthropics/claude-code/pull/82981)** — Open PR with an unrelated Spanish-language inventory-automation description; likely off-topic. Low signal.

## Feature Request Trends

- **Session continuation & long-running autonomy** (#13354, 197 👍): by far the most-requested capability. Users want uninterrupted multi-hour work without manual session restarts.
- **Headless/permission mode improvements** (#74567): demand for scoped write approval under `dontAsk` and finer-grained permission controls for agents/CI.
- **MCP lifecycle freshness** (#66084): runtime-added or changed tools should be picked up without a session restart — MCP is a core extension path that needs first-class refresh semantics.
- **RTL/accessibility support in the TUI** (#69992, closed as duplicate but recurring): internationalization of the terminal UI.
- **Reducing safety-filter false positives** (multiple issues): legitimate security work blocked by cyber/AUP heuristics; requests for context-aware policy and an appeal path.

## Developer Pain Points

- **OAuth & login reliability**: repeated 401/400 refresh loops (#54443, #61912) and suppressed verification emails with no human escalation (#79808) create friction at the very first step.
- **Safety/security guardrail false positives**: a cluster of closed duplicates documents legitimate firmware research, reverse engineering, and defensive hardening blocked by cyber/AUP filters; users want a documented escalation path.
- **Windows instability**: Desktop crashes requiring "Repair" (#85199, #68364), 8.3 short-name path-scanner false positives (#58614), and a new cross-session message regression (#86671).
- **IDE integration focus-stealing**: AskUserQuestion capturing keystrokes (#45374), multi-session input flicker/ping-pong in VS Code (#71809), and scroll lock while cards are visible (#57691) — all closed as stale, but recurring desktop-IDE UX complaints.
- **MCP reliability**: deferred-tool index staleness (#66084) and broken macOS filesystem MCP schema dispatch (#80094) undermine trust in the MCP ecosystem.
- **Permission-system friction for automation**: the `dontAsk` + `allowedTools` inconsistency (#74567) blocks headless agent adoption.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-16

## Today's Highlights

The Codex community is currently dominated by a cluster of Windows desktop performance regressions: several new reports describe system-wide mouse stutter, Electron main-process busy loops, and idle CPU spikes in the latest 26.810.x builds. On the engineering side, maintainers closed a range of infrastructure-focused PRs — including `codex doctor` storage diagnostics, TUI resume/fork status, MCP hook support, and paginated history for persistent exec threads — and shipped `rust-v0.148.0-alpha.19`.

## Releases

- **rust-v0.148.0-alpha.19** — The only release in the window. No changelog details were published beyond the version identifier.  
  [GitHub Release](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.19)

## Hot Issues

- [#20214 — Codex App frequently freezes/stutters on Windows 11 Pro despite sufficient system resources](https://github.com/openai/codex/issues/20214)  
  The most active Windows performance issue with 104 comments and 85 👍. Users report persistent freezes across versions and hardware configurations.

- [#38546 — [Windows] ChatGPT/Codex desktop app causes system-wide mouse stutter when running without elevation](https://github.com/openai/codex/issues/38546)  
  Newly filed, already 25 comments. Points to an elevation-dependent regression in the recent desktop app.

- [#38750 — [Windows] System-wide stutter while Codex is idle; fully exiting app immediately restores OS responsiveness](https://github.com/openai/codex/issues/38750)  
  Latest report in the stutter cluster; highlights that even idle Codex processes can degrade Windows responsiveness.

- [#38716 — [Windows][26.810.6296.0] Electron main process busy loop causes system-wide mouse stutter](https://github.com/openai/codex/issues/38716)  
  Users report the regression appeared immediately after updating to build 26.810.6296.0.

- [#38547 — Codex Windows 26.810.4967 idle main-process CPU busy loop in Chrome plugin app-server hashing](https://github.com/openai/codex/issues/38547)  
  16 comments; describes a persistent Electron main-process CPU spin even when the app is completely idle.

- [#38518 — [Windows][Desktop 26.810.4967.0] Opening/switching conversations can trigger a persistent 350–800 MiB/s read loop and system-wide stutter](https://github.com/openai/codex/issues/38518)  
  Community reports severe disk-read loops tied to conversation switching.

- [#25921 — Codex Desktop continuously generates Crashpad pending dumps, growing without any limit: +5GB per day at least](https://github.com/openai/codex/issues/25921)  
  macOS report of unbounded Crashpad dump growth, with 17 comments and strong developer sympathy.

- [#35470 — Codex copied the image file 150,000 times, consuming 400 GiB of disk space](https://github.com/openai/codex/issues/35470)  
  Extreme disk-bloat case on Windows CLI; illustrates how session/rollout handling can run out of control.

- [#35746 — Paginated history drops valid flattened rollout records and reuses ordinals](https://github.com/openai/codex/issues/35746)  
  Data-integrity bug in CLI pagination: valid rollout history can be silently lost or incorrectly indexed.

- [#31433 — Codex leaves valid rollout files unindexed in state DB and lacks supported reindex repair](https://github.com/openai/codex/issues/31433)  
  Windows/WSL session-state issue; users cannot repair broken local session indexing.

The Windows stutter reports form a clear regression cluster around the recent 26.810.x desktop builds, with multiple duplicates and cross-referenced root-cause discussions.

## Key PR Progress

- [#38806 — Add a health endpoint to the code-mode gRPC listener](https://github.com/openai/codex/pull/38806)  
  Adds `GET /healthz` over HTTP/1.1 and HTTP/2 while keeping gRPC methods restricted to HTTP/2.

- [#38795 — Add storage diagnostics to `codex doctor`](https://github.com/openai/codex/pull/38795)  
  Reports free space for `CODEX_HOME` and the active worktree; warns below 5 GiB, fails below 1 GiB. On Windows, also checks whether the worktree is on a trusted Dev Drive.

- [#38788 — Show resume and fork status during TUI startup](https://github.com/openai/codex/pull/38788)  
  Adds a dimmed “Resuming session…” / “Forking session…” status line to the TUI while session selection resolves.

- [#38785 — Keep active-turn model settings stable across updates](https://github.com/openai/codex/pull/38785)  
  Prevents mid-turn model-configuration changes by deferring updates until the next turn.

- [#38774 — Use paginated history for persistent exec threads](https://github.com/openai/codex/pull/38774)  
  Switches `codex exec` persistent threads to paginated history, with a legacy fallback for thread stores that don’t support pagination.

- [#38705 — Add MCP tool handler support to the hooks engine](https://github.com/openai/codex/pull/38705)  
  Enables synchronous `mcp_tool` hook handlers, MCP server/tool invocation, and nested placeholder expansion in MCP tool inputs.

- [#38704 — Normalize CRLF line endings in pasted text](https://github.com/openai/codex/pull/38704)  
  Fixes double line breaks when CRLF text is pasted into the TUI composer.

- [#38703 — Refresh hook runtimes after plugin changes](https://github.com/openai/codex/pull/38703)  
  Rebuilds hook runtimes when effective plugins change, marketplace upgrades install new content, or MCP runtimes need refreshing.

- [#38701 — Route permission requests through shared Guardian approvals](https://github.com/openai/codex/pull/38701)  
  Converts `request_permissions` calls into Guardian approval actions while preserving turn cancellation during automatic review.

- [#38682 — Surface misalignment policy violations as typed errors](https://github.com/openai/codex/pull/38682)  
  Recognizes `misalignment_policy_violation` errors from streams and HTTP 400/403 responses, treats them as non-retryable, and exposes them as typed errors.

## Hot Discussions

### Ideas

- [#26397 — Anyone else using both Codex and Claude Code and tired of keeping project context in two places?](https://github.com/openai/codex/discussions/26397)  
  Developers want shared project memory across AI coding tools; maintaining two parallel context conventions drifts and adds overhead.

- [#38712 — Limit the amount of “You have reached your Codex usage limits for code reviews.”](https://github.com/openai/codex/discussions/38712)  
  A user asks for quieter, less repetitive usage-limit notifications from the code-review connector.

### Q&A

- [#38633 — Can `include_instructions` mute skills for Worker/Explorer?](https://github.com/openai/codex/discussions/38633)  
  Users are seeking clarity on whether `include_instructions = false` in subagent role configs disables skills entirely or only instruction injection.

## Feature Request Trends

- **Richer rate-limit and usage visibility** remains the clearest community request: expose resets, balance, plan type, and remaining credits in the CLI statusline or a dedicated `/status` command.  
  References: [#24080](https://github.com/openai/codex/issues/24080), [#15281](https://github.com/openai/codex/issues/15281), [#19555](https://github.com/openai/codex/issues/19555), [#20310](https://github.com/openai/codex/issues/20310), [#38712](https://github.com/openai/codex/discussions/38712)

- **Session/rollout storage hygiene** is a growing demand: users want storage limits, cleanup tools, reindex repair, and diagnostics to prevent multi-GiB session bloat.  
  References: [#25921](https://github.com/openai/codex/issues/25921), [#30779](https://github.com/openai/codex/issues/30779), [#34337](https://github.com/openai/codex/issues/34337), [#35470](https://github.com/openai/codex/issues/35470)

- **Context/session scoping** is another recurring direction: keep chats and app state scoped to the active workspace/project rather than mixing global context.  
  References: [#3550](https://github.com/openai/codex/issues/3550), [#38743](https://github.com/openai/codex/pull/38743), [#26397](https://github.com/openai/codex/discussions/26397)

## Developer Pain Points

- **Windows desktop performance regressions** are the dominant frustration: stutter, input freezes, idle CPU busy loops, DWM GPU spikes, and read loops across multiple recent 26.810.x builds.
- **Unbounded local storage growth** from Crashpad dumps, rollout JSONL histories, subagent fork sessions, and duplicate file copies is causing serious disk-bloat incidents — in extreme cases 400 GiB+.
- **Rate-limit transparency is poor**: users feel blind to exact plan usage and reset times, and repetitive limit notifications add noise without adding actionable detail.
- **Session integrity issues** — dropped rollout records, unindexed files, broken follows-up, and context-length failures — are eroding trust in long-running and paginated session workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-16

## Today's Highlights

A new nightly release (v0.56.0-nightly.20260815) landed with SSR Agent test-infrastructure fixes, while the maintainer team pushed a wave of agent-reliability PRs targeting subagent recovery semantics, TUI hangs, and silent preview-model substitution. Meanwhile, security hardening is a clear theme: an SSRF fix for `web-fetch` (CVSS 8.6) and a Node 20→22 sandbox upgrade are both open and awaiting review.

## Releases

**v0.56.0-nightly.20260815.g2a87e7be1** — Nightly release that migrates `process.env` mutation to `vi.stubEnv()` in `a2a-server` tests ([PR #28811](https://github.com/google-gemini/gemini-cli/pull/28811)), aligning test hygiene with project guidelines. No user-facing features or fixes in this build.

## Hot Issues

1. [**#22323 — Subagent recovery after MAX_TURNS reported as GOAL success**](https://github.com/google-gemini/gemini-cli/issues/22323) *(P1, Agent, 12 comments)* — `codebase_investigator` reports `status: "success"` / `Termination Reason: "GOAL"` even after hitting its max-turn limit. Masks real interruptions and erodes trust in agent telemetry. A fix PR is already up (see #28815).

2. [**#21409 — Generalist agent hangs forever**](https://github.com/google-gemini/gemini-cli/issues/21409) *(P1, Agent, 8 comments, 8 👍)* — CLI defers to the generalist agent and hangs indefinitely, even for trivial operations like folder creation. Users report waiting up to an hour before cancelling; workaround is instructing the model never to use subagents. High community frustration.

3. [**#19873 — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing**](https://github.com/google-gemini/gemini-cli/issues/19873) *(P2, Enhancement, 8 comments)* — Proposes leveraging Gemini 3 models' native bash affinity with a zero-dependency sandbox plus intent routing after command execution. Could drastically improve both capability and safety of shell usage.

4. [**#24353 — Robust component-level evaluations**](https://github.com/google-gemini/gemini-cli/issues/24353) *(P1, Eval Infra, 7 comments)* — Follow-up EPIC on the behavioral evals system; 76 eval tests exist across 6 Gemini model variants, and the team is pushing for deeper component-level coverage.

5. [**#22745 — AST-aware file reads, search, and mapping**](https://github.com/google-gemini/gemini-cli/issues/22745) *(P2, Agent, 7 comments)* — EPIC investigating AST-aware tooling for precise method-bound reads and reduced token noise vs. misaligned file reads. Companion issue #22746 suggests `tilth` or `glyph` as starting points.

6. [**#21968 — Gemini does not use skills and sub-agents enough**](https://github.com/google-gemini/gemini-cli/issues/21968) *(P2, Agent, 6 comments)* — Anecdotal but resonant: the model ignores custom skills (e.g., `gradle`, `git`) unless explicitly instructed, even for highly relevant tasks. Points to a gap in proactive tool selection.

7. [**#26522 — Auto Memory retries low-signal sessions indefinitely**](https://github.com/google-gemini/gemini-cli/issues/26522) *(P2, Agent, 5 comments)* — Sessions the extraction agent skips as low-signal are never marked processed, so they surface repeatedly. Inefficient and potentially costly across long-running installs.

8. [**#26525 — Add deterministic redaction and reduce Auto Memory logging**](https://github.com/google-gemini/gemini-cli/issues/26525) *(P2, Security, 4 comments)* — Transcript content is sent to the extraction model *before* prompt-based redaction, and the service may log existing skills. Privacy-sensitive for teams using Auto Memory with sensitive codebases.

9. [**#25166 — Shell command execution stuck on "Waiting input"**](https://github.com/google-gemini/gemini-cli/issues/25166) *(P1, Core, 4 comments, 3 👍)* — Finished simple CLI commands remain displayed as active and awaiting input, hanging the session. Happens repeatedly with non-interactive commands; needs a robust execution-state fix.

10. [**#22093 — (Sub)agents running without permission since v0.33.0**](https://github.com/google-gemini/gemini-cli/issues/22093) *(P2, Agent, 3 comments)* — Users with agents disabled in all configs report subagents activating after auto-update to v0.33.0. Permission-regression bug with security implications; flagged as needing retesting.

## Key PR Progress

1. [**#28828 — Warn when a preview model is silently substituted**](https://github.com/google-gemini/gemini-cli/pull/28828) *(P1, Agent, size/m)* — Fixes #28825: when a preview model lacks entitlement, `Config` silently rewrites it to `auto-gemini-2.5`. Adds a warning so users aren't misled about which model is active.

2. [**#28815 — Preserve original termination reason during subagent recovery**](https://github.com/google-gemini/gemini-cli/pull/28815) *(P1, Agent)* — Directly addresses #22323: when a subagent hits `MAX_TURNS`/`TIMEOUT` but calls `complete_task` in the grace recovery turn, the original interruption reason is now preserved instead of being masked as GOAL success.

3. [**#28725 — Prevent SSRF via DNS resolution bypass in web-fetch**](https://github.com/google-gemini/gemini-cli/pull/28725) *(P2, Security, CVSS 8.6)* — Fixes #28555: malicious custom domains pointing to private/loopback IPs (e.g., `169.254.169.254`) could bypass DNS protections. Critical hardening for the `web-fetch` tool.

4. [**#28726 — Upgrade sandbox Dockerfile to node:22-slim**](https://github.com/google-gemini/gemini-cli/pull/28726) *(P1, Security)* — Fixes #28584: Node 20 is EOL and missing security patches; migrates the sandbox and caretaker-agent CloudRun Dockerfiles to Node 22.

5. [**#28827 — Avoid false authentication errors for 401 substrings**](https://github.com/google-gemini/gemini-cli/pull/28827) *(P2, Core, size/s)* — Fixes #28203: `isAuthenticationError` falsely matched messages merely containing "401" (ports, exit codes). Now recognizes `401` only at message start or with HTTP/status context, with regression coverage.

6. [**#28812 — Prevent indefinite TUI hang by adding execution timeouts**](https://github.com/google-gemini/gemini-cli/pull/28812) *(P1, Core, help wanted)* — Fixes #21477: bare Linux terminal launches can hang forever at "Initializing..." because `getProcessInfo()` relies on `ps` via `execAsync`. Adds execution timeouts.

7. [**#28823 — Behavioral evals for tracker relationships & error recovery**](https://github.com/google-gemini/gemini-cli/pull/28823) *(size/xl)* — Adds evals for `tracker_add_dependency`, `tracker_visualize`, file-path 404 recovery (re-search + re-read), and shell-command failure diagnosis/retry.

8. [**#28824 — Evals: multi-tool chains, context safety, security bounds**](https://github.com/google-gemini/gemini-cli/pull/28824) *(size/l)* — New behavioral evals asserting structured multi-tool execution workflows, context-safe handling of large files, and security-boundary enforcement for sensitive files/directories.

9. [**#28822 — Evals for todos & task tracker flows**](https://github.com/google-gemini/gemini-cli/pull/28822) *(size/xl)* — Behavioral evals covering `write_todos` planning, `complete_task` signaling, and `tracker_list_tasks` / `tracker_get_task` status queries.

10. [**#28679 — Improve Vertex AI 401 error message when using standard API keys**](https://github.com/google-gemini/gemini-cli/pull/28679) *(P2, Security/Auth)* — When a user configures `vertex-ai` auth but only supplies a standard Gemini API key, the CLI now produces a clear, actionable error instead of a confusing request failure.

## Feature Request Trends

- **Subagent reliability & observability**: Multiple issues/PRs target truthful termination reporting (#22323/#28815), generalist hangs (#21409), and surfacing subagent trajectories via `/chat share` (#22598).
- **AST-aware codebase navigation**: EPICs #22745/#22746 push for AST-based reads/search/mapping to reduce token noise and turn count — a strong signal for large-repo UX.
- **Evals infrastructure expansion**: Three PRs in one day (#28822, #28823, #28824) plus EPIC #24353 show major investment in behavior-gated quality.
- **Proactive skill/agent utilization**: #21968 and #21432 both call for the model to better understand and use its own tools, skills, and CLI flags without prompting.
- **Security hardening**: SSRF prevention (#28725), Node 22 sandbox migration (#28726), Auto Memory redaction (#26525), and sandboxed bash (#19873) reflect mounting security awareness.
- **Config/entitlement transparency**: Preview-model substitution must be visible (#28828, #28608) and auth failures must be accurate and actionable (#28827, #28679).

## Developer Pain Points

- **Hangs with no escape**: Generalist agent hangs (#21409), shell commands stuck on "Waiting input" (#25166), and TUI hangs on bare terminals (#28812) all force manual cancellation or an hour+ of waiting.
- **Silent/misleading agent behavior**: MAX_TURNS reported as success (#22323), subagents activating despite disabled configs (#22093), and preview models swapped silently (#28828) erode user confidence.
- **Auto Memory trust issues**: Indefinite low-signal retries (#26522), secrets entering model context pre-redaction (#26525), and silent skipping of invalid memory patches (#26523) — privacy and efficiency concerns for background features.
- **Browser agent fragility**: Wayland failures (#21983), ignored `settings.json` overrides like `maxTurns` (#22267), and locked-profile fail-fast behavior (#22232).
- **Tool-scaling limits**: 400 errors with >128 tools (#24246) — the agent doesn't scope tool selection well as enabled tools grow.
- **Workspace pollution**: Models randomly dropping temp edit scripts across directories (#23571) creates cleanup overhead for clean commits.
- **Terminal UX regressions**: Resize flicker/perf (#21924) and screen corruption after external-editor exit (#24935) are quality-of-life core issues still needing work.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-16

## Today's Highlights

Copilot CLI shipped v1.0.81-0, a maintenance release focused on model configuration updates. Community attention this cycle is dominated by reliability regressions: Atlassian MCP OAuth has now broken twice in successive patches (1.0.79 and 1.0.80), and a newly reported Windows autopilot OOM crash plus a BYOK prompt-caching regression raise cost/availability concerns for heavy users. Only two PRs moved, both aimed at hardening the repo's invalid-label automation.

## Releases

- **[v1.0.81-0](https://github.com/github/copilot-cli/releases/tag/v1.0.81-0)** — Improved: update model configurations.

## Hot Issues

- **[#3392 — Bash tool breaks on NixOS with version >=1.0.49](https://github.com/github/copilot-cli/issues/3392)** — Long-running platform regression (open since May) where every agent command fails with `Failed to start bash process`. The highest-reacted issue in this batch (9 👍) and still unresolved, signaling persistent Linux-distro compatibility debt.

- **[#4480 — Atlassian MCP OAuth fails on 1.0.79 (closed)](https://github.com/github/copilot-cli/issues/4480)** — OAuth discovery breaks with `MCPOAuthError: Incompatible authorization server (RFC 8414 §3.3)`, a regression from 1.0.71. Closed with 6 👍, but the fact that it needed fixing at all points to weak regression coverage for MCP OAuth.

- **[#4490 — Atlassian MCP OAuth broken again in 1.0.80](https://github.com/github/copilot-cli/issues/4490)** — Same RFC 8414 issuer-mismatch error reported against 1.0.80, with the reporter noting 1.0.78 worked. Two consecutive patch releases shipping the same OAuth failure is a strong signal the mock/test suite doesn't cover real Atlassian discovery metadata.

- **[#4421 — MCP initialize handshake has a fixed, non-configurable 60s budget with no retry](https://github.com/github/copilot-cli/issues/4421)** — npx-launched stdio servers fail in ~29% of sessions; once the hard-coded timeout expires, the CLI logs `Recorded failure for server <name>` and never respawns it for the life of the session. No retry, no backoff, no config knob — a major reliability blocker for MCP-heavy workflows.

- **[#4499 — v1.0.79 fatal "Committing semi space failed" OOM in autopilot on Windows](https://github.com/github/copilot-cli/issues/4499)** — `copilot.exe` crashes during a long-running autopilot session even though the V8 heap is only ~0.6/4.3 GB at crash time. The diagnosis points to host-RAM commit failure rather than a heap limit, which is concerning for Windows users running parallel workloads.

- **[#4500 — BYOK: autopilot nudge turn re-serializes transcript items, breaking prompt caching](https://github.com/github/copilot-cli/issues/4500)** — On the completion-nudge turn, the CLI rebuilds the entire `input` array from parsed internal state instead of resending prior items byte-for-byte (BYOK `responses` wire API). Item IDs are preserved but bytes change, silently defeating prompt caching and inflating cost/latency for BYOK users.

- **[#4501 — Codespaces ships Copilot CLI 1.0.3; `copilot update` only installs with sudo](https://github.com/github/copilot-cli/issues/4501)** — Fresh Codespaces still start with the ancient 1.0.3 binary. `copilot update` reports downloading 1.0.80, but the installed binary is never replaced and `--version` still shows 1.0.3 — terrible first-run experience for a tool GitHub is pushing into Actions/CI workflows.

- **[#4493 — `/restart` fails in sessions created with `-w`](https://github.com/github/copilot-cli/issues/4493)** — Running `/restart` inside a `copilot -w` session produces an option conflict because restart tries to combine the worktree flag with the existing session ID, leaving users unable to recover such sessions.

- **[#4494 — Newly enabled model remains unavailable until local Copilot state/cache is cleared](https://github.com/github/copilot-cli/issues/4494)** — Enabling Sonnet 5 in GitHub settings doesn't propagate to the CLI's local model catalog; users must manually reset Copilot state/cache. Affects both CLI and Visual Studio model lists, causing confusing "model not available" errors.

- **[#4491 — `/spawn` template contradicts its singular-spawn contract, no approval gate on cross-session writes](https://github.com/github/copilot-cli/issues/4491)** — The expanded prompt template opens with a singular-spawn contract but can instruct the agent to inject context into an unrelated running session, with no approval gate on the resulting cross-session write. A footgun with potentially destructive consequences for session isolation.

## Key PR Progress

Only two PRs were updated in the last 24 hours.

- **[#4497 — Handle fork PR associations in invalid-label writer](https://github.com/github/copilot-cli/pull/4497)** — Updates the trusted invalid-label writer to handle fork PR workflow runs where GitHub doesn't populate the PR association. When absent, the writer searches trusted workflow-run metadata and requires exactly one open PR before acting — a safety-first fix for the Actions migration.

- **[#4449 — Migrate pull request automation away from pull_request_target (closed)](https://github.com/github/copilot-cli/pull/4449)** — Removes `pull_request_target` from invalid-label automation: issues are closed directly with an issue-scoped write token, mergeable-PR handling uses a no-permission `pull_request` signal, and privileged steps are isolated. Good supply-chain hygiene for repo automation.

## Feature Request Trends

- **Model capability access** — Users want parity between interactive and non-interactive surfaces: selectable GPT-5.6 `reasoning.mode` ("standard"/"pro") ([#4495](https://github.com/github/copilot-cli/issues/4495)) and exposure of `contextTier` as a session-config option in ACP clients ([#4275](https://github.com/github/copilot-cli/issues/4275)).
- **Session lifecycle management** — Request to un-archive sessions accidentally marked Done; data isn't deleted but the UI offers no way back ([#4502](https://github.com/github/copilot-cli/issues/4502)).
- **Telemetry standardization** — Request that OpenTelemetry honor the standard `OTEL_EXPORTER_OTLP_PROTOCOL` env var and support `http/protobuf` in addition to `application/json` ([#2934](https://github.com/github/copilot-cli/issues/2934), closed).
- **MCP/CI robustness** — Recurring asks for configurable MCP initialization timeouts with retry/backoff ([#4421](https://github.com/github/copilot-cli/issues/4421)) and reliable MCP registry policy fetch when authenticating with a wrapper `GITHUB_TOKEN` in Actions ([#4346](https://github.com/github/copilot-cli/issues/4346)).

## Developer Pain Points

- **Repeated MCP OAuth regressions across patch releases** — Atlassian MCP auth worked in 1.0.71/1.0.78 and broke in 1.0.79 and again in 1.0.80 ([#4480](https://github.com/github/copilot-cli/issues/4480), [#4490](https://github.com/github/copilot-cli/issues/4490)). Each release is a gamble for MCP users.
- **MCP servers are permanently crippled by a single timeout** — The fixed 60s init budget with no retry means one slow npx spawn kills the server for the entire session ([#4421](https://github.com/github/copilot-cli/issues/4421)).
- **Model/cache staleness and silent cost regressions** — Newly enabled models don't appear without manual cache resets ([#4494](https://github.com/github/copilot-cli/issues/4494)), while BYOK autopilot turns invalidate prompt caching by re-serializing transcript bytes ([#4500](https://github.com/github/copilot-cli/issues/4500)).
- **Installation and update friction** — Codespaces still images 1.0.3, and `copilot update` silently fails to replace the binary without sudo ([#4501](https://github.com/github/copilot-cli/issues/4501)).
- **Session-management footguns** — `/restart` conflicts with worktree sessions ([#4493](https://github.com/github/copilot-cli/issues/4493)), `/spawn` can write cross-session without approval ([#4491](https://github.com/github/copilot-cli/issues/4491)), and accidental Done marks are irreversible ([#4502](https://github.com/github/copilot-cli/issues/4502)).
- **Loss of model/agent control** — The Task tool silently downgrades subagent models via the multiplier guard ([#3565](https://github.com/github/copilot-cli/issues/3565)), and `disable-model-invocation: true` makes skills entirely unreachable instead of manual-only ([#4438](https://github.com/github/copilot-cli/issues/4438)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-16

## Today's Highlights

No new releases landed in the last 24 hours. Community attention focused on a wave of OpenCode Go/Zen reliability and billing reports — including grok-4.5 failures, “Endpoint is unavailable” errors, and paid subscriptions showing “Insufficient balance” — while maintainers advanced V2 performance work with batched streamed deltas, a virtualized timeline memory-leak fix, and new Docker/Incus workspace isolation PRs.

## Hot Issues

- [Issue #37790](https://github.com/anomalyco/opencode/issues/37790) — **OpenCode Go subscription paid successfully but workspace shows “Insufficient balance”** (14 comments)  
  A Stripe payment succeeds but the workspace balance is never credited. Highly disruptive for paying users and points to an entitlement/billing sync bug.

- [Issue #24879](https://github.com/anomalyco/opencode/issues/24879) — **[FEATURE] Go Pro tier ($20) and Share modifier with first-month discounts** (11 comments, 11 👍)  
  Users want a predictable mid-tier plan. The current monthly cap forces fallback to Zen pay-as-you-go, which is harder to budget.

- [Issue #42143](https://github.com/anomalyco/opencode/issues/42143) — **Why does Opencode require me to subscribe when your official website states it’s 100% free?** (10 comments)  
  Confusion between the free open-source product and managed OpenCode Go/Zen services. Community reaction suggests the public messaging needs to be clearer.

- [Issue #7801](https://github.com/anomalyco/opencode/issues/7801) — **[FEATURE] Plan Mode + Question tool can auto switch to Build mode** (10 comments, 31 👍)  
  One of the most-upvoted recent requests. Users want a smoother Plan → Build workflow when the agent asks a clarifying question.

- [Issue #40206](https://github.com/anomalyco/opencode/issues/40206) — **grok-4.5 on OpenCode Go not working since 2 Aug** (9 comments)  
  Closed issue but still generating attention. Consistently returns 500 errors through the OpenAI-compatible endpoint.

- [Issue #42329](https://github.com/anomalyco/opencode/issues/42329) — **Fetch Failed** (4 comments)  
  Appears after the last update: after sending a prompt, OpenCode returns “Failed to fetch,” and the problem returns after 0–1 successful prompts.

- [Issue #37671](https://github.com/anomalyco/opencode/issues/37671) — **[2.0] v2 cli: headless commands load OpenTUI and leak native temp files** (4 comments, 2 👍)  
  `--version`, `--help`, `service status`, and `api` all load the embedded TUI and leave a 13.1 MiB `libopentui.so` temp file per process.

- [Issue #42739](https://github.com/anomalyco/opencode/issues/42739) — **[Bug] Unhandled crash in `Provider.list` when Cloudflare environment variables exist without `CLOUDFLARE_API_TOKEN`** (4 comments)  
  A straightforward environment-config edge case that crashes the TUI on launch.

- [Issue #32911](https://github.com/anomalyco/opencode/issues/32911) — **Deepseek API burning too many tokens** (3 comments, 1 👍)  
  Community reports overbilling with DeepSeek API keys on 1.17.x versions, with a Reddit thread cited as additional evidence.

- [Issue #42799](https://github.com/anomalyco/opencode/issues/42799) — **OpenCode servers are in a broken state** (2 comments)  
  The `/workspace` dashboard returns 500 or becomes unresponsive with `ResourceExhausted` DB errors, and the client can’t connect. Affects core hosted services.

## Key PR Progress

- [PR #42831](https://github.com/anomalyco/opencode/pull/42831) — **feat(core): add Docker blueprint workspaces**  
  Adds commit-based container forks, SDK Next workspace forking, idle-container stop/wake, and cleanup of failed starts.

- [PR #42829](https://github.com/anomalyco/opencode/pull/42829) — **feat(core): add Incus workspace forks**  
  Snapshot-based workspace forking for Incus containers/VMs, with subagent isolation and idle-instance lifecycle management.

- [PR #42830](https://github.com/anomalyco/opencode/pull/42830) — **feat(plugin): select event subscriptions**  
  Allows plugins to subscribe to specific event types instead of using the wildcard form, with manifest-validated event routing.

- [PR #42826](https://github.com/anomalyco/opencode/pull/42826) — **fix(core): batch streamed session deltas**  
  Reduces the flood of per-fragment provider events. Important scalability fix for long-running sessions.

- [PR #42825](https://github.com/anomalyco/opencode/pull/42825) — **fix(app): release virtualized timeline elements**  
  Fixes a renderer memory leak that retained ~37,500 detached DOM nodes in long sessions.

- [PR #42820](https://github.com/anomalyco/opencode/pull/42820) — **fix(app): use tree directory picker everywhere**  
  Replaces the legacy flat directory picker in all non-native project pickers with the tree-style picker.

- [PR #42828](https://github.com/anomalyco/opencode/pull/42828) — **refactor(core): use numeric event timestamps**  
  Converges V2 events on finite epoch-millisecond timestamps instead of DateTime round-trips.

- [PR #37172](https://github.com/anomalyco/opencode/pull/37172) — **fix(tui): sync model favorites**  
  Stores model favorites in managed CLI config and reconciles cross-process TUI updates. Fixes #37053.

- [PR #37156](https://github.com/anomalyco/opencode/pull/37156) — **fix(server): SSE event loss under bwrap PID namespace**  
  Fixes SSE streams stalling after the first chunk when `opencode serve` runs inside a bwrap sandbox.

- [PR #37110](https://github.com/anomalyco/opencode/pull/37110) — **fix(opencode): stop repeated empty tool loops**  
  Stops sequential discovery-tool loops after three consecutive empty/no-match outcomes. Closes #31942.

## Feature Request Trends

- **More flexible paid tiers** — Users are asking for a Go Pro tier, first-month discounts, and clearer separation between “free” and managed paid offerings. Evidence: #24879, #42143.
- **Agent workflow automation** — Plan Mode should automatically switch to Build mode when the Question tool is used; model override settings should persist per chat. Evidence: #7801, #37087.
- **Workspace isolation and portability** — Docker and Incus workspace forks, subagent isolation, and better handling of moved/deleted project directories. Evidence: #42831, #42829, #34737.
- **TUI/Web UX polish** — Clickable wrapped links, tree directory pickers, mouse-wheel scrolling behavior, and running-subagent row clickability in V2. Evidence: #35649, #35295, #42820, #42754, #42805.
- **Provider/model capability parity** — Correct model discovery for OAuth providers, model-override support, and accurate handling of advertised reasoning/video capabilities. Evidence: #37104, #40642, #42793.

## Developer Pain Points

- **Billing and entitlement sync failures** — Paid subscriptions can show “Insufficient balance,” and users report confusion over whether OpenCode is “100% free” or subscription-based. Examples: #37790, #42143.
- **Hosted service reliability** — A recurring pattern of provider/model failures: grok-4.5 returns 500/503, “Endpoint is unavailable,” “Failed to fetch,” and dashboard DB exhaustion. Examples: #40206, #40886, #42750, #42329, #42799.
- **V2 headless resource leaks** — CLI commands that should not render a TUI still load OpenTUI and leak native temp files. Example: #37671.
- **Regressions after releases** — 1.18.x updates introduced provider regressions, fetch failures, and TUI input regressions, eroding trust in rapid releases. Examples: #42329, #42818, #35295.
- **Unexpected token consumption** — Reports of DeepSeek API overbilling and lack of transparency around token usage. Example: #32911.
- **Agent permissions not enforced at runtime** — Declared permission rules such as `"edit": "ask"` are ignored by the agent, which is a safety-concerning gap. Example: #32787.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest — 2026-08-16

## Today's Highlights

No new releases landed in the last 24 hours, but the project saw a concentrated wave of stabilization work around context compaction and provider compatibility. Several PRs fix compaction-related crashes and token accounting, while DeepSeek V4 Flash and xAI provider handling received notable corrections. A draft PR also opens a new “harness” development track, and Mermaid terminal rendering is moving to the more maintained `lovely-mermaid` renderer.

## Hot Issues

- [#6879](https://github.com/earendil-works/pi/issues/6879) — **Auto-compaction never triggers after context grows past 100% until provider overflow** (open, 17 👍, 21 comments). A long `gpt-5.6-sol` agentic turn climbed past the compaction threshold and only failed at the provider API limit. The high reaction count suggests this is one of the most felt context-management bugs right now.

- [#6187](https://github.com/earendil-works/pi/issues/6187) — **Pi login hangs in WSL after browser-based GitHub Copilot device authorization** (closed, 27 comments). The device registers successfully, but the WSL client never detects completion. The discussion volume makes it a notable cross-platform auth pain point.

- [#7855](https://github.com/earendil-works/pi/issues/7855) — **“Response was truncated before completion.”** (closed as no-action, 5 comments). Happens randomly with OpenAI-compatible APIs, including local VLLM, forcing users to manually prompt a continuation.

- [#8105](https://github.com/earendil-works/pi/issues/8105) — **Codex materializes optional tool parameters as required** (closed as no-action, 4 comments). With `gpt-5.6-sol`, `strict: null` makes optional tool parameters mandatory, breaking callers that rely on omission.

- [#8170](https://github.com/earendil-works/pi/issues/8170) — **Windows bash tool can kill its own host via image-wide taskkill** (closed, 2 comments). A model-generated `taskkill /F /IM node.exe` killed Pi/pi-web itself. Strong safety-boundary argument for Windows command confirmation.

- [#8028](https://github.com/earendil-works/pi/issues/8028) — **TUI `fullRender` crashes with V8 string limit** (open, 2 comments). A video-production agent reading many images eventually overflows the renderer, pointing to limits in large-transcript TUI rendering.

- [#8168](https://github.com/earendil-works/pi/issues/8168) — **Compaction + session restore corrupts tool-result role → 422** (closed, 1 comment). After compaction, a restored tool message can be rejected by the provider with `Input should be <ChatMessageRole.TOOL: 'tool'>`, breaking the next request.

- [#7787](https://github.com/earendil-works/pi/issues/7787) — **Bash PI_\* guideline triggers unnecessary permission prompts** (open, 3 comments). The default `PI_*` environment guideline causes models to run `env` during unrelated tasks. A follow-up PR scopes the guideline to session-related questions.

- [#8171](https://github.com/earendil-works/pi/issues/8171) — **TUI: fixed-height scrollable thinking blocks + auto-collapse on completion** (closed, 2 comments). Community proposal to stop long thinking blocks from expanding the transcript.

- [#8157](https://github.com/earendil-works/pi/issues/8157) — **Migrate grok-mermaid → lovely-mermaid** (open, 2 comments). The current renderer inherits many corner cases from the original; migration should improve Mermaid fidelity in terminal output.

## Key PR Progress

- [#8153](https://github.com/earendil-works/pi/pull/8153) — **Compact at safe turn boundaries**. Adds run-scoped boundary-compaction between completed turns, rebuilds context safely, and avoids compacting mid-turn.

- [#8164](https://github.com/earendil-works/pi/pull/8164) — **Never continue from trailing assistant message**. Fixes a post-compaction crash where `agent.continue()` was called after a completed turn.

- [#8165](https://github.com/earendil-works/pi/pull/8165) — **Tokens.total = billable only**. Excludes cache reads/writes from `total` so compaction budgets and status stats are not skewed.

- [#8181](https://github.com/earendil-works/pi/pull/8181) — **Expose low thinking level for DeepSeek V4 Flash on opencode/opencode-go**. Applies the same `low` reasoning-effort mapping already available on the direct `deepseek` provider.

- [#8146](https://github.com/earendil-works/pi/pull/8146) — **Cap Baseten DeepSeek V4 Flash output at 384k tokens**. Matches Baseten’s documented limit instead of trusting the larger models.dev value.

- [#8149](https://github.com/earendil-works/pi/pull/8149) — **Omit invalid OpenAI session header**. Prevents `session_id` underscore headers from being rejected by HTTP/1 proxies such as Envoy.

- [#8148](https://github.com/earendil-works/pi/pull/8148) — **Scope the bash PI_\* guideline to session questions**. Fixes unnecessary permission prompts by only injecting the guideline when the task is actually about session/model details.

- [#8155](https://github.com/earendil-works/pi/pull/8155) — **Fix TUI cursor blink during renders**. Tracks cursor visibility and only emits visibility commands on state transitions, reducing aggressive flicker while streaming.

- [#8158](https://github.com/earendil-works/pi/pull/8158) — **Upgrade Mermaid terminal rendering**. Migrates from `grok-mermaid` to `lovely-mermaid` and closes the related rendering issues.

- [#8124](https://github.com/earendil-works/pi/pull/8124) — **Route xAI models through Responses and default to Grok 4.6**. Switches xAI to the Responses API and updates the default model.

## Hot Discussions

**Q&A**

- [#3373](https://github.com/earendil-works/pi/discussions/3373) — Which plugins, add-ons, or extensions do you most enjoy using with Pi? 9 comments, 7 👍.

**Show and tell**

- [#8090](https://github.com/earendil-works/pi/discussions/8090) — Pi extensions now have a second host: `pi2dsh` runs published Pi ecosystem packages unmodified on DeepSeek Harness.

- [#8179](https://github.com/earendil-works/pi/discussions/8179) — `pi-dsh-minimal` maps Pi onto the official DeepSeek Harness minimal surface, giving DeepSeek V4 Pro an eval-like prompt and tool catalog.

**Community / Kudos**

- [#5951](https://github.com/earendil-works/pi/discussions/5951) — A community thank-you thread for Pi’s versatility and usefulness. 2 comments, 5 👍.

## Feature Request Trends

- **Predictable compaction and context management**: Users are asking for compaction at safe turn boundaries, reliable triggering before provider overflow, and better visibility when compaction fails. See #6879, #8168, #8175, and PRs #8153/#8164.

- **TUI ergonomics for long sessions**: Thinking-block containment, hidden-block rendering, cursor flicker, and mouse-wheel scroll configurability remain active requests. See #8171, #8154, #8003, #8028.

- **Provider/model breadth and correctness**: DeepSeek V4 Flash thinking levels, Baseten output caps, xAI Responses routing, LLMTR as a built-in provider, and llama.cpp router-model visibility are all recent asks. See #8182, #8146, #8124, #8178, #8167.

- **Extension API depth**: Developers want more lifecycle hooks and events — UI dialog events, `model_select_before`, compaction failure notifications, and richer shortcut contexts. See #7147, #8169, #8175, #8180.

- **Mermaid/terminal rendering quality**: The migration to `lovely-mermaid` is the clearest signal that terminal diagram rendering needs a more robust base. See #8157/#8158.

## Developer Pain Points

- **Compaction reliability**: Auto-compaction can fire too late, crash on restart, corrupt tool-result roles, or hide failures from extensions. This is the dominant theme in the current batch of issues.

- **Cross-platform auth friction**: WSL device-authorization flows can hang even after successful browser registration, making first-time setup frustrating.

- **Provider-compatibility whack-a-mole**: Truncated responses, optional parameters becoming required, invalid headers, and undocumented output limits all require manual workarounds.

- **TUI polish under real workloads**: Large transcripts can crash rendering, input cursors flicker during streaming, and hidden thinking blocks leave awkward blank lines.

- **Safety/permission fatigue**: Both unnecessary `PI_*` guideline prompts and a Windows `taskkill` self-kill incident show that bash-tool permissions and guidelines need tighter scoping.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-16

## Today's Highlights

The project shipped a new nightly (`v0.21.11-nightly.20260815.c396fe3d12`) with a deny-by-default autofix footprint gate and another round of Terminal-Bench/SWE-bench smoke validation, ending with a 1/1 SWE-bench Verified success. The biggest community activity remains the `/review` pipeline: multiple P1/P2 bugs were reported about schema mismatches, duplicate-finding drops, and worktree races, with a wave of fix PRs landing in parallel. Several main-branch E2E CI failures also drew automated autofix attention.

## Releases

### v0.21.11-nightly.20260815.c396fe3d12

- `feat(autofix): deny-by-default footprint gate and positional window censuses`
- `fix(web-shell):` DSW EAS SWE + Terminal-Bench smoke runs, including the `dsw-eas-tb-smoke-20260815-r5` one-case end-to-end smoke after the Terminal-Bench proxy-prelude fix.
- SWE-bench Verified smoke: **SUCCEEDED** on `swe-bench/swe-bench-verified@2` (1/1 resolved).

## Hot Issues

1. [#7427 web-shell: artifact panel spams "Load artifacts failed: Failed to fetch" on automatic refresh](https://github.com/QwenLM/qwen-code/issues/7427)  
   Open P2 UI bug: the artifact list refreshes automatically and repeatedly shows a fetch error toast. 5 comments; likely affects every long-running `qwen serve` web session.

2. [#9250 qwen serve host writer hard-codes new-file mode 0600](https://github.com/QwenLM/qwen-code/issues/9250)  
   `write_file`, `edit`, and `notebook_edit` ignore umask and have no config option. Community interest is immediate because this is an operational/security footgun for ACP-hosted workflows. 4 comments.

3. [#9219 /review presubmit overlap matching is exact-line only](https://github.com/QwenLM/qwen-code/issues/9219)  
   Multi-line ranges and semantically duplicate findings are not detected, causing duplicate review comments. P2 but core to review quality. Opened by wenshao after an actual missed duplicate.

4. [#9218 /review presubmit --new-findings rejects the Step 6 findings artifact](https://github.com/QwenLM/qwen-code/issues/9218)  
   A path collision between the skill’s example and the canonical findings artifact makes a late-stage presubmit gate fail after hours of review work. High-impact developer-experience issue.

5. [#9089 autofix: PAT-bearing jobs share a host with untrusted branch code](https://github.com/QwenLM/qwen-code/issues/9089)  
   P1 security concern: autofix PAT steps need runner-level isolation from untrusted code. This is a known class that cannot be fully closed inside a single GitHub Actions step.

6. [#9241 Main CI failed: E2E Tests on e93da9e38732](https://github.com/QwenLM/qwen-code/issues/9241)  
   Another main-branch CI failure with `autofix/approved` and `ready-for-agent`. E2E instability is generating a steady stream of automated issues and PRs.

7. [#9200 "相同的任务，调用相同的本地模块，结果相同，但过程差距一言难尽"](https://github.com/QwenLM/qwen-code/issues/9200)  
   A frustrated user reports inconsistent agent behavior for identical local tasks, comparing Qwen Code unfavorably to an older CLI tool. Needs more info; 4 comments.

8. [#5966 0.19.3 UI不定期错误，中文输入法完全无效](https://github.com/QwenLM/qwen-code/issues/5966)  
   Long-standing Chinese IME usability bug in the TUI. Open since June with `welcome-pr`; still affects users on newer versions.

9. [#9230 Follow-up suggestion side query defeats server-side prefix caching](https://github.com/QwenLM/qwen-code/issues/9230)  
   Main sessions get ~0% prefix cache reuse when servers use prefix caching, plus `enableCacheSharing` is off by default. Direct performance/cost pain for self-hosted users.

10. [#9198 qwen 跑出来oom 问题](https://github.com/QwenLM/qwen-code/issues/9198)  
    OOM on a 1 TB server after a week-long session, plus terminal corruption in tmux. User notes kimi code does not show the same issue; likely memory-growth related.

## Key PR Progress

1. [#9220 fix(ci): self-heal failed checkouts on the reused review runners](https://github.com/QwenLM/qwen-code/pull/9220)  
   Makes runner checkout failures self-healing instead of fatal, preserving the reused self-hosted runner pool.

2. [#9215 fix(review): give duplicate-dropped Suggestions their own compose state and body sentence](https://github.com/QwenLM/qwen-code/pull/9215)  
   Adds a dedicated state for findings confirmed but already present on the PR, fixing silent loss of carried review IDs.

3. [#9222 fix(review): normalize last-gate inputs and anchor mid-line fragments](https://github.com/QwenLM/qwen-code/pull/9222)  
   Directly addresses #9209/#9218: the review pipeline should not reject shapes its own earlier stages produce.

4. [#9249 fix(review): note when --all-chunks fans out a plan whose numbers say 3A](https://github.com/QwenLM/qwen-code/pull/9249)  
   Adds a diagnostic stderr note when `--all-chunks` fans out a plan that is not a territory-fan-out plan.

5. [#9191 feat(review): transfer per-file content verdicts across rebases](https://github.com/QwenLM/qwen-code/pull/9191)  
   Preserves incremental-review savings after force-push by certifying per-file content rather than commit anchors.

6. [#9189 feat(autofix): defer verified out-of-footprint findings to a surviving follow-up queue](https://github.com/QwenLM/qwen-code/pull/9189)  
   Adds a fourth autofix disposition so real findings outside the PR footprint survive as follow-ups instead of being silently dropped.

7. [#9211 fix(review): lock the PR review worktree lease against concurrent sessions](https://github.com/QwenLM/qwen-code/pull/9211)  
   Prevents same-PR reviews from deleting each other’s worktrees mid-run, addressing #9205.

8. [#9228 fix(ci): narrow serve-ab's self-hosted wipe to the A/B checkout dirs](https://github.com/QwenLM/qwen-code/pull/9228)  
   Fixes an over-broad workspace wipe that deleted the shared `.git` history on self-hosted ECS runners.

9. [#9122 feat(web-shell): improve sidebar session management](https://github.com/QwenLM/qwen-code/pull/9122)  
   Adds hover details, folder previews, overflow-aware titles, and clearer running-session state in the sidebar.

10. [#9167 feat(dingtalk): support outbound file delivery](https://github.com/QwenLM/qwen-code/pull/9167)  
    Adds native DingTalk file uploads with workspace/temp-directory validation and media API delivery.

## Feature Request Trends

- **Review pipeline robustness**: Many requests converge on making `/review` more deterministic — typed/composable finding channels, artifact-based convergence checks, topology-aware chunk fan-out, and worktree lease locking.
- **WebShell as a first-class UI**: New Git diff sources/branch switching (#8467), canonical Goal v3 controls (#9087), HTML export refactor (#9186), and better sidebar session management (#9122).
- **Server/daemon operability**: Configurable file permissions (#9250), server-side prefix caching controls (#9230), and bounded ACP buffers (#9007).
- **CI self-healing**: Reused-runner checkout repair (#9220), narrow workspace wipes (#9228), and reducing E2E flakiness.

## Developer Pain Points

- **`/review` failures at the final gate**: Multiple issues show the review pipeline burning hours of compute and then failing on schema mismatches, path collisions, or overlap misses (#9209, #9218, #9208).
- **Concurrent/self-interfering review sessions**: Worktree deletion, mutation probes leaking into shared state, and duplicate-drop logic losing carried IDs (#9205–#9208).
- **Main CI E2E instability**: Repeated overnight CI failures require autofix/agent intervention and delay confidence in main.
- **WebShell/TUI usability regressions**: Artifact panel fetch spam, Chinese IME breakage, clipped `/statusline` dialog, and OOM/tmux corruption remain open across versions.

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale Community Digest — 2026-08-16

## Today's Highlights

No release shipped in the last 24 hours; activity is focused on the v0.9.8 stabilization and hardening cycle. A cluster of PRs closed to unblock CI and restore expected v0.9.x behavior ([#5394](https://github.com/Hmbown/CodeWhale/pull/5394), [#5395](https://github.com/Hmbown/CodeWhale/pull/5395), [#5399](https://github.com/Hmbown/CodeWhale/pull/5399), [#5400](https://github.com/Hmbown/CodeWhale/pull/5400)), while user-facing fixes target provider templates ([#5406](https://github.com/Hmbown/CodeWhale/pull/5406)), session cost fallback ([#5402](https://github.com/Hmbown/CodeWhale/pull/5402)), streaming encoding ([#5404](https://github.com/Hmbown/CodeWhale/pull/5404)), and long-context budgets ([#5405](https://github.com/Hmbown/CodeWhale/pull/5405)). The long-running Chinese translation discussion for "Constitution" also closed with **宪章** as the settled term ([#4949](https://github.com/Hmbown/CodeWhale/issues/4949)).

## Releases

None in the last 24 hours.

## Hot Issues

1. [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) — **Closed** — Chinese translation of "Constitution"  
   17 comments over three weeks. The community settled on **宪章** rather than the politically sensitive **宪法**; the web copy PR now follows that decision.

2. [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) — **Open** — EPIC-005: TUI crate decomposition umbrella  
   Tracking issue for the entire TUI crate decomposition effort. Important for architectural maintainability and for coordinating sub-EPICs/FEATs.

3. [#5374](https://github.com/Hmbown/CodeWhale/issues/5374) — **Open** — [bug] Agent writing weird/corrupted on macOS  
   Streaming output is unreadable on macOS. Root cause is SSE UTF-8 splitting across HTTP/2 DATA; PR [#5404](https://github.com/Hmbown/CodeWhale/pull/5404) implements a fail-closed decoder.

4. [#5350](https://github.com/Hmbown/CodeWhale/issues/5350) — **Open** — Simplify third-party model configuration  
   Users want prefab templates for OpenCode Zen, OpenCode Go, Agnes, and SenseNova, plus a "test connection" button. Directly addressed by PR [#5406](https://github.com/Hmbown/CodeWhale/pull/5406).

5. [#5337](https://github.com/Hmbown/CodeWhale/issues/5337) — **Open** — Finish the web i18n dictionary spine  
   Tech-debt cleanup: retire remaining `isZh` branches and inline `{ en, zh }` modules. Important for locale consistency and maintainability.

6. [#5367](https://github.com/Hmbown/CodeWhale/issues/5367) — **Open** — Configurable model-visible read/tool-result size limits  
   Self-hosted DeepSeek V4 users hit conservative per-result ceilings and extra reads. PR [#5405](https://github.com/Hmbown/CodeWhale/pull/5405) exposes these limits as options.

7. [#5322](https://github.com/Hmbown/CodeWhale/issues/5322) — **Closed** — Regression: output area doesn't fill wide terminals  
   v0.9.x capped transcript width, regressing v0.8.65 behavior. Fixed by PR [#5400](https://github.com/Hmbown/CodeWhale/pull/5400).

8. [#5060](https://github.com/Hmbown/CodeWhale/issues/5060) — **Closed** — Workflow search re-hardcodes 16-worker ceiling  
   Requests reading the live Fleet concurrency seam and surfacing the resolved limit in run receipts. Important for operator visibility.

9. [#5241](https://github.com/Hmbown/CodeWhale/issues/5241) — **Open** — Pricing endpoint returns 503; all sessions show `unverified_live_pricing`  
   Cost display broke after upgrading to v0.9.3 across all providers. PR [#5402](https://github.com/Hmbown/CodeWhale/pull/5402) adds an honest fallback path.

10. [#5410](https://github.com/Hmbown/CodeWhale/issues/5410) — **Open** — Allow configuring additional roots in bwrap sandbox  
    Zig development fails with "access denied" because `/dev/null` redirection and system library linking are blocked. Requests configurable sandbox roots.

## Key PR Progress

1. [#5407](https://github.com/Hmbown/CodeWhale/pull/5407) — **Open** — v0.9.8: finish the assigned cut  
   Lands the v0.9.8 final lane onto `main`, preserves session-shell geometry, and avoids the wrong tag target.

2. [#5406](https://github.com/Hmbown/CodeWhale/pull/5406) — **Open** — feat(tui): prefab provider templates and test-connection  
   Implements [#5350](https://github.com/Hmbown/CodeWhale/issues/5350). Built-in templates for OpenCode Zen, OpenCode Go, Agnes, and SenseNova; users only enter an API key.

3. [#5402](https://github.com/Hmbown/CodeWhale/pull/5402) — **Open** — fix(tui): restore session cost when live pricing is unverifiable  
   Fixes [#5241](https://github.com/Hmbown/CodeWhale/issues/5241). No longer leaves cost stuck at `unverified_live_pricing` when the pricing endpoint returns 503.

4. [#5404](https://github.com/Hmbown/CodeWhale/pull/5404) — **Open** — fix(client): fail closed on SSE UTF-8 split across HTTP/2 DATA  
   Fixes [#5374](https://github.com/Hmbown/CodeWhale/issues/5374). Prevents garbled streaming agent text on macOS/DeepSeek Flash.

5. [#5405](https://github.com/Hmbown/CodeWhale/pull/5405) — **Open** — feat(tui): configurable model-visible read/tool-result budgets  
   Implements [#5367](https://github.com/Hmbown/CodeWhale/issues/5367). Gives self-hosted long-context models optional larger per-result budgets.

6. [#5401](https://github.com/Hmbown/CodeWhale/pull/5401) — **Open** — fix: CodeQL Highs and prepare GHSA-8hp3 / GHSA-3mgh  
   Security-only slice: fixes CodeQL findings and prepares advisories without tagging or publishing v0.9.8.

7. [#5399](https://github.com/Hmbown/CodeWhale/pull/5399) — **Closed** — fix(tui): v0.9.8 stabilization  
   Reconstructs missing Rust stabilization: turn-owned default direct subagents, compaction quality, and Blue Stage web. No version bump or unrelated features.

8. [#5400](https://github.com/Hmbown/CodeWhale/pull/5400) — **Closed** — fix(tui): fill transcript to full terminal width  
   Closes [#5322](https://github.com/Hmbown/CodeWhale/issues/5322). Restores v0.8.65 full-width behavior on wide terminals and tmux panes.

9. [#5395](https://github.com/Hmbown/CodeWhale/pull/5395) — **Closed** — fix(ci): stop cancel-in-progress from killing concurrent main pushes  
   Fixes hidden CI failures: concurrent `main` pushes no longer cancel each other, so failing assertions actually surface.

10. [#5394](https://github.com/Hmbown/CodeWhale/pull/5394) — **Closed** — fix: unred v0.9.8 provider-count assertions and Google ModelRegistry drift  
    Unblocks `main` by updating stale provider-count assertions and fixing the provider registry drift left after the v0.9.8 provider additions.

## Hot Discussions

### Q&A

- [#5386](https://github.com/Hmbown/CodeWhale/discussions/5386) — **Behavioural shift? How much? And why?**  
  A user asks whether the recent behavioral shift comes primarily from DeepSeek-v4-Flash upgrades or CodeWhale changes. Highlights community uncertainty about attribution across model and tool updates.

### Ideas

- [#2748](https://github.com/Hmbown/CodeWhale/discussions/2748) — **不要 Web 界面，可以直接开发 app 页面 exe**  
  Request for a native desktop/EXE application instead of a Web UI. Low engagement but still an open product-direction signal.

## Feature Request Trends

- **Simplified third-party model onboarding**: pre-filled provider templates, "test connection" buttons, and embedded documentation ([#5350](https://github.com/Hmbown/CodeWhale/issues/5350), [#5406](https://github.com/Hmbown/CodeWhale/pull/5406)).
- **Configurable limits for self-hosted/long-context models**: model-visible tool-result budgets ([#5367](https://github.com/Hmbown/CodeWhale/issues/5367)), sandbox root configuration ([#5410](https://github.com/Hmbown/CodeWhale/issues/5410)), and workflow search concurrency seams ([#5060](https://github.com/Hmbown/CodeWhale/issues/5060)).
- **i18n consistency**: settling canonical terminology and removing locale branches ([#4949](https://github.com/Hmbown/CodeWhale/issues/4949), [#5337](https://github.com/Hmbown/CodeWhale/issues/5337)).
- **Native packaging**: an open idea asks for a non-Web, executable desktop app ([#2748](https://github.com/Hmbown/CodeWhale/discussions/2748)).

## Developer Pain Points

- **Repeated red CI on `main`**: stale provider-count assertions ([#5383](https://github.com/Hmbown/CodeWhale/issues/5383)), cross-platform failures ([#5403](https://github.com/Hmbown/CodeWhale/issues/5403)), and macOS symlink test failures ([#5392](https://github.com/Hmbown/CodeWhale/issues/5392)).
- **Streaming/garbled output on macOS**: UTF-8 corruption in agent-written text ([#5374](https://github.com/Hmbown/CodeWhale/issues/5374)).
- **Broken cost display after upgrades**: pricing endpoint 503 leaves all sessions `unverified_live_pricing` ([#5241](https://github.com/Hmbown/CodeWhale/issues/5241)).
- **Terminal layout regressions**: transcript area no longer fills wide terminals in v0.9.x ([#5322](https://github.com/Hmbown/CodeWhale/issues/5322)).
- **Third-party provider setup friction**: manual Base URL/model/key configuration and confusing `not checked` / `cache failed` states ([#5350](https://github.com/Hmbown/CodeWhale/issues/5350)).
- **Sandbox blocking legitimate build tools**: bwrap restrictions break `/dev/null` redirection and system library linking for Zig users ([#5410](https://github.com/Hmbown/CodeWhale/issues/5410)).

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*