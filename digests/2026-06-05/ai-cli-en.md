# AI CLI Tools Community Digest 2026-06-05

> Generated: 2026-06-05 00:28 UTC | Tools covered: 9

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

# AI CLI Developer Tools: Cross-Tool Comparison Report
**Date:** 2026-06-05

---

## 1. Ecosystem Overview

The AI CLI developer tools ecosystem continues to mature rapidly, with seven major tools now competing across overlapping but distinct user segments. Claude Code remains the most feature-rich and enterprise-focused tool, while Codex CLI leads in release velocity and desktop app distribution. Gemini CLI and Kimi Code represent platform-vendor offerings with tighter model integration, and OpenCode, Pi, Qwen Code, and DeepSeek TUI form a growing open-source middle tier. The community is converging around several shared priorities: persistent memory systems, cross-platform stability, multi-agent coordination, and plugin/skill extensibility. However, each tool faces distinct platform reliability challenges—Windows/WSL issues appear across Claude Code, Codex, Gemini CLI, Copilot CLI, and Kimi Code—indicating that cross-platform maturity remains the ecosystem's weakest link.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Latest Release | Release Cadence |
|------|-------------|-----------|----------------|-----------------|
| **Claude Code** | 10 hot issues | 8 PRs | v2.1.163 (recent) | Weekly patch, monthly features |
| **Codex CLI** | 10 hot issues | 10 PRs | rust-v0.137.0 + 4 alphas | Daily alpha, weekly stable |
| **Gemini CLI** | 10 hot issues | 10 PRs | v0.45.1 (stable), v0.47.0-nightly | Weekly stable, nightly |
| **Copilot CLI** | 10 hot issues | 1 PR (spam) | v1.0.60-0 | Bi-weekly |
| **Kimi Code** | 10 hot issues | 6 PRs | v1.46.0 | Stalled (no release today) |
| **OpenCode** | 10 hot issues | 10 PRs | No release today | Weekly |
| **Pi** | 10 hot issues | 10 PRs | v0.78.1 | Weekly |
| **Qwen Code** | 10 hot issues | 10 PRs | v0.17.1-nightly | Nightly builds |
| **DeepSeek TUI** | 10 hot issues | 10 PRs | v0.8.53 | Bi-weekly |

**Key observations:**
- **Codex CLI**, **Qwen Code**, and **DeepSeek TUI** show the highest PR velocity, indicating active development cycles.
- **Copilot CLI** has near-zero PR activity—issue resolution is falling behind community complaints.
- **Kimi Code** has stalled releases while accumulating critical bugs (403 authentication failures, performance regressions).
- **OpenCode** and **Pi** maintain steady weekly cadences; OpenCode is contributor-heavy while Pi is maintainer-driven.

---

## 3. Shared Feature Directions

### 3.1 Persistent Cross-Session Memory (5 tools)
- **Claude Code** (#6235, 4,060👍): AGENTS.md standard adoption
- **Qwen Code** (#4747, #4764): `~/.qwen/memories/` user-level auto-memory
- **OpenCode** (implied by session loss bugs): Event-sourced session persistence
- **Kimi Code** (#2421, PR #2388): Pasted text placeholder persistence
- **Copilot CLI** (#3596): Session resume authentication retention

**Signal:** Users expect AI tools to "remember" preferences, working style, and project context across sessions and tools. This is emerging as table stakes for professional adoption.

### 3.2 Multi-Agent Coordination & Worker Management (5 tools)
- **Claude Code** (#55586, #47930, #54393): Duplicate workers, token waste, coordination failures
- **Codex CLI** (#16900): Parent-child wait mechanism for subagents
- **Gemini CLI** (#22323, #21409): Subagent false success, agent hangs
- **OpenCode** (#17169): Subagent infinite retry loops ($15+/invocation)
- **DeepSeek TUI** (#2666): Token/context/resource visibility for agents

**Signal:** Multi-agent workflows are being adopted faster than reliability engineering can support them. Tools are shipping agent teams before solving basic coordination, spawning duplicates, infinite retries, and cost blowups.

### 3.3 Plugin/Skill Ecosystem Maturity (5 tools)
- **Claude Code** (PR #62099, PR #65286): Credential-guard plugin, plugin manifest fixes
- **Codex CLI** (#26431): Plugin pull frequency optimization
- **Copilot CLI** (#3659, #3664): Windows hooks broken (PowerShell, `~` expansion)
- **Qwen Code** (#4723): Rules/instructions support question
- **DeepSeek TUI** (#2743, PR #2737): Claude Code skill compatibility, workspace skill union

**Signal:** Plugins are becoming critical infrastructure, but hook execution, permission models, and cross-tool compatibility remain immature. Users want write-once, run-anywhere skills.

### 3.4 Platform Stability: Windows/WSL (6 tools—all major)
- **Claude Code** (#53940, #59750): File truncation, TUI unresponsive
- **Codex CLI** (#25715, #26149, #25391): WSL slowness, sandbox bootstrap, plugin scanning
- **Gemini CLI** (#27572, #27502): PTY crashes, tmux detection
- **Copilot CLI** (#3659, #3664, #3260): PowerShell hooks, `~` expansion, clipboard
- **Kimi Code** (#2427, #2430): 403 errors on WSL2, auto-logout
- **OpenCode** (#27589): Alpine Linux (musl) TUI failure

**Signal:** Windows/Linux cross-platform support is the ecosystem's biggest reliability gap. Desktop app users on macOS are also affected by crash loops (Codex #25882) and session loss.

### 3.5 Context Window Management (4 tools)
- **Copilot CLI** (#3677): Wrong model blob → premature compaction
- **OpenCode** (#30811): Code quality degradation in long sessions
- **Qwen Code** (#4264): `/compress-fast` non-AI compression
- **DeepSeek TUI** (#2666): Token budget visibility for agents

**Signal:** As context windows grow (1M+ tokens), users need transparency and control over how context is consumed, compressed, and prioritized.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | Codex CLI | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|-----------|------------|-------------|-----------|----------|-----|-----------|--------------|
| **Target User** | Enterprise teams | Individual devs, power users | Google ecosystem | GitHub ecosystem | Chinese market | Open-source enthusiasts | Tinkerers, multi-provider | Qwen model users | TUI power users |
| **Model Strategy** | Claude-only (Anthropic) | OpenAI models + plugins | Gemini-only | Multi-model (copilot ecosystem) | Moonshot AI models | Multi-provider | Multi-provider | Qwen models | Multi-provider |
| **Key Differentiator** | Agent Teams, enterprise compliance | Desktop app, Rust CLI, plugin directory | Google Cloud integration | GitHub Copilot + BYOK | Chinese market UX | Event-sourced V2 refactor | Lightweight, extensible | Daemon/ACP protocol | PlanArtifact, skill compatibility |
| **Release Philosophy** | Conservative, enterprise-stable | Aggressive alpha → stable | Nightly + stable patch | Slow, bi-weekly | Stalled | Weekly, community PRs | Weekly, maintainer-driven | Nightly builds | Bi-weekly, feature-branch heavy |
| **Platform Support** | macOS (best), Linux, Windows (broken) | macOS (best), WSL (broken), Linux | macOS, Linux, WSL2 | Cross-platform | Windows, WSL2 | macOS, Linux, Windows | macOS, Linux | macOS, Linux, WSL | macOS, Linux |
| **Plugin Model** | Plugin registry + hooks | Plugin directory + MCP | Skills + sub-agents | Hooks + plugins | Extension-inconsistent | No plugin system | Extension API | Skills | Skills + MCP |

**Key differentiation insights:**
- **Claude Code** and **Codex CLI** lead in feature completeness but suffer from complexity and reliability tax.
- **Pi** and **OpenCode** win on extensibility and multi-provider support but lack enterprise governance.
- **Qwen Code** is strategically investing in daemon/ACP protocol for editor-agnostic serving—a unique long-term bet.
- **DeepSeek TUI** takes a "PlanArtifact-first" approach to multi-agent orchestration, differentiating from Claude's agent teams.
- **Copilot CLI** and **Gemini CLI** are platform-vendor offerings that benefit from ecosystem lock-in but lag in community-driven innovation.

---

## 5. Community Momentum & Maturity

### Highest Momentum (Rapid iteration, growing communities)
- **DeepSeek TUI**: 27 PRs updated in 24h, ambitious feature branches (multi-tab, PlanArtifact, pausable commands), strong maintainer-driven velocity
- **Qwen Code**: Nightly builds, fast issue-to-PR turnaround (#4747→#4764 same day), daemon/ACP investment
- **Codex CLI**: Daily alpha releases, 10 PRs/day, high community engagement on Windows/WSL issues

### Stable Maturity (Enterprise-grade, slower iteration)
- **Claude Code**: Most features, strongest enterprise tooling (version gating, compliance), but accumulating technical debt in agent coordination
- **Pi**: Steady weekly releases, solid extension API, multi-provider breadth—but small community relative to competitors

### At Risk (Declining PR velocity, unresolved critical bugs)
- **Copilot CLI**: 1 PR (spam) in 24h, 10 critical issues (clipboard, plugins, auth), near-zero maintainer activity
- **Kimi Code**: Stalled releases, no new release today, 403 auth errors blocking all users, performance regressions
- **OpenCode**: Strong issue activity but memory leaks (#20695, 89 comments) and security bypasses (#30783–30814) remain unpatched

### Community Size & Engagement (Estimated)
| Tool | GitHub Stars | Issue Velocity | PR Velocity | Community Stickiness |
|------|-------------|----------------|-------------|---------------------|
| Claude Code | High | High | Medium | High (enterprise lock-in) |
| Codex CLI | Very High | High | Very High | High (OpenAI brand) |
| Copilot CLI | High | Medium | Low | Medium (GitHub ecosystem) |
| OpenCode | Medium | High | Medium | Medium (OSS contributors) |
| Gemini CLI | Medium | Medium | Medium | Low (Google captive) |
| Qwen Code | Medium-High | Medium | High | Growing (Chinese market) |
| Pi | Low | Low | Medium | Small but dedicated |
| Kimi Code | Low-Medium | Medium | Low | Shrinking (bugs) |
| DeepSeek TUI | Low-Medium | Low | Very High | Small but rapidly growing |

---

## 6. Trend Signals

### Cross-Tool Industry Trends

1. **"Memory is the new table stakes"** — Every major tool is adding persistent cross-session memory (AGENTS.md, auto-memory directories, event-sourced sessions). Users expect AI agents to learn preferences once and apply them everywhere. This is becoming a non-negotiable feature for professional adoption.

2. **Multi-agent reliability is the top risk** — Tools are shipping agent teams faster than they can debug them. Duplicate spawns (Claude Code #55586: 10–150x duplicates), infinite retry loops (OpenCode #17169: $15+/invocation), and false success reporting (Gemini CLI #22323) indicate the industry is in a "move fast and break agents" phase. Users are absorbing cost blowups.

3. **Byok (bring-your-own-key) and multi-provider support is splitting the market** — Tools that support any model (Pi, OpenCode, DeepSeek TUI) appeal to cost-conscious power users, while vendor-locked tools (Claude Code, Gemini CLI, Kimi Code) win on integration quality. The BYOK tools are growing but face provider compatibility bugs (Pi #5331, #5349).

4. **Plugin/skill ecosystem is converging on Claude Code compatibility** — DeepSeek TUI (#2743) and Qwen Code (#4723) are explicitly asking for Claude Code skill/rules compatibility. Users want a portable skill format, not tool-specific DSLs. This could become a de facto standard.

5. **Windows/WSL remains the ecosystem's weakest link** — Every tool has critical platform bugs on Windows, WSL2, or Linux Terminal. Cross-platform testing is clearly insufficient. Enterprise adoption will stall until this is addressed.

6. **Token transparency is becoming a user demand** — Users want visibility into token budgets, context pressure, and cost per invocation (Qwen #4264, DeepSeek #2666, OpenCode #30811). Tools that expose these metrics will earn trust; those that hide them will face backlash.

7. **CI/CD integration maturity is uneven** — Headless/CI mode documentation is missing (Claude Code #41794), desktop apps crash on startup (Codex #27530), and session persistence fails on restart (Claude Code #44742). Developers want to run AI tools in automated pipelines, but reliability is not yet there.

### Recommendations for Developers

- **For enterprise deployment:** Claude Code offers the best compliance tooling (version gating, managed settings) but requires Windows/WSL mitigation. Consider Pi as a lightweight alternative for simple workflows.
- **For multi-model workflows:** OpenCode and Pi provide the broadest provider support; DeepSeek TUI is rapidly improving for TUI-intensive users.
- **For plugin/skill development:** Target Claude Code's plugin format as the de facto standard—DeepSeek TUI and Qwen Code are both adding compatibility.
- **For Linux/Windows users:** Avoid Kimi Code (stalled, auth errors) and Copilot CLI (critical regressions). Qwen Code and Codex CLI have active bug-fix cycles but expect friction.
- **For cost-sensitive users:** Monitor OpenCode and Pi for BYOK pricing flexibility; avoid tools with subagent infinite retry loops that cause unbounded API bills.

### The Verdict

The AI CLI tools ecosystem is in a consolidation phase: feature velocity is high, but reliability is lagging. The tools that win will be those that solve **persistent memory**, **multi-agent reliability**, and **cross-platform stability** simultaneously. No tool achieves all three today. The next 6–12 months will separate the contenders from the also-rans.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the Claude Code Skills community highlights report, based on the data provided.

---

## Claude Code Skills Community Report — 2026-06-05

### 1. Top Skills Ranking

The following pull requests have attracted the most community discussion and attention, indicating high interest in their respective domains.

1.  **document-typography skill** | PR [#514](https://github.com/anthropics/skills/pull/514)
    - **Functionality:** Prevents common typographic issues in AI-generated documents, such as orphan word wrap, widow paragraphs, and numbering misalignment.
    - **Discussion:** The problem it solves is universally acknowledged, but the community is debating the most effective way to instruct Claude on these subtle formatting rules without being overly prescriptive. The discussion centers on balancing specificity with generalizability across different document types.
    - **Status:** Open. Created 2026-03-04, last updated 2026-03-13.

2.  **ODT skill (OpenDocument)** | PR [#486](https://github.com/anthropics/skills/pull/486)
    - **Functionality:** Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods).
    - **Discussion:** High demand for direct interoperability with LibreOffice and open-source document standards. The community is discussing the complexity of template filling and the need to handle formatting during conversion.
    - **Status:** Open. Created 2026-03-01, last updated 2026-04-14.

3.  **skill-quality-analyzer & skill-security-analyzer** | PR [#83](https://github.com/anthropics/skills/pull/83)
    - **Functionality:** Meta-skills that evaluate other skills for quality (structure, documentation, examples) and security vulnerabilities.
    - **Discussion:** This is a highly active conversation about tooling for the ecosystem itself. The community is debating the scoring rubric and what constitutes a definitive "security" check for a skill. It represents a demand for governance and quality control.
    - **Status:** Open. Created 2025-11-06, last updated 2026-01-07.

4.  **Testing Patterns skill** | PR [#723](https://github.com/anthropics/skills/pull/723)
    - **Functionality:** A comprehensive skill for test generation, covering the Testing Trophy model, unit tests, and React component testing.
    - **Discussion:** One of the most sought-after skill categories. The community is reviewing the breadth of the content (philosophy to code) and requesting more specific guidance for mocking, integration tests, and edge cases.
    - **Status:** Open. Created 2026-03-22, last updated 2026-04-21.

5.  **AURELION skill suite** | PR [#444](https://github.com/anthropics/skills/pull/444)
    - **Functionality:** A structured cognitive and memory framework (kernel, advisor, agent, memory) for professional knowledge management.
    - **Discussion:** A significant submission that proposes a whole ecosystem. Community feedback focuses on its complexity and potential overlap with the existing `shodh-memory` skill (PR [#154](https://github.com/anthropics/skills/pull/154)). The primary debate is whether such a comprehensive framework should be a single skill or multiple atomic ones.
    - **Status:** Open. Created 2026-02-21, last updated 2026-05-06.

6.  **fix(pdf): case-sensitive file references** | PR [#538](https://github.com/anthropics/skills/pull/538)
    - **Functionality:** A critical fix for the PDF skill addressing case-sensitivity mismatches in file references.
    - **Discussion:** This bugfix PR has garnered significant attention, highlighting that the PDF skill is heavily used and that cross-platform reliability (especially on Linux/macOS) is a major concern. The discussion reflects a desire for more robust testing of existing skills.
    - **Status:** Open. Created 2026-03-06, last updated 2026-04-29.

---

### 2. Community Demand Trends

Analysis of the most-commented Issues reveals three dominant themes for new skill development:

1.  **Enterprise & Org-Wide Sharing:** The most upvoted issue, [#228](https://github.com/anthropics/skills/issues/228), requests a mechanism for sharing skills within organizations (a "shared skill library"). This indicates that adoption is moving from individual users to teams and enterprises, where distribution and management are key blockers.
2.  **Platform Reliability & Windows Support:** A cluster of high-engagement issues and PRs focus on bugs in the `run_eval.py` script on Windows (e.g., [#556](https://github.com/anthropics/skills/issues/556), PRs [#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099)). The community is actively seeking a stable, cross-platform toolchain for skill development and testing.
3.  **Trust, Governance & Security:** Issue [#492](https://github.com/anthropics/skills/issues/492) raises a critical concern about community skills impersonating official Anthropic ones. This, combined with demand for meta-skills like the `skill-security-analyzer` (PR [#83](https://github.com/anthropics/skills/pull/83)), points to a growing need for verification, permissions, and safety patterns in the ecosystem.

---

### 3. High-Potential Pending Skills

These PRs are actively being discussed and have a strong likelihood of being merged soon.

- **Agent-Creator Skill** | PR [#1140](https://github.com/anthropics/skills/pull/1140): A meta-skill for creating task-specific agent sets, with critical stability fixes. Very recent and addresses a fundamental user need.
- **ServiceNow Platform Skill** | PR [#568](https://github.com/anthropics/skills/pull/568): A broad assistant for the ServiceNow ecosystem (ITSM, SecOps, etc.). Targets a large enterprise user base.
- **n8n-builder and n8n-debugger** | PR [#190](https://github.com/anthropics/skills/pull/190): Adds support for building and debugging n8n workflows. Indicates strong demand for workflow automation skills.
- **Fix for feature-dev workflow** | PR [#363](https://github.com/anthropics/skills/pull/363): Addresses a critical bug in a core workflow skill. The long discussion history and recent update (2026-06-03) suggest a resolution is imminent.

---

### 4. Skills Ecosystem Insight

The community’s most concentrated demand is shifting from creating niche, domain-specific skills towards building a reliable, secure, and shareable platform infrastructure—with a particular emphasis on **cross-platform stability (Windows), enterprise governance (sharing & security), and meta-tooling (quality analyzers & agent creators).**

---

# Claude Code Community Digest
**Date:** 2026-06-05

---

## Today's Highlights

A new patch release (v2.1.163) introduces enterprise-friendly version gating controls and a plugin management command. The community remains deeply engaged in the multi-month discussion around standardizing on `AGENTS.md` (Issue #6235), while critical bugs in Agent Teams spawning duplicate workers and cowork tools silently truncating files continue to demand attention. Documentation gaps across hooks, headless mode, and permissions remain a persistent theme.

---

## Releases

**v2.1.163** — [View Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.163)

- **Version gating for managed environments:** Added `requiredMinimumVersion` and `requiredMaximumVersion` managed settings. Claude Code will refuse to start if its version is outside the allowed range and direct the user to an approved version — useful for enterprise compliance.
- **Plugin management:** Added `/plugin list` command to list installed plugins, with `--enabled`/`--disabled` filtering flags.

---

## Hot Issues

1. **[#6235 — Feature Request: Support AGENTS.md](https://github.com/anthropics/claude-code/issues/6235)** 🔥
   - *Enhancement, Core, Memory*
   - The most active issue by far: 308 comments, 4,060 👍. Users want Claude Code to adopt the emerging `AGENTS.md` standard (used by Codex, Cursor, Amp) for cross-agent codebase understanding, rather than the Claude-specific `CLAUDE.md`. Community consensus is strong that this would reduce friction when switching between coding agents.

2. **[#53940 — Cowork Edit/Write tools silently truncate files via byte-conservation buffer cap](https://github.com/anthropics/claude-code/issues/53940)**
   - *Bug, Windows, Core Tools, Cowork*
   - Deterministic bug: files are silently truncated at all sizes due to a buffer cap, with a repro. 22 comments. Serious concern for data integrity during file operations.

3. **[#52472 — Weekly usage limit reset occurring before scheduled reset time](https://github.com/anthropics/claude-code/issues/52472)**
   - *Bug, macOS, VSCode, Cost*
   - Users report the weekly usage limit resets early, truncating their planned usage windows. 20 comments. Causes frustration for capacity planning.

4. **[#55586 — Agent Teams: Single teammate spawn creates 10-151 duplicate worker instances](https://github.com/anthropics/claude-code/issues/55586)**
   - *Bug, Windows, WSL, Agents*
   - Each requested agent spawns dozens of duplicates, each consuming full context and actively editing files. 12 comments. Potentially catastrophic for cost and file state.

5. **[#54393 — Post-mortem: 12 multi-agent coordination bugs surfaced in one autonomous-overnight cycle](https://github.com/anthropics/claude-code/issues/54393)**
   - *Enhancement, Agents, Hooks, Permissions*
   - A comprehensive post-mortem cataloging coordination failures during unattended operation. 11 comments. Provides valuable patterns for the team to address.

6. **[#59750 — Claude Agents TUI fully unresponsive on Windows Terminal](https://github.com/anthropics/claude-code/issues/59750)**
   - *Bug, Windows, TUI*
   - Broken rendering and dead input loop on Windows Terminal. 5 comments, 5 👍. A severe UX blocker for Windows users.

7. **[#47930 — Agent Teams: lead session loops on idle notifications, burns 13–22% of input tokens on no-op acks](https://github.com/anthropics/claude-code/issues/47930)**
   - *Bug, macOS, Cost, Agents*
   - Inefficient communication in multi-agent setups leads to significant token waste. 4 comments, 6 👍.

8. **[#64445 — 1M context credits consumed without user selecting 1M mode](https://github.com/anthropics/claude-code/issues/64445)**
   - *Bug, Cost, Model*
   - Mid-session context upgrade consumes credits unexpectedly. 4 comments. Cost surprise issues are particularly sensitive for users.

9. **[#41794 — Headless docs omit deferred tool resumption with `-p --continue` and `--resume`](https://github.com/anthropics/claude-code/issues/41794)**
   - *Documentation*
   - Headless/CI workflows lack documentation on how deferred tool calls are resumed. 3 comments. Part of a broader documentation gap set.

10. **[#52051 — Seamless local multi-branching: parallel sessions conflict on working tree](https://github.com/anthropics/claude-code/issues/52051)**
    - *Enhancement, Core*
    - Running parallel Claude Code sessions on the same repo causes working tree collisions. 2 comments, 1 👍. Small but growing interest in workspace isolation.

---

## Key PR Progress

1. **[#65344 — Fix premature return in markStale + add --debug flag to auto-close-duplicates](https://github.com/anthropics/claude-code/pull/65344)**
   - Fixes a logic bug in the stale-issue marking script and improves debugging for duplicate auto-closure. Community triage infrastructure improvement.

2. **[#44742 — Diagnostic tool + root cause analysis for session persistence data loss](https://github.com/anthropics/claude-code/pull/44742)** *(CLOSED)*
   - Addresses a critical data loss bug where VS Code extension fails to persist conversation transcripts on restart. Adds a diagnostic script. Closed with fix.

3. **[#65286 — Add missing plugin.json manifest for plugin-dev](https://github.com/anthropics/claude-code/pull/65286)**
   - Fixes discovery and installation of the `plugin-dev` plugin by adding the missing manifest. Small but essential for developer tooling.

4. **[#65314 — Add detect-theme-color-issues script to cluster light-theme color bugs](https://github.com/anthropics/claude-code/pull/65314)**
   - Triage script to group reports of invisible text on light terminal themes. Addresses a recurring `color7`/`color0` collision family.

5. **[#61691 — Add diagnostic script for GitHub connector showing 'Connected' but no tools](https://github.com/anthropics/claude-code/pull/61691)**
   - PowerShell diagnostic/repair script for Windows users affected by the GitHub MCP connector bug. Aids self-service debugging.

6. **[#62099 — Add credential-guard plugin for hardcoded secret detection](https://github.com/anthropics/claude-code/pull/62099)**
   - New plugin with PreToolUse hook to detect 20+ credential patterns before writing files. Closes #62095. Proactive security measure.

7. **[#65223 — Fix typo in security guidance plugin](https://github.com/anthropics/claude-code/pull/65223)** *(CLOSED)*
   - Small spelling fix: "reqwest" → "request". Closed quickly.

8. **[#58673 — s](https://github.com/anthropics/claude-code/pull/58673)**
   - Minimal placeholder PR with single-character description. Likely test/accidental.

---

## Feature Request Trends

1. **Standardized agent configuration (`AGENTS.md`):** Overwhelming demand (Issue #6235, 4,060 👍) for Claude Code to adopt the cross-agent `AGENTS.md` standard instead of the Claude-specific `CLAUDE.md`. Users want seamless collaboration with other coding agents.

2. **Seamless multi-session workspace isolation:** Requests for parallel session support without working tree collisions (Issue #52051). Users want to run "implement" and "review" sessions concurrently without interference.

3. **Multi-agent coordination improvements:** Several enhancement requests (Issue #54393, #47930) focus on fixing coordination bugs, reducing token waste, and preventing duplicate worker spawns in Agent Teams.

4. **Plugin ecosystem maturity:** Growing interest in plugin discovery, dependency resolution (Issue #50145), and security hooks (PR #62099). The community is pushing for richer plugin infrastructure.

5. **Documentation completeness:** A long tail (10+ open documentation issues from user coygeek alone) requesting documentation for hooks, headless mode, permissions, and tool behavior. Systematic gap-filling is clearly needed.

---

## Developer Pain Points

- **Agent Teams spawning duplicates:** Bug #55586 shows single agent spawns creating 10–150+ duplicate instances, each consuming full context. Extreme cost risk and file corruption potential.
- **Cowork file truncation:** Bug #53940 exposes silent data loss in Edit/Write tools — deterministic, affects all file sizes. High severity.
- **Windows TUI unresponsiveness:** Bug #59750 makes Claude Code nearly unusable on Windows Terminal with broken rendering.
- **Weekly usage limit confusion:** Bug #52472 and #64445 show users losing planned capacity due to early resets and unexpected 1M context charges.
- **Session persistence data loss:** The ongoing saga (PR #44742) of VS Code extension losing conversation transcripts on restart remains a trust issue.
- **Documentation gaps:** A single user (coygeek) has filed 15+ separate documentation issues covering hooks, headless mode, permissions, and tool references. This signals a systemic documentation debt that hinders both adoption and self-service debugging.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-05

## Today's Highlights
The Codex team shipped five Rust CLI alpha releases (v0.138.0-alpha.1 through .4) alongside v0.137.0, bringing TUI enhancements like F13-F24 keybindings and compact reasoning-only status items. Meanwhile, the community is voicing strong frustrations around Windows/WSL performance regressions and macOS desktop stability, with multiple high-traffic issues around crash loops, stale auth cache, and sandbox failures. On the pull request side, infrastructure optimization is the theme — plugin pull frequency, startup prewarm cancellation, and CI extraction are all in review.

## Releases
- **rust-v0.138.0-alpha.1 — .4**: Four alpha releases in the 0.138.0 line — no detailed changelog provided beyond version bumps.
- **rust-v0.137.0**: Adds TUI F13-F24 keybindings, paste-in-menu support, and a compact reasoning-only status/title item (#25329, #25400, #25504). Enterprise/admin flows now expose monthly credit limits and support cloud-managed config bundles, including EDU workspaces (#24812, #2...).

## Hot Issues (Top 10)
1. **#11023 — Codex Desktop App for Linux** (86 comments, 474 👍)  
   *Opened Feb 2026, still the most-upvoted open issue.* A Linux electron app is demanded because the macOS app is “almost unusable” due to issue #10432. Community appetite for a native Linux experience is massive.  
   [Link](https://github.com/openai/codex/issues/11023)

2. **#24675 — Stale app connector link after reauth-required 401** (20 comments)  
   Codex Desktop on macOS fails to refresh the Linear connector after a 401; only clearing the `codex_apps` cache restores connectivity. A blocking productivity issue for plugin users.  
   [Link](https://github.com/openai/codex/issues/24675)

3. **#25391 — Windows Computer Use plugin fails to bootstrap** (20 comments)  
   `native pipe path is unavailable` blocks the Computer Use plugin on Windows. Pro subscribers are affected, and the issue is actively discussed.  
   [Link](https://github.com/openai/codex/issues/25391)

4. **#25715 — Codex App unusably slow with WSL as agent environment** (19 comments, 22 👍)  
   Routine turns take minutes on WSL2. Many affected users confirm the same project is fast under Codex CLI directly inside WSL.  
   [Link](https://github.com/openai/codex/issues/25715)

5. **#26104 — Cannot open older chat sessions after recent update** (14 comments)  
   Post-update, the Windows desktop app fails to load historical sessions — a concerning data-access regression.  
   [Link](https://github.com/openai/codex/issues/26104)

6. **#9252 — Remove 2 leading spaces from cmd suggestion** (13 comments, 49 👍)  
   A long-standing TUI cosmetics issue in the CLI. Despite being opened in Jan 2026, users still feel this minor formatting fix is overdue.  
   [Link](https://github.com/openai/codex/issues/9252)

7. **#21862 — Chrome plugin missing from Codex Plugin Directory** (12 comments)  
   A plugin that used to be available vanished from the directory after a recent update.  
   [Link](https://github.com/openai/codex/issues/21862)

8. **#25882 — macOS app relaunches own binary in tight loop, freezing all app launches** (9 comments)  
   `codex-syspolicyd` gets exhausted, locking the entire system. A severe stability bug on Darwin.  
   [Link](https://github.com/openai/codex/issues/25882)

9. **#16900 — Parent-child wait mechanism for subagents** (9 comments)  
   Parent threads prematurely complete while child subagents are still running, causing redundant rework in multi-agent flows.  
   [Link](https://github.com/openai/codex/issues/16900)

10. **#26149 — WSL plugin scanning over /mnt/c causes severe per-command latency** (7 comments)  
    Codex Desktop repeatedly scans `.codex/.tmp/plugins` across the WSL mount boundary, adding seconds to every tool invocation.  
    [Link](https://github.com/openai/codex/issues/26149)

## Key PR Progress (Top 10)
1. **#26431 — Pull plugin service less frequently** (opened Jun 4)  
   Reduces download traffic to the plugins repo while preserving update checks on every startup. Critical for scaling global deployments.  
   [Link](https://github.com/openai/codex/pull/26431)

2. **#26450 — Add remote control pairing status RPC** (opened Jun 4)  
   Exposes `remoteControl/pairing/status` as an experimental app-server v2 RPC using shared read semantics.  
   [Link](https://github.com/openai/codex/pull/26450)

3. **#26487 — Add Responses Lite request body support** (opened Jun 5)  
   Adds `use_responses_lite` catalog field, sends `reasoning.context = "all_turns"`, and disables parallel tool calls for lightweight model responses.  
   [Link](https://github.com/openai/codex/pull/26487)

4. **#25147 — Retry streamable HTTP initialize failures** (opened May 29)  
   Retries transient HTTP failures during RMCP startup and tools/list — a reliability improvement for flaky connections.  
   [Link](https://github.com/openai/codex/pull/25147)

5. **#26307 — Respect Windows sandbox backend in exec policy** (opened Jun 4)  
   Fixes false-positive `blocked` rejections for benign commands when Windows managed filesystem permissions are sandbox-backed.  
   [Link](https://github.com/openai/codex/pull/26307)

6. **#26484 — Add turn profiling analytics** (opened Jun 4)  
   Flat profiling fields for `codex_turn_event` will let teams identify where wall-clock time is spent during a turn.  
   [Link](https://github.com/openai/codex/pull/26484)

7. **#25976 — Use stable item IDs for Responses API calls** (opened Jun 2)  
   Codex will now generate stable item IDs for messages it creates, enabling round-trip consistency with the Responses API.  
   [Link](https://github.com/openai/codex/pull/25976)

8. **#25158 — Support more Vim normal commands** (opened May 29)  
   Adds `gg`/`G`, `dG`, `yG`, `c{motion}`, and characterwise visual mode to the Vim emulation in large composer buffers.  
   [Link](https://github.com/openai/codex/pull/25158)

9. **#26469 — Speed up TUI startup by reusing plugin discovery** (opened Jun 4)  
   Consolidates repeated filesystem discovery across hooks/list, session MCP initialization, and plugin skill warmup into a single immutable snapshot.  
   [Link](https://github.com/openai/codex/pull/26469)

10. **#26462 — Use state DB first for `resume --last`** (opened Jun 4)  
    Avoids stat-ing every rollout by querying the state database — reducing session-list startup time for users with large histories.  
    [Link](https://github.com/openai/codex/pull/26462)

## Feature Request Trends
- **Linux Desktop App** (#11023, 474 👍): The single most requested feature by a wide margin. Users with power/thermal issues on macOS want a native Linux build.
- **Read-aloud / Replay Audio for Assistant Responses** (#21645): As Codex is used for longer conversational workflows, users want the same audio replay available in chatgpt.com.
- **Subagent lifecycle management** (#16900): Explicit parent-child wait semantics, status checks, and prevent-retry mechanics for multi-agent flows.
- **Improved Vim emulation** (implied by #25158): Continual demand for richer modal editing in the TUI composer.
- **Better reasoning visibility** (implied by #26487, earlier issues): Community wants control over reasoning context depth and parallel tool call behavior per-session.

## Developer Pain Points
1. **Windows + WSL instability**: Four of the top issues (#25715, #26149, #25391, #26104) relate to WSL performance, sandbox bootstrapping, or session access. This is the single worst platform experience right now.
2. **macOS crash loops and indefinite hangs**: Issues #25882, #24599, and #13709 describe scenarios where the desktop app becomes completely unusable — tight binary relaunch loops, indefinite “Thinking” states, and frozen UIs.
3. **Plugin/re-auth staleness**: #24675 and #21862 show that plugin connectors and directories fail to refresh after credential changes, requiring manual cache deletion.
4. **Model availability confusion**: Multiple issues (#26116, #26400) report that `gpt-5.3-codex` is documented for Plus but unavailable in the CLI/desktop app with a Plus account.
5. **Session history reliability**: #26104 (cannot open older chats) and #17193 (viewport jumping during scroll) degrade long-session usability on both platforms.
6. **Android (Termux) unsupported**: #26277 shows that `codex exec` fails with a lock-not-supported error — a growing request from on-device development users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-05

## Today's Highlights
A patch release **v0.45.1** shipped to provide GA access to `gemini-3.5-flash` for stable users. CI infrastructure saw targeted improvements with a new PR size labeler and a fix for fork PR write permissions. The `functionCall`/`functionResponse` 400 error PR is still open, while a new atomic-write fix for MCP OAuth tokens landed for review.

## Releases

**v0.45.1** (stable patch) — [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.1)
- Cherry-picks commit 665228e to backport `gemini-3.5-flash` GA model transition for stable-channel users.

**v0.47.0-nightly.20260604.g4196596f7** — [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0-nightly.20260604.g4196596f7)
- CI improvements: optimized PR size labeler and batch workflows; switched to `pull_request_target` trigger for fork PR write access.

## Hot Issues (Top 10)

1. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component-level evaluations** (P1, 7 comments)  
   Epic tracking expansion of behavioral eval tests beyond the initial 76. Community interest is muted but maintainers see this as critical for agent quality assurance.

2. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads, search, and mapping** (P2, 7 comments, 👍1)  
   Investigation into whether AST-based tools can reduce token noise and improve navigation precision. Represents a potential step-change in codebase understanding capability.

3. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs forever** (P1, 7 comments, 👍8)  
   Popular issue: agent stalls on simple operations and only recovers when sub-agent delegation is explicitly disabled. High community pain.

4. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery after MAX_TURNS reports false success** (P1, 6 comments, 👍2)  
   `codebase_investigator` claims `"GOAL"` success even when hitting turn limits before analysis. Erodes trust in agent status reporting.

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini underutilizes custom skills and sub-agents** (P2, 6 comments)  
   Anecdotal evidence that the model won't autonomously invoke user-defined skills without explicit instruction. Limiting adoption of custom agent capabilities.

6. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command stuck "Waiting input" after completion** (P1, 4 comments, 👍3)  
   Repeated hang on trivial commands. Disrupts workflow completion; high upvote count signals broad impact.

7. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent fails on Wayland** (P1, 4 comments, 👍1)  
   Browser agent crashes on Linux Wayland sessions. Active blocker for Linux users.

8. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory: add deterministic redaction, reduce logging** (P2, 3 comments)  
   Security concern: secrets are sent to model context before redaction. Community trust issue for memory features.

9. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent should discourage destructive behavior** (P2, 2 comments, 👍1)  
   Agent uses `git reset`/`--force` when safer alternatives exist. Highlights the need for safer default tool use.

10. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 400 error with >128 tools** (P2, 3 comments)  
    API limit triggers 400 errors when tool count exceeds threshold. Affects power users with rich skill sets.

## Key PR Progress (Top 10)

1. **[#27570](https://github.com/google-gemini/gemini-cli/pull/27570) — Transition to flash GA model** (CLOSED, size/l)  
   Switches legacy Flash models to `gemini-3.5-flash`, gated by experiment flag. This was cherry-picked into v0.45.1 as PR [#27667](https://github.com/google-gemini/gemini-cli/pull/27667).

2. **[#27267](https://github.com/google-gemini/gemini-cli/pull/27267) — Prevent SIGHUP kills in PTY environments** (CLOSED, size/m)  
   Fixes [#16248](https://github.com/google-gemini/gemini-cli/issues/16248) — WSL2/Kitty/Alacritty users no longer lose the agent on terminal close.

3. **[#27341](https://github.com/google-gemini/gemini-cli/pull/27341) — Strip functionCall.id / functionResponse.id before API** (OPEN, size/xl)  
   Blocks the persistent 400 "Unknown name 'id'" error after every tool call. High priority fix for agent reliability.

4. **[#27664](https://github.com/google-gemini/gemini-cli/pull/27664) — Atomic MCP OAuth token writes** (OPEN, size/m)  
   Prevents token corruption via temp-file + atomic rename. Addresses [#27663](https://github.com/google-gemini/gemini-cli/issues/27663).

5. **[#27463](https://github.com/google-gemini/gemini-cli/pull/27463) — Preserve refresh_token in file-based cacheCredentials** (OPEN, size/m)  
   Fixes [#21691](https://github.com/google-gemini/gemini-cli/issues/21691) — refresh_token overwrite for users not using encrypted storage.

6. **[#27473](https://github.com/google-gemini/gemini-cli/pull/27473) — Resolve hostnames before private-IP check** (OPEN, size/m)  
   Closes SSRF bypass where hostnames resolving to private IPs evade `isBlockedHost()`.

7. **[#27572](https://github.com/google-gemini/gemini-cli/pull/27572) — Handle tmux false positive background detection** (OPEN, size/m)  
   Fixes regression causing light-mode detection inside tmux/mosh sessions.

8. **[#27568](https://github.com/google-gemini/gemini-cli/pull/27568) — Fall back when ripgrep execution fails** (OPEN, size/m)  
   Graceful degradation to legacy GrepTool if `rg` is missing or fails. Improves robustness for users without ripgrep.

9. **[#27502](https://github.com/google-gemini/gemini-cli/pull/27502) — Fix P1 crash on terminal resize (ioctl EBADF)** (OPEN, size/m)  
   Race condition between PTY teardown and React resize callback causing crashes.

10. **[#27472](https://github.com/google-gemini/gemini-cli/pull/27472) — Enforce truncation lockout for tool confirmations** (OPEN, size/m)  
    Fixes HITL bypass vulnerability where truncated tool confirmations could hide malicious commands (IPI prevention).

## Feature Request Trends

- **AST-aware code navigation**: Multiple issues (#22745, #22746, #22747) explore using AST grep, Glyph, or Tilth for precise method-bound reads and codebase mapping — aiming to reduce token waste and improve navigational accuracy.
- **Agent self-awareness & safety**: Requests for the agent to understand its own capabilities, flags, and hotkeys (#21432), and to prefer safe alternatives over destructive operations (#22672).
- **Sub-agent usability**: Users want the ability to background sub-agents (`Ctrl+B`) for non-blocking tasks (#22741), and better visibility into sub-agent decision-making instead of false `"GOAL"` success (#22323).
- **Browser agent resilience**: Features requested for automatic session takeover and lock recovery (#22232), plus proper `settings.json` override support (#22267).
- **Component-level evals**: The "Robust component level evaluations" epic (#24353) signals a desire for systematic quality measurements per sub-system.

## Developer Pain Points

- **Agent hangs & stalls**: Recurring theme — generalist agent freezes (#21409), shell commands hang post-completion (#25166), and sub-agents falsely report success after hitting turn limits (#22323).
- **Poor agent orchestration**: The model underutilizes custom skills (#21968), ignores configuration overrides (#22267), and runs sub-agents without permission after updates (#22093).
- **Shell/terminal integration failures**: PTY crashes on resize (#27502), false background detection in tmux (#27572), corruption after external editors (#24935), and flickering on resize (#21924).
- **Security & trust**: Auto Memory sends secrets to model context before redaction (#26525), HITL bypass via truncation (#27472), and hostname-based SSRF bypass (#27473) are all actively being patched.
- **Tooling limits**: Hitting 400 errors when >128 tools are available (#24246), and random script generation cluttering workspaces (#23571) frustrate power users.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-05

## Today's Highlights
A new release v1.0.60-0 shipped with quality-of-life improvements including vim-style navigation for the `/diff` view and a `--resume` shorthand (`-r`). However, the community is facing a cluster of severe regressions: plugins and hooks are broken on Windows, the BYOK Azure OpenAI retry logic is unusably aggressive, and resumed sessions lose authentication for model selection. Several critical keyboard and clipboard issues also persist across platforms.

## Releases
**v1.0.60-0** (released 2026-06-04)
- Added `billing` help topic covering AI credit usage features
- Added vim-style navigation keys (`g`, `G`, `Ctrl+D`, `Ctrl+U`) to the `/diff` view
- Mission Control sharing status now displayed in `/session info` view
- Added `-r` as a shorthand for `--resume`
- LSP server configuration updates

## Hot Issues (10 selected)

1. **#2082 — `ctrl+shift+c` no longer copies to clipboard on Linux**  
   *Area: platform-linux, input-keyboard*  
   **Why it matters:** A fundamental terminal interaction pattern broken since v1.0.4 on Ubuntu 24.04. 19 comments, 8 upvotes — high community frustration.  
   [Issue #2082](https://github.com/github/copilot-cli/issues/2082)

2. **#3260 — Copy/Paste broken in Copilot CLI via SSH inside tmux to Windows Server 2025**  
   *Area: input-keyboard, platform-windows*  
   **Why it matters:** Cross-platform remote workflows completely broken after v1.0.47. Complex scenario (Linux→macOS→Windows via SSH) with no workaround reported.  
   [Issue #3260](https://github.com/github/copilot-cli/issues/3260)

3. **#3659 — CLI cannot execute hooks shipped with plugins (v1.0.57+)**  
   *Area: platform-windows, plugins*  
   **Why it matters:** All prompts fail with `preToolUse` hook exceptions. PowerShell script execution broken on Windows — a showstopper for enterprise plugin users.  
   [Issue #3659](https://github.com/github/copilot-cli/issues/3659)

4. **#3596 — Resume session breaks `/model` with "Not authenticated"**  
   *Area: authentication, sessions, models*  
   **Why it matters:** Resuming a session loses model list capability. Duplicated in #3680. 8 upvotes, no fix in sight — directly impacts daily workflow.  
   [Issue #3596](https://github.com/github/copilot-cli/issues/3596)

5. **#3677 — `claude-opus-4.7-1m-internal` incorrectly compacts at 18% real capacity**  
   *Area: context-memory, models*  
   **Why it matters:** CLI uses the wrong (non-long-context) model blob, triggering context compaction at ~128K instead of 936K. Wasteful summarization for users paying for long context.  
   [Issue #3677](https://github.com/github/copilot-cli/issues/3677)

6. **#3636 — Voice mode fails on corporate VPN — "Failed to fetch model catalog"**  
   *Area: networking, models*  
   **Why it matters:** `/voice` activation is completely blocked for enterprise users behind VPNs. No proxy/catalog fallback mechanism.  
   [Issue #3636](https://github.com/github/copilot-cli/issues/3636)

7. **#3666 — Copying wrapped output removes spaces (e.g. `var c` → `varc`)**  
   *Area: input-keyboard, terminal-rendering*  
   **Why it matters:** Terminal rendering bug corrupts copied code — leads to silent errors when pasting into editors. 3 comments, closed but not fixed.  
   [Issue #3666](https://github.com/github/copilot-cli/issues/3666)

8. **#3667 — Reasoning display keeps repeating the first thinking output**  
   *Area: terminal-rendering*  
   **Why it matters:** Stuck reasoning display with `claude-sonnet-4.5` makes it impossible to track model progress. UI/UX regression.  
   [Issue #3667](https://github.com/github/copilot-cli/issues/3667)

9. **#3679 — BYOK Azure OpenAI 429 throttling exhausts all retries in ~0.15s**  
   *Area: networking, models*  
   **Why it matters:** No effective backoff, retry count not configurable. Self-hosted Azure OpenAI deployments become unusable under moderate load.  
   [Issue #3679](https://github.com/github/copilot-cli/issues/3679)

10. **#3664 — `preToolUse` hook `cwd` field does not expand `~`**  
    *Area: platform-windows, plugins, configuration*  
    **Why it matters:** Tilde in hook configuration blocks all tool calls on Windows. Simple path expansion issue with cascading failures.  
    [Issue #3664](https://github.com/github/copilot-cli/issues/3664)

## Key PR Progress
1. **#3473 — Update project name in README**  
   Spam PR with Temu phishing content. Low-quality.  
   [PR #3473](https://github.com/github/copilot-cli/pull/3473)

*(No other active PRs in the last 24h — the repository is currently issue-heavy.)*

## Feature Request Trends

- **Configurable agent behavior** — Users want `effort` and `context length` control per agent, not just model selection (#3678)
- **Machine-level custom slash commands** — Cross-project workflow consistency without per-repo configuration (#3343)
- **Secure MCP credential storage** — OAuth tokens stored as plaintext JSON on disk; users request encrypted storage (#2783)
- **Localization / i18n** — Spanish command descriptions requested via environment variable (#3681)
- **Default permissions config file** — Per-session permission prompts are too time-consuming; users want a reusable config (#2398)

## Developer Pain Points

1. **Keyboard & clipboard regressions** — `ctrl+shift+c` broken on Linux (#2082), copy/paste broken in tmux→Windows SSH (#3260), wrapped output corruption (#3666). Three separate clipboard bugs across all major platforms.

2. **Plugin/hook system fragility** — PowerShell hooks fail on Windows (#3659, #3664), `postToolUse` not dispatched for `web_fetch` (#3665). The hooks system is unreliable in production.

3. **Session/authentication state loss** — Resumed sessions lose model access (#3596, #3680). `/session` no longer lists other sessions (closed #3676). Session management is regressing.

4. **BYOK provider limitations** — Credentials read only at startup (#3682), aggressive 429 retry exhaustion (#3679). Self-hosted and enterprise deployments suffer.

5. **Context window mismanagement** — Long-context models compacted prematurely (#3677), sub-agents hang with `total_turns=0` (#3547, #2923). Agent orchestration and context handling need attention.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**2026-06-05** | Data Source: [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights

A significant volume of bug reports and PRs landed today, centering on **authentication failures** (403 errors) and **performance regressions** in version 1.46.0. The `kimi-for-coding` model is issuing "only available for Coding Agents" errors to legitimate CLI users, while multiple developers report severe slowdowns and session instability. On the positive side, contributor activity is strong, with six open PRs addressing critical UX issues including scroll jank, image format handling, and session replay corruption.

---

## 2. Releases

**No new releases in the last 24 hours.** The latest available version remains `1.46.0`, which is the subject of several performance complaints.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| [#2425](https://github.com/MoonshotAI/kimi-cli/issues/2425) | **403 error: "Kimi For Coding is only available for Coding Agents"** | A critical auth/authz failure. Users running the official Kimi CLI itself are being told they aren't a supported agent. 3 👍, 10 comments — indicates widespread frustration. |
| [#2427](https://github.com/MoonshotAI/kimi-cli/issues/2427) | **Same 403 error, WSL2 + Debian** | Confirms the bug is not platform-specific; affects WSL2 users who may have no alternative workflows. |
| [#2422](https://github.com/MoonshotAI/kimi-cli/issues/2422) | **Scroll-to-bottom auto-jump after conversation ends** | A terminal UX regression: reading long outputs is impossible because the viewport resets every ~1s. Linux users most affected. |
| [#2430](https://github.com/MoonshotAI/kimi-cli/issues/2430) | **Auto logout mid-task** | Session drops during idle periods (Windows 10 reported). Blocks long-running agent tasks. |
| [#2428](https://github.com/MoonshotAI/kimi-cli/issues/2428) | **`/title` command missing in VS Code extension** | Inconsistency between CLI and extension feature sets. |
| [#2424](https://github.com/MoonshotAI/kimi-cli/issues/2424) | **"Engine overloaded" on k2.5 model** | Backend capacity issues degrading user experience. |
| [#2423](https://github.com/MoonshotAI/kimi-cli/issues/2423) | **Latest versions are far slower** | Version 1.46.0 reported as significantly slower on ARM64 Linux. Multiple users echoing performance regressions. |
| #2421 (implied from PR) | **Pasted text folding across sessions** | Long paste placeholders (`[Pasted text #1]`) are lost on session recall, causing data loss. |
| #2336 (referenced in PR) | **Orphan `tool_calls` on mid-turn kill** | Session corruption when CLI is killed abruptly (memory pressure, SIGKILL). |
| #2017 (referenced in PR) | **Unsupported image formats cause errors** | `.ico`, `.bmp`, `.tiff` images rejected by providers; no automatic conversion. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| [#2429](https://github.com/MoonshotAI/kimi-cli/pull/2429) | `fix: prevent idle cursor blink from forcing scroll to bottom` | Direct fix for #2422. Addresses Linux terminal auto-scroll by suppressing cursor-blink-based scroll events. |
| [#2388](https://github.com/MoonshotAI/kimi-cli/pull/2388) | `fix(shell): persist pasted text placeholders` | Solves paste data loss across session recall — a fundamental reliability issue. |
| [#2387](https://github.com/MoonshotAI/kimi-cli/pull/2387) | `fix(tools): preserve shell command headline details` | Improves terminal readability by not truncating long shell command headlines to 50 chars. |
| [#2386](https://github.com/MoonshotAI/kimi-cli/pull/2386) | `fix(session): map undo wire turns to context turns` | Fixes `/undo` and fork commands that break when slash-commands don't produce real user messages. |
| [#2383](https://github.com/MoonshotAI/kimi-cli/pull/2383) | `fix(soul): repair orphan tool_calls when replaying history` | Corruption prevention for sessions killed mid-turn. Essential for stable long-running agents. |
| [#2382](https://github.com/MoonshotAI/kimi-cli/pull/2382) | `fix(file): convert unsupported image formats to PNG` | Broadens media support; auto-converts `.ico`, `.bmp`, `.tiff` to PNG via `ReadMediaFile`. |

---

## 5. Feature Request Trends

No explicit feature requests appeared in today's issue set. However, **several implied feature gaps** can be distilled:

- **Idle session resilience**: Users need the CLI to maintain login state across idle periods (#2430) and survive system sleep without re-authentication.
- **Cross-extension consistency**: The VS Code extension (`/title` command) and terminal CLI should share the same command surface (#2428).
- **Graceful degradation under backend load**: The "engine overloaded" message (#2424) suggests a need for better retry/backoff logic or queuing indicators.
- **Performance SLAs for new versions**: Users expect version upgrades to not regress response time (#2423).

---

## 6. Developer Pain Points

- **Authentication bugs are top blocker**: Two issues (#2425, #2427) report 403 errors from the *official* CLI, making the tool completely unusable for those affected.
- **Performance regression in 1.46.0**: Reported on both ARM64 and x86_64 Linux, across models k2.5 and k2.6. This is a high-priority concern for daily driver users.
- **Session instability**: Auto-logout (#2430) and mid-turn session corruption (#2336) break long-running agent workflows.
- **Terminal UX regressions**: Auto-scroll lock (#2422) makes it impossible to review long outputs — a basic usability requirement for a developer tool.
- **Image format limitations**: Users on media-heavy workflows are blocked by unsupported formats (#2017) that could be auto-converted.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-05

## Today's Highlights
A major spike in security-focused bug reports emerged yesterday, with user **LifetimeVip** filing a coordinated batch of issues exposing systemic gaps in read-before-edit enforcement and prompt injection vulnerabilities across multiple tools. Meanwhile, the community continues to rally around memory performance issues (89 comments) and pricing adjustments for DeepSeek V4 Pro (68 comments). On the PR side, a contributor refactored V2 session inputs to be fully event-sourced, and a new color themes feature for the desktop app landed for review.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#20695 — Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (OPEN, 89 comments, 63 👍)  
   The central hub for memory leak reports. Maintainers are asking the community to *not* run LLM-based diagnostics and instead collect heap snapshots manually. High engagement indicates this is the project's top stability concern.

2. **[#28846 — Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction](https://github.com/anomalyco/opencode/issues/28846)** (CLOSED, 68 comments, 74 👍)  
   A widely supported feature request to pass API cost savings to subscribers. Closed, likely because the team adjusted limits internally — but the volume of engagement shows pricing sensitivity.

3. **[#4695 — Speech-to-Text Voice Input](https://github.com/anomalyco/opencode/issues/4695)** (CLOSED, 33 comments, 162 👍)  
   The most upvoted feature request ever. Closed without implementation, which may frustrate the community. Still, the 162 👍 signals strong latent demand for hands-free interaction.

4. **[#30811 — Code quality degrades in long conversations](https://github.com/anomalyco/opencode/issues/30811)** (OPEN, 6 comments)  
   **LifetimeVip** details five distinct problems (compaction context loss, no auto-verification) causing worsening AI output over long sessions. This is the most actionable of the new quality-of-life bug reports.

5. **[#30783 — Question tool substitutes for Read tool](https://github.com/anomalyco/opencode/issues/30783)** (OPEN, 4 comments)  
   A clever bypass: the AI asks the user to paste file contents instead of calling `read`, then edits without ever reading. Serious security/privacy implication — undermines the permission model.

6. **[#30799 — Prompt injection via `<system-reminder>` tags](https://github.com/anomalyco/opencode/issues/30799)** (OPEN, 3 comments)  
   File content returned by `read` is not sanitized for `system-reminder` tags, which the system treats as authoritative. An attacker (or even a malicious codebase) could hijack the AI's instructions.

7. **[#27589 — TUI fails on Alpine Linux (musl)](https://github.com/anomalyco/opencode/issues/27589)** (OPEN, 27 comments, 12 👍)  
   Regression in 1.14.50 — `getcontext` symbol missing on musl-based systems. Blocks adoption on Docker Alpine images and lightweight Linux distros.

8. **[#27530 — "4 of 5 requests failed" on startup](https://github.com/anomalyco/opencode/issues/27530)** (OPEN, 26 comments, 16 👍)  
   Generic server error prevents app launch. High comment count suggests many users hit this but it may be environment-specific.

9. **[#17169 — Subagent infinite retry loop costs $15+ per invocation](https://github.com/anomalyco/opencode/issues/17169)** (OPEN, 4 comments)  
   When an edit/write tool fails, subagents retry indefinitely without escalation. Costly for users on pay-per-token models — needs a retry circuit breaker.

10. **[#30814 — Delete session leaves data behind (race condition)](https://github.com/anomalyco/opencode/issues/30814)** (OPEN, 2 comments)  
    Race in the event-sourced deletion pipeline: `Deleted` event is erased before the projector processes it, leaving orphaned rows. Could be a data privacy concern.

## Key PR Progress

1. **[#30477 — Add "reasoning" as interleaved field for vLLM](https://github.com/anomalyco/opencode/pull/30477)** (OPEN)  
   Enables `reasoning` as a `interleaved.field` value for vLLM providers, extending model compatibility. Closes #19988.

2. **[#30824 — Color themes for desktop app](https://github.com/anomalyco/opencode/pull/30824)** (OPEN)  
   Implements `resolveThemeVariantV2` with runtime palette-to-token mapping. A major UX improvement for theme customization.

3. **[#30419 — Refresh stats routes and homepage](https://github.com/anomalyco/opencode/pull/30419)** (OPEN)  
   Updates the stats app shell, homepage, and model detail route with new UI structure. Testing not yet run.

4. **[#30785 — Make V2 session inputs event sourced](https://github.com/anomalyco/opencode/pull/30785)** (CLOSED)  
   Refactors prompt admission so pending work survives local restart and can be reconstructed from synchronized session history. Significant for reliability.

5. **[#30488 — Allow backgrounding synchronous subagents (TUI)](https://github.com/anomalyco/opencode/pull/30488)** (OPEN)  
   Adds `POST /experimental/session/:sessionID/background` endpoint and TUI hints (`ctrl+b`). Lets users detach blocking subagents without restarting.

6. **[#30820 — Support Bedrock OpenAI model URLs](https://github.com/anomalyco/opencode/pull/30820)** (OPEN)  
   Adds Amazon Bedrock provider URL variable substitution for GPT-5.5 and GPT-5.4 models. Closes #30819.

7. **[#30822 — Surface local server startup failures (desktop)](https://github.com/anomalyco/opencode/pull/30822)** (CLOSED)  
   Desktop no longer hangs on loading animation when local server fails — opens an actionable error page instead. Quality-of-life fix.

8. **[#25762 — Prevent shell commands from killing all Node.js processes](https://github.com/anomalyco/opencode/pull/25762)** (CLOSED)  
   Sanitizes `taskkill`/`killall node` commands to avoid killing the OpenCode host process itself. Closes #7950.

9. **[#30821 — Support multiple config overrides with OPENCODE_CONFIG_DIRS](https://github.com/anomalyco/opencode/pull/30821)** (OPEN)  
   Implements PATH-like colon-separated override directories. Empowers plugin authors and advanced users.

10. **[#25700 — Add `copy_on_select` TUI config](https://github.com/anomalyco/opencode/pull/25700)** (CLOSED)  
    Makes auto-copy on select configurable instead of experimental-only. Small but frequently requested.

## Feature Request Trends

- **Cost optimization** remains the #1 theme: DeepSeek V4 Pro pricing adjustments (#28846, #29115) and demand for usage limits to reflect API price drops.
- **Session management** is highly requested: `--resume <session>` (like Cursor/Codex CLI) (#18569), and persistent session lists (#16562).
- **Voice input** (#4695) — despite closure, the 162 👍 makes it the community's most-wanted feature.
- **Model/provider diversity** — Amazon Bedrock GPT-5.x (#30819), FastRouter provider (#25706), vLLM interleaved reasoning (#30477).
- **Clickable links** in TUI (#1168) — 91 👍, long-standing and still unresolved.
- **Wayland/multiplexer compatibility** — system notifications under zellij/tmux (#29099), Alpine Linux support (#27589).

## Developer Pain Points

- **Memory leaks** — the central megathread (#20695) with 89 comments is the community's most active pain point.
- **Cost shock** — subagent infinite retry loops (#17169) and compaction overflow retry loops (#30805) lead to unexpected API bills.
- **Read-before-edit bypass vectors** — a coordinated batch of reports (#30783, #30793, #30794, #30795, #30791) reveals the entire permission model is circumventable. The `bash` tool, `question` tool, and unsanitized file content all bypass enforcement.
- **Prompt injection vulnerability** (#30799) — unsanitized system-reminder tags in file content could allow codebase-level exploits.
- **Session data loss** — empty session lists (#16562) and race conditions on delete (#30814) erode trust in data persistence.
- **Platform regressions** — Alpine/musl (#27589), Windows MCP servers (#27771), and vLLM compatibility (#21214) continue to fragment the user base.
- **TUI usability** — paste not working on Windows (#18104), "Permission Required" deadlock (#30344).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-05

## Today's Highlights

Pi v0.78.1 ships with expanded provider coverage including Anthropic and NVIDIA NIM, plus richer extension context APIs. The community is buzzing over a critical hang bug in OpenAI Codex (51 comments) and a session stats crash affecting Ollama users. Several PRs land fixes for OpenCode provider token mapping and persistent model defaults.

---

## Releases

**v0.78.1** — [Release Link](https://github.com/earendil-works/pi/releases/tag/v0.78.1)

- **More built-in provider coverage** — Added Anthropic and NVIDIA NIM provider setup, plus MiniMax-M3 support for direct MiniMax providers. See [Providers](docs/providers.md).
- **Richer extension context** — Extensions can now use `ctx.mode` and `ctx.getSystemPromptOptions()` for deeper integration.

---

## Hot Issues (Top 10)

1. **#4945 — OpenAI Codex hang on "Working..."** [OPEN]  
   `gpt-5.5` sometimes leaves the TUI permanently stuck with no output, no errors. Recovery requires Escape key, recording an aborted turn. 51 comments, 27 👍.  
   [Link](https://github.com/earendil-works/pi/issues/4945)

2. **#5323 — Improve Vertex + GCP metadata server support** [OPEN]  
   Pi's synchronous `existsSync` check for `GOOGLE_APPLICATION_CREDENTIALS` fails on GCP VMs that rely on metadata server auth. Blocks GCP-native deployments.  
   [Link](https://github.com/earendil-works/pi/issues/5323)

3. **#5386 — Crash in getSessionStats() when Ollama returns no usage** [OPEN]  
   `Cannot read properties of undefined (reading 'input')` crashes sessions using Ollama models that don't report token usage. Affects many local model users.  
   [Link](https://github.com/earendil-works/pi/issues/5386)

4. **#5188 — Shift+Enter submits instead of newline** [OPEN]  
   Custom keybinding `tui.input.newLine` with `shift+enter` is broken — it still submits. Ctrl+J works fine. Frustrating for power users.  
   [Link](https://github.com/earendil-works/pi/issues/5188)

5. **#5363 — Amazon Bedrock Mantle provider** [OPEN]  
   Request for a new `amazon-bedrock-mantle` provider using OpenAI-compatible API instead of Converse API. Blocked users on Bedrock Mantle models.  
   [Link](https://github.com/earendil-works/pi/issues/5363)

6. **#5331 — maxTokens silently ignored for opencode-go provider** [OPEN]  
   `options.maxTokens` sends `max_completion_tokens` instead of `max_tokens`, which the backend ignores entirely. No error, just silent truncation.  
   [Link](https://github.com/earendil-works/pi/issues/5331)

7. **#5350 — Custom tools get host-OS resolved paths on Windows** [OPEN]  
   When running SSH file tools from Windows, paths like `/root` get resolved against the Windows filesystem (e.g., `C:\root`) — breaks remote Linux workflows.  
   [Link](https://github.com/earendil-works/pi/issues/5350)

8. **#5373 — High idle CPU on large sessions** [CLOSED]  
   150k+ token sessions using ~24% CPU at idle. `strace` shows 76% of time spent in `ioctl` syscalls (45k+ calls). Likely TUI rendering overhead.  
   [Link](https://github.com/earendil-works/pi/issues/5373)

9. **#5341 — Port coding-agent to use ExecutionEnv + SSH remote containers** [CLOSED]  
   Feature request to route filesystem and spawn operations to remote hosts over SSH. Extensions architecture already has a starting point.  
   [Link](https://github.com/earendil-works/pi/issues/5341)

10. **#5411 — Configurable working loader UI** [CLOSED]  
    Request for `ctx.ui.setWorkingComponent()` to replace the built-in streaming loader. High demand for custom progress indicators.  
    [Link](https://github.com/earendil-works/pi/issues/5411)

---

## Key PR Progress (Top 10)

1. **#5281 — Keybindings for all commands** [CLOSED]  
   Unifies built-in and extension command keybinding configuration via `cmd.<name>` convention. Enables shortcuts for any registered command.  
   [Link](https://github.com/earendil-works/pi/pull/5281)

2. **#5385 — Detect first-run terminal theme (light/dark)** [OPEN]  
   Queries terminal via OSC to auto-match Pi's initial theme with user's terminal. Currently macOS + Ghostty only.  
   [Link](https://github.com/earendil-works/pi/pull/5385)

3. **#5400 — Fix maxTokens mapping for opencode providers** [CLOSED]  
   Maps `maxTokens` to `max_tokens` for opencode and opencode-go providers. Fixes silent truncation bug (#5331).  
   [Link](https://github.com/earendil-works/pi/pull/5400)

4. **#5379 — Store user-scoped local packages as absolute paths** [CLOSED]  
   Resolves relative path issues for user-scoped installs. Project-scoped installs remain relative.  
   [Link](https://github.com/earendil-works/pi/pull/5379)

5. **#5410 — Persist restored session model as default** [CLOSED]  
   When resuming a session with `-c`, the restored model now updates `defaultModel`/`defaultProvider` in `settings.json`. No more stale defaults.  
   [Link](https://github.com/earendil-works/pi/pull/5410)

6. **#5332 — Approval system for workspaces** [OPEN]  
   Adds `.pi.user` folder for user extensions and requires interactive approval for `.pi`/`.pi.user` on first load. Security hardening.  
   [Link](https://github.com/earendil-works/pi/pull/5332)

7. **#5399 — Deferred extension commands in autocomplete** [CLOSED]  
   Fixes autocomplete missing commands from deferred-loaded extensions by re-scanning registered commands after deferred loading.  
   [Link](https://github.com/earendil-works/pi/pull/5399)

8. **#5397 — Alt+Delete word deletion on macOS** [CLOSED]  
   Adds Mac-native Alt+Delete behavior (delete previous word). Previously only deleted single character.  
   [Link](https://github.com/earendil-works/pi/pull/5397)

9. **#5371 — Space between skill and user messages** [CLOSED]  
   Fixes cosmetic issue where `/skill:foo bar` would concatenate skill message and user input without a space.  
   [Link](https://github.com/earendil-works/pi/pull/5371)

10. **#4383 — Update tool configuration API in SDK docs** [CLOSED]  
    Replaces outdated `readTool`, `bashTool`, `grepTool` examples with current `createAgentSession({ tools })` API using allowlists.  
    [Link](https://github.com/earendil-works/pi/pull/4383)

---

## Feature Request Trends

1. **Remote execution / SSH support** — Multiple issues request routing Pi's filesystem and spawn operations to remote hosts or containers. #5341 and #5350 show growing demand for distributed workflows.

2. **Provider breadth** — Consistent requests for new model providers: Amazon Bedrock Mantle (#5363), NVIDIA NIM (landed in v0.78.1), and improved Vertex/GCP metadata support (#5323).

3. **TUI enhancements** — Mouse support (#4728), alt-buffer rendering (#5357), configurable working loaders (#5411), and keybinding flexibility (#5281) indicate users want richer terminal interactions.

4. **Extension API deepening** — Requests for slash command execution from extensions (#5367), custom grep commands (#5354), and MCP structuredContent support (#5364) show the extension ecosystem maturing.

---

## Developer Pain Points

- **Silent failures and hangs** — #4945 (Codex hang) and #5331 (silent maxTokens ignore) erode trust. Users frustrated by lack of error feedback.
- **Cross-platform path issues** — #5350 (Windows host + Linux remote) and #5378 (relative vs absolute paths) highlight the pain of mixed-OS development environments.
- **Provider compatibility quirks** — #5349 (provider-level `compat` ignored), #5384 (developer role still sent through OpenRouter), and #5352 (Fireworks JSON Schema rejection) suggest the provider abstraction layer needs hardening.
- **Session state instability** — #5386 (crashes on missing usage field), #5373 (idle CPU from TUI), and #5368 (phantom follow-up prompts) point to session management bugs affecting daily workflow reliability.
- **Update system friction** — #5388 (`pi-fancy-loader` always marked updatable) and #5365 (Bun-installed Pi using Node) show install/update UX gaps.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-05

## Today’s Highlights

A new nightly release v0.17.1-nightly continues the polish cycle, while the community’s focus sharpens on two major themes: **cross-session/persistent memory** (user-level auto-memory at `~/.qwen/memories/` and global `/stats` dashboards) and **daemon-mode readiness** (ACP Streamable HTTP transport tracking, workspace service refactoring). The vim mode PR continues to draw heavy attention, and a flurry of CI/triage workflow bugs surfaced, indicating growing pains from increased community contribution velocity.

---

## Releases

- [**v0.17.1-nightly.20260604.16dd99fa3**](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1-nightly.20260604.16dd99fa3) — Nightly with `chore(release): v0.17.1` by qwen-code-ci-bot. No user-facing release notes; pure build & CI pipeline bump.

---

## Hot Issues (10 selected)

1. **[#4493 – rider无法登录qwen code](https://github.com/QwenLM/qwen-code/issues/4493)** (Open, 10 comments)  
   *Authentication/OAuth* — Rider (JetBrains IDE) login failure with redirect loops for Aliyun token plans. High engagement possibly because it blocks China-based IDE users. **Community signal**: still untriaged after 10 days; needs maintainer attention.

2. **[#4722 – Statusline shows model id instead of name](https://github.com/QwenLM/qwen-code/issues/4722)** (Closed, 5 comments)  
   *UI/Model-Switching* — `qwen3-coder-plus` displayed instead of `Qwen3 Coder Plus`; also broke multi-key setups. Quickly closed by @zzhenyao. **Why it matters**: regressed UX polish in the 0.17 strata.

3. **[#4754 – `/model` should not persist to settings by default](https://github.com/QwenLM/qwen-code/issues/4754)** (Closed, 5 comments)  
   *CLI/Model-Switching* — `/model` writes to `settings.json` even for ephemeral session switches, confusing users. Closed by author @zzhenyao. Shows community preference for session-only over persistent side effects.

4. **[#4723 – Does Qwen Code support Rules or Instructions?](https://github.com/QwenLM/qwen-code/issues/4723)** (Open, 5 comments)  
   *Configuration/Memory* — Asking for a `claude_code_rules`/`copilot_instructions`-style system. No maintainer reply yet. **Why it matters**: signals desire for a lightweight, non-skill rule mechanism.

5. **[#4597 – feat(stats): 增强stats能力，支持跨session的全局用量统计](https://github.com/QwenLM/qwen-code/issues/4597)** (Open, 4 comments, 👍1)  
   *Telemetry/Analytics* — `/stats` currently memory-only. Request for `~/.qwen/usage-history.json` persistence and a dashboard. Already a PR (#4779) in flight; high alignment with the memory persistence thread.

6. **[#4747 – Support global user-level auto-memory at ~/.qwen/memories/](https://github.com/QwenLM/qwen-code/issues/4747)** (Open, 4 comments)  
   *Memory/Cross-Project* — Mirrors Claude’s user memory: preferences, working style learned once, shared across projects. A PR (#4764) landed same day. **Trend**: the community is asking for Claude-level memory parity.

7. **[#4783 – About aes-128-ecb](https://github.com/QwenLM/qwen-code/issues/4783)** (Open, 3 comments)  
   *Security* — Is AES-128-ECB safe? Moderate concern given ECB’s deterministic nature. Signals growing security awareness in the community; needs an official posture.

8. **[#4421 – feat(diagnostics): 本地问题诊断框架](https://github.com/QwenLM/qwen-code/issues/4421)** (Open, 3 comments)  
   *Diagnostics* — Ring buffer + diagnostic ID + `/bug collect bundle` for local-first issue reporting. Low ceremony, no auto-upload. Useful for support triage.

9. **[#4264 – `/compress-fast` non-AI assisted context reduction](https://github.com/QwenLM/qwen-code/issues/4264)** (Open, 3 comments)  
   *Performance/Context* — User wants a fast trim that strips tool calls/thinking without LLM. **Why it matters**: users with local models or token budgets need cheap compression.

10. **[#4782 – tracking(serve): ACP Streamable HTTP transport](https://github.com/QwenLM/qwen-code/issues/4782)** (Open, 1 comment)  
    *Daemon/ACP* — Implementation status and upgrade plan for ACP Streamable HTTP. Links Zed, Goose, JetBrains compatibility. **Why it matters**: official tracking means the daemon is nearing editor-agnostic maturity.

---

## Key PR Progress (10 selected)

1. **[#4677 – fix(cli): fix vim mode Esc leak, Enter submit, render lag](https://github.com/QwenLM/qwen-code/pull/4677)** (Open)  
   *UI/Vim Mode* — Three vim fixes plus missing NORMAL commands (word motions, delete, yank). Highest-touch UI PR; likely to unblock vim-using daily drivers.

2. **[#4774 – refactor(daemon): simplify code and strip PR/commit references](https://github.com/QwenLM/qwen-code/pull/4774)** (Open)  
   *Daemon Cleanup* — 58 files simplified: extract helpers (`resolveWithVote`, `rejectForbidden`), remove stale commit references. Prepares daemon branch for squash-merge into main.

3. **[#4779 – feat(stats): add interactive /stats dashboard with cross-session tracking](https://github.com/QwenLM/qwen-code/pull/4779)** (Open)  
   *Telemetry* — Three-tab dashboard (Session/Activity/Efficiency) with history persistence. Directly addresses #4597. **Community excitement**: fast turnaround from issue to PR.

4. **[#4764 – feat(memory): add user-level auto-memory at ~/.qwen/memories/](https://github.com/QwenLM/qwen-code/pull/4764)** (Open)  
   *Memory* — Adds cross-project memory directory, mirrors Claude’s scope design. Closes #4747. Uses existing 4-type taxonomy. **Key impact**: reduces cold-start learning for new projects.

5. **[#4705 – feat(daemon): add POST /session/:id/language for runtime language switching](https://github.com/QwenLM/qwen-code/pull/4705)** (Open)  
   *Daemon* — HTTP endpoint for runtime UI/LLM language switch without polluting transcript. Follows existing ACP extMethod pattern.

6. **[#4708 – fix(core): allow intentional foreground sleep for backoff](https://github.com/QwenLM/qwen-code/pull/4708)** (Open)  
   *Core* — Adds `# intentional-sleep:` comment escape hatch for shell commands (capped at 10 min). Prevents total blocking of legitimate backoff scripts.

7. **[#4596 – fix(core): recurse into submodule files when crawling git repos](https://github.com/QwenLM/qwen-code/pull/4596)** (Open)  
   *Core/Git* — Adds `--recurse-submodules` to `git ls-files` so submodule contents are crawled. Fixes #4568. **Impact**: users with monorepo submodule structures get correct context.

8. **[#4647 – fix(clipboard): use platform-native tools for image paste on Linux](https://github.com/QwenLM/qwen-code/pull/4647)** (Open)  
   *Linux/WSL* — Replaces native module with `wl-paste`/`xclip`. Closes #3517, #2885. Maintainer @LaZzyMan confirmed the bug; long-standing pain resolved.

9. **[#4756 – fix(computer-use): auto-approve install in auto-approve modes](https://github.com/QwenLM/qwen-code/pull/4756)** (Open)  
   *Computer Use* — First-call install now auto-approved in YOLO/AUTO_EDIT/AUTO modes. Fixes UX regression for power users in high-trust workflows.

10. **[#4772 – Desktop: Cannot send message after pressing Escape](https://github.com/QwenLM/qwen-code/issues/4772)** (Open, 0 comments → no PR yet)  
    *Desktop UI* — Input field becomes un-sendable after blur + re-edit. **Important**: desktop app is a growth vector; this blocks basic chat UX.

---

## Feature Request Trends

- **Persistent Memory & User Context** – The strongest signal this week. Multiple requests for cross-session memory (`~/.qwen/memories/`), cross-project facts, and `/stats` persistence. Users want Claude-level memory parity.
- **Daemon / ACP Maturity** – ACP Streamable HTTP transport, workspace service extraction, and language switching all point to preparing `qwen serve` as a first-class, editor-agnostic backend.
- **Non-AI Compression + Fast Context Trimming** – Users with local models or token budgets want `/compress-fast` (no LLM) and structured trim options (strip tool calls, thinking, etc.).
- **Platform-Native Integrations** – Linux clipboard (`wl-paste`/`xclip`), headless browser handling, and git worktree support indicate a push toward better Linux/container/WSL support.

---

## Developer Pain Points

1. **CI / Workflow Confusion** – Multiple overlapping issue triage workflows (4 workflows triggering on `opened`/`reopened`), literal file paths posted instead of comment content (#4785, #4786). Contributes maintainer overhead.
2. **Auto-Update Failures on macOS/Linux** – `sudo npm install -g` + non-root auto-update spawn → EACCES (#4627, #4643). Workaround added but core issue remains.
3. **Desktop App Input State Bugs** – Escape→blur→re-edit blocks message send (#4772) — basic interactivity regression in a growth surface.
4. **Headless Linux Crashes** – `/bug`, `/docs`, `/insight` crash with `xdg-open ENOENT` on SSH/containers (#4712). PR #4716 fixes with `openBrowserSecurely()`.
5. **MCP / Tool Cache Busting** – Deferred-tools listing baked into cached system prompt → every tool discovery busts prompt cache (#4777). Performance-critical for heavy MCP setups.
6. **Security/Auth Questions** – AES-128-ECB safety (#4783) and Rider OAuth redirect loops (#4493) both untriaged, signaling a need for clearer security posture documentation.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-05

## Today's Highlights
The community saw a surge in developer experience improvements, with **12 open issues and 27 PRs** updated in the last 24 hours. Critical bug fixes are converging: two separate PRs target the underscored MCP server name parsing bug, and a rollback mechanism for provider switching failures is being reviewed. The v0.9.0 planning cycle is visibly accelerating, with multiple PRs landing richer PlanArtifact schema, per-model behavior profiles (HarnessPosture), and transcript UI enhancements.

## Releases
No new releases in the last 24 hours. Latest stable remains v0.8.53.

## Hot Issues

### 1. [#1920 — Clipboard copy silently fails on non-wlroots Wayland compositors (e.g. niri)](Hmbown/CodeWhale Issue #1920)
Long-standing Wayland integration issue. Affects users on modern compositors like niri; clipboard reads/writes via `wl-copy` silently fail. 4 comments, no resolution yet.

### 2. [#2735 — Mimo endpoint URL is incorrect](Hmbown/CodeWhale Issue #2735)
User reports that the Xiaomi Mimo endpoint configuration in the docs is wrong, providing correct OpenAI- and Anthropic-compatible URLs. Minor but potentially blocking for Mimo users.

### 3. [#2749 — Support project-level `.codewhale/mcp.json` auto-merge](Hmbown/CodeWhale Issue #2749)
Feature request: the install page advertises project-level MCP config, but v0.8.53 only loads from global configuration. 2 comments, a PR (#2751) is already open.

### 4. [#2641 — `read_file` on PDF without `pages` parameter causes channel close](Hmbown/CodeWhale Issue #2641)
PDF reading hangs when `pages` is omitted, requiring ESC interrupt. Specifying `pages` works fine. Impacts users processing academic transcripts. 2 comments.

### 5. [#2648 — Deferred tool hydration renders as a completed run](Hmbown/CodeWhale Issue #2648)
UX bug: when a deferred tool’s schema is loaded but the tool hasn’t executed, the transcript misleadingly shows `run done`. Filed by maintainer. A PR (#2757) is already open.

### 6. [#2754 — Switching to Kimi K2.6 causes auth failure and locks IDE](Hmbown/CodeWhale Issue #2754)
High-impact bug: switching provider from DeepSeek to Moonshot/Kimi fails auth and blocks returning to DeepSeek, leaving IDE unusable. A PR (#2755) offers a fix with rollback.

### 7. [#2666 — Agents need visible token context and resource usage during long tasks](Hmbown/CodeWhale Issue #2666)
Telemetry feedback from agent harness testing: agents lack visibility into token budget, context pressure, elapsed time, and child-agent status. Filed by maintainer.

### 8. [#2752 — Run Trace Export System for WhaleFlow/Model Lab](Hmbown/CodeWhale Issue #2752)
Feature request for structured export of run traces (model, parameters, context, output, timing). No comments yet.

### 9. [#2744 — MCP tool name parsing breaks when server name contains underscores](Hmbown/CodeWhale Issue #2744)
Parsing bug: `split_once('_')` in `McpPool::parse_prefixed_name` misroutes tools for servers like `my_db`. Two PRs (#2746, #2747) address this.

### 10. [#2743 — Adapt Claude Code skill ecosystem](Hmbown/CodeWhale Issue #2743)
Feature request: direct compatibility with Claude Code skills (`skill-installer`), noting that CodeWhale’s rewrite may not faithfully replicate original skill behavior.

## Key PR Progress

### 1. [#2757 — fix(tui): render hydrated deferred-tool results as tool loaded, not run done](Hmbown/CodeWhale PR #2757)
Closes #2648. Adds `ToolStatus::Hydrated` variant so the TUI shows a loading state rather than a misleading completed-run card.

### 2. [#2756 — docs: clarify Xiaomi MiMo Token Plan region override](Hmbown/CodeWhale PR #2756)
Documentation fix clarifying Singapore endpoint default and how to override for China-region accounts.

### 3. [#2755 — fix(tui): roll back provider after auth failure](Hmbown/CodeWhale PR #2755)
Closes #2754. Keeps a pending snapshot; on auth failure, restores previous provider/model/config. Includes regression tests.

### 4. [#2753 — feat(tui): multi-tab system with cross-tab collaboration](Hmbown/CodeWhale PR #2753)
Major UX overhaul: introduces `TabManager`, per-tab state persistence, keyboard shortcuts, and cross-tab task delegation primitives. Ambitious but likely high-impact.

### 5. [#2751 — fix(mcp): merge workspace MCP config](Hmbown/CodeWhale PR #2751)
Closes #2749. Merges workspace `.codewhale/mcp.json` with global config, with workspace servers overriding same-name entries. Also defaults workspace MCPs to workspace root as cwd.

### 6. [#2737 — fix(skills): union configured skills_dir with workspace skills](Hmbown/CodeWhale PR #2737)
Fixes a bug where `or_else` fallback caused workspace skills to be ignored when any skill existed globally. Now unions both sources.

### 7. [#2750 — fix(tui): price Xiaomi MiMo primary models](Hmbown/CodeWhale PR #2750)
Addresses #2731. Adds pricing lookup for `mimo-v2.5` and `mimo-v2.5-pro`, reusing DeepSeek V4 pricing helpers.

### 8. [#2747 — fix(tui): preserve underscored MCP server names](Hmbown/CodeWhale PR #2747)
Matches known server names before splitting, preferring the longest match. Adds regression coverage for underscored and overlapping names. Refs #2744.

### 9. [#2746 — fix: parse MCP server names with underscores](Hmbown/CodeWhale PR #2746)
Alternative fix for #2744. Uses longest known server-name prefix before splitting. Both PRs are in parallel; likely one will merge.

### 10. [#2732 — Phase 3: pausable command lifecycle](Hmbown/CodeWhale PR #2732)
Adds `pausable: true` support for custom slash commands: pause with ESC, type while paused, resume/reset. Builds on Phase 1 (frontmatter) and Phase 2 (hook gate).

## Feature Request Trends
- **Claude Code ecosystem compatibility** (#2743): Users want CodeWhale to natively support Claude Code skills without rewriting.
- **Run trace export** (#2752): Growing demand for structured provenance tracking across multi-model workflows (WhaleFlow/Model Lab).
- **Per-model behavior profiles** (#2741 PR): The `HarnessPosture` data model signals a desire for model-specific prompt layering, tool surface, and safety posture.
- **Transcript UX improvements**: Multiple PRs (#2738, #2740, #2734) target collapsing dense tool-call runs, multi-line detail popovers, and better transcript summaries.
- **Provider trait unification** (#2479 PR): A large refactor to replace dual `ProviderKind`/`ApiProvider` enums with a single trait, indicating long-term provider extensibility.

## Developer Pain Points
- **Wayland clipboard integration** (Issue #1920): Silent failures on non-wlroots compositors remain unresolved for weeks.
- **PDF reading without `pages`** (Issue #2641): Hangs and requires ESC interrupt; regression from earlier working behavior.
- **Provider switching lockout** (Issue #2754): Auth failure for Kimi/K2.5 leaves IDE unusable with no recovery path.
- **MCP underscore parsing** (Issue #2744): Two competing PRs indicate confusion about the best fix approach.
- **Task hang without timeout** (Issue #2739): Users report tasks freezing even after v0.8.52’s 300-second timeout fix; the `--continue` flag loses session context.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*