# AI CLI Tools Community Digest 2026-07-17

> Generated: 2026-07-17 01:29 UTC | Tools covered: 10

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Grok CLI](https://github.com/superagent-ai/grok-cli)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

Here is the cross-tool comparison report.

---

## Cross-Tool Comparison Report: AI CLI Developer Tools
**Date:** 2026-07-17

### 1. Ecosystem Overview

The AI CLI tools ecosystem remains in a hyper-growth phase, characterized by rapid release cycles (some tools shipping multiple versions per week), a strong focus on "agentic" workflows (sub-agents, background sessions, tool orchestration), and increasing community scrutiny on reliability, cost, and security. While established players like **Claude Code** and **OpenAI Codex** grapple with performance regressions and data-loss incidents, newer entrants like **Gemini CLI** and **Qwen Code** are iterating rapidly on foundational architectures like multi-workspace daemons and sandbox security. A clear trend is the commoditization of provider support, with most tools now supporting BYOK (Bring Your Own Key) and multiple model backends, shifting competition toward terminal user experience (TUI), agent governance, and ecosystem maturity (e.g., plugin marketplaces).

### 2. Activity Comparison

| Tool | Hot Issues (24h) | Key PRs (24h) | Release Status | Key Data Point |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 (1 critical) | 10 | `v2.1.212` (major UX) | Highest severity: kernel zone leak (#66020, 15 comments) & data loss incidents. |
| **OpenAI Codex** | 10 (1 critical) | 10 | `v0.144.5` (patch) | Highest community anger: Windows Git process storm (#17229, 18 comments) & app slowness. |
| **Gemini CLI** | 10 (2 critical) | 10 | `v0.52.0-preview` + `v0.51.0` stable | Security-focused: macOS sandbox escape fix (#28423) & shell variable bypass (#28403). |
| **Copilot CLI** | 10 (3 critical) | 0 | `v1.0.72-0` (minor) | Most fragile sessions: 3 distinct "session wedging" bugs reported. |
| **Kimi Code CLI** | 10 | 10 | `v1.49.0` (major fix) | Critical bug fixed: context budget using wrong counter (#2494). |
| **OpenCode** | 10 | 10 | `v1.18.3` (bugfix) | Dominant issue: Memory Megathread (#20695, 110 comments, 89 👍). |
| **Pi** | 10 | 10 | `v0.80.8` to `v0.80.10` (3 releases) | Fastest iteration: 3 releases in 24h. Focus on provider integration (Kimi K3, xAI). |
| **Qwen Code** | 10 | 10 | `v0.19.11` (stable) + nightly | Architecture shift: RFC for multi-workspace daemon (#6378, 24 comments). |
| **DeepSeek TUI (CodeWhale)** | 10 | 10 | `v0.9.0` (rebranding) | Rebranding to CodeWhale; community buzzing about first-run onboarding UX (#3792). |
| **Grok CLI** | 1 | 0 | None | Inactive: 1 stale clipboard bug (#344). |

### 3. Shared Feature Directions

The following requirements appear across three or more tool communities:

- **Bring-Your-Own-Model (BYOM) / Custom Providers (Air-Gapped/Enterprise)**
    - *Tools:* OpenAI Codex (#10867), Copilot CLI (#4016, #4139), Kimi Code CLI (#2456), Pi (Kimi K3, Telnyx), Qwen Code (#6996)
    - *Need:* Seamless integration of 3rd-party, local, or enterprise-gateway models, including OAuth flows for new providers.

- **Session Wedging & Bloat Recovery**
    - *Tools:* Claude Code (#77962), Copilot CLI (#4097, #3407, #4138), OpenCode (#37372), Gemini CLI (#22323)
    - *Need:* Robust mechanisms to recover from corrupted sessions (oversized attachments, binary file history, malformed thinking blocks) without total data loss.

- **Agent/Sub-Agent Transparency & Governance**
    - *Tools:* Claude Code (#77798, #78312), Gemini CLI (#22323, #21968), OpenCode (#37388), DeepSeek TUI/CodeWhale (#4415)
    - *Need:* Better visibility into sub-agent failure modes (false success on MAX_TURNS), enforcement of hard tool-call budgets, and visibility into mid-turn agent reasoning.

- **Terminal UI (TUI) / Terminal Compatibility**
    - *Tools:* Claude Code (#77615 in tmux), Copilot CLI (#4154), Kimi Code CLI (#2501), Pi (#6746 in Kitty/WezTerm), DeepSeek TUI/CodeWhale (#1512 mouse scroll)
    - *Need:* Consistent rendering across terminal emulators (tmux, Kitty, WezTerm, Windows Terminal), fix for broken scrollback, and quick-access hotkeys.

- **Cost Visibility & Predictability**
    - *Tools:* Claude Code (#78320, 2x thinking token inflation), OpenAI Codex (#27613, Bedrock cost attribution), Copilot CLI (#1152, token usage verbosity)
    - *Need:* Granular per-session cost breakdowns (cache hits, thinking tokens) and reliable rate-limit accounting (Kimi Code CLI #2318).

- **Cross-Platform Windows/Linux Parity**
    - *Tools:* OpenAI Codex (#17229, #23198, #32314), Gemini CLI (#21983, Wayland), Copilot CLI (#4149, winget), Qwen Code (#7056, VS Code on Windows)
    - *Need:* Fixing platform-specific bugs causing severe performance degradation (Git process storms, elevated sandbox latency, Wayland incompatibility, package manager failures).

### 4. Differentiation Analysis

| Feature Focus | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code CLI | OpenCode | Pi | Qwen Code |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Security/Trust** | High (data loss alerts) | Medium (Defender FP) | **Highest** (Seatbelt, CVE fixes) | Medium (BYOK regression) | Low | Low-Medium | Medium | Medium (path trust) |
| **Agentic Workers** | Deepest (`/fork`, `/subtask`, background) | Medium (sub-agents, browser-use) | High (generalist, codebase_investigator) | Entry-level (multi-turn enabled) | Low | Medium | Medium | High (subagent delegation, multi-daemon) |
| **Provider Flexibility** | High (MCP, BYOK) | Low (locked to OpenAI) | Medium (Gemini-only) | Low (GitHub Models, BYOK regression) | Medium (Kimi-focused) | **Highest** (Zen, Go, many models) | **Highest** (Telnyx, Bedrock, xAI, Kimi) | Medium (OpenAI-compat) |
| **TUI/UX Innovation** | High (`claude agents`, sessions) | Low (desktop app focus) | Medium (CJK rendering) | Low | Low (missing quick actions) | High (theme system, draggable tabs) | High (hotkeys, tab normalization) | Medium (web-shell git status) |
| **Enterprise Readiness** | Medium (MDM policy, data loss risks) | Low-Medium (cost attribution missing) | High (sandbox, path trust, A2A server) | Low (BYOK broken, session wedging) | Low | Low | Low-Medium (OAuth, catalog CI) | Medium (GLIBC blocking CentOS) |

### 5. Community Momentum & Maturity

- **High Momentum, Rapid Iteration (Most Active):**
    - **Claude Code:** The most functionally dense release (`/fork`→`/subtask` change is a UX paradigm shift). Community is highly engaged but also highly critical—data loss and cost issues are creating "trust debt."
    - **Gemini CLI:** Strong security posture and clear stability focus (3 releases in 24h). The "subagent reliability crisis" (#22323) is the single biggest threat to its community trust.
    - **Pi (pi-mono):** The fastest shipper today (3 releases). Focused on provider integration (Kimi K3, xAI) and infrastructure (ModelRuntime). Extension ecosystem is fragile (extension breakage on minor releases).
    - **Qwen Code:** The "architectural innovator." The multi-workspace daemon RFC (#6378) signals a major leap in scalability. Community is smaller but technically sophisticated.
    - **DeepSeek TUI (CodeWhale):** Rebranding moment has energized the community. Deep interest in agent orchestration (WhaleFlow Conductor) and provider parity. The most "community-driven" design process (open RFCs on first-run onboarding).

- **Mature, but Wrestling with Legacy:** 
    - **OpenAI Codex:** Highest web of interconnected bugs (Git spawning → sandbox latency → Defender FP → log bloat). Community frustration is palpable ("Codex is really too slow," #21527). The core architecture appears to be creaking under the weight of "agentic" features.
    - **Copilot CLI:** The most fragile ecosystem. The "session wedging" trinity (#4097, #4138, #3407) is a critical UX failure. Feature velocity is low (0 PRs today). Risk of users migrating to more reliable alternatives like Claude Code or OpenCode.

- **Low Activity / Niche:**
    - **Kimi Code CLI:** Stabilizing after critical bug fixes. Community is smaller and focused on specific issues (TPD limits, TUI quick-switch).
    - **Grok CLI:** Effectively dormant (1 inactive issue). The project has likely been abandoned or is in maintenance-only mode.

### 6. Trend Signals

1.  **The "Agent Trust" Cliff:** The most urgent industry problem identified today. Users are losing trust in *all* major CLI tools due to (a) silent agent failures reported as success (Gemini #22323, OpenCode #37372), (b) unprompted destructive actions leading to data loss (Claude Code #78273, #75490), and (c) runaway costs from opaque thinking token inflation (Claude Code #78320). Developers should prioritize **hard agent governance** (budget enforcement, pre-approval of destructive commands, cost ceilings) as a core feature, not an afterthought.

2.  **The "Session Wedging" Crisis:** A shared failure mode across Copilot CLI, Claude Code, and Gemini CLI where sessions become permanently unrecoverable. This is a **fundamental architectural failure** that creates a poor daily-driver experience. Any new tool in this space should build a session recovery mechanism (e.g., automatic compaction with rollback, snapshotting) from day one.

3.  **Commoditization of Model Providers:** BYOM and multi-provider support is no longer a differentiator—it's a **table stakes requirement**. The differentiation battle is shifting to (a) the quality of the TUI, (b) agent orchestration capabilities, (c) the plugin/MCP ecosystem, and (d) security & governance.

4.  **TUI is the New Battlefield:** For CLI-native developers, the terminal is the product. The flurry of issues around tmux, Kitty, Wayland, and CJK text rendering shows that users will churn on UX papercuts. Investment in a robust, cross-terminal rendering engine is a high-ROI move.

5.  **The "Memory" Problem is Unsolved:** OpenCode's Memory Megathread (#20695, 110+ comments) and Gemini's Auto Memory issues (#26522) prove that no tool has cracked persistent, reliable, low-cost memory. This remains the "last frontier" for AI agents and a major opportunity for innovation.

6.  **Enterprise Gate is Authentication & Security:** The ability to work in air-gapped environments, integrate with enterprise SSO (OAuth device flows), and pass security audits (no sandbox escapes, no shell variable injection) is increasingly the deciding factor for adoption in regulated industries. Gemini CLI's security focus positions it well here.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data snapshot:** github.com/anthropics/skills | **Date:** 2026-07-17

---

## 1. Top Skills Ranking

The following pull requests attracted the most community discussion and represent the most actively debated or anticipated Skill additions:

### #1298 — fix(skill-creator): `run_eval.py` always reports 0% recall
**Status:** Open | **Functionality:** Fixes the skill-creator evaluation pipeline where `run_eval.py` consistently reports `recall=0%` for all descriptions, rendering the description-optimization loop useless. Addresses Windows stream reading, trigger detection logic, and parallel worker issues.
**Discussion highlights:** References Issue #556 (10+ independent reproductions). The community identified that the entire description-optimization loop has been "optimizing against noise." This is the highest-comment PR and a critical infrastructure fix.
🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)

### #514 — Add document-typography skill
**Status:** Open | **Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Targets the "last mile" formatting issues that appear in every Claude-generated document.
**Discussion highlights:** The community recognized a universal pain point—typographic quality in generated documents is rarely requested by users but consistently degrades output professionalism.
🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

### #486 — Add ODT skill (OpenDocument text creation and template filling)
**Status:** Open | **Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Supports LibreOffice document workflows and ISO-standard format output.
**Discussion highlights:** Interest from enterprise users who require open-source document formats. The skill addresses a gap in the document-skills category where only PDF and DOCX were covered.
🔗 [PR #486](https://github.com/anthropics/skills/pull/486)

### #1367 — Add self-audit skill (mechanical verification + reasoning quality gate)
**Status:** Open | **Functionality:** Audits AI output before delivery: mechanical file verification (Step 0) followed by a four-dimension reasoning audit in damage-severity priority order. Universal across projects and models.
**Discussion highlights:** A meta-skill that proposes structured quality assurance for Claude's own output. High community interest in self-verification patterns.
🔗 [PR #1367](https://github.com/anthropics/skills/pull/1367)

### #723 — Add testing-patterns skill
**Status:** Open | **Functionality:** Comprehensive testing coverage including Testing Trophy model, AAA patterns, React component testing (Testing Library), E2E testing (Playwright), and mocking strategies.
**Discussion highlights:** Addresses a clear gap—no testing skill existed in the official collection. The community emphasized the need for opinionated testing guidance rather than generic advice.
🔗 [PR #723](https://github.com/anthropics/skills/pull/723)

### #525 — Add pyxel skill (retro game development)
**Status:** Open | **Functionality:** Integrates with Pyxel-MCP for retro/pixel-art/8-bit game development in Python. Covers write → run_and_capture → inspect → iterate workflow.
**Discussion highlights:** Niche but passionate audience. Demonstrates the MCP integration pattern for skills, which the community views as a template for tool-specific skills.
🔗 [PR #525](https://github.com/anthropics/skills/pull/525)

### #210 — Improve frontend-design skill clarity
**Status:** Open | **Functionality:** Revises the existing frontend-design skill for better actionability and internal coherence—ensuring every instruction is executable within a single conversation.
**Discussion highlights:** The community debated what makes a skill "actionable" vs. "educational." This PR became a reference point for skill design philosophy.
🔗 [PR #210](https://github.com/anthropics/skills/pull/210)

---

## 2. Community Demand Trends

From the most-commented Issues, the community's strongest unmet demands cluster around:

| Demand | Issues | Signal |
|--------|--------|--------|
| **Security & trust boundaries** | #492 (34 comments), #1175 | Community skills under `anthropic/` namespace create impersonation risk. Users want namespace security and access control patterns. |
| **Skill sharing & distribution** | #228 (14 comments) | Enterprise users need org-wide skill sharing without manual file transfers. |
| **Windows compatibility** | #556, #1061, #1169, #1298 | The skill-creator toolchain is effectively broken on Windows due to subprocess, encoding, and pipe handling. Multiple independent reports. |
| **Skill quality & evaluation** | #556 (12 comments), #1169, #202 | The `run_eval.py` pipeline produces 0% recall on all queries—the optimization loop is non-functional. This is the #1 infrastructure blocker. |
| **Governance & safety patterns** | #412 | Users want skills that teach agent governance: policy enforcement, threat detection, audit trails. |
| **Reasoning quality assurance** | #1385 | A proposed three-gate pipeline (calibration → adversarial review → verification) for AI output quality. |

**Dominant theme:** The community is not just requesting new skills—they are demanding infrastructure fixes (Windows, evaluation pipeline, security) before they can trust and scale the skill ecosystem.

---

## 3. High-Potential Pending Skills

These open PRs show active community engagement and are likely to land soon:

| PR | Skill | Momentum Signal |
|----|-------|-----------------|
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit (v1.3.0) | Created 2026-06-28, updated 2026-07-02. Reasoning quality gate with mechanical verification. |
| [#1323](https://github.com/anthropics/skills/pull/1323) | fix(skill-creator): trigger detection | Created 2026-06-16, updated 2026-06-25. Fixes the root cause of 0% recall—misses real skill name and bails on first non-Skill tool. |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | Created 2026-06-10, updated 2026-06-12. Self-contained color expertise (naming, spaces, harmony, accessibility). Narrow scope increases merge probability. |
| [#1099](https://github.com/anthropics/skills/pull/1099) | fix(skill-creator): Windows pipe crash | Created 2026-05-07, updated 2026-05-24. One of several Windows fixes; higher-activity forks are converging. |
| [#1050](https://github.com/anthropics/skills/pull/1050) | fix(skill-creator): Windows subprocess + encoding | Created 2026-04-27, updated 2026-05-24. Two 1-line fixes for `PATHEXT` and CP1252 encoding. |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | Updated 2026-04-21. Comprehensive testing coverage—fills a notable gap. |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for skill-ecosystem reliability over new skill breadth—the top three PRs and four of the top six Issues all target fixing the skill-creator evaluation pipeline and Windows compatibility, indicating that users cannot effectively develop, test, or trust skills until the core toolchain is stable.**

---

# Claude Code Community Digest — 2026-07-17

## Today's Highlights

Version **2.1.212** shipped with a meaningful UX improvement: `/fork` now copies conversations into background sessions (visible in `claude agents`) instead of blocking the current session, while the old behavior moves to a new `/subtask` command. Separately, a kernel zone leak on macOS (`data.kalloc.1024`) has escalated to **15 comments** with a leak rate that scales from 21 to 1,027/sec under agent load, crashing at ~20GB — this is the highest-severity open bug this week.

---

## Releases

**v2.1.212** — [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.212)
- `/fork` now copies your conversation into a **new background session** (own row in `claude agents`) while you keep working; the old in-session subagent launch is renamed to `/subtask`
- Added `claude auto-mode reset` to restore the default auto-mode configuration with a confirmation prompt

---

## Hot Issues — 10 Noteworthy

### 1. macOS Kernel Zone Leak: `claude.exe` Panics at ~20GB
**#66020** — [Issue](https://github.com/anthropics/claude-code/issues/66020)  
A macOS 26.5.1 kernel zone leak (`data.kalloc.1024`) is directly tied to Claude Code CLI. Leak rate scales from 21→1,027/sec with agent load. Reported by power users running long agentic sessions. 15 comments, growing fast. **High severity.** `[bug, has repro, platform:macos, perf:memory]`

### 2. TUI Rendering Broken in tmux (v2.1.202)
**#77615** — [Issue](https://github.com/anthropics/claude-code/issues/77615)  
Overlapping/garbled TUI rendering inside tmux — output lines drawn over one another, typed characters overlap at the input prompt. Only occurs inside tmux; bare iTerm works fine. 4 comments, reproducible. `[bug, platform:macos, area:tui]`

### 3. `/mcp` Settings Blocked in Active Agent Sessions (Regression)
**#77362** — [Issue](https://github.com/anthropics/claude-code/issues/77362)  
v2.1.208 introduced a guard that prevents `/mcp` settings from being opened in actively-attended `claude agents` sessions — the `"background session"` gate is on the launch path, not the attachment path. 3 comments, labeled regression. `[bug, platform:macos, area:mcp, regression, area:agent-view]`

### 4. Sub-agents Force Fullscreen Terminal (Ignoring TUI Setting)
**#78312** — [Issue](https://github.com/anthropics/claude-code/issues/78312)  
Sub-agents always use fullscreen terminal mode even when the user's default TUI is set to split/panel. This breaks mouse wheel scrollback, kills terminal scrollback buffers, and makes search much harder. 1 comment but highly emotional — "obnoxious." `[bug, platform:linux, area:tui, area:agents]`

### 5. Fable 5 Mid-Turn Messages Invisible to Operator
**#77798** — [Issue](https://github.com/anthropics/claude-code/issues/77798)  
Long mid-turn assistant text from Fable 5 is emitted as a thinking block instead of a text block, making it invisible to the operator. Users cannot see the model's intermediate reasoning in real time. 1 comment. `[bug, platform:macos, area:model]`

### 6. Desktop Worktree Mechanism Wipes Gitignored Directories (Data Loss)
**#75490** — [Issue](https://github.com/anthropics/claude-code/issues/75490)  
The Claude Code desktop app's worktree mechanism deleted three gitignored directories from the main working tree — two Python venvs and a cloned third-party repo with local patches and model weights (several GB). Only `.gitignore` literal-path entries affected. 1 comment, **data loss incident.** `[bug, platform:macos, area:desktop]`

### 7. Unprompted File Overwrite — Irreversible Data Loss
**#78273** — [Issue](https://github.com/anthropics/claude-code/issues/78273)  
Claude Code overwrote an existing user file containing original mathematical notation — without asking, without warning. The model read 5 lines, confirmed it was in use, then overwrote. 1 comment, another **data loss report.** `[bug, area:tools, area:permissions, data-loss]`

### 8. Background Sessions from Non-Git Directories Can Never Be Deleted
**#77962** — [Issue](https://github.com/anthropics/claude-code/issues/77962)  
If a background session is dispatched from a directory without a git root, the agents view cannot delete it: `"worktree could not be removed (no git root for the worktree)"`. Sessions are permanently stuck. 1 comment, 8 👍 — strong consensus. `[bug, has repro, platform:macos, area:agent-view]`

### 9. Thinking Volume ~2x Between v2.1.206 and v2.1.211 (Cost Impact)
**#78320** — [Issue](https://github.com/anthropics/claude-code/issues/78320)  
An automated benchmark with byte-identical prompts, same model (`claude-opus-4-8`), and constant effort showed session cost roughly doubled between versions 2.1.206 and 2.1.211. Growth is almost entirely in thinking tokens. Fresh report, 0 comments — but serious implications for power users on usage-based billing. `[bug, has repro, platform:macos, area:cost, area:core]`

### 10. Remote Control Startup: Intermittent 401s with Insufficient Retries
**#78309** / **#78323** — [Issue](https://github.com/anthropics/claude-code/issues/78309) / [Issue](https://github.com/anthropics/claude-code/issues/78323)  
Two reports of `--remote-control` failing with 401s from `createCodeSession` endpoints. The retry budget is only 3 attempts, and the first 1–2 attempts always fail — so occasional total failure is inevitable. Both filed today. `[bug, platform:macos, area:auth, api:anthropic]`

---

## Key PR Progress — 10 Notable

### 1. Git-Aware History — Fix Session Fragmentation Across Worktrees
**#58646** — [PR](https://github.com/anthropics/claude-code/pull/58646)  
Claude Code keys session history by raw CWD path, so each git worktree gets its own isolated history. Deleting a worktree orphans its sessions — `/resume` can't find them. This PR unifies history across worktrees by keying on the git root. **Merged.** `[feat(plugin)]`

### 2. Security: Flag Python `exec()` as Injection Sink
**#78057** — [PR](https://github.com/anthropics/claude-code/pull/78057)  
The security-guidance patterns file warns on Python `eval()` but had no rule for `exec()`. The only `exec(` matcher was `child_process_exec`, gated to JS/TS files. This PR adds `exec()` as a code-injection sink for Python. **Open.** `[fix(security-guidance)]`

### 3. MDM: Fix `Set-ClaudeCodePolicy.ps1` 32-bit PowerShell Host Issue
**#78049** — [PR](https://github.com/anthropics/claude-code/pull/78049)  
The PowerShell script builds its destination from `$env:ProgramFiles`. Intune runs in 32-bit PowerShell host by default, so it writes to `Program Files (x86)` instead of the real `Program Files`. The script's header documents the workaround but doesn't enforce it. **Open.** `[fix(mdm)]`

### 4. Recall Plugin — Conversation Context Recovery
**#16680** — [PR](https://github.com/anthropics/claude-code/pull/16680)  
A plugin that indexes each message and response, enabling semantic search over past conversation context — no more scrolling and copy-pasting. Indexes both user prompts and model responses. **Merged.** `[feat(plugin)]`

### 5. Fix Hook Validator for Plugin Wrapper Format
**#27204** — [PR](https://github.com/anthropics/claude-code/pull/27204)  
The `validate-hook-schema.sh` script only understood direct settings format, not the plugin wrapper format (`{"hooks": {...}}`). This PR auto-detects both formats, so the validator correctly processes all existing plugin `hooks.json` files. **Merged.** `[fix]`

### 6. Docs: Document `skipLfs` Marketplace Sources
**#77977** — [PR](https://github.com/anthropics/claude-code/pull/77977)  
Documents the `skipLfs` option for `github` and `git` marketplace source objects in plugin-dev guidance. Includes examples for GitHub shorthand and generic Git URL sources that skip Git LFS downloads. Ref #63035. **Open.** `[docs(plugin-dev)]`

---

## Feature Request Trends

| Theme | Key Issue | 👍 | Notes |
|-------|-----------|----|-------|
| **Multi-account switching** (mobile) | #36151 | 467 | Persistent frontrunner; 132 comments since March |
| **VS Code: disable auto-attach** of open file/selection | #24726 | 185 | 60 comments; community strongly wants opt-in behavior |
| **WSL remote integration** (Windows Desktop) | #49933 | 80 | Closed as merged/enhanced; native WSL support shipped |
| **Team plan: "Max 20x" tier** for power users | #47509 | 59 | Standard (1.25x) and Premium (6.25x) not enough for CTOs/senior devs |
| **Date/time injection** into prompts | #32913 | 7 | Small but consistent ask for time-aware agent behavior |
| **Code Review performance optimization** | #78281 | 0 | Fresh request; no details yet |
| **Localization (l10n) for VS Code extension** | #78327 | 0 | Permission dialogs and UI strings — filed as duplicate of #78324 |

---

## Developer Pain Points

**1. Data Loss / Unprompted File Writes (Critical)**
Two separate data loss reports in the last 24h: #75490 (worktree mechanism deleted 3 gitignored directories containing model weights and venvs) and #78273 (Claude overwrote user's research file without confirmation). Both are `data-loss` tagged. The community is escalating — these are the most urgent trust issues.

**2. Cost Surprises from Thinking Token Inflation**
Issue #78320 demonstrates a 2x cost increase between adjacent versions at identical settings. Users are alarmed that "thinking volume" can silently double, especially on usage-based billing plans. This amplifies the #47509 demand for higher-tier caps.

**3. TUI / Terminal Experience Degradation**
Multiple reports of TUI issues: broken rendering in tmux (#77615), sub-agents forcing fullscreen mode against user preferences (#78312), and mid-turn text blocks being invisible (#77798, #75034). For CLI-native power users, the terminal UX is the product.

**4. Session Management Gaps**
Sessions dispatched from non-git directories can never be deleted (#77962). The `/mcp` settings guard blocks active sessions (#77362). Remote control suffers intermittent 401s with only 3 retry attempts (#78323). These are workflow-breaking bugs for users who live in `claude agents` and remote-control setups.

**5. Configuration Race Conditions**
Settings.json has a read-modify-write race: `/model` save in one session clobbers another session's `/effort` save (#78321). The `Claude Tag` credential editing silently breaks Agent Proxy attachment (#78319). Plugin-scoped subagent definitions are silently ignored in agent teams (#78234). Configuration should be atomic and composable — it currently is neither.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-17

## Today's Highlights

The Codex team shipped a patch release (v0.144.5) with improved dangerous-command detection, while the community continues to escalate performance concerns — particularly around Windows-specific Git spawning issues and general app sluggishness. A flurry of `copyberry[bot]` PRs landed today focusing on Amazon Bedrock custom transports, sub-agent role restoration, and thread-safe terminal concurrency, signaling active work on enterprise customization and reliability improvements.

## Releases

**rust-v0.144.5** — Patch release with one fix:
- Enhanced dangerous-command detection with expanded coverage for forced `rm` forms and clearer rejection reasons when commands are denied. ([PR #33455](https://github.com/openai/codex/pull/33455))

Three alpha releases (v0.145.0-alpha.16, .18, .19) also published, though no changelog details were provided.

---

## Hot Issues (Top 10 by Community Attention)

1. **#21527 — Codex is really too slow**  
   [Issue](https://github.com/openai/codex/issues/21527) — 34 comments, 18 👍  
   *Why it matters:* The highest-commented open issue. User reports both VS Code extension and desktop app suffer from unacceptable model response latency. Has been open since May with no resolution.

2. **#10867 — Support custom model providers in app**  
   [Issue](https://github.com/openai/codex/issues/10867) — 19 comments, 48 👍  
   *Why it matters:* Highest-reacted open feature request. Users can switch models in CLI but not in the desktop app. Community strongly wants BYO model flexibility.

3. **#23198 — Codex Desktop on Windows extremely slow**  
   [Issue](https://github.com/openai/codex/issues/23198) — 18 comments, 44 👍  
   *Why it matters:* Second-highest Windows performance complaint. User insists slowness is app-specific, not machine-related.

4. **#20678 — Browser Use cannot connect to IAB from Node REPL on macOS**  
   [Issue](https://github.com/openai/codex/issues/20678) — 18 comments  
   *Why it matters:* Affects the in-app browser feature on macOS; Node REPL discovery fails to bootstrap browser-use backend.

5. **#17229 — Codex Windows App spawns `git.exe` processes endlessly**  
   [Issue](https://github.com/openai/codex/issues/17229) — 18 comments, 4 👍  
   *Why it matters:* Root cause of many Windows performance issues. Leaves orphaned `conhost.exe` processes behind.

6. **#30527 — Microsoft Defender behavior monitoring / high CPU after recent update**  
   [Issue](https://github.com/openai/codex/issues/30527) — 14 comments, 12 👍  
   *Why it matters:* Recent update (Jun 28) triggered Defender false positives on Windows, causing sustained high CPU.

7. **#27613 — Support Amazon Bedrock project for cost attribution**  
   [Issue](https://github.com/openai/codex/issues/27613) — 11 comments, 14 👍  
   *Why it matters:* Enterprise users need workload-level cost tracking when using Bedrock; no mechanism currently exists.

8. **#20567 — 1000 git commands per minute NON STOP**  
   [Issue](https://github.com/openai/codex/issues/20567) — 11 comments  
   *Why it matters:* Extreme variant of the Git spawning bug; Enterprise user reporting thousands of `git.exe` invocations/minute.

9. **#24948 — Session logs grow to 700MB–2GB from compaction history**  
   [Issue](https://github.com/openai/codex/issues/24948) — 10 comments  
   *Why it matters:* Affects CLI/TUI users. Logs balloon due to repeated compaction history and raw tool output retention.

10. **#32314 — Windows 0.144.1: elevated sandbox adds ~20s per command**  
    [Issue](https://github.com/openai/codex/issues/32314) — 9 comments, 3 👍  
    *Why it matters:* Recent release introduced major sandbox latency regression on Windows; unelevated mode fixes speed but breaks `apply_patch`.

---

## Key PR Progress (Top 10)

1. **#33695 — Support custom transports for Amazon Bedrock** ([PR](https://github.com/openai/codex/pull/33695))  
   *What:* Allows overriding `base_url`, `auth`, and `http_headers` for the Bedrock provider, plus command-based bearer auth. Critical for enterprise proxy setups.

2. **#31529 — Pre-rollover auto-compaction fallback** ([PR](https://github.com/openai/codex/pull/31529))  
   *What:* Adds an experimental `auto_compact_fallback` feature that runs a sampling request before automatic compaction. Addresses the log-bloat issue (#24948 family).

3. **#33683 — Preserve scope and provenance for imported agent memory** ([PR](https://github.com/openai/codex/pull/33683))  
   *What:* Prevents memory pollution by keeping imported resources in scoped memory, limiting `memory_summary.md` to current session data.

4. **#33665 — Refresh step world state for all sessions** ([PR](https://github.com/openai/codex/pull/33665))  
   *What:* Ensures `AGENTS.md` changes from workspace directory selection reach the model even without deferred executor enabled.

5. **#33645 — Run `write_stdin` concurrently across terminal sessions** ([PR](https://github.com/openai/codex/pull/33645))  
   *What:* Enables parallel stdin writes to independent terminal sessions while maintaining per-session serialization. Addresses background task handling.

6. **#33657 — Restore agent roles when reloading v2 sub-agents** ([PR](https://github.com/openai/codex/pull/33657))  
   *What:* Fixes a bug where durable sub-agent role configurations were lost on lazy reload after session resume.

7. **#33680 — Reword the `apply_patch` tool description** ([PR](https://github.com/openai/codex/pull/33680))  
   *What:* Clarifies the tool's purpose for models, likely to reduce incorrect tool selection.

8. **#31329 — Confirm reset credit redemption** ([PR](https://github.com/openai/codex/pull/31329))  
   *What:* Adds safe-default confirmation before consuming usage-limit resets, with backend-provided titles/descriptions. Prevents accidental credit use.

9. **#33651 — Add app-server API for reading app metadata** ([PR](https://github.com/openai/codex/pull/33651))  
   *What:* New `app/read` API to fetch metadata for up to 100 app IDs with optional tool summaries. Enables better client-side discovery.

10. **#33636 — Clarify when to wait for starting environments** ([PR](https://github.com/openai/codex/pull/33636))  
    *What:* Developer-facing guidance for models on when to call `wait_for_environment` — only when the environment's files/commands are needed.

---

## Feature Request Trends

Across all 50 recent issues, three dominant themes emerge:

1. **Custom model provider support** — Repeated demands for bring-your-own-model (BYOM) in the desktop app, not just CLI. Issues #10867, #27613, #28902 all request custom endpoints, Bedrock extensions, and configurable base URLs.

2. **Event-driven background task execution** — Multiple issues (#32188, #33542, #33712) request non-polling background process completion detection. Users want to start a command, release the session to idle, and have Codex automatically resume when the process finishes — without burning model tokens on polling.

3. **Windows-specific sandbox and performance fixes** — The largest single cluster. Requests center on fixing the Git process spawning storm, sandbox latency regression, Defender false positives, and general Windows app slowness. This is clearly the platform with the most friction.

---

## Developer Pain Points

1. **Windows Git process storm** — Issues #17229, #20567, #30926 describe Codex Desktop spawning hundreds to thousands of `git.exe status` processes per minute, leaving orphaned `conhost.exe` processes and triggering Windows kernel `Token` object growth. This is the single biggest performance complaint on Windows.

2. **Desktop app slowness across platforms** — Issues #21527, #23198, #24275 report unacceptable latency in both app and extension, with SQLite log growth (up to 2GB per session) as a likely contributor.

3. **Sandbox latency regression on Windows (v0.144.x)** — Issue #32314 documents a ~20-second-per-command overhead introduced by elevated sandbox mode. The workaround (unelevated) breaks `apply_patch`.

4. **Rate limit confusion** — Issue #33685 reports that the new weekly limit drains as fast as the old 5-hour limit. Issue #32344 shows CLI misidentifying Pro 20x users as "Lite" plan, blocking access.

5. **Missing tooling for multi-repo workspaces** — Issue #26338 (16 👍) requests parent workspace support for multiple Git repositories, a workflow blocker for monorepo and microservice developers.

6. **False-positive safety blocks** — Issues #33709 and #33685 report aggressive cybersecurity flagging and incorrectly rejected commands, with the v0.144.5 patch (#33455) acknowledging the detection gap.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-17

## Today's Highlights
The team released **v0.51.0 stable** alongside **v0.52.0-preview.0** and a nightly build, signaling active parallel work on both stabilization and new features. Security and reliability dominated the PR landscape: three PRs address macOS sandbox escapes and shell variable expansion bypasses, while the core team made progress on recursive reasoning limits and workspace path trust checks. Community attention remains fixed on **subagent reliability** — particularly the `MAX_TURNS` bug where agent failures are misreported as success — and the generalist agent hang issue.

## Releases
- **[v0.52.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-preview.0)** — Includes a refactor to exclude transient CI configs from workspace context (by @DavidAPierce) and foundational modules for the caretaker triage worker (by @chadd28).
- **[v0.52.0-nightly.20260716.g3ff5ba20f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260716.g3ff5ba20f)** — Fixes a `400 Bad Request` error in A2A by grouping cancelled tool responses and coalescing consecutive roles (by @luisfelipe-alt).
- **[v0.51.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0)** — Stable release including `no_proxy` test fixes and changelog for v0.50.0-preview.1.

## Hot Issues
1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 10 comments)  
   A `codebase_investigator` subagent hits its turn limit yet reports `status: "success"` and `Termination Reason: "GOAL"`. This silently hides agent failures and undermines trust in subagent results. Community upvoted with 2 👍.

2. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (P1, 7 comments)  
   Epic tracking the evolution of behavioral evaluation tests from 76 initial tests to a more comprehensive component-level framework across 6 Gemini models. Critical for ensuring release quality.

3. **[#22745 — Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2, 7 comments)  
   Investigation into whether AST-aware tooling can reduce token waste, improve code navigation accuracy, and reduce turn count. Directly impacts codebase_investigator quality.

4. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 7 comments, 8 👍)  
   The most upvoted open issue. Simple tasks like folder creation hang when delegated to the generalist agent. Users report working around it by instructing the model not to use subagents — a poor developer experience.

5. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, 6 comments)  
   Even when custom skills (e.g., Gradle, Git) are defined with clear descriptions, the model rarely invokes them autonomously. Users must explicitly instruct the model to use them.

6. **[#25166 — Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 4 comments, 3 👍)  
   Simple CLI commands (e.g., `ls`, `git status`) appear to hang indefinitely even after completion. A high-friction issue for daily use.

7. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, 5 comments)  
   Auto Memory only marks a session as processed when the extraction agent successfully reads it. If the agent skips a low-signal session, it reappears indefinitely, wasting compute and API quota.

8. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, 4 comments)  
   The browser subagent crashes on Wayland display servers — a blocker for Linux users with modern desktop environments.

9. **[#22267 — Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)** (P2, 3 comments)  
   Configuration overrides like `maxTurns` in `settings.json` are silently ignored by the Browser Agent, despite being correctly parsed by the `AgentRegistry`.

10. **[#20079 — Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** (P2, 4 comments)  
    A niche but frustrating UX issue: `~/.gemini/agents/filename.md` symlinks are not treated as valid agents, preventing users from organizing their agent definitions via symlinks.

## Key PR Progress
1. **[#28424 — Align macOS permissive Seatbelt profiles with deny-default model](https://github.com/google-gemini/gemini-cli/pull/28424)** (P1, size/l)  
   Updates `permissive-open` and `permissive-proxied` profiles to use `(deny default)` with explicit allow-lists, matching the restrictive profiles. Security hardening for macOS users.

2. **[#28423 — Fix macOS Seatbelt sandbox escape](https://github.com/google-gemini/gemini-cli/pull/28423)** (size/l, closed)  
   Fixes a CVE-2023-32364-class devfs-mount escape where permissive profiles allowed sandbox bypass via file-mount + launchd/Launch Services.

3. **[#28403 — Block $VAR variable expansion bypass](https://github.com/google-gemini/gemini-cli/pull/28403)** (P1, size/m)  
   Patches incomplete security checks in `detectBashSubstitution()` and `detectPowerShellSubstitution()` that allowed variable expansion to bypass GHSA-wpqr-6v78-jr5g. Defense-in-depth for the CI dedup workflow.

4. **[#28164 — Limit recursive reasoning turns per single user request](https://github.com/google-gemini/gemini-cli/pull/28164)** (size/xl, help wanted)  
   Implements a strict 15-turn recursive reasoning limit per user request, customizable via `maxSessionTurns`. Protects CPU resources and API quotas from infinite loops.

5. **[#28319 — Enforce path trust check prior to environment loading (A2A server)](https://github.com/google-gemini/gemini-cli/pull/28319)** (size/xl)  
   Refactors the `CoderAgentExecutor` lifecycle to ensure workspace path trust checks happen before environment variable loading, plus introduces isolated `AsyncLocalStorage` per task.

6. **[#28352 — Sanitize and wrap issue title in untrusted_context](https://github.com/google-gemini/gemini-cli/pull/28352)** (size/s)  
   Closes a prompt injection gap in the caretaker agent ingestion service where issue titles could bypass sanitization.

7. **[#28422 — Resolve reference ambiguity during extension checkout](https://github.com/google-gemini/gemini-cli/pull/28422)** (size/m)  
   Improves Git extension installation robustness by resolving branch/tag references to concrete commit SHAs and verifying checkout integrity.

8. **[#28405 — Prevent scroll position jump during content updates](https://github.com/google-gemini/gemini-cli/pull/28405)** (P1, size/xs)  
   Fixes issue #5009 where scrolling up to review changes (e.g., after Ctrl+S) gets interrupted by new content auto-scrolling.

9. **[#28386 — Track activation disposables in VS Code companion](https://github.com/google-gemini/gemini-cli/pull/28386)** (P2, size/m)  
   Fixes #27790: the VS Code extension was incorrectly wrapping registration calls in comma expressions, losing track of disposables and causing resource leaks.

10. **[#28309 — Improve markdown rendering for CJK text](https://github.com/google-gemini/gemini-cli/pull/28309)** (size/m)  
    Fixes hard line-wrapping and misinterpreted lists in CJK text by replacing line-by-line `<Box>` rendering with a text segmentation approach.

## Feature Request Trends
- **AST-aware tooling** (issues #22745, #22746): Multiple requests for Abstract Syntax Tree integration to improve file read precision, codebase mapping, and method boundary detection — reducing token waste and turn count.
- **Subagent transparency and sharing** (#22598, #21763): Strong demand for subagent trajectories to be visible in `/chat share` and included in `/bug` reports, enabling better debugging and evaluation.
- **Agent self-awareness** (#21432): Requests for the CLI to understand its own hotkeys, flags, and capabilities well enough to act as its own guide — users want the agent to "know itself."
- **Automated memory and triage improvements** (#26522, #26523, #26525): Feature requests for smarter Auto Memory behavior — deterministic redaction, quarantining invalid patches, and avoiding infinite retries on low-signal sessions.
- **Security hardening** (#22672): Growing calls for the agent to detect and discourage destructive commands (`git reset --force`, dangerous DB mutations) and prefer safe alternatives.

## Developer Pain Points
- **Subagent reliability crisis**: The combination of #22323 (false success on MAX_TURNS), #21409 (generalist agent hangs), and #21968 (underuse of skills) paints a picture where subagents are either unreliable or ignored. Developers are losing trust in autonomous agent delegation.
- **Stuck shell commands** (#25166, #22465): Persistent reports of the CLI hanging indefinitely after simple shell commands complete, especially during interactive prompts like `npm create vite`. High daily friction.
- **Configuration ignored** (#22267, #22093): `settings.json` overrides being silently dropped (Browser Agent) and agent permissions being overridden after updates are eroding user confidence in configuration as a reliable control mechanism.
- **Security gaps requiring workarounds**: The macOS sandbox escape (#28423) and shell variable expansion bypass (#28403) indicate that users can't fully trust the CLI's security boundaries — a critical concern for enterprise adoption.
- **Memory system inefficiency** (#26522, #26523): Auto Memory's indefinite retry loop on low-signal sessions and silent skipping of invalid patches wastes compute and creates "ghost" unprocessed data — a quality-of-life drag for power users.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest**
**Date:** 2026-07-17
**Data Source:** `github.com/github/copilot-cli`

---

## 1. Today's Highlights
A minor patch release (v1.0.72-0) went live, finally enabling multi-turn subagents by default and adding tool search support for Claude Haiku 4.5+. However, the community is grappling with several high-severity regressions: silent voice transcription failures across all bundled ASR models, a critical bug where `apply_patch` stores deleted binary files as diffs causing permanent session bloat, and ongoing friction with BYOK/Custom Provider authentication in non-interactive mode. The triage queue is also seeing a surge of Windows installation and permission issues.

---

## 2. Releases
**v1.0.72-0 (2026-07-17)**
- **Added:**
    - Multi-turn subagents are now always enabled, allowing follow-up messages to running agents.
    - Tool search enabled for Claude Haiku 4.5+.
- **Improved:**
    - Scheduled prompts are now delivered as steering messages when the agent is busy.
- **Fixed:**
    - Emoji shortcodes (e.g., `:tada:`) no longer render incorrectly.

**v1.0.71 (2026-07-16)**
- Fixed `copilot -p --autopilot` hanging when a background shell/agent outlives the turn; now respects `COPILOT_TASK_WAIT_TIMEOUT_SECONDS`.
- Subagent model picker now correctly preserves each agent’s reasoning effort and context tier on reopen.

---

## 3. Hot Issues
1.  **[#4024] Voice mode: all bundled ASR models fail silently**
    - *Why it matters:* `/voice` captures audio but returns empty transcriptions for all three models (`nemotron-3.5-asr`, etc.). Blocks any voice-driven workflow.
    - *Reaction:* 11 comments, no workaround yet.
    - *Link:* [Issue #4024](https://github.com/github/copilot-cli/issues/4024)

2.  **[#4097] `apply_patch` stores deleted binary in session history, permanently exceeding CAPI 5 MB limit**
    - *Why it matters:* Deleting large files via agent triggers a catastrophic session bloat. `/compact` fails, and the session is permanently wedged.
    - *Reaction:* 3 comments, 2 upvotes. High severity for users working with media/assets.
    - *Link:* [Issue #4097](https://github.com/github/copilot-cli/issues/4097)

3.  **[#4016] BYOK (COPILOT_PROVIDER_*) still rejected in --acp mode**
    - *Why it matters:* Regressed between v1.0.61–1.0.68; `copilot --acp --stdio` still requires GitHub login even with custom providers.
    - *Reaction:* 3 comments, 3 upvotes. Blocking enterprise offline/air-gapped usage.
    - *Link:* [Issue #4016](https://github.com/github/copilot-cli/issues/4016)

4.  **[#3762] `contextTier` config option does nothing**
    - *Why it matters:* Setting `contextTier: "long_context"` in settings.json does not apply to new sessions until a manual model picker interaction occurs.
    - *Reaction:* 4 comments. Frustrating for power users needing long context by default.
    - *Link:* [Issue #3762](https://github.com/github/copilot-cli/issues/3762)

5.  **[#3407] Session permanently wedged by "Invalid signature in thinking block" CAPIError**
    - *Why it matters:* A background sub-agent’s `thinking` block corrupts the session permanently with no auto-recovery.
    - *Reaction:* Closed but highlights a systemic lack of session recovery mechanisms.
    - *Link:* [Issue #3407](https://github.com/github/copilot-cli/issues/3407)

6.  **[#3767] Oversized attachment permanently wedges session**
    - *Why it matters:* Attachments over 5 MB cause a non-recoverable error, requiring session restart.
    - *Reaction:* Closed, but remains a pain point for users working with large docs.
    - *Link:* [Issue #3767](https://github.com/github/copilot-cli/issues/3767)

7.  **[#4138] Session resume triggers background compaction that hangs indefinitely**
    - *Why it matters:* Resuming a session triggers an empty compaction response, the process hangs with no retry or fallback.
    - *Reaction:* Recurred 4x for the same user. Critical for long-lived sessions.
    - *Link:* [Issue #4138](https://github.com/github/copilot-cli/issues/4138)

8.  **[#4156] Destructive git branch deletion misclassified (no permission prompt)**
    - *Why it matters:* `git branch -D` bypasses the permission system entirely, allowing unsafe branch deletion silently.
    - *Reaction:* 0 comments (just filed), but high security impact.
    - *Link:* [Issue #4156](https://github.com/github/copilot-cli/issues/4156)

9.  **[#4154] Not possible to select text from parts of the TUI**
    - *Why it matters:* Recent UI changes broke text selection in `/skills` and other panels; regression from v1.0.72-0.
    - *Reaction:* Fresh report, immediate recognition of UX degradation.
    - *Link:* [Issue #4154](https://github.com/github/copilot-cli/issues/4154)

10. **[#4149] winget installation fails on Windows**
    - *Why it matters:* Fresh installs via `winget install GitHub.Copilot` fail with no clear workaround.
    - *Reaction:* Closed quickly, but indicates ongoing Windows packaging fragility.
    - *Link:* [Issue #4149](https://github.com/github/copilot-cli/issues/4149)

---

## 4. Key PR Progress
No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends
- **Custom/Third-Party Model Support:** Multiple requests ([#4139](https://github.com/github/copilot-cli/issues/4139)) to allow bring-your-own LLMs (Google Cloud AI, Azure OpenAI, local models), mirroring Claude CLI’s BYOK flexibility.
- **Inheriting MCP Tools from VS Code:** Users want Copilot CLI sessions to auto-inherit MCP tools from a connected VS Code instance ([#4143](https://github.com/github/copilot-cli/issues/4143)) to avoid reconfiguring tool access.
- **Granular File/Web Permissions:** Requests for path prefix matching in permissions (e.g., `allow: /src/*`) to reduce noisy prompts ([#4157](https://github.com/github/copilot-cli/issues/4157)).
- **Better Token Usage Verbosity:** Users want more granular token breakdowns (input, output, cache_read, cache_write) akin to Claude CLI ([#1152](https://github.com/github/copilot-cli/issues/1152)).
- **Session List Sorting:** Request to sort `/resume` sessions by last-updated timestamp for easier recovery ([#4140](https://github.com/github/copilot-cli/issues/4140)).

---

## 6. Developer Pain Points
- **Session Wedging / Bloat:** The top recurring frustration — sessions become permanently unusable after oversized attachments, binary deletions, or corrupted `thinking` blocks. No recovery mechanism exists other than killing the session.
- **BYOK / Authentication Regressions:** Custom provider authentication in non-interactive (`--acp`) mode continues to break across releases, blocking enterprise adoption and CI/CD integration.
- **Configuration Ignored on Startup:** Settings like `contextTier` and `model` are silently ignored in new sessions, forcing users into manual model picker interactions.
- **Windows Installation & Permission Bugs:** Winget installs fail, plugin installs fail with `Access is denied`, and permission prompts often lack requested directory paths — all impacting Windows-based development workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date: 2026-07-17**

---

## Today's Highlights

Two critical bug fixes landed in today's v1.49.0 release—context budget accounting and reasoning-content edge cases—while the community continues to flag TPD rate-limit miscalculations and UX friction in the TUI interface. A new telemetry layer aligning Python events with the TypeScript schema also merged, signaling deeper cross-runtime consistency work.

---

## Releases

**v1.49.0** | [GitHub Release](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.49.0)

Changes:
- Fixed context completion budget to correctly consume remaining context ([PR #2494](https://github.com/MoonshotAI/kimi-cli/pull/2494))
- Preserved empty-string `reasoning_content` as `ThinkPart` in Kosong, fixing a silent drop of reasoning blocks ([PR #2498](https://github.com/MoonshotAI/kimi-cli/pull/2498))
- Stopped sending spurious tokens for empty reasoning sections (related fix, same PR)

---

## Hot Issues

1. **#1559 – CLI install command broken on official docs page**  
   *Author: @ai-anunnaki | Updated: 2026-07-16 | 1 comment | 👍1*  
   Link: [Issue #1559](https://github.com/MoonshotAI/kimi-cli/issues/1559)  
   *Why it matters:* A new-user onboarding blocker—`kimi-cli` install command from `kimi.com/code/docs` fails. Presumably a stale doc link or missing binary. Unresolved since March; community patience is wearing thin.

2. **#2318 – Organization TPD rate limit miscalculated (1.5M requests)**  
   *Author: @globalvideos272-lab | Updated: 2026-07-16 | 0 comments | 👍1*  
   Link: [Issue #2318](https://github.com/MoonshotAI/kimi-cli/issues/2318)  
   *Why it matters:* User reports TPD limit hit at 1,505,241 requests—far below the advertised quota. Likely a metric units bug (e.g., counting internal retries). No replies from maintainers yet.

3. **#2501 – [Feature Request] Quick-switch Reasoning Level in TUI**  
   *Author: @remacheybn408-boop | Updated: 2026-07-16 | 0 comments*  
   Link: [Issue #2501](https://github.com/MoonshotAI/kimi-cli/issues/2501)  
   *Why it matters:* High-velocity feature ask—users want `/thin` shortcuts or header-level reasoning dropdown without diving into `/model` menus. Cites VS Code Codex as UX benchmark.

4. **#2456 – `LLM not set` error on fresh Homebrew installs** *(PR-fixed in #2488)*  
   *Author: @nankingjing | Updated: 2026-07-16*  
   Link: [Issue #2456](https://github.com/MoonshotAI/kimi-cli/issues/2456)  
   *Why it matters:* A classic "silent failure" for new users: running `kimi` before `kimi login` shows a cryptic error. Now actionable via PR #2488.

5. **#2471 – Need per-line stdout streaming tool** *(in discussion)*  
   *Author: @Nitjsefnie | Updated: 2026-07-16*  
   Link: [Issue #2471](https://github.com/MoonshotAI/kimi-cli/issues/2471)  
   *Why it matters:* Developers want real-time per-line monitoring (e.g., for `tail -f`-like usage). Background tools exist but lack streaming semantics.

6. **#2494 – Context budget using wrong counter** *(closed in v1.49.0)*  
   *Author: @RealKai42 | Updated: 2026-07-16*  
   Link: [PR #2494](https://github.com/MoonshotAI/kimi-cli/pull/2494)  
   *Why it matters:* A subtle bug where completion budget was computed from total context instead of *remaining* context, causing premature truncation or over-allocation.

7. **#2498 – Empty reasoning_content dropped silently**  
   *Author: @bigeagle | Updated: 2026-07-16*  
   Link: [PR #2498](https://github.com/MoonshotAI/kimi-cli/pull/2498)  
   *Why it matters:* Reasoning blocks with empty strings were being discarded (not rendered as `ThinkPart`), breaking downstream tooling that expects consistent schema.

8. **#2488 – LLMNotSet error message improvement**  
   *Author: @nankingjing | Updated: 2026-07-16*  
   Link: [PR #2488](https://github.com/MoonshotAI/kimi-cli/pull/2488)  
   *Why it matters:* Fresh installs now get a clear "Run `kimi login` first" message instead of bare `LLM not set`.

9. **#2500 – Telemetry aligned with TS event schema**  
   *Author: @7Sageer | Updated: 2026-07-16*  
   Link: [PR #2500](https://github.com/MoonshotAI/kimi-cli/pull/2500)  
   *Why it matters:* Python telemetry now captures `x-trace-id` header and aligns event names with the TS rewrite. Enables unified observability across runtimes.

10. **#2503 – Release bump to 1.49.0 / 0.55.0**  
    *Author: @sailist | Updated: 2026-07-16*  
    Link: [PR #2503](https://github.com/MoonshotAI/kimi-cli/pull/2503)  
    *Why it matters:* Standard chore PR but includes zh/en release notes—good signal for international maintainers.

---

## Key PR Progress

1. **#2471 – Monitor tool for per-line stdout streaming**  
   *Status: Open | Author: @Nitjsefnie*  
   [PR #2471](https://github.com/MoonshotAI/kimi-cli/pull/2471)  
   Adds a `Monitor` tool that streams stdout line-by-line (vs. background-batch). Useful for watching long-running generation or log output.

2. **#2488 – Actionable LLMNotSet error for fresh installs**  
   *Status: Open | Author: @nankingjing*  
   [PR #2488](https://github.com/MoonshotAI/kimi-cli/pull/2488)  
   Changed default error message from `LLM not set` to `LLM not set. Run 'kimi login' to configure your API key.`. Closes #2456.

3. **#2503 – Release bump v1.49.0 + kosong v0.55.0**  
   *Status: Merged | Author: @sailist*  
   [PR #2503](https://github.com/MoonshotAI/kimi-cli/pull/2503)  
   Bumps both packages; moves release notes; updates `kimi-code` wrapper. Validated via `uv run`.

4. **#2500 – Telemetry alignment with TS schema**  
   *Status: Merged | Author: @7Sageer*  
   [PR #2500](https://github.com/MoonshotAI/kimi-cli/pull/2500)  
   Adds `x-trace-id` capture (stream + non-stream), new event types, and `trace_id` field to Python telemetry.

5. **#2494 – Fix context budget using remaining context**  
   *Status: Merged | Author: @RealKai42*  
   [PR #2494](https://github.com/MoonshotAI/kimi-cli/pull/2494)  
   Critical fix: `use_remaining=True` now correctly budgets from what’s left, not total.

6. **#2498 – Preserve empty-string reasoning_content as ThinkPart**  
   *Status: Merged | Author: @bigeagle*  
   [PR #2498](https://github.com/MoonshotAI/kimi-cli/pull/2498)  
   Stops dropping empty reasoning strings. Also fixes `stop_sending` logic for empty tokens.

7. **#2504 – (Not shown in data, but likely follow-up to #2500)**  
   *No details in provided data.*  

8. **#2493 – (Not shown in data)**  
   *No details in provided data.*  

9. **#2492 – (Not shown in data)**  
   *No details in provided data.*  

10. **#2489 – (Not shown in data)**  
    *No details in provided data.*

---

## Feature Request Trends

- **TUI UX improvements** (Issue #2501): Users increasingly frustrated with deep menu navigation for common tasks like reasoning level toggling. Demand for slash commands (`/thin`) or hotkey shortcuts.
- **Streaming tooling** (PR #2471): Developers want CLI-native per-line streaming for real-time monitoring, not just background batch tools.
- **Telemetry consistency** (PR #2500): Cross-runtime event alignment signals a push toward unified observability—expect more schema-focused features.

---

## Developer Pain Points

1. **New-user onboarding** (Issues #1559, #2456): Two distinct entry barriers—broken doc install command and cryptic `LLM not set` error. Both are high-friction for "try it now" users.
2. **TPD rate-limit confusion** (Issue #2318): Miscalculated limits causing premature throttling. No maintainer response; users left guessing if they're over quota or hitting a counting bug.
3. **Missing quick actions in TUI** (Issue #2501): Switching reasoning levels requires 4+ steps. Users compare unfavorably to VS Code Codex dropdown.
4. **Reasoning-content fragility** (Issue #2498): Empty reasoning strings silently dropped—breaks pipeline tools that rely on consistent response shape. Fixed in v1.49.0, but highlights a history of schema instability.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-17

## Today's Highlights
A steady stream of bugfixes and refinements arrived with **v1.18.3**, including a subagent picker shortcut and critical WSL startup fixes. Community attention remains focused on **provider reliability** (multiple threads report "Upstream request failed" errors across paid Zen and Go models) and the long-running **Memory Megathread (#20695)** which has crossed 110 comments. On the PR front, infrastructure improvements around tracing, prompt quality, and session recovery dominated the day's merges.

## Releases
### [v1.18.3](https://github.com/anomalyco/opencode/releases/tag/v1.18.3)
**Core**
- Up Arrow shortcut now closes the subagent picker when the first item is selected.

**Desktop**
- Fixed home page scrolling — sticky headers and the session list now behave correctly.
- Fixed startup readiness to include WSL server loading before the desktop marks itself as ready.

## Hot Issues (10 selected)

1. **[#20695 — Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (110 comments, 89 👍)
   The community's central collection point for memory issues remains highly active. Maintainers are requesting heap snapshots rather than LLM-suggested fixes. High engagement signals this is the #1 stability concern.

2. **[#13984 — Can't copy and paste in OpenCode CLI](https://github.com/anomalyco/opencode/issues/13984)** (53 comments, 25 👍)
   A long-standing clipboard issue that still sees frequent community activity. The "copied to clipboard" toast fires, but nothing reaches the system clipboard. High-priority UX blocker.

3. **[#37012 — Keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012)** (9 comments, 10 👍)
   Users are pushing back on the new layout design, citing reduced accessibility to features and loss of workspace functionality. A classic tension between redesign and user habit.

4. **[#36506 — All paid OpenCode Zen models fail](https://github.com/anomalyco/opencode/issues/36506)** (5 comments, 2 👍)
   Paid Zen models (`opencode/MiniMax-M3`, `opencode/deepseek-v4-flash`) consistently return "Upstream request failed" while free tiers work. Similar reports on Go models (#37231, #37056) suggest a broader provider-side incident.

5. **[#28696 — Plugin/Agent/Skills marketplace](https://github.com/anomalyco/opencode/issues/28696)** (6 comments, 23 👍)
   A master feature request for a unified marketplace covering plugins, skills, MCP servers, and connectors. Strong community support signals demand for an ecosystem play.

6. **[#35319 — RTL (Arabic) rendering broken in Desktop](https://github.com/anomalyco/opencode/issues/35319)** (6 comments)
   Detailed bug report with a tested fix recipe for word order, alignment, and table direction. Part of a broader RTL localization push (#34697, #33201).

7. **[#37255 — Desktop 1.18.2 sends messages but models never reply](https://github.com/anomalyco/opencode/issues/37255)** (3 comments, 3 👍)
   Post-update regression on Windows. Messages are delivered but responses hang indefinitely. Suspected connection to the "Failed to fetch" cluster of issues.

8. **[#29186 — Log LLM API request/response body at DEBUG level](https://github.com/anomalyco/opencode/issues/29186)** (3 comments, 3 👍)
   Developers need better debugging visibility. Current `--log-level DEBUG` produces no useful LLM API traces — a clear gap for anyone building on top of OpenCode.

9. **[#37372 — v2: empty reasoning-only response recorded as success](https://github.com/anomalyco/opencode/issues/37372)** (2 comments)
   A subtle but serious bug in the V2 core: reasoning-only responses with no tool calls or text are marked successful, leaving clients with no feedback. Could break agentic workflows relying on output validation.

10. **[#37388 — Capability-based external CLI agent adapter](https://github.com/anomalyco/opencode/issues/37388)** (2 comments)
    Proposes an opt-in adapter for external CLI-based agents with conformance tests. Indicates growing interest in swarm/multi-agent architectures beyond OpenCode's built-in agent model.

## Key PR Progress (10 selected)

1. **[#37406 — fix(desktop): guard destroyed recovery windows](https://github.com/anomalyco/opencode/pull/37406)**
   Hardens crash recovery against destroyed `BrowserWindow` instances — merged today. Essential for Desktop reliability.

2. **[#36752 — fix(opencode): read cache write tokens from raw usage](https://github.com/anomalyco/opencode/pull/36752)** (open)
   Fixes Anthropic cache-write billing when using OpenAI-compatible gateways. Closes #36749. Important for cost accuracy.

3. **[#37404 — feat(tui): add hovered theme state](https://github.com/anomalyco/opencode/pull/37404)** (open)
   Adds `$hovered` to theme state schema, with light/dark/migrated V1 defaults. Enhances subagent footer interactivity.

4. **[#37401 — fix(tui): derive session surface colors from hues](https://github.com/anomalyco/opencode/pull/37401)** (merged)
   Theme consistency improvement: session offset surfaces now derive from the active hue scale. Merged today.

5. **[#37395 — fix(cli): isolate server request traces](https://github.com/anomalyco/opencode/pull/37395)** (merged)
   Fixes trace-parenting bug where long-lived server spans polluted every HTTP request trace. Preserves inbound `traceparent`. Merged today.

6. **[#37375 — fix(prompt): add coding-quality exceptions to token-minimization rules](https://github.com/anomalyco/opencode/pull/37375)** (merged)
   Prevents the system prompt from suppressing logs, tests, guard clauses, planning, and comments during coding tasks. Root cause of poor code quality from AI agents. Merged today.

7. **[#36781 — feat(auth): add support for multiple profiles per provider](https://github.com/anomalyco/opencode/pull/36781)** (open)
   Allows storing multiple API keys per provider with named profiles. Closes #5391. High-value for power users juggling multiple accounts/rate limits.

8. **[#35416 — fix(app): stop archive from reopening a recent session](https://github.com/anomalyco/opencode/pull/35416)** (open)
   Archiving the only open session now closes the tab instead of reopening a recent session. Closes #35058.

9. **[#32590 — feat(app): add draggable titlebar tabs](https://github.com/anomalyco/opencode/pull/32590)** (merged)
   Desktop v2 now supports drag-and-drop tab reordering, persisted through the global state. A polished UX improvement.

10. **[#32584 — feat(github): resume the prior session when github run retries](https://github.com/anomalyco/opencode/pull/32584)** (merged)
    Prevents redundant re-execution on `opencode github run` retries by resuming the prior session. Closes #32583.

## Feature Request Trends
- **Unified Marketplace/Registry** (#28696, #37376): The dominant feature direction — users want a single place to discover and manage plugins, skills, MCP servers, and connectors.
- **RTL & i18n Expansion** (#35319, #34697, #33201, #32566, #32555): A sustained push for Arabic, Farsi, Urdu, Indonesian, and Ukrainian localization with multiple open PRs and issues.
- **Prompt Queue & Interrupt Controls** (#37381): Users want to queue follow-up messages while a response streams, rather than always interrupting.
- **Capability-based External Agent Adapter** (#37388): Interest in extending OpenCode as a multi-agent orchestrator with external CLI agents.
- **Structured LLM Debug Logging** (#29186): Developers need `--log-level DEBUG` to output actual API request/response bodies.

## Developer Pain Points
- **"Failed to fetch" / "Upstream request failed" cluster** (#27474, #27755, #36506, #37231, #37056, #37255): The most acute reliability issue — multiple variants of provider connection failures affecting both Zen and Go model tiers, with no single root cause yet identified.
- **Memory management** (#20695): The Memory Megathread remains the highest-activity issue, indicating persistent memory leaks in desktop and server deployments.
- **Copy/paste broken in CLI** (#13984): A basic UI capability broken for months — high frustration given its daily-use impact.
- **V2 empty reasoning response bug** (#37372): A subtle correctness issue in the new V2 core that could silently corrupt agent workflows.
- **Difficulty managing skills/connectors** (#25117, #37376): Custom skills not showing in autocomplete and no UI for connector management makes OpenCode harder to extend than competing tools.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-17

## Today's Highlights
This week brings three consecutive patch releases (v0.80.8–v0.80.10) with significant infrastructure changes: a unified ModelRuntime, Kimi K3 support with adaptive thinking, and provider authentication standardization. The community is actively reporting regressions around extension loading (pi-ollama-cloud broken in 0.80.8/0.80.9) and TUI rendering bugs, while maintainers respond with rapid-fire fixes—especially around xAI OAuth and model catalog accuracy.

## Releases
Three versions shipped in the last 24 hours:

- **v0.80.10** — Kimi Coding thinking compatibility: K3 now exposes its supported `max` thinking level and correctly replays empty-signature thinking blocks. [Release](https://github.com/earendil-works/pi/releases/tag/v0.80.10)
- **v0.80.9** — Kimi K3 integration across built-in providers with progressive extension tool activation via Kimi’s native protocol. [Release](https://github.com/earendil-works/pi/releases/tag/v0.80.9)
- **v0.80.8** — Introduces `ModelRuntime` for centralized model configuration, provider-owned `/login` endpoints, and dynamic provider catalogs. [Release](https://github.com/earendil-works/pi/releases/tag/v0.80.8)

## Hot Issues
1. **[#6657] Bedrock `AWS_PROFILE` auth still failing after claimed fix** — Users report `AccessDeniedException: 403` persists in 0.80.7 despite earlier patch. High engagement (9 comments, 👍2). [Issue](https://github.com/earendil-works/pi/issues/6657)
2. **[#6686] Pi auto-logs out of GitHub** — Recurring authentication issue (originally #2725) still active on 0.80.7 across macOS and Linux. [Issue](https://github.com/earendil-works/pi/issues/6686)
3. **[#5294] Llama.cpp timeout despite infinite setting** — `http timeout = false` in Pi.dev settings ignored with slow models; community suspects separate timeout layer. [Issue](https://github.com/earendil-works/pi/issues/5294)
4. **[#6737] Kimi K3 thinking level limited to `max`** — Users want `low` and `high` mirroring moonshotai/kimi-k3, currently unsupported. [Issue](https://github.com/earendil-works/pi/issues/6737)
5. **[#6736] xAI removed models still exposed in 0.80.9** — Grok 3, Grok 4.20 variants, and Grok Code Fast 1 remain in `xai.models.ts` despite documented removal. [Issue](https://github.com/earendil-works/pi/issues/6736)
6. **[#6743] pi-ollama-cloud extension broken in 0.80.8/0.80.9** — `Cannot read properties of undefined (reading 'create')`; downgrade to 0.80.7 required. [Issue](https://github.com/earendil-works/pi/issues/6743)
7. **[#6746] Kitty keyboard protocol breaks `/model` selector** — Selector flashes and auto-confirms on kitty/WezTerm/VS Code integrated terminal. [Issue](https://github.com/earendil-works/pi/issues/6746)
8. **[#6745] Markdown only renders H1/H2 headers** — H3–H6 appear as raw `###`/`####` text. Low complexity, high annoyance. [Issue](https://github.com/earendil-works/pi/issues/6745)
9. **[#6748] Together.ai deprecated models still selectable** — Five models officially deprecated but still found via `pi --list-models`. [Issue](https://github.com/earendil-works/pi/issues/6748)
10. **[#6740] GPT 5.4 mini wrong thinking level mapping** — `minimal` effort incorrectly included in `openai.models.ts` despite OpenAI rejecting it. [Issue](https://github.com/earendil-works/pi/issues/6740)

## Key PR Progress
1. **[#6739] Telnyx Inference as built-in provider** — Adds OpenAI-compatible endpoint hosting open-source LLMs. Uses existing `openai.ts` provider. [PR](https://github.com/earendil-works/pi/pull/6739)
2. **[#6742] Make model generation explicit** — Cleans up model listing logic. Closes #6741. [PR](https://github.com/earendil-works/pi/pull/6742)
3. **[#6734/#6732] xAI OAuth improvements** — Prefilled device link, SuperGrok login label, trimmed deprecated models, sets grok-4.5 default. [PR](https://github.com/earendil-works/pi/pull/6734)
4. **[#6720] Publish model catalogs to R2** — Deterministic JSON catalog generation with content-addressed revisions, auto-updated every 4 hours. [PR](https://github.com/earendil-works/pi/pull/6720)
5. **[#6721] Test model catalogs against PR merge refs** — Fixes branch-availability issue for catalog generation CI. [PR](https://github.com/earendil-works/pi/pull/6721)
6. **[#6731] Fix syntax highlighting on failed reads** — Skips language highlighting for errored `read` results, adds Elixir regression coverage. [PR](https://github.com/earendil-works/pi/pull/6731)
7. **[#6730] Preserve compaction queue behavior** — Fixes steering/follow-up intent loss during compaction flushing. [PR](https://github.com/earendil-works/pi/pull/6730)
8. **[#6697] Normalize tabs for terminal output** — Fixes visual tab expansion causing overlay desync on auto-wrap. [PR](https://github.com/earendil-works/pi/pull/6697)
9. **[#6651] xAI device OAuth + grok-4.5 via Responses** — Adds device-code OAuth alongside API key auth, routes only grok-4.5 through Responses API. [PR](https://github.com/earendil-works/pi/pull/6651)
10. **[#6594] SQLite session storage** — Adds `retainedTail` for compaction, changes path walking to stop at last compaction. [PR](https://github.com/earendil-works/pi/pull/6594)

## Feature Request Trends
- **Provider expansion**: Strong demand for new providers (Telnyx, Amazon Bedrock Mantle) and OAuth improvements (xAI, Anthropic subscription auth)
- **Thinking/reasoning levels**: Users want granular control over model thinking efforts across all providers (Kimi K3, GPT 5.4-mini, xAI)
- **Extension API maturity**: Requests for deferred reload (`ExtensionContext.requestReload()`), customizable read tool parameters, and serialized prompt startup
- **Model catalog freshness**: Automated detection and removal of deprecated models, dynamic catalog generation via CI

## Developer Pain Points
- **Extension breakage on minor releases**: pi-ollama-cloud and potentially other extensions fail on 0.80.8/0.80.9 with no migration path
- **Authentication fragility**: GitHub auto-logout (#6686) and Bedrock AWS_PROFILE failures (#6657) persist across multiple releases
- **TUI rendering bugs**: Input box overflow (#6704), selector auto-close on Kitty protocol (#6746), markdown header truncation (#6745)
- **Security concerns**: Auto-execution from `.pi/extensions/` without approval (#6715), no destructive command guardrails for bash tool (#6716), weak session UUID generation (#6712)
- **Documentation lag**: TUI docs reference obsolete APIs (#6735), provider changes not reflected in migration guides

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-17

## Today's Highlights

The v0.19.11 stable release shipped alongside a nightly build, with the marquee feature being initial multi-workspace daemon support — a long-requested architectural change enabling a single `qwen serve` process to manage isolated workspaces. Community activity surged around workspace isolation, security scoping, and rendering refinements, while two critical VS Code connection bugs drew immediate attention and are being actively triaged.

## Releases

**v0.19.11-nightly.20260717.f8e6e8931** ([Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.11-nightly.20260717.f8e6e8931))
- `feat(daemon)`: Trace cold first-session startup performance
- `fix(serve)`: Harden multi-workspace ownership logic

**v0.19.11** ([Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.11))
- Includes workspace path lock feature for web-shell
- No breaking changes reported

## Hot Issues

1. **[#6378 — RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)** (24 comments, P2)
   Community RFC defining the architecture for 1 daemon = N workspaces. This is the foundational design discussion enabling today's multi-workspace features. High engagement indicates strong demand.

2. **[#4877 — OpenWork can't distinguish same model from different providers](https://github.com/QwenLM/qwen-code/issues/4877)** (6 comments, closed)
   Bug where identical model IDs from different providers (e.g., GPT-4 from OpenAI vs Azure) collide in settings. Closed with a fix — important for multi-provider setups.

3. **[#7044 — 升级就报错 (Upgrade crash)](https://github.com/QwenLM/qwen-code/issues/7044)** (4 comments, P3)
   User reports v0.19.11 crashes on launch after upgrade. Need-information status pending reproduction details.

4. **[#7051 — VS Code侧边插件报错](https://github.com/QwenLM/qwen-code/issues/7051)** (3 comments, P2)
   VS Code Companion extension fails: "Qwen ACP process exited unexpectedly (exit code: 0)". Showcases Electron flag stripping issue affecting Chinese users.

5. **[#7056 — VS Code connection failure on Windows](https://github.com/QwenLM/qwen-code/issues/7056)** (3 comments, P2)
   Same ACP process crash as #7051 but on Windows. Welcome-pr tagged — likely a cross-platform compatibility issue.

6. **[#7016 — agent开太多，报错了 (Too many agents crash)](https://github.com/QwenLM/qwen-code/issues/7016)** (3 comments, P2)
   User hits resource limits when spawning excessive sub-agents. No reproducer provided yet. Points to missing guardrails.

7. **[#6996 — Custom OpenAI-compatible provider fails with generic 'Connection error'](https://github.com/QwenLM/qwen-code/issues/6996)** (3 comments, P2)
   Real error causes discarded before logging, making debugging impossible. A logging infrastructure issue affecting all custom providers.

8. **[#7002 — CentOS 7 incompatibility: GLIBC_2.27 not found](https://github.com/QwenLM/qwen-code/issues/7002)** (3 comments, P2)
   Node binary requires GLIBC 2.27, unavailable on CentOS 7. Affects enterprise deployments still on older Linux.

9. **[#7017 — Channels pairing/allowlist state not scoped by workspace](https://github.com/QwenLM/qwen-code/issues/7017)** (2 comments, P1)
   Security bug: `PairingStore` uses global directory, allowing cross-workspace pairing state leakage. Priority P1 indicates security concern.

10. **[#7040 — RFC: Reliable auto memory roadmap](https://github.com/QwenLM/qwen-code/issues/7040)** (1 comment, P2)
    Proposal for governed auto-memory lifecycle: candidate extraction → validation → trusted write. Addresses reliability and security of persistent memory.

## Key PR Progress

1. **[#6998 — CI autofix: recover from generated-artifact CI gates](https://github.com/QwenLM/qwen-code/pull/6998)** (OPEN)
    Hardens the autonomous autofix bot against getting stuck when generated artifacts are stale. Critical for CI reliability.

2. **[#7039 — fix(core): retry empty tool-result continuations](https://github.com/QwenLM/qwen-code/pull/7039)** (OPEN)
    Treats semantically empty model continuations (thought-only or placeholder) as retryable. Fixes silent agent stalls.

3. **[#7060 — feat(ui): view full plan from exit_plan_mode confirmation](https://github.com/QwenLM/qwen-code/pull/7060)** (OPEN)
    Press `o` to open truncated plan in external editor. Directly addresses #7001.

4. **[#6969 — feat(cli): bounded daemon log rotation](https://github.com/QwenLM/qwen-code/pull/6969)** (OPEN)
    10 MiB active log + 4 archives, with immutable runIds. Prevents unbounded disk usage in long-running daemons.

5. **[#6967 — fix(core): require explicit approval to exit Plan mode](https://github.com/QwenLM/qwen-code/pull/6967)** (OPEN)
    Prevents accidental plan-mode exit. Also fixes `/reset` to restore plan-mode state.

6. **[#7054 — feat(web-shell): git status chip, visual diff, sidebar git status](https://github.com/QwenLM/qwen-code/pull/7054)** (OPEN)
    Brings full Git working-tree awareness to browser-based daemon UI. Live dirty/clean status, staged/unstaged indicators.

7. **[#7012 — fix(web-shell): batch transcript dispatch to avoid tab-return freeze](https://github.com/QwenLM/qwen-code/pull/7012)** (CLOSED)
    Batches SSE transcript events to prevent UI freeze when restoring hidden tabs. Closed as merged.

8. **[#7052 — fix(core): make per-turn tool-call cap adaptive](https://github.com/QwenLM/qwen-code/pull/7052)** (OPEN)
    Dynamically adjusts max tool calls per turn based on observed response shapes. Improves reliability with streaming providers.

9. **[#7018 — feat(web-shell): add skill management pages](https://github.com/QwenLM/qwen-code/pull/7018)** (OPEN)
    Full Skill CRUD in Web Shell: search, filter, enable/disable, inspect details. `/skills` page and Plugins tab integration.

10. **[#7048 — feat(core): improve subagent delegation defaults](https://github.com/QwenLM/qwen-code/pull/7048)** (OPEN)
    Makes one-shot subagents run in background by default, while preserving explicit foreground opt-out. Better resource management.

## Feature Request Trends

- **Multi-workspace daemon architecture** (#6378, #7014, #7015): The dominant theme this week — designing how sessions, ownership, and routing work across isolated workspaces from one daemon.
- **Unified path display** (#7004, #7007, #7008, #7009): A multi-phase proposal to eliminate 9-way path formatting inconsistency, with prefix merging and consolidated utilities.
- **Reliable auto memory** (#7040): Evolving background memory writes into a governed lifecycle with validation and review gates.
- **Voice input for terminal UI** (#5431): Dormant feature request for dictation-based prompt entry, resurfacing after 4 comments.
- **File name display in tool summaries** (#6813): Replacing "Read 3 files" with "Read a.ts, b.ts, c.ts" for immediate visibility.

## Developer Pain Points

- **VS Code Companion connection failures** (#7051, #7056): Two reports of "ACP process exited unexpectedly" — affects both Chinese and English users, on macOS and Windows. Likely an Electron flag stripping regression.
- **Custom provider debugging impossible** (#6996): Generic "connection error" swallows the real cause. Developers forced to guess what failed.
- **Legacy Linux incompatibility** (#7002): CentOS 7 users blocked by GLIBC version requirement. Enterprise impact.
- **Upgrade stability concerns** (#7044): v0.19.11 crashes on launch for at least one user. Need-information status means low visibility into root cause.
- **TUI rendering glitches** (#7006, #7037): Code blocks taller than viewport render as prose; skill modals missing right border. Minor but frequent papercuts.
- **Multi-workspace security gaps** (#7017): Pairing and allowlist state not scoped to workspace — potential cross-workspace data leakage in the new daemon model.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-17

## Today's Highlights

The project has fully transitioned to the **CodeWhale** identity (v0.9.0 released), with the legacy `deepseek-tui` npm package officially deprecated. The community is buzzing with activity around **first-run onboarding UX** and **constitution creator** improvements, while performance optimization PRs dominate today's merge queue. Seven concurrent PRs target KV cache concurrency improvements in the web layer alone.

## Releases

**v0.9.0** — [Release Link](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.0)

> **Codewhale** is now the public product name from Shannon Labs. The `codewhale` command, npm package, and release assets use lowercase technical identifiers. The legacy `deepseek-tui` npm package is deprecated and receives no further releases. Users migrating from v0.8.x must update their install scripts.

## Hot Issues (10 selected)

1. **[#3793] Constitution creator UX** — [Link](https://github.com/Hmbown/CodeWhale/issues/3793)  
   *16 comments.* Proposes a guided, localized constitution creator instead of a blank prompt editor. Community strongly supports language-first flow but debates whether autonomy/risk posture should control runtime security settings (consensus: no).
   
2. **[#3205] Fleet loadout auto** — [Link](https://github.com/Hmbown/CodeWhale/issues/3205)  
   *11 comments.* Core model/loadout selector for TUI, CLI, subagents, and Fleet workers. Community wants "Fleet loadout auto" to resolve full compute loadout, not just pick a model string.

3. **[#3792] First-run onboarding** — [Link](https://github.com/Hmbown/CodeWhale/issues/3792)  
   *8 comments.* Should feel like "starting CodeWhale," not "editing config." Recommends language-first spine with constitution central but no enforced runtime security controls mixed in.

4. **[#4227] JayBeest tsunami mapper** — [Link](https://github.com/Hmbown/CodeWhale/issues/4227)  
   *7 comments.* Help contributor map high-velocity project changes (10+ PRs/day). Proposed workflow: pull latest, rebuild, run tests, generate diff summary.

5. **[#1481] OpenCode Go/Zen support** — [Link](https://github.com/Hmbown/CodeWhale/issues/1481)  
   *7 comments, 1 👍.* Requests OpenCode Go/Zen as DeepSeek provider (cheap V4 access). Community eagerly awaiting; PR #4420 now addresses the Go half.

6. **[#4417] Kimi OAuth device login** — [Link](https://github.com/Hmbown/CodeWhale/issues/4417)  
   *3 comments.* First-class OAuth/device-login path for Moonshot AI Kimi, separate from API-key config. Complements #4387 (Kimi K3 model support).

7. **[#4415] Enforce hard tool budgets** — [Link](https://github.com/Hmbown/CodeWhale/issues/4415)  
   *1 comment but high urgency.* Bug report: GLM-5.2 route allowed 13 `read_file` calls despite explicit budget of 8. Community concerned about model route discipline.

8. **[#4010] WhaleFlow Conductor agent** — [Link](https://github.com/Hmbown/CodeWhale/issues/4010)  
   *4 comments.* Orchestrating agent ensembles: fan-out scouts, wait, route artifacts, retry, synthesize. Missing piece in WhaleFlow architecture.

9. **[#1512] Mouse scroll broken** — [Link](https://github.com/Hmbown/CodeWhale/issues/1512)  
   *5 comments.* Scroll wheel only shows user messages, cannot view model output context. Long-standing UI annoyance.

10. **[#2494] macOS + iTerm2 issues** — [Link](https://github.com/Hmbown/CodeWhale/issues/2494)  
    *3 comments.* User compilation of macOS problems: wrong keybindings, multiline paste breaks, no stop mechanism, missing session history. Community asking for macOS-specific fixes.

## Key PR Progress (10 selected)

1. **[#4432] Optimize sequential KV operations** — [Link](https://github.com/Hmbown/CodeWhale/pull/4432)  
   Replaces sequential `for` loop with `Promise.all` in `runLinkCheck` for concurrent DB I/O. Improves cron job execution time.

2. **[#4431] McpManager::call_tool tests** — [Link](https://github.com/Hmbown/CodeWhale/pull/4431)  
   Adds unit tests for happy path and error propagation in MCP tool calling.

3. **[#4430] Repair JSON text + array extraction fix** — [Link](https://github.com/Hmbown/CodeWhale/pull/4430)  
   Found and fixed bug: original logic favored JSON objects over arrays, missing valid array-containing objects.

4. **[#4436] Concurrent KV I/O in content-watch** — [Link](https://github.com/Hmbown/CodeWhale/pull/4436)  
   Batch-fetches KV records concurrently in both `runLinkCheck` and `runSemanticDrift`.

5. **[#4434] Expose OpenCode Go in derived facts** — [Link](https://github.com/Hmbown/CodeWhale/pull/4434)  
   Maps `OpencodeGo` runtime provider into website facts; regenerates committed provider inventory.

6. **[#4422] Fix TUI project subagent handoffs on resume** — [Link](https://github.com/Hmbown/CodeWhale/pull/4422)  
   Centralizes live subagent completion/waiting envelopes with idempotent restore. Merged.

7. **[#4421] Fix Hotbar Setup focus visibility** — [Link](https://github.com/Hmbown/CodeWhale/pull/4421)  
   Derives rendered action window from selected row; adds 80x24 regression test. Merged.

8. **[#4419] Restore xAI device login** — [Link](https://github.com/Hmbown/CodeWhale/pull/4419)  
   OIDC metadata discovery, TLS validation, structured error handling. Critical for auth path.

9. **[#4420] OpenCode Go Chat Completions route** — [Link](https://github.com/Hmbown/CodeWhale/pull/4420)  
   Adds 8 models via OpenCode Go endpoint. Deliberately does not close #1481 (Zen remains separate). Merged.

10. **[#4379] Cancellable OAuth login API** — [Link](https://github.com/Hmbown/CodeWhale/pull/4379)  
    Adds `perform_oauth_login_for_server_with_cancel` for MCP; drops in-flight future on cancel. Fixes #4380. Merged.

## Feature Request Trends

1. **Multi-provider expansion** (top theme): OpenCode Go/Zen (#1481), Kimi K3 (#4387, #4417), TelecomJS (#4370), Xiaomi MiMo (#3810). Community clearly wants maximal model choice.
2. **Guided onboarding**: Constitution creator (#3793) and first-run experience (#3792) both emphasize "guided, not blank." Language-first approach is strongly preferred.
3. **Agent orchestration**: WhaleFlow Conductor (#4010), Fleet loadout auto (#3205), and fleet model-policy contracts (#4065) show demand for programmable multi-agent workflows.
4. **Provider parity**: OAuth device login for Kimi (#4417), Xiaomi UltraSpeed documentation (#3810) — users want feature-complete provider support.
5. **Operator control plane**: Slash commands for agents/jobs (#1888), hard tool budgets (#4415), and fleet profile CLIs (#4065) indicate need for policy-based runtime governance.

## Developer Pain Points

1. **macOS/iTerm2 usability**: Keyboard shortcut mismatch, multiline paste breaking, missing stop mechanism, session history visibility (#2494, #1106). Persistent cross-platform gap.
2. **UI rendering bugs**: Mouse scroll broken for model output (#1512), results truncated on Windows (#805), image corruption during execution (#894). Multiple users report TUI rendering regressions.
3. **Performance bottlenecks**: Report saving "extremely slow" with low cache hit ratio (#1732), sequential KV operations slowing cron jobs (multiple PRs today).
4. **Onboarding friction**: New users report feeling "lost in config" rather than guided into the product (#3792, #3793). Blank prompt editor criticized as anti-pattern.
5. **Tool budget enforcement**: Models routinely exceed declared tool call limits (#4415). Community worries about runaway agent loops and cost.
6. **Build and CI fragility**: HarmonyOS port blocked by transitive dependency mismatch (#2625), release-tag CI fixture breaks after real tags exist (#4388), crates.io packaging requires changelog path fix (#4413).

</details>

<details>
<summary><strong>Grok CLI</strong> — <a href="https://github.com/superagent-ai/grok-cli">superagent-ai/grok-cli</a></summary>

# Grok CLI Community Digest — 2026-07-17

## Today's Highlights
No new releases or pull requests were posted in the last 24 hours, indicating a relatively quiet day on the `superagent-ai/grok-cli` repository. The main focus is a lingering clipboard bug (Issue #344) affecting GNOME Terminal on Ubuntu 24.04, which remains unresolved despite having been closed. The community is likely waiting for a fix to be merged or for maintainers to provide a workaround.

## Releases
None in the last 24 hours.

## Hot Issues
1. **#344 — [Bug]: OSC 52 clipboard copy not working in GNOME Terminal on Ubuntu 24.04**  
   *Author: amber1686855908-hash* | *Updated: 2026-07-16* | *Comments: 0* | *Status: Closed*  
   **Why it matters:** This is the only issue updated today, affecting a common terminal environment (GNOME Terminal). Users report the "copy!" prompt appears but clipboard content is never written. The issue works in Kitty but not in the default Ubuntu terminal, pointing to an OSC 52 compatibility problem. Community reaction is minimal (0 comments), but the closed status without a fix may frustrate Ubuntu users.  
   *Link: [superagent-ai/grok-cli Issue #344](https://github.com/superagent-ai/grok-cli/issues/344)*

*(No other issues were updated in the last 24h. The above is the sole noteworthy issue for today.)*

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
Based on the broader context of recent issues (not just last 24h), the most-requested features across the repository include:
- **Enhanced clipboard integration** — Users want reliable OSC 52 support across terminal emulators (especially GNOME, Konsole, and Windows Terminal).
- **Cross-platform GUI notifications** — Requests for native desktop notifications on copy success/failure.
- **Configurable copy triggers** — Ability to bind copy actions to custom key combinations or turn off the "copy!" prompt.
- **Terminal emulator detection and adaptive clipboard fallback** — Automatically switch between OSC 52, xclip, or `wl-copy` based on the running terminal.

## Developer Pain Points
- **Terminal-specific clipboard failures** — The inconsistency between terminal emulators (Kitty works, GNOME Terminal does not) is a recurring frustration. Developers want either a universal fix or clear documentation on which terminals are supported.
- **Silent failures with ambiguous feedback** — The "copy!" prompt provides no indication of whether the operation actually succeeded, leading to wasted time debugging.
- **Low community engagement on reported bugs** — Issue #344 has 0 comments, suggesting either low user awareness or that users are waiting for maintainer response. Developers have expressed desire for faster triage and reproduction steps.

</details>

---

## Closed-Source Tools

> Version tracking only (source: npm registry / official changelog). No public repo; each maps to a mainstream model vendor.

| Tool | Vendor / Model | Latest | Published | Status |
| --- | --- | --- | --- | --- |
| MiniMax Code | MiniMax · MiniMax M1 | `1.0.18` | 2026-07-16 | 🆕 New |
| CodeBuddy | Tencent · Hunyuan 混元 | `2.123.1` | 2026-07-16 | 🆕 New |
| ZCode | Zhipu · GLM | `3.3.6` | 2026-07-15 | — |


---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*