# AI CLI Tools Community Digest 2026-08-26

> Generated: 2026-08-26 00:00 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report — 2026-08-26

## 1. Ecosystem Overview

The AI CLI ecosystem is in a high-velocity maturation phase: the tracked projects shipped 11 releases in 24 hours, while community feedback concentrated on Windows packaging, MCP authentication, agent lifecycle trust, and terminal UX regressions. Claude Code, OpenAI Codex, and Gemini CLI are investing heavily in enterprise reliability and governance, while OpenCode, Pi, and CodeWhale are differentiating on provider neutrality, extension flexibility, and headless/supervised operation. The most consistent cross-tool theme is that small reliability issues — file locks, scroll-wheel regressions, misleading success statuses, and MCP token handling — generate outsized community frustration. DeepSeek Harness showed no activity in this window.

## 2. Activity Comparison

Counts reflect items surfaced in each project’s digest, not full repository totals. No `N/A` entries are present because no digest indicated that Issues/PRs were disabled.

| Tool | Issues (reported) | PRs (reported) | Discussions | Releases (24h) |
|---|---|---|---|---|
| Claude Code | 10 hot | 1 | — | 2 stable |
| OpenAI Codex | 10 hot | 10 | 8 | 3 alpha |
| Gemini CLI | 10 hot | 10 | — | 1 stable + 1 preview + 1 nightly |
| Copilot CLI | 42 updated | 0 | — | 1 stable |
| OpenCode | 10 hot | 10 | — | 1 stable |
| Pi | 50 updated | 33 | 1 | 0 |
| Qwen Code | 10 hot + 2 notable | 15 | — | 1 nightly |
| CodeWhale | 10 hot | 10 | — | 0 |
| DeepSeek Harness | 0 | 0 | 0 | None |

`—` = no discussion activity was surfaced in the digest; the channel may still exist.

## 3. Shared Feature Directions

- **Windows reliability and cross-platform parity**  
  Visible across Claude Code (MSIX/AppX file locks, always-on-top), Codex (workspace terminal failures, missing settings), Gemini CLI (longpaths, privileged test failures), Copilot CLI (worktree archive file lock), Pi (Windows support survey, PowerShell inconsistency), Qwen (red Windows CI, MCP over SSE hangs), and CodeWhale (Windows write-claims, path parsing). The common demand is stable packaging, file-lock handling, and CI enforcement on Windows.

- **MCP governance and authentication**  
  Codex is adding enterprise IdP OAuth and per-attachment MCP permissions; Gemini is hardening MCP OAuth discovery against SSRF and consent bypass; Copilot CLI hit a token-injection regression; OpenCode wants MCP setup in the Desktop app; Qwen reports MCP SSE hangs; CodeWhale reports MCP OAuth expiry looking like a server failure. The trend is clear: MCP is production-critical, and auth, transport, and least-privilege controls are the main bottlenecks.

- **Truthful agent lifecycle and state reporting**  
  Gemini subagents report `GOAL` success after hitting `MAX_TURNS`; Qwen’s loop detection kills legitimate verification cycles; CodeWhale collapses `Degraded` workflow owners into `Completed`; Codex scheduled tasks silently disable themselves; Claude Code worktree GC deletes dirty worktrees. Developers want explicit state machines, durable receipts, and no misleading success signals.

- **Context, compaction, and token transparency**  
  Claude Code needs proactive autocompact; Codex users request 1M context; Gemini is exploring AST-aware reads; Pi fixed `tool_choice` during compaction; Qwen has compression trust issues; OpenCode is improving context arithmetic; CodeWhale wants a structured compaction survival contract. The shared need is deterministic, observable, and token-frugal context management.

- **TUI and terminal UX debt**  
  Claude Code has scroll-wheel regressions; Gemini shell commands stay stuck on “Waiting input”; Copilot users still want vi mode; OpenCode has IME and freeze issues; Pi has streaming row corruption; Qwen is migrating from ink to OpenTUI; CodeWhale surfaces update only at turn boundaries. Small terminal regressions consistently generate strong negative feedback.

- **Autonomous and supervised operation**  
  Claude Code’s message-queue request and proactive autocompact complaints, Codex’s scheduled-task reliability issues, Qwen’s silent cron tasks, and CodeWhale’s control socket/lifecycle outbox all point toward headless, supervised, restart-safe agent operation as a major strategic direction.

## 4. Differentiation Analysis

| Tool | Primary focus | Target users | Technical approach |
|---|---|---|---|
| Claude Code | Enterprise safety, permissions, hooks, policy control | Claude.ai orgs and enterprise developers | Stable CLI + IDE + desktop; conservative maintenance releases |
| OpenAI Codex | Agentic coding at scale, telemetry, remote executors | OpenAI power users, desktop/app users | Rust-based app + CLI + cloud; rapid alpha cadence |
| Gemini CLI | Multi-agent orchestration, extensions, browser agent | Google/Gemini users, Cloud Workstations | CLI + IDE companion; active security hardening |
| Copilot CLI | GitHub-native terminal workflows, MCP/plugins | GitHub developers | Lightweight CLI; plugins dashboard; stable release |
| OpenCode | Provider-agnostic TUI/Desktop, broad model support | OSS community, self-hosters, BYO-model users | Node/TS; fast provider expansion and community features |
| Pi | Correctness-focused terminal agent, extension system | Terminal purists, extension developers | High PR velocity; provider adapters; compaction/streaming fixes |
| Qwen Code | Qwen model ecosystem, web shell, review pipelines | Qwen users, CJK and global developers | Nightly releases; Web Shell + CLI; active `/review` tooling |
| CodeWhale | DeepSeek-adjacent but moving provider-neutral; headless/supervised ops | Multi-agent operations, Rust/TUI enthusiasts | Rust TUI crate decomposition; lifecycle outbox and control socket |

## 5. Community Momentum & Maturity

- **Claude Code** remains the most mature enterprise entry, but its largest thread (155 comments) is a trust issue around cyber-safeguard false positives. The community is highly engaged on Windows packaging and TUI regressions.
- **OpenAI Codex** has the widest surface area and fastest large-tool cadence: three alpha releases and ten PRs in 24 hours. The 953-👍 Linux desktop request signals strong pent-up demand, while Windows/session-state bugs temper confidence.
- **Pi** has exceptional PR intensity for its size — 33 PRs and 50 issues updated — with focused correctness work across streaming, compaction, and provider compatibility.
- **OpenCode** is iterating quickly across providers and Desktop features, but auto-updater resource exhaustion, stuck sessions, and provider-specific failures indicate growth-pain-level reliability issues.
- **Gemini CLI** is actively triaging P1 hangs and subagent misreporting while shipping security-focused PRs; momentum is steady rather than explosive.
- **Copilot CLI** shipped a notable GA feature (plugins dashboard) but had zero PRs in the digest and is absorbing release regressions, so momentum is moderate.
- **Qwen Code** is very active in PRs (15) and nightly releases, especially around Web Shell and review tooling, but Windows CI and session-breaking regressions remain open risk areas.
- **CodeWhale** is quieter in community volume but architecturally converging toward v0.9.12 with a 72-commit integration branch and supervised-operation groundwork.
- **DeepSeek Harness** is dormant in this window.

## 6. Trend Signals

1. **Windows support is a competitive differentiator.** Nearly every tool reports Windows packaging, file-lock, path, or CI pain. A reliable Windows story is now a core adoption driver, not a nice-to-have.

2. **MCP is moving from experiment to production, and governance is the bottleneck.** Enterprise OAuth, SSRF prevention, per-server permissions, token stability, and transport reliability are where maintainers are investing and where users feel the pain.

3. **Agents must report truthfully.** Misleading success statuses, silent loop kills, and collapsed failure states are trust killers. Explicit lifecycle contracts, durable receipts, and subagent observability are emerging as required features.

4. **Context management is becoming a product surface.** Users no longer accept opaque compaction. They want proactive autocompact, AST-aware reads, accurate context arithmetic, and compaction survival contracts.

5. **Autonomy needs supervision.** Scheduled tasks, lifecycle outboxes, control sockets, and `/relaunch` signals point to a future where agent CLIs run unattended under external supervisors. Reliability of those paths matters more than new model features.

6. **Provider lock-in is being actively resisted.** CodeWhale’s audit of DeepSeek-only gates, OpenCode’s provider expansion, Pi’s new providers, and Qwen’s OpenAI-compatible provider presets all show that neutral provider adapters are becoming a baseline expectation.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data source:** github.com/anthropics/skills | **Snapshot:** 2026-08-26

---

## 1. Top Skills Ranking

The following PRs attracted the most discussion. All remain **open** as of the snapshot.

### #1298 — fix(skill-creator): run_eval.py evaluation overhaul
[PR #1298](https://github.com/anthropics/skills/pull/1298) · Author: MartinCajiao
The most-discussed PR in the repository. It addresses the widely reproduced `run_eval.py` failure where every skill description scores `recall=0%` — meaning the skill-optimization loop is "optimizing against noise" (see [Issue #556](https://github.com/anthropics/skills/issues/556), 10+ independent reproductions). The fix installs the eval artifact as a real skill and also repairs Windows stream reading, trigger detection, and parallel workers. **Status:** Open; long-running, active thread spanning June 2026.

### #514 — Add document-typography skill
[PR #514](https://github.com/anthropics/skills/pull/514) · Author: PGTBoos
A quality-control skill targeting typographic defects in AI-generated documents: orphan word wrap (1–6 words spilling to the next line), widow paragraph headers stranded at page bottoms, and numbering misalignment. Discussion centers on the fact that these defects affect essentially every document Claude generates. **Status:** Open.

### #1615 — Add scnet-hpc skill
[PR #1615](https://github.com/anthropics/skills/pull/1615) · Author: lql341
An operations skill for SCNet HPC clusters: profile-based SSH setup, Slurm job generation, partition/memory/module guidance, cluster discovery, and compute-node interaction. Represents a growing cluster of PRs targeting scientific/enterprise infrastructure. **Status:** Open (created 2026-08-20; active).

### #486 — Add ODT skill (OpenDocument text + template filling + HTML conversion)
[PR #486](https://github.com/anthropics/skills/pull/486) · Author: GitHubNewbie0
Adds creation, filling, reading, and conversion of OpenDocument files (`.odt`, `.ods`) with explicit trigger terms ("ODT", "ODS", "ODF", "OpenDocument", "LibreOffice"). Discussion reflects the demand for open-format alternatives to the existing DOCX/PDF skills. **Status:** Open.

### #210 — Improve frontend-design skill clarity and actionability
[PR #210](https://github.com/anthropics/skills/pull/210) · Author: justinwetch
A revision of the existing `frontend-design` skill, focused on ensuring every instruction is executable within a single conversation and specific enough to steer behavior without ambiguity. A model for how the community wants skills written: operational instructions, not human-oriented documentation (echoing [Issue #202](https://github.com/anthropics/skills/issues/202)). **Status:** Open.

### #1628 — Add Hivemind: zero-cost multi-agent orchestration
[PR #1628](https://github.com/anthropics/skills/pull/1628) · Author: Hanishchow
Lets Claude Code delegate mechanical work to headless [opencode](https://opencode.ai) workers running on free models while Claude remains the sole planner/reviewer/merger. The core argument: "the expensive model's context is the scarce resource, not its intelligence." **Status:** Open (created 2026-08-21; very recent).

### #1367 — feat(skills): add self-audit (mechanical verification + reasoning quality gate)
[PR #1367](https://github.com/anthropics/skills/pull/1367) · Author: YuhaoLin2005
A universal delivery-audit skill: **Step 0** mechanically verifies every claimed output file exists, then a four-dimension reasoning audit runs in damage-severity order. Companion proposal at [Issue #1385](https://github.com/anthropics/skills/issues/1385). **Status:** Open.

### #723 — Add testing-patterns skill
[PR #723](https://github.com/anthropics/skills/pull/723) · Author: 4444J99
A comprehensive testing skill: Testing Trophy philosophy, unit-testing (AAA, naming, pure functions), React component testing with Testing Library, and guidance on what *not* to test. **Status:** Open.

---

## 2. Community Demand Trends (from Issues)

1. **Skill evaluation & quality tooling** — The loudest demand. [Issue #556](https://github.com/anthropics/skills/issues/556) (`run_eval.py` never triggers skills, 12 comments) and [Issue #1390](https://github.com/anthropics/skills/issues/1390) (`mcp-builder` evaluation scores 0/N) show the community wants trustworthy, reproducible evaluation harnesses before submitting or optimizing skills.

2. **Security & trust boundaries** — [Issue #492](https://github.com/anthropics/skills/issues/492) (43 comments, highest in repo) exposes that community skills distributed under the `anthropic/` namespace can impersonate official skills and trick users into granting elevated permissions. Related: [Issue #1175](https://github.com/anthropics/skills/issues/1175) on access-control logic inside SKILL.md for SharePoint workloads.

3. **Skill management & distribution** — [Issue #228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) requests org-wide sharing in Claude.ai; [Issue #62](https://github.com/anthropics/skills/issues/62) reports skills silently disappearing; [Issue #189](https://github.com/anthropics/skills/issues/189) flags duplicate skills when installing both `document-skills` and `example-skills`.

4. **Meta-skills & agent architecture** — [Issue #1385](https://github.com/anthropics/skills/issues/1385) proposes a three-gate reasoning quality pipeline; [Issue #1329](https://github.com/anthropics/skills/issues/1329) proposes `compact-memory` (symbolic notation for compact agent state); [Issue #412](https://github.com/anthropics/skills/issues/412) proposed agent-governance safety patterns; [Issue #16](https://github.com/anthropics/skills/issues/16) asks to expose Skills as MCPs.

5. **Enterprise & platform-specific skills** — Sustained demand for domain skills: ServiceNow platform ([PR #568](https://github.com/anthropics/skills/pull/568)), SAP-RPT-1-OSS predictive analytics ([PR #181](https://github.com/anthropics/skills/pull/181)), HPC clusters ([PR #1615](https://github.com/anthropics/skills/pull/1615)), AWS Bedrock compatibility ([Issue #29](https://github.com/anthropics/skills/issues/29)), and document engineering across DOCX/ODT/PDF ([Issue #12](https://github.com/anthropics/skills/issues/12), [PR #538](https://github.com/anthropics/skills/pull/538), [PR #541](https://github.com/anthropics/skills/pull/541)).

---

## 3. High-Potential Pending Skills (Open, Active Discussion)

These PRs are not yet merged but carry meaningful discussion momentum and may land soon:

| Skill | PR | Why it stands out |
|---|---|---|
| **document-typography** | [PR #514](https://github.com/anthropics/skills/pull/514) | Fixes a universal problem in AI-generated documents; complementary to the official document skills |
| **odt** | [PR #486](https://github.com/anthropics/skills/pull/486) | Fills the open-format gap next to DOCX/PDF |
| **Hivemind** | [PR #1628](https://github.com/anthropics/skills/pull/1628) | Novel cost-reduction architecture; fresh and actively discussed |
| **self-audit** | [PR #1367](https://github.com/anthropics/skills/pull/1367) | Directly answers the community's quality-assurance demand; has a companion proposal issue |
| **testing-patterns** | [PR #723](https://github.com/anthropics/skills/pull/723) | Broad coverage of the testing stack; roadmap-style contribution |
| **servicenow** | [PR #568](https://github.com/anthropics/skills/pull/568) | Large enterprise surface (ITSM, ITOM, SecOps, CSDM, IntegrationHub); long discussion window |
| **pyxel** | [PR #525](https://github.com/anthropics/skills/pull/525) | Creative/game-dev niche with an existing MCP server; maintained by the Pyxel author |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **trustworthy skill infrastructure** — fixing broken evaluation harnesses (`run_eval.py`, `evaluation.py`), closing security/namespace trust gaps, and adding verification/quality gates — before expanding into document engineering and enterprise platform coverage (ServiceNow, SAP, HPC, ODT).

---

# Claude Code Community Digest — 2026-08-26

## Today's Highlights

Two maintenance releases shipped: v2.1.245 fixes a Linux startup crash on glibc 2.44 distributions, and v2.1.246 adds a safety warning for permissive Bash allow rules plus an Auto mode tab in `/permissions`. Community attention is concentrated on Windows/MSIX reliability and long-running TUI regressions; the most active issue remains #84352, with 155 comments about an approved Claude.ai organization still receiving cyber-safeguard blocks.

## Releases

- [v2.1.246](https://github.com/anthropics/claude-code/releases) — Added a startup warning for Bash allow rules with a wildcard before the subcommand (e.g. `Bash(git * main)`), since they also match options inserted before the subcommand. Added an Auto mode tab to `/permissions` for viewing and editing auto mode classifier rules. An additional TUI-related change was included but its description is truncated in the source feed.
- [v2.1.245](https://github.com/anthropics/claude-code/releases) — Fixed a startup crash on Linux distributions shipping glibc 2.44, including Arch Linux, CachyOS, and Fedora Rawhide.

## Hot Issues

1. **[#84352 — CVP-approved organization still receives cyber safeguard blocks](https://github.com/anthropics/claude-code/issues/84352)**  
   A Claude.ai org with prior Cyber Verification Program approval is still blocked in Claude Code; the Verification Portal shows the application as “Under review.” 155 comments make this the most active issue in the batch — a major trust/reliability concern for enterprise workflows.

2. **[#50246 — Message queue mode for interrupting active tasks](https://github.com/anthropics/claude-code/issues/50246)**  
   Heavily upvoted feature request (199 👍) asking for queued user messages instead of forcing mid-task interruptions. The issue is closed, but the demand signals ongoing community interest in non-blocking interaction.

3. **[#65833 — Scroll wheel no longer scrolls conversation in TUI on WSL](https://github.com/anthropics/claude-code/issues/65833)**  
   Regression since v2.1.150: wheel input sends arrow keys through the prompt instead of scrolling output. 41 comments and 99 👍 show how disruptive small TUI regressions are for daily terminal users.

4. **[#85891 — Claude Desktop window always-on-top on Windows 11](https://github.com/anthropics/claude-code/issues/85891)**  
   Windows users report the desktop window cannot be pushed behind other apps, with no setting to disable it. Likely a Windows counterpart to the macOS issue #66516.

5. **[#85901 — MSIX missing CodeIntegrity.cat causes AppX container destruction](https://github.com/anthropics/claude-code/issues/85901)**  
   Shipped MSIX lacks `AppxMetadata\CodeIntegrity.cat`; `vk_swiftshader.dll` is blocked and the AppX container is destroyed with 0x3CFC. 11 comments; potential data-loss implications around Claude Desktop packaging.

6. **[#73694 — AppX update fails because CoworkVMService holds a package file lock](https://github.com/anthropics/claude-code/issues/73694)**  
   Windows AppX updates fail with 0x80073d02 because `cowork-svc.exe` keeps `CoworkVMService` files locked, preventing clean relaunch/update.

7. **[#77509 — Autocompact never fires proactively at the context edge](https://github.com/anthropics/claude-code/issues/77509)**  
   Autonomous/headless sessions park when hitting the context edge because autocompact only runs at the next user turn. Affects Agent SDK and desktop background-agent workflows.

8. **[#74719 — Worktree GC deletes dirty and unpushed agent worktrees](https://github.com/anthropics/claude-code/issues/74719)**  
   Native worktree cleanup is documented as clean+pushed-only, but real subagent worktrees containing uncommitted/unpushed work were deleted. A serious data-loss bug for agent isolation workflows.

9. **[#78027 — Injected grep wrapper consumes 20+ GB RAM on bounded-repeat regex](https://github.com/anthropics/claude-code/issues/78027)**  
   The bundled ugrep-backed `grep` wrapper has catastrophic memory behavior on bounded-repeat regex patterns, hard-freezing machines. High-impact performance bug.

10. **[#89464 — CLAUDE.md prohibitions don’t catch incremental drift](https://github.com/anthropics/claude-code/issues/89464)**  
    New report that standing “never do X, always delegate X” instructions fail to trigger when the model crosses the line incrementally — no single step is large enough to activate the rule.

## Key PR Progress

Only one PR appeared in the last 24h window:

- **[#89404 — validate-agent.sh: don’t abort at the first warning and stop false-flagging valid agents](https://github.com/anthropics/claude-code/pull/89404)**  
  Fixes public issue #83803. The plugin-dev skill’s `validate-agent.sh` failed when validating its own agent files due to `set -euo pipefail` interactions: `((warning_count++))` / `((error_count++))` can evaluate as a non-zero exit status, aborting the script at the first warning or error. This PR fixes both the abort behavior and false failures for valid agents.

## Feature Request Trends

- **Non-interruptive and autonomous session controls** — The message queue mode request (#50246) and proactive autocompact expectations (#77509) both point to a desire for stronger background/autonomous task management.
- **IDE/UI parity with the terminal CLI** — Developers want the active model shown in VS Code (#74349) and custom `statusLine` rendered in the VS Code extension panel (#77829), matching features that already exist in the terminal TUI.
- **Context-aware rules and permissions** — Requests like prompt-topic triggers for `.claude/rules/` (#87804) and the new Auto mode classifier tab in v2.1.246 show demand for rules that adapt to conversation subjects, not just file paths.
- **Safety around permissive Bash rules** — The v2.1.246 warning for wildcard-before-subcommand allow rules addresses a real footgun pattern, likely generated from community reports about over-matching Bash permissions.

## Developer Pain Points

- **Windows packaging/MSIX instability** — Recurring issues include always-on-top windows (#85891), update file locks (#73694), missing code-integrity metadata (#85901), package servicing killing background agents (#82277), and Cowork VM teardown/recovery problems (#81874).
- **TUI regressions and input handling** — Scroll wheel breaks (#65833), no text selection support (#80734), SGR mouse mode leaking after TUI exit (#79015), Escape handling conflicts with `/usage` (#86491), and `prefersReducedMotion` freezing the working indicator (#85972) all show ongoing terminal UX debt.
- **Policy false positives** — Both cyber-safeguard blocks on approved orgs (#84352) and Usage Policy false positives on public agricultural safety data (#89354) are eroding trust in Anthropic’s safety/usage controls.
- **Inconsistent hook and rules enforcement** — User-level `PreToolUse` hooks silently not firing for Task-spawned subagents (#88441), and `CLAUDE.md` rules failing on incremental drift (#89464), frustrate users relying on deterministic guardrails.
- **Resource and network stability** — The ugrep memory blowup (#78027) and ECONNRESET failures with bundled Node v26.3.0 on Windows (#89663) highlight stability concerns beyond feature gaps.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-26

## Today’s Highlights

Codex shipped three new Rust alpha releases (`v0.150.0-alpha.9`, `.10`, `.11`) in the last 24 hours, although no detailed changelogs were attached. The tracker remains dominated by Windows reliability complaints, while a large batch of merged PRs landed around MCP OAuth/enterprise auth, telemetry, and remote executors. The most passionate community item is still the long-running request for a Linux desktop app (#11023) with 953 👍 and 209 comments.

## Releases

Published in the last 24h:

- **rust-v0.150.0-alpha.9**
- **rust-v0.150.0-alpha.10**
- **rust-v0.150.0-alpha.11**

No additional changelog details were included in the release notes beyond the version names.

## Hot Issues

- **[#11023: Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)** — The most-liked open request area: Linux desktop support. Although closed, it still has 953 👍 and 209 comments, showing very high demand for a native Linux Codex app.
- **[#38350: Recurring scheduled tasks disable themselves after successful runs](https://github.com/openai/codex/issues/38350)** — A serious automation reliability bug: scheduled tasks change to paused without user action. 40 comments suggest it is affecting many workflow-automation users.
- **[#13018: Allow deleting threads in the Codex app](https://github.com/openai/codex/issues/13018)** — Users want a true delete instead of archiving. 105 👍 and 29 comments make this one of the most-requested app UX improvements.
- **[#28919: Windows app missing “control other devices” tab](https://github.com/openai/codex/issues/28919)** — Windows users cannot see the remote/device-control settings available on other platforms. 44 comments and 42 👍 indicate real cross-platform parity frustration.
- **[#25179: Codex app accumulates stale subagents in cache/UI](https://github.com/openai/codex/issues/25179)** — Long-running sessions leave stale subagents that cannot be closed reliably. This is a core pain point for complex agentic workflows.
- **[#40715: Windows stable app fails with “invalid transport in mcp_servers.codex_app”](https://github.com/openai/codex/issues/40715)** — A regression where stable 26.820.60940 rejects MCP configs that work in Beta, with 16 comments and a clear reproduction.
- **[#17598: Native subagent orchestration fails with non-OpenAI custom providers](https://github.com/openai/codex/issues/17598)** — Users on custom model providers cannot use native subagents correctly, limiting Codex as a provider-agnostic agent runner.
- **[#39841: Workspace terminal fails with “setup refresh had errors”](https://github.com/openai/codex/issues/39841)** — Terminal commands cannot start in the Codex workspace on Windows 11, blocking basic local work.
- **[#30385: Local project threads missing from sidebar/search on Windows](https://github.com/openai/codex/issues/30385)** — Threads exist on disk and in `session_index.jsonl`, but disappear from the UI. This kind of index/UI desync is especially confusing for daily users.
- **[#31868: Support optional 1M context for GPT-5.6 in Codex](https://github.com/openai/codex/issues/31868)** — Follow-up request for 1M-token context support across app, CLI, and IDE extension, with 22 👍.

## Key PR Progress

- **[#40739: Add enterprise IdP identity resolution for MCP OAuth](https://github.com/openai/codex/pull/40739)** — Resolves enterprise IdP sessions against MCP authorization metadata and binds OIDC claims, improving enterprise MCP auth.
- **[#40722: Add enterprise ID-JAG exchange for MCP OAuth](https://github.com/openai/codex/pull/40722)** — Adds non-interactive exchange of enterprise ID-JAG tokens for resource-bound MCP bearer tokens.
- **[#40737: Preserve MCP tool output as content items](https://github.com/openai/codex/pull/40737)** — Converts unstructured MCP results into typed function-call output items instead of serializing whole content arrays into text.
- **[#40728: Honor attachment-owned permissions for MCP servers](https://github.com/openai/codex/pull/40728)** — MCP servers attached to executor environments now keep their owner permission profiles instead of inheriting thread-wide sandbox authority.
- **[#40736: Run exec-server compatibility tests under Bazel](https://github.com/openai/codex/pull/40736)** — Adds Bazel test coverage for Noise relay compatibility across current, released, and minimum-supported Codex binaries.
- **[#40713: Sanitize credentials from Git remote metadata](https://github.com/openai/codex/pull/40713)** — Important security fix: removes usernames, passwords, and tokens embedded in Git remote URLs before they enter turn/thread metadata.
- **[#40710: Add explicit remote executor connection refresh](https://github.com/openai/codex/pull/40710)** — Enables fresh remote executor sessions without waiting on old transient-disconnect recovery.
- **[#40716: Add thread ownership metadata for managed worktrees](https://github.com/openai/codex/pull/40716)** — Binds linked worktrees to threads via `codex-thread.json` in Git metadata with idempotent writes.
- **[#40726: Add telemetry for SQLite log persistence](https://github.com/openai/codex/pull/40726)** — Provides visibility into batch size, write latency, failures, and dropped entries for SQLite logging.
- **[#40735: Use model info accessor for skill telemetry](https://github.com/openai/codex/pull/40735)** — Standardizes model slug reporting for explicit and implicit skill invocation telemetry.

## Hot Discussions

### Ideas
- **[#40291: Fixed-price high-usage individual plan for Codex](https://github.com/openai/codex/discussions/40291)** — Users want a predictable high-usage tier instead of constantly watching rate limits during long agentic work.

### Q&A
- **[#40740: Does rollout tracing capture which path produced a Declined exec status?](https://github.com/openai/codex/discussions/40740)** — Deep-dive question about `rollout/src/policy.rs` persistence and why certain approval/guardian events are excluded from protocol traces.

### General
- **[#40707: 5-hour limit is back](https://github.com/openai/codex/discussions/40707)** — Users prefer the weekly-only usage window; the return of the 5-hour rolling limit is disrupting intensive coding days.

### Show and tell
- **[#40689: Game-design Codex skills](https://github.com/openai/codex/discussions/40689)** — Open-source collection of Codex skills for turning rough game ideas into testable prototypes.
- **[#40615: Public-issue evidence Action built with Codex](https://github.com/openai/codex/discussions/40615)** — A GitHub Action that creates deterministic factual snapshots of public issues before decisions are made.
- **[#40593: AgentMemory for Codex on Windows](https://github.com/openai/codex/discussions/40593)** — Source-only preview enabling project-scoped recall for Windows Codex users.
- **[#40538: CodexDashboard](https://github.com/openai/codex/discussions/40538)** — Community dashboard for exploring local Codex sessions by timeframe, project, and model.
- **[#25653: Review packet for AI-written PRs](https://github.com/openai/codex/discussions/25653)** — Proposal for structured review evidence around agent-authored PRs.

## Feature Request Trends

- **Linux and cross-platform parity** — The Linux desktop app request (#11023) still has the strongest community signal, and Windows users keep filing parity gaps.
- **Thread/session lifecycle control** — Users repeatedly ask for deleting threads (#13018), closing stale subagents (#25179, #37041), and preventing deleted conversations from reappearing (#40219).
- **Flexible context and usage limits** — Requests include optional 1M context (#31868), a fixed-price high-usage plan (#40291), and removal of the 5-hour rolling limit (#40707).
- **Automation reliability** — Scheduled tasks disabling themselves (#38350) undermines trust in Codex automations and is a clear reliability priority.

## Developer Pain Points

- **Windows app instability is the top recurring issue** — Startup failures (#40700), crashes in browser/workspace processes (#40711), workspace terminal failures (#39841), sandbox recovery errors (#39251), and missing settings tabs (#28919) are all frequent.
- **Session/data integrity problems** — Stale subagents (#25179), missing project threads (#30385), server-deleted conversations reappearing (#40219), and even repeated JSONL rollback loss on macOS (#38076) point to deeper persistence/state issues.
- **CLI edge-case reliability** — The CLI can fail to boot when telemetry SQLite is locked (#35555), project hooks are silently ignored in git worktrees (#27133), and trusted hooks are skipped in `codex exec` without bypass flags (#32491).
- **Update cadence fatigue** — Users complain the Codex desktop app updates too frequently, with repeated prompts disrupting daily work (#30122).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-26

## Today's Highlights

The project shipped three releases in the last 24 hours, headlined by the **v0.57.0 stable** release that fixes Cloud Workstations OAuth flows and IDE connection directory mismatches, plus a **v0.58.0-preview.0** with symlink-aware ignore path handling. The open issue backlog shows maintainers actively triaging long-standing agent reliability bugs, while the PR queue is dominated by security hardening: SSRF protection in MCP OAuth discovery, A2A server authentication fixes, and consent checks for extension-driven environment changes. Several high-comment issues — subagent recovery misreported as success, generalist agent hangs, and shell commands stuck on "Waiting input" — remain at P1/P2 with maintainer attention.

## Releases

- **[v0.58.0-preview.0](https://github.com/google-gemini/gemini-cli/releases)**
  - `fix(core)`: consistent symlink evaluation in ignore path handling
  - Additional core refactoring (details in the [changelog PR](https://github.com/google-gemini/gemini-cli/pull/29082))

- **[v0.57.0](https://github.com/google-gemini/gemini-cli/releases)** (stable)
  - `fix(core)`: dynamically resolve Cloud Workstations proxy redirect URI for OAuth flows
  - `fix(core)`: resolve swallowed directory mismatch in IDE connections

- **[v0.56.0-nightly.20260825.g812f7a2bc](https://github.com/google-gemini/gemini-cli/releases)**
  - `fix(a2a-server)`: clear stale cancellation error on new message turns
  - `fix(core)`: declare top-level safety checkers in write policy configuration

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (13 comments, P1)
   `codebase_investigator` subagents report `status: "success"` / `"GOAL"` even when they hit the max-turn limit before doing any analysis — masking real interruptions. High community engagement and maintainer triage; a retest is pending.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (8 comments, 8👍, P1)
   Simple changes like folder creation hang indefinitely when the CLI defers to the generalist agent; users report waiting up to an hour. Disabling subagent delegation is the only workaround.

3. **[#19873 — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)** (8 comments, P2)
   Proposal to let Gemini 3 models use native bash/POSIX toolchains while preserving security via sandboxing and intent routing after execution.

4. **[#22745 — AST-aware file reads, search, and mapping (EPIC)](https://github.com/google-gemini/gemini-cli/issues/22745)** (7 comments, P2)
   Tracks whether AST-aware tools can reduce token noise, improve read precision, and improve codebase navigation.

5. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (6 comments, P2)
   Anecdotal but widely echoed: the model ignores custom skills/sub-agents unless explicitly instructed, even when tasks closely match their descriptions.

6. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (5 comments, P2)
   Sessions that the extractor deems low-signal are never marked processed, so they resurface repeatedly — wasting background-agent cycles.

7. **[#26525 — Deterministic redaction and reduced Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (4 comments, P2, security)
   Auto Memory sends transcript content to the extraction model before prompt-based redaction occurs, and existing skills can leak into logs. Community wants redaction before content enters model context.

8. **[#25166 — Shell command stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (4 comments, 3👍, P1)
   Simple CLI commands that never prompt finish but remain displayed as active/"awaiting user input". A frequent hang with high user impact.

9. **[#22232 — Enhance browser_agent resilience](https://github.com/google-gemini/gemini-cli/issues/22232)** (4 comments, P3)
   `BrowserManager.ts` fails fast on locked profiles (persistent sessions, orphaned processes); users request automatic session takeover and lock recovery.

10. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (4 comments, 1👍, P1)
    Browser agent terminates with `GOAL` status despite failing under Wayland. Tied to the broader theme of subagent failures being reported as success.

## Key PR Progress

1. **[#29089 — fix(core): forward abortSignal to retryWithBackoff in BaseLlmClient](https://github.com/google-gemini/gemini-cli/pull/29089)** (P2)
   Fixes cancellation not propagating through retries for session summary, chat compression, classifier, and prompt completion clients. Relates to #29065.

2. **[#28863 — fix(extensions): prompt for consent on environment changes and sanitize runtime-altering env vars](https://github.com/google-gemini/gemini-cli/pull/28863)**
   Extension updates could bypass consent checks and inject unauthorized environment variables into MCP server processes; incorporates env configs into consent strings and sanitizes custom environments.

3. **[#29088 — fix(vscode-ide-companion): resolve stop() with an MCP stream open](https://github.com/google-gemini/gemini-cli/pull/29088)** (fixes #28785)
   `IdeServer.stop()` hangs because the MCP transport holds a long-lived streaming response on `GET /mcp`, blocking extension deactivation. Also addresses keep-alive failure thresholds (supersedes #28789).

4. **[#29087 — fix(cli): prevent concurrent extension install races](https://github.com/google-gemini/gemini-cli/pull/29087)**
   Two Gemini CLI processes installing/updating the same extension could interleave file copies and metadata writes; uses `proper-lockfile` to coordinate.

5. **[#29081 — fix(core): prevent SSRF in MCP OAuth metadata discovery and authentication](https://github.com/google-gemini/gemini-cli/pull/29081)**
   Enforces RFC 9728 §7.7 / RFC 8414 constraints: HTTPS for remote OAuth endpoints (loopback HTTP only for local servers), origin validation, and restrictions on dynamic client registration and token endpoints.

6. **[#28930 — fix(core): drop unsafe diff.external override](https://github.com/google-gemini/gemini-cli/pull/28930)** (P1, fixes #28928)
   The empty-string `diff.external` override — added to disable external diff tools in the shell sandbox — can have unsafe unintended effects; this change removes it.

7. **[#29067 — fix(a2a-server): remove misleading security schemes and hardcoded credentials](https://github.com/google-gemini/gemini-cli/pull/29067)** (fixes #29001)
   Removes fake `securitySchemes` from the agent card and strips hardcoded credentials from `customUserBuilder`, accurately reflecting unauthenticated local endpoints by design.

8. **[#28983 — fix(core): detect mixed line endings instead of flagging CRLF on a single match](https://github.com/google-gemini/gemini-cli/pull/28983)** (P2)
   `detectLineEnding()` currently classifies a file as CRLF if it contains a single `\r\n`; this PR properly detects mixed line endings to avoid incorrect line-ending conversions.

9. **[#28926 — docs: add Windows longpaths setup instructions to CONTRIBUTING.md](https://github.com/google-gemini/gemini-cli/pull/28926)** (P2)
   Windows clones fail on deeply nested snapshot paths exceeding `MAX_PATH`, creating ~3,000 dirty staged files; documents `core.longpaths=true` and recovery steps.

10. **[#28832 — test(core): skip environment-dependent tests with a reason instead of failing](https://github.com/google-gemini/gemini-cli/pull/28832)** (P2, closes #28830)
    On clean Windows checkouts, 13 tests fail before any change is made (8 require elevated privileges, 4 need PowerShell 7). Converts them to skips with explicit reasons.

Also notable: **[#28955](https://github.com/google-gemini/gemini-cli/pull/28955)** (P1, size/XL) — a large dependency update adding MCP configuration and ECC bundle integration — and the automated **[v0.57.0 changelog](https://github.com/google-gemini/gemini-cli/pull/29084)**.

## Feature Request Trends

- **AST-aware code interaction**: Multiple EPICs propose AST-aware file reads, method-bound navigation, search, and codebase mapping to cut token waste and reduce misaligned reads ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
- **Persistent, file-based task tracking**: Replace in-context `WriteToDo` with a durable CRUD-backed task tracker to fight context rot and enable cross-session memory ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)).
- **Subagent observability**: Users want subagent trajectories included in `/bug` reports and shareable via `/chat share` for better evaluation and debugging ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).
- **Native bash affinity with safety**: Design proposals aim to let models use POSIX tools directly behind zero-dependency OS sandboxing, with post-execution intent routing ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)).
- **Token-frugal context management**: "Tactful Extraction" hierarchies (grep first, surgical reads later) to prevent file reads from firehosing context ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)).
- **Safety guardrails**: The agent should actively discourage destructive operations (`git reset`, `--force`) and understand resource-modification danger ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
- **Agent self-awareness**: Requests for the CLI to accurately describe its own flags, hotkeys, and capabilities to guide users ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

## Developer Pain Points

- **Hangs and stalls are the top frustration**: generalist agent deadlocks ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands stuck on "Waiting input" after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and getting trapped at interactive prompts (e.g., `create-vite`) ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).
- **Misleading success signals**: Subagents that hit turn limits report `GOAL` success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and `/bug` reports omit subagent context, masking root causes ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
- **Browser agent reliability**: Fails on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), ignores `settings.json` overrides like `maxTurns` ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and lacks lock/profile recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)).
- **Agent tooling gaps**: The model under-uses custom skills and sub-agents ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), errors out with >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), and scatters temp edit scripts across the workspace ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
- **Auto Memory privacy & efficiency**: Low-signal sessions are retried forever ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), secrets enter model context before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and invalid inbox patches are silently skipped ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
- **Configuration friction**: Symlinked agent files are not recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), and Windows setups hit privilege/PowerShell-dependent test failures and long-path clone issues ([#28832](https://github.com/google-gemini/gemini-cli/pull/28832), [#28926](https://github.com/google-gemini/gemini-cli/pull/28926)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-26

## Today's Highlights
Copilot CLI shipped **v1.0.81-10**, making the plugins dashboard (`/plugin`, `/mcp`, `/skills`) available to everyone and adding `x` as the universal delete key across interactive UI surfaces. The release already faces two rapid triage reports: a prerelease-update bug that can strand users on `1.0.81-9` and an MCP token-injection regression on `1.0.81-10`. Broader community sentiment continues to center on MCP reliability, modal-like CLI editing, and session portability.

## Releases

### v1.0.81-10
[View release](https://github.com/github/copilot-cli/releases/tag/v1.0.81-10)

**New**
- The plugins dashboard is now available to everyone: run `/plugin`, `/mcp`, or `/skills`.
- Set `PLUGINS_DASHBOARD=false` to opt out of the dashboard and the `copilot plugins` command.

**Improved**
- `x` is now the delete key everywhere: `/sandbox config`, `/settings`, `/mcp`, the sessions dialog, and the diff view.

## Hot Issues
Selected from 42 issues updated in the last 24 hours.

1. **Issue #13: CLI input should have a vi/vim input mode**  
   Long-running feature request with substantial community support (74 👍, 8 comments). Developers want modal, keyboard-driven editing in interactive Copilot CLI sessions.  
   [Issue #13](https://github.com/github/copilot-cli/issues/13)

2. **Issue #4035: Voice installer fails with private Azure Artifacts feed 401**  
   Voice mode setup attempts to fetch `Microsoft.AI.Foundry.Local.Core` from a private Azure feed instead of nuget.org, causing a 401 installation failure. Blocker for voice-mode users.  
   [Issue #4035](https://github.com/github/copilot-cli/issues/4035)

3. **Issue #4542: Workspace `.mcp.json` detected but not connected in agent sessions**  
   MCP servers show as enabled via `mcp list` / `mcp get`, but they are not actually available inside interactive/agent sessions. Points to a disconnect between configuration discovery and runtime wiring.  
   [Issue #4542](https://github.com/github/copilot-cli/issues/4542)

4. **Issue #3380: Add `--disable-repo-mcps` flag to skip repo-level MCP loading**  
   Users need a clean way to launch Copilot while ignoring `.mcp.json` / `.github/mcp-config.json`, rather than manually disabling MCP servers one by one.  
   [Issue #3380](https://github.com/github/copilot-cli/issues/3380)

5. **Issue #4605: `latest-prerelease` lookup strands users on 1.0.81-9**  
   Newly filed triage issue: because multiple prereleases share `created_at`, GitHub ranks `-10` below `-2`, so the updater reports `1.0.81-9` as the latest and refuses to advance to `1.0.81-10`. Directly relevant to today’s release.  
   [Issue #4605](https://github.com/github/copilot-cli/issues/4605)

6. **Issue #4604: User-configured MCP server loses injected Copilot token on 1.0.81-10**  
   Regression on the latest release: `https://api.githubcopilot.com/mcp/` no longer gets an injected `Authorization` header, and OAuth recovery is impossible because GitHub.com does not advertise dynamic client registration.  
   [Issue #4604](https://github.com/github/copilot-cli/issues/4604)

7. **Issue #4560: Model `auto` always runs with reasoning effort disabled**  
   Selecting `auto` sends requests with `reasoningEffort: null`, and users cannot configure reasoning effort for the auto router. Frustrating for users who expect the default model to respect reasoning settings.  
   [Issue #4560](https://github.com/github/copilot-cli/issues/4560)

8. **Issue #4268: Regression: exit summary not shown after upgrading to 1.0.74 / 1.0.75**  
   Session/exit summaries disappeared in recent releases; rolling back to `1.0.73` restores the expected behavior. Signals a UX regression introduced during the recent release wave.  
   [Issue #4268](https://github.com/github/copilot-cli/issues/4268)

9. **Issue #4593: Archiving a worktree session fails on Windows with `os error 32`**  
   Windows users cannot archive worktree-backed sessions because the session process tree is not stopped first, causing the file to remain locked. A clear platform-specific reliability bug.  
   [Issue #4593](https://github.com/github/copilot-cli/issues/4593)

10. **Issue #4272: New models are greyed out and cannot be selected**  
    Users report new models disabled by organization policy, with no obvious admin setting to enable them. Enterprise model rollout confusion remains a recurring complaint.  
    [Issue #4272](https://github.com/github/copilot-cli/issues/4272)

## Key PR Progress
No pull requests were updated in the last 24 hours. There is no PR progress to report for this digest period.

## Feature Request Trends
- **MCP control and governance**: Users want more control over which repository-level MCP servers load, e.g. `--disable-repo-mcps` (#3380), plus persistent per-user exclusions for duplicate instruction files like `CLAUDE.md` / `AGENTS.md` (#4603).
- **Terminal editing experience**: Strong continued demand for vi/vim modal input (#13).
- **Richer interactive prompting**: The `ask_user` tool should support suggested choices plus a custom free-text escape hatch (#3323).
- **Session portability and sharing**: Requests to export session context to repositories (#1153) and share sessions across machines/developers (#3537) indicate growing use of CLI sessions as persistent work artifacts.
- **Transparent model/reasoning behavior**: Users want `auto` model selection to respect reasoning effort configuration (#4560) and clearer enterprise model enablement paths (#4272).

## Developer Pain Points
- **MCP authentication and connectivity remain fragile**: Reports include Azure Artifacts 401s (#4035), workspace MCPs not connecting (#4542), lost Copilot tokens after release (#4604), Google Workspace OAuth issuer mismatches (#4606), and managed settings failing closed and stripping MCP servers (#4602).
- **Release/update tooling is causing confusion**: The prerelease version-selection bug (#4605) means users can be stuck on an older prerelease even when a newer build is available.
- **Recent release regressions are accumulating**: Exit summaries disappearing (#4268), reasoning effort ignored (#4560), and MCP token injection breaking (#4604) have all appeared in recent updates.
- **Windows-specific file locking**: Worktree session archiving fails because processes are not terminated before files are accessed (#4593).
- **Silent failures are especially costly**: BYOK providers silently drop image content from MCP tool results (#4600), and `store_memory` failures can disable MCP servers for the whole session (#4602).
- **False-positive security prompts**: Copilot CLI flags access through `..` even when the path is still inside the project directory, interrupting flow for models that navigate via relative parent paths (#4601).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-26

## Today’s Highlights
OpenCode shipped v1.18.23, a patch release focused on Cloudflare AI Gateway compatibility. The community is currently dealing with a cluster of “Endpoint is unavailable” errors for free Zen/Console models whenever tools are used, while Desktop App feature requests (message search, model cost visibility) continue to draw high interest. On the PR side, a fix for the auto-updater’s 266 GB npm cache bug and a long-awaited project-identity fix are the standout items.

## Releases
**v1.18.23** — [Release tag](https://github.com/anomalyco/opencode/releases/tag/v1.18.23)

- Fixed Cloudflare AI Gateway routing for third-party providers so non-Workers models work through the gateway’s REST API.
- Fixed Anthropic models through Cloudflare AI Gateway by converting dotted model IDs like `claude-haiku-4.5` to the dashed slugs Anthropic expects.

## Hot Issues

- **[#44300 — Zen API free models fail with tools](https://github.com/anomalyco/opencode/issues/44300)** — Any request containing a `tools` array fails with “Endpoint is unavailable” for `x-preview-f-free` / `ox-alpha-free`, on both Zen Console and Go routes. 13 comments and 5 👍; duplicates such as [#44850](https://github.com/anomalyco/opencode/issues/44850), [#44742](https://github.com/anomalyco/opencode/issues/44742), [#45073](https://github.com/anomalyco/opencode/issues/45073), and [#45020](https://github.com/anomalyco/opencode/issues/45020) show this is affecting many users.

- **[#33618 — Qwen 3.7 Plus/Max invalid tool calls via OpenRouter](https://github.com/anomalyco/opencode/issues/33618)** — Tool calls sporadically fail with empty names like `✗ "" failed`, causing retries and aborted sessions. 10 comments and 4 👍; indicates a model-specific tool-call parsing/reliability gap.

- **[#19143 — Message search in Desktop App](https://github.com/anomalyco/opencode/issues/19143)** — Request for Cmd+F / Ctrl+F search across long sessions. 9 comments and 8 👍; one of the most-requested Desktop App productivity features.

- **[#35434 — Multi-question tool regression in TUI](https://github.com/anomalyco/opencode/issues/35434)** — Since v1.17.13, the `question` tool fails silently when called with 2+ questions; single questions still work. Closed, but the 7 comments highlight sensitivity around TUI form regressions.

- **[#14524 — Display model cost in model picker](https://github.com/anomalyco/opencode/issues/14524)** — Users want cost transparency in the TUI model picker. 11 👍, the highest reaction count on this list.

- **[#43277 — Sessions permanently stuck during normal use](https://github.com/anomalyco/opencode/issues/43277)** — Sessions refuse new messages and survive reboots; restarting the OpenCode service does not recover them. 5 comments; a serious reliability concern.

- **[#45087 — Auto-updater consumed 266 GB](https://github.com/anomalyco/opencode/issues/45087)** — A long-running `opencode2 serve --service` process re-installed the same beta every 10 minutes, filling `~/.npm/_cacache` with 266 GB. 4 comments; severe operational issue.

- **[#35494 — TUI freezes on Debian 13 / XFCE / X11](https://github.com/anomalyco/opencode/issues/35494)** — Blank screen, only `kill -9` recovers. 3 comments; likely terminal/X11 rendering edge case.

- **[#44958 — Refusal response hidden and history disappears](https://github.com/anomalyco/opencode/issues/44958)** — With `muse-spark-1.2-contributor` via OpenCode Go, a run can finish with no visible response/error and the conversation history disappears. 3 comments; concerning provider integration bug.

- **[#39632 — IME composition breaks in v2 prompt input](https://github.com/anomalyco/opencode/issues/39632)** — First keystroke is committed as literal text instead of staying in composition; 3 comments and 2 👍. Important for CJK/Japanese users on the v2 prompt.

## Key PR Progress

- **[#45091 — fix(cli): prevent repeated updates and npm cache growth](https://github.com/anomalyco/opencode/pull/45091)** — Directly addresses the 266 GB auto-updater bug: remembers the last installed version and installs npm updates with a scoped temporary cache.

- **[#35311 — fix(core): Multiple clones of same repo are different projects](https://github.com/anomalyco/opencode/pull/35311)** — Long-awaited project-identity fix that closes 15 related issues about duplicate project handling.

- **[#45094 — fix(ai): preserve provider-defined responses item ids](https://github.com/anomalyco/opencode/pull/45094)** — Replaces item-type-specific ID allowlists with the exact Codex outbound rule, so provider-issued message/tool/reasoning IDs are preserved.

- **[#45098 — feat(ai): add native Cerebras and Together AI providers](https://github.com/anomalyco/opencode/pull/45098)** — Adds first-class Cerebras and Together AI providers backed by the existing OpenAI Chat protocol.

- **[#45021 — feat(tui): experimental session preview tabs](https://github.com/anomalyco/opencode/pull/45021)** — Opt-in VS Code-style session preview tabs, so browsing existing sessions no longer permanently fills the tab strip.

- **[#45086 — feat(core): support Azure CLI authentication](https://github.com/anomalyco/opencode/pull/45086)** — Adds Microsoft Entra ID authentication through an existing Azure CLI session; companion CLI PR: [#45079](https://github.com/anomalyco/opencode/pull/45079).

- **[#44705 — fix(session): coerce legacy string tool-part input](https://github.com/anomalyco/opencode/pull/44705)** — Fixes broken session reads for pre-1.18 data where tool-part `state.input` was stored as a JSON string; closes [#44688](https://github.com/anomalyco/opencode/issues/44688).

- **[#45002 — fix(core): repair malformed tool arguments before validation](https://github.com/anomalyco/opencode/pull/45002)** — Adds an internal plugin that repairs common malformed tool arguments before Zod/Effect/JSON Schema validators run.

- **[#45093 — fix(ai): ignore SSE retry directives without ending streams](https://github.com/anomalyco/opencode/pull/45093)** — Prevents SSE retry control directives from terminating provider streams and preserves typed decoder errors.

- **[#44898 — fix(opencode): honest context arithmetic for small and unreported model limits](https://github.com/anomalyco/opencode/pull/44898)** — Improves context-window accounting for models with unknown or very small limits; part of the #41372 fix series.

## Feature Request Trends

- **Desktop App workflow improvements** — Message search ([#19143](https://github.com/anomalyco/opencode/issues/19143)), MCP server setup/connection testing in Desktop ([#40335](https://github.com/anomalyco/opencode/issues/40335)), and project removal ([#37280](https://github.com/anomalyco/opencode/issues/37280)) show strong demand for making the Desktop App a self-contained management tool.

- **Model/pricing transparency** — Cost display in the model picker ([#14524](https://github.com/anomalyco/opencode/issues/14524)) and accurate DeepSeek thinking-mode options ([#33962](https://github.com/anomalyco/opencode/issues/33962)) reflect a broader ask for better model metadata and pricing visibility.

- **TUI/Desktop UX polish** — Session preview tabs ([#45021](https://github.com/anomalyco/opencode/pull/45021)), OSC 8 markdown link rendering ([#45001](https://github.com/anomalyco/opencode/issues/45001)), and IME-composition fixes ([#39632](https://github.com/anomalyco/opencode/issues/39632)) are recurring quality-of-life requests.

- **Provider expansion** — Requests and PRs continue to push for more first-class providers: Cerebras/Together via [#45098](https://github.com/anomalyco/opencode/pull/45098) and Azure CLI auth via [#45086](https://github.com/anomalyco/opencode/pull/45086).

- **Localization** — The Hebrew locale request ([#42447](https://github.com/anomalyco/opencode/issues/42447)) shows continued interest in broader i18n coverage.

## Developer Pain Points

- **Provider/tool-call reliability** — The “Endpoint is unavailable” failure with tools is the most visible issue cluster this week: [#44300](https://github.com/anomalyco/opencode/issues/44300), [#44850](https://github.com/anomalyco/opencode/issues/44850), [#44742](https://github.com/anomalyco/opencode/issues/44742), [#45073](https://github.com/anomalyco/opencode/issues/45073), [#45020](https://github.com/anomalyco/opencode/issues/45020). Qwen tool-call failures ([#33618](https://github.com/anomalyco/opencode/issues/33618)) and hidden refusals on OpenCode Go ([#44958](https://github.com/anomalyco/opencode/issues/44958)) add to provider-side frustration.

- **Session/state corruption** — Sessions getting permanently stuck ([#43277](https://github.com/anomalyco/opencode/issues/43277)), Desktop workspaces locked to the wrong directory ([#33995](https://github.com/anomalyco/opencode/issues/33995)), and renderer freezes after agent turns ([#43355](https://github.com/anomalyco/opencode/issues/43355)) are serious blockers.

- **UI freezes and input regressions** — Debian/XFCE blank-screen freezes ([#35494](https://github.com/anomalyco/opencode/issues/35494)), silent failure of multi-question tools ([#35434](https://github.com/anomalyco/opencode/issues/35434)), and broken IME input in v2 ([#39632](https://github.com/anomalyco/opencode/issues/39632)) highlight TUI/Desktop stability gaps.

- **Resource exhaustion** — The auto-updater reinstall loop filling npm cache with 266 GB ([#45087](https://github.com/anomalyco/opencode/issues/45087)) is a stark reminder that long-running service processes need safer update behavior.

- **Strict server-side model compatibility** — Multiple `role: "system"` fragments break Qwen3.8 with SGLang ([#45055](https://github.com/anomalyco/opencode/issues/45055)), and some provider models hang indefinitely ([#45053](https://github.com/anomalyco/opencode/issues/45053)), making provider-specific protocol handling a growing concern.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi Community Digest — 2026-08-26

## 1. Today's Highlights

The past 24 hours brought a heavy wave of correctness fixes across Pi's streaming, compaction, and provider-compatibility layers, with 33 PRs and 50 issues updated. The long-running Windows support thread (#7547) remains the community's most active conversation (49 comments), signaling Windows as a top pain point. On the feature side, the PR queue includes eager tool execution (#8629), a new Opper provider (#8639), and coordinated fixes that unblock `/compact` on Grok and other OpenAI-Responses-compatible backends (#8650, #8633).

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

1. **Windows support survey — #7547** — The most-commented thread (49 comments) collects how developers run Pi on Windows and what breaks, with the goal of focusing core fixes vs. delegating setups. Community reaction is actively contributing crash reports and workarounds. [Issue #7547](https://github.com/earendil-works/pi/issues/7547)

2. **TUI row corruption during streaming — #8584** (closed) — Assistant text renders one word per line after long tool output (e.g., `sed` on a wide file), likely a terminal-width/wrap bug triggered by tool output. High engagement at 5 👍. [Issue #8584](https://github.com/earendil-works/pi/issues/8584)

3. **AgentSession settlement/continuation lifecycle bugs — #5886** — Meta-issue (filed by mitsuhiko) covering a recurring class of bugs where post-run logic continues an agent from a stale transcript. Acknowledged as a larger architectural fix rather than a quick patch. [Issue #5886](https://github.com/earendil-works/pi/issues/5886)

4. **"Response was truncated before completion." — #7855** (closed) — Random truncation errors on OpenAI-compatible endpoints (reproduced with local VLLM), forcing manual continuation prompts. Community confirmed it across multiple setups. [Issue #7855](https://github.com/earendil-works/pi/issues/7855)

5. **PowerShell tool version inconsistency — #8582** (closed) — Interactive mode falls back to Windows PowerShell 5.1 while `-p` mode uses `pwsh`, causing divergent behavior on Windows 11 systems with PowerShell 7 installed. [Issue #8582](https://github.com/earendil-works/pi/issues/8582)

6. **GitHub Copilot login timeout — #8468** (closed) — `Failed to login to GitHub Copilot: The operation was aborted due to timeout`; reporters note the fix in PR #8254 is not yet in a release, highlighting release lag. [Issue #8468](https://github.com/earendil-works/pi/issues/8468)

7. **Undici 8.5.0 breaks plain-HTTP proxy forwarding — #7049** (closed) — `EnvHttpProxyAgent` defaults to `proxyTunnel: true`, so plain `http://` MCP/API targets through `HTTP_PROXY` incorrectly use CONNECT tunneling; upgrade to Undici 8.8.0 fixes it. [Issue #7049](https://github.com/earendil-works/pi/issues/7049)

8. **`spawn(taskkill)` ENOENT on Node.js 24 — #6596** (open, in progress) — `killProcessTree()` fails on Windows/Node 24; proposed fix uses an absolute System32 path plus an error event handler. [Issue #6596](https://github.com/earendil-works/pi/issues/6596)

9. **npm 11.16.0 blocks `pi update --extensions` — #6600** (open, in progress) — npm's new install-script blocking by default breaks Pi's extension update flow, with no obvious way to pass args through. [Issue #6600](https://github.com/earendil-works/pi/issues/6600)

10. **Gemini 3.7 Flash rejects `/tree` branch summarization — #8456** (closed) — The built-in summary request doesn't include `reasoning`, so Gemini errors with "Thinking level MINIMAL is not supported." A subtle adapter/model-catalog mismatch. [Issue #8456](https://github.com/earendil-works/pi/issues/8456)

## 4. Key PR Progress

1. **Eager tool execution — #8629** (closed) — Opt-in V1 that prefetches finalized, discard-safe local `read` calls at `toolcall_end` and reuses the exact candidate outcome at dispatch, with strict safety boundaries. [PR #8629](https://github.com/earendil-works/pi/pull/8629)

2. **Add Opper provider — #8639** (closed) — New built-in OpenAI-compatible provider (api.opper.ai) with provider module, generated catalog, env key, docs, and test-matrix coverage. [PR #8639](https://github.com/earendil-works/pi/pull/8639)

3. **Omit Responses `tool_choice` when no tools are sent — #8650** (closed) — Fixes `/compact` and overflow compaction failing on xAI's Responses API with "A tool_choice was set but no tools were specified." [PR #8650](https://github.com/earendil-works/pi/pull/8650)

4. **Same fix for OpenAI/Azure OpenAI Responses — #8633** (closed) — Companion change covering the OpenAI and Azure Responses paths; Chat Completions already handled this. [PR #8633](https://github.com/earendil-works/pi/pull/8633)

5. **Hoist Bedrock tool-result images for OpenAI models — #8642** (closed) — OpenAI models on Bedrock reject images nested in `toolResult.content`; this moves them to sibling user-content blocks. [PR #8642](https://github.com/earendil-works/pi/pull/8642)

6. **Load skills when bash is available — #8641** (closed) — Includes the skills section when `bash` exists even if `read` is disabled, with system-prompt regression tests; fixes #8551. [PR #8641](https://github.com/earendil-works/pi/pull/8641)

7. **Use `ctx.cwd` for cwd-sensitive tools — #8627** (closed) — Extension-registered read/write/edit/grep tools now resolve paths against the extension context's real session cwd. [PR #8627](https://github.com/earendil-works/pi/pull/8627)

8. **Fix `read` tool off-by-one line count — #8623** (closed) — Stops counting the phantom element from `split("\n")` for files with a trailing newline; fixes truncation notices and continuation hints; closes #7329. [PR #8623](https://github.com/earendil-works/pi/pull/8623)

9. **Preserve Codex thread affinity headers — #8570** (closed) — Adds the missing `thread-id` header alongside existing `session-id`/`prompt_cache_key` to match the upstream Codex client's request identity. [PR #8570](https://github.com/earendil-works/pi/pull/8570)

10. **Preserve aborted stop reason during lazy setup — #8635** (open) — Passes the abort signal through lazy stream setup wrappers so setup failures report as aborted rather than generic errors; fixes #8409. [PR #8635](https://github.com/earendil-works/pi/pull/8635)

Also notable: **#8614** derives OpenRouter reasoning controls (fixes #8454), and a series from wutongyuonce hardens image/queue handling (#8612, #8613, #8615, #8616).

## 5. Hot Discussions

**Show and tell**

- **CursorAI Agent CLI custom provider for the Pi Coding Agent — #1558** (4 comments, 9 👍) — A community-built npm package (`@netandreus/pi-cursor-provider`) lets CursorAI use the Pi Coding Agent as a custom provider; the author proposes listing it alongside Claude Code and OpenAI Codex in the docs. [Discussion #1558](https://github.com/earendil-works/pi/discussions/1558)

## 6. Feature Request Trends

- **Provider ecosystem expansion** — The most consistent demand: new built-in providers (SiliconFlow #4742, Opper #8639), catalog updates for newly shipped models (deepseek-v4-flash-vision-exp #8483), and community-built provider integrations (#1558).
- **First-class Windows support** — Driven by #7547, plus targeted fixes for PowerShell version consistency (#8582) and Node 24/taskkill behavior (#6596). The community clearly wants a single, well-documented Windows path.
- **Image/media handling robustness** — Topics include Codex file-reference materialization for image-heavy results (#8617), hoisting images for Bedrock OpenAI models (#8642/#8643), and protecting vision sessions from accumulated image budgets (#8636).
- **Compaction and context-window safety** — Multiple contributions target compaction correctness: scaling the reserve to model context (#8651), rejecting degenerate summaries (#8652), and the Responses `tool_choice` fixes (#8650/#8633).
- **TUI/UX polish** — Requests to move the editor cursor on mouse click (#8547) and render mermaid/LaTeX in HTML exports (#8041) show continued appetite for parity between TUI and exported output.

## 7. Developer Pain Points

- **Windows remains fragmented** — Too many ways to run Pi on Windows (#7547); inconsistent PowerShell 5.1 vs pwsh (#8582); taskkill ENOENT on Node 24 (#6596). Users report spending significant time on environment quirks rather than the agent itself.
- **Streaming correctness issues** — TUI row corruption (#8584), O(n²) re-parsing of tool-call buffers (#7698), and per-token reasoning stored unmerged causing one-word-per-line rendering (#8619).
- **Provider API edge cases** — Copilot login timeouts (#8468), Gemini thinking-level rejections (#8456), Codex transient "Sorry, something went wrong" errors (#8138), and Grok rejecting `tool_choice` without tools (#8650).
- **Spurious truncation and compaction failures** — Random "Response was truncated" errors (#7855), degenerate compaction summaries (#8652), and context-reserve values that don't scale for small local models (#8651) burn user time and tokens.
- **Upstream dependency breakage** — npm 11.16.0 blocking install scripts breaks extension updates (#6600), and 0.84.3's bundled CLI fails to resolve `@earendil-works/pi-coding-agent` for global extensions (#8620), eroding trust in patch releases.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-26

## Today's Highlights

Nightly v0.22.0 continues rolling out web-shell fixes, while the tracker shows a P1 regression where `/effort max` permanently bricks sessions on OpenAI-compatible providers (#9459). Community attention is concentrated on multi-agent coordination gaps, context/compression correctness, and TUI rendering performance, with several substantial `/review` pipeline and Web Shell PRs in flight.

## Releases

- **[v0.22.0-nightly.20260825.22bb5e8b9f](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.0-nightly.20260825.22bb5e8b9f)** — Nightly release. Changes include `fix(web-shell): pass session workspace cwd when opening from overview panel` ([#9730](https://github.com/QwenLM/qwen-code/pull/9730)) plus additional web-shell fixes.

## Hot Issues

1. **[#9459 — `/effort max` bricks sessions on OpenAI-compatible providers (P1, closed)](https://github.com/QwenLM/qwen-code/issues/9459)** — The UI offers `/effort max`, but `clampReasoningEffort()` fails to clamp `'max'`, so every subsequent request in the session returns a 400 until the tier is manually changed. 10 comments; a critical provider-compatibility regression.

2. **[#8097 — Background agent coordination gap (open)](https://github.com/QwenLM/qwen-code/issues/8097)** — Multiple background Explore agents cause duplicate work, premature completion, and non-interactive `send_message` mid-flight. Highlights the immaturity of multi-agent orchestration. 8 comments.

3. **[#6762 — Skill Context Lifecycle Management (open)](https://github.com/QwenLM/qwen-code/issues/6762)** — SKILL.md bodies are loaded as tool results and remain in conversation history forever; users request unload/compress mechanisms. A recurring context-efficiency theme. 6 comments.

4. **[#9198 — OOM on long-running sessions (open)](https://github.com/QwenLM/qwen-code/issues/9198)** — qwen runs out of memory after a week on a 1 TB server; the tmux terminal also corrupts (mouse garbage, broken copy/paste) unlike Kimi Code. 6 comments.

5. **[#9309 — Compression seems incorrect (closed)](https://github.com/QwenLM/qwen-code/issues/9309)** — `/compress-fast` followed by `/compress` produced suspicious context sizes; users reporting trust issues with compression. 6 comments.

6. **[#6094 — qqbot Cron/blockStreaming interaction bugs (closed)](https://github.com/QwenLM/qwen-code/issues/6094)** — `blockStreaming: 'on'` causes duplicate messages because `onResponseChunk` early-returns without populating `streamState`. 6 comments.

7. **[#5823 — Cron tasks fire silently with zero visibility (open)](https://github.com/QwenLM/qwen-code/issues/5823)** — The model can't list or stop its own scheduled tasks; Qwen auto-starts work unprompted in fresh sessions days later. 5 comments.

8. **[#8227 — Windows `@`-file reads lose O_NOFOLLOW (open)](https://github.com/QwenLM/qwen-code/issues/8227)** — Follow-up to #7206: Windows lacks `O_NOFOLLOW` and the dev/ino identity checks are vacuous and untested. Security hardening gap. 5 comments, `welcome-pr` labeled.

9. **[#8662 — Migrate TUI from ink to OpenTUI (open, tracking)](https://github.com/QwenLM/qwen-code/issues/8662)** — The heavily patched ink 7 + React 19 renderer causes flicker and structural problems; this issue tracks the migration. 5 comments.

10. **[#9733 — Loop detection false positives kill unattended turns (open)](https://github.com/QwenLM/qwen-code/issues/9733)** — Legitimate write → run → edit → re-run verification cycles are terminated as loops, and terminated turns can't resume without a human message. 4 comments.

Also notable: **[#9827](https://github.com/QwenLM/qwen-code/issues/9827) — `permissions.allow` does not restrict tool schemas sent to the model** (full tool set still included in API requests), and **[#9230](https://github.com/QwenLM/qwen-code/issues/9230) — follow-up suggestion side query defeats server-side prefix caching**.

## Key PR Progress

1. **[#9987 — feat(core): trust a generated-scripts root for workflow scriptPath loads](https://github.com/QwenLM/qwen-code/pull/9987)** — Adds `<projectDir>/workflows/generated` as a third trusted root for `Workflow({scriptPath})`, alongside run snapshots and resume journals.

2. **[#9974 — fix(core): three run-lifecycle defects that silently cost a run](https://github.com/QwenLM/qwen-code/pull/9974)** — Cancelling a workflow now properly ends it; fixes three independently revertable run-lifecycle bugs sharing one conflict footprint.

3. **[#9769 — feat(web-shell): unblock git update on dirty working tree](https://github.com/QwenLM/qwen-code/pull/9769)** — The Update Project action now offers a resolution panel (two options) when a pull is blocked by uncommitted changes.

4. **[#10053 — fix(cli): show active scheduled tasks at session start](https://github.com/QwenLM/qwen-code/pull/10053)** — Adds a startup transcript warning (`N active scheduled task(s). Run /loop list to inspect.`), directly addressing the silent-cron visibility gap in #5823.

5. **[#9740 — feat(review): make Step 4 verification execution-grade](https://github.com/QwenLM/qwen-code/pull/9740)** — New `qwen review ab-drive` subcommand runs one script against both the PR worktree and base tree, producing paired captures for the `/review` skill.

6. **[#9984 — feat(web-shell): add opt-in interactive browser terminal](https://github.com/QwenLM/qwen-code/pull/9984)** — A manually managed terminal in the Web Shell right panel, gated by the daemon's `web_terminal` capability for frontend/backend version skew.

7. **[#9983 — fix(review): keep host-trusted state out of the container's writable surface](https://github.com/QwenLM/qwen-code/pull/9983)** — Moves worktree lease files out of the bind-mounted RW directory; addresses two findings from #9723's security review.

8. **[#9993 — feat(web-shell): make compact view the only mode](https://github.com/QwenLM/qwen-code/pull/9993)** — Retires the compact-mode toggle, Ctrl+O shortcut, and `ui.compactMode` setting; compact rendering becomes the sole mode.

9. **[#9995 — fix(cli): preserve bridge timeouts for mid-turn media](https://github.com/QwenLM/qwen-code/pull/9995)** — Mid-turn image/audio/resource attachments now use their media bridge's own timeout/retry policy while keeping cancellation through the real turn signal.

10. **[#9970 — perf(cli): reduce TUI render overhead](https://github.com/QwenLM/qwen-code/pull/9970)** — Enables incremental terminal output in virtual-viewport mode and isolates history rendering behind a memoized state slice, with regression coverage.

Also worth watching: **[#10055](https://github.com/QwenLM/qwen-code/pull/10055)** moves the autofix scan lane to the persistent runner pool; **[#10010](https://github.com/QwenLM/qwen-code/pull/10010)** adds a divergence sentinel warning when Criticals regrow across `/review` rounds; **[#8368](https://github.com/QwenLM/qwen-code/pull/8368)** adds Kimi and Xiaomi MiMo provider presets; **[#10024](https://github.com/QwenLM/qwen-code/pull/10024)** adds managed HTML artifact sharing (Cloudflare/Vercel/Netlify) to Web Shell; **[#9607](https://github.com/QwenLM/qwen-code/pull/9607)** demotes balanced inline thinking blocks instead of failing the turn.

## Feature Request Trends

- **Context & token lifecycle management** — Skill bodies should be unloadable/compressible (#6762); users want context-usage breakdown telemetry on LLM spans (#10015); compression correctness remains a trust issue (#9309).
- **Multi-agent orchestration & background automation** — Coordination gaps between subagents (#8097), scheduled-task visibility and control (#5823, #10053), and session rotation for channels (#8927).
- **Review pipeline robustness** — Run the full `/review` pipeline in a fork subagent context to keep the main conversation clean (#9784), execution-grade verification (#9740), and stable incremental-review anchors (#9902).
- **Provider compatibility** — Correct effort clamping for OpenAI-compatible APIs (#9459), OpenRouter Auto Mode classification (#9757), DeepSeek vision image handling (#10027), and new provider presets like Kimi/MiMo (#8368).
- **Web Shell / Desktop experience** — Interactive browser terminal (#9984), compact-only rendering (#9993), managed HTML artifact hosting (#10024), and reasoning-effort persistence (#10011).
- **TUI modernization** — Migration from ink to OpenTUI (#8662) and render-performance work (#9970).

## Developer Pain Points

- **Session-breaking regressions** — `/effort max` permanently 400s a session until manually reverted (#9459); Auto Mode silently degrades to manual approval on OpenRouter (#9757).
- **Unrecoverable automated runs** — Loop detection kills legitimate verification cycles with no resume path (#9733); cron tasks fire silently with no way to inspect or stop them (#5823).
- **Memory & resource exhaustion** — OOM after multi-day sessions with terminal corruption (#9198); ENOSPC failures on CI runners (#10035).
- **Security & trust gaps** — Windows symlink/TOCTOU protections are materially weaker (#8227); host-trusted state leaks into container writable surfaces (#9983); `permissions.allow` doesn't actually restrict tools sent to the model (#9827).
- **Caching & compression inefficiency** — Follow-up suggestion side queries defeat server-side prefix caching, with `enableCacheSharing` off by default (#9230); compression results are not trustworthy (#9309).
- **Platform gaps** — The Windows CI lane is red with 59 tests across 10 files, unobserved since the merge queue stopped running (#9481); MCP over SSE hangs indefinitely in Qwen Desktop on Windows (#10056).

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale Community Digest — 2026-08-26

## Today’s Highlights

No new release landed in the last 24 hours, but the v0.9.12 cycle is clearly converging: integration PR [#5576](https://github.com/Hmbown/CodeWhale/pull/5576) is code-complete for release blockers with 72 commits, and the supervised-operation stack finally landed as three PRs — lifecycle outbox, `/relaunch`, and the control socket ([#5592](https://github.com/Hmbown/CodeWhale/pull/5592), [#5593](https://github.com/Hmbown/CodeWhale/pull/5593), [#5594](https://github.com/Hmbown/CodeWhale/pull/5594)). The most substantive community signal is the provider-neutrality audit in [#5588](https://github.com/Hmbown/CodeWhale/issues/5588), which found 18 DeepSeek-specific behavior gates in otherwise provider-neutral code.

## Hot Issues

- [#5316 EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/CodeWhale/issues/5316) — The highest-activity issue with 16 comments; every sub-EPIC, FEAT, and related PR in the TUI crate decomposition reports here. This is the central tracker for a major architectural refactor.

- [#5588 Provider neutrality: 18 DeepSeek-exclusive gates that should be provider-neutral](https://github.com/Hmbown/CodeWhale/issues/5588) — A full audit found ~380 naming-compat lines plus 18 suspect behavior gates, including an NVIDIA NIM env leak. Important for users on non-DeepSeek providers and for reducing vendor lock-in.

- [#5617 Reduce background git command runs and avoid git probes holding `.git/index.lock`](https://github.com/Hmbown/CodeWhale/issues/5617) — User-reported real pain: CodeWhale’s read-only git probes can leave `.git/index.lock`, causing `git commit` to fail. This is a high-value reliability fix for repository work.

- [#5581 Event-granularity audit: surfaces that stall at turn boundaries despite live per-step sources](https://github.com/Hmbown/CodeWhale/issues/5581) — A follow-up audit after the cost fix in #5578. Several UI surfaces still only update at `TurnComplete`, making long turns appear frozen. Directly affects perceived responsiveness.

- [#5482 EPIC(docs): review, partially restructure, and fully localize documentation to Chinese](https://github.com/Hmbown/CodeWhale/issues/5482) — A docs EPIC driven by the growing Chinese user base. English-only docs, stale sources, and machine-translation errors are the main barriers.

- [#4394 Compaction: publish and enforce a structured survival contract](https://github.com/Hmbown/CodeWhale/issues/4394) — Compaction already has solid implementation pieces, but there is no explicit contract for what survives compaction. Four comments show sustained interest in making compaction predictable.

- [#5601 Fresh install: MiniMax and Xiaomi model configuration returns 404](https://github.com/Hmbown/CodeWhale/issues/5601) — A Chinese-language bug report where first-run setup fails for MiniMax/Xiaomi, likely due to wrong built-in URLs. Only DeepSeek works; the user had to downgrade to v0.6. Strong signal that non-DeepSeek provider config needs validation.

- [#5562 Stale write-claims lock sub-agents out of command execution; verifier role contradicts its own description](https://github.com/Hmbown/CodeWhale/issues/5562) — Reproducible Windows bug where stale write-claims persist across restarts and cascade-lock other agents. Important for multi-agent reliability.

- [#5589 Fleet config view: Enter loops back to the same screen, model switching is buried and unclear](https://github.com/Hmbown/CodeWhale/issues/5589) — UX defect in fleet configuration; users cannot tell they have drilled in and model switching is hard to find.

- [#5597 Detached interactive agents lose post-turn usage from session cost totals](https://github.com/Hmbown/CodeWhale/issues/5597) — A detached child can keep producing usage after the parent `TurnComplete`, but that usage never reaches the session cost projection. Breaks cost transparency for long-running children.

## Key PR Progress

- [#5576 0.9.12 integration: must-fix + UX fixes (work-in-progress)](https://github.com/Hmbown/CodeWhale/pull/5576) — The v0.9.12 integration branch with 72 commits; gated and code-complete for release blockers. Remaining work is version bump, changelog, and RC gates.

- [#5594 control socket - part d (final)](https://github.com/Hmbown/CodeWhale/pull/5594) — Closes [#5533](https://github.com/Hmbown/CodeWhale/issues/5533). Adds an opt-in, Unix-only, JSON-RPC per-session control socket for supervised operation, defaulting to disabled.

- [#5593 /relaunch command - part c](https://github.com/Hmbown/CodeWhale/pull/5593) — Closes [#5532](https://github.com/Hmbown/CodeWhale/issues/5532). Adds `/relaunch` so a session can switch to the current binary after `/update` without a manual restart.

- [#5592 lifecycle outbox - part b](https://github.com/Hmbown/CodeWhale/pull/5592) — Closes [#5531](https://github.com/Hmbown/CodeWhale/issues/5531). Adds an opt-in JSONL lifecycle outbox for interactive TUI sessions and headless `codewhale exec` runs, with events like `turn_stalled` / `turn_failed`.

- [#5616 fix(tui): move git_status/git_diff off the async executor thread](https://github.com/Hmbown/CodeWhale/pull/5616) — Fixes blocking `std::process::Command::output()` calls inside async `execute()`, which could stall the Tokio worker pool and hang a session without error or approval prompt.

- [#5611 feat(tui): show tool and MCP schema costs](https://github.com/Hmbown/CodeWhale/pull/5611) — Rebase of [#5603](https://github.com/Hmbown/CodeWhale/pull/5603); the context inspector now shows bounded schema-cost estimates for built-in tools and MCP servers, addressing the display-only slice of [#5553](https://github.com/Hmbown/CodeWhale/issues/5553).

- [#5609 refactor(tui): adopt command shapes in memory group (FEAT-019)](https://github.com/Hmbown/CodeWhale/pull/5609) — Converts `/note` and `/memory` to the external command-shape pattern established by FEAT-014/015/018, keeping both command files inside `codewhale-tui`.

- [#5610 fix(tui): preserve Windows verbatim-path operands through POSIX word split](https://github.com/Hmbown/CodeWhale/pull/5610) — Fixes two Windows CI failures blocking FEAT-019 by preserving Windows paths through `enforce_readonly_workspace_operands`.

- [#5584 fix(subagents): persist child approval receipts](https://github.com/Hmbown/CodeWhale/pull/5584) — Closes [#5543](https://github.com/Hmbown/CodeWhale/issues/5543). Child approval prompts now commit durable `Asked` and terminal evidence before and after the prompt, closing an auditability hole.

- [#5612 fix(web): keep the published-release fact current instead of after the fact](https://github.com/Hmbown/CodeWhale/pull/5612) — The hand-maintained `latest-published-release.json` was stuck at v0.9.10 after v0.9.11 shipped, causing a marketing deploy to succeed and then fail. The release fact is now kept current.

## Feature Request Trends

- **Supervised and headless operation** — Users increasingly want to run CodeWhale unattended under external supervisors. Requests include a control socket, lifecycle outbox events, `/relaunch`, and correct cost accounting for detached children ([#5533](https://github.com/Hmbown/CodeWhale/issues/5533), [#5531](https://github.com/Hmbown/CodeWhale/issues/5531), [#5532](https://github.com/Hmbown/CodeWhale/issues/5532), [#5597](https://github.com/Hmbown/CodeWhale/issues/5597)).

- **Provider neutrality and model freshness** — Remove DeepSeek-specific behavior gates ([#5588](https://github.com/Hmbown/CodeWhale/issues/5588)), fix broken built-in provider URLs ([#5601](https://github.com/Hmbown/CodeWhale/issues/5601)), and auto-parse model lists so new models appear without binary updates ([#5607](https://github.com/Hmbown/CodeWhale/issues/5607)).

- **TUI transparency and ergonomics** — Users want a `/tutorial` or `/tour` onboarding pager ([#5556](https://github.com/Hmbown/CodeWhale/issues/5556)), focused-block copy/metadata/fullscreen actions ([#5551](https://github.com/Hmbown/CodeWhale/issues/5551)), `@path:START-END` line-range mentions ([#5550](https://github.com/Hmbown/CodeWhale/issues/5550)), clearer Fleet config navigation ([#5589](https://github.com/Hmbown/CodeWhale/issues/5589)), and per-tool/MCP schema-cost attribution ([#5553](https://github.com/Hmbown/CodeWhale/issues/5553)).

- **Reliability and auditability** — A recurring theme across issues: publish and enforce a compaction survival contract ([#4394](https://github.com/Hmbown/CodeWhale/issues/4394)), repair workflow `responseSchema` failures with raw-output receipts ([#5583](https://github.com/Hmbown/CodeWhale/issues/5583)), preserve `Degraded` status in owner snapshots ([#5582](https://github.com/Hmbown/CodeWhale/issues/5582)), persist child approval receipts ([#5543](https://github.com/Hmbown/CodeWhale/issues/5543)), improve event-granularity liveness ([#5581](https://github.com/Hmbown/CodeWhale/issues/5581)), and add fleet-wide cost/token ceilings ([#5567](https://github.com/Hmbown/CodeWhale/issues/5567)).

- **Git integration performance** — Reduce shell-outs to the real `git` CLI, avoid `.git/index.lock` contention, and replace read-only git probes with `gix` ([#5617](https://github.com/Hmbown/CodeWhale/issues/5617), [#5618](https://github.com/Hmbown/CodeWhale/issues/5618), [#5616](https://github.com/Hmbown/CodeWhale/pull/5616)).

## Developer Pain Points

- **Git repository interference** — Internal git probes can lock the user’s repository, blocking `git commit`; blocking git tools can also stall the async runtime. Users want fewer shell-outs and a pure-Rust git read path ([#5617](https://github.com/Hmbown/CodeWhale/issues/5617), [#5616](https://github.com/Hmbown/CodeWhale/pull/5616), [#5618](https://github.com/Hmbown/CodeWhale/issues/5618)).

- **Sub-agent and workflow state inconsistencies** — Stale write-claims lock other agents out ([#5562](https://github.com/Hmbown/CodeWhale/issues/5562)), `Degraded` workflow owners are collapsed into `Completed` ([#5582](https://github.com/Hmbown/CodeWhale/issues/5582)), and `responseSchema` failures abort runs without a bounded repair or raw-output receipt ([#5583](https://github.com/Hmbown/CodeWhale/issues/5583)).

- **Cost and usage blind spots** — Detached children lose post-turn usage from session totals ([#5597](https://github.com/Hmbown/CodeWhale/issues/5597)), fleet runs cannot be cost-bounded because worker events lack usage fields ([#5567](https://github.com/Hmbown/CodeWhale/issues/5567)), and MCP/tool schema costs are invisible to users ([#5553](https://github.com/Hmbown/CodeWhale/issues/5553)).

- **MCP, OAuth, and sandbox friction** — MCP OAuth expiry looks like a broken server ([#5572](https://github.com/Hmbown/CodeWhale/issues/5572)), read-only sandbox posture grants full-disk read access by default ([#5568](https://github.com/Hmbown/CodeWhale/issues/5568)), and read-only inspection children reject legitimate in-workspace `git -C` commands ([#5595](https://github.com/Hmbown/CodeWhale/issues/5595)).

- **Provider configuration and onboarding pain** — Built-in URLs for MiniMax/Xiaomi return 404 on first setup ([#5601](https://github.com/Hmbown/CodeWhale/issues/5601)), DeepSeek-specific gates create hidden provider lock-in ([#5588](https://github.com/Hmbown/CodeWhale/issues/5588)), and the Fleet config view makes model switching difficult ([#5589](https://github.com/Hmbown/CodeWhale/issues/5589)).

- **Documentation and i18n gap** — English-only docs block Chinese-speaking users, and stale references such as `api.deepseeki.com` remain in the docs after being removed from code ([#5482](https://github.com/Hmbown/CodeWhale/issues/5482), [#5564](https://github.com/Hmbown/CodeWhale/issues/5564)).

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*