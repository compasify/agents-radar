# AI CLI Tools Community Digest 2026-07-16

> Generated: 2026-07-16 01:26 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Comparison Report — 2026-07-16

## 1. Ecosystem Overview

The AI CLI tools landscape continues to mature rapidly, with all major platforms shipping daily releases and fixes. Sub-agent reliability and cost containment emerged as the dominant cross-cutting concern—uncontrolled recursive spawning in Claude Code has cost users hundreds of dollars, while Gemini CLI and OpenAI Codex face analogous agent-hanging and lifecycle management issues. MCP (Model Context Protocol) integration is a second major battleground: Copilot CLI and Qwen Code are actively debugging OAuth flow and tool-exposure gaps, while OpenCode and Pi are hardening security boundaries around tool invocation. Platform-specific stability—particularly Windows ARM64 crash-loops in Codex and Wayland display issues in Gemini CLI—remains a persistent friction point. All tools show active daily development, with release cadences ranging from patch releases to nightly builds.

## 2. Activity Comparison

| Tool | Hot Issues (24h) | Open PRs (24h) | Release Status |
|------|-----------------|---------------|----------------|
| **Claude Code** | 10 active (3 critical) | 3 open | v2.1.211 shipped today |
| **OpenAI Codex** | 10 active (1 closed) | 0 open, 10 merged | 3 Rust alpha tags |
| **Gemini CLI** | 10 active | 10 merged/pending | Nightly v0.52.0 |
| **Copilot CLI** | 10 active | 0 PRs in 24h | v1.0.71-3 patch |
| **Kimi Code CLI** | 0 updated | 1 open | No release today |
| **OpenCode** | 10 active | 10 merged/pending | v1.18.2 shipped today |
| **Pi** | 10 active | 10 merged/pending | No release today |
| **Qwen Code** | 10 active | 10 merged/pending | Nightly + cua-driver v0.7.2 |
| **DeepSeek TUI** | 10 noteworthy | 10 active (1 merged) | No release today |

**Key observations:**
- OpenAI Codex had the highest PR merge velocity (10 merged in 24h)
- Claude Code ships production releases (v2.1.211) while Codex iterates in Rust alpha
- Kimi Code CLI shows minimal community activity—only 1 PR, 0 issues updated
- Copilot CLI had zero PR activity, suggesting a development pause

## 3. Shared Feature Directions

### Sub-agent Lifecycle & Cost Controls
- **Claude Code, Gemini CLI, OpenAI Codex, Qwen Code** — All face reports of recursive/infinite agent spawning, missing depth limits, and cost explosions. Claude Code users demand kill switches and per-session token caps; Gemini CLI tracks false "success" reports after MAX_TURNS; Qwen Code is adding per-model concurrency limits.
- **Common requirements:** Depth caps, cost monitors, kill switches, session-level token budgets.

### MCP Integration Maturity
- **Claude Code, Copilot CLI, Qwen Code, OpenCode** — MCP tool exposure, OAuth bridging, and `readOnlyHint` security bypasses are active areas. Copilot CLI has 5 open issues on MCP OAuth flow failures alone.
- **Common requirements:** Reliable tool exposure, OAuth token bridging from app UI to CLI, pagination support, security boundary enforcement.

### Session Management & Data Integrity
- **Claude Code, OpenCode, Pi, Copilot CLI** — Silent data loss (truncation, dropped text, compaction failures), invisible orphan processes, session history bloat, and scroll position corruption are recurring themes.
- **Common requirements:** Session identity/instance locking, compaction reliability, data loss prevention, session search/archive.

### VS Code Extension Parity
- **Claude Code, OpenAI Codex** — Both have feature gaps between CLI TUI and VS Code extension. Claude Code's `/workflows` command is broken in VS Code (3 reports); Codex's Linux webview panel intermittently fails to load.

### Platform-Specific Stability
- **Windows ARM64:** OpenAI Codex (#33381 crash-loop), Claude Code (PowerShell script block bypasses), Pi (absolute path resolution issues)
- **Linux Wayland:** Gemini CLI (browser subagent failure), Pi (Nix flake support requested)
- **WSL:** OpenCode (notification server crash on restart)

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|-------------|------------|-------------|----------|-----|-----------|--------------|
| **Primary focus** | Enterprise agent orchestration | Multi-model sandboxed coding | Google Cloud-native dev | GitHub ecosystem automation | Desktop-first coding IDE | Lightweight modular CLI | Chinese enterprise + CUA | Terminal-first Rust TUI |
| **Target user** | Enterprise dev teams | Power users, multi-model | Cloud/API developers | GitHub ecosystem users | Desktop IDE users | CLI minimalists | Chinese enterprise teams | Terminal power users |
| **Model strategy** | Claude only | OpenAI + BYOK | Gemini 3 | Multi-provider BYOK | Any provider | Any provider | Qwen-native + multi | Multi-provider BYOK |
| **Security posture** | Permission previews, spoof protection | Sandboxed execution, dangerous-command detection | Shell variable expansion blocking | MCP OAuth security | Prompt injection boundaries, WebFetch scoping | Trusted-folders system | Trusted invocation context | glibc dependency issues |
| **Unique strength** | Sub-agent orchestration | Rust alpha iteration speed | Google Cloud integration | MCP ecosystem bridge | Desktop UI design | Extensibility (hooks, extensions) | CUA driver + Daemon SSE | Refactoring discipline (god object splitting) |
| **Weakness (today)** | Recursive agent spawns, no cost caps | Windows ARM64 crash-loop | Terminal hang/corruption | MCP OAuth broken, no PR activity | v1.18 UI regression backlash | OpenAI Codex stability issues | CI flakiness, trust edge cases | Windows TUI reliability, i18n gaps |

## 5. Community Momentum & Maturity

**High momentum (rapid iteration, high engagement):**
- **OpenAI Codex** — 10 PRs merged in 24h, Rust alpha development active, strong community engagement on Windows stability issues (35+ comments on single issue)
- **Gemini CLI** — 17 PRs pushed today, active security hardening (shell variable expansion fix), nightly releases
- **Qwen Code** — 10 PRs merged/pending, CUA driver release, daemon architecture maturing (multi-workspace health, stateless SSE)
- **OpenCode** — v1.18.2 shipped with critical subagent fixes, 10 PRs active, high community engagement on UI changes (60+ comments on tab layout)

**Moderate momentum (stable iteration, focused issues):**
- **Claude Code** — v2.1.211 shipped, but issue tracker dominated by critical unresolved bugs (recursive spawning, silent data loss); community frustration is building
- **Pi** — Active PR pipeline (10 PRs), SQLite session storage infrastructure, but OpenAI Codex connection issues are a recurring drag on usability
- **DeepSeek TUI** — Maintainer-driven refactoring wave, 11 PRs active, but community engagement moderate (50 open issues)

**Lower momentum (minimal activity):**
- **Copilot CLI** — Zero PRs in 24h, patch release for minor fixes, MCP integration bugs dominate
- **Kimi Code CLI** — Near-zero community activity (0 issues, 1 PR), signals either an early-stage project or a development pause

## 6. Trend Signals

1. **Cost governance is the #1 unmet need.** Across Claude Code ($600+ token burn), Gemini CLI (false MAX_TURNS success), and OpenAI Codex (cache write token tracking PR), the industry lacks standardized cost caps, depth limits, and real-time burn monitoring. **Recommendation:** Build a shared cost governance API/specification.

2. **MCP is becoming universal but immature.** Every major CLI supports MCP integration, but OAuth flow failures, tool exposure bugs, and security bypasses are common. **Recommendation:** Standardize MCP OAuth flows and trusted-invocation-context patterns.

3. **Desktop vs. CLI parity gap persists.** Claude Code's `/workflows` command and Gemini CLI's browser subagent both work in TUI but not in VS Code or desktop. **Recommendation:** Extensions should treat TUI as the reference implementation and prioritize parity.

4. **Data integrity is the silent trust killer.** Silent truncation (Claude Code), history loss after upgrade (OpenCode), dropped mid-turn text (Claude Code), and scroll corruption (Gemini CLI) are eroding user confidence. **Recommendation:** Mandatory data integrity audits for all session history paths.

5. **Chinese enterprise ecosystem is maturing in parallel.** Qwen Code's DingTalk/WeCom integrations, DeepSeek TUI's Sogou IME fix and TelecomJS provider, and Pi's future Nix support show that the Chinese developer tools ecosystem is converging but not yet interoperable with Western toolchains.

6. **Rust is winning for core infrastructure.** OpenAI Codex's alpha train, DeepSeek TUI's entire codebase, and Qwen Code's CUA driver are Rust-based. The performance and safety benefits are validated by production usage, but Windows ARM64 native addon compatibility remains a pain point.

7. **Sub-agent architecture is being redesigned on the fly.** All major tools shipped sub-agent spawning too early, and are now retrofitting depth limits, concurrency caps, and lifecycle management. **Recommendation:** Define an open sub-agent lifecycle specification before the next generation of tools ships.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-16 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following Pull Requests have attracted the most community discussion and represent the most-watched Skills activity:

### #1298 — fix(skill-creator): run_eval.py reports 0% recall — install eval artifact as real skill; Windows fixes
- **Status:** Open | **Created:** 2026-06-10 | **Comments:** High activity
- **Functionality:** Fixes a critical bug where `run_eval.py` always reports 0% recall, rendering the description-optimization loop useless. Addresses Windows stream reading, trigger detection, and parallel worker issues.
- **Discussion highlights:** References Issue #556 with 10+ independent reproductions. Core fix involves installing the eval artifact as a real skill file rather than relying on `claude -p` invocation.
- **Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298)

---

### #514 — Add document-typography skill: typographic quality control for generated documents
- **Status:** Open | **Created:** 2026-03-04 | **Comments:** High activity
- **Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses typographic issues that affect every document Claude generates but users rarely request explicitly.
- **Discussion highlights:** Recognized as a universal quality-of-life improvement. Community interest centers on integration with existing document skills (pdf, docx).
- **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

---

### #538 — fix(pdf): correct case-sensitive file references in SKILL.md
- **Status:** Open | **Created:** 2026-03-06 | **Comments:** High activity
- **Functionality:** Fixes 8 case-sensitivity mismatches between SKILL.md references and actual file names (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`), which breaks on case-sensitive file systems.
- **Discussion highlights:** Demonstrates community attention to cross-platform correctness, particularly Linux/macOS environments where file system case-sensitivity matters.
- **Link:** [PR #538](https://github.com/anthropics/skills/pull/538)

---

### #486 — Add ODT skill — OpenDocument text creation and template filling
- **Status:** Open | **Created:** 2026-03-01 | **Comments:** High activity
- **Functionality:** Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods). Triggers on mentions of 'ODT', 'ODS', 'ODF', 'LibreOffice document'.
- **Discussion highlights:** Community interest in LibreOffice/OxygenOffice interoperability. Discussion around maintaining compatibility with existing document skills.
- **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

---

### #210 — Improve frontend-design skill clarity and actionability
- **Status:** Open | **Created:** 2026-01-05 | **Comments:** High activity
- **Functionality:** Revises the frontend-design skill for clarity, actionability, and internal coherence. Ensures every instruction is something Claude can follow within a single conversation.
- **Discussion highlights:** Focus on reducing ambiguity in design instructions. Community feedback emphasizes making outputs production-ready rather than conceptual.
- **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

---

### #83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace
- **Status:** Open | **Created:** 2025-11-06 | **Comments:** High activity
- **Functionality:** Two meta-skills: `skill-quality-analyzer` evaluates skills across five dimensions (Structure & Documentation 20%, plus others); `skill-security-analyzer` performs security audits on skill code.
- **Discussion highlights:** Addresses community concern about skill quality consistency and the trust boundary issue (Issue #492). Discussion includes whether these should be integrated into CI/CD.
- **Link:** [PR #83](https://github.com/anthropics/skills/pull/83)

---

### #1367 — feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate
- **Status:** Open | **Created:** 2026-06-28 | **Comments:** High activity
- **Functionality:** A universal skill that audits AI output before delivery — mechanical file verification first, then four-dimension reasoning audit in damage-severity priority order. Works with any project and any tech stack.
- **Discussion highlights:** Represents a new category of "quality gate" skills. Community interest in integrating with CI/CD pipelines and code review workflows.
- **Link:** [PR #1367](https://github.com/anthropics/skills/pull/1367)

---

### #1050 / #1099 — Windows compatibility fixes for skill-creator
- **Status:** Both Open | **Created:** April–May 2026 | **Comments:** High activity
- **Functionality:** Multiple PRs fixing Windows-specific issues: subprocess PATHEXT handling (`claude.cmd`), cp1252 encoding, select() on pipes, and WinError 10038 crashes.
- **Discussion highlights:** Windows compatibility is a recurring theme affecting ~20% of users. The fixes are small (1-line changes) but unblock the entire Windows userbase.
- **Links:** [PR #1050](https://github.com/anthropics/skills/pull/1050) · [PR #1099](https://github.com/anthropics/skills/pull/1099)

---

## 2. Community Demand Trends

The most-anticipated new Skill directions, distilled from Issues:

| Trend | Description | Key Issues |
|---|---|---|
| **Quality Assurance & Security** | Automated skill auditing, validation pipelines, security boundary enforcement | #492 (trust boundary), #202 (skill-creator best practices), #83 (meta-analyzer) |
| **Windows Compatibility** | Fixing Unix-first assumptions in skill-creator scripts; subprocess, encoding, pipe handling | #1061 (3 issues combined), #556 (0% trigger rate on Windows) |
| **Cross-Platform Document Handling** | ODT support, typographic quality, LibreOffice integration | #486 (ODT skill), #514 (typography), #538 (case sensitivity) |
| **Organizational Sharing** | Team skill distribution, shared libraries, enterprise deployment | #228 (org-wide sharing), #189 (duplicate skills) |
| **Safety & Governance** | Agent governance patterns, access control for document processing, permission management | #412 (agent governance), #1175 (SPO security) |
| **Reasoning Quality Gates** | Pre-task calibration, adversarial review, delivery verification pipelines | #1385 (3-gate pipeline), #1367 (self-audit) |

---

## 3. High-Potential Pending Skills

These PRs have active community engagement and are likely to land soon:

| PR | Skill | Potential Impact |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | fix(skill-creator): run_eval recall | Unblocks the description-optimization loop for all skill creators |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit (v1.3.0) | Establishes quality gate pattern for all skill outputs |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | Comprehensive coverage of testing trophy model, React, edge cases |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel (retro game dev) | Niche but strong community excitement for Pyxel engine integration |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | Industrial-grade color expertise (ISCC-NBS, Munsell, CAM16) |
| [#1323](https://github.com/anthropics/skills/pull/1323) | fix(skill-creator): trigger detection | Second fix to the 0% recall bug; addresses name detection edge case |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for skill-development infrastructure itself** — fixing the skill-creator toolbox (Windows compatibility, evaluation accuracy, validation) — followed by quality assurance meta-skills that audit, govern, and verify AI outputs, rather than vertical domain-specific skills.

---

# Claude Code Community Digest — 2026-07-16

## Today's Highlights

Critical sub-agent recursion bugs continue to dominate the issue tracker, with **three major reports** (#68619, #69578, #72732) documenting uncontrolled spawning that has collectively cost users **hundreds of dollars in wasted API tokens**. The team shipped a fix for stream-json output visibility, but a mounting pattern of session management issues — including concurrent session writes and invisible orphan processes — suggests deeper architectural problems. The `/workflows` command remains broken in VS Code, now with three separate reports (#72292, #74585, #75146).

---

## Releases

**v2.1.211** — [Release Link](https://github.com/anthropics/claude-code/releases/tag/v2.1.211)
- Added `--forward-subagent-text` flag and `CLAUDE_CODE_FORWARD_SUBAGENT_TEXT` environment variable to include subagent text and thinking in stream-json output
- Fixed permission previews relayed to chat channels not neutralizing bidirectional-override, zero-width, and look-alike characters

A minor but targeted release. The stream-json enhancement addresses a longstanding visibility gap for users monitoring subagent activity programmatically. The permission preview fix closes a security hygiene issue where spoofed text could bypass visual inspection.

---

## Hot Issues (Top 10)

### 🔴 Critical / Cost-Related

1. **#68619 — [CRITICAL] Subagent spawning infinite recursion** — [Issue](https://github.com/anthropics/claude-code/issues/68619)
   - **What:** Subagents recursively spawn 50+ levels deep, ignoring `CLAUDE_CODE_FORK_SUBAGENT=0`. Permission denials trigger more spawning instead of stopping. Agents fetch individual files via HTTP instead of batch cloning.
   - **Why it matters:** 31 comments, 10 👍. Multiple regressions compound into a catastrophic token burn scenario. The author describes it as a "compounding crash" with no mitigation.
   - **Community reaction:** High engagement. Users are linking related reports, calling for an urgent depth cap and a kill switch.

2. **#69578 — ~800K token burn in single session ($27.60)** — [Issue](https://github.com/anthropics/claude-code/issues/69578)
   - **What:** Sub-agents recursively spawned children without depth limit, consuming 800K+ tokens with near-zero useful output.
   - **Why it matters:** Concrete dollar figure adds urgency. The user was charged beyond their Max Plan subscription.
   - **Community reaction:** 8 comments, 1 👍. Users are sharing similar horror stories, calling this a "dealbreaker" for production use.

3. **#72732 — $600+ uncontrolled agent spawning** — [Issue](https://github.com/anthropics/claude-code/issues/72732)
   - **What:** The main agent provided subagents the tool to spawn further subagents, creating an exponential cost explosion exceeding $600.
   - **Why it matters:** Shows the pattern isn't isolated — three distinct reports with escalating dollar amounts.
   - **Community reaction:** Marked duplicate of #68619. Users are frustrated that no fix has shipped despite weeks of reports.

### 🔴 Session & Data Integrity

4. **#53940 — Cowork Edit/Write tools silently truncate files** — [Issue](https://github.com/anthropics/claude-code/issues/53940)
   - **What:** A byte-conservation buffer cap causes silent truncation during Cowork edit/write operations. Fires deterministically at all file sizes.
   - **Why it matters:** **43 comments** — highest engagement of any open issue. Silent data loss in a collaboration feature is a trust-breaking bug.
   - **Community reaction:** Users are sharing recovery workarounds. Some have lost hours of work. Maintainers have repro steps but no fix timeline.

5. **#77463 — Session instances are invisible (the "kids in a trenchcoat" problem)** — [Issue](https://github.com/anthropics/claude-code/issues/77463)
   - **What:** Fork/resume divergence across multiple surfaces leads to conflicting writes, stale state, and premium-rate token burn. No instance identity exists anywhere.
   - **Why it matters:** Describes a systemic architectural flaw. Multiple issues (#69364, #75761) describe the same root cause — no session locking.
   - **Community reaction:** Users are connecting dots between seemingly unrelated bugs. Strong technical analysis in comments.

6. **#77960 — Assistant text silently dropped mid-turn** — [Issue](https://github.com/anthropics/claude-code/issues/77960)
   - **What:** Text emitted after a tool result but before the next tool call is silently discarded from both TUI and session transcript.
   - **Why it matters:** Data loss that corrupts the session record. Reproduction steps provided; the text demonstrably reaches Claude Code but never surfaces.
   - **Community reaction:** Filed today. Early attention from maintainers expected.

### 🔴 Agent Reliability

7. **#77834 — Agent fan-out pays ~47K uncached startup tokens per task** — [Issue](https://github.com/anthropics/claude-code/issues/77834)
   - **What:** Each sub-task in a fan-out pattern burns ~47K uncached tokens, causing multi-million-token sessions.
   - **Why it matters:** Filed yesterday, already 3 comments. Adds a cost-efficiency dimension to the subagent debate.
   - **Community reaction:** Users are asking about caching strategies and batching support.

8. **#74990 — /compact and auto-compaction drop Available skills system-reminder** — [Issue](https://github.com/anthropics/claude-code/issues/74990)
   - **What:** Session compaction (manual or automatic) removes the skills system-reminder, causing agents to lose awareness of installed skills.
   - **Why it matters:** /reload-skills reports "no changes" — the skills aren't actually forgotten, just the reminder is dropped. Subtle, hard-to-debug regression.
   - **Community reaction:** 3 comments. Users report this causes agents to stop using skills mid-session.

9. **#77950 — Grandchild background agents can't message their direct parent** — [Issue](https://github.com/anthropics/claude-code/issues/77950)
   - **What:** Nested sub-agents stall indefinitely because their completion messages never reach the direct parent — they go to the grandparent instead.
   - **Why it matters:** Breaks multi-level orchestration patterns. Filed yesterday, already shows the agent architecture has depth-related bugs.
   - **Community reaction:** Filed by a user with a clear reproduction. Early but concerning.

### 🔴 Platform / IDE

10. **#77785 — Claude Desktop extensions panel permanently stuck on "Loading..."** — [Issue](https://github.com/anthropics/claude-code/issues/77785)
    - **What:** Installing any local `.mcpb` extension causes the extensions panel to hang forever with "Loading extensions..." due to an IPC handler TypeError.
    - **Why it matters:** Filed yesterday, 4 comments. Blocks all extension management on macOS desktop.
    - **Community reaction:** Users are removing all extensions as a workaround. No official response yet.

---

## Key PR Progress

1. **#77916 — Add code-quality-pipeline plugin** — [PR](https://github.com/anthropics/claude-code/pull/77916)
   - **What:** A skill-based plugin defining two quality gates: a per-file sequential pipeline (lint → test → type-check → analyze) and a cross-file e2e gate.
   - **Why it matters:** Represents a maturing plugin ecosystem. Could become a reference for quality pipeline implementations.
   - **Status:** Open, 0 comments.

2. **#77709 — Add settings example: official marketplace only** — [PR](https://github.com/anthropics/claude-code/pull/77709)
   - **What:** Demonstrates restricting plugin marketplaces to only the official Anthropic marketplace using `strictKnownMarketplaces`.
   - **Why it matters:** Addresses security concerns from users who want to limit plugin sources.
   - **Status:** Open, 0 comments.

3. **#77705 — fix(plugin-dev): validate-settings.sh false-passes marker check** — [PR](https://github.com/anthropics/claude-code/pull/77705)
   - **What:** Fixes a script that incorrectly accepts files without YAML frontmatter, then emits a raw Bash error.
   - **Why it matters:** Prevents invalid plugin settings from being erroneously validated.
   - **Status:** Open, 0 comments.

*Note: Only 3 PRs were updated in the last 24h, suggesting low contribution velocity or a maintainer focus on internal fixes.*

---

## Feature Request Trends

Based on the top-voted enhancements and recurring patterns across all open issues:

1. **Session instance management** — Multiple requests for session locking, explicit instance identity, and prevention of concurrent writes. The "kids in a trenchcoat" problem (#77463) and resume-while-alive bugs (#69364, #75761) point to a fundamental need for session ownership and conflict detection.

2. **Cowork project folder management** - #40043 (55 👍) proposes allowing removal of local folders from Cowork project context. This has been open since March and remains the highest-voted open feature request — users find project context management rigid.

3. **Subagent cost controls** — Ubiquitous across the top issues. Users want: maximum subagent depth limits, per-session cost caps, real-time token burn monitoring, and a kill switch for runaway agents.

4. **VS Code /workflows parity** — Three separate issues (#72292, #74585, #75146) request the `/workflows` command work in the VS Code extension. This is a feature gap, not a bug.

5. **Configurable auto-compact threshold** — #70681 requests user control over when automatic session compaction triggers. Current defaults destroy context too aggressively for some workflows.

---

## Developer Pain Points

1. **Sub-agent cost explosions** — The #1 pain point. Three critical reports with $27, $600+ actual damages. The lack of depth limits, cost caps, or a kill switch makes production deployment high-risk. Users report feeling "held hostage" by their own agent.

2. **Silent data loss** — Cowork truncation (#53940), mid-turn text dropping (#77960), and compaction dropping skill reminders (#74990) all share a common pattern: data vanishes without warning. This erodes trust in the platform for serious development work.

3. **Session management chaos** — Fork/resume creating orphan processes, conflicting writes, and invisible twin agents. Users report resuming a session only to discover another process is still writing to the same file. The "kids in a trenchcoat" metaphor captures the frustration: no single source of truth.

4. **VS Code extension gaps** — The `/workflows` command being silently ignored (#72292) and the delete-button-without-confirmation UI hazard (#65703) suggest the VS Code integration lags behind the CLI TUI in both features and quality.

5. **Permission system bypasses** — PowerShell script blocks bypassing allowlists (#74916) and remote-control MCP prompts never surfacing in web UI (#60385) create security blind spots. Users are finding it hard to trust that their permission rules are actually enforced.

---

*Digest generated 2026-07-16. Data source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-16

## Today's Highlights
Three Rust alpha releases (0.145.0-alpha.13–15) landed today, signaling active iteration on the CLI/agent runtime. The community remains focused on Windows stability: **Issue #23794** (visible context/token indicator missing, 172 comments, 170 👍) finally closed after two months, but a new wave of Windows ARM64 crash-loop reports (35+ comments, multiple duplicates) and `serialport.node` native addon failures dominate the bug tracker. On the PR side, copyberry[bot] merged a remarkable 20+ PRs covering sandbox hardening, MCP tool call cleanup, and external agent migration.

---

## Releases
**No significant user-facing releases today.** Three rapidly-sequenced Rust alpha tags were cut:
- [`rust-v0.145.0-alpha.13`](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.13)
- [`rust-v0.145.0-alpha.14`](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.14)
- [`rust-v0.145.0-alpha.15`](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.15)

These appear to be incremental packaging/fix releases; no changelog details were published.

---

## Hot Issues

1. **[#23794 — CLOSED] Codex Desktop no longer shows visible context/token usage indicator**  
   *Author: HushHuang* | [Issue](https://github.com/openai/codex/issues/23794)  
   After 172 comments and 170 👍 over two months, this is now closed. The missing context/token visualization in the app was a top community demand for power users managing large workspaces.

2. **[#33381 — OPEN] Windows ARM64 app crash-loops on launch**  
   *Author: LukeWHolliday* | [Issue](https://github.com/openai/codex/issues/33381)  
   35 comments in 24 hours. The app appears, runs ~15s, then exits without error. Crashpad minidumps point to `serialport.node` failing to load `napi_*` symbols under ARM64 emulation. **Duplicate reports: #33415, #33380** — this is the #1 Windows crisis today.

3. **[#31846 — OPEN] GPT-5.3 Codex Spark fails with "Unsupported parameter: reasoning.summary"**  
   *Author: osipovgleb* | [Issue](https://github.com/openai/codex/issues/31846)  
   27 comments, 33 👍. A model-side parameter mismatch blocking GPT-5.3 Spark on Pro subscriptions. Community suspects a rollout gap between the model API and the desktop app.

4. **[#33375 — OPEN] Repeated `serialport.node` delay-load failures cause severe UI lag**  
   *Author: warriorjamez* | [Issue](https://github.com/openai/codex/issues/33375)  
   22 comments. The Windows x64 app becomes unresponsive due to repeated delay-load failures of the same native addon. Appears to be a prelude to the full crash in #33381.

5. **[#30178 — OPEN] Codex Desktop in-app Browser crashes the main app during webview navigation**  
   *Author: vir-tu* | [Issue](https://github.com/openai/codex/issues/30178)  
   19 comments. Navigating the embedded browser crashes the entire app — aggravating for users relying on in-app web tools.

6. **[#32782 — OPEN] GPT-5.6 Sol root exposes `spawn_agent` without `agent_type`, blocking custom agent routing**  
   *Author: pax-k* | [Issue](https://github.com/openai/codex/issues/32782)  
   8 comments, 9 👍. A multi-agent schema omission prevents custom agent selection when using GPT-5.6 Sol as root. Impacts advanced agent orchestration workflows.

7. **[#31097 — OPEN] GPT-5.5 forces MultiAgentV2 despite disable and hides custom-agent controls**  
   *Author: Alek2077* | [Issue](https://github.com/openai/codex/issues/31097)  
   8 comments. Users report `MultiAgentV2` is forcibly enabled on GPT-5.5, ignoring config and hiding documented controls. Community frustration around loss of agent-architecture choice.

8. **[#23198 — OPEN] Codex Desktop on Windows is extremely slow**  
   *Author: Yemvis* | [Issue](https://github.com/openai/codex/issues/23198)  
   16 comments, 44 👍. Two-month-old performance bug still open. Complaints of general sluggishness isolated to the Codex app itself, not the host machine.

9. **[#30813 — OPEN] CLI: `/agent` lists active subagents but provides no thread selector**  
   *Author: htregidgo* | [Issue](https://github.com/openai/codex/issues/30813)  
   10 comments. CLI users can see subagent lists but can't switch threads — a usability gap in the TUI that blocks multi-agent debugging.

10. **[#32530 — OPEN] VS Code Codex panel intermittently stuck loading on Linux**  
    *Author: georgesma* | [Issue](https://github.com/openai/codex/issues/32530)  
    5 comments, 8 👍. Webview assets fail with `net::ERR_FAILED` on Linux, leaving the extension panel blank. Affects VS Code 1.128.0 on Ubuntu 26.04.

---

## Key PR Progress

1. **[#33467 — CLOSED] Remove template IDs from MCP tool call metadata**  
   [PR](https://github.com/openai/codex/pull/33467)  
   Cleans up MCP protocol: removes `template_id` from tool call items and lifecycle events. Simplifies MCP integrations.

2. **[#33464 — CLOSED] Strengthen forced `rm` command detection**  
   [PR](https://github.com/openai/codex/pull/33464)  
   Expands dangerous-command heuristic to catch `rm -rf` inside complex shell syntax, substitutions, and control flow. Safety improvement.

3. **[#33455 — CLOSED] Backport: expand `is_dangerous_command`**  
   [PR](https://github.com/openai/codex/pull/33455)  
   Cherry-picks 7 commits onto `release/0.144` — adds dangerous-command detection in danger-full-access mode and expands literal Bash parsing.

4. **[#33459 — CLOSED] Allow more time for image generation in code mode**  
   [PR](https://github.com/openai/codex/pull/33459)  
   Increases image generation yield to 120s for initial calls, preventing premature timeouts when generating images in code mode.

5. **[#33454 — CLOSED] Track prompt cache write token usage**  
   [PR](https://github.com/openai/codex/pull/33454)  
   Adds `cache_write_input_tokens` to token usage aggregation and exposes it in protocol, SDK, and exec events. Enables cache-hit accounting.

6. **[#33444 — CLOSED] Add external agent memory migration**  
   [PR](https://github.com/openai/codex/pull/33444)  
   Feature-gated `MEMORY` migration item: discovers project memory Markdown files, preserves scope, and copies into Codex memory extension workspace.

7. **[#33426 — CLOSED] Add Cursor support to setup import**  
   [PR](https://github.com/openai/codex/pull/33426)  
   Detects and imports Cursor settings, MCP servers, project instructions, hooks, agents, and chat sessions. Expands `/import` flow beyond Claude Code.

8. **[#33432 — CLOSED] Preserve paginated history for spawned subagents**  
   [PR](https://github.com/openai/codex/pull/33432)  
   Subagents now inherit paginated history mode from parent, loading parent context as an inherited rollout prefix. Critical for long-running multi-agent sessions.

9. **[#33430 — CLOSED] Avoid creating metadata paths in the Windows sandbox**  
   [PR](https://github.com/openai/codex/pull/33430)  
   Prevents elevated Windows sandbox from creating write-deny metadata directories. Fixes workspace integrity for sandboxed agents.

10. **[#33424 — CLOSED] Attribute OpenAI docs MCP requests to Codex**  
    [PR](https://github.com/openai/codex/pull/33424)  
    Adds `source=codex` to requests sent to the OpenAI developer docs MCP endpoint. Enables usage attribution for internal analytics.

---

## Feature Request Trends
- **Multi-chat/multi-tab support** — [#13036](https://github.com/openai/codex/issues/13036) (10 comments, 6 👍) continues to gain traction. Users want concurrent chat sessions for multi-tasking.
- **Full 1.05M context window for GPT-5.6 Sol** — [#33306](https://github.com/openai/codex/issues/33306) (2 comments) requests opt-in full context and configurable compaction triggers.
- **Configurable stream reconnect backoff** — [#16164](https://github.com/openai/codex/issues/16164) (closed, but sentiment persists) highlights that fixed exponential backoff hurts custom/provider setups.
- **Better subagent lifecycle management** — The cluster of subagent issues (#30813, #32782, #31097) signals strong demand for thread selectors, agent-type controls, and paginated history.

---

## Developer Pain Points
- **Windows ARM64 instability is the #1 pain point.** Three distinct issues (#33381, #33415, #33380) all report the same `serialport.node` addon failure on ARM64. The app crash-loops with no error dialog — a serious regression for Windows-on-ARM users.
- **Windows UI lag from native addon failures** — [#33375](https://github.com/openai/codex/issues/33375) shows that even on x64, `serialport.node` delay-load failures degrade the entire app.
- **Forced MultiAgentV2 on GPT-5.5** — [#31097](https://github.com/openai/codex/issues/31097) reveals users cannot disable the multi-agent system, even when they need simpler single-agent workflows.
- **Missing context/token usage indicator** — Though [#23794](https://github.com/openai/codex/issues/23794) is now closed, the 172 comments and 170 👍 show this is a deeply felt gap for power users.
- **SSH remote project "No chats" regression** — Two related issues (#27284, #30808) report that remote projects show empty state despite actual threads existing in the DB, likely from symlink or state-migration bugs.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-16

## Today's Highlights
The team pushed **17 PRs** today, with critical fixes landing for MCP timeout hangs, 400 Bad Request errors after tool rejection, and a security patch for shell variable expansion bypasses. A high-severity bug was reopened: subagent recovery after hitting `MAX_TURNS` falsely reports `GOAL success`, masking real interruptions. The nightly release `v0.52.0-nightly.20260715` is now available.

## Releases
- **v0.52.0-nightly.20260715.gfa975395b** — Routine nightly build. No breaking changes or dedicated release notes.  
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260714.gfa975395b...v0.52.0-nightly.20260715.gfa975395b)

## Hot Issues (Top 10)

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery after MAX_TURNS falsely reports GOAL success**  
   `codebase_investigator` subagent hits turn limits but returns `status: "success"`. This is a **P1 bug** that hides real failures. Community upvoted (👍2) and has 10 comments.

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing**  
   P2 enhancement to exploit Gemini 3's native bash affinity. Proposes sandboxing without external deps. High effort, ongoing design discussion.

3. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component-level evaluations**  
   EPIC tracking 76 behavioral eval tests across 6 Gemini models. Demanded for quality assurance of sub-agent behaviors.

4. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs forever**  
   P1 bug: deferring to the generalist agent blocks indefinitely (👍8). Users report hour-long waits. Workaround: disable sub-agents.

5. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command gets stuck "Awaiting input" after completion**  
   P1 core bug—simple commands hang post-execution. Frustration marker: 3 upvotes, 4 comments.

6. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent fails in Wayland**  
   P1—browser agent can't work on Wayland display servers. Blocks Linux users.

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retries low-signal sessions indefinitely**  
   P2 bug causing infinite loops during background memory extraction. Relevant to memory reliability.

8. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini ignores custom skills and sub-agents**  
   P2 — models skip explicitly defined skills unless forced. Undermines tool extensibility.

9. **[#21000](https://github.com/google-gemini/gemini-cli/issues/21000) — Use native file tools for task tracker**  
   P3 experiment exploring AST/native tooling for maintenance instead of agent-based approaches.

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent should discourage destructive git/DB commands**  
    P2 safety feature: model uses `git reset --force` when safer alternatives exist. Community request for guardrails.

## Key PR Progress (Top 10)

1. **[#28410](https://github.com/google-gemini/gemini-cli/pull/28410) — fix(core): shorten MCP tools/list discovery timeout**  
   P1 fix: prevents 10-minute freeze when MCP server doesn't respond. Fail-fast now enabled.

2. **[#28407](https://github.com/google-gemini/gemini-cli/pull/28407) — fix(core,a2a): group cancelled tool responses to prevent 400 Bad Request**  
   Merged: tool rejection broke chat continuity. Fix coalesces roles after cancellation.

3. **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403) — fix(core): block $VAR and ${VAR} variable expansion bypass**  
   Security patch for GHSA-wpqr-6v78-jr5g. Attacker could exfiltrate secrets via shell variable expansion.

4. **[#28406](https://github.com/google-gemini/gemini-cli/pull/28406) — fix(availability): apply modelIdResolutions to tool sub-agent configs**  
   P1: API-key users without preview access hit `INVALID_MODEL`. Resolves Issue #28390.

5. **[#28405](https://github.com/google-gemini/gemini-cli/pull/28405) — fix: prevent scroll position jump on content updates**  
   P1 UX fix for `VirtualizedList.tsx` — scroll jumps when user reviews changes mid-update.

6. **[#28408](https://github.com/google-gemini/gemini-cli/pull/28408) — refactor(cli): centralize dense payload detection in tool mapping**  
   P3 refactor: moves complexity out of UI layer into backend mapping.

7. **[#28164](https://github.com/google-gemini/gemini-cli/pull/28164) — fix(core): limit recursive reasoning turns per single request**  
   Adds 15-turn limit on recursive reasoning to prevent infinite loops. Configurable.

8. **[#28319](https://github.com/google-gemini/gemini-cli/pull/28319) — refactor(a2a-server): enforce path trust check before env loading**  
   Security hardening: workspace trust is now verified before loading environment variables.

9. **[#28275](https://github.com/google-gemini/gemini-cli/pull/28275) — fix(core): make direct GCP telemetry exporters optional**  
   Resolves Issue #27100 — GCP telemetry deps moved out of core for third-party consumers.

10. **[#28411](https://github.com/google-gemini/gemini-cli/pull/28411) — feat(caretaker): post comment before auto-closing feature requests**  
    Bot improvement: explains auto-close to users, improving community communication.

## Feature Request Trends
- **AST-aware codebase navigation** (Issues #22745, #22746): Users want the CLI to understand code structure beyond line-level reads — better method boundaries, accurate search, reduced token waste.
- **Zero-dependency sandboxing** (Issue #19873): Demand to run Gemini 3's bash-native capabilities without container overhead.
- **Subagent trajectory sharing** (Issue #22598): Debugging multi-agent workflows is hard; users want `/chat share` to include subagent logs.
- **Self-awareness improvements** (Issue #21432): CLI should accurately describe its own flags, hotkeys, and behavior for "self-driving" use cases.
- **Auto Memory improvements** (Issues #26522, #26525, #26523): Better retry logic, deterministic redaction, and patching hygiene for memory persistence.

## Developer Pain Points
- **Sub-agent reliability is the top frustration**: Agents hang (Issue #21409), ignore user-defined skills (Issue #21968), and mask failures as success (Issue #22323).
- **Terminal hang/corruption issues are recurring**: Shell commands stuck post-execution (Issue #25166), terminal corruption after external editor exit (Issue #24935), scroll jump on updates (PR #28405).
- **Configuration not respected**: Browser agent ignores `settings.json` (Issue #22267), sub-agents run despite being disabled (Issue #22093), symlinks in `~/.gemini/agents/` are not recognized (Issue #20079).
- **Security concerns around shell injection**: The `$VAR` bypass (PR #28403) shows that shell escaping is still an area requiring vigilance.
- **Model ID resolution headaches**: API-key users without preview access hit cryptic 400 errors (PR #28406), and tool configs hardcode model IDs that bypass resolution logic.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-16

---

## Today's Highlights

A new patch release (v1.0.71-3) improves startup reliability with better handling of invalid settings and terminal setup detection. The community remains intensely focused on **MCP (Model Context Protocol) integration**, with **five open issues** tracking OAuth flow failures, missing tool exposure, and authentication bridging for third-party servers—particularly Atlassian MCP. A **high-priority data loss bug** (Issue #4147) was filed today, where arrow key navigation hijacks in-progress input.

---

## Releases

### [v1.0.71-3](https://github.com/github/copilot-cli/releases/tag/v1.0.71-3)
**Fixes:**
- Invalid `settings.json` now shows a warning identifying the offending value instead of silently ignoring user configuration
- `/terminal-setup` no longer skips setup on terminals without real kitty keyboard support

---

## Hot Issues

| # | Issue | Why It Matters | Community |
|---|-------|----------------|-----------|
| [#223](https://github.com/github/copilot-cli/issues/223) | "Copilot Requests" permission invisible for org-owned tokens | **Enterprise blocker**: orgs can't enforce token scoping for automations without exposing PATs | 76 👍, 31 comments |
| [#1477](https://github.com/github/copilot-cli/issues/1477) | "Continuing autonomously (3 premium requests)" after model completion | **Closed bug**: users confused by premium request consumption after free tier changes | 18 👍, 11 comments |
| [#4024](https://github.com/github/copilot-cli/issues/4024) | Voice mode: all bundled ASR models fail silently (nemotron routing bug) | **Systemic failure**: `/voice` captures audio but returns empty transcriptions across all models | 8 comments |
| [#4096](https://github.com/github/copilot-cli/issues/4096) | Third-party MCP server "Connected" but tools missing from CLI sessions | **Core MCP integration bug**: OAuth token never bridges from app UI to CLI sessions | 2 👍, 5 comments |
| [#1979](https://github.com/github/copilot-cli/issues/1979) | Remote session support for Copilot CLI (attach from mobile/browser) | **Closed feature request**: high demand for Claude Code–style remote session attachment | 53 👍, 4 comments |
| [#4016](https://github.com/github/copilot-cli/issues/4016) | BYOK (`COPILOT_PROVIDER_*`) rejected in `--acp` mode (regression) | **Enterprise regression**: custom providers work for `-p` but fail in `--acp` mode with auth errors | 3 👍 |
| [#4097](https://github.com/github/copilot-cli/issues/4097) | `apply_patch` stores deleted binary in session history, exceeding 5 MB limit | **Data loss risk**: large binary deletions permanently inflate session size, breaking `/compact` | 1 👍 |
| [#4053](https://github.com/github/copilot-cli/issues/4053) | TUI hangs at 'Loading: N skills' on NFS/GPFS (SIGCHLD race) | **Platform blocker**: Linux users with network filesystems cannot use TUI mode | 2 comments |
| [#4038](https://github.com/github/copilot-cli/issues/4038) | Late-connecting MCP server injects empty user message; model echoes system prompts | **Non-interactive mode broken**: MCP servers with 7+ tools cause model to answer empty turns | 2 comments |
| [#4147](https://github.com/github/copilot-cli/issues/4147) | Arrow key hijacks cursor for session navigation, discarding in-progress input | **High-priority data loss**: bare left/right arrows open session sidebar instead of editing text | Filed today |

---

## Key PR Progress

No pull requests were updated in the last 24 hours (0 PRs). Feature development appears paused or concentrated in other branches.

---

## Feature Request Trends

1. **MCP Integration Maturity** (dominant theme)
   - Configurable MCP tools for built-in research agents ([#4076](https://github.com/github/copilot-cli/issues/4076))
   - Interactive input variables (`${input:...}`) for MCP plugins ([#4042](https://github.com/github/copilot-cli/issues/4042))
   - MCP `tools/list` pagination support ([#4006](https://github.com/github/copilot-cli/issues/4006))

2. **Remote & Persistent Sessions**
   - Remote session attachment from mobile/browser ([#1979](https://github.com/github/copilot-cli/issues/1979))
   - Persistent token/context usage indicator ([#2052](https://github.com/github/copilot-cli/issues/2052))

3. **Context Window Expansion**
   - 1M context for Claude Opus 4.7 (parity with Claude Code) ([#2785](https://github.com/github/copilot-cli/issues/2785), 62 👍)

4. **Enterprise Authentication**
   - Org-owned fine-grained token permissions ([#223](https://github.com/github/copilot-cli/issues/223), 76 👍)
   - BYOK/custom provider support in all modes ([#4016](https://github.com/github/copilot-cli/issues/4016))

---

## Developer Pain Points

1. **MCP OAuth Flow Is Broken** — Five issues ([#4096](https://github.com/github/copilot-cli/issues/4096), [#4089](https://github.com/github/copilot-cli/issues/4089), [#4085](https://github.com/github/copilot-cli/issues/4085), [#4017](https://github.com/github/copilot-cli/issues/4017), [#4084](https://github.com/github/copilot-cli/issues/4084)) report that MCP servers show "Connected" but never expose tools, particularly with Atlassian and Azure AD–protected servers. **OAuth cancellation, missing browser flows, and token bridging failures are the primary pain points.**

2. **Data Loss and Input Handling** — Issue [#4147](https://github.com/github/copilot-cli/issues/4147) (filed today) describes arrow key hijacking that discards typed input. Issue [#4136](https://github.com/github/copilot-cli/issues/4136) reports leading whitespace collapsing in chat composer, making nested Markdown impossible.

3. **Non-Interactive Mode Fragility** — Two recent issues ([#4016](https://github.com/github/copilot-cli/issues/4016), [#4038](https://github.com/github/copilot-cli/issues/4038)) show that `--acp` and `-p` modes break with MCP servers and custom providers, producing empty responses or auth failures.

4. **Platform-Specific Freezes** — Issue [#4053](https://github.com/github/copilot-cli/issues/4053) documents a TUI hang on NFS/GPFS filesystems due to a SIGCHLD race. Issue [#4014](https://github.com/github/copilot-cli/issues/4014) reports rendering corruption on Windows when adding MCP servers.

5. **Session History Bloat** — Issue [#4097](https://github.com/github/copilot-cli/issues/4097) reveals that deleted binary files remain in session history as diffs, permanently exceeding the 5 MB CAPI limit and breaking `/compact`.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-16

## Today's Highlights
The repository saw moderate activity today, with one notable Pull Request (#2500) aiming to align Python telemetry with the TypeScript rewrite’s event registry. No new releases or issues were updated in the last 24 hours, suggesting a lull in community feedback. The sole PR focuses on improving observability by capturing trace IDs and missing telemetry events, a critical step toward cross-platform consistency.

## Releases
No new releases in the last 24 hours.

## Hot Issues
*No issues were updated in the last 24 hours (Total: 0 items).*

## Key PR Progress
1. **#2500 — feat(telemetry): align events with TS schema, add trace_id and missing events**  
   *Author:* 7Sageer | *Updated:* 2026-07-15 | *Link:* [MoonshotAI/kimi-cli PR #2500](https://github.com/MoonshotAI/kimi-cli/pull/2500)  
   Aligns Python telemetry with the TypeScript rewrite's `agent-core-v2` event registry. Adds `x-trace-id` header capture via `with_raw_response` for both stream and non-stream requests. Critical for debugging distributed traces and unifying client-side event schemas. No community comments yet.

## Feature Request Trends
*No new feature request issues were updated in the last 24 hours.*

## Developer Pain Points
*No recurring developer pain points surfaced in the last 24 hours due to zero issue activity.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-07-16

---

## Today's Highlights

The v1.18.2 release shipped with critical bugfixes for subagent nesting and improved default reasoning for Meta models, while the v1.18.x Desktop UI overhaul continues to generate controversy — multiple reports document the Plan/Build mode toggle disappearing and tab titles being truncated. On the security front, three focused PRs landed to address prompt injection boundaries, WebFetch permission scoping, and config file escalation risks, signaling a hardening push.

---

## Releases

**v1.18.2** was published in the last 24 hours. Key changes include:
- **Core:** Subagents no longer launch nested subagents by default; a configurable `subagent_depth` limit is available when needed.
- **Core:** Improved default reasoning depth for Meta models.
- **Desktop:** Added `Mod+N` as an alternative keyboard shortcut for opening a new tab.

---

## Hot Issues

1. **[#36936: Desktop: wtf is the new tab layout, tab titles don't fit anymore on screen](https://github.com/anomalyco/opencode/issues/36936)**  
   A highly upvoted (👍11) complaint about the new horizontal tab layout in v1.18.x. Users report session titles are truncated, and reverting to v1.17 fixes the issue. The strong reaction signals the redesign was pushed without accommodating existing workspace patterns.

2. **[#36997: Desktop App v1.18.1 new layout hides agent (Plan/Build) switching UI](https://github.com/anomalyco/opencode/issues/36997)**  
   The Plan/Build mode toggle disappears when `newLayoutDesigns: true` is active. Users cannot see which agent is active or switch modes. A companion issue [#37158](https://github.com/anomalyco/opencode/issues/37158) confirms the same behavior — multiple reports indicate this is a regression affecting daily workflows.

3. **[#25239: Expose GitHub Copilot "Auto" option in model selector](https://github.com/anomalyco/opencode/issues/25239)**  
   With 19 comments and 14 upvotes, this long-running feature request asks for automatic model selection similar to Copilot's "Auto" mode. Community discussion suggests heavy interest in reducing manual model-switching friction.

4. **[#37063: History chat conversation not displayed after upgrade](https://github.com/anomalyco/opencode/issues/37063)**  
   A report that upgrading from v1.17.18 to v1.18.1 caused all chat history to disappear. No plugins installed. This is a data-loss concern that will likely see rapid attention.

5. **[#36942: Vertical tabs](https://github.com/anomalyco/opencode/issues/36942)**  
   A direct counter-proposal to the new horizontal tab design. The feature request argues vertical tabs make it easier to see more session titles at once. Likely to gain traction given the backlash against #36936.

6. **[#35587: Prompt leaks between sessions](https://github.com/anomalyco/opencode/issues/35587)**  
   A user reports that commands from one session appear in the history of another independent session. Cross-session contamination is a serious usability and privacy concern.

7. **[#37171: Desktop crashes on restart: "Notification server not found: wsl:Ubuntu"](https://github.com/anomalyco/opencode/issues/37171)**  
   A WSL integration crash that prevents the desktop app from starting. The error stack suggests the notification server instance isn't registered before the renderer tries to use it. Raised today — expect a fix quickly.

8. **[#37168: Allow per-session MCP selection with `serve` and `attach`](https://github.com/anomalyco/opencode/issues/37168)**  
   When multiple clients attach to a single `opencode serve` instance, MCP enabled/disabled state is shared. The request asks for per-session MCP configuration — a legitimate multi-tenant use case.

9. **[#21227: Display image attachments from tool results in chat UI](https://github.com/anomalyco/opencode/issues/21227)**  
   With 7 upvotes, users want inline image rendering when tools return image data (e.g., `webfetch` or MCP `ImageContent`). Currently such results display as raw base64 strings.

10. **[#30337: `.opencode/node_modules/` causes startup hang](https://github.com/anomalyco/opencode/issues/30337)**  
    A performance bug where the project scanner does not skip `node_modules` inside `.opencode/` directories, despite `.gitignore` settings. Causes long startup freezes for projects that use OpenCode-specific dependencies.

---

## Key PR Progress

1. **[#37129: fix(app): default advanced features for new users](https://github.com/anomalyco/opencode/pull/37129)**  
   Hides file tree, search, status, and agent selection on fresh installs; enables them for existing profiles during upgrade. Defaults hidden agent selection to Build mode with fallback. This is the team's response to the UI backlash.

2. **[#37198: fix(app): show selector for custom agents](https://github.com/anomalyco/opencode/pull/37198)**  
   Forces the agent selector visible when a project has selectable custom agents. Resolves to the build agent when hidden. A companion fix to #37129 for custom agent setups.

3. **[#37185: fix(tui): publish session event when custom tool import fails](https://github.com/anomalyco/opencode/pull/37185)**  
   Surfaces custom tool load failures in the TUI by publishing `Session.Event.Error`, matching the pattern used for plugin and skill load errors. Currently failures are silently logged.

4. **[#37182: fix(webfetch): scope always-allow to domain instead of all URLs](https://github.com/anomalyco/opencode/pull/37182)**  
   Closes a security hole where clicking "always allow" on a WebFetch prompt saved a wildcard `*` pattern. Now scopes to the current domain origin. Includes 6 new unit tests.

5. **[#37187: fix: add instruction boundary markers to prevent prompt injection](https://github.com/anomalyco/opencode/pull/37187)**  
   Addresses a prompt injection vector where user-provided guidance (`AGENTS.md`, config instructions) or file content from Read tool lacks semantic boundary markers. A file containing "Ignore previous instructions" would be treated as legitimate directive.

6. **[#37194: fix(session): resolve session overflow detection timing gaps](https://github.com/anomalyco/opencode/pull/37194)**  
   Fixes three overflow detection bugs: only checking previous step tokens, capping output reservation at 20K instead of `maxOutputTokens`, and no overflow check after large tool outputs. Addresses accumulated reports from issues #10634, #13946, and #35013.

7. **[#37141: feat(core): normalize tool and attachment images at settlement](https://github.com/anomalyco/opencode/pull/37141)**  
   Moves image resizing from the `read` tool only to a universal normalization step that applies to all tool results and user prompt attachments. Prevents unbounded inline media from causing request entity too large errors (#14562).

8. **[#37192: feat(plugin): support dynamic Effect tools](https://github.com/anomalyco/opencode/pull/37192)**  
   Allows external V2 Effect plugins to register dynamic tools without importing the host's opaque `Tool.make` instance. Lowers the barrier for third-party plugin development.

9. **[#35311: fix(core): Multiple clones of same repo are different projects](https://github.com/anomalyco/opencode/pull/35311)**  
   A large bugfix PR closing 15 related issues. Changes how OpenCode identifies projects to correctly handle multiple clones of the same repository as distinct projects with independent state.

10. **[#36752: fix(opencode): read cache write tokens from raw usage](https://github.com/anomalyco/opencode/pull/36752)**  
    Fixes incorrect `cache.write: 0` reporting for Anthropic models served through OpenAI-compatible gateways. Cache writes were being billed as plain input tokens.

---

## Feature Request Trends

1. **UI Layout Flexibility** — The strongest signal this week. Users want vertical tabs (#36942), configurable tab widths, and the ability to restore the classic sidebar. The forced horizontal tab layout in v1.18.x is the most contentious change.

2. **Intelligent Model Selection** — Requests for automatic model routing (Copilot-style "Auto" mode, #25239) indicate users want the tool to choose the best model based on task complexity rather than manual switching.

3. **Inline Media Rendering** — Users consistently ask for images returned by tools (web fetch, MCP servers) to display inline in the chat UI (#21227), rather than as raw base64 strings.

4. **Session Management Improvements** — Multiple requests for auto-generated session titles (#30926), restore of chat history after upgrade (#37063), and vertical tab layouts suggest the session UX needs refinement.

5. **Multi-tenant and Per-Session Configuration** — With `serve`/`attach` gaining adoption, users want per-session MCP selection (#37168) and per-session tool configurations.

---

## Developer Pain Points

1. **Desktop UI Regression in v1.18.x** — The new tab layout and hidden agent toggle are the week's most disruptive issues. Multiple reports (#36936, #36997, #37158, #37163) confirm that basic workflows (switching between Plan/Build modes, identifying sessions) are broken.

2. **Session Compaction Failures** — A recurring theme: compaction either fails with "context exceeds model limit" (#17340), exits silently in headless mode (#13946), or doesn't trigger for large tool outputs (#10634). The PR #37194 addresses the root timing bugs.

3. **Data Loss and State Corruption** — History disappearing after upgrade (#37063) and prompt leaks between sessions (#35587) erode trust in session persistence.

4. **Security Config Not Separated from Project Config** — Issue #37155 reports that the AI agent can modify `opencode.json` to escalate its own permissions, since security settings are not isolated from project configuration.

5. **Startup Performance and WSL Integration** — `.opencode/node_modules/` scanning hangs (#30337) and WSL notification server crashes (#37171) create friction for users on Linux and WSL environments.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-16

## Today's Highlights
The community is focusing on resolving several critical reliability issues this week, particularly around OpenAI Codex connection stability and GPU-based compaction failures. Two important security/privacy issues surfaced: OpenAI Codex exposing raw Cloudflare error HTML with client IPs, and GitHub OAuth session persistence problems. On the feature front, there's strong momentum for session management capabilities (archiving, folders, search) and making model/thinking-level changes ephemeral by default.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#4945 — openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945)** — *75 comments, 30 👍*
   Critical bug where `gpt-5.5` sessions get stuck on "Working..." without errors, forcing manual Escape recovery. The high engagement signals this is affecting many users significantly.

2. **[#6673 — OpenAI Codex exposes raw Cloudflare 520 HTML including client IP](https://github.com/earendil-works/pi/issues/6673)** — *3 comments*
   Security concern: Codex error responses expose user public IP and Cloudflare Ray ID in session logs. Needs urgent sanitization.

3. **[#5263 — Make in-session model and thinking-level changes ephemeral by default](https://github.com/earendil-works/pi/issues/5263)** — *7 comments, 7 👍*
   Well-supported design change to prevent accidental global config modifications when users just want session-specific overrides.

4. **[#6657 — Bedrock AWS_PROFILE authentication not working](https://github.com/earendil-works/pi/issues/6657)** — *5 comments*
   Persistent AWS Bedrock auth issues despite claimed fixes in 0.80.7. The `AccessDeniedException: 403` error indicates incomplete resolution.

5. **[#2310 — Create a flake.nix](https://github.com/earendil-works/pi/issues/2310)** — *6 comments, 16 👍*
   High community demand for Nix support. Despite being closed, it's the most-upvoted open issue—Nix users are actively requesting this.

6. **[#6050 — TUI full redraw clears terminal scrollback during active rendering](https://github.com/earendil-works/pi/issues/6050)** — *14 comments*
   Annoying UX bug where active rendering causes scrollback jumps. Core renderer issue affects many UI components.

7. **[#6619 — Windows dependent extensions show absolute path in banner](https://github.com/earendil-works/pi/issues/6619)** — *4 comments*
   Windows-specific path display bug where npm package dependencies show raw absolute paths instead of friendly names.

8. **[#6647 — Compaction fails on a single transient stream drop (no retry)](https://github.com/earendil-works/pi/issues/6647)** — *2 comments*
   Reliability gap: compaction lacks retry logic that normal assistant turns have. Single transient failure kills the entire compaction.

9. **[#6686 — Pi automatically logs out of GitHub](https://github.com/earendil-works/pi/issues/6686)** — *4 comments*
   Regressive issue from #2725. Users report OAuth session drops after 15-30 minutes, blocking agent mid-response.

10. **[#6688 — Extension selector renders all options without viewport windowing](https://github.com/earendil-works/pi/issues/6688)** — *2 comments*
    UX limitation in the extension API: `ctx.ui.select()` lacks virtual scrolling, making large selection lists unusable.

## Key PR Progress

1. **[#6692 — fix(agent,coding-agent): use absolute System32 path for taskkill/rundll32](https://github.com/earendil-works/pi/pull/6692)**
   Fixes `spawn ENOENT` on Node.js 24 by using absolute paths. Addresses #6596.

2. **[#6681 — windows: reset pi terminal title after checking npm packages](https://github.com/earendil-works/pi/pull/6681)**
   Narrow Windows fix for terminal title persistence bug (#6629). Simple, targeted solution.

3. **[#6671 — add usage info to branch summary, compaction and tool result entries](https://github.com/earendil-works/pi/pull/6671)**
   Enriches session metadata with usage tracking, improving cost monitoring and analytics.

4. **[#6683 — fix(coding-agent): accept colon-qualified skill names](https://github.com/earendil-works/pi/pull/6683)**
   Fixes false "Skill conflicts" warnings for plugin-namespaced skills like `inc:ship-it`.

5. **[#6680 — parse extension package name in case of dependent extension](https://github.com/earendil-works/pi/pull/6680)**
   Partial fix for Windows extension naming issues (#6619).

6. **[#6659 — fix(openai-codex): clamp session-id header to 64 chars](https://github.com/earendil-works/pi/pull/6659)**
   Fixes Codex backend validation failure by truncating overly long session ID headers.

7. **[#6651 — feat(ai): add xAI device OAuth and route grok-4.5 through Responses](https://github.com/earendil-works/pi/pull/6651)**
   Adds xAI provider with OAuth support and proper reasoning tier handling for grok-4.5.

8. **[#6594 — feat: sqlite session storage](https://github.com/earendil-works/pi/pull/6594)**
   Major infrastructure PR adding SQLite-backed session persistence with compaction-aware node walking.

9. **[#6533 — fix: Codex compaction returns "Model not found" for gpt-5.6-luna](https://github.com/earendil-works/pi/pull/6533)**
   Fixes compaction failures for gpt-5.6-luna via OpenAI Codex API due to internal model ID mapping issues.

10. **[#6216 — feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216)**
    New provider leveraging OpenAI's Bedrock integration, adding another deployment option for enterprise users.

## Feature Request Trends

- **Session Management**: Multiple requests (#6674, #6688) for folder organization, rename, archive, and browsing of sessions—users find the flat chronological view inadequate for extended use.
- **Extension API Expansion**: Several proposals for new hooks including `stream_chunk`/`on_token` (#6693), retry control exposure (#6684), and RPC output correlation (#6694).
- **Provider Diversity**: Strong demand for xAI Grok (#6651), Amazon Bedrock Mantle (#6216), and improved OAuth flows across providers.
- **Ephemeral Settings**: Growing consensus (#5263) that model/thinking changes should be session-scoped by default with explicit global overrides in settings.

## Developer Pain Points

- **OpenAI Codex Stability**: Repeated issues (#4945, #6673) with connection hangs, error HTML exposure, and model ID mismatches—Codex remains the most problematic provider.
- **Windows Support Gaps**: Multiple platform-specific bugs (#6619, #6596, #6629) around path resolution, terminal behavior, and package management.
- **AWS Bedrock Auth**: Persistent authentication issues (#6657) with `AWS_PROFILE` despite multiple claimed fixes, causing frustration for AWS/enterprise users.
- **Compaction Reliability**: Lack of retry logic (#6647) and model-specific failures (#6533) make compaction fragile, especially during long sessions.
- **TUI Rendering Bugs**: Scrollback clearing (#6050), null component crashes (#6667), and code block rendering (#6682) degrade the interactive experience.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-16

## Today's Highlights

The project default model is rolling forward to **qwen3.7-max** (PR #6978, merged), signaling a new generation of coding performance. Infrastructure is maturing fast: the daemon now supports **aggregated multi-workspace health** (PR #6961), **bounded log rotation** (PR #6969), and a **stateless generation SSE endpoint** (PR #6947). On the security front, an MCP trusted-invocation-context (PR #6895) is under review, while a bug in MCP `readOnlyHint` bypassing tool confirmation was just closed. The community is most vocal about **sub-agent communication improvements** and **better channel integrations** (DingTalk cards, WeCom fixes).

## Releases

- **[v0.19.10-nightly.20260716.506ce0a1a](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.10-nightly.20260716.506ce0a1a)** — Nightly release. Includes a docs fix for PR scope capping after repeated review rounds and a `feat(web-shell)` patch adding workspace path l.
- **[cua-driver-rs-v0.7.2](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.7.2)** — Prebuilt binaries for the CUA driver (relative-coordinate fork). macOS: codesigned + notarized universal binary + `QwenCuaDriver.app`. Linux: unsigned (x86_64 + arm64, glibc 2.31 floor). Windows: unsigned (x86_64 + arm64). Enables relative coordinate mode.

## Hot Issues

1. **[#6378 — RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)**  
   *23 comments* | The most-discussed issue today. Proposes moving from `1 daemon = 1 workspace` to a multi-workspace model. Community is debating backward compatibility and session isolation.

2. **[#4782 — Tracking: ACP Streamable HTTP transport implementation](https://github.com/QwenLM/qwen-code/issues/4782)**  
   *5 comments* | Qwen-Code Daemon now natively supports ACP at `/acp`, enabling direct connections from Zed, Goose, and JetBrains. This is a major integration milestone.

3. **[#6928 — GitHub App authentication is not injected into newly created workspaces](https://github.com/QwenLM/qwen-code/issues/6928)**  
   *5 comments* | A Spanish-reported bug: private repos mount correctly, but the GitHub App auth token isn't propagated to the workspace environment. Blocks private-repo workflows.

4. **[#5239 — Sub-agent/master-session communication is weak; need bidirectional capability](https://github.com/QwenLM/qwen-code/issues/5239)**  
   *4 comments* | Community member built a hacky file-monitor workaround because sub-agents don't notify the main session on completion. High demand for native notification/state sync.

5. **[#6936 — isManagedMemoryAvailable() ignores enableManagedAutoMemory setting](https://github.com/QwenLM/qwen-code/issues/6936)**  
   *3 comments* | Settings disable memory operations, but the 7–9 KB auto-memory instruction block remains in the system prompt, wasting context. Clear gate mismatch identified.

6. **[#6443 — Improve DingTalk channel with interactive cards](https://github.com/QwenLM/qwen-code/issues/6443)**  
   *3 comments* | Proposes native running-status cards, stop buttons, and form cards for `ask_user_question`. Companion PR #6930 is in review.

7. **[#6970 — MCP tool names accepted by Gemini are rejected by OpenAI/Anthropic providers](https://github.com/QwenLM/qwen-code/issues/6970)**  
   *2 comments* | Dots in MCP tool names (e.g., `literature.search_pubmed`) pass Gemini's lax validation but fail stricter providers. Affects multi-provider setups.

8. **[#6917 — Untrusted MCP readOnlyHint skips default tool confirmation](https://github.com/QwenLM/qwen-code/issues/6917)**  
   *2 comments, closed* | Security bug: MCP servers can mark tools `readOnlyHint: true` to bypass confirmation gates, even when the server isn't trusted. Fixed.

9. **[#6831 — Trust-status preview check mutates cached trusted-folders config](https://github.com/QwenLM/qwen-code/issues/6831)**  
   *2 comments, closed* | Read-only trust previews were leaking unconfirmed state into the persistent config cache. Elegant fix needed per-user/trust-model.

10. **[#6898 — Why does shell trigger notifications on every tool call instead of at task end?](https://github.com/QwenLM/qwen-code/issues/6898)**  
    *3 comments, closed* | Users want task-level notification batching for shell tools to avoid dozens of modal pop-ups per task. Feature request + bug.

## Key PR Progress

1. **[#6963 — ci(web-shell): before/after visual previews showing only changed views](https://github.com/QwenLM/qwen-code/pull/6963)** — Open. Turns web-shell screenshot tests into intelligent diffs: renders PR base vs. head, pixel-diffs, and stitches only changed views.

2. **[#6961 — feat(daemon): Aggregate deep health across workspaces](https://github.com/QwenLM/qwen-code/pull/6961)** — Open. Makes `GET /health?deep=1` a multi-workspace snapshot aggregating sessions, permissions, active prompts, and channel liveness.

3. **[#6950 — fix(cli): Preserve channel startup failure details](https://github.com/QwenLM/qwen-code/pull/6950)** — Merged. Carries per-channel `connect()` failures through IPC into supervisor snapshots, status, and the TypeScript SDK.

4. **[#6967 — fix(core): Require explicit approval to exit Plan mode](https://github.com/QwenLM/qwen-code/pull/6967)** — Open. Prevents accidental Plan-mode exit by requiring user confirmation.

5. **[#6975 — ci(serve): daemon A/B before/after preview on response-surface PRs](https://github.com/QwenLM/qwen-code/pull/6975)** — Merged. Builds CLI from both PR base and head, drives endpoints against each daemon, and diffs JSON responses.

6. **[#6895 — feat(core): propagate trusted invocation context](https://github.com/QwenLM/qwen-code/pull/6895)** — Open, in review. Introduces `InvocationContextV1` that identifies ingress, session, root prompt, and validated daemon client for an invocation chain.

7. **[#6954 — feat(serve): add workspace MCP management](https://github.com/QwenLM/qwen-code/pull/6954)** — Open. Adds MCP management UI to Web Shell with extension/MCP tabs, persisted user/workspace discovery, and typed SDK operations.

8. **[#6947 — feat(daemon): add stateless generation SSE](https://github.com/QwenLM/qwen-code/pull/6947)** — Merged. New request-scoped SSE endpoint for stateless text generation with streaming thinking progress and deltas.

9. **[#6945 — feat(cli): add daemon Todo stop guard](https://github.com/QwenLM/qwen-code/pull/6945)** — Open, in review. Opt-in guard: after `todo_write` leaves pending items, the session may auto-continue at most twice instead of stopping.

10. **[#6984 — feat(agents): support per-model sub-agent concurrency limits](https://github.com/QwenLM/qwen-code/pull/6984)** — Open. Adds `maxParallelAgentsByModel` setting to cap background sub-agents per concrete model ID, complementing the global cap.

## Feature Request Trends

- **Multi-workspace daemon (#6378)**: The highest-activity request. Community wants a single `qwen serve` process to host multiple isolated workspaces, with aggregated health and session management.
- **Sub-agent/master-session bidirectional communication (#5239)**: Strong demand for native notifications when sub-agents complete, fail, or need attention — currently users hack file-based monitors.
- **Channel integration expansion**: Multiple issues target **DingTalk interactive cards** (#6443, PR #6930), **WeCom group message fixes** (#6939), and **Webhook-to-single-chat delivery** (#6883).
- **Bounded task continuation (#6945, #6946)**: Users want daemon sessions to automatically continue work when `todo_write` leaves unfinished items, rather than silently stopping.
- **Auto language mode (#6943)**: Request for an "auto" output language setting that makes the LLM follow the user's input language instead of being locked to a fixed language.

## Developer Pain Points

- **Trust & security edge cases**: Two bugs in the trusted-folders system (state mutation in preview checks, MCP `readOnlyHint` bypassing confirmation) show that workspace trust boundaries need hardening.
- **CI flakiness**: Multiple E2E test failures on `main` (#6933, #6935, #6938, #6940, #6966, #6979) across web-shell, cron-interactive, and SDK tests. The cron test specifically is timing-flaky on slow runners (#6982).
- **Configuration validation gaps**: Fractional session/tool-call limits pass validation but break at runtime (#6914). Memory settings are ignored silently (#6936).
- **Authentication propagation**: GitHub App tokens not injected into new workspaces (#6928) blocks private-repo workflows — a common enterprise pain point.
- **Model provider compatibility**: MCP tool names with dots work on Gemini but fail on OpenAI/Anthropic (#6970), forcing users to maintain provider-specific configurations.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-16

## 1. Today's Highlights

The v0.8.68 TUI "stopship" repair batch has been merged via PR #4332, fixing live state-routing regressions without bringing in the stale replacement branch. Separately, a significant refactoring wave is underway: maintainer-issued issues #3306–#3314 lay out a systematic plan to split the largest Rust monoliths in the codebase into owned, testable modules. Community activity remains high, with 50 open issues and 11 PRs updated in the last 24 hours, although no new release was published today.

## 2. Releases

No new releases in the last 24 hours. The last active release train is **v0.9.3**, with security-hardening (tracked in #3368) and dead-code inventory (#3490) still in progress.

## 3. Hot Issues (Top 10 Noteworthy)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [**#3368**](https://github.com/Hmbown/CodeWhale/issues/3368) | v0.8.64: Security-hardening tracker (OPEN) | The release gate for CodeQL and advisory-class fixes. 29 comments show maintainer is consolidating scattered security work into one public tracker. | Active triage; no public exploit details shared per policy. |
| [**#2487**](https://github.com/Hmbown/CodeWhale/issues/2487) | "Turn stalled - no completion signal received" (CLOSED) | A long-standing `yolo` mode freeze. 20 comments, 1 👍. Closed, but the issue generated reproducible logs and session analysis. | Users confirmed freeze reproducible on multi-turn; fix shipped in v0.9.2. |
| [**#3490**](https://github.com/Hmbown/CodeWhale/issues/3490) | Legacy dead-code/follow-up inventory (OPEN) | Prepares codebase for v0.9 expansion by tracking every `allow(dead_code)` and stale comment. | Maintainer-driven; no community pushback yet. |
| [**#1512**](https://github.com/Hmbown/CodeWhale/issues/1512) | Mouse scroll wheel shows only user messages (OPEN) | A persistent TUI navigation annoyance: model output context is invisible to scroll. | 4 comments; user says "UI needs to be fixed" — low priority but recurrent. |
| [**#864**](https://github.com/Hmbown/CodeWhale/issues/864) | Output truncated on Windows 11 (OPEN) | Reports of incomplete rendering, likely a crossterm terminal-width detection issue. | 4 comments; screenshot attached. |
| [**#3303**](https://github.com/Hmbown/CodeWhale/issues/3303) | Make config keys editable and persistable from TUI (OPEN) | Users cannot discover/edit runtime config keys like sub-agent routing. A key usability gap. | 3 comments, framing as "enhancement" — important for power users. |
| [**#1675**](https://github.com/Hmbown/CodeWhale/issues/1675) | Chinese garbled output in Agent mode (OPEN) | Agent real-time output shows garbled Chinese characters, impacting non-English users. | 3 comments; screenshot provided. Impact on i18n. |
| [**#1338**](https://github.com/Hmbown/CodeWhale/issues/1338) | Enter key during TUI interaction crashes GUI (CLOSED) | Crash when pressing Enter to supplement info. Fix shipped in v0.9.2. | Classic "user expects suspend, gets crash"; now resolved. |
| [**#2261**](https://github.com/Hmbown/CodeWhale/issues/2261) | Window crash leaks input to PowerShell (CLOSED) | A severe security/reliability issue: TUI crash causes keystrokes to spill to hosting shell. | 6 comments; fix shipped in v0.9.2. |
| [**#1835**](https://github.com/Hmbown/CodeWhale/issues/1835) | IME deadlock on Windows with Chinese input (CLOSED) | Input field completely unresponsive when Sogou IME is active. | 5 comments, 1 👍; now fixed in v0.9.2. |

## 4. Key PR Progress (Top 10 Important)

| # | PR | Feature/Fix | Impact |
|---|----|-------------|--------|
| [**#4332**](https://github.com/Hmbown/CodeWhale/pull/4332) | v0.8.68 TUI stopship repair (CLOSED) | Fixes live state routing regressions: blank provider fields no longer masquerade as configured; stale replacement branch blocked. | **Release-blocker fix.** Merged. Users on v0.8.68 should update. |
| [**#4087**](https://github.com/Hmbown/CodeWhale/pull/4087) | Split hooks config/executor (OPEN) | Refactors `hooks.rs` into config vs executor, improving reviewability for hooks policy changes. | First major milestone in the "god object" extraction plan. |
| [**#3902**](https://github.com/Hmbown/CodeWhale/pull/3902) | Five render/input hot-path fixes (CLOSED) | Fixes #3896–#3900: double row computation in sidebar, redundant buffering, allocation churn. | **Performance win.** Merged; addresses four regressions found by adversarial multi-agent review. |
| [**#3969**](https://github.com/Hmbown/CodeWhale/pull/3969) | Per-sub-agent provider routing (CLOSED) | Adds per-profile provider/model/API-key routing. Held for v0.8.68 fleet lane; dirty against `main`. | Foundational for fleet-level routing. |
| [**#4370**](https://github.com/Hmbown/CodeWhale/pull/4370) | TelecomJS provider support (OPEN) | Adds custom-provider integration for Telecom JiangSu. `refresh_catalog_cache` was never invoked in production. | New provider; critical for Chinese enterprise users. |
| [**#3818**](https://github.com/Hmbown/CodeWhale/pull/3818) | Active tool-run summaries (CLOSED) | Expands dense tool-run toggling to include in-flight entries. | Small but precise UX fix (#3256 edge case). |
| [**#4084**](https://github.com/Hmbown/CodeWhale/pull/4084) | Reject retired profile aliases (CLOSED) | Removes `model_class_hint` and `route_tier`; profiles now use `loadout`. | Simplifies profile schema, prevents stale config errors. |
| [**#4044**](https://github.com/Hmbown/CodeWhale/pull/4044) | Localized dynamic welcome (CLOSED) | Full first-run localization through `MessageId`; adds `zh-Hant` welcome copy. | **i18n milestone.** Merged. |
| [**#3761**](https://github.com/Hmbown/CodeWhale/pull/3761) | Deferred startup maintenance (CLOSED) | Moves non-critical cleanup (stale tool-output pruning, session cleanup) off interactive startup into delayed thread. | Fixes #3757; improves perceived startup speed. |
| [**#4088**](https://github.com/Hmbown/CodeWhale/pull/4088) | Preserve native selection without mouse capture (CLOSED) | Fixes #4026: leaves alternate-scroll off when `--no-mouse-capture` is set. | Ends the "copy wrapped line breaks" friction (#1853). |

## 5. Feature Request Trends

Based on all 50 open issues, three dominant feature directions emerge:

1. **Spatial/Slash Command DX (#1887, #1889, #1890, #1892)** — A coordinated request family: make slash commands visible in the sidebar/cockpit, wire them into the "truth surface", and add presence/docs/i18n. The maintainer has issued four scoped issues for this.

2. **Refactor for Maintainability (#3306–#3314, #3490, #1897)** — The maintainer is proactively splitting the largest Rust files (`app.rs`, `runtime_threads.rs`, `mcp.rs`, `history.rs`, `ui.rs`, `runtime_api.rs`). Not a direct feature, but a prerequisite for v0.9 features landing safely.

3. **Config Usability (#3303, #1678, #1607)** — Users want to discover, edit, and persist config from the TUI; and they want token-cost estimates in local currency (CNY, etc.). Also: an in-app update checker (mentioned in #1678).

## 6. Developer Pain Points

The following recur across multiple issues and comments:

- **Windows TUI reliability** — Freezes (#1812), input leakage (#2261), IME deadlock (#1835), focus loss (#1338). Windows downstream is the largest single source of TUI bugs, despite active fixes.
- **Rendering/scroll friction** — Wrapped line-break copies (#1853), mouse scroll showing only user messages (#1512), truncated output (#864). These degrade the core reading experience.
- **Install/startup friction** — glibc version mismatch (#1067), glibc 2.38+ requirement blocks older Ubuntu/Debian. No workaround documented.
- **Error state opaqueness** — "Turn stalled" messages (#2487) and lack of config validation feedback (#3303) make it hard to diagnose issues without maintainer assistance.
- **Agent i18n output** — Garbled Chinese in Agent mode (#1675), sparse localization coverage (only `zh-Hant` partially added, other locales missing).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*