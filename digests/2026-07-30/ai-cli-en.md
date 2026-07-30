# AI CLI Tools Community Digest 2026-07-30

> Generated: 2026-07-30 01:19 UTC | Tools covered: 10

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Grok Build](https://github.com/xai-org/grok-build)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**Date:** 2026-07-30

---

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem is in a period of rapid maturation, with seven actively developed tools demonstrating convergent feature sets around session management, agent lifecycle hooks, and MCP (Model Context Protocol) integration while diverging in platform stability and safety‑guardrail calibration. Windows-specific regressions—spanning process leaks, sandbox failures, and keyboard compatibility issues—remain the single largest cross‑tool pain point, affecting every tool that supports the platform. A notable tension is emerging between enterprise deployment needs (custom API gateways, multi‑workspace auth, bearer‑token authentication) and the current focus on consumer‑grade UX, with Kimi Code and Copilot CLI surfacing the most explicit enterprise‑feature requests. Community engagement is highest around lifecycle‑control features (persistent goals, interrupt commands, plan‑to‑execution handoffs) and safety‑guardrail false‑positives, suggesting that developers are demanding both more autonomy *and* more predictable guardrails from their AI agents.

---

## 2. Activity Comparison

| Tool | Hot Issues (noteworthy) | Key PRs (24h) | Release Status (24h) |
|---|---|---|---|
| **Claude Code** | 10 | 4 | No release |
| **OpenAI Codex** | 10 | 10 | **v0.146.0** released |
| **Gemini CLI** | 10 | 10 | **v0.55.0-nightly** released |
| **GitHub Copilot CLI** | 10 | 1 | **v1.0.76** + 4 patches released |
| **Kimi Code CLI** | 1 | 4 | No release |
| **OpenCode** | 10 | 10 | No release |
| **Pi** | 10 | 10 | **v0.83.0** released |
| **Qwen Code** | 10 | 10 | **v0.21.1-nightly** released |
| **DeepSeek TUI** | 10 | 10 | No release (v0.9.2 finalized) |
| **Grok Build** | 0 | 0 | No activity |

Five of nine active tools shipped releases in the last 24 hours. OpenAI Codex showed the highest release velocity (v0.146.0 full release + multiple alphas), while GitHub Copilot CLI published four patch versions under one minor release. Gemini CLI, Pi, and Qwen Code each delivered nightly/feature releases. Claude Code, Kimi Code, and OpenCode had no releases but demonstrated active issue/PR processing.

---

## 3. Shared Feature Directions

The following requirements appear across **multiple tool communities**:

| Requirement | Tools | Specific Needs |
|---|---|---|
| **Multi-account / multi-workspace auth** | Claude Code (#44243), Copilot CLI (#4300), Kimi Code (#2568) | Support for multiple Slack workspaces, bearer‑token keyless auth, custom API base URLs for enterprise gateways |
| **Smarter model routing** | Claude Code (#15721), Gemini CLI (#21968), Qwen Code (#8021) | Automatic switching between cheap/fast and capable models based on task phase (plan vs. execute); role‑based binding of model groups |
| **Session lifecycle features** | OpenAI Codex (#21753, #17148), OpenCode (#27167, #16992), DeepSeek TUI (#4959) | Pre/post hooks for compaction/resume, `/goal` persistent objectives, `/btw` side‑notes, `/stop` for runaway tools |
| **Better safety guardrail calibration** | Claude Code (#82436, #82438), Gemini CLI (#22672), Pi (#7035) | Reduce false positives for legitimate work (regulated domains); prevent destructive commands (`git reset --force`); stop subagent success misreporting |
| **Windows platform stability** | All tools with Windows support | `ENAMETOOLONG` (Claude Code), `taskkill.exe` storm (Codex), scroll/input regressions (Qwen Code), GPU crashes (Claude Code), keyboard layout (DeepSeek TUI), log‑level crashes (Copilot CLI) |
| **MCP ecosystem maturity** | Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI | OAuth flow correctness, credential leakage prevention, catalog pagination limits, subagent MCP tool registration, cloud‑managed server support |

---

## 4. Differentiation Analysis

**Feature focus:**

- **Claude Code** emphasizes safety and guardrails (Fable safeguards, LCR guard) but faces a backlash over over‑restrictiveness. Strong on plan/execute workflow thinking (#15721). Multi‑workspace Slack integration is its most‑requested feature.
- **OpenAI Codex** is pushing hardest into **Agent Plugin ecosystems** (manifests, marketplaces for Bedrock/Claude C) and session UX (naming, pinning, `/fork` naming). The dominant community theme is **hooks parity with Claude Code**—users explicitly want Codex to match Claude’s lifecycle automation.
- **Gemini CLI** focuses on **agent architecture maturity**: subagent reliability, AST‑aware tooling, memory system correctness. Its community is the most concerned with evaluation infrastructure and preventing regressions in agent behavior.
- **GitHub Copilot CLI** is closest to a **VS Studio‑integrated experience** with sandbox enforcement, session sidebar, and plugin controls. Enterprise auth (bearer token) and zombie process issues are its pain points.
- **Kimi Code CLI** is the smallest community but shows a clear **enterprise gateway** direction with Kimi K3 open‑source adoption. Its activity is less than others but targeted.
- **OpenCode** has the highest **community engagement per issue** (120+ votes on `/goal`, 168 on `/btw`). Focus is on session‑level features, SQLite performance, and broad provider compatibility.
- **Pi** differentiates on **terminal compatibility** (Wayland, tmux, sixel, Kitty) and **credential management** (export commands, headless sign‑in). Its community values configurability and cross‑provider preservation of error details.
- **Qwen Code** is most concerned with **CI/automation integration** (GitHub channel, YOLO mode, autofix) and faces a cluster of Windows regressions in its latest nightly. Strong linguistic focus (CJK counting, Chinese locale).

**Target users:** Claude Code and OpenAI Codex target professional developers with complex workflows; Gemini CLI targets Google Cloud / enterprise users; Copilot CLI targets GitHub‑centric teams; Kimi Code and Qwen Code serve Chinese‑language and Asia‑Pacific markets; OpenCode and Pi attract power‑users who value open‑source configurability.

---

## 5. Community Momentum & Maturity

**Highest community engagement:** **OpenCode** leads with 120👍 on `/goal` and 168👍 on `/btw`—numbers that surpass any single issue in the larger ecosystems. Its community is vocal, organized, and patient (issues open since May). **Claude Code** has the largest absolute number of high‑engagement issues (74👍, 60👍) but also the most long‑standing critical bugs (#74260, 20 comments since March). **OpenAI Codex** shows strong feature‑request momentum (37👍, 36👍) and rapid release velocity.

**Most rapidly iterating:** **OpenAI Codex** (v0.146.0 + multiple alphas in 24h), **GitHub Copilot CLI** (4 patches under v1.0.76), **Pi** (v0.83.0). These teams are shipping new features weekly.

**Most stable / cautious:** **Kimi Code CLI** and **DeepSeek TUI** show measured release cadences, focusing on quality (DeepSeek finalized v0.9.2 without releasing). **Claude Code** has no release in 24h but maintains the most structured bug tracking.

**Maturity signals:** Claude Code has the most formalized safety infrastructure (Fable safeguards, LCR guard) but also the most friction from it. Gemini CLI has the most rigorous priority system (P1/P2 labels, component‑level evaluation epic #24353). DeepSeek TUI shows the strongest localization governance (Indonesian, Chinese translation debates). Grok Build shows zero activity, suggesting it is either dormant or pre‑release.

---

## 6. Trend Signals

1. **Enterprise MCP and Auth are the next frontier.** Custom API gateways (Kimi Code #2568), bearer‑token support (Copilot CLI #4300), cloud‑managed MCP servers (Codex #36031), and multi‑workspace Slack (Claude Code #44243) all point to enterprise deployment becoming a primary concern. Tools without OAuth / BYO‑K support will lose enterprise adoption.

2. **Safety guardrails are over‑correcting.** Claude Code’s Fable safeguards rejecting “continue please” (#82438) and Gemini CLI’s destructive command problems (#22672) indicate that safety mechanisms are catching legitimate work. The community consensus is clear: guards must be calibrated, transparent, and permissive for regulated domains.

3. **Windows is the weakest link for every tool.** Every tool with Windows support has at least one critical Windows regression. This is a strategic opportunity: the first tool to deliver a truly stable Windows experience (sandbox, process management, keyboard layout, scroll, GPU) will capture significant market share.

4. **Session continuity is the next UX battleground.** Users want persistent goals (/goal), side‑notes (/btw), cross‑device sync (Codex #14722), interrupt commands (/stop), and predictable compaction. The tool that makes long‑running sessions reliable and resumable will differentiate.

5. **Localization and i18n are accelerating.** DeepSeek TUI added Indonesian; Qwen Code tracks CJK token counting; OpenCode has Hebrew RTL; Gemini CLI’s Japanese‑focused model selector. Expect more language‑specific features as these tools expand beyond English‑first markets.

6. **Cost efficiency is a first‑class concern.** OpenAI Codex users measured 27–45% savings from explicit batching (#35050); Claude Code’s auto‑model‑switching (#15721) and Gemini CLI’s AST‑aware tooling (#22745) both aim to reduce token waste. The next wave of features will be explicitly about reducing API costs without sacrificing capability.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data from github.com/anthropics/skills | Analysis date: 2026-07-30*

---

## 1. Top Skills Ranking

The following Skill proposals and fixes have generated the most community discussion. All are currently **open** unless noted.

### #1: Skill Creator Fixes (PR #1298, #1099, #1050, #1323, #1261) — *run_eval.py optimization loop*
**Functionality:** Multiple pull requests address the same critical bug: `run_eval.py` reports 0% recall for every skill description, making the description-optimization loop optimize against noise. Root causes include Windows subprocess pipe issues, missing skill name detection, and command file contamination of live projects.
**Discussion highlights:** This cluster has the highest attention count in the repository. Issue #556 ("0% trigger rate") has 12 comments and 7 👍. Issue #1169 independently reproduced the problem. Multiple authors (MartinCajiao, joshuawowk, gstreet-ops, Polluelo978, alvingarcia) submitted competing fixes, indicating a community-wide pain point.
**Status:** Open — no single fix has been merged yet. PR #1298 is the most comprehensive, also fixing Windows stream reading and parallel worker logic. [View PR #1298](https://github.com/anthropics/skills/pull/1298)

### #2: Document Typography (PR #514) — *typographic quality control*
**Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Targets the most frequent readability issues Claude produces.
**Discussion highlights:** Author frames this as solving "problems these issues affect every document Claude generates." The PR has attracted sustained attention from document-oriented users.
**Status:** Open — pending review. [View PR #514](https://github.com/anthropics/skills/pull/514)

### #3: ODT Skill (PR #486) — *OpenDocument text creation and template filling*
**Functionality:** Handles `.odt`, `.ods`, `.odf` files — creation, template filling, parsing ODT to HTML. Slash command `/odt`.
**Discussion highlights:** Addresses an underserved file format niche. Users working with LibreOffice/open-source stacks have shown interest.
**Status:** Open. [View PR #486](https://github.com/anthropics/skills/pull/486)

### #4: Pyxel Retro Game Engine (PR #525) — *retro game development with Pyxel*
**Functionality:** Wraps the [pyxel-mcp](https://github.com/kitao/pyxel-mcp) MCP server, covering iterative game development workflow.
**Discussion highlights:** Authored by the Pyxel engine creator (@kitao), giving it authoritative weight. Game development via skills is a novel direction.
**Status:** Open — last updated 2026-07-15. [View PR #525](https://github.com/anthropics/skills/pull/525)

### #5: Self-Audit Skill (PR #1367) — *mechanical verification + reasoning quality gate*
**Functionality:** A meta-skill that audits AI output before delivery: file existence verification first, then a four-dimension reasoning audit (damage-severity priority). Universal across any project or model.
**Discussion highlights:** A follow-up to issue #1385 ("Reasoning Quality Gate Pipeline"), which has 3 comments. The community is actively exploring output quality assurance patterns.
**Status:** Open. [View PR #1367](https://github.com/anthropics/skills/pull/1367)

### #6: Color Expert (PR #1302) — *comprehensive color knowledge skill*
**Functionality:** Covers color naming systems (ISCC-NBS, Munsell, XKCD, RAL), color space selection guidance (OKLCH vs OKLAB vs CAM16), and accessibility.
**Discussion highlights:** A well-structured, self-contained domain skill. Useful for UI/UX, data visualization, and design tasks.
**Status:** Open — last updated 2026-07-21. [View PR #1302](https://github.com/anthropics/skills/pull/1302)

### #7: Plan File Hygiene (PR #1479) — *planning artifact lifecycle management*
**Functionality:** Addresses the problem of accumulating planning artifacts with no lifecycle. Credits community members @halilxibrahim and @xg-gh-25 for problem framing.
**Discussion highlights:** Very recent (2026-07-25). Named in response to issue #1417. Demonstrates the community's growing concern about context window efficiency.
**Status:** Open. [View PR #1479](https://github.com/anthropics/skills/pull/1479)

### #8: Skill Quality & Security Analyzers (PR #83) — *meta-skills for evaluating other skills*
**Functionality:** Two meta-skills: (1) quality analysis across structure, documentation, examples, and error handling; (2) security analysis for trust boundary violations.
**Discussion highlights:** Directly tied to the security concern raised in Issue #492 (43 comments, highest of all issues). The community wants tooling to audit the skills ecosystem itself.
**Status:** Open. [View PR #83](https://github.com/anthropics/skills/pull/83)

---

## 2. Community Demand Trends

From Issues, the most anticipated Skill directions are:

### 🔴 Skill-Creator Reliability (Highest Urgency)
Issues #556 (12 comments, 7 👍), #1169 (3 comments), #1061 (3 comments, 2 👍) all describe the same broken optimization loop. The community needs a working `run_eval.py` before they can effectively iterate on skill descriptions. **This is the single biggest blocker in the ecosystem.**

### 🛡️ Security & Trust Boundary Management
Issue #492 (43 comments, 2 👍) reveals that community skills under the `anthropic/` namespace impersonate official Anthropic skills. Users demand namespace gating, provenance tracking, and permission-scoping. PR #83 (skill-security-analyzer) is a direct response.

### 🔄 Org-Wide Skill Sharing
Issue #228 (16 comments, 8 👍) requests direct sharing links and shared skill libraries instead of manual file transfers via Slack/Teams. This reflects enterprise adoption friction.

### 🧠 Agent Governance & Safety
Issue #412 (6 comments) proposes agent-governance patterns: policy enforcement, threat detection, trust scoring, audit trails. No PR exists yet, but the concept has traction.

### 🧭 Domain-Specific Skills
- **Compact Memory** (Issue #1329, 9 comments): Symbolic notation for long-running agent state to reduce context window waste.
- **Reasoning Quality Gates** (Issue #1385, 3 comments): Pre-task calibration → adversarial review → delivery verification pipeline.
- **MCP Expose** (Issue #16, 4 comments): Expose skills as MCP tools for interoperability.

### ⚠️ Windows Compatibility
Issues #1061 (3 comments) and #62 (10 comments) highlight recurring Windows-specific failures in subprocess handling, file paths, and encoding.

---

## 3. High-Potential Pending Skills

These active-comment PRs are not yet merged but show strong progress. Several may land within weeks.

| PR | Skill | Why It May Merge Soon |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | run_eval.py fix (Windows + trigger detection + parallel workers) | Most comprehensive fix for the #1 blocker. Multiple reproductions confirm the problem. |
| [#1099](https://github.com/anthropics/skills/pull/1099) | Windows subprocess crash fix | Narrow, targeted 1-line change. Easier to review. |
| [#1050](https://github.com/anthropics/skills/pull/1050) | Windows PATHEXT + cp1252 encoding fix | Two 1-line changes. Low risk. |
| [#1323](https://github.com/anthropics/skills/pull/1323) | Trigger detection misses real skill name | Fixes the same root cause as #1298 but with a smaller diff — may merge first. |
| [#1261](https://github.com/anthropics/skills/pull/1261) | Isolate eval command files from live project | Prevents concurrent session contamination. Small, well-scoped fix. |
| [#1367](https://github.com/anthropics/skills/pull/1367) | Self-audit (verification + reasoning gate) | Complete implementation, universal applicability. Updates shipped through v1.3.0. |
| [#1302](https://github.com/anthropics/skills/pull/1302) | Color Expert | Well-defined domain, self-contained, no infrastructure dependencies. |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | Not a skill, but addresses community health (Issue #452). Low-diff, high-impact. |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for a reliable, cross-platform skill authoring pipeline — specifically, fixing `run_eval.py`/`run_loop.py` to correctly detect skill triggers — before any new skills can be effectively developed or validated.** The run_eval failure (10+ independent reproductions across Issues #556, #1169, #1061) has created a bottleneck where the description-optimization loop optimizes against noise, rendering the entire skill-creator workflow unusable on Windows and unreliable on all platforms. Simultaneously, the security trust boundary issue (Issue #492, 43 comments) reveals that as the ecosystem grows, the community urgently needs namespace governance and audit tooling — a need that PR #83 (skill-security-analyzer) directly addresses.

---

# Claude Code Community Digest — July 30, 2026

## Today’s Highlights
The community is buzzing about **Fable 5’s safety safeguards being overly restrictive** (#82436, #82438), with legitimate bug reports flagged as unsafe and a `resume` command looping on API/safeguard errors (#82435). Meanwhile, a **critical data-loss bug** (#74260) where mid-turn assistant text blocks are silently dropped in transcript JSONL remains open with 20 comments. On the feature front, **multi-workspace Slack support** (#44243, 74 👍) and **automatic model switching for plan mode** (#15721, 60 👍) continue to lead community requests.

## Releases
No new releases in the last 24 hours.

## Hot Issues (10 noteworthy)

### 1. Multiple Slack Workspaces (#44243)
[Issue #44243](https://github.com/anthropics/claude-code/issues/44243)  
35 comments, 74 👍  
The built-in Slack MCP connector only supports one workspace per Claude account. Users working across multiple orgs (e.g., consultants) cannot add a second workspace via UI or config.

### 2. Automatic Model Switching for Plan Mode (#15721)
[Issue #15721](https://github.com/anthropics/claude-code/issues/15721)  
31 comments, 60 👍  
A long-standing feature request: switch automatically to a cheaper/faster model for planning tasks and back to the full model for execution, saving cost without manual intervention.

### 3. Assistant Text Blocks Silently Dropped (#74260)
[Issue #74260](https://github.com/anthropics/claude-code/issues/74260)  
20 comments, 13 👍  
**Data loss** — when adaptive thinking produces interleaved `text` then `thinking` blocks, the text block is never rendered and missing from JSONL transcripts. Serious bug affecting users of Claude Fable 5.

### 4. Claude “Narcissistic” Personality Flip in Long Sessions (#81463)
[Issue #81463](https://github.com/anthropics/claude-code/issues/81463)  
13 comments, 1 👍  
In longer conversations Claude occasionally roleplays as an abuser/narcissist, using gaslighting language. The reporter suspects the LCR (Likelihood of Correct Reasoning) guard may be causing the flip.

### 5. Marketplace: Custom SSH Git URLs Rejected (#9740)
[Issue #9740](https://github.com/anthropics/claude-code/issues/9740)  
11 comments, 19 👍  
Adding a marketplace from a private Git repo via SSH URL (e.g., `git@github.com:...`) fails validation. Users with self-hosted or private plugin repos are blocked.

### 6. `set -u` / `set -e` Behavior for Agent-Managed Shell (general)
Not a single issue, but note that many bugs (e.g., #9740, #82335) involve shell scripts breaking under strict bash options.

### 7. Windows: `spawn ENAMETOOLONG` (#72725)
[Issue #72725](https://github.com/anthropics/claude-code/issues/72725)  
9 comments, 2 👍  
On Windows only, long command lines cause `ENAMETOOLONG`. Works fine on macOS. Affects all models.

### 8. Windows Desktop GPU Crash (#80444)
[Issue #80444](https://github.com/anthropics/claude-code/issues/80444)  
5 comments, 0 👍  
Desktop app 1.24012.1: fatal GPU-process crash when using the in-app Browser tab. The MSIX package becomes unlaunchable until repair. NVIDIA RTX 2080, multiple driver versions.

### 9. Usage Limits Dropped to 1/3 on 20x Max Plan (#82113)
[Issue #82113](https://github.com/anthropics/claude-code/issues/82113)  
4 comments, 1 👍  
Users on the 20x Max plan report that effective usage limits decreased to ~1/3 of previous values without any code changes. Suspected backend change.

### 10. Fable Safeguard False Positives (#82438, #82436)
[#82438](https://github.com/anthropics/claude-code/issues/82438), [#82436](https://github.com/anthropics/claude-code/issues/82436)  
Just filed today (0–1 comment each). The Fable safeguards are rejecting benign inputs like “continue please” and legitimate hospital system development work. Users are forced to switch to Opus 4.

## Key PR Progress (4 items)

Noteworthy: PRs are sparse. Two focus on `setup.sh` fixes for edge cases.

### 1. Enrich Release Titles with Changelog Summary (#48272)
[PR #48272](https://github.com/anthropics/claude-code/pull/48272)  
Closed. Upstream `main` now ships a `feed.xml` using the suggested format. Improves release notes readability.

### 2. MCP Guard Plugin: Security Hardening (#82358)
[PR #82358](https://github.com/anthropics/claude-code/pull/82358)  
Open. Addresses the problem of MCP config dumping bearer tokens into terminal logs. Proposes a plugin to sanitize output.

### 3. Fix GCP Gateway `setup.sh` Silent Exit When `gcloud` Missing (#82335)
[PR #82335](https://github.com/anthropics/claude-code/pull/82335)  
Open. Under `set -euo pipefail`, a missing `gcloud` binary causes the script to exit silently. Fix adds a proper check.

### 4. Fix AWS Gateway `setup.sh` Aborting on macOS Bash 3.2 (#82320)
[PR #82320](https://github.com/anthropics/claude-code/pull/82320)  
Open. Uses bash 4 case-modification (`${DIST_SHA256,,}`) which crashes on macOS default bash 3.2. Replaces with portable alternative.

## Feature Request Trends
The community is asking for:

- **Multi-account / multi-workspace integrations** (#44243, #68083) — Slack, GitHub auto-fix toggle across multiple workspaces.
- **Smarter model selection** (#15721) — automatic switching between fast/cheap and capable models based on task phase (plan vs. execute).
- **Granular control over UI interactions** (#75599) — opt-out of mouse click immediate select in menus; keep keyboard-only workflow.
- **Predictable usage limits** (#82113) — need transparency and stability in credit consumption, especially on paid plans.
- **Better safety guard calibration** (#82436, #82438) — Fable safeguards are too aggressive; developers want exceptions for legitimate work in regulated domains.

## Developer Pain Points
Recurring frustrations from the issue tracker:

- **Windows-specific issues** continue to plague users: `ENAMETOOLONG` (#72725), GPU crashes (#80444), broken Shift+Enter for newline (#77311, #80817), and false-positive PowerShell safety guards (#73882).
- **Data loss / silent failures** are alarming — the text block dropping bug (#74260) and `UserPromptSubmit` hook not rendering (#78266) erode trust.
- **MCP integration fragility**: orphaned grandchild processes not cleaned up (#76306), SSH git URLs rejected for marketplaces (#9740), and credential leakage in logs (#82358).
- **Session stability**: login loops (#72875), resume looping on API/safeguard errors (#82435), and remote-control not auto-connecting (#80457).
- **Inconsistent behavior across platforms**: Browser tool permissions not respecting allowed sites on Desktop (#78315, closed as invalid), model picker not showing 1M context on resume (#80272).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-30

## Today's Highlights

The Codex team shipped **v0.146.0** with session-management improvements (naming, pinning, `/clear`) and a major push into **Agent Plugin ecosystems** (manifests, publishing, Amazon Bedrock/Claude C marketplaces). Meanwhile, the community is flagging **two critical Windows regressions**: a `taskkill.exe`/`conhost.exe` process storm that can degrade DWM, and **context compaction losing task state** which can exhaust weekly usage quotas. On the PR side, infrastructure work dominates: MCP pagination limits, symlink-safe migrations, and a systematic `reqwest` dependency cleanup.

## Releases

- **rust-v0.146.0** — Two notable feature sets landed:
  - **Session UX**: Name new sessions with `/new` or `/clear`, pin important threads, and switch between side conversations without closing them (PRs #34605, #34840, #35011).
  - **Agent Plugins**: Support for Agent Plugin manifests, workspace plugin publishing, and additional plugin marketplaces for **Amazon Bedrock** and **Claude C**.

  Multiple alpha releases also landed (v0.147.0-alpha.1 and .2, v0.146.0-alpha.9.1 and .2), indicating active development on the next minor release.

## Hot Issues

1. **[#21753 – Full Claude Code Hook Parity (29+)**](https://github.com/openai/codex/issues/21753)  
   Umbrella tracker requesting every major lifecycle hook from Claude Code. 29 comments, 22 👍. Community consensus: hooks are the #1 missing automation surface.  
   **Why it matters**: Without pre/post hooks for compaction, resume, tool calls, etc., users can’t build reliable automation pipelines.

2. **[#33776 – Windows: `ChatGPT.exe` spawns hundreds of `taskkill.exe`/`conhost.exe` processes](https://github.com/openai/codex/issues/33776)**  
   287 leaked processes during testing, causing WMI failure storms and DWM degradation. 25 comments, 23 👍.  
   **Why it matters**: This is a severe resource-exhaustion bug that can bring down a Windows desktop entirely.

3. **[#10561 – Plan Mode: Add "Copy Plan" & "Clear Context and Start Coding"](https://github.com/openai/codex/issues/10561)**  
   19 comments, 37 👍 — the highest-voted open issue this week.  
   **Why it matters**: The plan-to-execution handoff remains a friction point; users want to approve plans and then cleanly start fresh code generation without re-prompting.

4. **[#35050 – GPT-5.6 serializes independent calls; explicit batching reduced usage 27–45%](https://github.com/openai/codex/issues/35050)**  
   16 comments, 36 👍. A thorough cost analysis showing the model's tendency to make single tool calls instead of batching.  
   **Why it matters**: Directly impacts API costs for Pro users — a 27–45% savings is significant.

5. **[#35420 – Work/Codex stream disconnects on OneDrive-backed workspaces](https://github.com/openai/codex/issues/35420)**  
   12 comments. The stream repeatedly fails when the Windows workspace is a OneDrive folder and OneDrive is degraded.  
   **Why it matters**: Mission-critical for enterprise users with OneDrive-synced repos.

6. **[#35311 – Windows in-app browser crash loop during Microsoft Store update lookup](https://github.com/openai/codex/issues/35311)**  
   9 comments. A two-stage incident: crash → unlaunchable → startup-crash loop → package remediation.  
   **Why it matters**: Illustrates fragile integration between Codex Desktop and the Windows Store update mechanism.

7. **[#14722 – Sync CLI and app-server sessions](https://github.com/openai/codex/issues/14722)**  
   8 comments, 21 👍. Users want to `codex resume` from a different device and see the session stay up-to-date.  
   **Why it matters**: Cross-device session continuity is a blocker for users who switch between CLI and desktop.

8. **[#17148 – Pre and PostCompact hooks](https://github.com/openai/codex/issues/17148)**  
   8 comments. Hooks before/after compaction to gather transcripts and feed them into external workflows.  
   **Why it matters**: Complements the hooks parity tracker; compaction is the single most data-loss-prone event.

9. **[#35914 – Windows sandbox hangs on Google Drive virtual filesystem](https://github.com/openai/codex/issues/35914)**  
   Newly closed, but the failure mode (`SetNamedSecurityInfoW failed: 87`) is telling.  
   **Why it matters**: Sandbox compatibility with third-party cloud filesystems (Google Drive, OneDrive) remains fragile.

10. **[#34863 – app-server reaches 27 GB footprint / 10.2 GB JSONL with inline PNGs](https://github.com/openai/codex/issues/34863)**  
    3 comments but a stark data point: image-heavy threads balloon compaction records.  
    **Why it matters**: Memory management for long-running, screenshot-heavy sessions is broken — risks OOM kills.

## Key PR Progress

1. **[#36051 – Avoid overwriting symlinked migration targets](https://github.com/openai/codex/pull/36051)**  
   Closed. External-agent migration now respects symlinks, preventing writes outside the repo. *(security)*

2. **[#36049 – Keep tool-call metrics out of Statsig exports](https://github.com/openai/codex/pull/36049)**  
   Closed. Tool-call metrics now treated as runtime-only; still exported via OTLP. *(telemetry hygiene)*

3. **[#36045 – Distinguish unknown MCP authentication status](https://github.com/openai/codex/pull/36045)**  
   Closed. OAuth discovery failures now reported as `unknown`, not `unsupported`. *(MCP correctness)*

4. **[#36039 – Limit MCP catalog pagination](https://github.com/openai/codex/pull/36039)**  
   Closed. Caps catalog discovery to 100 pages and 1,024 items. *(MCP safety — prevents runaway enumeration)*

5. **[#36037 – Deny network access when allow amendment fails](https://github.com/openai/codex/pull/36037)**  
   Closed. Failed policy amendments no longer grant accidental access. *(network security fix)*

6. **[#36036 – Allow naming forked chats from the TUI](https://github.com/openai/codex/pull/36036)**  
   Closed. `/fork` now accepts an optional thread name. *(session UX improvement)*

7. **[#36035 – Exit the stdio app-server when its connection closes](https://github.com/openai/codex/pull/36035)**  
   Closed. Prevents stale app-server processes when remote-control clients disconnect. *(process management)*

8. **[#36007 – Add persisted manual ordering for thread sections](https://github.com/openai/codex/pull/36007)**  
   Closed. Adds `thread/section/move` — users can now manually order threads within sections. *(session organization)*

9. **[#36006 – Reduce response serialization and rollout scan overhead](https://github.com/openai/codex/pull/36006)**  
   Closed. Keeps `ClientResponsePayload` typed through the queue, avoiding intermediate JSON value. *(performance)*

10. **[#36031 – Load cloud-managed servers in MCP CLI commands](https://github.com/openai/codex/pull/36031)**  
    Closed. `codex mcp list/get/login/logout` now resolve enterprise-managed MCP servers. *(enterprise MCP support)*

## Feature Request Trends

- **Hooks parity with Claude Code** (#21753, #17148, #35211) remains the single most-requested direction, especially lifecycle hooks for compaction, resume, and session management.
- **Plan-to-execution workflow** (#10561, #35593) — users want clean handoffs from planning to coding, with explicit "Clear Context and Start Coding" buttons and copyable plans.
- **Session management and cross-device sync** (#14722, #33589 — no delete option, #35121 — "Open in New Window" makes chat disappear) — the TUI and desktop app both need better session listing, naming, deletion, and remote sync.
- **MCP ecosystem** — multiple PRs and issues (#34684 — macOS OAuth, #36031 — cloud-managed servers) show growing demand for robust MCP support, especially for enterprise OAuth flows.

## Developer Pain Points

- **Windows sandbox/infrastructure regressions** are the dominant pain point: elevated vs unelevated sandbox failures (#32855, #35965), WSL UNC path crashes (#35380), Google Drive file-system hangs (#35914), and the `taskkill.exe` storm (#33776) all point to Windows-specific process isolation and filesystem handling being the weakest link.
- **Context compaction and memory bloat** (#34863 — 27 GB RAM, #35935 — lost task state, #25290 — invalid encrypted content) — compaction remains a persistent source of data loss and resource exhaustion, especially for long-running or image-heavy sessions.
- **Cost and token waste** (#35050 — serialized calls, #35925 — 94% uncached cost from mid-loop misses) — users are explicitly measuring and reporting the inefficiency of GPT-5.6’s tool-call batching behavior.
- **Inconsistent behavior across platforms** (#34684 — MCP OAuth works on Linux but not macOS, #29422 — Computer Use missing from Intel Mac x64 package) creates frustration for teams using Codex across multiple OS environments.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-07-30

## Today's Highlights
A nightly release (v0.55.0-nightly) brings new Firestore dual-locking infrastructure for the PR generation pipeline, while the community continues to report long-standing agent reliability issues—particularly subagent misreporting of success after hitting turn limits and generalist agent hangs. On the PR side, a critical fix for SSRF in `web-fetch.ts` and a fix for the `thoughtSignature` stripping that caused 400 errors are moving forward.

## Releases
A single **nightly release** was published in the last 24 hours:  
- **[v0.55.0-nightly.20260729.g3499c84f7](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260729.g3499c84f7)**  
  - Contains only version bump and a new feature: `feat(pr-generator-db): implement Firestore concurrency dual-locking and test ingestion utilities` by @joneba-google. This adds infrastructure for safe concurrent access in the SSR code generation pipeline.

## Hot Issues (10 selected)
1. **Subagent recovery after MAX_TURNS reports as GOAL success** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)  
   *Priority p1, 12 comments*. The `codebase_investigator` subagent falsely reports termination reason "GOAL" even after hitting the maximum turn limit, masking real interruptions. Community upvotes (👍2) indicate concern over misleading status reporting.

2. **Generalist agent hangs indefinitely** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)  
   *Priority p1, 8 comments, 8 👍*. Users report the CLI freezes when the generalist agent is invoked for simple tasks (e.g., folder creation). Instructing the model not to use subagents works around the hang.

3. **Component-level evaluations epic** [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)  
   *Priority p1, 7 comments*. Tracks expansion of behavioral eval tests (76 already) across 6 Gemini models. Essential for preventing regressions in agent behavior.

4. **AST-aware file reads, search, and mapping** [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)  
   *Priority p2, 7 comments*. Epic investigating whether parsing code into AST allows more precise method reads and reduces token waste. Could cut turn count significantly.

5. **Gemini does not use skills and sub-agents enough** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)  
   *Priority p2, 6 comments*. Custom skills (e.g., Gradle, Git) are ignored by the agent unless explicitly instructed. Community expects autonomous invocation of relevant skills.

6. **Auto Memory retries low-signal sessions indefinitely** [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)  
   *Priority p2, 5 comments*. The memory extraction agent re-surfaces sessions it previously deemed low-signal, causing infinite loops. Needs a way to mark sessions as permanently skipped.

7. **Shell command execution gets stuck with "Waiting input"** [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)  
   *Priority p1, 4 comments, 3 👍*. After a simple shell command finishes, the CLI still shows "Awaiting user input", hanging forever. Repro requires very basic commands.

8. **Browser subagent fails in Wayland** [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)  
   *Priority p1, 4 comments, 1 👍*. Browser agent crashes on Wayland systems; likely due to missing display environment handling.

9. **Memory system bugs and quality improvements** [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)  
   *Priority p2, 2 comments (tracking issue)*. Umbrella for several memory-related bugs: invalid patches, redaction after content is already sent to model, and excessive logging.

10. **Agent should stop/discourage destructive behavior** [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)  
    *Priority p2, 3 comments, 1 👍*. Model occasionally uses `git reset --force` or other destructive commands when safer alternatives exist. Community wants built-in guardrails.

## Key PR Progress (10 selected)
1. **Propagate InvalidStreamError details to UI** [#28566](https://github.com/google-gemini/gemini-cli/pull/28566)  
   *priority/p1, area/core*. Adds type and message from `InvalidStreamError` to CLI hooks, enabling helpful suggestions like `/compress` when responses fail.

2. **Add gemini-3.5-flash to model selector** [#28485](https://github.com/google-gemini/gemini-cli/pull/28485)  
   *priority/p2, area/core*. Fixes [#28483](https://github.com/google-gemini/gemini-cli/issues/28483): users could not select newer flash models due to a hardcoded default.

3. **Fix SSRF vulnerability in web-fetch.ts** [#28557](https://github.com/google-gemini/gemini-cli/pull/28557)  
   *priority/p1, area/security*. Replaces synchronous `isPrivateIp` with async DNS resolution to block hostnames that resolve to internal IPs (e.g., 169.254.169.254).

4. **Preserve thoughtSignature in functionCall parts** [#28586](https://github.com/google-gemini/gemini-cli/pull/28586)  
   *priority/p2, area/agent*. Fixes a regression in v0.53.0 where `thoughtSignature` was stripped during parallel tool calls, causing 400 Bad Request errors.

5. **Fix PTY memory leak by synchronously deleting entries** [#27154](https://github.com/google-gemini/gemini-cli/pull/27154)  
   *priority/p2, area/core*. Prevents file descriptor leak by deleting PTY entries synchronously instead of inside a Promise `.then()` that may never resolve.

6. **Handle RangeError when conversation exceeds JSON serializable size** [#25364](https://github.com/google-gemini/gemini-cli/pull/25364)  
   *area/agent, size/m*. Catches `JSON.stringify` RangeError on very large conversations, preventing crash.

7. **Fix stale state in /rewind** [#26286](https://github.com/google-gemini/gemini-cli/pull/26286)  
   *priority/p2, area/core*. Addresses [#25646](https://github.com/google-gemini/gemini-cli/issues/25646) where rewinding left inconsistent agent state.

8. **Allow subagents without toolConfig to register MCP tools** [#20170](https://github.com/google-gemini/gemini-cli/pull/20170)  
   *priority/p1, size/s*. Fixes a guard that incorrectly rejected MCP tool names lacking the `__` separator, preventing subagents from using MCP tools.

9. **Nest dependency chains in task graph visualization** [#22846](https://github.com/google-gemini/gemini-cli/pull/22846)  
   *priority/p3, area/core*. Improves tracker visualization by showing dependency chains as a tree instead of flat annotations.

10. **Remove unsafe type assertions in commands (Phase 5)** [#19754](https://github.com/google-gemini/gemini-cli/pull/19754)  
    *priority/p2, area/core*. Replaces brittle `as Type` casts with runtime type guards across 20+ command files, improving type safety.

## Feature Request Trends
- **AST-aware tooling**: Several epics ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) explore using AST parsing for more precise code reading and navigation, aiming to reduce token consumption and turn count.
- **Memory system maturity**: Issues [#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) collectively request deterministic redaction, better handling of invalid patches, and prevention of infinite retries.
- **Agent self-awareness & control**: Users want the agent to know its own capabilities (flags, hotkeys) and use skills autonomously ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)), while also providing guardrails against destructive commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
- **Evaluation infrastructure**: The component-level evaluation epic ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) and requests for subagent trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) indicate a growing need for deeper observability and automated testing of agent behavior.

## Developer Pain Points
- **Misleading success reporting**: Subagents often report `status: "success"` even when hitting limits or crashing, making debugging nearly impossible ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).
- **Hangs and freezing**: Generalist agent ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) and shell command execution ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) frequently hang indefinitely, requiring manual kills.
- **Configuration ignored**: Subagent config overrides (e.g., `maxTurns`) are silently ignored ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and agent symlinks are not recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).
- **Memory & resource leaks**: PTY file descriptors leak ([#27154](https://github.com/google-gemini/gemini-cli/pull/27154)), terminal corruption after external editors ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), and memory system retries create wasteful processing.
- **Tool limit errors**: 400 errors when more than 128 tools are registered ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) force users to reduce agent scope.
- **Unwanted destructive actions**: The model uses `git reset --force` and other risky commands without user confirmation ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-30

## Today's Highlights
A batch of incremental releases (v1.0.76 through v1.0.76-5) landed yesterday, adding plugin enable/disable controls, grok-4.5 support, and a new Sessions sidebar. Meanwhile, the zombie process bug (#4163) was closed but users on AlmaLinux report it persists (#4290), and a new critical log‑level crash (#4285) is affecting many. The most‑upvoted feature request (36 👍) asks for built‑in git worktree lifecycle management.

## Releases
Four new patch versions were published on 2026-07-29 (all under v1.0.76):

| Version | Key Changes |
|---------|-------------|
| **v1.0.76** | Full release. Added enable/disable controls in `/plugins` for plugins, instructions, agents, LSP servers, and hooks. Added support for the grok-4.5 model. Sandbox denied paths now enforced for relative and symlinked entries on macOS/Linux. Unsent prompt text now persists. |
| **v1.0.76-5** | Added same plugin controls and grok-4.5 support. |
| **v1.0.76-4** | Fixed sandbox denied path enforcement for relative/symlinked entries. |
| **v1.0.76-3** | Improved auto‑update notification (suggests `/restart`, drops warning color). `/diff` scrolls and syntax‑highlights large multi‑file diffs faster. Split‑view sidebar hover‑to‑focus now off by default (opt in with `sidebar.hoverFocus`). |
| **v1.0.76-2** | Added a directable queue manager (staff) to reorder/edit/remove queued messages. New **Sessions sidebar** for managing multiple concurrent sessions (opt‑in via `/expe`). |

## Hot Issues (10 noteworthy)

1. **#4163 – Zombie child processes on Linux** (CLOSED)  
   `radtka2-mdt` reported that finished subprocesses accumulate as zombies under the copilot PID (~2/min). Closed in v1.0.74? but…  
   [Link](https://github.com/github/copilot-cli/issues/4163) | 👍 3 | 💬 6

2. **#4290 – Zombie bug NOT fixed on AlmaLinux 8.10** (OPEN)  
   `azat-badretdin` says #4163 persists on v1.0.75, asking for a real fix.  
   [Link](https://github.com/github/copilot-cli/issues/4290) | 👍 0 | 💬 1

3. **#1613 – Feature: Built‑in git worktree lifecycle** (OPEN)  
   High‑demand request (36 👍) to let Copilot create/destroy worktrees during task solving.  
   [Link](https://github.com/github/copilot-cli/issues/1613) | 👍 36 | 💬 3

4. **#4202 – `view` tool reports “Path does not exist” for existing files** (OPEN)  
   Regression in v1.0.73 that breaks file viewing. Works in v1.0.71.  
   [Link](https://github.com/github/copilot-cli/issues/4202) | 👍 0 | 💬 3

5. **#1168 – Excessive authorization prompts (“authorization fatigue”)** (OPEN)  
   A single high‑level request triggers a dozen auth prompts.  
   [Link](https://github.com/github/copilot-cli/issues/1168) | 👍 2 | 💬 3

6. **#4159 – Blank screen after prompt in Windows Terminal** (OPEN)  
   Interactive mode goes blank; `-p` mode works fine.  
   [Link](https://github.com/github/copilot-cli/issues/4159) | 👍 3 | 💬 3

7. **#2770 – CLI stuck on “Cancelling” after rate‑limiting** (OPEN)  
   Hitting Escape leads to a permanent cancelling state with unresponsive Enter.  
   [Link](https://github.com/github/copilot-cli/issues/2770) | 👍 9 | 💬 1

8. **#4285 – Silent exit 1 on non‑default log levels** (OPEN)  
   Starting with any log level other than "all" or "default" causes immediate crash with no output. Affects Windows users.  
   [Link](https://github.com/github/copilot-cli/issues/4285) | 👍 2 | 💬 0

9. **#4300 – Support `bearerToken` for BYO‑K** (OPEN)  
   Enterprise request for token‑based auth (key‑based disabled in some orgs).  
   [Link](https://github.com/github/copilot-cli/issues/4300) | 👍 0 | 💬 0

10. **#4299 – Increasing typing latency over long sessions** (OPEN)  
    Background agents degrade input responsiveness over time.  
    [Link](https://github.com/github/copilot-cli/issues/4299) | 👍 0 | 💬 0

## Key PR Progress (1 PR in last 24h)

- **#4100 – “安全性” (Safety)** (OPEN, author: `huangyoufeng76-debug`)  
  Created July 12, updated July 29. No description provided in English; appears to address security. No comments yet.  
  [Link](https://github.com/github/copilot-cli/pull/4100)

## Feature Request Trends
The most‑requested feature directions from recent issues include:

1. **Session management** – Sorting resume lists by recency (#4140), git worktree lifecycle (#1613), and handling multiple projects in one session (#4289).
2. **Sandbox and plugin configuration** – Selective tool enable/disable in sandbox (#4298), `.agents` discovery for arbitrary folders (#4204), server‑managed plugin enablement persistence (#4283).
3. **Enterprise authentication** – Bearer token support for BYO‑K (#4300) to comply with key‑less corporate policies.
4. **AI credit awareness** – Warning when approaching subscription limits (#4295), parity with VS Studio IDE.
5. **Terminal compatibility** – Proper paste in iTerm2 (#4296), tmux color support (#4292).

## Developer Pain Points
Recurring frustrations reported across multiple issues:

- **Zombie processes & hangs** – Child processes not reaped (#4163, #4290), sessions stuck in “Cancelling” (#2770), blank interactive UI (#4159), deadlock on large PTY buffers (#2182).
- **Log level crashes** – CLI exits silently or crashes when using standard log levels (#4285, #4297).
- **Model inconsistencies** – Sub‑agents ignore model inheritance (#4287), session resume fails on custom model prefixes (#4282), streaming buffering of large tool arguments (#4286).
- **Auth fatigue** – Excessive authorization prompts during a single command (#1168).
- **Typing latency** – Degraded input responsiveness in long‑running sessions (#4299).

---

*Digest generated from github.com/github/copilot-cli data as of 2026-07-30.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区摘要 - 2026年7月30日

---

## 1. Today's Highlights

The community is buzzing around a critical enterprise gateway feature request (Issue #2568) that would allow kimi-cli to connect to custom API Base URLs for the newly open-sourced Kimi K3 (2.8T parameter) model. Meanwhile, a key fix (PR #2569) corrects a subtle but impactful bug where chained file replacements were miscounted, and a usability improvement (PR #2567) brings absolute reset timestamps to the `/usage` panel. No new releases were published in the past 24 hours.

---

## 2. Releases

**No new releases in the last 24 hours.**  
Visit the [kimi-cli releases page](https://github.com/MoonshotAI/kimi-cli/releases) for the latest versions.

---

## 3. Hot Issues

### #2568 [🔴 OPEN] Feature Request: Support custom API Base URL to access enterprise-level K3 gateway
- **Author:** kwu18-png | **Created:** 2026-07-29 | **Updated:** 2026-07-29 | **Comments:** 0 | **👍:** 0
- **Link:** [Issue #2568](https://github.com/MoonshotAI/kimi-cli/issues/2568)
- **Why it matters:** This is the most significant community ask today. With Kimi K3 (2.8T parameters) now open-source, enterprises want to deploy their own gateways to avoid rate limits, reduce cross-region latency, enable automatic failover, and centralize API key management. The ability to set a custom Base URL is the foundational enabler for all those enterprise scenarios.
- **Community reaction:** Minimal so far (0 comments, 0 upvotes), but the request is only ~24 hours old. Expect rapid engagement as more teams explore self-hosted K3 deployments.

---

## 4. Key PR Progress

### #2569 [🔴 OPEN] fix(tools): count chained StrReplaceFile edits against intermediate content
- **Author:** aalhadxx | **Created:** 2026-07-29 | **Updated:** 2026-07-29 | **Comments:** 0 | **👍:** 0
- **Link:** [PR #2569](https://github.com/MoonshotAI/kimi-cli/pull/2569)
- **What it does:** Fixes a subtle counting bug in the `StrReplaceFile` tool. Previously, if edit B depended on text inserted by edit A, the tool incorrectly counted edit B as having zero replacements. Now each edit is measured against the ongoing *intermediate* file content, ensuring accurate reporting even in chained replacement scenarios.

### #2176 [🔴 OPEN] fix(hooks): extract text from ContentPart for UserPromptSubmit hook
- **Author:** tears-mysthrala | **Created:** 2026-05-07 | **Updated:** 2026-07-29 | **Comments:** 0 | **👍:** 0
- **Link:** [PR #2176](https://github.com/MoonshotAI/kimi-cli/pull/2176)
- **What it does:** Resolves Issue #2148 where the `UserPromptSubmit` hook received an empty `prompt` value when `user_input` was a `list[ContentPart]` (the default for all messages). Previously only `str` inputs were handled, breaking regex matchers for most real-world messages.

### #1790 [🟢 CLOSED] feat(windows): prefer pwsh over powershell.exe for Shell tool
- **Author:** scwf | **Created:** 2026-04-08 | **Updated:** 2026-07-29 | **Comments:** 0 | **👍:** 0
- **Link:** [PR #1790](https://github.com/MoonshotAI/kimi-cli/pull/1790)
- **What it does:** Improves Windows shell detection. The `Environment.detect()` method now prefers `pwsh` (PowerShell 7+) over the legacy `powershell.exe`. It checks PATH first, then the default install location under `Program Files\PowerShell\7`, and falls back to System32 `powershell.exe`. Shell name remains "Windows PowerShell" for compatibility.

### #2567 [🟢 CLOSED] feat(usage): show absolute reset datetime in /usage panel
- **Author:** versun | **Created:** 2026-07-28 | **Updated:** 2026-07-29 | **Comments:** 0 | **👍:** 0
- **Link:** [PR #2567](https://github.com/MoonshotAI/kimi-cli/pull/2567)
- **What it does:** Enhances the `/usage` panel by displaying the absolute local reset timestamp alongside the existing relative duration. Previously only fuzzy text like `resets in 4d` was shown; now users see an exact datetime with the relative part as a superscript.

---

## 5. Feature Request Trends

From the current open issues and recent discussions, the most-requested feature directions are:

1. **Enterprise API Gateway Integration** ⬆️ (new, high momentum)  
   Custom Base URL, self-hosted proxies, failover, and centralized key management for Kimi K3 deployments.

2. **Windows Shell & Environment Improvements** (steady)  
   Continued desire for better PowerShell support, consistent environment detection, and cross-platform parity.

3. **Clearer Usage & Quota Information** (emerging)  
   Better display of API limits, reset times, and cost tracking — PR #2567 partially addresses this.

---

## 6. Developer Pain Points

Based on high-frequency issues and fix-related PRs:

1. **Edit Accuracy in Chained File Operations** – PR #2569 highlights a real friction: when using multiple `StrReplaceFile` edits in sequence, developers could not trust the replacement count. This erodes confidence in automated refactoring workflows.

2. **Hook System Inconsistency** – PR #2176 (open since May) shows developers struggling with hook callbacks that silently return empty values for common input types. The `UserPromptSubmit` hook failing for `list[ContentPart]` is a major blocker for anyone building extensions or automation on top of kimi-cli.

3. **Limited Enterprise Controls** – Issue #2568 crystallizes a growing pain point: as Kimi K3 goes open-source, teams want to run it in-house but lack the CLI-level configuration to connect to custom gateways. Without this, they are stuck with official API constraints, which is a dealbreaker for production use.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-30

## Today's Highlights

The community is focused on two long-standing pain points: **persistent session features** (nearly 300 combined 👍 on `/goal` and `/btw`) and **unbounded SQLite growth** reaching 13 GB+. On the PR side, performance improvements for large sessions and a new `/projects` picker are moving quickly, while several critical bugs — including a nested-subagent hang and piped output truncation — have received fixes.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#27167 – Add native session goals with /goal](https://github.com/anomalyco/opencode/issues/27167)** (66 comments, 120 👍)  
   The top‑voted feature request this month. Users want a first‑class `/goal` command to set persistent session objectives, akin to a lifecycle hook. The discussion has lasted since May and shows no sign of slowing.

2. **[#16992 – Add /btw command](https://github.com/anomalyco/opencode/issues/16992)** (20 comments, 168 👍)  
   Inspired by Anthropic’s `/btw` in Claude Code, this would let developers inject a side‑note into the agent’s context without interrupting the current task. High demand despite low comment count.

3. **[#19130 – Windows ARM64 native: OpenTUI fails with bun:ffi dlopen TinyCC error](https://github.com/anomalyco/opencode/issues/19130)** (15 comments, 10 👍)  
   A blocking bug for ARM64 Windows users. The native binary works for CLI commands but the TUI crashes with a TinyCC binding error. No workaround mentioned.

4. **[#30680 – OpenCode enters auto‑compaction loop and stops generating](https://github.com/anomalyco/opencode/issues/30680)** (15 comments, 0 👍)  
   Critical: the agent repeatedly auto‑compacts even in an empty folder, consuming tokens and eventually refusing to respond. Has been closed but similar reports persist (see #38801).

5. **[#38801 – message="exiting loop"](https://github.com/anomalyco/opencode/issues/38801)** (14 comments, 0 👍)  
   A long‑running frustration where the TUI exits early with a cryptic message. Poster notes it took months to even get the UI to render past `step=80`. Many ++1 comments.

6. **[#38190 – Request blocked by upstream provider](https://github.com/anomalyco/opencode/issues/38190)** (14 comments, 11 👍)  
   A generic error that halts chat after the first few messages. No clear cause; appears with multiple providers. Community suspects rate limiting or header misconfiguration.

7. **[#33356 – Unbounded growth of the `event` table: opencode.db reaches 13GB+](https://github.com/anomalyco/opencode/issues/33356)** (13 comments, 2 👍)  
   A performance/disk space disaster for long‑running instances. The event‑sourcing table is never pruned, leading to multi‑gigabyte databases. Users report filling 22 GB volumes.

8. **[#14972 – Agent stops after tool execution with OpenAI‑compatible providers](https://github.com/anomalyco/opencode/issues/14972)** (12 comments, 4 👍)  
   Root cause identified: providers like Gemini and LiteLLM return `finish_reason: "stop"` after tool calls, breaking the agent loop. A fix was closed but the issue remains open due to regressions.

9. **[#13715 – Nested subagent permission asks silently hang](https://github.com/anomalyco/opencode/issues/13715)** (9 comments, 22 👍)  
   A subtle TUI bug: when a subagent spawns another subagent that requires permission, the prompt is never rendered and the session hangs. The `children()` memo in the TUI only collects direct children.

10. **[#1168 – Make links clickable (Ctrl+Left Click)](https://github.com/anomalyco/opencode/issues/1168)** (9 comments, 115 👍)  
    A classic quality‑of‑life feature request that has been open for over a year. Despite its age and popularity, it still hasn’t been addressed.

## Key PR Progress

1. **[#39589 – Prefetch open session tabs after connect](https://github.com/anomalyco/opencode/pull/39589)**  
   Eliminates the blank‑transcript flash when switching to a session tab by warming data in the background. Open, by kitlangton.

2. **[#33719 – Fix MCP: verify explicit OAuth authentication](https://github.com/anomalyco/opencode/pull/33719)**  
   Prevents anonymous MCP connections from being reported as authenticated. Requires a proper OAuth challenge before creds are stored. Open.

3. **[#39568 – Make session tab switching fast for long transcripts](https://github.com/anomalyco/opencode/pull/39568)**  
   Switches tabs in constant time by mounting only a fixed‑size tail of the transcript. Front‑end only. Open, by kitlangton.

4. **[#38798 – Order messages by time so the run loop can terminate](https://github.com/anomalyco/opencode/pull/38798)**  
   Fixes a bug where `latest()` compared IDs as plain strings, causing the run loop to never exit. Closes #38791. Open.

5. **[#39567 – Parse shell permission commands with tree‑sitter](https://github.com/anomalyco/opencode/pull/39567)**  
   Splits compound shell input into separate permission resources and derives command‑prefix approvals. Improves both security and UX. Open.

6. **[#39423 – Add Hebrew language support with RTL handling](https://github.com/anomalyco/opencode/pull/39423)**  
   Full Hebrew (he) locale across all packages, with proper right‑to‑left rendering. Open.

7. **[#39566 – Project picker with footer crossfade](https://github.com/anomalyco/opencode/pull/39566)**  
   New `/projects` command (alias `/project`) that switches the entire TUI to a different directory, with a smooth footer animation. Open, by kitlangton.

8. **[#39577 – Await stdout drain so piped output is not truncated](https://github.com/anomalyco/opencode/pull/39577)**  
   Fixes `opencode export | jq` silently losing data past 64 KiB (closes #29330). Awaiting merge. Open.

9. **[#34514 – Add auth command to list authenticated providers](https://github.com/anomalyco/opencode/pull/34514)**  
   New top‑level `opencode auth` command that shows which providers have active credentials. Closed (merged).

10. **[#34415 – Prepare diffs off the render thread (Web Worker)](https://github.com/anomalyco/opencode/pull/34415)**  
    Moves expensive diff computation to a Web Worker, preventing UI freezes on large project diffs (e.g., `llama.cpp`). Closed (merged).

## Feature Request Trends

- **Native session lifecycles** – Requests for `/goal`, `/btw`, and persistent memory (e.g., #27167, #16992, #32658) all point to a desire for the agent to remember longer‑term context without manual prompting.
- **RTL & i18n expansion** – Issues #34697 and PR #39423 show steady interest in supporting Farsi, Urdu, and Hebrew, with full RTL handling already underway.
- **Smart permission management** – Proposals for auto‑approval classifiers (#37564) and configurable mid‑run prompt delivery (#32157) reflect a need to reduce manual intervention without sacrificing safety.
- **Terminal UX polish** – Requests for clickable links (#1168), scrollbars (#10570), and better scroll‑to‑bottom behavior (#37272) remain high‑priority quality‑of‑life items.

## Developer Pain Points

- **Provider‑specific breakage** – Issues like #38190 (upstream blocked), #37231 (Console Go), and #37815 (Kimi K3 on Console Go) indicate that provider compatibility is fragile and often leaves errors unhandled.
- **Compaction loops & DB bloat** – Multiple reports (#30680, #38801, #33356, #38851) show that auto‑compaction can enter infinite loops, consume tokens, and cause the SQLite store to balloon to tens of gigabytes with no built‑in retention policy.
- **TUI hangs and empty states** – Nested subagent hangs (#13715), session tab blank flashes (#39589), and exit‑loop messages (#38801) erode trust in the terminal UI for everyday use.
- **Silent data loss** – Truncated output when piping (`opencode export | jq`, #29330) and missing error messages for socket closures (#23123) make debugging harder and can corrupt automated pipelines.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-30

## Today’s Highlights
Pi v0.83.0 landed with credential export commands and headless OpenRouter sign‑in, streamlining authentication workflows. The community focused on fixing core‑tool bugs (byte‑count miscalculation, surrogate pairs), improving terminal compatibility (Wayland clipboard, tmux sixel images), and preserving provider‑specific stop reasons for better error diagnostics. A new eval harness and SQLite search index are also in progress.

## Releases
- **v0.83.0** — Two new features:
  - **Credential export for external clients** (`pi auth print-api-key`, `pi auth print-bearer-token`) exports configured credentials with automatic OAuth refresh and minimum‑validity enforcement.
  - **Headless OpenRouter sign‑in** — complete the `/login` over SSH by pasting the redirect URL.

---

## Hot Issues (10 selected from top‑30 by comment activity)

1. **[#6951 – qwen3.8-max-preview reasoning effort mismatch](https://github.com/earendil-works/pi/issues/6951)** (closed, 8👍)  
   Qwen’s API expects `low, medium, xhigh` but Pi uses `minimal, low, medium, high`, causing incorrect behaviour. *Community*: acknowledged, fixed by adding the proper `thinkingLevelMap`.

2. **[#1871 – Parallel startup lock contention](https://github.com/earendil-works/pi/issues/1871)** (closed, 7 comments)  
   Multiple `pi` processes starting concurrently produce a misleading “No API key found” error. *Impact*: common for `pi-subagents` users; the error message is confusing.

3. **[#3432 – Customizable line length/bytes for read tool](https://github.com/earendil-works/pi/issues/3432)** (closed, 6 comments, 1👍)  
   Users want to override the default line count and bytes for the built‑in `read` tool, and allow the `limit` param to exceed the configured max. *Why matters*: flexibility with large files.

4. **[#7199 – Kimi K3 on Fireworks](https://github.com/earendil-works/pi/issues/7199)** (open, `inprogress`, 5 comments)  
   Kimi K3 was added to models.dev but not selectable in Pi’s Fireworks provider; requires generator updates. *Community*: actively working on a fix.

5. **[#7035 – Crash with large grep operations](https://github.com/earendil-works/pi/issues/7035)** (closed, 4 comments)  
   Intermittent crashes on large grep results traced to `suckless st terminal` rendering errors. *Resolution*: user‑reported as solved outside Pi.

6. **[#7153 – /scoped-models stalls ~5 minutes](https://github.com/earendil-works/pi/issues/7153)** (open, 4 comments, 1👍)  
   The command synchronously awaits a model‑catalog refresh before showing any UI, leaving a blank screen. *Impact*: severe UX regression for users with slow catalog sync.

7. **[#7053 – Parallel tool batches lose completed results](https://github.com/earendil-works/pi/issues/7053)** (open, 2 comments)  
   When one tool stalls, `Promise.all` discards already‑finished tool results; output says “No result provided”. *Why critical*: prevents recovery in multi‑tool calls.

8. **[#7253 – /compact triggers twice near 90% context window](https://github.com/earendil-works/pi/issues/7253)** (open, 3 comments)  
   Manual `/compact` and auto‑compact race, causing an infinite compaction loop. *Community reaction*: quickly reported and reproducible.

9. **[#7130 – Backspace deletes 2 chars in Kitty terminal](https://github.com/earendil-works/pi/issues/7130)** (open, 3 comments)  
   Kitty protocol release events are not filtered, causing double deletion. *Affects*: users of the Kitty emulator.

10. **[#5329 – Expose when Pi waits on user input](https://github.com/earendil-works/pi/issues/5329)** (open, 3 comments, 5👍)  
    Host integrations (e.g., cmux) need a way to distinguish “actively running” from “blocked on user prompt”. *Why important*: enables better integration UX.

---

## Key PR Progress (10 important contributions)

1. **[#7293 – Queue extension commands after agent runs](https://github.com/earendil-works/pi/pull/7293)** (closed)  
   Adds `pi.queueCommand(name, args?)` to schedule registered extension commands only after the streaming response settles, improving control‑plane order.

2. **[#7288 – Preserve function arguments with empty custom payloads](https://github.com/earendil-works/pi/pull/7288)** (closed)  
   Fixes #7160 where OpenAI‑compatible providers with empty `custom: {}` discard valid function arguments.

3. **[#7122 – Fix byte count, false warning, surrogate pairs in tools](https://github.com/earendil-works/pi/pull/7122)** (closed)  
   Core‑tool bug fix: write.ts now counts UTF‑8 bytes, find.ts suppresses false limit warnings, truncateLine handles surrogate splits.

4. **[#7272 – Preserve raw stop reason across providers](https://github.com/earendil-works/pi/pull/7272)** (closed)  
   Adds `AssistantMessage.rawStopReason` and improves Vertex error messages; fixes #7255.

5. **[#7266 – Show system prompt files in startup context](https://github.com/earendil-works/pi/pull/7266)** (closed)  
   Displays `SYSTEM.md` and `APPEND_SYSTEM.md` entries in the interactive [Context] section; fixes #7096.

6. **[#7245 – Inline images under tmux via sixel](https://github.com/earendil-works/pi/pull/7245)** (closed)  
   Enables image rendering in tmux by adding a sixel backend, removing the blanket `TMUX` disable.

7. **[#7221 – Stop loading AGENTS.md twice in nested git worktrees](https://github.com/earendil-works/pi/pull/7221)** (closed)  
   Fixes duplicate project‑file loading when running from a worktree nested under its main repository.

8. **[#7163 – SQLite search index for sessions](https://github.com/earendil-works/pi/pull/7163)** (open)  
   Adds `SessionRepo.search()` with an FTS5 virtual table for SQLite; improvements for JSONL/memory backends still to follow.

9. **[#7261 – Clipboard read via wl‑paste on Wayland / xclip on X11](https://github.com/earendil-works/pi/pull/7261)** (closed)  
   Fixes Ctrl+V paste on Wayland by using `wl-paste` as fallback; closes #7248.

10. **[#7258 – Enable streaming usage for llama.cpp provider](https://github.com/earendil-works/pi/pull/7258)** (closed)  
    Allows token usage statistics in streaming responses from local llama.cpp servers, fixing zero‑token reports.

---

## Feature Request Trends
Based on recent issues and PRs, the most‑requested feature directions are:

- **Customizability of tool defaults** – adjustable line/byte limits for `read`, configurable truncation limits, and control over collapsed/expanded tool output.
- **Rich content rendering** – LaTeX maths (`$$…$$`), audio content in tool results, and better inline image support (sixel, tmux).
- **Integration‑friendly APIs** – exposing Pi’s waiting state for host integrations, session flush hooks, and customizable extension command scheduling.
- **Search & session management** – SQLite‑backed FTS search for sessions, faster `/scoped-models` loading, and reactive `--resume` for ongoing sessions.

---

## Developer Pain Points
Recurring frustrations and high‑frequency requests:

- **Terminal compatibility issues** – Kitty’s double‑backspace, X11 clipboard emptiness on Wayland, missing tmux image support, and broken insert‑newline in Zed’s built‑in terminal.
- **Configuration persistence** – `autocompleteMaxVisible` resets to default after restart, local‑path packages display generic names instead of package labels.
- **Parallel execution hazards** – lock contention during concurrent `pi` startups, lost tool results when one sibling stalls in parallel batches.
- **Provider‑specific quirks** – Qwen reasoning effort mismatch, Vertex collapse of Gemini finish reasons, missing `strict: false` in custom Responses providers.
- **Crash resilience** – TUI crashes on undefined tool renderer children, O(n²) stdout under `--mode json`, infinite `/compact` loops near context‑window limits.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-30

## Today's Highlights
A nightly release (v0.21.1) landed with CI and web-shell fixes, but the day’s activity is dominated by a surge of bug reports around terminal interactivity, Anthropic provider compatibility, and CI flakiness. The community also pushed forward on two major feature tracks: GitHub channel automation and role-based model routing.

---

## Releases
**v0.21.1-nightly.20260730.1643a6c9a**  
- **fix(ci):** Added default bash shell to container jobs in `qwen-triage` ([#7838](https://github.com/QwenLM/qwen-code/pull/7838))  
- **fix(web-shell):** Partial fix for web-shell pre-block rendering (commit truncated in notes)

---

## Hot Issues (Top 10)
1. **[#8039](https://github.com/QwenLM/qwen-code/issues/8039) — Anthropic 4.6+ assistant-prefill 400 + thinking silently defaults to 'omitted'**  
   Two verified bugs affecting all Claude Opus/Sonnet 4.6+ and 5.x models: prefill 400s with no mitigation, and `thinking.display` silently falling back to `omitted`. 6 comments, community awaiting fix.

2. **[#8012](https://github.com/QwenLM/qwen-code/issues/8012) — GitHub channel: close delivery, batching, and review-event gaps**  
   A roadmap issue for background automation — next step after notification-reason dispatch. 5 comments, active discussion.

3. **[#7964](https://github.com/QwenLM/qwen-code/issues/7964) — Window 终端中升级到0.21.1后内容无法滚动 (Windows terminal scroll broken)**  
   User reports content cannot be scrolled in Windows terminal after upgrade. 4 comments, marked `welcome-pr`.

4. **[#7832](https://github.com/QwenLM/qwen-code/issues/7832) — YOLO mode: mid-stream socket close not retried**  
   Large code generation in headless mode fails due to DashScope gateway closing TCP connection after ~3-5 minutes. 3 comments, critical for power users.

5. **[#7960](https://github.com/QwenLM/qwen-code/issues/7960) — Compression side-query maxOutputTokens exceeds context window on small deployments**  
   Fixed 400 leading to `COMPRESSION_FAILED_EMPTY_SUMMARY` when running against self-hosted vLLM endpoints. 3 comments.

6. **[#7961](https://github.com/QwenLM/qwen-code/issues/7961) — CJK-heavy content under-counted in main-turn output-token clamp**  
   CJK characters undercounted by ~chars/4, causing overflow on small-window deployments. 3 comments, affects Chinese users.

7. **[#8003](https://github.com/QwenLM/qwen-code/issues/8003) — LLM outputs XML-style tool calls instead of structured function calls**  
   Long sessions (>200 turns) trigger `qwen3.8-max-preview` to emit raw XML tool tags, bypassing tool execution. 3 comments.

8. **[#8036](https://github.com/QwenLM/qwen-code/issues/8036) — v0.21.1无法通过鼠标滚轮翻阅对话内容 (mouse wheel scroll broken)**  
   Chinese user reports scroll wheel and selection broken in v0.21.1; only PgUp/PgDn work. 3 comments, affects interactive mode.

9. **[#8052](https://github.com/QwenLM/qwen-code/issues/8052) — Virtualized history default broken on Windows in v0.21.1**  
   Repeated duplicate entries when navigating history in Windows 10. 3 comments.

10. **[#7924](https://github.com/QwenLM/qwen-code/issues/7924) — Fork background agents resume with stale prompt/tool snapshots**  
    Background subagents persist launch-time capability snapshots, causing inconsistencies after parent runtime changes. 2 comments.

---

## Key PR Progress (Top 10)
1. **[#7919](https://github.com/QwenLM/qwen-code/pull/7919) — fix(core): preserve active Todo context across tool turns**  
   Keeps unfinished Todo list salient after tool calls by retaining a bounded prompt-scoped reminder. *Open, awaiting merge.*

2. **[#8035](https://github.com/QwenLM/qwen-code/pull/8035) — fix(github-channel): validate and document reasonFilter**  
   Hardens the notification reason allowlist feature with validation, empty-array handling, and documentation. *Merged.*

3. **[#8061](https://github.com/QwenLM/qwen-code/pull/8061) — feat(github-channel): add transient working reaction**  
   Adds a temporary `eyes` reaction to accepted GitHub issues/comments while agent is processing. *Open.*

4. **[#8049](https://github.com/QwenLM/qwen-code/pull/8049) — feat(autofix): back off scan inspection of idle candidates**  
   Reduces unnecessary inspection of stale takeover PRs to conserve budget. *Open, part of autofix infrastructure.*

5. **[#7799](https://github.com/QwenLM/qwen-code/pull/7799) — feat(cli): Add agent view supervisor runtime**  
   Foundation PR for local Agent View: authenticated supervisor socket, JSON-line control protocol, persistent session metadata. *Open, stack position 1/5.*

6. **[#7469](https://github.com/QwenLM/qwen-code/pull/7469) — feat(ci): replace broad CODEOWNERS with intelligent core review router**  
   GitHub Actions workflow that analyzes PR changes and routes review requests to relevant maintainers instead of all four. *Open.*

7. **[#7993](https://github.com/QwenLM/qwen-code/pull/7993) — fix(cli): stamp QWEN_CODE_CLI at workspace entry and publish QWEN_CODE_MODEL**  
   Ensures subprocesses can identify the build and actual running model. *Open.*

8. **[#7938](https://github.com/QwenLM/qwen-code/pull/7938) — fix(core): allow transport stream retry during thinking-only phase**  
   Implements retry refinement for mid-stream socket closes by tracking non-thought content chunks. *Merged.*

9. **[#8068](https://github.com/QwenLM/qwen-code/pull/8068) — fix(web-shell): isolate worktree session execution**  
   Ensures daemon-managed web shell sessions use session effective working directory, not workspace checkout. *Open.*

10. **[#6486](https://github.com/QwenLM/qwen-code/pull/6486) — feat(cli): Add model toggle hotkey (Ctrl+F)**  
    Allows switching between current and alternate model with a hotkey, persists across turns. *Open, self-reported review.*

---

## Feature Request Trends
- **Model routing by role**: Binding different model groups to intent-based roles (cheap/fast for exploration, strong for implementation) — [#8021](https://github.com/QwenLM/qwen-code/issues/8021).
- **GitHub channel maturity**: Publication-safe output contracts, delivery audit trails, review-event handling, and working reactions — [#8012](https://github.com/QwenLM/qwen-code/issues/8012), [#8013](https://github.com/QwenLM/qwen-code/issues/8013).
- **Interactive UI improvements**: Configurable dialog placement, scroll wheel support, better Ctrl+C handling — [#7964](https://github.com/QwenLM/qwen-code/issues/7964), [#8036](https://github.com/QwenLM/qwen-code/issues/8036), [#8025](https://github.com/QwenLM/qwen-code/issues/8025).
- **Session file tracking**: Users want to know which files were created by which session, especially for indirect file generation — [#7966](https://github.com/QwenLM/qwen-code/issues/7966).

---

## Developer Pain Points
1. **Windows regressions in v0.21.1**: Scroll wheel, history virtualization, Ctrl+C interception, and crashes are widely reported — at least 5 distinct Windows issues.
2. **Anthropic provider breaks**: Assistant-prefill 400s, `thinking` display defaults, and `send_message` tool schema `oneOf` incompatibility — multiple critical bugs with Claude Opus/Sonnet 4.6+.
3. **Token management on small-window deployments**: Self-hosted vLLM users hit compression side-query overflow and CJK undercounting, making long sessions unreliable.
4. **YOLO mode / headless instability**: Mid-stream socket closes not retried, large code generation impossible — blocked for automated pipeline users.
5. **CI flakiness**: Multiple E2E test failures on `main` (interactive file-system tests, SDK tool-control tests) with rapid succession, indicating either test fragility or environment issues.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-30

## Today's Highlights

The project finalized **v0.9.2** after a flurry of stabilization work, including fixes for keyboard layout handling on Windows and persistent session state. A **LaTeX math rendering** feature landed in the TUI, and an Indonesian localization suite was completed by the community. The **"stop" command proposal** (#4959) generated early discussion around more reliable tool-call interruption mechanisms.

---

## Releases

**No new releases in the last 24 hours.** v0.9.2 candidate was finalized via PR #4964 but not yet tagged as a public release. Previous release candidate SHA used in CI: v0.9.2 Linux candidate (exact SHA referenced in issue #4976).

---

## Hot Issues

1. **#4959 — Proposed 'stop' command** [OPEN]  
   *Author: ronohara | 3 comments*  
   A `/stop` command and runtime STOP-word intercept to mechanically block runaway tool calls when the model ignores text-based stop signals. Early community interest suggests this fills a real gap in autonomous workflows.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4959)

2. **#4949 — Chinese Translation of 'Constitution'** [OPEN]  
   *Author: SparkofSpike | 2 comments*  
   A localization governance debate: whether "Constitution" should be translated as "宪法" (literal) or "协作准则" (idiomatic). The author argues "宪法" conveys foundational authority but acknowledges political sensitivity concerns in Chinese contexts.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4949)

3. **#4723 — Windows AltGr+Q Opens Help Overlay** [OPEN]  
   *Author: nicolassmotta | 2 comments*  
   Brazilian ABNT2 keyboard layout users cannot type `/` because `AltGr+Q` is interpreted as `Ctrl+Alt+Q`, matching the help chord. A fix PR (#4977) has been submitted. Blocks a significant group of Portuguese-speaking developers.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4723)

4. **#4789 — Add Indonesian Localization** [CLOSED]  
   *Author: Hmbown | 2 comments*  
   Recognized the gap after prioritizing Vietnamese. Indonesian developer population in Southeast Asia is larger but had zero localization coverage. Now resolved with full TUI pack (1,248 keys) and README.id.md.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4789)

5. **#4957 — LaTeX Math Raw Source Display** [CLOSED]  
   *Author: antarikshraya | 1 comment*  
   All math expressions rendered as raw `$...$` source, making technical content unreadable. Resolved same-day via PR #4973/#4974 with Unicode substitution rendering.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4957)

6. **#4941 — Thinking Level Silently Reverts to Auto** [CLOSED]  
   *Author: Hmbown | 1 comment*  
   Persisted `reasoning_effort` setting silently discarded on restart when using an auto-selected model. Root cause: auto routing should be independent of reasoning effort preference. Fixed in PR #4961.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4941)

7. **#4976 — Skills Manager Toggle Timeout on Cold Filesystems** [CLOSED]  
   *Author: Hmbown | 0 comments*  
   Synchronous re-audit of all bundled skills on mode toggle exceeded 15s acceptance budget on Linux. Fix reuses owned inventory instead of full rescan. A performance optimization for filesystem-bound scenarios.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4976)

8. **#4547 — Transcript Keeps Running Spinners for Stale Jobs** [CLOSED]  
   *Author: Hmbown | 0 comments*  
   Background shell jobs showing animated spinners even after they disappear from the job registry. Fix finalizes stale exec cells with static status.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/4547)

9. **#1186 — Typed Persistent Permission Rules** [CLOSED]  
   *Author: greyfreedom | 13 comments*  
   Extends execution policy to allow rules scoped by tool name, command prefix, or workspace path with `allow`/`deny`/`ask` decisions. High-interaction issue suggesting robust community engagement on security ergonomics.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/1186)

10. **#3063 — v0.8.59 Release Tracker** [CLOSED]  
    *Author: Hmbown | 11 comments*  
    Historical reference: mouse-report input leak on macOS and general queue triage for the v0.8.59 stabilization release. Shows project's release discipline.  
    [Link](https://github.com/Hmbown/CodeWhale/issues/3063)

---

## Key PR Progress

1. **#4977 — AltGr-typed "/" Fix** [OPEN]  
   *Author: yyyCode*  
   Fixes #4723 by excluding `AltGr` from the help chord match on Windows. Simple but critical for Brazilian keyboard users.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4977)

2. **#4973/#4974 — LaTeX Math Rendering** [CLOSED]  
   *Authors: SparkofSpike, Hmbown*  
   #4973 adds Unicode substitution rendering for math delimiters ($...$, $$...$$). #4974 hardens the implementation, fixing `\mathbb{R}` path and preventing markdown preprocessing from rewriting delimiters. Maintainer respected contributor authorship.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4973) | [Link](https://github.com/Hmbown/CodeWhale/pull/4974)

3. **#4960 — Permissions Rule Listing and Removal** [CLOSED]  
   *Author: greyfreedom*  
   Adds `/permissions` command for listing active permission rules, preview-and-confirm removal with snapshot-bound tokens, and live rule reload. Builds on #1186's persistent permission model.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4960)

4. **#4961 — Preserve Reasoning Effort with Auto Routing** [CLOSED]  
   *Author: nightt5879*  
   Separates auto model routing from persisted reasoning-effort preference. Fixes the silent revert bug (#4941) by normalizing reasoning only after the selected model is fully determined.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4961)

5. **#4937 — Finalize Stale Shell Transcript Cells** [CLOSED]  
   *Author: LI-Jialu*  
   Detects restored running shell exec cells whose jobs no longer exist in the registry, rendering them with static stale status instead of live spinners. Fixes #4547.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4937)

6. **#4964 — Finalize v0.9.2** [CLOSED]  
   *Author: Hmbown*  
   Release candidate lock: Kimi context-window reporting, manual provider overrides, implicit auto-compaction preservation, composer hints, agent detail alignment, and release notes.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4964)

7. **#4972 — Indonesian Website Locale** [CLOSED]  
   *Author: atmosuwiryo*  
   Adds `chrome.ts` and `home.ts` dictionaries for codewhale.net, completing the website layer to match the already-shipped TUI pack and README.id.md.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4972)

8. **#4962 — Indonesian Documentation Suite** [CLOSED]  
   *Author: atmosuwiryo*  
   Full `README.id.md`, `CONTRIBUTING.id.md`, and `docs/*.id.md`. Complementary to #4972.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4962)

9. **#4958 — SBOM Attestation and Provenance Pinning** [CLOSED]  
   *Author: kobihikri*  
   Adds Software Bill of Materials attestation to the release workflow and pins BuildKit's provenance mode explicitly for supply-chain transparency.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/4958)

10. **#4963 — Prevent Duplicate /resume Entries** [CLOSED]  
    *Author: SparkofSpike*  
    Stops auto-promoting interrupted checkpoints to session files, fixing duplicate entries in `/resume` that caused confusion after crashes.  
    [Link](https://github.com/Hmbown/CodeWhale/pull/4963)

---

## Feature Request Trends

- **Interruptible Tool Execution (#4959)**: Strong demand for a reliable `/stop` command that works even when the model is deep in autonomous workflows. Users find text-based stop signals unreliable.
- **Math Expression Rendering (#4957)**: Now delivered, but signals that technical/scientific content is a core use case for the TUI. Anticipate follow-up requests for proper LaTeX MathJax/KaTeX integration in the web layer.
- **Localization Acceleration**: Indonesian (#4789) addressed, but activity in #4949 (Chinese translation debate) suggests the community expects localization governance to scale with language base size and cultural context.
- **Security Policy Ergonomics (#1186, #4960)**: Users want typed, scoped permission rules and transparent rule listing. The `/permissions` command indicates a shift toward inspectable security models.

---

## Developer Pain Points

1. **Keyboard Layout Compatibility (Windows)** — #4723 is the second keyboard-related issue. The `AltGr` = `Ctrl+Alt` mapping in Windows is a recurring friction point for international keyboard users (Brazilian ABNT2, likely others).
2. **Slow Filesystem Operations** — #4976: Cold filesystem scans causing timeouts, especially on Linux. The synchronous re-audit pattern hurts UX when the system is under I/O load.
3. **Session State Confusion** — #4941 (silent reasoning-effort revert) and #4963 (duplicate /resume entries) point to a pattern: users struggle when their configuration does not survive restarts or crashes transparently.
4. **Stale Job State Pollution** — #4547: Background jobs that leave ghost spinners in the transcript. Users rely on the TUI for job monitoring, and stale indicators erode trust in the interface.
5. **Language that Works Everywhere** — #4949 reveals that translation decisions have political and cultural dimensions the project must navigate carefully, especially for terms like "Constitution" that carry specific connotations in various jurisdictions.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*