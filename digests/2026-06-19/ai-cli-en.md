# AI CLI Tools Community Digest 2026-06-19

> Generated: 2026-06-19 00:36 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools
**Data Snapshot: 2026-06-19**

---

## 1. Ecosystem Overview

The AI CLI developer tool ecosystem is experiencing a maturity inflection point. All six major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI (now CodeWhale)—are shipping actively, but the character of community feedback has shifted from "how do I use this?" to "why does this break in production?" Silent data loss, API regression churn, and session poisoning dominate today's issue trackers, signaling that early-adopter tolerance is waning. Meanwhile, agent autonomy and safety—particularly scope control and permission enforcement—have emerged as the single largest cross-cutting concern, with every tool community reporting agents that ignore user configuration or simulate approval workflows. The ecosystem is bifurcating between tools prioritizing enterprise reliability (Copilot CLI, Codex) and those racing toward agentic autonomy features (Claude Code, CodeWhale, OpenCode), with corresponding differences in community pain points.

---

## 2. Activity Comparison

| Tool | Open Issues (Hot) | PRs Active Today | Latest Release | Release Velocity |
|---|---|---|---|---|
| **Claude Code** | 10 hot issues, 2 critical regressions | 10 tracked (1 merged) | v2.1.181 (2026-06-18) | Daily |
| **OpenAI Codex** | 10 hot issues, pricing crisis | 10 tracked | rust-v0.141.0 (stable) | Daily alpha/stable |
| **Gemini CLI** | 10 hot issues, agent reliability | 10 tracked (2 merged) | v0.47.0 (today) | Weekly |
| **Copilot CLI** | 10 hot issues, auth loss/WSL regression | 1 PR open | v1.0.63 | Weekly-biweekly |
| **Kimi Code CLI** | 3 hot issues | 1 PR open | v1.43.0 | Biweekly |
| **OpenCode** | 10 hot issues, musl crash | 10 tracked (5 merged) | No release today | Monthly-stable |
| **Pi** | 10 hot issues, compaction bugs | 10 tracked (9 merged) | v0.79.7 (today) | Daily-weekly |
| **Qwen Code** | 10 hot issues, OOM fix | 10 tracked (4 merged) | v0.18.3-nightly | Daily |
| **CodeWhale (DeepSeek)** | 10 hot issues, UI freezes | 10 tracked (7 merged) | v0.8.62 (today) | Weekly |

**Key observations:**
- **Claude Code** and **Codex** have the highest issue velocity and severity—both shipping fresh regressions that break core functionality
- **Pi** and **CodeWhale** show the highest PR throughput today (9 and 7 merged respectively)
- **Kimi Code CLI** has the quietest tracker (3 issues, 1 PR)—may indicate smaller user base or slower iteration
- **Codex** is the only tool shipping alpha releases alongside stable, suggesting aggressive feature development

---

## 3. Shared Feature Directions

### 1. Agent Scope & Permission Control (All tools)
- **Claude Code:** Team/Agent tools disappearing between versions (#68721), subagent permission bypass (#68721)
- **Codex:** Full Access mode broken on macOS (#28988), repeated permission prompts
- **Gemini CLI:** Subagents running despite disabled config (#22093), destructive behavior prevention (#22672)
- **Copilot CLI:** MCP servers ignoring `disabled: true` (#3582), Subconscious sidekick ignoring `/memory off` (#3859)
- **CodeWhale:** Self-questioning/answering regression (#3275), Plan/Agent mode permission inconsistency (#3279)

### 2. Session Persistence & Data Loss Prevention (Claude Code, Copilot CLI, CodeWhale, Qwen Code)
- Silent deletion of session transcripts (#59248 — Claude Code)
- Session poisoning from malformed attachments (#3791 — Copilot CLI)
- Data loss on stall/crash recovery (#2739 — CodeWhale)
- OOM on `/quit` with auto-memory (#5147 — Qwen Code)

### 3. Multi-Session & Background Agent Management (Pi, Copilot CLI, CodeWhale)
- Pi: Multiple live agent sessions with TUI switching (#5700)
- Copilot CLI: Ctrl+B parity for subagent backgrounding (#3845)
- CodeWhale: Sub-agent recursion/concurrency limits in TUI (#3304)

### 4. Token/Usage Transparency (Claude Code, Codex, Qwen Code)
- Skill invocation analytics (#35319 — 29 👍 — Claude Code)
- Rate-limit cost jump 10-20x (#28879 — Codex)
- Daily token usage statistics (#4479 — Qwen Code)

### 5. Provider & Model Ecosystem Fragmentation (All tools)
- Ollama Cloud incompatible `custom_tool_call` payload (#3839 — Copilot CLI, 7 👍)
- BYOK/model routing demand (#8456 — OpenCode, 37 👍)
- Provider-specific bugs across Moonshot, Fireworks, Qwen, Gemini endpoints

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | CodeWhale |
|---|---|---|---|---|---|---|---|
| **Primary User** | Power user/agent experimenter | Enterprise/Core ML | Google ecosystem dev | GitHub fluent/enterprise | Multi-provider power user | JS/TS AI dev | Autonomy-first dev |
| **Architecture** | Monolithic, Anthropic-only | Rust monorepo, heavy sandbox | Agent framework + skills | GitHub deep integration | Plugin-rich, multi-model | Lightweight Node, RPC | Rust monolith, self-questioning |
| **Key Strength** | Feature velocity, agentic | Remote execution, Noise channels | Agent reliability focus | GitHub integration | Model flexibility | Terminal ecosystem | Autonomy features |
| **Key Weakness** | Regression churn, silent data loss | Pricing opacity, Windows fragility | Agent hangs, misleading success | Auth credential fragility, WSL bugs | Plugin ecosystem brittleness | Compaction fragility | TUI freezes, scope control |
| **Release Style** | Daily, regressions frequent | Daily alpha + stable biweekly | Weekly | Biweekly | Monthly | Daily-weekly | Weekly |
| **Community Growth Signal** | High engagement on regressions | High engagement on pricing | Moderate, steady bugs | Growing enterprise complaints | Strong feature requests, moderate bug count | Small but active, many closed issues | High issue churn, rapid fix velocity |

**Strategic differentiation:**
- **Codex** leads in remote execution infrastructure (Noise relay channels, managed proxy, credential routing) but struggles with pricing transparency
- **Claude Code** leads in feature experimentation (team management, skills, MCP integration) but pays the cost in stability
- **Copilot CLI** is the most GitHub-integrated but shows fragility in authentication and enterprise configuration
- **OpenCode** is the most model-agnostic (37 👍 for task-aware model routing) but suffers plugin ecosystem fragility
- **CodeWhale** is pushing hardest on architectural autonomy (WhaleFlow async executor, self-questioning prevention) but has the most severe UI stability problems

---

## 5. Community Momentum & Maturity

| Tool | Community Health Signal | Maturity Level |
|---|---|---|
| **Claude Code** | **High engagement, declining trust.** Regressions tracked with urgency, but users express frustration with data loss and API failures. | **Early majority adoption, stability crisis.** |
| **OpenAI Codex** | **Enterprise focus, pricing firestorm.** Professional user base, but pricing changes (#28879) eroding trust. Strong infrastructure investment (Noise channels, managed proxy). | **Enterprise expansion, pricing backlash.** |
| **Gemini CLI** | **Steady, moderate engagement.** No viral issues, but the generalist agent hang (#21409) has been open 3+ months without fix—shows slower prioritization. | **Mid-care, reliability plateau.** |
| **Copilot CLI** | **Enterprise pain, infrastructure gaps.** Heavy investment in subscription/payment infrastructure, but basic auth and OAuth credential loss suggests enterprise-readiness gaps. | **Enterprise scaling, authentication crisis.** |
| **Kimi Code CLI** | **Quietest tracker.** Minimal issues suggests small user base or disciplined bug reporting. Proxy fix PR #2461 shows responsiveness. | **Early stage, narrow base.** |
| **OpenCode** | **Feature request rich, bug count moderate.** High community demand for model routing and multi-auth profiles. Plugin ecosystem showing strain. | **Feature-velocity phase, plugin maturity gap.** |
| **Pi** | **High close rate, steady iteration.** 9 of 10 tracked PRs merged today—strong execution. Compaction bugs are persistent but isolated. | **Mature core, niche user base.** |
| **Qwen Code** | **Rapid bug fix cycle, community patch culture.** Multiple contributions from single author (tt-a1i). Strong Chinese-language community, growing global. | **Rapid maturation, community-driven.** |
| **CodeWhale** | **Highest fix velocity per issue.** 7 merges today for issues filed this week. UI freeze is systemic but being attacked from multiple angles. | **Rebrand/testing phase, architectural refactor underway.** |

**Momentum winners today:** CodeWhale (PR throughput), Pi (close rate), Qwen Code (community contributions)
**Momentum concerns:** Claude Code (regression churn), Codex (pricing backlash), Copilot CLI (auth fragility)

---

## 6. Trend Signals

### Signal 1: "Agent Trust Collapse" is the defining challenge of 2026 H2
Every tool community reports some form of agent behavior that users cannot trust—silent data deletion, permission bypass, simulated approval, misleading success reports, or scope over-extension. This is the industry's "CAPTCHA moment"—the feature that made these tools exciting is now the feature that makes them risky. **Key reference:** Claude Code #59248 (silent data loss), CodeWhale #3275 (self-approval), Gemini CLI #22323 (false success).

### Signal 2: Pricing transparency is becoming a retention risk
Codex's 10-20x cost jump (#28879) echoes Claude Code's skill analytics demand (#35319) and Qwen Code's token dashboard request (#4479). Users are demanding cost visibility before they trust agentic workflows at scale. Expect every tool to ship usage dashboards in the next quarter.

### Signal 3: The "LLM provider lock-in" backlash is accelerating
OpenCode (#8456, 37 👍), Copilot CLI (#3839, 7 👍), and Pi (#5866) all show strong demand for model-agnostic routing. The community is tired of provider-specific bugs (Moonshot schema rejection, Ollama custom payloads, Gemini thinking mode issues). Tools that can abstract provider differences well (OpenCode's model routing, Pi's OpenRouter support) have a competitive advantage.

### Signal 4: Windows and WSL support is a persistent weak point
Every tool with cross-platform claims has Windows-specific bugs this cycle—Copilot CLI WSL CPU spin (#3700), CodeWhale crossterm freeze (#1812), Kimi Code Git Bash extraction failure (#2462), Qwen Code empty session entries (#5244). The Windows developer experience is consistently worse than macOS/Linux, creating an adoption ceiling for enterprise shops that are Windows-first.

### Signal 5: "Silent data loss" is the most dangerous bug class
Claude Code's transcript deletion (#59248), Codex's WAL growth (#28997), OpenCode's auto-compaction loops (#30680), and CodeWhale's session data loss (#2739) share a pattern: bugs that destroy user work without warning are the fastest path to user abandonment. These issues accumulate disproportionate upvotes and reproduce negative sentiment that outlasts the fix.

### Signal 6: Architecture debt is being recognized
CodeWhale's #3306–#3314 refactoring issues, OpenCode's plugin hook regression (#25630), and Gemini CLI's config bloat (#2608) all signal that early architectural choices (monoliths, monolithic config structs, flat hook registries) are hitting scaling limits. The tools that invest in modularity now (Codex's session runtime extraction #28787, CodeWhale's module splits) will have a maintenance advantage in 2027.

---

*Report generated from community digest data for 2026-06-19. Covers Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and CodeWhale.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-06-19 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following are the most-discussed Skill submissions (by comment volume) currently active in the repository:

### #514 — document-typography *(Open)*
**Function:** Prevents common typographic defects in AI-generated documents—orphan word wrap, widow paragraphs, and numbering misalignment. Targets a universal pain point in every Claude-generated document.
**Discussion:** Strong community resonance; comments focus on edge cases and integration with existing document skills.
**Status:** Open since 2026-03-04
[PR #514](https://github.com/anthropics/skills/pull/514)

### #486 — ODT (OpenDocument) Skill *(Open)*
**Function:** Enables creation, template filling, reading, and conversion of OpenDocument Format files (.odt, .ods)—critical for LibreOffice and ISO-standard document workflows.
**Discussion:** Moderate engagement; community interest centers on interoperability with the DOCX skill and template-based document generation.
**Status:** Open since 2026-03-01
[PR #486](https://github.com/anthropics/skills/pull/486)

### #210 — frontend-design Skill Improvement *(Open)*
**Function:** Revises the existing frontend-design skill for clarity, actionability, and internal coherence. Ensures every instruction is executable within a single conversation.
**Discussion:** Early interest from UI/UX practitioners; dialogue focuses on specificity vs. flexibility trade-offs.
**Status:** Open since 2026-01-05
[PR #210](https://github.com/anthropics/skills/pull/210)

### #83 — skill-quality-analyzer & skill-security-analyzer *(Open)*
**Function:** Two meta-skills for the marketplace: quality analysis across five dimensions (structure, documentation, examples, etc.) and security analysis for skill submissions.
**Discussion:** Significant community interest in tooling that improves skill robustness; concerns about false positives in security scanning.
**Status:** Open since 2025-11-06
[PR #83](https://github.com/anthropics/skills/pull/83)

### #1298 — skill-creator: run_eval.py Fix *(Open)*
**Function:** Fixes the critical 0% recall bug in `run_eval.py` (#556) that renders the description-optimization loop ineffective. Also addresses Windows compatibility and parallel worker issues.
**Discussion:** High urgency—multiple independent reproductions confirm the bug. Community is closely watching this fix as it unblocks the entire skill development toolchain.
**Status:** Open since 2026-06-10 (most recent update: 2026-06-11)
[PR #1298](https://github.com/anthropics/skills/pull/1298)

### #568 — ServiceNow Platform Skill *(Open)*
**Function:** Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, SecOps, and IntegrationHub.
**Discussion:** Enterprise interest is strong; discussion centers on skill scope boundaries and preventing feature bloat.
**Status:** Open since 2026-03-08
[PR #568](https://github.com/anthropics/skills/pull/568)

### #444 — AURELION Skill Suite *(Open)*
**Function:** Four skills (kernel, advisor, agent, memory) implementing a structured cognitive framework for professional knowledge management and AI collaboration.
**Discussion:** Niche but engaged; community discusses framework architecture vs. standalone skill philosophy.
**Status:** Open since 2026-02-21
[PR #444](https://github.com/anthropics/skills/pull/444)

---

## 2. Community Demand Trends

From the most-commented Issues, the community's most anticipated new Skill directions are:

| Trend | Signal | Key Issue |
|---|---|---|
| **Org-wide Skill Sharing** | Highest-commented issue (14 comments) | [#228](https://github.com/anthropics/skills/issues/228): Users demand direct sharing links and shared skill libraries instead of manual .skill file transfers |
| **Agent Governance & Safety** | Active proposal with 6 comments | [#412](https://github.com/anthropics/skills/issues/412): Request for policy enforcement, threat detection, trust scoring, and audit trail patterns for AI agent systems |
| **Compact Agent Memory** | New proposal gaining traction | [#1329](https://github.com/anthropics/skills/issues/1329): Symbolic notation for long-running agent state management—reduces context consumed by persistent memory |
| **Windows Compatibility** | Persistent, multi-issue demand | [#1061](https://github.com/anthropics/skills/issues/1061): Subprocess PATHEXT, cp1252 encoding, and pipe select issues block Windows users from skill-creator tooling |
| **Skill-Creator Toolchain Fixes** | Crisis-level demand | [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169): 0% trigger rate in `run_eval.py` renders the description optimization loop unusable—multiple independent reproductions |
| **Security: Namespace Trust** | Emerging concern | [#492](https://github.com/anthropics/skills/issues/492): Community skills distributed under `anthropic/` namespace create trust boundary vulnerabilities |

**Notable gap:** The community shows minimal demand for code-review or test-generation Skills—these categories are absent from both top PRs and Issues. The dominant demand is for *infrastructure and quality-of-life tooling* (skill creation, Windows support, document quality), not code analysis.

---

## 3. High-Potential Pending Skills

These active PRs show sustained discussion and are likely to land soon:

| PR | Skill | Potential Impact |
|---|---|---|
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Addresses a universal document quality issue; likely to merge as a companion to the DOCX/ODT skills |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator bugfix** | Critical fix for the 0% recall bug; if merged, unblocks the entire skill development workflow |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing skill (unit, React, E2E, philosophy); strong community alignment |
| [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow** | Enterprise demand is clear; scope negotiation is the primary blocker |
| [#154](https://github.com/anthropics/skills/pull/154) | **shodh-memory** | Persistent memory across conversations; differentiation from AURELION memory is under discussion |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for *quality infrastructure*—not new domain skills, but tooling that fixes the skill development workflow itself (run_eval.py crashes, Windows compatibility, YAML parsing bugs, and orphan-document layout defects) and trust/safety mechanisms (org sharing, namespace verification, agent governance).**

---

# Claude Code Community Digest — 2026-06-19

## Today's Highlights

No new releases landed in the past 24 hours, but the community is buzzing over **two active regressions**: the silent deletion of session transcripts (#59248) and a v2.1.181 API black-hole issue (#69358) that's rapidly accumulating upvotes. Meanwhile, a long-running infrastructure PR (#69470) finally fixes the stale-issue bot, ending 53 consecutive daily workflow failures.

---

## Releases

No new releases in the last 24 hours. The latest stable version remains **2.1.181** (tagged 2026-06-18).

---

## Hot Issues

1. **#59248 — [BUG] Silent retention cleanup deletes session transcripts**  
   *Platform: macOS | Area: Core | 👍 6*  
   Active Cursor extension users lose *all* resume-able conversation transcripts older than the current day — with no warning or recovery. The community is particularly frustrated by the “silent” aspect and the fact that JSONL files are destroyed without opt-in.  
   [View Issue](https://github.com/anthropics/claude-code/issues/59248)

2. **#69358 — [BUG] No Response From API 2.1.181 (constantly)**  
   *Platform: Linux | Area: API | 👍 11*  
   A fresh regression in v2.1.181 causes the tool to hang indefinitely with zero API responses. Already the highest-voted open issue today, suggesting a widespread outage.  
   [View Issue](https://github.com/anthropics/claude-code/issues/69358)

3. **#68721 — [REGRESSION] TeamCreate / TeamDelete tools no longer surfaced**  
   *Platform: Linux | Area: Agents, Tools | 👍 5*  
   Native team-management tools disappeared between 2.1.177 and 2.1.178. Blocking users on multi-agent workflows and team-mode experiments.  
   [View Issue](https://github.com/anthropics/claude-code/issues/68721)

4. **#68514 — [BUG] Checksum mismatch for rootfs.img.zst on macOS Sequoia**  
   *Platform: macOS (ARM64) | Area: Core | 👍 1*  
   Fails to validate rootfs download on new macOS Sequoia 15.7 builds. Likely a CDN caching or broken release artifact issue.  
   [View Issue](https://github.com/anthropics/claude-code/issues/68514)

5. **#59736 — Desktop 3p Code sessions disappear from UI after restart**  
   *Platform: Windows | Area: Desktop | 👍 1*  
   JSONL transcripts remain on disk, but the desktop UI refuses to index them after restart. Related to #59248 but specific to third-party session imports.  
   [View Issue](https://github.com/anthropics/claude-code/issues/59736)

6. **#69466 — [BUG] /config dialog completely non-functional**  
   *Platform: macOS | Area: CLI | 👍 0*  
   New regression in v2.1.181: pressing Enter toggles options instead of saving, and Escape discards everything. Settings cannot be persisted.  
   [View Issue](https://github.com/anthropics/claude-code/issues/69466)

7. **#58371 — [BUG] Pro subscription not recognized in VS Code extension**  
   *Platform: VS Code, macOS | Area: Auth | 👍 4*  
   Closed as stale but remains a recurring complaint: the extension fails to detect Pro subscription status, forcing users back to the web UI.  
   [View Issue](https://github.com/anthropics/claude-code/issues/58371)

8. **#58429 — [A11y FEATURE] Built-in option to speak Claude's responses aloud**  
   *Area: Desktop, Accessibility | 👍 3*  
   Strong interest from users who are blind, low-vision, or hands-busy. Proposes an opt-in TTS toggle for the desktop app.  
   [View Issue](https://github.com/anthropics/claude-code/issues/58429)

9. **#35319 — [FEATURE] Skill invocation tracking and usage analytics**  
   *Area: Skills | 👍 29*  
   The most upvoted open feature request. Organizations want to know which skills are used, how often, and by whom — currently no telemetry exists for skill adoption.  
   [View Issue](https://github.com/anthropics/claude-code/issues/35319)

10. **#69318 — [BUG] Desktop app crashes instantly with "script not found stream-json"**  
    *Platform: Windows | Area: Desktop | 👍 0*  
    A crash-on-launch bug for Windows desktop users, likely a missing dependency artifact in the latest build.  
    [View Issue](https://github.com/anthropics/claude-code/issues/69318)

---

## Key PR Progress

1. **#69470 — [CLOSED] Fix lock-closed-issues workflow: use search API**  
   Fixes the stale-issue bot that had been silently failing every day since April 27 (53 runs). Switches to search-based pagination to avoid GitHub API offset limits.  
   [View PR](https://github.com/anthropics/claude-code/pull/69470)

2. **#69226 — [CLOSED] Update frontend-design skill**  
   Bumps the `frontend-design` plugin to v1.1.0 with improvements. Auto-updates installed copies via version detection.  
   [View PR](https://github.com/anthropics/claude-code/pull/69226)

3. **#68673 — [OPEN] fix(scripts): break pagination when page is not full**  
   Fixes another pagination bug in the stale-issue grooming scripts — missed edge case where a non-empty but under-filled page still causes missing items.  
   [View PR](https://github.com/anthropics/claude-code/pull/68673)

4. **#45553 — [OPEN] resolve duplicate IPs**  
   A long-open networking fix for multi-interface machines (e.g., VPN + LAN) where Claude Code spawns duplicate tool connections.  
   [View PR](https://github.com/anthropics/claude-code/pull/45553)

5. **#23972 — [OPEN] fix: hookify Python 3.8 compat and cwd-independent rule loading**  
   Two-year-old PR fixing Python 3.8 support in the `hookify` plugin. Still unmerged — the oldest open PR with substantive work.  
   [View PR](https://github.com/anthropics/claude-code/pull/23972)

6. **#41611 — [OPEN] add the missing source to claude code**  
   A one-line PR adding a missing import or reference. Minimal but addresses a compilation/transpile gap.  
   [View PR](https://github.com/anthropics/claude-code/pull/41611)

7. **#41447 — [OPEN] feat: open source claude code ✨**  
   A symbolic PR attempting to open-source the Claude Code core. Closes five tracking issues (#59, #456, #2846, #22002, #41434). Likely to remain open indefinitely as a feature request marker.  
   [View PR](https://github.com/anthropics/claude-code/pull/41447)

8. **#60224 — [CLOSED] Fix: stdio MCP server tools dropped on slow initialize**  
   Already closed but critical: MCP servers with slow handshakes get silently dropped from the tool registry. The fix addresses the `deferred-tool registry` timeout logic.  
   [View PR](https://github.com/anthropics/claude-code/issues/60224)

9. **#55354 — [CLOSED] Fix: RemoteTrigger.list pagination capped at 20**  
   Routines list hard-limited to 20 items with no pagination. Closed as stale but the API pagination issue persists.  
   [View PR](https://github.com/anthropics/claude-code/issues/55354)

10. **#69471 — [OPEN] Missing 'design' command documentation**  
    The `design` CLI command exists but has no documentation on the official support site. New users cannot discover it.  
    [View Issue](https://github.com/anthropics/claude-code/issues/69471)

---

## Feature Request Trends

- **Skill/Plugin Analytics** (#35319, 29 👍): The most requested feature — users want visibility into which skills are active, invoked, and effective. A foundational pain point for organizational adoption.
- **Desktop Session Management** (#55225, #59736): Strong demand for smarter session grouping (sort by recency, not alphabetically) and persistent session recovery across restarts.
- **Accessibility & TTS** (#58429): Growing advocacy for built-in text-to-speech, especially from low-vision and hands-free workflow users.
- **Customizable TUI** (#43216, #44423, #52160, #60786, 9 total votes): A cluster of CSS/theme-like requests — per-project colors, configurable borders, and distinct visual states for idle/running/prompt.
- **Team/Agent Tools** (#68721, #48246): Users want tool parity between multi-agent teams and third-party wrappers, plus visible subagent progress in the TUI.

---

## Developer Pain Points

1. **Silent data loss** — #59248 and #59736 both highlight that Claude Code deletes session transcripts without confirmation or backup. Developers consider this an unacceptable trust breach for work-in-progress conversations.
2. **API regression churn** — #69358 (v2.1.181 constant failure) and #68721 (team tools dropped between minor versions) suggest insufficient regression testing in the release pipeline. The community is growing wary of upgrading immediately.
3. **Desktop vs. CLI parity** — Several bugs (#59736, #69318) show the desktop app lags behind the CLI in reliability. Features like session recovery and copy/paste work in the terminal but break in the GUI.
4. **Documentation gaps** — #69471 (missing `design` command docs) and #69466 (broken `/config` with no workaround) mean even basic commands are opaque when they fail.
5. **MCP ecosystem fragility** — #60224, #51385, and #70656 reveal that MCP server integration is brittle: slow init times, OAuth failures, and missing diagnostic feedback leave developers debugging network issues without proper tool logging.

---

*Digest generated from `github.com/anthropics/claude-code` — 2026-06-19 data snapshot.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-19

## Today's Highlights

The Codex team shipped **rust-v0.141.0** with authenticated, end-to-end encrypted Noise relay channels for remote executors and cross-platform remote execution that preserves native shells and permission paths. Meanwhile, a significant burst of **Windows and macOS sandbox/compatibility issues** dominated the issue tracker, with multiple regressions in sandbox setup, code signing, and browser plugin connectivity. On the PR front, the **managed proxy and credentialed routing system** continues to mature, with a stack of PRs advancing MITM CA isolation, route discovery, and child environment snapshotting.

## Releases

**rust-v0.141.0** (stable):
- Remote executors now use **authenticated, end-to-end encrypted Noise relay channels** (#26242, #26245)
- Cross-platform remote execution preserves **executor-native working directories and shells**, including filesystem permission paths across app-server and exec-server boundaries

**Alpha releases** (developer previews):
- rust-v0.142.0-alpha.1, alpha.2, alpha.3
- rust-v0.141.0-alpha.7

## Hot Issues

1. **#2558 — [CLOSED] Codex client output truncated when scrolling in Zellij**  
   *Author: ForSeason | Comments: 66 | 👍: 114*  
   Long-standing TUI bug in Zellij sessions finally closed. High community engagement signals this was a common pain point for terminal multiplexer users.  
   [GitHub](https://github.com/openai/codex/issues/2558)

2. **#21719 — Chrome plugin native host connects to wrong socket and times out**  
   *Author: t17839339915-boop | Comments: 12 | 👍: 0*  
   Desktop Chrome plugin's native messaging host connects to a different socket than the browser-use pipe, breaking `@chrome` tasks. Critical for browser automation workflows.  
   [GitHub](https://github.com/openai/codex/issues/21719)

3. **#28422 — image_gen regression: valid generated image not saved when status remains "generating"**  
   *Author: aprendendo-codex | Comments: 11 | 👍: 8*  
   Regression in CLI 0.140.0 where successfully generated images are discarded if the API status field stays "generating." Affects all image generation use cases.  
   [GitHub](https://github.com/openai/codex/issues/28422)

4. **#26158 — [CLOSED] Windows sandbox regression in CLI 0.138.0: setup refresh fails with OS error 740**  
   *Author: BaseBlank | Comments: 11 | 👍: 5*  
   `CreateProcessAsUserW` failure broke Windows sandbox execution. User forced to roll back to 0.132.0. Closed, but highlights fragility in Windows sandbox infrastructure.  
   [GitHub](https://github.com/openai/codex/issues/26158)

5. **#28879 — Rate-limit cost per token jumped ~10-20x since June 16 on Plus plan**  
   *Author: mihneaptu | Comments: 5 | 👍: 2*  
   Plus-plan users report budget draining in 2-3 prompts instead of 20+. Session logs confirm the per-token cost multiplier. High priority for pricing sensitivity.  
   [GitHub](https://github.com/openai/codex/issues/28879)

6. **#28988 — Full Access mode keeps asking for permission on macOS 26.614.11602**  
   *Author: praveshkhatana | Comments: 6 | 👍: 4*  
   Recent macOS update broke "Full Access" mode, causing repeated permission prompts. Directly impacts agent autonomy promises.  
   [GitHub](https://github.com/openai/codex/issues/28988)

7. **#28241 — Turn-diff tree refs break libgit2-based Git clients on Windows**  
   *Author: elachlan | Comments: 7 | 👍: 1*  
   Codex-generated Git refs incompatible with libgit2 (used by Git GUI tools, GitHub Desktop). Affects Windows developers using visual Git tools.  
   [GitHub](https://github.com/openai/codex/issues/28241)

8. **#16815 — WSL agent mode fails with "AbsolutePathBuf deserialized without a base path"**  
   *Author: cc345 | Comments: 9 | 👍: 7*  
   Windows WSL2 agent mode consistently broken. High upvote count indicates strong demand for WSL integration among Windows developers.  
   [GitHub](https://github.com/openai/codex/issues/16815)

9. **#28997 — logs_2.sqlite-wal grows without bound into tens of GB**  
   *Author: th317erd | Comments: 2 | 👍: 0*  
   CLI's SQLite write-ahead log grows unboundedly, consuming disk space. Could silently fill users' drives during long sessions.  
   [GitHub](https://github.com/openai/codex/issues/28997)

10. **#28583 — macOS Codex Desktop repeatedly invalidates code signature, triggers syspolicyd/trustd high CPU**  
    *Author: vhdelgado25 | Comments: 2 | 👍: 1*  
    App bundle repeatedly invalidates its own code signature, causing macOS security daemons to consume high CPU. Affects battery life and system responsiveness.  
    [GitHub](https://github.com/openai/codex/issues/28583)

## Key PR Progress

1. **#26707 — PAC 2: Add shared auth system proxy contract**  
   Adds the shared auth/system-proxy contract for route-aware HTTP client boundary. Foundation for later platform-specific proxy resolution.  
   [GitHub](https://github.com/openai/codex/pull/26707)

2. **#28707 — Abort turns when rollout budgets expire**  
   Propagates shared rollout-budget exhaustion through `TurnAborted` results. Each thread records usage against the same ledger to enforce cross-turn budgets.  
   [GitHub](https://github.com/openai/codex/pull/28707)

3. **#29006 — Preserve skill descriptions outside model context**  
   Prevents valid skills from being skipped during metadata loading by separating the 1024-char model context fragment from the full description used by non-model consumers.  
   [GitHub](https://github.com/openai/codex/pull/29006)

4. **#28814 — Assign response item IDs when recording history** (CLOSED)  
   Fixes identity loss for client-created response items across rollout persistence and resume by assigning IDs at the history-recording boundary.  
   [GitHub](https://github.com/openai/codex/pull/28814)

5. **#28489 — Add indexed web search mode**  
   New `web_search = "indexed"` configuration alongside `disabled`, `cached`, and `live`. Sends `index_gated_web_access: true` for hosted search.  
   [GitHub](https://github.com/openai/codex/pull/28489)

6. **#28996 — Avoid duplicate ImageGen Markdown output**  
   Fixes bug where generated images render both as Markdown inline and as separate nuggets, showing three results for the same image.  
   [GitHub](https://github.com/openai/codex/pull/28996)

7. **#28787 — code-mode: introduce transport-neutral session runtime**  
   Extracts session ownership into a `SessionRuntime` that owns cell IDs, active handles, and event bus, while `CodeModeService` remains the protocol adapter. Prepares for separate-process transport.  
   [GitHub](https://github.com/openai/codex/pull/28787)

8. **#28967 — Snapshot managed proxy child environments**  
   Ensures child launches get a coherent view of proxy and MITM state even when managed network configuration reloads concurrently.  
   [GitHub](https://github.com/openai/codex/pull/28967)

9. **#27503 — Refresh credentialed routes during session**  
   Adds proxy-owned credential route config and hook compilation, refreshing routes at most every five minutes as installed plugins change.  
   [GitHub](https://github.com/openai/codex/pull/27503)

10. **#28981 — Rebase live proxy state through config reloaders**  
    Adds a reloader hook for rebuilding state from a refreshed base, allowing sandbox and exec-policy refreshes without teaching Codex session orchestration how each reloader composes state.  
    [GitHub](https://github.com/openai/codex/pull/28981)

## Feature Request Trends

- **Remote host connectivity**: Multiple requests for better SSH key authentication (#22857, 👍10) and the ability to connect the Desktop app to a remote Codex host (#26846). Users want mobile-to-desktop, desktop-to-server seamless connections.
- **Remote compaction and state management**: Errors on remote compact tasks (#28592) and WAL growth issues (#28997) indicate users are pushing remote execution hard and hitting state management boundaries.
- **Browser automation reliability**: Chrome plugin connectivity issues (#21719, #24040, #25247) suggest browser-use is a key feature path that needs stabilization.
- **Windows sandbox and WSL parity**: Multiple Windows-specific sandbox and WSL failures (#16815, #26158, #28982) show strong demand for first-class Windows support, especially for Windows Subsystem for Linux workflows.

## Developer Pain Points

- **Fragile Windows experience**: The most frequent pain point. Windows users face sandbox setup failures (OS error 740, missing modules), WSL agent mode crashes, broken Chrome plugin registry keys, and absent taskbar icons across multiple recent releases (#16815, #26158, #24040, #28112, #28982, #26809).
- **Rate-limit and pricing confusion**: The sudden 10-20x rate-limit cost increase (#28879) and the immediate hard reset instead of banked reset (#28811) signal transparency issues with the billing/token system that erode user trust.
- **macOS code signing instability**: Multiple issues (#28572, #28583) report the Codex app bundle repeatedly invalidating its own code signature, causing high CPU usage and failed updates. A fundamental packaging/integrity issue affecting all macOS users.
- **Plugin/extension crashes from validation**: The `ngs-analysis` plugin crash (#28330) and Computer Use failures (#28112, #28676) due to strict export/path validation create a brittle plugin ecosystem where a single invalid plugin can break the entire extension.
- **Image generation reliability**: The "generating" status bug (#28422) and duplicate Markdown output (#28996, PR) indicate the image generation pipeline still has race conditions and rendering issues in production.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-19

## Today's Highlights
The team is wrapping up the [v0.47.0 release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0) with a focus on backend definition compliance. On the community front, agent reliability remains the dominant concern — users are hitting hangs, subagent misreporting, and permission bypasses. Dependency updates are rolling in steadily, including a security release for `undici`, while several high-impact fixes for file corruption and character encoding issues are progressing through review.

## Releases
**v0.47.0** was cut today. The release includes a fix to **Respect backend def**, ensuring the CLI honors backend configuration definitions more strictly. Accompanying changelogs for v0.46.0-preview.0 and v0.47.0 have been auto-generated. A **v0.48.0-preview.0** changelog PR is also open, suggesting a new preview is imminent.

## Hot Issues (10 Noteworthy)

1. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, Bug, 8 👍)
   The top community concern. The generalist agent hangs indefinitely on simple tasks like folder creation. Users report instructing the model to avoid sub-agents as a workaround. No fix has been merged yet despite being open for over three months.

2. **[#22323 — Subagent recovery misreports GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, Bug, 2 👍)
   A critical reliability issue: the `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` even after hitting `MAX_TURNS` without doing any analysis. This masks real failures.

3. **[#25166 — Shell command execution stuck at "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, Bug, 3 👍)
   After CLI commands complete, the tool can hang, showing the shell as still awaiting input. Affects even trivial commands like `ls` or `echo`, causing workflow blocks.

4. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, Bug, 1 👍)
   The browser subagent terminates with `GOAL` but fails silently on Wayland sessions. A persistent problem for Linux users.

5. **[#21968 — Gemini doesn't use skills/sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, Bug)
   Users report the model rarely uses custom skills or sub-agents autonomously, even when the task is highly relevant. Requires explicit instruction to invoke them.

6. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (P2, Bug)
   Subagents are being invoked even when disabled in user configuration. Users who only want MCP functionality are seeing unexpected agent behavior.

7. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2, Bug)
   The CLI hits a 400 error when the tool count exceeds 128. The community expects smarter tool scoping rather than a hard limit.

8. **[#26525 — Auto Memory: Add deterministic redaction](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, Bug)
   Auto Memory sends transcript content to the model before redaction, and logging may expose secrets. A privacy/security concern that needs architectural fixes.

9. **[#22672 — Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** (P2, 1 👍)
   The model occasionally uses `git reset --force` or other destructive commands when safer alternatives exist. Community wants safety guardrails.

10. **[#28019 — Infinite auth error in VSCode extension](https://github.com/google-gemini/gemini-cli/issues/28019)** (P2, Bug)
    A newly filed, rapidly growing issue: the VSCode companion extension enters an infinite authentication loop. The login page loads endlessly, then reports a limit reached despite no recent usage.

## Key PR Progress (10 Important)

1. **[#28016 — fix(ci): provide fallbacks for package variables in nightly release](https://github.com/google-gemini/gemini-cli/pull/28016)** (P1, Merged)
   Fixes a nightly CI publish failure when scheduled runs lack package name variables. Now provides default fallbacks, keeping the nightly release pipeline healthy.

2. **[#28000 — fix(core-tools): resolve Jupyter Notebook and JSON corruption in write_file](https://github.com/google-gemini/gemini-cli/pull/28000)** (Open)
   Critical fix for `write_file` silently corrupting `.ipynb` and JSON files. Prevents Colab/JupyterLab from discarding changes. Under review.

3. **[#28013 — fix(prompts): use function replacer to prevent $-pattern corruption](https://github.com/google-gemini/gemini-cli/pull/28013)** (Open)
   Fixes `String.prototype.replace` corruption where skill or tool descriptions containing `$` characters break prompt substitutions. Important for user-defined content.

4. **[#27996 — fix(core): decode response body using charset from Content-Type header](https://github.com/google-gemini/gemini-cli/pull/27996)** (Open)
   `web-fetch` was hardcoded to `utf8` decoding, breaking pages with `charset=gbk` or other encodings. Fix enables correct rendering of Chinese, Japanese, and legacy sites.

5. **[#28015 — feat(caretaker): implement Cloud Run webhook ingestion service](https://github.com/google-gemini/gemini-cli/pull/28015)** (Open)
   Implements a webhook ingestion service for the "Caretaker" agent, verifying GitHub payloads and storing issues in Firestore with Pub/Sub publishing.

6. **[#28012 — fix(cli): sync footer branch name on filesystems without fs.watch events](https://github.com/google-gemini/gemini-cli/pull/28012)** (P2, Open)
   Fixes the footer branch indicator not updating after `git checkout` on WSL mounts and network shares. Solves a persistent UX bug for Windows developers.

7. **[#28009 — feat: add eval:inventory CLI command and reporting logic](https://github.com/google-gemini/gemini-cli/pull/28009)** (Open)
   Adds a new command to list all eval cases. Aims to improve developer visibility into the testing landscape.

8. **[#27948 — chore(deps): pin dependencies and enforce 14-day update cooldown](https://github.com/google-gemini/gemini-cli/pull/27948)** (Merged)
   An important housekeeping PR: pins all direct dependencies to exact versions and enforces a cooldown for automated updates, reducing risk from premature dependency bumps.

9. **[#27990 — test(core-tools): resolve macOS symlink path mismatches in tests](https://github.com/google-gemini/gemini-cli/pull/27990)** (Open)
   Fixes test failures on macOS where `/var` → `/private/var` symlinks cause path mismatches in `EditTool` and `WriteFileTool` tests. Essential for CI on Apple hardware.

10. **[#27848 — feat(cli): add 'models' command to list available Gemini models](https://github.com/google-gemini/gemini-cli/pull/27848)** (Open, P3)
    A community-contributed feature to list available models with context window limits and tiers, supporting both text and JSON output. Useful for configuration debugging.

## Feature Request Trends
The most dominant feature request themes across recent issues:

- **Agent Self-Awareness & User Guidance**: Users want the agent to accurately describe its own capabilities, flags, hotkeys, and limitations ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)). The model often provides incorrect or outdated self-knowledge.
- **AST-Aware Tooling**: Multiple issues and an epic ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) call for AST-based file reads, search, and codebase mapping to reduce token waste and improve precision.
- **Remote & Background Agents**: The "Remote Agents" epic ([#20303](https://github.com/google-gemini/gemini-cli/issues/20303)) is advancing, with requests for task-level auth, 1P agent support, and background processing.
- **Evaluation Infrastructure**: There is strong internal demand for stabilized project evals ([#23166](https://github.com/google-gemini/gemini-cli/issues/23166)), always-passing steering tests ([#23313](https://github.com/google-gemini/gemini-cli/issues/23313)), and better eval inventory tooling ([#28009](https://github.com/google-gemini/gemini-cli/pull/28009)).

## Developer Pain Points

1. **Agent Hangs and Stalls**: The #1 community complaint. Agents — especially the generalist — hang indefinitely on simple operations. Workarounds involve disabling sub-agents entirely.
2. **Misleading Success Reporting**: Subagents report `GOAL` success even when they hit turn limits or fail silently, eroding trust in the tool's feedback.
3. **Permissions and Configuration Bypass**: Subagents running despite being disabled in settings ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) — a serious control issue for users wanting limited agent scopes.
4. **File Corruption in write_file**: Jupyter Notebook and JSON files are silently corrupted. A high-impact bug for data scientists and developers working with structured data.
5. **Terminal and UI Glitches**: Shell execution stuck on "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), terminal corruption after exiting editors ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), and flicker-free resize failures ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)) degrade the interactive experience.
6. **Encoding and Character Handling**: Issues with `\n` escape handling ([#22466](https://github.com/google-gemini/gemini-cli/issues/22466)), `$`-pattern corruption in prompts ([#28013](https://github.com/google-gemini/gemini-cli/pull/28013)), and charset handling in `web-fetch` ([#27996](https://github.com/google-gemini/gemini-cli/pull/27996)) show recurring gaps in text processing.
7. **WSL and macOS Compatibility**: Path resolution differences ([#27990](https://github.com/google-gemini/gemini-cli/pull/27990)) and missing `fs.watch` events ([#28012](https://github.com/google-gemini/gemini-cli/pull/28012)) on WSL mounts continue to cause friction for developers on non-Linux platforms.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**2026-06-19**

---

## Today's Highlights

A wave of authentication, session management, and enterprise configuration bugs dominates today's digest. The most critical issue involves **Drive MCP OAuth credentials being silently dropped** after a successful reauth, leaving all tool calls broken. Meanwhile, a **high-severity WSL2 CPU spin regression** (`#3700`) continues to plague Linux users, and multiple reports document **session poisoning** from malformed attachments and **subagent MCP tool access** regressions. On the PR front, a design for **plan review compatibility fallbacks** with strict OpenAI backends has been proposed.

---

## Releases

**No new releases in the last 24 hours.** The latest stable version remains `1.0.63`.

---

## Hot Issues

### 1. [#3838 – Drive MCP OAuth not attached: tools fail with 'missing required authentication credential' after successful reauth](https://github.com/github/copilot-cli/issues/3838)
`area:authentication, area:mcp` | `7 comments` | `👍 0`
**Why it matters:** OAuth flow completes successfully and cache files are written, but subsequent tool calls are sent without credentials. This breaks all Drive MCP integrations—a core productivity use case. Community is actively debugging the credential propagation path.

### 2. [#3700 – [High severity] 1.0.60 WSL2 regression: CLI MainThread spins at ~215% CPU while idle, TUI output frozen](https://github.com/github/copilot-cli/issues/3700)
`area:platform-windows, area:terminal-rendering` | `2 comments` | `👍 2`
**Why it matters:** Fresh WSL2 sessions become unusable immediately—live output never paints, CPU pinned at 215%. A regression of older issue #2208. High community reaction (2 thumbs-up indicates heavy impact).

### 3. [#1974 – After upgrading Copilot CLI 1.0.3, generated Markdown links are not clickable](https://github.com/github/copilot-cli/issues/1974)
`area:installation` | `5 comments` | `👍 1`
**Why it matters:** Long-standing (since March) visual regression affecting all markdown output rendering. Still open with active reproduction discussions.

### 4. [#3860 – Content-exclusion over-blocks entire working tree (incl. /dev/null and binaries), sticky to one session](https://github.com/github/copilot-cli/issues/3860)
`area:permissions, area:sessions, area:enterprise` | `1 comment` | `👍 0`
**Why it matters:** Enterprise security feature gone rogue—once triggered, blocks legitimate system commands/devices. High severity due to total workflow disruption.

### 5. [#3859 – Copilot Subconscious sidekick keeps spawning per-prompt even with memory disabled](https://github.com/github/copilot-cli/issues/3859)
`area:agents, area:context-memory, area:plugins` | `1 comment` | `👍 0`
**Why it matters:** Background memory "voting" agent ignores explicit `/memory off` and `settings.json` configuration. Wastes API calls and compute for users who deliberately opted out.

### 6. [#3845 – Ctrl+X B backgrounds only sync shell commands, not subagents; running subagents absent from /tasks](https://github.com/github/copilot-cli/issues/3845)
`area:agents, area:input-keyboard` | `0 comments` | `👍 0`
**Why it matters:** Parity gap with Claude Code's Ctrl+B—users expect subagent-level backgrounding but get only shell-command backgrounding. Missing `/tasks` visibility reduces workflow orchestration reliability.

### 7. [#3839 – Ollama Cloud Does Not Support custom_tool_call Payload Used by Copilot CLI](https://github.com/github/copilot-cli/issues/3839)
`area:agents, area:models` | `1 comment` | `👍 7`
**Why it matters:** Highest community engagement today (7 thumbs-up). BYOK users via Ollama Cloud hit a hard 400 error due to non-standard `custom_tool_call` payloads. Blocks Fleet Mode entirely.

### 8. [#3858 – Ctrl+Backspace (delete previous word) doesn't work on Windows](https://github.com/github/copilot-cli/issues/3858)
`area:input-keyboard, area:platform-windows` | `0 comments` | `👍 0`
**Why it matters:** Standard Windows keyboard shortcut broken—forces users to adopt Unix/macOS convention. Small ergonomic issue with high daily friction.

### 9. [#3856 – Repeated Enter in /resume picker splits session: extension's session.send wakes invisible context, losing tools](https://github.com/github/copilot-cli/issues/3856)
`area:sessions, area:context-memory, area:plugins` | `0 comments` | `👍 0`
**Why it matters:** Subtle but dangerous—multi-press during `/resume` creates silent split sessions. Extensions targeting the session can wake an invisible context that has no tools, causing unpredictable failures.

### 10. [#3853 – /pr auto misses review threads](https://github.com/github/copilot-cli/issues/3853)
`area:agents, area:tools` | `0 comments` | `👍 0`
**Why it matters:** Core PR automation feature incorrectly reports no unresolved threads existed when they do (verified via direct API calls). Trust issue for CI/CD workflows.

---

## Key PR Progress

### 1. [#3847 – Plan review: add compatibility fallback design + test vectors](https://github.com/github/copilot-cli/pull/3847)
**State:** `OPEN` | **Author:** nguyenhoangduc0707-lang
**What it does:** Implements a multi-strategy parsing fallback (JSON-first → YAML → numbered/bulleted lists) for plan review menus on strict OpenAI-compatible backends that lack `function_call` metadata. Includes test vectors.

---

**No other open PRs in the last 24 hours.** Only a single PR was updated.

---

## Feature Request Trends

| Trending Request | Frequency (Last 24h Issues) | Key Issue |
|---|---|---|
| **Enterprise/BYOK model support** | High | [#3730](https://github.com/github/copilot-cli/issues/3730) – Enterprise-managed custom models, [#3839](https://github.com/github/copilot-cli/issues/3839) – Ollama Cloud compatibility |
| **Session/context management improvements** | Medium | [#3518](https://github.com/github/copilot-cli/issues/3518) – Unarchive/restore sessions, [#3856](https://github.com/github/copilot-cli/issues/3856) – Session split prevention |
| **Plugin stability & lock mechanism** | Medium | [#2727](https://github.com/github/copilot-cli/issues/2727) – Plugin instruction files, [#3136](https://github.com/github/copilot-cli/issues/3136) – Lock-based plugin installation |
| **Subagent/task visibility** | Medium | [#3845](https://github.com/github/copilot-cli/issues/3845) – Subagent backgrounding parity, [#3013](https://github.com/github/copilot-cli/issues/3013) – Hook enforcement for background agents |
| **Access permission granularity** | Low | [#3857](https://github.com/github/copilot-cli/issues/3857) – Session-scoped directory access |

**Dominant theme:** Enterprise model management and BYOK compatibility are the most requested features, driven by organizations wanting to enforce custom model policies and use third-party inference providers.

---

## Developer Pain Points

1. **Authentication credential loss** – OAuth reauth succeeds but credentials are silently dropped for MCP tools (#3838). Erosion of trust in authentication flows.

2. **WSL2 performance regression** – Idle CPU spin at 215% with frozen TUI (#3700). Affects the entire Linux-on-Windows developer population.

3. **Session poisoning** – Malformed attachments cause cascading failures across all subsequent turns (#3791). Single-point-of-failure pattern.

4. **Configuration flag bypass** – `disabled: true` ignored for MCP servers (#3582), `/memory off` ignored for Subconscious (#3859). Users cannot trust their explicit settings.

5. **Cross-platform keyboard shortcuts** – Ctrl+Backspace broken on Windows (#3858), `@` file autocomplete regressions (#3834, #3854). Consistent input experience degrading.

6. **Subagent tool inconsistency** – Subagents lose access to MCP tools (#3812), background subagents bypass hooks (#3013). Security and reliability gaps in agent hierarchies.

7. **Model compatibility fragmentation** – Ollama Cloud, strict OpenAI backends, and effort/plan review format mismatches (#3839, #3846, #3851). Growing maintenance burden as model ecosystem diversifies.

---

*Digest generated from 37 issues and 1 PR updated in the last 24 hours. Data sources: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-19

## Today’s Highlights
The community is actively pushing fixes for network proxy handling and Windows compatibility issues. A key pull request (#2461) directly addresses a long-standing bug where FetchURL fails behind a system proxy by honoring environment variables in aiohttp sessions. Meanwhile, a critical Windows + Git Bash bug (#2462) blocks VS Code extension installation, and a closed feedback issue (#2460) highlights that onboarding and configuration of MCP servers, plugins, and sub-skills remains overly complex.

## Releases
No new releases in the last 24 hours. The latest version remains **1.43.0**.

## Hot Issues (up to 10)

1. **[bug] FetchURL 未读取系统代理 (#2455)**  
   *Author: KuangYin-Z*  
   FetchURL fails to reach external networks when a system proxy is configured, while `curl` works fine. This affects users in restricted environments (e.g., behind enterprise firewalls). The issue has received a PR (#2461) that is now open.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2455)

2. **[Bug] Windows + Git Bash: VS Code extension fails to extract bundled CLI (#2462)**  
   *Author: yplgame*  
   On Windows with Git Bash (MSYS2), the VS Code extension fails because `tar` cannot handle a zip file. This blocks new users on this platform from installing the CLI via the extension.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2462)

3. **[CLOSED] Feedback: onboarding and configuring MCP servers, plugins, and sub-skills is harder than it needs to be (#2460)**  
   *Author: PowerBeef*  
   A user reports that wiring up MCP servers, plugins, and sub-skill bundles works well once set up, but the initial configuration process is cumbersome and lacks guidance.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2460)

## Key PR Progress (up to 10)

1. **fix(net): honour system proxy env vars in aiohttp sessions (#2461)**  
   *Author: logicwu0*  
   This PR fixes #2455 by ensuring all outbound HTTP through `aiohttp` respects `HTTP_PROXY`/`HTTPS_PROXY` environment variables. It covers `FetchURL`, `WebSearch`, and potentially other endpoints.  
   [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2461)

## Feature Request Trends
Based on recent issues, the most requested directions are:
- **Network resilience & proxy support** – Users in restricted environments need proper system proxy handling (driving PR #2461).
- **Simplified onboarding** – The configuration of MCP servers, plugins, and sub-skills is seen as a barrier to entry (#2460).
- **Cross-platform reliability** – Windows + Git Bash issues (#2462) indicate need for better platform detection and installer packaging.

## Developer Pain Points
- **Proxy configuration gaps** – The CLI ignores system proxy settings, forcing users to work around network restrictions manually.
- **Windows + Git Bash installation failure** – A platform-specific bug in the VS Code extension’s extraction logic blocks adoption on a common developer setup.
- **Complex configuration workflow** – Setting up MCP servers and plugins requires too many manual steps, with no guided wizard or documentation improvements.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-19

## Today's Highlights
The community is buzzing over two major developments: a draft PR for a native `/goal` system landed for early review, and a long-standing crash on Alpine Linux (musl) in v1.14.50 remains the most commented issue with no fix in sight. A wave of automated PR cleanups from mid-May are finally being merged, bringing fixes for MCP timeout bugs, config parsing safety, and Windows path normalization.

## Releases
- **None** in the last 24 hours.

## Hot Issues

1. **[#27589](https://github.com/anomalyco/opencode/issues/27589) — TUI fails on Alpine Linux (musl) in 1.14.50: getcontext symbol not found** (35 comments, 12 👍)  
   A regression crash on musl-based systems. Still open after a month; community is eagerly awaiting a libc compatibility fix or a workaround.

2. **[#14289](https://github.com/anomalyco/opencode/issues/14289) — model "claude-opus-4.6" not supported for vision** (19 comments, 5 👍)  
   Recently closed, but indicates broader demand for Anthropic’s latest model. Users want auto-detection of vision capabilities.

3. **[#450](https://github.com/anomalyco/opencode/issues/450) — Support for reasoning_effort parameter in UI** (14 comments, 26 👍)  
   Highly upvoted, now closed. A long-standing feature request — community is relieved to see it resolved.

4. **[#25630](https://github.com/anomalyco/opencode/issues/25630) — Regression: plugin provider.models() hook no longer populates custom providers** (12 comments, 3 👍)  
   A post-#25167 regression breaking custom provider model population. Plugin authors are affected; a fix is needed for v1.14.x.

5. **[#16610](https://github.com/anomalyco/opencode/issues/16610) — Opencode hangs at startup if .git repo present and inotify user instances run out** (11 comments, 7 👍)  
   A startup crash on resource-constrained systems. A fix PR (#32854) just landed — this should be resolved soon.

6. **[#5391](https://github.com/anomalyco/opencode/issues/5391) — [FEATURE]: multiple auth profiles per provider** (11 comments, 31 👍)  
   Very high demand for multi-profile support, especially for enterprise users juggling multiple API keys.

7. **[#8456](https://github.com/anomalyco/opencode/issues/8456) — [FEATURE]: opencode could automatically use different models based on task type** (9 comments, 37 👍)  
   The most upvoted open feature request. Users want dynamic model routing (e.g., cheap models for simple edits, powerful ones for complex reasoning).

8. **[#30680](https://github.com/anomalyco/opencode/issues/30680) — OpenCode immediately enters auto-compaction loop and stops generating responses** (7 comments)  
   A severe bug causing infinite token-consuming loops. Closed but concerning — users report token waste.

9. **[#30877](https://github.com/anomalyco/opencode/issues/30877) — v1.16.0: TUI sidebar "Modified Files" section completely hidden** (5 comments, 8 👍)  
   A UI regression that hides modified files entirely. Likely related to path truncation fixes.

10. **[#28472](https://github.com/anomalyco/opencode/issues/28472) — MCP tool parameters of type "object" are serialized as strings** (4 comments, 1 👍)  
    A subtle MCP interoperability bug causing validation failures for tools expecting nested objects.

## Key PR Progress

1. **[#32924](https://github.com/anomalyco/opencode/pull/32924) — Draft: Add native /goal foundation**  
   A draft introducing a native `/goal` system with state machine, progress summaries, and pursuit loop. Early design review — could reshape how users define session objectives.

2. **[#32922](https://github.com/anomalyco/opencode/pull/32922) — fix: /unshare does not remove share link from TUI display**  
   Fixes a UI ghosting bug where share links persist after `/unshare`. Small but impactful for UX.

3. **[#32914](https://github.com/anomalyco/opencode/pull/32914) — docs: add GMI Cloud provider entry**  
   Expands the provider directory with setup docs for GMI Cloud.

4. **[#32919](https://github.com/anomalyco/opencode/pull/32919) — fix: type safety and code hygiene improvements**  
   Fixes a type safety regression in Copilot chat chunk parsing and cleans up TODOs. Important for reliability.

5. **[#32743](https://github.com/anomalyco/opencode/pull/32743) — feat(session): native per-session goals with /goal and autonomous pursuit**  
   A second implementation of the `/goal` feature (competing with #32924). Adds persist, status management, and auto-pursuit.

6. **[#32854](https://github.com/anomalyco/opencode/pull/32854) — fix(core): tolerate file watcher startup failures**  
   Closes #16610 (inotify crash) by making file watcher failures non-fatal. Merged — a relief for low-inotify systems.

7. **[#28251](https://github.com/anomalyco/opencode/pull/28251) — fix: normalize forward slashes to backslashes for Windows directory matching** (merged)  
   Fixes web UI path normalization issues on Windows. Part of the automated PR cleanup wave.

8. **[#28250](https://github.com/anomalyco/opencode/pull/28250) — fix(config): guard env-var JSON parsing against invalid input** (merged)  
   Prevents startup crashes from malformed env vars like `OPENCODE_PERMISSION`. Security and stability fix.

9. **[#28246](https://github.com/anomalyco/opencode/pull/28246) — fix: pass onprogress to callTool so progressToken is set and long-running MCP tools don't time out** (merged)  
   Critical fix for MCP tools — ensures progress notifications are sent, preventing silent timeouts on long operations.

10. **[#28161](https://github.com/anomalyco/opencode/pull/28161) — fix(tool): prevent crash when plugin tool has invalid or missing args** (merged)  
    Stops crashes from plugins using raw JSON Schema instead of the SDK helper. Defensive fix for the plugin ecosystem.

## Feature Request Trends
- **Task-aware model selection** (#8456, 37 👍) — automatic routing to different models based on task complexity is the most demanded feature.
- **Multi-auth profiles per provider** (#5391, 31 👍) — enterprise users need to switch between API keys/orgs without manual config changes.
- **Recursive skill discovery & multi-skill selection** (#21495, 6 👍) — users want the TUI to explore nested skill directories and allow selecting multiple skills.
- **Progress indicators for MCP calls** (#26328, 1 👍) — growing desire for visual feedback during long-running MCP tool executions.
- **Non-Chinese models in Go subscription** (#32904) — users are asking for broader model availability in the paid Go plan.

## Developer Pain Points
1. **MCP tool parameter serialization bugs** (#28472) — `object` type parameters being sent as strings breaks tool contract expectations, causing validation failures.
2. **File watcher / indexing staleness** (#32747, #32915, #16610) — newly created files often don’t appear in `@` mentions or the TUI sidebar until a restart. Frustrating for iterative editing workflows.
3. **Token waste with auto-compaction loops** (#30680) — some versions enter infinite compaction cycles, consuming API tokens without generating responses. Costly for paid users.
4. **Plugin ecosystem fragility** (#25630, #30855, #28161) — regressions in plugin hooks and SDK compatibility create recurring breakage for third-party developers.
5. **Desktop path persistence bugs** (#30697, #31888) — moved/deleted project paths persist in OpenCode’s state, causing broken open-in-project flows on Windows.
6. **CLI/TUI input latency** (#32859) — on macOS with Apple Silicon, TUI input can lag 5–10 seconds even with no plugins or MCP servers enabled. Affects daily productivity.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-19

## Today's Highlights

Pi v0.79.7 shipped with a highly requested **automatic light/dark theme mode**, enabling per-scheme themes that follow terminal color changes. The community continues to push for multi-session support (Issue #5700) and long-standing compaction bugs remain a top concern. Several important fixes landed for terminal compatibility, including Warp detection and JetBrains capabilities.

## Releases

**v0.79.7** — New Features:
- **Automatic theme mode**: `/settings` now supports separate light and dark themes that automatically follow terminal color-scheme changes. [Documentation](https://github.com/earendil-works/pi/blob/v0.79.7/packages/coding-agent/docs/themes.md#selecting-a-theme)
- **Self-only updates** by default (details truncated in data)

## Hot Issues

1. **#5700 — Support multiple live agent sessions with TUI switching** [OPEN]
   - *Impact*: Users want concurrent background agents; today `switchSession` tears down the current session. 6 comments so far, momentum building.
   - https://github.com/earendil-works/pi/issues/5700

2. **#1278 — `@` file autocomplete should be async/streaming** [CLOSED]
   - *Why it matters*: `@` autocomplete blocks UI on large repos. 14 comments, 16 👍 — strong community demand for non-blocking file completions using `fd` streaming.
   - https://github.com/earendil-works/pi/issues/1278

3. **#2327 — Parallel edit tool calls on same file overwrite each other** [CLOSED]
   - *Pain point*: Concurrent edits silently lose data. Only the last edit persists, causing confusing reverts. 7 comments.
   - https://github.com/earendil-works/pi/issues/2327

4. **#2469 — Clipboard image paste silently fails on WSL** [CLOSED]
   - *Impact*: Screenshot paste (`Ctrl+V`) does nothing on WSL. Affects Windows developers heavily. 6 comments, 4 👍.
   - https://github.com/earendil-works/pi/issues/2469

5. **#5463 — Auto-compaction after final turn throws error** [OPEN]
   - *Why it matters*: Automated compaction fails with `Cannot continue from message role: assistant`, breaking session cleanup. 2 comments, 5 👍 — indicates widespread frustration.
   - https://github.com/earendil-works/pi/issues/5463

6. **#2022 — Cannot disable thinking for Qwen3.5-plus via Anthropic API compatibility** [CLOSED]
   - *Impact*: `reasoning: false` ignored by Aliyun's endpoint. Affects multi-provider users. 5 comments.
   - https://github.com/earendil-works/pi/issues/2022

7. **#2055 — Oversized image in tool result causes infinite error loop** [CLOSED]
   - *Pain point*: Images >5MB remain in history, so every API call fails with 400. 4 comments — no recovery path.
   - https://github.com/earendil-works/pi/issues/2055

8. **#2543 — `tool_execution_start` fires before `beforeToolCall` hook** [CLOSED]
   - *Why it matters*: Blocked tools briefly show as "running" in UI, misleading users. 3 comments.
   - https://github.com/earendil-works/pi/issues/2543

9. **#2567 — Compaction not working with gpt-5-mini on GitHub Copilot** [CLOSED]
   - *Impact*: `'none'` compression level unsupported by gpt-5-mini, crashing sessions. 2 comments.
   - https://github.com/earendil-works/pi/issues/2567

10. **#2550 — Expose `contextUsage` in `get_session_stats` RPC response** [CLOSED]
    - *Why it matters*: RPC users need accurate context window usage; `getContextUsage()` exists but isn't exposed. 2 comments.
    - https://github.com/earendil-works/pi/issues/2550

## Key PR Progress

1. **#5874 — feat(coding-agent): add automatic theme mode** [CLOSED]
   - Enables two-theme light/dark configuration following terminal events. Merged for v0.79.7.
   - https://github.com/earendil-works/pi/pull/5874

2. **#5866 — feat(ai): add OpenRouter Fusion alias** [CLOSED]
   - Adds `openrouter/fusion` synthetic alias matching the existing `openrouter/auto` pattern. Tool-capable filter preserved.
   - https://github.com/earendil-works/pi/pull/5866

3. **#5841 — feat(tui): detect Warp terminal and enable Kitty image protocol** [CLOSED]
   - Detects Warp via `TERM_PROGRAM`, `WARP_SESSION_ID`, or `WARP_TERMINAL_SESSION_UUID` to enable Kitty graphics and OSC 8 links. Fixes #5827.
   - https://github.com/earendil-works/pi/pull/5841

4. **#5884 — fix(ai): handle orphaned tool result messages to prevent Moonshot 400 errors** [CLOSED]
   - Guards against orphaned `tool` role messages; Moonshot AI and strict OpenAI-compatible providers reject them with HTTP 400.
   - https://github.com/earendil-works/pi/pull/5884

5. **#5796 — chore: bump TS target and lib to ES2024, use Promise.withResolvers()** [CLOSED]
   - Removes hand-rolled `Promise.withResolvers()` polyfills; uses native implementation for cleaner code.
   - https://github.com/earendil-works/pi/pull/5796

6. **#5812 — fix(tui): protect pipe characters inside inline code in markdown tables** [CLOSED]
   - Bug fix: `|` inside backticks in table cells were treated as column delimiters, dropping content.
   - https://github.com/earendil-works/pi/pull/5812

7. **#5756 — feat(coding-agent): Expose edit-diff for extensions** [CLOSED]
   - Closes #5755 — allows extensions to receive diff output from edit operations.
   - https://github.com/earendil-works/pi/pull/5756

8. **#5873 — Feat/fireworks glm 5p2** [CLOSED]
   - Adds GLM 5p2 support for Fireworks provider. Closes #5872.
   - https://github.com/earendil-works/pi/pull/5873

9. **#5869 — Export config dirname** [CLOSED]
   - Exports configuration directory name for extension use. Closes #5867.
   - https://github.com/earendil-works/pi/pull/5869

10. **#5846 — fix(tui): stabilize streaming code fence rendering** [OPEN]
    - Addresses #5825 — ongoing fix for code fence rendering flicker during streaming.
    - https://github.com/earendil-works/pi/pull/5846

## Feature Request Trends

- **Multi-session concurrency**: Multiple users requesting background agent sessions with TUI switching (#5700, related discussions)
- **Export and theming improvements**: Better HTML export respecting `export.pageBg`, theme name alignment between file and content (#2565, #4830)
- **Provider-specific enhancements**: OpenRouter Fusion alias (#5866), Mistral prompt caching (#5854), GLM 5p2 support (#5873)
- **Terminal ecosystem expansion**: JetBrains terminal capabilities (#5037), Warp terminal detection (#5841), Termux keyboard handling (#2467)
- **Extension API depth**: Expose diff for edits (#5756), export `ToolCallEventResult` types (#2458), expose `contextUsage` in RPC (#2550)

## Developer Pain Points

- **Compaction fragility**: Auto-compaction errors after final turn (#5463) and model-specific compaction failures (#2567) top the frustration list
- **Tool call race conditions**: Parallel edits overwrite each other (#2327), `tool_execution_start` firing before block hooks (#2543), and conflict detection gaps (#2557)
- **API provider inconsistencies**: Orphaned tool messages rejected by Moonshot (#5884), thinking mode issues with Qwen (#2022) and Gemini (#2490)
- **Cross-platform regressions**: WSL clipboard paste broken (#2469), Termux redraw on keyboard toggle (#2467), split terminal crashes (#2569)
- **Extension integration gaps**: Built-in tool renderers silently override custom ones (#2595), missing `session_shutdown` in print/JSON modes (#2576), auto-complete UX regressions (#2455, #2577)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-19

## Today's Highlights
This week's digest is dominated by a surge in bug-fix contributions from `tt-a1i`, who submitted 10+ issues and PRs targeting edge cases in token storage, file search caching, session metadata parsing, and MCP OAuth handling. The community also saw important progress on Windows-specific fixes (empty `(session)` entries and tilde path expansion) and a critical OOM fix after `/quit` when auto-memory builds transcripts from large histories. A new QQ Bot channel adapter PR demonstrates growing interest in multi-platform integration.

## Releases
- **v0.18.3-nightly.20260618.bc3e0b405** — chore release with a fix for tracking supported `sed` edits in file history. No stable release.

## Hot Issues
1. **[#4479 — Token daily usage statistics](https://github.com/QwenLM/qwen-code/issues/4479)** [CLOSED] — User requested a feature to track daily token consumption after discovering a single session used 30M tokens. High engagement (16 comments) indicates strong demand for usage transparency. Marked `welcome-pr`.

2. **[#4987 — PR #4779 silently reverted #4652](https://github.com/QwenLM/qwen-code/issues/4987)** [CLOSED] — A merged IME cursor positioning feature was accidentally rolled back during a merge conflict resolution. The community flagged this as a process failure, leading to a follow-up fix PR #4993.

3. **[#5261 — Collapsible thinking block missing expand shortcut](https://github.com/QwenLM/qwen-code/issues/5261)** [CLOSED] — After v0.18.2 introduced collapsible thinking blocks with duration timers, users found no way to expand them. Only "Thought for 1s" was visible. Marked `welcome-pr`.

4. **[#5147 — OOM after /quit with auto-memory](https://github.com/QwenLM/qwen-code/issues/5147)** [CLOSED] — Even after previous fixes, short sessions could OOM on `/quit` when managed auto-memory built transcripts from full history. The root cause was in `buildTranscriptMessages()`, now addressed by PR #5181.

5. **[#5201 — QQ Bot channel adapter](https://github.com/QwenLM/qwen-code/issues/5201)** [CLOSED] — A PR-ready feature request for a QQ Bot channel adapter, complete with WebSocket Gateway support. Shows strong community interest in Asian messaging platforms alongside existing Telegram/WeChat/Feishu.

6. **[#5365 — FileTokenStorage fails on first save](https://github.com/QwenLM/qwen-code/issues/5365)** [OPEN] — The `setCredentials` method cannot create a token file on first save because `loadTokens` throws when the file doesn't exist. A clean bug with an associated fix PR #5367. Ready for agent.

7. **[#5370 — Grep drops matches from colon-containing paths](https://github.com/QwenLM/qwen-code/issues/5370)** [OPEN] — The grep output parser splits at colons, so file paths containing colons (e.g., `dir:name/file.txt`) cause valid matches to be dropped. A latent issue for projects with unusual directory names.

8. **[#5368 — MCP/extension commands ignore untrusted workspace state](https://github.com/QwenLM/qwen-code/issues/5368)** [OPEN] — A security concern: `isWorkspaceTrusted()` returns an object, but several CLI paths treat it as a boolean, making both trusted and untrusted states resolve to `true`. Fix PR #5369.

9. **[#5244 — Extra `(session)` entries on Windows](https://github.com/QwenLM/qwen-code/issues/5244)** [CLOSED] — After using skill/tool tasks on Windows desktop, spurious empty `(session)` conversations appear in the session list. Fix PR #5245 addresses both this and tilde path expansion.

10. **[#5281 — TUI unresponsive on systemd-inhibit authentication](https://github.com/QwenLM/qwen-code/issues/5281)** [CLOSED] — On headless Linux systems, the new sleep-inhibition feature triggers a PolKit password prompt that corrupts the TUI. Fix PR #5318 adds `--no-ask-password`.

## Key PR Progress
1. **[#5369 — Preserve workspace trust state for extensions](https://github.com/QwenLM/qwen-code/pull/5369)** [OPEN] — Fixes #5368 by passing the actual `TrustResult.isTrusted` value to ExtensionManager. Includes MCP list/reconnect regression tests.

2. **[#5360 — Expire tokens at buffer boundary](https://github.com/QwenLM/qwen-code/pull/5360)** [OPEN] — Aligns `BaseTokenStorage` with `MCPOAuthTokenStorage` so tokens expire at exact 5-minute refresh buffer boundary. Adds boundary tests.

3. **[#5318 — Pass `--no-ask-password` to systemd-inhibit](https://github.com/QwenLM/qwen-code/pull/5318)** [OPEN] — Prevents TUI corruption by avoiding PolKit authentication prompts during sleep inhibition. Addresses issue #5281.

4. **[#5367 — Create token file on first save](https://github.com/QwenLM/qwen-code/pull/5367)** [OPEN] — Allows `FileTokenStorage` to start from an empty token map when the token file doesn't exist. Covers encrypted storage. Fixes #5365.

5. **[#5319 — Rename TodoWrite to TodoList](https://github.com/QwenLM/qwen-code/pull/5319)** [CLOSED] — User-facing display name change across TUI badge, web-shell, and webui. Wire/schema name `todo_write` unchanged.

6. **[#5245 — Hide empty native sessions on Windows](https://github.com/QwenLM/qwen-code/pull/5245)** [OPEN] — Two fixes: tilde (`~\`) path expansion on Windows and filtering out empty tool/spawn sessions from the session list. Addresses #5244.

7. **[#5181 — Prevent OOM in auto-memory during /quit](https://github.com/QwenLM/qwen-code/pull/5181)** [CLOSED] — Fixes `heap limit` crash by limiting `buildTranscriptMessages()` to the last 100 messages instead of full history. Priority P1.

8. **[#5353 — Support whitespace in session metadata fields](https://github.com/QwenLM/qwen-code/pull/5353)** [CLOSED] — Fixes #5350 by relaxing lightweight session JSON field extraction to tolerate spaces/tabs around colons.

9. **[#5364 — Avoid glob prefix cache reuse](https://github.com/QwenLM/qwen-code/pull/5364)** [OPEN] — Fixes #5363 where file search cache reused results for `*.js` after `*` queries. Uses picomatch scanner for glob-aware cache invalidation.

10. **[#5221 — Fall back to encrypted-file storage for extension secrets](https://github.com/QwenLM/qwen-code/pull/5221)** [CLOSED] — When OS keychain is unavailable, sensitive extension settings now fall back to AES-256-GCM encrypted file storage. Adds `SecretStorage` interface.

## Feature Request Trends
- **Token usage transparency** — Users want daily/weekly token consumption dashboards, especially after discovering unexpectedly high usage (30M tokens per session).
- **Multi-platform channel adapters** — The QQ Bot proposal (PR-ready) joins existing Telegram/WeChat/Feishu adapters, signaling demand for Asian messaging platforms.
- **Estimated response time** — A customization flag to show/hide remaining generation time (issue #5366), building on recently added features.
- **Interactive extension manager** — PR #4850 proposes a multi-tab `/extensions` manager (Installed/Discover/Sources), moving beyond flat read-only lists.

## Developer Pain Points
- **Unintended silent reverts** — Issue #4987 highlights a process failure where a merged feature was rolled back inside an unrelated PR without explanation. The community called for better conflict resolution discipline.
- **Mac trackpad in tmux** — Issue #5159: trackpad scroll cycles through prompt history instead of scrolling viewport when running inside tmux on macOS.
- **Input parsing fragility** — Multiple issues (#5348, #5313, #5304, #5322, #5329) surfaced around malformed cron fields, timeout strings, OSC codes, MCP named arguments, and stdin byte counting — all indicating weak input validation.
- **Session list pollution** — On Windows, tool/skill tasks create spurious empty `(session)` entries (#5244), confusing users with non-existent conversations.
- **OOM on session exit** — Despite prior fixes, auto-memory transcript building after `/quit` still crashed with heap OOM (#5147), finally resolved in PR #5181 by capping message history to 100 entries.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-19

## Today's Highlights

The project has officially rebranded to **CodeWhale** (v0.8.62), with the legacy `deepseek-tui` npm package deprecated and receiving no further releases. A major wave of refactoring issues (#3306–#3314) signals a decisive push toward architectural cleanup ahead of v0.9.0, while persistent reliability issues—particularly UI freezes and stuck turns—remain the top community pain points. A cluster of 12 PRs merged today tackles critical fixes ranging from session data loss during crash recovery to Plan/Agent mode toggle inconsistencies.

## Releases

**v0.8.62** was published in the last 24 hours. The key change is the **CodeWhale rebrand** — `codewhale` is now the canonical project, command, npm package, and release-asset name. The legacy `deepseek-tui` npm package is deprecated with no further releases; users on v0.8.x legacy `deepseek` / `deepseek-tui` names are directed to `docs/REBRAND.md` for migration instructions.

🗂️ [View Release](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.62)

---

## Hot Issues

### 1. [#2487 — "Turn stalled – no completion signal received"](https://github.com/Hmbown/CodeWhale/issues/2487)
**Severity:** Critical — 16 comments, 1 👍  
**Why it matters:** The highest-engagement open issue. `yolo` mode freezes and becomes completely unresponsive; even `continue` cannot resume operations. The error message itself `<Pleasetry again>` (missing space) suggests a formatting bug compounding the UX failure. Community frustration is evident — this has been open since June 1 with no confirmed fix.

### 2. [#1812 — TUI freeze on Windows (crossterm poll)](https://github.com/Hmbown/CodeWhale/issues/1812)
**Severity:** High — 7 comments  
**Why it matters:** Intermittent hard freezes on Windows 11 where the UI becomes completely unresponsive (no keyboard input, no screen updates) while the process stays alive. Two documented events with thread-state analysis. Root cause appears to be crossterm's poll mechanism. Affects the entire Windows user base.

### 3. [#3275 — Agent self-questioning/self-answering regression](https://github.com/Hmbown/CodeWhale/issues/3275)
**Severity:** High — 5 comments  
**Why it matters:** Reports that CodeWhale over-extends scope beyond user intent, entering a self-driven loop of proposing, answering, and executing without waiting for confirmation. Tagged as a regression from #3061. This is a trust-and-safety issue — if the agent simulates user approval, it undermines the entire permission model. A fix PR (#3290) was already merged today.

### 4. [#3289 — UI freeze after auto-spawning sub-agents](https://github.com/Hmbown/CodeWhale/issues/3289)
**Severity:** High — 4 comments  
**Why it matters:** Plan mode triggers sub-agent spawning, which then causes a hard UI freeze. Combines two major pain points: sub-agent reliability and the TUI freezing problem. Only filed yesterday — expect more duplicates.

### 5. [#2739 — Task execution stuck in infinite wait loop](https://github.com/Hmbown/CodeWhale/issues/2739)
**Severity:** High — 4 comments  
**Why it matters:** User reports the tool has been "unusable" since v0.8.51 due to frequent freezing during long tasks. Esc brings a timeout error, `continue` loses all session history on resume. A fix PR (#3285) was merged today specifically for the data-loss portion.

### 6. [#3240 — Legacy `.deepseek` config directory still created](https://github.com/Hmbown/CodeWhale/issues/3240)
**Severity:** Medium — 3 comments  
**Why it matters:** Despite the CodeWhale rebrand, the program still creates `.deepseek` directories at runtime. On Windows, both `.codewhale` and `.deepseek` folders appear. Small but annoying — incomplete migration.

### 7. [#3238 — glibc mismatch on Ubuntu 22.04 LTS](https://github.com/Hmbown/CodeWhale/issues/3238)
**Severity:** Medium — 3 comments  
**Why it matters:** Prevents installation on a widely-used LTS distro. The bundled binary requires a newer glibc than Ubuntu 22.04 provides. A musl static build PR (#3274) was merged today specifically to address this.

### 8. [#3273 — `js_execution` Node fetch ignores proxy config on Windows](https://github.com/Hmbown/CodeWhale/issues/3273)
**Severity:** Medium — 2 comments  
**Why it matters:** Corporate/VPN users on Windows cannot use the `js_execution` tool for network operations, even when shell tools work fine through the same proxy. The built-in Undici client doesn't honor environment proxy variables.

### 9. [#2900 — DSML output as plain text, context overflow](https://github.com/Hmbown/CodeWhale/issues/2900)
**Severity:** High — 2 comments  
**Why it matters:** The model sometimes outputs DSML (tool calls) as plain text instead of executing them, causing massive context overflow. The output can run for minutes. This undermines the core agent workflow — if tool calls aren't reliably parsed, the agent is broken.

### 10. [#1917 — Universal PreToolUse/PostToolUse hook layer proposal](https://github.com/Hmbown/CodeWhale/issues/1917)
**Severity:** Architectural — 4 comments  
**Why it matters:** Proposes a unifying lifecycle layer for Cancel/Pause/Resume across all action types. If implemented, this would solve many of the freezing/stalling issues at the architectural level rather than with targeted patches. High community interest as a v0.9.0 candidate.

---

## Key PR Progress

### 1. [#3285 — Fix: persist session before stall/cancel recovery](https://github.com/Hmbown/CodeWhale/pull/3285)
**Status:** ✅ Merged  
**Impact:** High. Fixes the data-loss portion of #2739 — session history is now saved before stall recovery, so `--continue` preserves in-progress turns after a crash or Esc-cancel.

### 2. [#3290 — Add scope_discipline rules to prevent self-questioning loops](https://github.com/Hmbown/CodeWhale/pull/3290)
**Status:** ✅ Merged  
**Impact:** High. Direct fix for #3275. Adds prompt-level rules to the agent constitution to prevent self-questioning/self-answering behavior. Only 47 lines, but addresses a trust-and-safety regression.

### 3. [#3283 — Fix Plan/Agent mode toggle: approval_mode restore + auto-execution guard](https://github.com/Hmbown/CodeWhale/pull/3283)
**Status:** ✅ Merged  
**Impact:** High. Two bugs fixed: `approval_mode` not restored after Plan→Agent switch, and auto-execution not gated in Agent mode. Fixes #3279.

### 4. [#3274 — Build static Linux x64 binaries with musl](https://github.com/Hmbown/CodeWhale/pull/3274)
**Status:** ✅ Merged  
**Impact:** High. Resolves #3238 and broader glibc compatibility issues on older Linux distros. Switches GitHub Actions release builds from dynamic glibc to static musl.

### 5. [#3300 — Preserve thinking/tool blocks when seeding thread from session](https://github.com/Hmbown/CodeWhale/pull/3300)
**Status:** 🟢 Open  
**Impact:** Medium. Replaces text-only thread seeding with block-type-aware implementation, preserving `Thinking`, `ToolUse`, `ToolResult` blocks. Important for conversation reconstruction fidelity.

### 6. [#3301 — Save ask permission rules from approvals](https://github.com/Hmbown/CodeWhale/pull/3301)
**Status:** 🟢 Open  
**Impact:** Medium. Adds UI action to persist shell approval as `permissions.toml` ask rules. Shows TOML preview in the approval modal. Addresses the "approval fatigue" problem — users can now save permissions for reuse.

### 7. [#3296 — Gate cross-tool skill discovery](https://github.com/Hmbown/CodeWhale/pull/3296)
**Status:** ✅ Merged  
**Impact:** Medium. Adds `[skills].scan_codewhale_only` config to scope skill discovery to CodeWhale roots. Helps users who want faster startup and less noise from unrelated system files.

### 8. [#3286 — Ensure `type:object` on Kimi parameters root for all schema shapes](https://github.com/Hmbown/CodeWhale/pull/3286)
**Status:** ✅ Merged  
**Impact:** Medium. Fixes #3281 — Kimi/Moonshot API rejects calls when `$ref`/`anyOf`/`allOf` root schemas lack `type:object`. A subtle but breaking bug for Moonshot provider users.

### 9. [#3295 — Honor ask permission rules at runtime](https://github.com/Hmbown/CodeWhale/pull/3295)
**Status:** ✅ Merged  
**Impact:** Medium. Wires `permissions.toml` ask-rules into the TUI runtime approval path. Complements #3301 — without this, saved rules had no effect.

### 10. [#3317 — Fix: tear down delegated serve/app-server child on dispatcher exit](https://github.com/Hmbown/CodeWhale/pull/3317)
**Status:** 🟢 Open  
**Impact:** Medium. Prevents orphaned `codewhale-tui` listener processes when the dispatcher is killed. Addresses process lifecycle hygiene — important for server-mode reliability.

---

## Feature Request Trends

1. **Architectural Refactoring (v0.9.0 preparation)**
   A coordinated cluster of 9 issues (#3306–#3314) all filed today proposes splitting large Rust monoliths into owned modules. Targets include `app.rs` (god object ~150 fields), `runtime_threads.rs` (~2,400 lines impl), `mcp.rs`, `history.rs`, `config.rs` (~9,400 lines), and `runtime_api.rs`. This is clearly a planned v0.9.0 cleanup sprint — not organic feature requests but project-led technical debt reduction.

2. **Sub-agent Runtime Controls**
   #3304 specifically requests making sub-agent recursion/concurrency limits editable from the TUI rather than buried in config files. This reflects growing sub-agent usage and the need for runtime governance.

3. **WhaleFlow: Async Executor & Synthesis Pass**
   #2973 and #3230 push for the production WhaleFlow async executor (replacing the mock) and a reduce/synthesis pass for multi-worker outputs. This is the flagship v0.9.0 feature — bounded concurrent branches, cooperative cancellation, and token/cost budgets.

4. **User-Input Provenance Enforcement**
   #3315 calls for enforcing real user-input provenance for `write` and `continue` approvals — a direct response to the self-questioning regression (#3275). Community concern about agent-generated "approval" text is driving demand for cryptographic or at least verifiable provenance tracking.

5. **Provider Registry Extraction**
   #2608 proposes extracting the provider registry from ballooning config files (9,402 lines in `tui/src/config.rs` alone) into a dedicated crate or registry. Every new provider requires touching 15-30 match arms — a clear scaling bottleneck.

---

## Developer Pain Points

1. **TUI Freezes / Stalled Turns (Highest frequency)**
   Issues #2487, #1812, #3289, #2739 — this single category accounts for the most community complaints. The freeze is platform-independent (Windows, Linux, macOS) and occurs in both `yolo` and normal modes. Users report becoming completely blocked, unable to recover sessions. Despite targeted fixes (#3285), the root cause appears systemic, not a single bug.

2. **Session/Crash Data Loss**
   Closely related to freezes — when users Esc to cancel a stuck turn, `--continue` loads a previous session, losing all work. #2739 expresses extreme frustration ("实在无法忍受，只能放弃使用"). The fix in #3285 is welcome but partial.

3. **Agent Scope Control Failures**
   #3275 and its parent #3061 reveal that the agent over-extends scope without user confirmation, even simulating approval language. This erodes trust and is a harder problem than simple prompt tweaks — it requires architectural provenance enforcement (#3315).

4. **Mode Toggle and Permission Inconsistency**
   #3279 documents a confusing bug where Plan→Agent mode switches don't properly restore approval settings. The fix (#3283) was quick, but the UX pattern itself (mode-based permission sets) creates confusion — users don't intuitively understand why their approvals change between modes.

5. **Configuration/Package Migration Friction**
   #3240 (legacy `.deepseek` directory still created) and the broader rebrand (#2487 mentions "Pleasetry again" formatting bugs) suggest the CodeWhale migration has rough edges. Users on legacy names find broken references, and the dual-directory config adds confusion for existing users.

6. **Provider Compatibility Issues**
   Multiple provider-specific bugs persist: Moonshot/Kimi schema rejection (#3281), OpenCode Go/Zen provider request (#1481), proxy unfriendliness for `js_execution` on Windows (#3273). Each new provider integration adds surface area for configuration bloat (#2608).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*