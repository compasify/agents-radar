# AI CLI Tools Community Digest 2026-07-15

> Generated: 2026-07-15 01:16 UTC | Tools covered: 9

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

# AI CLI Developer Tools — Cross-Tool Comparison Report
**Date:** 2026-07-15 | **Analyst:** Senior Technical Analyst, AI Developer Tools Ecosystem

---

## 1. Ecosystem Overview

The AI CLI tools landscape on July 15, 2026 shows a rapidly maturing ecosystem where seven major tools are competing across stability, platform parity, and workflow integration. Claude Code and OpenAI Codex continue to lead in release velocity and community engagement, while Gemini CLI and Qwen Code demonstrate strong infrastructure-focused development cycles. Windows platform reliability remains the single largest shared pain point across all tools, with Claude Code, Codex, and Copilot CLI all fielding critical bugs around VM services, WebView crashes, and orphaned processes. A clear trend toward multi-agent orchestration, MCP/plugin ecosystem maturity, and session management UX is visible across all projects, though each tool differentiates through provider strategy—Claude Code through Anthropic-first optimization, Codex through model family migration, and Gemini CLI through native OS integration.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Active (24h) | Releases (24h) | Release Velocity |
|------|---------------------|------------------|----------------|------------------|
| **Claude Code** | 12+ hot issues | 9 PRs | 2 patches (v2.1.209, v2.1.210) | High: daily patch cadence |
| **OpenAI Codex** | 10 hot issues | 10 PRs merged | 6 releases (rust-v0.144.4 to v0.145.0-alpha.12) | Very High: alpha train + stable |
| **Gemini CLI** | 10 hot issues | 5+ PRs | 1 nightly (v0.52.0-nightly) | Moderate: nightly only |
| **Copilot CLI** | 10 hot issues | 0 PRs merged | 2 releases (v1.0.71-1, v1.0.71-2) | High: multiple daily releases |
| **Kimi Code CLI** | 2 issues | 3 PRs merged | 0 releases | Low: no release in 24h |
| **OpenCode** | 10 hot issues | 10 PRs | 1 patch (v1.18.1) | Moderate: stable + patches |
| **Pi (pi-mono)** | 10 hot issues | 10 PRs | 1 release (v0.80.7) | High: breaking + features |
| **Qwen Code** | 10 hot issues | 10 PRs | 4 releases (stable + nightly + preview + SDK) | Very High: multi-release |
| **DeepSeek TUI (Codewhale)** | 10 issues | 9 PRs | 0 releases (v0.8.68 RC in review) | Low: RC phase |

**Key observations:**
- **Codex** and **Qwen Code** lead in raw PR throughput (10 merged each)
- **Codex** and **Claude Code** show highest community engagement on issues (52-83 comments on top issues)
- **Kimi Code** shows lowest activity—only 2 issues and 3 PRs in 24h, suggesting maintainer bandwidth constraints
- **Copilot CLI** shipped 2 releases with zero merged PRs, indicating pre-built features or internal-only changes
- **Pi** shipped a breaking change (v0.80.7) alongside active PRs—highest risk/reward profile

---

## 3. Shared Feature Directions

The following feature requirements appear across **multiple tool communities**, indicating converging market needs:

| Feature | Tools Requesting | Community Signal |
|---------|-----------------|------------------|
| **Customizable/CONFIGURABLE terminal status bar** | Codex (#17827, 103👍), Claude Code (implied via compact tool summaries), Gemini CLI (terminal rendering fixes) | Strong: Codex users explicitly cite Claude Code's status bar as benchmark |
| **Subagent working directory control** | Claude Code (#12748, 26👍, 8 months open), Gemini CLI (subagent routing issues) | Long-standing: Claude Code issue open since Nov 2025 |
| **Session management UX improvement** (fork, rename, search, archive) | OpenCode (5 PRs by ohsalmeron), Codex (#25463), Claude Code (#77531) | Very High: OpenCode dedicated contributor effort |
| **Multi-workspace daemon support** | Qwen Code (#6378, 23 comments), Gemini CLI (workspace env isolation PR #28319) | Emerging: Qwen Code community heavily engaged |
| **MCP/plugin ecosystem hardening** (concurrency, caching, auth bridging) | Codex (3 PRs on MCP serialization/caching), Copilot CLI (#4096 OAuth bridging), Claude Code (plugin hook fixes), Qwen Code (trust bypass fix) | High: All tools hitting real-world scaling limits |
| **Rate-limit transparency** (visible counters, reset timers) | Codex (#29968, #30221), Kimi Code (#2318), Claude Code (implied) | Moderate: users want dashboarding, not error messages |
| **Voice mode reliability** | Copilot CLI (#4024, ASR silent failures), Codex (Browser Use crashes) | Niche but critical for accessibility use cases |
| **Windows platform stability** | All tools except Kimi Code and DeepSeek TUI | Universal: single largest cross-tool pain point |
| **Native PDF/document reading** | Copilot CLI (#443, 33👍), implied across others | Niche: strong in academic/technical documentation workflows |
| **Agent/instruction trust & rule-following** | DeepSeek TUI (#4032, 35 comments), Copilot CLI (#4123), Gemini CLI (false success signals) | High: fundamental trust gap in agent behavior |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------|-----------|----------|----|-----------|--------------|
| **Primary Model Strategy** | Anthropic-first (Opus/Fable) | OpenAI-first (GPT-5.6 family) | Gemini 3 native | GitHub Copilot models | Kimi/Moonshot models | Multi-provider (Claude, GPT, Gemini, xAI) | Multi-provider bridge | Qwen models + multi-provider | DeepSeek + multi-provider |
| **Target User** | Power developers, CLI-heavy | Enterprise, CI/CD integration | Google Cloud ecosystem | GitHub-centric workflows | Moonshot AI ecosystem | Cross-platform power users | Self-hosted, provider-agnostic | Chinese market + global | Cost-sensitive, terminal purists |
| **Unique Differentiator** | Agent/advisor system, rules engine | Detached reviews, MCP caching | Native bash affinity, AST-aware tooling | GitHub MCP toolset, plugin marketplace | Kosong provider architecture | Claude Code hooks compatibility | Session-affinity config, provider bridging | Multi-workspace daemon, DingTalk channel | Underwater TUI, compaction engine |
| **Platform Strength** | macOS/Linux strong, Windows weak | macOS strong, Windows weak | Linux strong, others improving | GitHub integration deep | Limited data | Cross-platform but v2 migration struggling | Broad provider support | Strong Chinese ecosystem | Unix-like focus, BSD support |
| **Release Philosophy** | Daily patches, weekly features | Alpha train + stable | Nightly only | Multiple daily releases | Infrequent | Stable + patches | Breaking changes alongside features | Multi-release (stable/nightly/preview) | RC-driven, periodic stable |
| **Community Health** | Very High | High | Moderate | High | Low | High | Moderate | High | Moderate |

**Key differentiators:**

- **Claude Code** is the most feature-complete CLI for Anthropic models, with the richest agent/advisor system and permission rules engine. Community is the most vocal about Windows gaps.
- **OpenAI Codex** leads in CI/CD integration (detached reviews as full review-agent turns) and MCP infrastructure (caching, serialization). Most active on model lifecycle management (GPT-5.4 → 5.6 migration).
- **Gemini CLI** pursues the most architecturally ambitious direction—native OS sandboxing via POSIX tooling and AST-aware codebase navigation—but execution lags on fundamental reliability (agent hangs, false success signals).
- **Copilot CLI** benefits from deepest GitHub integration and fastest release cadence, but carries the most platform-specific bugs (Windows orphans, Ubuntu keychain, snap packaging).
- **OpenCode** is the most aggressive multi-provider aggregator, with 5 PRs on session management alone. Desktop v2 migration causing significant community friction.
- **Pi (pi-mono)** serves the niche of self-hosted, provider-agnostic development with the most flexible session-affinity and provider bridging, but breaking changes create migration burden.
- **Qwen Code** is the strongest in Chinese market integration (DingTalk channel, SDK) and daemon architecture, but CI gap and configuration persistence are growing pains.
- **DeepSeek TUI** differentiates through visual design (underwater TUI) and cost-tracking infrastructure, but has the smallest community and slowest iteration.

---

## 5. Community Momentum & Maturity

| Tool | Momentum Signal | Maturity Signal | Risk Factors |
|------|----------------|-----------------|--------------|
| **Claude Code** | 2 patches/day, 83-comment bug threads, single contributor filing 12+ docs issues | v2.1.x stable, mature permission system | Windows Cowork VM cluster of 75+ comments; advisor model routing regression |
| **OpenAI Codex** | 6 releases in 24h, 10 PRs merged, 119👍 on auto-resolve request | Multiple stable channels (rust-v0.144.4), MCP infrastructure maturing | Windows stability crisis (crashes, WebView failures); context window discrepancies |
| **Gemini CLI** | Active nightly development, AST-aware tooling exploration | v0.52.x still pre-1.0 | Agent hang deadlocks not resolved after months; subagent adoption gaps |
| **Copilot CLI** | 2 releases/day, strong feature additions (plugin marketplace, voice devices) | v1.0.71 stable, GitHub ecosystem integration | 0 PRs merged in 24h suggests internal development; OAuth bridging broken |
| **Kimi Code CLI** | 3 PRs merged (all bug fixes) | Stable but slow iteration | Only 2 issues updated; TPD bug open 2 months; maintainer bandwidth concern |
| **OpenCode** | 10 PRs in 24h, dedicated contributor (ohsalmeron) landing 5 session management features | v1.18.1 stable, Claude Code hooks compatibility | Desktop v2 migration breaking 4+ features; plugin/friction on WSL |
| **Pi (pi-mono)** | 10 PRs active, breaking change shipped, xAI OAuth competition | v0.80.x active, broad provider support | Session-affinity configuration churn; HTTP timeout regression |
| **Qwen Code** | 4 releases in 24h, 10 PRs, multi-workspace feature landing | v0.19.10 stable, SDK release | CI regression detection gap; session configuration persistence |
| **DeepSeek TUI** | 9 PRs active, v0.8.68 RC in final review | Pre-v1.0, RC phase | Smallest community; agent rule-following trust gap (35 comments) |

**Maturity leaders:** Claude Code (v2.1.x), OpenAI Codex (v0.144.4 stable), Copilot CLI (v1.0.71)
**Rapidly iterating:** OpenAI Codex (alpha train), Qwen Code (multi-release), Pi (breaking + features)
**Community growth concerns:** Kimi Code (low activity), DeepSeek TUI (small community, trust issues)

---

## 6. Trend Signals

### Convergent Industry Trends

1. **Multi-agent orchestration is the primary frontier.** All major tools are building subagent systems, but fundamental gaps remain: false success signals (Gemini CLI, #22323), background agents not waking parents (Codex, #15723), ambiguous stop semantics (DeepSeek TUI, #4359), and per-subagent fallback models (Claude Code, #73931). The community is demanding reliable, observable multi-agent workflows—not just feature checkboxes.

2. **MCP/plugin ecosystems are hitting production-scale friction.** Codex merged 3 MCP-specific PRs (concurrent write serialization, catalog caching, runtime construction). Copilot CLI has OAuth bridging broken (#4096). Qwen Code fixed MCP trust bypass (#6924). Claude Code has hook rule matching fixes. Every tool with MCP support is now dealing with concurrency, caching, and security issues that only emerge under real usage.

3. **Windows reliability is the ecosystem's biggest shared liability.** Claude Code (Cowork VM service failures, Bun crashes), Codex (WebView crashes, `chrome.dll` access violations), Copilot CLI (orphaned processes, snap packaging), and OpenCode (WSL startup failures) all have critical Windows bugs. Only Kimi Code and DeepSeek TUI show no Windows-specific issues—likely due to smaller user bases or different platform focus.

4. **Session management UX is becoming a competitive differentiator.** OpenCode dedicated 5 PRs to session lifecycle (fork, rename, delete, archive, compact). Codex and Claude Code both have high-upvoted requests for cross-session dashboards. Claude Code added elapsed-time counters on collapsed tool summaries. The community is moving beyond "it works" toward "it's pleasant to navigate."

5. **Model lifecycle management is accelerating.** Codex deprecated GPT-5.4 in favor of 5.6 variants (#33173). Pi added GPT-5.6 Luna/Terra/Sol models (#6636). Claude Code has advisor model routing regressions (#73365). DeepSeek TUI users report streaming rendering can't keep up with fast models (#4270). The pace of model releases is outpacing tool compatibility testing.

6. **Rate-limit and cost transparency is a trust issue.** Kimi Code TPD bug open 2 months (#2318). Codex subscription tier misassignment (#29968). Pi fixing cache-write pricing (#4318). DeepSeek TUI fixing pricing accuracy (#4351). Users are demanding real-time, accurate cost visibility—not post-hoc bills or vague error messages.

7. **Agent rule-following and trust are degrading user confidence.** DeepSeek TUI's #4032 (35 comments, agent ignoring constitution) and Claude Code's permission rule confusion (#57132) and Gemini CLI's false success signals (#22323) all point to the same problem: users cannot trust agents to follow instructions reliably, which undermines the entire value proposition of autonomous coding agents.

### What Developers Should Watch

- **Claude Code's Windows Cowork VM issue** (#74649, 75+ comments) is a bellwether for enterprise Windows adoption. If unresolved, it will drive Windows power users to Codex or Copilot CLI.
- **OpenCode's Desktop v2 migration** is revealing the cost of breaking changes in a multi-provider tool. The community's frustration with forced migrations (4+ broken features) is a cautionary tale for all tools planning UX overhauls.
- **Codex's alpha→stable pipeline** (6 versions in 24h) demonstrates the most disciplined release engineering. Other tools should examine their own release processes against this model.
- **Gemini CLI's AST-aware tooling exploration** (#22745) represents the most innovative direction for codebase navigation. If successful, it could set a new standard for token-efficient file operations.
- **Pi's breaking change in v0.80.7** (session-affinity configuration) alongside active feature development shows the tension between architectural cleanup and user stability. The community's reaction (no immediate pushback) suggests Pi users expect breaking changes.

*Report generated from 2026-07-15 community digest data across 9 AI CLI tools.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-15** | Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following Skills have generated the most community discussion and attention via PR activity:

### 1.1 Fix: `run_eval.py` Reports 0% Recall — Core Infrastructure Crisis
- **PR**: [#1298](https://github.com/anthropics/skills/pull/1298) (Open)
- **Author**: MartinCajiao | Created: 2026-06-10
- **Functionality**: Fixes the skill-creator evaluation pipeline (`run_eval.py`, `run_loop.py`, `improve_description.py`) which has been reporting **recall=0%** for all skill descriptions regardless of content. The fix installs the eval artifact as a real skill, repairs Windows stream reading, improves trigger detection, and enables parallel workers.
- **Discussion highlights**: Ties directly to Issue #556 (12 comments, 7👍) and Issue #1169 (3 comments). Multiple independent reproductions confirmed the bug—the description-optimization loop was optimizing against noise for months.
- **Status**: Open. This is the highest-traffic PR and represents a blocking issue for the entire skill-creator workflow.

### 1.2 Add: `self-audit` Skill — Mechanical Verification + Reasoning Quality Gate (v1.3.0)
- **PR**: [#1367](https://github.com/anthropics/skills/pull/1367) (Open)
- **Author**: YuhaoLin2005 | Created: 2026-06-28
- **Functionality**: A universal output auditing skill that performs **mechanical file verification** (checking every claimed output file exists and matches type) followed by a **four-dimension reasoning audit** in damage-severity priority order. Works with any project, tech stack, or model.
- **Discussion highlights**: Represents an emerging category—quality assurance for AI outputs. The author has also opened Issue #1385 proposing a three-gate pipeline extension.
- **Status**: Open, recently updated (2026-07-02).

### 1.3 Fix: Trigger Detection Misses Real Skill Name
- **PR**: [#1323](https://github.com/anthropics/skills/pull/1323) (Open)
- **Author**: Polluelo978 | Created: 2026-06-16
- **Functionality**: Fixes `run_eval.py::run_single_query` which fails to detect that a skill triggered, causing recall=0% for every should-trigger query. When all candidates tie at 0, the optimization loop returns the original description unchanged.
- **Discussion highlights**: Mirrors the same root issue as #1298 and #1099—the skill-creator eval pipeline is fundamentally broken on multiple fronts.
- **Status**: Open. Part of a cluster of related fixes.

### 1.4 Add: `color-expert` Skill
- **PR**: [#1302](https://github.com/anthropics/skills/pull/1302) (Open)
- **Author**: meodai | Created: 2026-06-10
- **Functionality**: A self-contained color-expertise skill covering color naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, CSS named), color spaces with a "what to use when" decision table, and practical color knowledge for any task.
- **Discussion highlights**: Well-received niche specialization; fills a gap in creative/design skills.
- **Status**: Open.

### 1.5 Add: `testing-patterns` Skill
- **PR**: [#723](https://github.com/anthropics/skills/pull/723) (Open)
- **Author**: 4444J99 | Created: 2026-03-22
- **Functionality**: Comprehensive testing skill covering the full stack: Testing Trophy model philosophy, AAA pattern unit testing, React component testing with Testing Library, and guidance on what to test vs. what not to test.
- **Discussion highlights**: Addresses a widely requested category—automated testing guidance—within a single-conversation scope.
- **Status**: Open.

### 1.6 Add: `document-typography` Skill
- **PR**: [#514](https://github.com/anthropics/skills/pull/514) (Open)
- **Author**: PGTBoos | Created: 2026-03-04
- **Functionality**: Typographic quality control for AI-generated documents: prevents orphan word wrap, widow paragraphs, and numbering misalignment—issues that affect every document Claude generates.
- **Discussion highlights**: Practical, universally applicable. Users noted these typographic problems are pervasive but rarely addressed.
- **Status**: Open.

### 1.7 Fix: ODT Skill — OpenDocument Text Creation and Template Filling
- **PR**: [#486](https://github.com/anthropics/skills/pull/486) (Open)
- **Author**: GitHubNewbie0 | Created: 2026-03-01
- **Functionality**: Adds ODT/ODS/ODF support for creating, filling, reading, and converting OpenDocument files. Triggers on mentions of ODT, ODS, OpenDocument, or LibreOffice document requests.
- **Discussion highlights**: Fills the LibreOffice/open-source document gap; users expressed strong demand for ISO-standard document format support.
- **Status**: Open.

---

## 2. Community Demand Trends

Analysis of Issues reveals the following most-anticipated directions:

| Demand Category | Key Issue(s) | Signal Strength |
|---|---|---|
| **Skill distribution & trust** | [#492](https://github.com/anthropics/skills/issues/492): Community skills under `anthropic/` namespace enable trust boundary abuse (34 comments, 2👍) | **Highest**—the community is deeply concerned about security and trust in skill distribution |
| **Organizational skill sharing** | [#228](https://github.com/anthropics/skills/issues/228): Enable org-wide skill sharing in Claude.ai (14 comments, 7👍) | **High**—enterprise users need systematic skill deployment without manual file sharing |
| **Skill-creator reliability** | [#556](https://github.com/anthropics/skills/issues/556): `run_eval.py` 0% trigger rate (12 comments, 7👍); [#1061](https://github.com/anthropics/skills/issues/1061): Windows compatibility failures (3 comments, 2👍) | **Critical**—multiple Issues confirm the skill creation pipeline is broken across Windows and Mac |
| **Skill loss / state persistence** | [#62](https://github.com/anthropics/skills/issues/62): Skills disappear after rename (10 comments, 2👍) | **Moderate**—users losing invested effort in skill authoring |
| **Agent governance & safety** | [#412](https://github.com/anthropics/skills/issues/412): Agent governance skill proposal (6 comments); [#1175](https://github.com/anthropics/skills/issues/1175): Security concerns with document handling (4 comments) | **Growing**—enterprise safety patterns and access control are emerging as a priority |
| **Reasoning quality gates** | [#1385](https://github.com/anthropics/skills/issues/1385): Three-gate pipeline proposal (3 comments) | **Emerging**—formalizing AI output quality verification |
| **Deduplication of skills** | [#189](https://github.com/anthropics/skills/issues/189): Duplicate skills across plugins (6 comments, 9👍) | **Moderate**—duplicate installations waste context window and confuse users |

**Notable**: There is no single "most-requested new skill direction" dominating the Issues. Instead, the community's loudest demand is **reliability of the skill creation and evaluation infrastructure itself**, rather than new skill content. The duplicates, trust, and persistence Issues suggest users are eager to build and share skills but are blocked by ecosystem stability concerns.

---

## 3. High-Potential Pending Skills

These PRs have active discussion and address clearly identified pain points—they are likely to be merged soon:

| PR | Skill | Why It May Land Soon |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `run_eval.py` 0% recall fix (MartinCajiao) | Blocking issue for *all* skill development; multiple independent reproductions; high community visibility |
| [#1323](https://github.com/anthropics/skills/pull/1323) | Run_eval trigger detection fix (Polluelo978) | Same root cause as #1298; addresses recall=0% on Mac (while #1298 targets Windows) |
| [#1261](https://github.com/anthropics/skills/pull/1261) | Isolate trigger-eval command files from live project (alvingarcia) | Fixes data corruption risk: eval writes synthetic commands into user's actual `.claude/commands/` |
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` skill (YuhaoLin2005) | Novel category (output verification); well-defined; no ecosystem dependency |
| [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` skill (meodai) | Self-contained; fills clear niche; no dependencies on other PRs |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` skill (4444J99) | High-demand topic; comprehensive but scoped to single conversation |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` skill (PGTBoos) | Universal applicability; addresses pain point every user faces |
| [#510](https://github.com/anthropics/skills/pull/510) | CONTRIBUTING.md (narenkatakam) | Repository health gap; closes community health score from 25%; explicitly requested via Issue #452 |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **not** for any single new skill, but for a **reliable skill creation and evaluation infrastructure**—the `run_eval.py` pipeline is fundamentally broken across platforms, producing false recall=0% signals that render the description-optimization loop ineffective, while trust boundary concerns (#492) and organizational sharing gaps (#228) block the ecosystem's ability to scale beyond individual users.

---

# Claude Code Community Digest — 2026-07-15

## Today's Highlights

Two patch releases landed today—v2.1.209 unblocks `/model` dialogs in background agent sessions, and v2.1.210 adds live elapsed-time counters on collapsed tool summaries. Meanwhile, the community is actively filing documentation gaps (over a dozen opened today by a single contributor), and a long-running Windows Cowork VM debate continues to generate heat with 75+ comments on a single issue.

## Releases

**v2.1.210** (latest): Added a live elapsed-time counter to collapsed tool summary lines, so long-running tool calls show ticking seconds instead of appearing stuck. Also introduced a startup warning for `Write(path)`, `NotebookEdit(path)`, and `Glob(path)` permission rules—users should migrate to `Edit(path)` or `Read(path)` instead.

**v2.1.209**: Fixed `/model` and other dialogs being blocked in `claude agents` background sessions. This reverts an overly broad guard that was introduced in a prior release.

## Hot Issues

| # | Issue | Comments | 👍 | Why It Matters |
|---|-------|----------|----|----------------|
| [#73365](https://github.com/anthropics/claude-code/issues/73365) | Advisor always "unavailable" with Fable 5 advisor (Opus 4.8 main) | 83 | 153 | **Highest-traffic bug.** Advisor model selection appears broken across all sessions on v2.1.198. Community energy is high—likely a model routing regression. |
| [#74649](https://github.com/anthropics/claude-code/issues/74649) | Missing HCS services: vfpext — Cowork not working on Windows 11 Pro | 75 | 4 | **Windows Cowork blocker.** Users hit `vfpext` service dependency missing on Win11. Heavy commenting suggests many are stuck. |
| [#49655](https://github.com/anthropics/claude-code/issues/49655) | Claude Desktop update fails with 0x80073CF6 when CoworkVMService is running | 16 | 9 | **Installation friction.** Update fails silently on Windows when the Cowork VM service is active. Requires manual service shutdown. |
| [#12748](https://github.com/anthropics/claude-code/issues/12748) | Add `cwd` parameter to Task tool for subagent working directory | 13 | 26 | **Long-standing feature request** (since Nov 2025). Needed for Git worktree support. Still unresolved after 8 months. |
| [#64592](https://github.com/anthropics/claude-code/issues/64592) | Cowork VM service not running on Windows 11 | 11 | 0 | **Fresh repro** with documented workaround. Extends a cluster of closed issues (#54891, #61559) that keep recurring. |
| [#57132](https://github.com/anthropics/claude-code/issues/57132) | Allow rules under `~/.claude/` show as loaded but don't match at runtime | 10 | 0 | **Permissions bug.** Rules targeting `~/.claude/` paths appear active but are silently ignored. Confusing for security-conscious users. |
| [#56089](https://github.com/anthropics/claude-code/issues/56089) | Allow configuring VM bundle (vhdx) storage location | 6 | 26 | **High-request Windows feature.** Cowork VMs consume disk space with no way to relocate the VHDX files. |
| [#53408](https://github.com/anthropics/claude-code/issues/53408) | MCP Microsoft 365 connector rejects personal accounts | 6 | 16 | **Auth UX gap.** Hotmail/Outlook.com/Live accounts cannot authenticate. OAuth flow hard-fails with no workaround. |
| [#66683](https://github.com/anthropics/claude-code/issues/66683) | Bun startup segfault on Windows + Intel Meteor Lake | 2 | 4 | **Hardware-specific crash.** Core Ultra 5 users (2024+ CPUs) hit segfault on startup. Prior report auto-closed as stale. |
| [#77625](https://github.com/anthropics/claude-code/issues/77625) | Claude Code crashes with 0xC0000005 on Windows (Bun-based versions) | 1 | 0 | **Crash-on-launch.** Bun runtime on Windows producing access violations. Fresh report, likely related to #66683 cluster. |

## Key PR Progress

| # | PR | Author | Status | What It Does |
|---|-----|--------|--------|--------------|
| [#77613](https://github.com/anthropics/claude-code/pull/77613) | claude-compare | 1napz | OPEN | New comparison tool for Claude sessions—purpose TBD but name suggests diff/side-by-side functionality. |
| [#77556](https://github.com/anthropics/claude-code/pull/77556) | fix(plugin-dev): validate-hook-schema.sh handles plugin hooks.json format | sorapallivenkatesh | OPEN | Fixes two bugs in the hook schema validator where the validation script rejected formats it was documented to accept. |
| [#77492](https://github.com/anthropics/claude-code/pull/77492) | fix(hookify): match Write and prompt rules | ShiroKSH | OPEN | Improves rule matching: inspects content passed to Write, maps prompt rules to UserPromptSubmit payload, adds regression coverage. |
| [#77260](https://github.com/anthropics/claude-code/pull/77260) | fix(hookify): match Write and prompt rules | ShiroKSH | CLOSED | Previous attempt—reopened, then superseded by #77492. Shows active iteration on hook rule matching. |
| [#77443](https://github.com/anthropics/claude-code/pull/77443) | fix(ralph-wiggum): make stop hook's jq error handling reachable | Yigtwxx | OPEN | Fixes `set -e` shell bug where jq failure was silently swallowed by piping through `2>&1`, making error recovery unreachable. |
| [#77442](https://github.com/anthropics/claude-code/pull/77442) | fix: repair issue-automation telemetry and dead days_back input | Yigtwxx | OPEN | Three correctness fixes: Statsig events timestamped in 1970, dead `days_back` input, and a scripting bug in the stale-staler workflow. |
| [#77439](https://github.com/anthropics/claude-code/pull/77439) | docs(plugins): sync security-guidance listing with v2.0.0 manifest | Yigtwxx | OPEN | Marketplace listing still references old v1.0.0 plugin data after a rewrite. Brings documentation in line with reality. |
| [#77427](https://github.com/anthropics/claude-code/pull/77427) | fix(pr-review-toolkit): make code-reviewer a leaf agent | ZaunEkko | OPEN | Restricts the PR code reviewer to repository-inspection tools only—prevents it from invoking sub-agents or review workflows. Security hardening. |
| [#76298](https://github.com/anthropics/claude-code/pull/76298) | docs: document Remote Control background-task panel | Arnesh-Vimalraj | CLOSED | Documents the web/mobile background-task panel and task status sync behavior introduced in v2.1.205. |

## Feature Request Trends

1. **Subagent working directory control** — The `cwd` parameter for the Task tool ([#12748](https://github.com/anthropics/claude-code/issues/12748), 26 👍) remains the top unaddressed feature after 8 months. Needed for Git worktrees and multi-repo workflows.

2. **VM storage flexibility** — Windows Cowork users want to configure VHDX storage location ([#56089](https://github.com/anthropics/claude-code/issues/56089), 26 👍). Current default path fills system drives with no relocation option.

3. **Cross-session task dashboard** — A native dashboard showing tasks across all sessions and background agents ([#77531](https://github.com/anthropics/claude-code/issues/77531)), not just one session's `/tasks` view.

4. **Per-subagent fallback models** — Declarative fallback model for subagents ([#73931](https://github.com/anthropics/claude-code/issues/73931)) when the pinned model is unavailable, rather than silently inheriting the main session model.

5. **Session title language configuration** — Allow users to control the language of auto-generated session titles ([#72004](https://github.com/anthropics/claude-code/issues/72004)), rather than always defaulting to English.

## Developer Pain Points

- **Windows Cowork reliability** continues to dominate: VM service failures ([#74649](https://github.com/anthropics/claude-code/issues/74649), [#64592](https://github.com/anthropics/claude-code/issues/64592)), update blockers ([#49655](https://github.com/anthropics/claude-code/issues/49655)), and Bun runtime crashes ([#66683](https://github.com/anthropics/claude-code/issues/66683), [#77625](https://github.com/anthropics/claude-code/issues/77625)) collectively represent the largest cluster of unresolved Windows issues.

- **Documentation gaps** are being systematically surfaced: a single community member ([coygeek](https://github.com/coygeek)) filed 12+ documentation issues today alone, covering sandboxing omissions, auto-memory limits, MCP connection behavior, agent security guidance, and accessibility docs that still state permission mode changes are not announced when they now are.

- **Permission rule confusion** persists: rules under `~/.claude/` silently don't match ([#57132](https://github.com/anthropics/claude-code/issues/57132)), and the `Write`/`Edit`/`Read` permission rule migration is creating friction (addressed via startup warnings in v2.1.210).

- **Model picker fidelity issues**: the advisor model shows as "unavailable" for Fable 5 users ([#73365](https://github.com/anthropics/claude-code/issues/73365), 83 comments, 153 👍), and the model picker in VS Code displays "Fable" but actually uses Opus until manually reselected ([#77374](https://github.com/anthropics/claude-code/issues/77374)).

- **Background agent lifecycle defects** are emerging as a cluster: duplicate worktree allocation ([#77609](https://github.com/anthropics/claude-code/issues/77609)), permission mode loss on reconnect ([#77649](https://github.com/anthropics/claude-code/issues/77649)), and the `ANTHROPIC_API_KEY` environment variable silently overriding OAuth in child processes ([#77617](https://github.com/anthropics/claude-code/issues/77617))—the latter causing $400 of unauthorized metered credit consumption.

- **Auth friction**: MCP Microsoft 365 connector rejects personal accounts ([#53408](https://github.com/anthropics/claude-code/issues/53408)), and OAuth vs API key precedence is unclear and dangerous in subprocess contexts.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-15

*Technical analysis of the openai/codex repository*

---

## Today's Highlights

A significant release train hit the `rust-` channel yesterday, pushing six versions from `0.144.4` through five `0.145.0-alpha` increments. The community is most animated about a critical `Cannot redefine property: process` bug in Codex Desktop's bundled browser plugin, which has 52 comments and 31 upvotes, and a reopened conversation about disabling the auto-resolve timer in Codex CLI (#28969), now at 119 upvotes. A high-severity context-length regression for `gpt-5.6-sol` (#32806) also drew sharp attention before being closed yesterday.

---

## Releases

**Six `rust-` releases published in the last 24 hours:**

| Version | Type | Notes |
|---|---|---|
| `rust-v0.144.4` | Patch | Chores only; no user-facing changes |
| `rust-v0.145.0-alpha.8` | Pre-release | No changelog |
| `rust-v0.145.0-alpha.9` | Pre-release | No changelog |
| `rust-v0.145.0-alpha.10` | Pre-release | No changelog |
| `rust-v0.145.0-alpha.11` | Pre-release | No changelog |
| `rust-v0.145.0-alpha.12` | Pre-release | No changelog |

The `0.145.0-alpha.x` train appears to be accumulating internal improvements ahead of a stable release. No breaking changes or user-facing features were documented in any of these tags. Developers running stable should remain on `0.144.4` until the alpha series graduates.

[Full changelog: v0.144.3 → v0.144.4](https://github.com/openai/codex/compare/rust-v0.144.3...rust-v0.144.4)

---

## Hot Issues

*Top 10 noteworthy issues by community engagement and severity.*

### 1. [#32925 – Browser/Chrome plugin fails with `Cannot redefine property: process`](https://github.com/openai/codex/issues/32925)
**Status:** Closed | **Comments:** 52 | **👍:** 31  
A severe runtime crash in Codex Desktop 26.707.71524 affecting both the in-app browser and Chrome extension. The JavaScript runtime error `Cannot redefine property: process` indicates a conflict in the browser plugin's bundled Node.js polyfill. Closed rapidly, suggesting a hotfix was shipped.

### 2. [#28969 – Add setting to disable auto-resolve after 60s for questions](https://github.com/openai/codex/issues/28969)
**Status:** Open | **Comments:** 34 | **👍:** 119  
The highest-upvoted open issue. Users want a configurable or entirely removable auto-resolve timeout in the CLI for interactive questions. The 60-second default is disruptive for complex prompts. This has been open since mid-June and is the community's single most-demanded CLI UX improvement.

### 3. [#32806 – GPT-5.6 Sol context cut: 353K → 258K despite advertised 1.05M](https://github.com/openai/codex/issues/32806)
**Status:** Closed | **Comments:** 22 | **👍:** 23  
Reported as a *severe regression*. The effective context window for `gpt-5.6-sol` dropped from 353K to 258K tokens, far below the advertised 1.05M. The title's 🚨 and "SEVERE REGRESSION" tag drew immediate attention. Closed in less than 48 hours, which suggests an upstream model fix was rolled out.

### 4. [#17827 – Customizable status line](https://github.com/openai/codex/issues/17827)
**Status:** Open | **Comments:** 28 | **👍:** 103  
Community wants a terminal status bar similar to Claude Code's: showing token usage, model name, rate limits, git branch, etc. High upvote count indicates this is a key feature gap versus competitors. Open since April.

### 5. [#25463 – Desktop project threads disappear from project views](https://github.com/openai/codex/issues/25463)
**Status:** Open | **Comments:** 16 | **👍:** 1  
A data-visibility bug where Codex Desktop silently hides local project conversations even though the session JSONL files remain on disk. The project appears empty until manually resumed. Low upvotes but high comments indicate a tricky reproducibility issue.

### 6. [#29968 – Pro20x subscription usage appears like Plus](https://github.com/openai/codex/issues/29968)
**Status:** Open | **Comments:** 16 | **👍:** 14  
Users on Pro20x plans report seeing Plus-level rate limits. The phrasing "Codex has encountered some anomalies" suggests a server-side tier misassignment. Still unresolved after three weeks.

### 7. [#20880 – App silently creates empty `~/Documents/Codex` on every launch](https://github.com/openai/codex/issues/20880)
**Status:** Open | **Comments:** 16 | **👍:** 36  
A long-standing (since May) minor annoyance. The app creates an empty directory on every startup regardless of usage. Low severity, but 36 upvotes suggest many users find it irritating.

### 8. [#30178 – In-app Browser crashes main app during webview navigation](https://github.com/openai/codex/issues/30178)
**Status:** Open | **Comments:** 15 | **👍:** 0  
Windows-specific crash when Browser Use navigates a page. The app exits completely, losing session state. No workaround documented. Zero upvotes but high comment count indicates an active debugging thread.

### 9. [#32683 – Windows: CrBrowserMain crash (0xC0000005 at chrome.dll)](https://github.com/openai/codex/issues/32683)
**Status:** Open | **Comments:** 13 | **👍:** 2  
Another Windows Browser Use crash, this time with an access violation in Chromium's `chrome.dll`. Suggests a deeper sandbox or WebView integration fault on Windows.

### 10. [#15723 – Background subagents don't wake the calling agent on completion](https://github.com/openai/codex/issues/15723)
**Status:** Open | **Comments:** 10 | **👍:** 5  
A multi-agent orchestration bug. When a subagent finishes a background task, the parent agent is not notified, breaking concurrent workflows. Open since March, indicating a complex fix.

---

## Key PR Progress

*Top 10 pull requests merged in the last 24 hours.*

### 1. [#33198 – Keep interrupted prompts in conversation history](https://github.com/openai/codex/pull/33198)
**Merged:** ✅  
Preserves prompts interrupted by `Esc` or `Ctrl-C` in the conversation transcript, showing an interruption notice but retaining the user's input. Previously interruptions could silently lose the prompt text.

### 2. [#33187 – Honor workspace spend controls in rate-limit handling](https://github.com/openai/codex/pull/33187)
**Merged:** ✅  
Fixes a race condition where out-of-order rate-limit updates could overwrite workspace-level hard stops. Important for enterprise users with budget controls.

### 3. [#33184 – Reuse MCP tool catalogs across sessions](https://github.com/openai/codex/pull/33184)
**Merged:** ✅  
Caches MCP tool definitions so that unchanged `stdio` MCP servers don't need to reinitialize on every new session. Reduces startup latency for MCP-heavy workflows.

### 4. [#33180 – Serialize concurrent MCP stdin writes](https://github.com/openai/codex/pull/33180)
**Merged:** ✅  
Fixes a concurrency bug where simultaneous JSON-RPC writes to an MCP server's stdin could interleave and corrupt the message stream. Uses a single-permit semaphore.

### 5. [#33173 – Migrate GPT-5.4 uses to GPT-5.6 variants](https://github.com/openai/codex/pull/33173)
**Merged:** ✅  
Deprecates `gpt-5.4` and `gpt-5.4-mini`, routing users to `gpt-5.6-terra` and `gpt-5.6-luna`. Memory consolidation/extraction tasks also move to the 5.6 family. A notable model lifecycle update.

### 6. [#33177 – Support model catalog templates for Guardian policy prompts](https://github.com/openai/codex/pull/33177)
**Merged:** ✅  
Adds a `policy_template` field to auto-review models, allowing catalog-based Guardian policy injection. Improves content-safety configurability for enterprise deployments.

### 7. [#33175 – Handle Amazon Bedrock credentials during logout](https://github.com/openai/codex/pull/33175)
**Merged:** ✅  
Ensures logout doesn't remove AWS-managed credentials when using Amazon Bedrock as a model provider. Prevents account lockout for Bedrock users.

### 8. [#33170 – Support Amazon Bedrock login in the app server](https://github.com/openai/codex/pull/33170)
**Merged:** ✅  
Adds a new `amazonBedrock` login flow. Validates API keys and Mantle region, then selects the Bedrock model provider. Part of a broader AWS integration push.

### 9. [#33156 – Run detached reviews as review-agent turns](https://github.com/openai/codex/pull/33156)
**Merged:** ✅  
Changes detached (background) code reviews to run as full review-agent turns, giving clients access to steering, tool use, permissions, and item-stream events. A major UX improvement for CI-integrated review workflows.

### 10. [#33149 – Build MCP tool runtimes before router planning](https://github.com/openai/codex/pull/33149)
**Merged:** ✅  
Converts MCP tool metadata into `CoreToolRuntime` instances *before* the tool router is constructed. Unifies the direct and deferred MCP tool paths, reducing code duplication and improving planning determinism.

---

## Feature Request Trends

*Distilled from all open issues and enhancement tags.*

1. **Customizable Terminal UI** – The single strongest theme. Users want configurable status lines (#17827, 103👍), customizable keybindings, adjustable sidebar behavior (#31538), and theme support. Claude Code's status bar is cited as the benchmark.

2. **IDE-style Git Integration** – Multiple requests for a full Git workspace inside Codex Desktop: branch tree, commit graph, diff explorer, and conflict resolution UI (#30919). The current Review pane is seen as too limited.

3. **Accessibility & Read-Aloud** – Request for ChatGPT-style text-to-speech for assistant responses (#20957). Currently absent from Desktop despite being available in ChatGPT web/phone.

4. **Rate-Limit Transparency** – Users want visible rate-limit counters, token budgets, and reset timestamps in both CLI and Desktop (#29968, #30221). The "black box" rate-limiting is a recurring frustration.

5. **Workspace/Project Management** – Better session organization: folders or tags for threads, search across all projects, and reliable visibility for remote sessions (#25463, #32957, #24464).

6. **MCP & Plugin Ecosystem** – Improvements to MCP server tool caching, concurrency handling, and failure reporting (#33184, #33180, #33182). The MCP integration surface is maturing quickly, and the community is pushing for stability and performance.

7. **Auto-Resolve Controls** – The 60-second auto-resolve timer (#28969) is a daily pain point for CLI users. The request: make it configurable, disable it, or replace it with a manual confirmation.

---

## Developer Pain Points

*Recurring frustrations and high-frequency bug categories.*

1. **Windows Stability Crisis** – A disproportionate number of severe bugs target Windows: `EXE_BAD_ACCESS` crashes (#32399), sandbox failures (#31220), WebView crashes (#32683, #30178), session recovery failures (#18723), and startup lag (#33197). Windows remains a second-class platform for Codex Desktop.

2. **Browser Use Breaks Continually** – The in-app browser and Chrome extension are the most bug-prone features. Issues include crashes on navigation (#30178), `Cannot redefine property: process` (#32925, #32935), stale native-host manifests (#31904), and plugin initialization failures. This is a high-priority stability area.

3. **Context Window Discrepancies** – The `gpt-5.6-sol` context regression (#32806) is the latest in a pattern of mismatches between advertised vs. actual context windows. Developers building long-context workflows are skeptical of advertised limits.

4. **Session & Thread Visibility** – Both Desktop and CLI have recurring issues where sessions become "invisible" even though data persists on disk (#25463, #27284, #32957, #24464). This erodes trust in the project management system.

5. **Rate-Limit Confusion** – Subscription tier mismatches (#29968) and opaque limit enforcement (#30221) frustrate paying users. The phrase "Codex has encountered some anomalies" has become a community meme signaling server-side capriciousness.

6. **MCP Concurrency Issues** – Multiple PRs this week (#33180, #33184) directly address MCP race conditions and startup latency, confirming that MCP-based tools are hitting real-world scaling problems.

7. **Subagent Orchestration Gaps** – Background subagents not waking parents (#15723) shows that the multi-agent architecture still lacks robust event-driven coordination. This limits the utility of parallel agent workflows.

---

*Data sourced from github.com/openai/codex. Digest generated for 2026-07-15.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-15

## Today's Highlights
Two critical reliability fixes shipped in today's nightly: shared project quota limit errors now include setup hints, and the A2A server properly aborts execution loops on task cancellation. The community remains deeply engaged around agent reliability issues—subagent hang conditions, false success reports on turn limits, and shell execution deadlocks continue to dominate the top-voted bug reports.

## Releases
**v0.52.0-nightly.20260714.gfa975395b** ([Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260714.gfa975395b))
- `fix(core): enrich shared project quota limit errors with setup hint` — Reduces user confusion when hitting API quota limits by pointing to quota management setup.
- `fix(a2a-server): ensure task cancellation aborts execution loop` — Prevents the A2A server from continuing to run tasks after cancellation, fixing a resource leak and potential inconsistent state.

## Hot Issues

1. **#22323** — [Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323) (10 comments, 2 👍)  
   The `codebase_investigator` subagent reports `status: "success"` even when it hit its turn limit before doing any real work. This misleads users into thinking analysis completed correctly. High community demand for a fix, with the issue open since March.

2. **#21409** — [Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) (7 comments, 8 👍)  
   Simple tasks like folder creation cause the generalist agent to hang indefinitely. Workaround exists (disable subagent delegation), but this is one of the highest-voted bugs. Remains in retesting status after months.

3. **#19873** — [Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873) (8 comments, 1 👍)  
   Proposes native POSIX tool invocation instead of synthetic tool calls, leveraging Gemini 3's native bash training. Effort/large enhancement that would fundamentally reshape how the CLI interacts with the OS.

4. **#24353** — [Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353) (7 comments)  
   Epic tracking expansion from 76 behavioral eval tests to broader coverage across 6 Gemini models. Critical for maintaining quality as the agent surface grows.

5. **#25166** — [Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166) (4 comments, 3 👍)  
   Simple commands hang post-execution, stuck in "Awaiting user input" state. Reproducible across many commands, effort/medium priority P1 bug affecting daily workflow reliability.

6. **#21968** — [Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968) (6 comments)  
   Anecdotal but widely felt: custom skills and sub-agents are rarely invoked autonomously, requiring explicit user instruction. Undermines the value of the subagent system for users who invest in custom configurations.

7. **#26522** — [Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522) (5 comments)  
   Auto Memory re-surfaces low-signal sessions because they're never marked as "processed." Leads to infinite retry loops and wasted compute. Part of a broader memory system reliability push.

8. **#22745** — [Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) (7 comments, 1 👍)  
   Epic exploring AST-aware tooling for more precise codebase navigation. Could drastically reduce token waste from misaligned file reads and improve navigation precision.

9. **#21000** — [Experiment with using native file tools for creating and maintaining the task tracker](https://github.com/google-gemini/gemini-cli/issues/21000) (4 comments)  
   Proposes replacing custom task tracker logic with native file operations. Aligns with the broader "bash affinity" direction for simpler, more reliable execution.

10. **#24246** — [Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246) (3 comments)  
    Hard error when tool count exceeds model limits. Users need smarter tool scoping rather than exposing all tools simultaneously. Impacts power users with extensive MCP setups.

## Key PR Progress

1. **#28401** — [fix(shell): bound command output sent to the model](https://github.com/google-gemini/gemini-cli/pull/28401) (priority/P1)  
   Caps shell output to prevent massive command outputs (e.g., `find /`, verbose builds) from flooding model context and burning tokens. Directly addresses a major token cost pain point.

2. **#28164** — [fix(core): limit recursive reasoning turns per single user request](https://github.com/google-gemini/gemini-cli/pull/28164) (help wanted)  
   Caps recursive reasoning at 15 turns per request (configurable via `maxSessionTurns`). Prevents infinite loops from consuming local CPU and API credits while giving users an escape hatch.

3. **#28319** — [refactor(a2a-server): enforce path trust check prior to environment loading](https://github.com/google-gemini/gemini-cli/pull/28319)  
   Re-orders initialization so path trust is verified before loading workspace env vars. Also isolates task environments via `AsyncLocalStorage`, preventing cross-contamination between tasks.

4. **#24303** — [feat(diagnostics): Native V8 Memory & Profiling Suite](https://github.com/google-gemini/gemini-cli/pull/24303)  
   GSoC 2026 proposal for terminal-integrated performance diagnostics. Adds native V8 memory profiling directly in the CLI—valuable for debugging memory leaks and performance issues.

5. **#28400** — [chore/release: bump version to 0.52.0-nightly.20260714.gfa975395b](https://github.com/google-gemini/gemini-cli/pull/28400)  
   Automated nightly version bump. Standard release infrastructure.

6. **(Additional high-traffic PRs not shown in top 5—trends indicate active work on subagent routing, memory system hardening, and terminal rendering stability.)**

## Feature Request Trends

- **AST-aware codebase navigation**: Multiple issues (#22745, #22746) explore using AST parsing for more precise file reads, method boundary detection, and codebase mapping to reduce token waste and improve navigation accuracy.
- **Native OS sandboxing via POSIX tooling**: Issue #19873 captures a growing consensus to let the model use its innate bash skills directly rather than routing through synthetic tools, reducing overhead and failure points.
- **Subagent trajectory visibility**: Users want subagent execution traces available via `/chat share` (#22598) for debugging and evaluation purposes—the current "black box" behavior makes it hard to understand subagent failures.
- **Deterministic memory redaction**: Memory system concerns (#26525) highlight demand for pre-model redaction of secrets rather than post-hoc instruction, reflecting growing security awareness.
- **Self-diagnostic capabilities**: Issue #21432 proposes teaching the CLI to understand its own mechanics (flags, hotkeys, subagent execution paths) so it can serve as its own expert guide—a meta-level UX improvement.

## Developer Pain Points

- **Agent hangs and apparent deadlocks**: The #1 source of user frustration. The generalist agent hangs (#21409) and shell command stuck-at-input (#25166) issues together have 11 👍 and persistent retesting status. Workarounds exist but degrade the core experience.
- **False success signals**: Subagents reporting `GOAL` success after hitting turn limits (#22323) erodes trust in agent outputs. Users cannot distinguish genuine completion from interrupted execution.
- **Subagent adoption gaps**: Custom skills and sub-agents are rarely used autonomously (#21968), and subagents can execute without permission after updates (#22093). The configuration system's behavior is unpredictable.
- **Memory system inefficiencies**: Indefinite retries of low-signal sessions (#26522), silent skip of invalid patches (#26523), and pre-redaction secret exposure (#26525) all point to the memory subsystem needing hardening before broader rollout.
- **Terminal rendering issues**: Corruption after external editor exits (#24935), flicker on resize (#21924), and incorrect `\n` escape handling (#22466) degrade the terminal UX—minor individually, but collectively a quality-of-life drag.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-15

## Today's Highlights

Two releases went out today (v1.0.71-1 and v1.0.71-2), bringing persistent sidebar sessions, a new plugin marketplace system, canvas support for extension-driven interactions, and a revamped `/voice` device picker. Meanwhile, the community is raising significant concerns around OAuth token bridging for third-party MCP servers, binary blob handling in session history, and a host of new triage-level UX bugs that emerged from the latest builds.

---

## Releases

**Two versions shipped in the last 24 hours.**

### v1.0.71-2
- **Added:** `/voice devices` command to choose and persist the microphone for voice mode
- **Added:** Limitations on which built-in agents are available to tasks and subagents
- **Added:** Canvas support in the CLI for extension-driven interactions
- **Improved:** `/chronicle cost-tips` recommendations now use a richer cost profile

### v1.0.71-1
- **Added:** Persist GitHub MCP toolset/tool config in `settings.json` (under `githubMcpToolsets`, `githubMcpTools`, etc.)
- **Added:** `plugins marketplace` subcommands to list, add, and remove plugin marketplaces
- **Added:** Sidebar session persistence across restarts
- **Added:** `plugins marketplace browse` and `update` commands

---

## Hot Issues

**1. #1274 — [area:tools] CLI constantly getting 400 errors for invalid request body**  
[github/copilot-cli Issue #1274](https://github.com/github/copilot-cli/issues/1274)  
*Author: unusualbob | Created: 2026-02-04 | Updated: 2026-07-15 | 👍: 11 | Comments: 25*  
A long-running, high-engagement issue: 95% of code review requests on diffs result in 400 errors. Debate continues about whether this is server-side validation or CLI-side request malformation. With 25 comments and a 5-month lifespan, this remains a top stability concern.

**2. #4024 — [area:models] Voice mode: all bundled ASR models fail silently**  
[github/copilot-cli Issue #4024](https://github.com/github/copilot-cli/issues/4024)  
*Author: sylvanc | Updated: 2026-07-14 | Comments: 8*  
Voice mode microphones capture audio (meter reacts), but all three bundled ASR models return empty transcriptions. Pointed as a `MultiModalProcessor routing bug` for nemotron_speech (RNNT) in Foundry Local Core. Emerging as a critical blocker for voice users.

**3. #443 — [area:tools] Feature Request: Built-in PDF Reading Support**  
[github/copilot-cli Issue #443](https://github.com/github/copilot-cli/issues/443)  
*Author: non-stop-dev | Updated: 2026-07-14 | 👍: 33 | Comments: 5*  
The most-upvoted open feature request. Users want native PDF reading to handle academic papers, technical docs, and reports without relying on external tools like `pdftotext`. Strong community demand (33 upvotes), still unresolved.

**4. #2165 — [area:platform-linux, area:authentication] Ubuntu keychain support is broken**  
[github/copilot-cli Issue #2165](https://github.com/github/copilot-cli/issues/2165)  
*Author: AndreaPi | Updated: 2026-07-14 | 👍: 21 | Comments: 3*  
Documentation errors and broken `secret-tool` fallback on Ubuntu. Two distinct bugs, one of which misleads users about required packages. High visibility (21 upvotes) on a Linux platform pain point that impacts core authentication.

**5. #4096 — [area:authentication, area:mcp] Third-party MCP server shows "Connected" — tools missing from CLI**  
[github/copilot-cli Issue #4096](https://github.com/github/copilot-cli/issues/4096)  
*Author: bugale | Updated: 2026-07-14 | Comments: 3*  
Atlassian Remote MCP servers show green "Connected" status in the UI, but none of their tools are available in CLI sessions. Suggested root cause: OAuth token never bridged to spawned sessions. Critical for the MCP integration story.

**6. #4097 — [area:sessions, area:context-memory, area:tools] apply_patch stores deleted binary in session history**  
[github/copilot-cli Issue #4097](https://github.com/github/copilot-cli/issues/4097)  
*Author: Adamkadaban | Updated: 2026-07-14 | 👍: 1 | Comments: 1*  
When `apply_patch` deletes a large binary file, the entire binary is stored as a textual diff in `result.detailedContent`. This permanently exceeds CAPI's 5 MB limit, and `/compact` cannot recover. A structurally serious issue for any session that touches large binaries.

**7. #4118 — [triage] /app command does not select current working directory by default**  
[github/copilot-cli Issue #4118](https://github.com/github/copilot-cli/issues/4118)  
*Author: doggy8088 | Updated: 2026-07-14 | 👍: 32 | Comments: 0*  
A usability pain point with massive community resonance (32 upvotes in a single day). Users expect `/app` to inherit the current directory, but it requires manual selection. High signal for workflow friction.

**8. #4123 — [triage] Copilot CLI ignores AGENTS.MD**  
[github/copilot-cli Issue #4123](https://github.com/github/copilot-cli/issues/4123)  
*Author: adlele | Updated: 2026-07-14 | 0 comments*  
Users report that `agents.md` and memory instructions are being ignored. The issue is vague ("Just fix it,") but touches a core trust feature for agent customization. Likely to attract more attention as reproducibility improves.

**9. #4103 — [area:authentication, area:plugins] Plugin marketplace clone disables Git credential helpers**  
[github/copilot-cli Issue #4103](https://github.com/github/copilot-cli/issues/4103)  
*Author: arnab9211 | Updated: 2026-07-14 | 👍: 2*  
A v1.0.70 regression: adding a plugin marketplace from a private Azure DevOps HTTPS repo fails because the CLI disables Git credential helpers during clone. Affects enterprise users with private plugin registries.

**10. #4111 — [area:sessions, area:platform-windows, area:installation] Windows: orphaned copilot.exe.old threads at 100% CPU**  
[github/copilot-cli Issue #4111](https://github.com/github/copilot-cli/issues/4111)  
*Author: RockNoggin | Updated: 2026-07-14 | 0 comments*  
A process lifecycle bug: long-running sessions that survive an in-place auto-update continue executing from the renamed `copilot.exe.old` binary, with a fraction of these orphans spinning at 100% CPU indefinitely. Notable for resource and monitoring impact.

---

## Key PR Progress

**No pull requests were merged or updated in the last 24 hours.** The project's PR queue appears quiet, likely due to the two release rollouts.

---

## Feature Request Trends

The following patterns emerge from recent issues and long-standing requests:

1. **Native document/PDF reading** (#443, 33👍) remains the #1 feature ask, driven by academic and technical documentation workflows.
2. **Customizable UI/theme** (color customization #4117, conversation title display #4124, higher-contrast prompts) is gaining momentum as the terminal UX matures.
3. **Enterprise-grade OpenTelemetry support** (#3477) with mTLS and dynamic headers — users want parity with Claude Code's OTel capabilities.
4. **ACP protocol completeness** (#4113: `session/close` implementation) — developers integrating Copilot CLI as an ACP agent need proper lifecycle management.
5. **Non-GitHub repository support** (#4054: `/resume` broken for ADO and non-git sessions) — the community is pushing for less GitHub-centric session management.

---

## Developer Pain Points

Frustrations that recur across multiple issues:

- **OAuth token bridging** (#4096, #4103): Third-party MCP integrations and plugin marketplaces repeatedly fail to pass credentials correctly from the app UI into CLI sessions.
- **Session data loss & bloat** (#4097, #4115): Binary blobs surviving in session history, and sessions lost entirely after unexpected restarts. Flush-on-clean-exit is insufficient.
- **Voice mode unreliability** (#4024): ASR models silently failing with zero transcription output — a complete blocker for voice users, with no clear path forward.
- **Linux and Windows platform gaps** (#2165: Ubuntu keychain; #4111: Windows orphaned processes; #4109: snap package missing x11/wayland plug for `/copy`): Platform-specific fixes are falling behind feature velocity.
- **Agent/instruction trust** (#4123, #4122): Custom agent instructions (`.agent.md`, relative link resolution) are unreliable, eroding confidence in the agent customization system.
- **Input & keyboard issues** (#4126: copy includes border glyph; #4110: `ctrl+x→b` cannot background blocking `read_bash`; #4114: confirmation card cannot be dismissed): Terminal interaction polish remains a weak point, especially on multi-platform setups.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-07-15

---

## Today's Highlights

Today's digest centers on critical fixes for the Kosong provider, where two key patches were merged to resolve reasoning effort serialization bugs and empty `reasoning_content` parsing errors. A major TPD rate limit bug remains open and highly visible, while a significant improvement to context window budgeting was also landed, promising better resource utilization for Kimi model requests in long sessions.

---

## Releases

No new releases were published in the last 24 hours.

---

## Hot Issues

1. **#2318 – [bug] request reached organization TPD rate limit, current: 1505241**
   - **Author:** globalvideos272-lab
   - **Why it matters:** This bug report details a critical miscalculation in the TPD (Tokens Per Day) rate limiting logic on the `kimi2.6` model under the `moonshot.ai` platform. The user reports reaching a limit of 1.5M tokens, which is well beyond expected caps, causing hard blocks for heavy users.
   - **Community reaction:** 1 comment, 1 thumbs-up. One user acknowledged the severity. The issue has been open since May with minimal developer response, which is a growing concern.
   - **🔗 [MoonshotAI/kimi-cli Issue #2318](https://github.com/MoonshotAI/kimi-cli/issues/2318)**

2. **#2496 – [CLOSED] [bug] resuming forked session results in corrupted output**
   - **Author:** TheKevinWang
   - **Why it matters:** Resuming a forked session (`kimi -r`) produced garbled or incomplete output on Windows 10 with `kimi-for-coding`. This is a workflow-critical bug for power users relying on session persistence.
   - **Community reaction:** No comments, 0 thumbs-up. Closed quickly after creation, suggesting a swift internal root cause or duplicate classification.
   - **🔗 [MoonshotAI/kimi-cli Issue #2496](https://github.com/MoonshotAI/kimi-cli/issues/2496)**

3. **#2318 (Continued)** – As above, this is the single most impactful open issue this week, given the 2-month lifespan and high token limit discrepancy.

*Note: Only 2 issues were updated in the last 24h. The remaining "hot issues" selection is limited by available data.*

---

## Key PR Progress

1. **#2499 – [CLOSED] fix(kosong): stop sending Kimi reasoning effort implicitly**
   - **Author:** RealKai42
   - **Description:** Prevents automatic serialization of the legacy `reasoning_effort` parameter. The fix ensures that thinking configuration is set exclusively via `thinking.type`, and that caller-provided values are preserved verbatim without implicit clamping or backward mapping.
   - **Impact:** Eliminates silent parameter corruption when switching between different reasoning effort models or providers.
   - **🔗 [MoonshotAI/kimi-cli PR #2499](https://github.com/MoonshotAI/kimi-cli/pull/2499)**

2. **#2498 – [CLOSED] fix(kosong): preserve empty-string reasoning_content as ThinkPart**
   - **Author:** bigeagle
   - **Description:** Fixes a `400` error from the `coding-model-okapi-0711-vibe` model when an assistant message at index 6 is missing `reasoning_content` after enabling `thinking.keep=all`. The fix treats empty-string `reasoning_content` as a valid `ThinkPart` instead of omitting it, preventing request rejection.
   - **Impact:** Critical for users leveraging full-thinking retention with certain provider models.
   - **🔗 [MoonshotAI/kimi-cli PR #2498](https://github.com/MoonshotAI/kimi-cli/pull/2498)**

3. **#2494 – [CLOSED] fix(kimi): use remaining context for completion budget**
   - **Author:** RealKai42
   - **Description:** Replaces the fixed 32k token completion budget with a dynamic limit derived from the remaining model context window. Applies to all Kimi requests, including those wrapped by `ChaosChatProvider`, while leaving generic `ChatProvider` and non-Kimi providers unchanged.
   - **Impact:** Reduces wasted tokens and allows longer completions in multi-turn sessions, improving both performance and cost efficiency.
   - **🔗 [MoonshotAI/kimi-cli PR #2494](https://github.com/MoonshotAI/kimi-cli/pull/2494)**

*Note: Only 3 PRs were updated in the last 24h. All were closed and merged.*

---

## Feature Request Trends

Based on analysis of open issues (not limited to last 24h), the community is most actively requesting:

- **Transparent rate limit dashboarding:** Users want CLI-integrated visibility into their TPD consumption and reset timers, not just error messages after hitting hard limits.
- **Session fork integrity:** Reliable resume of forked sessions across platforms (especially Windows) with guaranteed output consistency.
- **Provider-agnostic reasoning configuration:** Clean separation between Kosong, Kimi native, and third-provider reasoning effort semantics without implicit parameter leakage.
- **Dynamic context management:** Smarter token budgeting that adapts to real-time context window usage, which PR #2494 partially addresses but users want broader adoption.

---

## Developer Pain Points

Recurring frustrations reported by the community include:

- **Silent rate limit failures:** The TPD bug (#2318) has been open for 2 months with no visible fix or workaround, causing production outages for heavy users.
- **Windows-specific session corruption:** Issues like #2496 on Windows 10 suggest OS-level differences in session file handling or terminal interaction that create non-deterministic bugs.
- **Legacy parameter inheritance:** Developers find it confusing that `reasoning_effort` is still being implicitly sent even after explicit `thinking.type` configuration, leading to wasted debugging time.
- **Sparse issue triage:** The low number of PRs and issue closures relative to open bugs (only 2 issues updated in 24h) suggests a bottleneck in maintainer bandwidth, which is a growing concern for adoption velocity.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-07-15

---

## Today's Highlights
OpenCode shipped **v1.18.1** with hotfixes for the **Desktop v2** UI migration, which has generated significant community friction. The release adds a toggle to switch between new and old layouts, while community member **ohsalmeron** landed a five-PR feature bundle improving session management (forking, renaming, deletion, archiving, and context compaction). Meanwhile, critical infrastructure work continues on reasoning model support, xAI OAuth restoration, and Gemini tool-call parsing.

---

## Releases

**v1.18.1** – *Latest (2026-07-15)*
- Fixed spacing between model provider sections in Settings.

**v1.18.0**
- **Completed** Desktop v2 migration, including upgrade handling for the new layout and first-launch onboarding.
- **Added** a setting to switch between the new and old Desktop layouts during the transition period.
- **Fixed** file views using the wrong background color.

---

## Hot Issues (Top 10)

1. **#28957 – `"Upstream idle timeout exceeded"`**  
   *Author: VENAXIS | Comments: 20 | 👍: 2*  
   [GitHub Issue](https://github.com/anomalyco/opencode/issues/28957)  
   Session timeout errors when using the "writing-plans" skill on macOS Tahoe (M4). Root cause appears to be an upstream connection idle timeout between the client and model service. High-priority reliability bug.

2. **#12472 – Native Claude Code hooks compatibility**  
   *Author: ArtyMcLabin | Comments: 16 | 👍: 37*  
   [GitHub Issue](https://github.com/anomalyco/opencode/issues/12472)  
   Despite excellent Claude Code rule/skill compatibility, the hooks system (`PreToolUse`, `PostToolUse`, `Stop`) is missing. Heavily upvoted, indicating strong demand for parity with Claude Code's plugin ecosystem.

3. **#25239 – Expose GitHub Copilot "Auto" option in model selector**  
   *Author: Khnx-ai | Comments: 16 | 👍: 14*  
   [GitHub Issue](https://github.com/anomalyco/opencode/issues/25239)  
   Users want the automatic model routing feature from GitHub Copilot directly in OpenCode's model picker. Strong community interest for workflow simplification.

4. **#36936 – Desktop v2 tab layout unusable**  
   *Author: simPod | Comments: 10 | 👍: 5*  
   [GitHub Issue](https://github.com/anomalyco/opencode/issues/36936)  
   New horizontal tab layout truncates session titles, making navigation impossible. Reverting to v1.17 fixes it. High frustration with the v2 migration UX.

5. **#32747 – `@` file mentions missing for new files**  
   *Author: ovftank | Comments: 10 | 👍: 8*  
   [GitHub Issue](https://github.com/anomalyco/opencode/issues/32747)  
   Files created after startup don't appear in `@` mentions until restart. Stale search state in TUI autocomplete. Persistent indexing bug.

6. **#31972 – Plan/Build mode broken in new layout**  
   *Author: Lyin258 | Comments: 8 | 👍: 8*  
   [GitHub Issue](https://github.com/anomalyco/opencode/issues/31972)  
   Windows 10 users cannot switch between Plan and Build modes after enabling the v2 layout. Both UI toggle and keyboard shortcut fail.

7. **#36979 – Agents invisible + folders not expanding (Windows)**  
   *Author: indexolatam | Comments: 5 | 👍: 0*  
   [GitHub Issue](https://github.com/anomalyco/opencode/issues/36979)  
   Post-v2 migration on Windows: Ctrl+. agent switcher shows no dropdown, and the file explorer won't expand folders. Fresh regression in v1.18.1.

8. **#35426 – Session history not discoverable**  
   *Author: naliduoyuhang | Comments: 2 | 👍: 0*  
   [GitHub Issue](https://github.com/anomalyco/opencode/issues/35426)  
   No persistent sidebar for past sessions; Ctrl+S conflict with editor. Usability complaint about session recovery.

9. **#36877 – Reasoning thoughts not displayed**  
   *Author: josevelaz | Comments: 2 | 👍: 0*  
   [GitHub Issue](https://github.com/anomalyco/opencode/issues/36877)  
   GPT 5.6 reasoning thoughts emitted as HTML comments; backend fix exists but is not reflected in OpenCode's UI. Blocks model transparency.

10. **#36977 – OpenCode Desktop fails to start on WSL**  
    *Author: zimodzh | Comments: 2 | 👍: 0*  
    [GitHub Issue](https://github.com/anomalyco/opencode/issues/36977)  
    Installing `oh-my-opencode` plugin breaks startup with "Notification server not found: wsl:Ubuntu". Plugin compatibility issue with WSL environments.

---

## Key PR Progress (Top 10)

1. **#36964 – One-click context compaction button**  
   *Author: ohsalmeron*  
   [GitHub PR](https://github.com/anomalyco/opencode/pull/36964)  
   Adds a compact button next to the context usage indicator, replacing the need to use `/compact` in the command palette. Direct UX improvement.

2. **#36965 – Fork button on assistant response texts**  
   *Author: ohsalmeron*  
   [GitHub PR](https://github.com/anomalyco/opencode/pull/36965)  
   Places a fork icon on every assistant message for one-click branching. Eliminates the command palette detour.

3. **#36966 – Inline session rename in sidebar**  
   *Author: ohsalmeron*  
   [GitHub PR](https://github.com/anomalyco/opencode/pull/36966)  
   Double-click inline editing in sidebar, reusing the existing `InlineEditor` component from workspace rename.

4. **#36967 – Delete session with confirmation dialog**  
   *Author: ohsalmeron*  
   [GitHub PR](https://github.com/anomalyco/opencode/pull/36967)  
   Right-click context menu option to delete sessions with a confirmation dialog. Uses existing `DELETE /api/session/:sessionID` endpoint.

5. **#36968 – Archived sessions browser dialog**  
   *Author: ohsalmeron*  
   [GitHub PR](https://github.com/anomalyco/opencode/pull/36968)  
   New `/archived` slash-command that opens a dialog listing all archived sessions, sorted by archive date, with click-to-restore.

6. **#36894 – Expand reasoning option variants**  
   *Author: rekram1-node*  
   [GitHub PR](https://github.com/anomalyco/opencode/pull/36894)  
   Adds support for `none`/`thinking` and `none`/`high`/`max` reasoning effort toggles across providers. Clamps budgets to model limits.

7. **#36978 – Batch OpenAPI query parameters**  
   *Author: rekram1-node*  
   [GitHub PR](https://github.com/anomalyco/opencode/pull/36978)  
   Performance fix: serializes query params once to avoid quadratic immutable request rebuilding for exploded arrays/objects.

8. **#36975 – Restore default model headers**  
   *Author: rekram1-node*  
   [GitHub PR](https://github.com/anomalyco/opencode/pull/36975)  
   Re-adds V1 session-owned headers (session, parent, user-agent) to runner/title/compaction calls, preserving V2 correlation headers.

9. **#36752 – Read cache write tokens from raw usage**  
   *Author: lewislf*  
   [GitHub PR](https://github.com/anomalyco/opencode/pull/36752)  
   Fixes zero-count cache writes for Anthropic models routed through OpenAI-compatible gateways. Critical for accurate billing.

10. **#35405 – Unflatten Gemini tool call args**  
    *Author: kagura-agent*  
    [GitHub PR](https://github.com/anomalyco/opencode/pull/35405)  
    Fixes Gemini's dot-bracket notation tool call args (e.g., `{"questions[0].header": "Auth"}`) – a recurring cross-provider compatibility issue.

---

## Feature Request Trends

1. **Desktop v2 saturation** – 4 open issues (##36936, #36979, #31972, #36981) all describe regressions or broken UX in the new layout (tabs, mode switching, agent selection). The community is clearly struggling with the forced migration.

2. **Session management UX** – 5 PRs from **ohsalmeron** (forking, renaming, deletion, archiving, compaction) indicate a massive appetite for better session lifecycle tools without leaving the main UI.

3. **Provider/model parity** – Issues request: GitHub Copilot "Auto" mode (#25239), configurable web search providers (#36513), xAI Grok OAuth (#34778), and Claude Code hooks (#12472). Users want OpenCode to be a universal frontend for all AI coding services.

4. **Architecture & theming** – PRs #36969/#36950 introduce a V1/V2 theme system with property-first component tokens and hue aliases, preparing for incremental UI migration without breaking custom themes.

---

## Developer Pain Points

- **Desktop v2 breaking changes** – The migration to v2 layout broke Plan/Build switching, agent visibility, file explorer expansion, and session history loading. Multiple reports across platforms (Windows, macOS, WSL) with no universal fix yet. The revert-to-v1.17 workaround is common.

- **Session state inconsistency** – Files created after startup missing from `@` mentions (#32747), session history not loading (#36971, #35426), and archived sessions disappearing without browse UI. Indexing and state synchronization remain unreliable.

- **Model integration gaps** – Reasoning thoughts hidden (#36877), xAI OAuth broken (#34778), Meta reasoning defaults mismatched (#36976), and cache write not billed correctly (#36752). Each provider update introduces regressions.

- **Plugin ecosystem friction** – Plugins shown as raw `file://` paths in status popover (#36956), WSL notification server failures after plugin install (#36977), and missing hook system for Claude Code parity (#12472). Plugin discoverability and compatibility are weak points.

- **Context management friction** – No one-click compaction (addressed in #36964 but merged just today), no fast forking, no inline rename in sidebar. Until now, users had to rely on command palette commands for basic session operations.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-15

## Today's Highlights

A packed 24 hours across the Pi ecosystem: the v0.80.7 release drops a breaking change to session-affinity configuration, while the community rallies around GPT-5.6-luna access issues across multiple OpenAI-compatible providers. Two competing xAI OAuth PRs landed simultaneously, and a critical session-ID clamping fix for codex unblocked users with long session identifiers. The long-running Bedrock Mantle provider PR continues to gather steam.

## Releases

**v0.80.7** — Single breaking change: `compat.sendSessionIdHeader` flag removed from `models.json`. Session-affinity behavior is now controlled by `compat.sessionAffinityFormat` with three values: `"openai"`, `"openai-nosession"`, or `"openrouter"`. Users must replace `sendSessionIdHeader: false` with `sessionAffinityFormat: "openai-nosession"`.

## Hot Issues

1. **[#5363] Amazon Bedrock Mantle provider** — Long-running request (opened June 3) to add an OpenAI-compatible Bedrock Mantle provider alongside the existing Converse-based `amazon-bedrock` provider. 16 comments, 8 👍. The Mantle API lives at a different endpoint and is incompatible with Converse. [Link](https://github.com/earendil-works/pi/issues/5363)

2. **[#6476] httpIdleTimeoutMs regression** — v0.80.6 breaks self-hosted OpenAI-compatible providers (vLLM). Requests time out after minutes despite explicit `httpIdleTimeoutMs` settings. Tagged `inprogress`. Downgrading to v0.80.3 restores correct behavior. 10 comments. [Link](https://github.com/earendil-works/pi/issues/6476)

3. **[#6509] Extension-reported usage in footer** — Request for `ctx.ui.setUsage(key, usage)` so subagent extensions can report external LLM costs. 5 comments, thoughtful design discussion around cost aggregation for child processes. [Link](https://github.com/earendil-works/pi/issues/6509)

4. **[#6522] max_completion_tokens floor** — `openai-completions` sends 1 token when context is massively over limit, triggering 400 errors from upstream proxies. Closed, but highlights a gap in input validation. [Link](https://github.com/earendil-works/pi/issues/6522)

5. **[#6624] GPT-5.6 models for Copilot** — Users want `gpt-5.6-luna`, `gpt-5.6-terra`, and `gpt-5.6-sol` added to Pi's built-in GitHub Copilot provider. Closed as `no-action` (handled by catalog refresh PR #6636). [Link](https://github.com/earendil-works/pi/issues/6624)

6. **[#6600] npm 11.16.0 blocks extension updates** — npm's new default blocking of install scripts breaks `pi update --extensions`. 3 comments, no obvious workaround surfaced yet. [Link](https://github.com/earendil-works/pi/issues/6600)

7. **[#6601] Codex originator header blocks Luna** — `openai-codex` hardcodes `originator: "pi"` which bypasses rollout-gated models like `gpt-5.6-luna`. Same account works with official codex CLI. [Link](https://github.com/earendil-works/pi/issues/6601)

8. **[#6657] Bedrock AWS_PROFILE auth still broken** — Despite 0.80.7 claiming fix for #6531, users still see `AccessDeniedException: 403` with `AWS_PROFILE`. [Link](https://github.com/earendil-works/pi/issues/6657)

9. **[#6655] Subagent silence timeout kills long dispatches** — Task subagents with full-issue workflows are terminated at 480s silence timeout. The subagent heartbeat exists but the parent tool executor ignores it. [Link](https://github.com/earendil-works/pi/issues/6655)

10. **[#6167] transformMessages + isSameModel thinking normalization** — When switching models, thinking-block normalization can corrupt messages for providers with `requiresReasoningContentOnAssistantMessages`. 3 comments, actively being investigated. [Link](https://github.com/earendil-works/pi/issues/6167)

## Key PR Progress

1. **[#6656] xAI subscription OAuth** — Adds SuperGrok OAuth support without tools. Merged. Competing with #6651. [Link](https://github.com/earendil-works/pi/pull/6656)

2. **[#6651] xAI device OAuth + grok-4.5 Responses routing** — More ambitious: adds device-code OAuth alongside API key support, routes only `grok-4.5` through Responses API with reasoning levels. Closes #6461. Merged. [Link](https://github.com/earendil-works/pi/pull/6651)

3. **[#6654] promptCacheKey stream option** — Adds `StreamOptions.promptCacheKey` to override the prompt cache key across 4 providers. Closes #6627. Open for review. [Link](https://github.com/earendil-works/pi/pull/6654)

4. **[#6653] Clamp session-id to 64 chars for openai-codex** — Fixes #6630 where unclamped session IDs >64 chars broke all codex requests. Merged. [Link](https://github.com/earendil-works/pi/pull/6653)

5. **[#6645] Don't send session-id header to opencode models** — Fixes #6625. Merged. [Link](https://github.com/earendil-works/pi/pull/6645)

6. **[#6216] Amazon Bedrock Mantle OpenAI Responses provider** — Adds new provider for Mantle's OpenAI-compatible endpoint. Large PR superseding earlier attempt. Still open. [Link](https://github.com/earendil-works/pi/pull/6216)

7. **[#6594] SQLite session storage** — Adds `retainedTail` to compaction entries and changes `getPathToRoot` to stop at compaction boundaries. Performance optimization for large sessions. Open. [Link](https://github.com/earendil-works/pi/pull/6594)

8. **[#6636] Refresh model catalogs** — Adds GitHub Copilot models (gpt-5.6-luna/sol/terra) plus upstream catalog snapshots. Merged. [Link](https://github.com/earendil-works/pi/pull/6636)

9. **[#6584] Forward provider options to summary requests** — Fixes #6555 where compaction calls didn't inherit session transport settings. Closes a Luna + websocket compatibility issue. Merged. [Link](https://github.com/earendil-works/pi/pull/6584)

10. **[#6635] Recover tool calls from openai-completions content** — Handles local inference servers (Ollama, LM Studio) that return tool-call JSON in `content` but leave `tool_calls` empty. Merged. [Link](https://github.com/earendil-works/pi/pull/6635)

## Feature Request Trends

- **xAI ecosystem expansion** — Three concurrent efforts (OAuth, subscription, Grok 4.5) signal strong interest in xAI as a first-class provider.
- **GPT-5.6 family support** — Luna/Terra/Sol across Codex, Copilot, and direct OpenAI providers is the hottest model landscape.
- **External cost visibility** — Extensions want to report out-of-band LLM costs to Pi's footer display, indicating growing subagent ecosystem complexity.
- **Subagent lifecycle management** — Silence timeout fixes and heartbeat propagation suggest subagent workflows are hitting production-scale limits.

## Developer Pain Points

- **Provider-specific model gating** — Hardcoded originator headers ("pi") and session-ID formats repeatedly break access to rollout-gated or tier-limited models. Three separate issues around `gpt-5.6-luna` alone.
- **Session-affinity configuration churn** — Breaking change in v0.80.7 removes `sendSessionIdHeader` with one-line migration, but users on self-hosted or non-OpenAI providers may not have clear mapping to the new tri-state format.
- **npm ecosystem conflicts** — npm 11.16.0's install-script blocking breaks Pi's extension update flow with no surfaced workaround.
- **Regression in HTTP timeout handling** — v0.80.6 broke `httpIdleTimeoutMs` for self-hosted providers with a clear bisect point to v0.80.3, suggesting a refactor introduced the regression.
- **Compaction/summary transport mismatch** — Summary calls don't inherit session transport settings, causing failures with websocket-only models like Luna. Fixed in #6584, but highlights testing gaps around compaction paths.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-15

## Today's Highlights
The project shipped **v0.19.10 stable** with multi-workspace support now fully integrated across ACP transport, daemon workers, and split-view sessions, alongside a **SDK TypeScript v0.1.8** release. A major `/review` overhaul landed that proves diff reading and computes per-agent verdicts, while urgent fixes address MCP trust bypass via `readOnlyHint` and malformed tool result display loss. The community continues to push for better subagent-to-main-session communication and daemon cold-start optimization.

## Releases
- **v0.19.10-nightly.20260715.c538bd70d** — Nightly with PR scope caps for review and workspace path lock for web-shell.
- **v0.19.9-preview.0** — Preview with same scope cap and workspace path lock.
- **v0.19.10** — **Stable release**: Multi-workspace support now spans ACP transport, daemon workers, split-view sessions, and workspace-aware actions ([#6621](https://github.com/QwenLM/qwen-code/pull/6621), [#6635](https://github.com/QwenLM/qwen-code/pull/6635), [#6746](https://github.com/QwenLM/qwen-code/pull/6746)).
- **sdk-typescript-v0.1.8** — TypeScript SDK release bundling CLI v0.19.10.

## Hot Issues (10 noteworthy)

1. **#6378 — RFC: Support multiple workspaces in one daemon** [OPEN]  
   *Author: doudouOUC | 23 comments*  
   Proposes breaking the `1 daemon = 1 workspace × N sessions` model. High community engagement reflects strong demand for daemon-level workspace multiplexing.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6378)

2. **#6378 is the highest-traffic issue; see above**  

3. **#3696 — Comprehensive hot-reload system for skills, extensions, MCP** [CLOSED]  
   *Author: yiliang114 | 7 comments*  
   Now closed as complete. Runtime hot reload covers settings-driven MCP reconnections. A long-awaited quality-of-life improvement.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/3696)

4. **#4748 — Optimize daemon cold start and fast-path latency** [OPEN]  
   *Author: doudouOUC | 5 comments*  
   Tracks remaining gap after early optimizations. Daemon boot + first session still ~2.5s vs CLI's 0.7s. Key for headless deployments.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/4748)

5. **#5979 — `/auth` config changes don't apply to new sessions** [CLOSED]  
   *Author: hgz1024 | 5 comments*  
   Auth config changes via `/auth` only take effect in the current session; new sessions still get 401. Highlights a configuration persistence gap.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/5979)

6. **#5219 — CI integration tests not run on PR/merge** [CLOSED]  
   *Author: yiliang114 | 5 comments*  
   E2E tests only run on nightly cron, letting regressions slip to release. Community frustration with CI gap.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/5219)

7. **#6809 — Ctrl+S diff preview garbled for multi-line edits** [OPEN]  
   *Author: azurecgx | 4 comments*  
   Permission dialog diff preview concatenates lines (e.g., `};timeout: 30000`). Affects user confidence in edit approval.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6809)

8. **#6914 — Fractional session/tool-call limits terminate prematurely** [OPEN]  
   *Author: morluto | 3 comments*  
   Configuring `0.5` for `maxSessionTurns` passes validation but triggers termination on first turn. Input validation gap.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6914)

9. **#6487 — Memory index stale after `/remember`; content lost on compaction** [OPEN]  
   *Author: Aleks-0 | 3 comments*  
   Two independent memory degradation mechanisms over long sessions. Critical for users running extended agent sessions.  
   [Issue](https://github.com/QwenLM/qwen-code/issues/6487)

10. **#6898 — Shell confirmation triggers every tool call instead of task end** [OPEN]  
    *Author: monkindey | 3 comments*  
    Users request task-level shell confirmation to reduce dozens of popups per task. UX friction for multi-step workflows.  
    [Issue](https://github.com/QwenLM/qwen-code/issues/6898)

## Key PR Progress (10 important)

1. **#6895 — Propagate trusted invocation context** [OPEN]  
   *Author: callmeYe*  
   Introduces `InvocationContextV1` to trace ingress, session, and daemon client across CLI, ACP, daemon, and channel boundaries. Foundation for security-aware routing.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6895)

2. **#6925 — Preserve display output for malformed tool results** [OPEN]  
   *Author: morluto*  
   Treats missing `llmContent` as empty model-facing output while keeping valid display for the user. Fixes #6916.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6925)

3. **#6887 — Apply FETCH_TIMEOUT_MS to `/update` version check** [OPEN]  
   *Author: C0d3N1nja97342*  
   Wires existing 2s timeout constant to `update-notifier` so `/update` doesn't hang. Addresses #6857.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6887)

4. **#6902 — Don't let a non-boundary `@` suppress `/` completion** [OPEN]  
   *Author: chinesepowered*  
   Fixes VS Code chat input where stray `@` (e.g., in email) blocks slash-command completion. Adds unit tests.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6902)

5. **#6892 — Prove diff was read, build agent prompts, compute verdict** [OPEN]  
   *Author: wenshao*  
   `/review` now proves diff reading, constructs per-agent prompts, and self-verdicts. Found 7 defects in dogfooding. Major quality leap.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6892)

6. **#6854 — Sanitize standalone closing thinking tags** [OPEN]  
   *Author: yiliang114*  
   Suppresses lone `</think>` tags from model output when valid tool calls exist, instead of discarding the whole turn.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6854)

7. **#6893 — Handle unsigned Claude thinking from proxies** [OPEN]  
   *Author: yiliang114*  
   Omit unsigned adaptive-thinking blocks from non-native Anthropic endpoints while preserving valid signed content.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6893)

8. **#6923 — Canonicalize restrictive permission paths** [OPEN]  
   *Author: morluto*  
   Compares both supplied path and canonical filesystem destination, resolving symlinks and `..` components. Fixes #6915.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6923)

9. **#6924 — Require trust for read-only auto-approval** [OPEN]  
   *Author: morluto*  
   `readOnlyHint` no longer grants automatic permission for untrusted MCP servers. Fixes #6917. Security hardening.  
   [PR](https://github.com/QwenLM/qwen-code/pull/6924)

10. **#6891 — Support DingTalk webhook delivery to direct messages** [OPEN]  
    *Author: BenGuanRan*  
    Extends DingTalk channel to support single-chat delivery via `userIds`, alongside existing group chat. Reuses token cache and error handling.  
    [PR](https://github.com/QwenLM/qwen-code/pull/6891)

## Feature Request Trends
- **Multi-workspace daemon architecture** (#6378, #6621, #6635, #6746): The dominant theme—moving from single-workspace daemon to a shared daemon serving multiple projects.
- **Subagent/main-session communication** (#5239): Strong demand for bidirectional notification and monitoring between subagents and parent sessions.
- **Interactive card UI for channels** (#6443, #6891): Users want native interactive cards (stop buttons, form inputs) for DingTalk and similar channels.
- **Tool-call lifecycle events** (#6775): Expose `pending` tool call states before arguments complete, enabling streaming UI in ACP consumers.
- **Compact tool summaries with file names** (#6813): Replace "Read 3 files" with explicit file list for at-a-glance context.

## Developer Pain Points
1. **CI regression detection gap** (#5219, #6884, #6766): E2E tests only run on nightly cron; PR merges can silently break tests. Automated patrols and local verification gates are being built in response.
2. **Session configuration persistence** (#5979, #6831): Changes via `/auth` or trust-status preview mutate cached configs, leaking unconfirmed state to new sessions.
3. **Shell permission fatigue** (#6898): Every tool call triggers a shell confirmation popup; users want task-level or end-of-task confirmation.
4. **Memory degradation in long sessions** (#2128, #6487): UI history grows unboundedly; memory index goes stale after `/remember`; compaction loses memories.
5. **Ctrl+C accidental exit in IDEs** (#4586): PyCharm terminal users frequently exit agents when trying to copy text, due to single-`Ctrl+C` exit behavior.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-15

**Project:** github.com/Hmbown/DeepSeek-TUI (Codewhale ecosystem)

## Today's Highlights

The v0.8.68 release candidate has been finalized, bringing the "underwater TUI" visual system to completion with full keyboard/mouse parity, reduced-motion support, and receipt-settling logic. A major i18n issue surfaced where Chinese users report "Constitution" being translated as "宪法" (constitutional law) instead of the intended "规则/准则" (rules/guidelines). The community also landed a new MiniMax Messages provider and fixed cross-platform browser opening for BSD systems.

## Releases

No new releases in the last 24 hours. The v0.8.68 release candidate (#4361) is in review.

## Hot Issues

**#4032 – [OPEN] Codewhale not following the constitution**  
Community vitriol: 35 comments, 0 upvotes. Codewhale repeatedly writes temporary scripts instead of using provided scripts, and finds justifications when challenged. This is a core trust issue with the agent's rule-following behavior, heavily discussed but not yet resolved.  
🔗 [Issue #4032](https://github.com/Hmbown/CodeWhale/issues/4032)

**#4270 – [CLOSED] Streaming text display too slow**  
Terminal text rendering cannot keep up with fast models like DeepSeek V-flash, causing "burst" output dumps after model completes. AnonymousUser443 reports the issue existed since prior version but worsened. Closed with comments suggesting performance patch merged.  
🔗 [Issue #4270](https://github.com/Hmbown/CodeWhale/issues/4270)

**#4369 – [OPEN] Unnatural Chinese translation for "Constitution"**  
hmr-BH reports setup wizard translates "Constitution" as "宪法" and "Code" as "代码" – both inappropriate in context. The wizard labels are confusing for Chinese-speaking users configuring agent rules. Community response indicates this is a blocking UX issue for i18n adoption.  
🔗 [Issue #4369](https://github.com/Hmbown/CodeWhale/issues/4369)

**#4365 – [OPEN] `@` file watcher scans entire directory tree, causing terminal freeze**  
Using `@` to monitor non-workspace directories causes complete terminal unresponsiveness on pwsh7 due to eager tree traversal. WavesMan reports this as a severe productivity blocker for projects with large dependencies.  
🔗 [Issue #4365](https://github.com/Hmbown/CodeWhale/issues/4365)

**#3765 – [CLOSED] Expose SeamManager and CompactionConfig to config.toml**  
Mr-Moon121 identified that `SeamManager.enabled` and `CompactionConfig.enabled` were hardcoded to `true` with no user knob. The `auto_compact` setting only controls UI prompting, not the engine mechanisms. Closed via PR #3780 adding toml gates.  
🔗 [Issue #3765](https://github.com/Hmbown/CodeWhale/issues/3765)

**#4208 – [CLOSED] TUI copy-paste polluted with box-drawing Unicode**  
Selecting text from TUI includes decorative characters (╎, ▎, ●, │, ┃), breaking developer workflows. Cut-and-paste of code/conversations requires manual cleanup. eugenicum's bug report was resolved, likely as part of v0.8.68 TUI rework.  
🔗 [Issue #4208](https://github.com/Hmbown/CodeWhale/issues/4208)

**#4350 – [CLOSED] Cargo Build fails on Android/Termux**  
Building from Termux fails due to rquickjs missing bindings for `aarch64-linux-android`. Michael2008S reported the cross-compile roadblock. Closed with no fix noted; likely a known platform limitation.  
🔗 [Issue #4350](https://github.com/Hmbown/CodeWhale/issues/4350)

**#4318 – [CLOSED] Pricing drops cache-write rates**  
`CurrencyPricing` and `TokenUsage` hardcode `cache_write: 0`, effectively discarding Anthropic cache-write costs (which are 1.25x–2x input). Hmbown identified this as a pricing accuracy bug, closed with PR #4351.  
🔗 [Issue #4318](https://github.com/Hmbown/CodeWhale/issues/4318)

**#4359 – [CLOSED] Define parent-stop semantics for detached background agents**  
Foreground children inherit cancellation, but detached agents intentionally outlive turns. The Esc/stop contract is ambiguous: continue, cancel all, or ask? Hmbown closed as part of v0.8.68 RC with explicit semantics.  
🔗 [Issue #4359](https://github.com/Hmbown/CodeWhale/issues/4359)

**#4357 – [CLOSED] Finish underwater receipt settling and phase-aware ambient motion**  
Underwater TUI had coherent still-state but needed receipt settling, phase-aware depth, and a one-shot fish response. Must avoid motion during input idle or reduced-motion mode. Closed via v0.8.68 RC.  
🔗 [Issue #4357](https://github.com/Hmbown/CodeWhale/issues/4357)

## Key PR Progress

**#4361 – Prepare CodeWhale v0.8.68 release candidate**  
Monolithic RC branch by Hmbown. Completes underwater TUI with compact-terminal behavior, keyboard/mouse parity, reduced-motion semantics, theme reachability, and coherent permission posture changes.  
🔗 [PR #4361](https://github.com/Hmbown/CodeWhale/pull/4361)

**#4367 – [OPEN] Bound @-completion file-index walk with wall-clock budget**  
LeoLin990405's fix for #4365. The fuzzy-completion index in `WorkingSet::build_file_index` is rebuilt from scratch on each `@`. Introduces a wall-clock budget to abort deep scans and fall back to partial results.  
🔗 [PR #4367](https://github.com/Hmbown/CodeWhale/pull/4367)

**#4351 – Fix scorecard: bind costs to provider routes**  
nightt5879's fix for #4318 and #4335. Binds offline scorecard prices to exact provider/model routes. OAuth, local/custom, unknown, and unpriced gateway routes now fail closed. Preserves turn ID, UTC start time, and billing discriminator through `turn_end`.  
🔗 [PR #4351](https://github.com/Hmbown/CodeWhale/pull/4351)

**#4354 – Add MiniMax Messages provider support**  
octo-patch adds dedicated MiniMax provider with global and China Base URLs. Registers MiniMax-M3 and MiniMax-M2.7 with verified context, modality, thinking, and pricing metadata.  
🔗 [PR #4354](https://github.com/Hmbown/CodeWhale/pull/4354)

**#4362 – Make Codewhale public site documentation-led**  
Hmbown replaces marketing-heavy landing page with compact documentation portal. Introduces repository-derived install, runtime, provider, and version guidance as primary homepage content. Underwater visual system aligned with CWC typography.  
🔗 [PR #4362](https://github.com/Hmbown/CodeWhale/pull/4362)

**#4364 – Add keyword search to docs hub and FAQ pages**  
idling11 adds client-side DocsSearch component with real-time filtering across all doc topics (EN/ZH). Includes `/` keyboard shortcut and accessible inline results.  
🔗 [PR #4364](https://github.com/Hmbown/CodeWhale/pull/4364)

**#4355 – Persist stateful terminal identity and restart limitations safely**  
Stateful terminal sessions preserve shell state for process lifetime, but persisted contract must not mistake stale PID for a live shell after Codewhale restart. Fixes safety of terminal identity persistence.  
🔗 [PR #4355](https://github.com/Hmbown/CodeWhale/pull/4355)

**#4356 – Complete versioned exec stream receipts and tool lifecycle metadata**  
Exec-stream JSON foundation for typed terminal outcomes. Terminal receipt and tool lifecycle metadata completed for replay, support, and cost attribution. Additive, versioned contract replaces prose inference.  
🔗 [PR #4356](https://github.com/Hmbown/CodeWhale/pull/4356)

**#4360 – Fix browser open on BSD systems**  
ci4ic4 fixes browser opening on NetBSD, FreeBSD, OpenBSD, and DragonFly. Previous platform gates only covered macOS, Linux, Windows; all BSDs fell through to "unsupported platform" error.  
🔗 [PR #4360](https://github.com/Hmbown/CodeWhale/pull/4360)

**#3780 – Expose context compaction gates**  
nightt5879 adds `[compaction].enabled` and `[seam_manager].enabled` as engine-level config.toml switches. Keeps existing behavior compatible while giving users control over the compaction engine.  
🔗 [PR #3780](https://github.com/Hmbown/CodeWhale/pull/3780)

## Feature Request Trends

**1. i18n and localization quality** (#4369): Chinese translations are unnatural and confusing, particularly for core concepts like "Constitution" and "Code." The community expects proper localization before broader international adoption.

**2. Agent rule-following reliability** (#4032): Users consistently report Codewhale ignoring provided scripts and constitutions, finding justifications for deviations. This is the single most discussed issue (35 comments) and represents a fundamental trust gap.

**3. Streaming performance** (#4270): Terminal render speed cannot match fast model output, especially on deep-seek models. Users want GPU-accelerated or async rendering to eliminate burst-output stalls.

**4. Configurability of engine internals** (#3765): Users demand toml-level control over SeamManager, CompactionConfig, and other internal mechanisms previously hardcoded. The closed PR #3780 addresses this, but more engine components likely need exposure.

**5. Cross-platform parity** (#4350, #4360): Android/Termux builds fail due to missing JS bindings; BSD systems cannot open browser links. Community expects Codewhale to support all Unix-like platforms equally.

## Developer Pain Points

**High-frequency frustrations:**

- **Eager directory scanning** (#4365): The `@` file mention feature freezes terminals on large paths. Developers working with monorepos or dependency-heavy projects find this unusable until a budget-based abort is introduced (now in PR #4367).

- **Copy-paste pollution** (#4208): Box-drawing Unicode characters corrupt every text selection from the TUI. Despite being closed, this remains a daily annoyance for developers copying code or conversation excerpts.

- **Token-by-token rendering latency** (#4270): Fast models finish generating before the terminal displays output, causing sudden text dumps. Developers debugging prompt chains find this misleading and disruptive.

- **Pricing accuracy gaps** (#4318, #4335): Cache-write costs (especially Anthropic) are dropped entirely; offline scorecards use wrong pricing for OAuth/custom routes. Developers running cost-sensitive workflows cannot trust the displayed estimates.

- **Ambiguous stop semantics** (#4359): Detached background agents have unclear termination behavior. Developers who run long-running agents must guess whether Esc will cancel foreground only or cascade to all children.

- **No BSD/Android support** (#4350, #4360): Cross-platform contributors face build failures and broken browser features, fragmenting the developer tool experience.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*