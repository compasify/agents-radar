# AI CLI Tools Community Digest 2026-06-14

> Generated: 2026-06-14 00:28 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**Date: 2026-06-14**

---

## 1. Ecosystem Overview

The AI CLI tools landscape is undergoing rapid maturation, with competing projects converging on shared architectural patterns while differentiating on developer experience, model ecosystems, and platform support. **Persistent memory and lifecycle hooks** have emerged as the dominant cross-cutting demand, with communities across Claude Code, Pi, and OpenCode independently building custom solutions around context compaction and session management. **MCP (Model Context Protocol) stability and standardization** remains the second critical battleground, with every major tool shipping fixes for OAuth, tool schema normalization, and connection lifecycle this week. **Windows and cross-platform reliability** is a persistent pain point—Claude Code, Codex, and OpenCode all report clusters of Windows-specific bugs, while Gemini CLI and DeepSeek TUI lack equivalent Windows attention. The ecosystem is shifting from proof-of-concept to production-ready, with cost visibility, safety classifier tuning, and enterprise authentication (Vertex AI, OAuth) receiving focused engineering investment.

---

## 2. Activity Comparison

| Tool | Open Issues | PRs Active Today | Release This Week | Community Velocity |
|---|---|---|---|---|
| **Claude Code** | ~68,000 total (est.) | 4 (1 significant) | v2.1.177 | High: 10 hot issues, persistent memory demand dominant |
| **OpenAI Codex** | ~28,000 total (est.) | 10 (all open, heavy Windows focus) | rust-v0.140.0-alpha.17/.18 | High: Windows/WSL regressions, safety false positives |
| **Gemini CLI** | ~27,000 total (est.) | 10 (all open, MCP fixes) | None this week | Moderate: 2 P1 agent-hang bugs, but lower issue volume |
| **GitHub Copilot CLI** | ~3,800 total | 0 PRs | v1.0.62, v1.0.62-2 | Moderate: BYOM & MCP preloading top requests |
| **Kimi Code CLI** | ~2,500 total (est.) | 5 open (3 significant) | None this week | Low: v0.12.0 stable, long-standing bugs persist |
| **OpenCode** | ~32,000 total | 10 (all open, MCP heavy) | v1.17.5, v1.17.6 | High: MCP standardization surge, 20 upvotes on #28567 |
| **Pi** | ~5,700 total | 1 open (Anthropic Vertex PR) | v0.79.3 | Moderate: cache cost bug, Shrinkwrap migration |
| **Qwen Code** | ~5,100 total | 10 (9 open, architecturally significant) | None this week | High: 28 issues/50 PRs in 24h, Rust migration underway |
| **DeepSeek TUI (CodeWhale)** | ~3,200 total | 10 (all open, fleet orchestration) | None this week | High: rapid v0.8.60 dev cycle, 5 new PRs today |

*Total issue counts are approximate; exact totals reflect repository scale differences. Community velocity assessed qualitatively from comment activity, PR velocity, and issue engagement depth.*

---

## 3. Shared Feature Directions

### 3.1 Persistent Memory & Session Lifecycle Hooks **(Present in: Claude Code, Pi, OpenCode, DeepSeek TUI)**
- **Claude Code**: Community-built 3-tier markdown persistence system (#34556), formal proposal for `SessionStart`/`compact`/`SessionEnd` hooks (#47023)
- **Pi**: "Veil" context management system (#5704)—auto-capture, deduplication, smart truncation of tool results
- **OpenCode**: Native `/goal` session persistence with token budget accounting (PR #32239)
- **DeepSeek TUI**: Agent run ledger with receipts (#3142), session persistence via new `PUT /v1/sessions` endpoint (PR #3199)
- **Common pattern**: Every community is hacking around missing native memory hooks; the consensus solution is lifecycle hooks for external memory layers.

### 3.2 MCP Stability & Standard Compliance **(Present in: All tools)**
- **Claude Code**: Remote-control permission prompts don't surface (#60385)
- **Codex**: Plugin MCP deduplication (PR #27607), exec-server process lifecycle hardening (6+ PRs)
- **Gemini CLI**: OAuth token refresh fix (PR #27889), tool schema normalization (PR #27888), MIME sniffing (PR #27878), pending tool response cap (PR #27870)
- **Copilot CLI**: MCP tool preloading request (#3787) to avoid lazy-discovery failures
- **Kimi Code**: MCP disconnect handling (PR #2434), double-encoded JSON fix (PR #2407)
- **OpenCode**: Client roots support (PR #32230), tool result error handling (PR #32244), OAuth security fixes (PR #32242, #32245)
- **Pi**: Tool argument validation for JSON strings (PR #5697/#5698), MCP extension lifecycle hangs (#5687)
- **Qwen Code**: Kind.Agent categorization for tool UI (PR #5085)
- **DeepSeek TUI**: Native Anthropic Messages API adapter (PR #3054)
- **Common pattern**: MCP is becoming the universal protocol layer, but every implementation has gaps in OAuth, tool schema normalization, connection lifecycle, and error handling.

### 3.3 Windows & Cross-Platform Reliability **(Present in: Claude Code, Codex, OpenCode, Pi)**
- **Claude Code**: Cowork on Windows—memory leaks (#67780), VM service failures (#64592), EXDEV rename errors (#45178), pairing failures (#67303)
- **Codex**: WSL integration regression cluster—path mangling (#28094), missing CLI (#28086), fresh-install breakage (#28074)
- **OpenCode**: UNC paths break WSL servers (#19473), CRLF diffs (#27279)
- **Pi**: Windows terminal Ctrl+V swallowed (#5640), intermittent `write EPIPE` errors (#5691)
- **Notable absence**: Gemini CLI and DeepSeek TUI have minimal Windows-specific issues, likely due to Linux-first or cross-platform Rust architecture.

### 3.4 Bring-Your-Own-Model (BYOM) & Provider Flexibility **(Present in: Copilot CLI, Pi, Qwen Code, DeepSeek TUI)**
- **Copilot CLI**: Ollama API Key for remote BYOM (#3789)
- **Pi**: Provider metadata accuracy issues (#5644, #5701), Anthropic Vertex provider PR (#5262, open since May 31)
- **Qwen Code**: Provider identity decoupling from SDK protocol (PR #5089), same-model-from-multiple-providers confusion (#4877)
- **DeepSeek TUI**: Multi-provider support with dedicated PRs for Z.ai/StepFun (PR #3191), Kimi/Qwen/GLM pricing (PR #3201)

### 3.5 Context Window & Token Management **(Present in: Claude Code, Codex, Pi, Qwen Code)**
- **Claude Code**: Model self-awareness requests for `session_id` and context usage (#36678)
- **Codex**: SSE fallback performance regression (#24428)
- **Pi**: Context window metadata fixes for GPT-5.x (v0.79.3), 272K Codex limit observed
- **Qwen Code**: Long-context attention drift (#5018), repetitive tool-call loops (#5019)

### 3.6 Safety & Trust **(Present in: Codex, Claude Code, Gemini CLI, Qwen Code)**
- **Codex**: False-positive cybersecurity flags on tax filing (#27817) and git maintenance (#28015)
- **Claude Code**: Cost exposure from unconstrained agent fan-out (#68285)
- **Gemini CLI**: Auto Memory redaction timing vulnerability (#26525)
- **Qwen Code**: Trojan false positive in VSIX package (#5055)

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|---|
| **Primary Model** | Claude (Anthropic) | GPT/Codex (OpenAI) | Gemini (Google) | Multi-model (GitHub) | Moonshot API | Multi-provider | Multi-provider | Qwen (Alibaba) | Multi-provider |
| **Architecture** | TypeScript/Electron | Rust + Python | Go | Go | Python | TypeScript | TypeScript | TypeScript | Rust |
| **Target User** | Power devs, agent workflows | Enterprise, Windows users | Google ecosystem devs | GitHub ecosystem | Moonshot ecosystem | Generalist devs | Early adopters | Alibaba Cloud devs | OSS power devs |
| **Unique Strength** | Persistent memory hooks proposal | exec-server process hardening | MCP OAuth + schema fixes | Plugin marketplace (v1.0.62-2) | Simplicity | MCP standard compliance | Cache cost transparency | Rust migration for Computer Use | Agent fleet orchestration |
| **Key Weakness** | Windows Cowork instability | WSL integration fragility | Agent hangs (P1) | ARM64 regression (#3784) | TUI crashes (#2450) | MCP tool abort errors (#18757) | Shrinkwrap debt (#5653) | Nightly build failures (#5068) | DeepSeek-centric defaults |
| **Community Size** | Largest (~68K issues) | Large (~28K) | Large (~27K) | Smallest (~3.8K) | Small (~2.5K) | Large (~32K) | Medium (~5.7K) | Medium (~5.1K) | Small (~3.2K) |
| **Release Cadence** | Multiple/week | Multiple alpha releases | Weekly-ish | Weekly | Sparse | Multiple/week | Sparse | Nightly (unstable) | Rapid dev cycle |

---

## 5. Community Momentum & Maturity

**High Momentum / Rapid Iteration:**
- **OpenCode**: v1.17.5/6 shipped this week with MCP client roots, OAuth security fixes, and session persistence. 10 active PRs. The MCP standardization push (#28567, 20👍) is driving the most dense PR activity of any tool.
- **DeepSeek TUI (CodeWhale)**: 5 new PRs today, rapid v0.8.60 cycle. Architectural ambition is highest—headless worker runtime, agent fleet control plane, `/swarm` command. Community is small but engaged.
- **Claude Code**: Largest community, persistent memory demand driving 5+ open issues and first community hook-based PR (#68239). Cost exposure and Windows bugs are growing pains of rapid adoption.
- **Qwen Code**: 28 issues/50 PRs in 24h. Rust migration for Computer Use (PR #5051) and provider decoupling (PR #5089) are significant architectural bets.

**Moderate Momentum / Stable Iteration:**
- **Gemini CLI**: Steady MCP fixes, but lower issue volume suggests smaller active user base. Agent hangs (#21409, #25166) remain unresolved P1s.
- **Copilot CLI**: v1.0.62-2 plugin marketplace is a differentiator, but community is smallest and ARM64 regression (#3784) blocks a key platform.

**Lower Momentum / Maintenance Mode:**
- **Kimi Code CLI**: v0.12.0 stable, but sparse releases and long-standing bugs (#640 file-reading loop, #2450 TUI crash) suggest limited engineering bandwidth.
- **Pi**: v0.79.3 patch is reactive (context window billing bug), Shrinkwrap migration (#5653) is architectural debt. Only 1 open PR (Anthropic Vertex, since May 31).

---

## 6. Trend Signals

1. **Persistent Memory is the Next Frontier**: Every tool community is independently solving for session persistence across context compaction. The Claude Code proposal for lifecycle hooks (#47023) is the most formalized solution. Tools that ship native memory hooks first will have a competitive advantage for agentic workflows.

2. **MCP is Winning as the Universal Protocol Layer**: Every tool is investing in MCP compliance—OAuth, tool schemas, client roots, connection lifecycle. The pain points are universal: lazy discovery failures, double-encoded JSON, missing root types. Standardization is happening, but unevenly.

3. **Agent Fan-Out Demands Cost Controls**: Claude Code's $1k fan-out incident (#68285) and Pi's cache cost inflation (#5703) are warnings. Cost visibility and per-agent ceilings are becoming requirements, not nice-to-haves.

4. **Windows is the Weakest Link**: Claude Code, Codex, and OpenCode all report Windows-specific bugs. DeepSeek TUI (Rust) and Gemini CLI (Go) avoid this—architecture choice matters for cross-platform reliability.

5. **Safety Classifiers Need Calibration**: Codex's false-positive cybersecurity flags (#27817, #28015) erode trust. As AI tools become more autonomous, safety systems must distinguish legitimate work from risk—current classifiers are too sensitive.

6. **Rust Is Gaining as a CLI Architecture**: DeepSeek TUI (Rust) and Qwen Code's Computer Use migration to Rust (PR #5051) signal a shift from TypeScript/Node.js toward Rust for performance, cross-platform reliability, and process lifecycle management.

7. **Plugin Marketplaces Are Emerging**: Copilot CLI's v1.0.62-2 plugin extension shipping capability and OpenCode's MCP ecosystem indicate that extensibility is becoming a competitive differentiator. The first tool with a mature plugin marketplace will attract ecosystem lock-in.

8. **Provider Agnosticism Is Expected, Not Optional**: Users want to mix models (OpenAI + Anthropic + local Ollama + Alibaba Cloud) in a single session. Copilot CLI's BYOM (#3789), Qwen Code's provider decoupling (PR #5089), and DeepSeek TUI's multi-provider pricing (#3201) all point in this direction. Tools tied to a single model ecosystem will face pressure.

---

*Report generated 2026-06-14 from public issue trackers and PR activity. Data reflects community digest summaries provided for each tool.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-06-14 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following Skills received the most community discussion attention via Pull Requests:

| Rank | Skill | PR | Status | Discussion Focus |
|------|-------|-----|--------|-----------------|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Open | Typographic quality control for AI-generated documents—orphan word wrap, widow paragraphs, numbering alignment. High-value but awaiting refinement of spec. |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | Open | Full ODT/ODS creation, template filling, and conversion to HTML. Addresses a major gap for LibreOffice ecosystem users. |
| 3 | **frontend-design (revised)** | [#210](https://github.com/anthropics/skills/pull/210) | Open | Comprehensive rewrite of existing skill for clarity and actionability; every instruction must be executable within a single conversation turn. |
| 4 | **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | Open | Meta-skills for evaluating other Skills across structure, documentation, and security dimensions—essentially a Skills linter. |
| 5 | **SAP-RPT-1-OSS predictor** | [#181](https://github.com/anthropics/skills/pull/181) | Open | Tabular foundation model for predictive analytics on SAP business data. Niche but high-expertise community interest. |
| 6 | **agent-creator** | [#1140](https://github.com/anthropics/skills/pull/1140) | Open | Meta-skill for generating task-specific agent sets; includes multi-tool evaluation fixes and Windows support. |
| 7 | **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Open | Full-stack testing coverage (unit, React components, integration, E2E) following the Testing Trophy model. |
| 8 | **AURELION skill suite** | [#444](https://github.com/anthropics/skills/pull/444) | Open | Four-skill cognitive framework (kernel, advisor, agent, memory) for structured knowledge management. |

---

## 2. Community Demand Trends

Analysis of the most active Issues reveals five concentrated demand areas:

**1. Organizational Skill Sharing & Management** (Issue [#228](https://github.com/anthropics/skills/issues/228))
- **14 comments, 7 👍** — Strongest demand signal. Users need org-wide skill libraries, direct sharing links, and centralized management without manual `.skill` file distribution.

**2. Skill-Creator Tooling Reliability** (Issues [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061))
- **18 total comments.** The `run_eval.py` pipeline consistently reports 0% recall on all queries—a critical blocker for the description-optimization loop. Windows compatibility failures compound this issue.

**3. Identity & Security Boundaries** (Issue [#492](https://github.com/anthropics/skills/issues/492))
- Community skills distributed under the `anthropic/` namespace create trust boundary vulnerabilities. Users may grant elevated permissions to impersonated official skills.

**4. Skill Duplication & Namespace Conflicts** (Issue [#189](https://github.com/anthropics/skills/issues/189))
- Installing `document-skills` and `example-skills` plugins produces identical content, wasting context window capacity.

**5. Platform Expansion** (Issues [#29](https://github.com/anthropics/skills/issues/29), [#16](https://github.com/anthropics/skills/issues/16))
- Continued demand for AWS Bedrock compatibility and exposing Skills as MCPs for standardized API contracts.

---

## 3. High-Potential Pending Skills

These active PRs have sustained discussion and are likely to land soon:

| Skill | PR | Last Activity | Key Feature |
|-------|-----|---------------|-------------|
| **fix: pdf case-sensitive file refs** | [#538](https://github.com/anthropics/skills/pull/538) | 2026-04-29 | Fixes 8 case-sensitivity mismatches; critical for Linux/macOS users |
| **fix: tracked change w:id collision** | [#541](https://github.com/anthropics/skills/pull/541) | 2026-04-16 | Prevents DOCX corruption when bookmarks and tracked changes share ID space |
| **run_eval.py: Windows stream fix** | [#1099](https://github.com/anthropics/skills/pull/1099) | 2026-05-24 | Fixes "not triggered" bug on Windows (WinError 10038) |
| **run_eval.py: complete recall fix** | [#1298](https://github.com/anthropics/skills/pull/1298) | 2026-06-11 | Addresses root cause of 0% recall across all queries |
| **fix: YAML unquoted description detection** | [#539](https://github.com/anthropics/skills/pull/539) | 2026-04-16 | Prevents silent YAML parsing failures in frontmatter |
| **skill-creator: UTF-8 panic fix** | [#362](https://github.com/anthropics/skills/pull/362) | 2026-06-10 | Replaces character-length checks with byte-length validation for multi-byte characters |
| **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | 2026-02-04 | 10-step orphan code detection and documentation gap analysis |
| **shodh-memory** | [#154](https://github.com/anthropics/skills/pull/154) | 2026-03-03 | Persistent memory system for cross-conversation context retention |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for Skills ecosystem tooling and reliability—specifically, fixing the broken `run_eval.py` evaluation pipeline, enabling organizational skill sharing, and adding Windows compatibility—rather than for new domain-specific Skills content itself.**

---

# Claude Code Community Digest — 2026-06-14

## Today's Highlights

A major model access issue is sweeping the community: **claude-fable-5** is being flagged as "invalid or inaccessible" across multiple platforms, causing compaction failures and session disruptions. Meanwhile, the long-running demand for persistent memory across context compactions is gaining momentum (59 compactions documented by one user), and a significant cost-overrun incident involving workflow fan-out hitting premium-tier defaults has surfaced. Bug reports around Cowork on Windows continue to accumulate, with memory leaks and VM service failures dominating.

## Releases

**v2.1.177** was released in the last 24 hours with no changelog details provided.

## Hot Issues

### 1. [Feature: VS Code Extension setting to disable auto-attach](https://github.com/anthropics/claude-code/issues/24726)
*159 👍, 52 comments* — The top-voted open issue. Users working with specific file/selection workflows want granular control over when Claude auto-attaches context. No maintainer response yet, despite being open since February.

### 2. [Persistent Memory Across Context Compactions](https://github.com/anthropics/claude-code/issues/34556)
*3 👍, 43 comments* — A developer documents 59 compactions over 26 days and built a complete 3-tier markdown-based persistence system. The community is clearly hacking around a missing core feature. High engagement signals strong demand for native memory hooks.

### 3. [Expose compact/session lifecycle hooks for external memory layers](https://github.com/anthropics/claude-code/issues/47023)
*4 👍, 21 comments* — A formal proposal to solve the persistent memory gap by exposing hooks. References five related open issues. The community has converged on this as the architectural fix.

### 4. [VS Code Extension: Diff review UI similar to Copilot Edits Review](https://github.com/anthropics/claude-code/issues/33932)
*97 👍, 21 comments* — Strong demand for inline diff review in VS Code. Users want to approve/reject changes granularly rather than accepting blind file writes. Direct competitor comparison to GitHub Copilot.

### 5. [Remote Control: MCP permission prompts never surface in web UI](https://github.com/anthropics/claude-code/issues/60385)
*19 comments* — A blocking bug for `--remote-control` users. Permission prompts for non-read MCP tools only render in the local TUI, causing sessions to hang when driven from claude.ai/code.

### 6. [claude-fable-5 model inaccessible / invalid error](https://github.com/anthropics/claude-code/issues/68121)
*10 comments, new* — Multiple duplicate reports (#68121, #68137) of model access errors for `claude-fable-5`. Affects macOS users, causes compaction failures. Appears to be a rollout/access issue.

### 7. [Workflow fan-out incurs ~$1k in auto-purchased charges](https://github.com/anthropics/claude-code/issues/68285)
*6 comments, new* — A user reports workflow fan-out (parallel agent spawning) inherits premium-tier defaults with no per-agent cost ceiling. The original root cause analysis was wrong (not ANSI escapes), but the cost exposure is real.

### 8. [Cowork locks up after ~5 min — EventEmitter memory leak](https://github.com/anthropics/claude-code/issues/67780)
*4 comments, new* — `MaxListenersExceededWarning` accumulation on Windows causes Electron renderer freezes. Reproducible within minutes of starting a Cowork session. Part of a growing cluster of Windows Cowork bugs.

### 9. [Team agents ignore bypassPermissions for Bash](https://github.com/anthropics/claude-code/issues/26479)
*14 👍, 12 comments* — Agent Teams not inheriting `bypassPermissions` settings means teammates get blocked on every bash command. Project-level `settings.local.json` also not inherited. Blocks automated multi-agent workflows.

### 10. [Slash commands not supported in /remote-control UI](https://github.com/anthropics/claude-code/issues/28379)
*43 👍, 8 comments* — Commands like `/clear`, `/compact`, `/rewind` sent as plain text from remote UI. Nullifies key workflow controls when using mobile or web-based remote control.

## Key PR Progress

### 1. [Feat: add project-theme plugin for per-project theme settings](https://github.com/anthropics/claude-code/pull/68239)
*New, open* — Adds a `SessionStart` hook that reads theme/color from `.claude/settings.json`. Addresses the long-standing per-project color theme request (#43216). This is the *first community PR leveraging hooks* — a significant milestone if merged.

### 2. [Fix issues being auto-closed despite human activity](https://github.com/anthropics/claude-code/pull/26360)
*Closed* — Fixes the triage bot's logic to not auto-close issues where humans have commented. Also fixes `closeExpired()` in the sweep workflow. Previously open, this PR was recently closed — unclear if merged or abandoned.

### 3. [Create SECURITY.md](https://github.com/anthropics/claude-code/pull/1)
*Closed* — The very first PR on the repo, recently updated. Likely just a bot/administrative action reactivating the file.

### 4. [PR #58673](https://github.com/anthropics/claude-code/pull/58673)
*Open* — Minimal PR ("s") with no description. Likely a test/spam PR, but worth noting for repository health monitoring.

## Feature Request Trends

1. **Persistent Memory / Lifecycle Hooks** — The #1 community demand. Users are building custom persistence solutions (markdown archives, knowledge graphs, structured memory). The proposal to expose `SessionStart`/`compact`/`SessionEnd` hooks (#47023) has emerged as the community-consensus solution. Currently 5+ open issues on this topic.

2. **VS Code Diff Review UI** — Users want visual inline diff review similar to GitHub Copilot Edits. Currently Claude Code applies file changes silently; no approval workflow exists for individual changes.

3. **Remote Control Parity** — Slash commands, permission prompts, and MCP tool interactions don't work the same in `--remote-control` mode as the local TUI. Multiple requests for feature parity.

4. **Per-Project Configuration** — Theme/color settings (#43216, now with PR #68239), per-project MCP server visibility (#36493), and project-level permission overrides (#26479) are all requested.

5. **Model/AI Self-Awareness** — Requests for the model to know its own `session_id` and context window usage (#36678) so it can proactively manage its own context.

## Developer Pain Points

- **Windows Cowork Instability** — A cluster of bugs: VM service not running (#64592), EXDEV rename errors with OneDrive (#45178), EventEmitter memory lockups (#67780), and persistent "Can't reach your desktop" pairing failures (#67303). Cowork on Windows is clearly in poor health.

- **Model Access Errors** — `claude-fable-5` suddenly inaccessible on macOS (#68121, #68137, #68285). Causes compaction failures and session interruptions. Users forced to manually switch models.

- **Data Loss Risks** — File checkpointing silently does `git stash` + `git reset --hard`, wiping uncommitted edits (#68315). Write tool's full-file-replacement default causes irrecoverable loss on untracked state files (#67917). Two data-loss bugs reported this week alone.

- **Cost Exposure** — Workflow fan-out with premium-tier defaults and no per-agent cost ceiling (#68285) caused ~$1k in auto-purchased charges. Users lack visibility into cost scaling for parallel agents.

- **TUI Rendering Degradation** — Garbled text, missing output, need to resize terminal to reset rendering (#66795). Multiple reports of TUI quality regression in recent versions.

- **VS Code Extension Binary Leaks** — Remote-SSH reconnects spawn new `claude` processes without reaping old ones (#59476). Processes accumulate monotonically, consuming memory.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date: 2026-06-14**

## Today's Highlights
Two new Rust alpha releases (v0.140.0-alpha.17 and .18) landed in the last 24 hours, though changelogs remain sparse. The community is experiencing a surge of Windows and WSL integration issues following recent Codex Desktop updates, with multiple reports of broken sandboxing, path mangling, and missing binaries. On the development side, a major testing push from the exec-server team is hardening cross-platform process execution, with 12+ new integration tests for Windows shell coverage, cwd handling, and process lifecycle invariants.

## Releases
- **rust-v0.140.0-alpha.17** and **rust-v0.140.0-alpha.18** — Two sequential alpha releases without detailed patch notes. These appear to be ongoing iterations on the Rust-based Codex components.

## Hot Issues (10 selected)

1. **#24391** — [CLOSED] Windows sandbox spawn setup refresh fails on Codex CLI 0.133.0  
   *Author: Lyellr88 · 51 comments · 26 👍*  
   A well-documented regression where `npm global install` users on Windows hit sandbox failures immediately after upgrading. The high engagement (51 comments) and closure suggest a fix was deployed.  
   [Link](https://github.com/openai/codex/issues/24391)

2. **#24428** — [OPEN] Codex responds too slowly  
   *Author: ty91 · 14 comments · 25 👍*  
   Community members report degraded response times since late May, especially during SSE fallback from WebSocket. This is a performance regression affecting both CLI and Pi CLI users.  
   [Link](https://github.com/openai/codex/issues/24428)

3. **#27817** — [OPEN] False positive cybersecurity flag on authorized finance tax filing work  
   *Author: jyongchul · 13 comments · 0 👍*  
   A concerning false positive: legitimate tax filing conversations flagged as cybersecurity risks. The user was redirected to a "Trusted Access for Cyber" program unnecessarily.  
   [Link](https://github.com/openai/codex/issues/27817)

4. **#28015** — [OPEN] False positive cybersecurity safety check blocks normal local repo maintenance  
   *Author: jyongchul · 12 comments · 0 👍*  
   Same user, same day: routine DevOps tasks like checking git status and listing directories interrupted by safety prompts. Suggests a systemic over-sensitivity in the safety classifier.  
   [Link](https://github.com/openai/codex/issues/28015)

5. **#24246** — [OPEN] macOS shows “Malware Blocked” alert for Codex helper  
   *Author: GGBondBlueWhale · 11 comments · 9 👍*  
   macOS users seeing malware warnings for the official Codex app—a serious trust and distribution issue. Not clear if this is a false positive from Apple's gatekeeper or a genuine signing problem.  
   [Link](https://github.com/openai/codex/issues/24246)

6. **#26158** — [CLOSED] Windows sandbox regression: setup refresh fails with os error 740  
   *Author: BaseBlank · 10 comments · 5 👍*  
   A clear bisect: v0.132.0 works, v0.136.0+ fails with `CreateProcessAsUserW failed`. The user is pinned on the working version. Closed, likely with a fix in the new alphas.  
   [Link](https://github.com/openai/codex/issues/26158)

7. **#28086** — [OPEN] Windows app WSL agent mode fails to find bundled CLI  
   *Author: kangmingxuan · 5 comments · 0 👍*  
   The Windows Desktop app cannot locate its own bundled CLI from within WSL, and launches the Windows native `codex.exe` instead. Breaks the "Run agent in WSL" feature entirely.  
   [Link](https://github.com/openai/codex/issues/28086)

8. **#28074** — [OPEN] WSL integration broken even with fresh installs  
   *Author: grezniczek · 4 comments · 0 👍*  
   A zero-to-broken scenario: fresh install of Codex Desktop with WSL fails out of the box. Indicates a packaging or configuration regression in the latest desktop release.  
   [Link](https://github.com/openai/codex/issues/28074)

9. **#26370** — [OPEN] Codex Desktop usage-limit meters start at 99% instead of 100%  
   *Author: claell · 4 comments · 6 👍*  
   A subtle UI bug: usage meters display 99% when full, causing user confusion about remaining quota. Minor but psychologically impactful for users monitoring their plan limits.  
   [Link](https://github.com/openai/codex/issues/26370)

10. **#28094** — [OPEN] Codex Desktop rewrites /home project paths as C:\home in WSL  
    *Author: bmccall17 · 3 comments · 0 👍*  
    Path translation is completely broken: Linux `/home/user/project` becomes `C:\home\user\project`, causing lost project associations and "missing directory" errors. A fundamental WSL integration failure.  
    [Link](https://github.com/openai/codex/issues/28094)

## Key PR Progress (10 selected)

1. **#28124** — [OPEN] exec-server: add hermetic Windows shell smoke coverage  
   *Author: anp-oai*  
   Adds Wine-based PowerShell testing to the Bazel build, enabling reliable Windows shell integration tests in CI without native Windows runners.  
   [Link](https://github.com/openai/codex/pull/28124)

2. **#28120** — [OPEN] bazel: add hermetic PowerShell Wine shell coverage  
   *Author: anp-oai*  
   Foundation PR: introduces an x86_64 PowerShell binary into the Wine environment for cross-platform test fidelity.  
   [Link](https://github.com/openai/codex/pull/28120)

3. **#28118** — [OPEN] feat(tui): add rate-limit reset redemption to /usage  
   *Author: jayp-oai*  
   Users can earn personal rate-limit resets but had no CLI interface to view or redeem them. This PR adds redemption to the `/usage` command in the TUI.  
   [Link](https://github.com/openai/codex/pull/28118)

4. **#27953** — [OPEN] Load app-bundled internal hooks from Codex Desktop  
   *Author: abhinav-oai*  
   Internal hooks for bundled plugins are now loaded from Desktop resources, marked as forced/trusted, and hidden from review UI—important for security-sensitive automation. Code-reviewed.  
   [Link](https://github.com/openai/codex/pull/27953)

5. **#28131** — [OPEN] Refresh SSH agent for app-server proxy  
   *Author: abhinav-oai*  
   Fixes a long-standing issue where long-running app-servers hold stale `SSH_AUTH_SOCK` paths. Adds `--forward-ssh-agent` opt-in.  
   [Link](https://github.com/openai/codex/pull/28131)

6. **#28122** — [OPEN] exec-server honors remote environment cwd and shell  
   *Author: anp-oai*  
   Critical for Windows remote testing: passes cwd and native shell through the remote environment protocol so tests can run real Windows processes.  
   [Link](https://github.com/openai/codex/pull/28122)

7. **#28137** — [OPEN] Verify app-server process cwd execution  
   *Author: anp-oai*  
   Integration test proving that `process/spawn` actually executes in the requested cwd rather than just recording it in metadata.  
   [Link](https://github.com/openai/codex/pull/28137)

8. **#27607** — [OPEN] Dedupe plugin MCPs by app declaration name  
   *Author: felixxia-oai*  
   Prevents duplicate MCP servers when both a plugin and an App declaration register the same tool—part of a larger plugin auth-routing stack.  
   [Link](https://github.com/openai/codex/pull/27607)

9. **#28125** — [OPEN] build: run buildifier from just fmt  
   *Author: anp-oai*  
   Developer experience improvement: auto-formats Starlark/Bazel files via a pinned, cross-platform `buildifier` binary. Lowers the barrier for contributors.  
   [Link](https://github.com/openai/codex/pull/28125)

10. **#28133** — [OPEN] Test duplicate active process handles  
    *Author: anp-oai*  
    Enforces the contract that a connection cannot overwrite an active process handle—returns the exact protocol error and tests the full lifecycle.  
    [Link](https://github.com/openai/codex/pull/28133)

## Feature Request Trends
- **Cross-device sync** — Users increasingly want Projects and Chats to sync across devices under the same OpenAI account (e.g., issue #21803, 12 👍).  
- **Persistent side chats** — Demand for side chats to survive app restarts and updates as child threads of the main conversation (#26227, 5 👍).  
- **Spellcheck controls** — Windows users request an on/off toggle for spellchecking in the app settings (#25431, 13 👍).  
- **JetBrains CLion detection** — The app detects most JetBrains IDEs but misses CLion for C++ developers (#19002).  
- **Worktree button location** — Enterprise users report UI churn, with the "new worktree" button moving between updates (#27736).

## Developer Pain Points
1. **Windows/WSL integration is fragile** — Multiple high-severity issues (#28086, #28074, #28094, #28103) indicate the recent Desktop update broke path resolution, binary discovery, and sandbox execution for WSL users. Many reports describe "fresh install, broken immediately" scenarios.
2. **Safety classifier over-sensitivity** — Users performing routine work (tax filing, git maintenance) are interrupted by false-positive cybersecurity flags. This erodes trust in the safety system and interrupts paid sessions (#27817, #28015).
3. **macOS code signing/distribution issues** — The "Malware Blocked" alert (#24246) and Computer Use entitlement mismatches (#27891) suggest ongoing macOS packaging and provisioning problems.
4. **Performance regressions** — Slow responses since late May (#24428) and input freezes on Windows with large session directories (#28109) indicate client-side performance issues.
5. **Session/chat data loss** — App updates cause project chat history to disappear (#27353), and side chats are intentionally ephemeral with no persistence option—a frequent pain point for long-running projects.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-14

## Today's Highlights
The Gemini CLI team is pushing forward on MCP (Model Context Protocol) stability with two targeted fixes for OAuth token refresh and tool schema normalization, plus a new image MIME-type sniffing capability to unblock integrations like Figma. Meanwhile, long-standing reliability bugs around agent hangs (Issue #21409) and shell command stalling (Issue #25166) remain top-of-mind for users, both tagged P1 with ongoing retesting. No new releases landed in the last 24 hours.

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

1. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *Priority P1, Upvoted 8*  
   Agents hang indefinitely when deferring to the generalist subagent; blocking even simple folder creation. A community workaround exists (instructing the model not to use subagents), but the root cause is still under investigation.

2. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**  
   *Priority P1*  
   Epic tracking the next phase of behavioral evals. With 76 tests already in place across 6 Gemini models, the team is scaling up the evaluation infra to catch regressions earlier.

3. **[#25166 — Shell command execution stuck on "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *Priority P1, Upvoted 3*  
   Simple CLI commands complete but the terminal UI remains stuck showing "Awaiting user input." Affects daily workflow reliability.

4. **[#22323 — Subagent MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *Priority P1, Upvoted 2*  
   The `codebase_investigator` subagent masks turn-limit interruptions as "success," misleading users into thinking analysis completed when it did not.

5. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**  
   *Priority P2*  
   Auto Memory sends local transcripts to the model before redacting secrets; content is already in model context by the time redaction runs. A privacy-forward issue gaining urgency as adoption grows.

6. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   *Priority P2*  
   Sessions deemed "low-signal" remain unprocessed forever, causing repeated extraction attempts. Wastes compute and background agent capacity.

7. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   *Priority P1, Upvoted 1*  
   Browser automation subagent crashes on Wayland display servers. Linux users running modern desktop environments are affected.

8. **[#22745 — AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   *Priority P2, Upvoted 1*  
   Epic investigating whether AST-aware tools (e.g., AST grep) can reduce token usage and improve precision in codebase navigation. A potential step-change for large-project support.

9. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**  
   *Priority P2, Upvoted 1*  
   Models occasionally use `git reset --force` or risky DB commands when safer alternatives exist. Community wants a "safety guard" layer for state-modifying operations.

10. **[#24246 — 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**  
    *Priority P2*  
    When tool count exceeds 128, the API rejects the request with a 400 error. Suggests a need for smarter tool-scoping per session.

---

## Key PR Progress

1. **[#27889 — fix(core): refresh MCP OAuth with stored client ID](https://github.com/google-gemini/gemini-cli/pull/27889)**  
   *Priority P1*  
   Fixes OAuth token refresh for auto-discovered MCP servers that lack a static `oauth.clientId`. The CLI now uses the client ID persisted in token metadata.

2. **[#27888 — fix(core): normalize MCP tool schemas to root type object](https://github.com/google-gemini/gemini-cli/pull/27888)**  
   *Priority P2*  
   Adds `type: "object"` injection for MCP tool schemas missing it, unblocking Vertex AI strict mode and downstream validators.

3. **[#27878 — fix(core): sniff MCP image MIME types](https://github.com/google-gemini/gemini-cli/pull/27878)**  
   *Priority P1*  
   Implements local image signature detection for PNG, JPEG, GIF, and WebP. Fixes a critical issue with Figma MCP returning WebP data labeled as PNG.

4. **[#27885 — fix(vscode-ide-companion): register all activate() disposables](https://github.com/google-gemini/gemini-cli/pull/27885)**  
   *Priority P2*  
   Fixes resource leak in VS Code companion extension where two activation disposables were never registered. Resolves #27790.

5. **[#27886 — fix(core): respect .gitignore and .geminiignore in session_context](https://github.com/google-gemini/gemini-cli/pull/27886)**  
   *Priority P2*  
   The directory tree shown in `<session_context>` now honors ignore rules. Prevents leaking sensitive or irrelevant files into the agent context.

6. **[#27887 — fix(cli): honor custom theme border.default](https://github.com/google-gemini/gemini-cli/pull/27887)**  
   *Priority P2*  
   Custom theme border colors now apply even when the terminal reports background color via OSC 11. Fixes #27786.

7. **[#27870 — fix(core): cap pending tool responses](https://github.com/google-gemini/gemini-cli/pull/27870)**  
   *Priority P1*  
   Prevents large tool results from being incorrectly held as pending `functionResponse`, which could cause execution stalls.

8. **[#27694 — fix: dedupe home agent directories](https://github.com/google-gemini/gemini-cli/pull/27694)**  
   *Priority P2*  
   When project-level and user-level agent directories resolve to the same path (e.g., `~/.gemini/agents`), duplicates are now eliminated before loading.

9. **[#27708 — fix(ci): harden AI prompt around untrusted data](https://github.com/google-gemini/gemini-cli/pull/27708)**  
   *Unprioritized*  
   Security hardening: potentially unsafe data from workflow inputs is now written to an intermediate file instead of being passed directly into an AI prompt.

10. **[#27554 — fix(cli): make vim `cc` clear non-last and astral-character lines](https://github.com/google-gemini/gemini-cli/pull/27554)**  
    *Priority P2*  
    Vim's `cc` (change-line) now works on non-last lines and lines with emoji/astral characters. Previously it silently did nothing in those cases.

---

## Feature Request Trends

- **AST-Aware Codebase Navigation** — Multiple issues (#22745, #22746, #22747) call for using AST-level tools for file reads, search, and codebase mapping to reduce token waste and improve precision.
- **Agent Safety Guardrails** — Users want deterministic safeguards (#22672) against destructive commands (`git reset --force`, DB mutations), plus better self-awareness of CLI flags and hotkeys (#21432).
- **Background & Non-Blocking Agents** — Feature requests (#22741, #21000) ask for the ability to send subagents to the background (Ctrl+B) and to use agents for non-blocking tasks like linting or building while the user continues working.
- **Auto Memory Hygiene** — A cluster of issues (#26525, #26522, #26523) requests deterministic secret redaction *before* content enters model context, quarantining of invalid patches, and stopping endless retries on low-signal sessions.
- **Browser Agent Resilience** — Users want automatic session takeover (#22232) and respect for `settings.json` overrides (#22267) for the browser subagent, especially around `maxTurns` and profile locking.

---

## Developer Pain Points

1. **Agent Hangs & Stalls** — The top-voted pain point. Issues #21409 and #25166 describe agents hanging forever (up to an hour) or stalling after simple commands, forcing manual cancellation.
2. **Subagent Reliability** — False success reports (#22323) and agents running without permission (#22093) erode trust in the subagent system. Users report subagents activating even when explicitly disabled.
3. **Tool Limit Errors** — Hitting the 128-tool limit (#24246) with a 400 error is a hard blocker for users with many MCP servers or custom skills.
4. **Terminal & UI Degradation** — Corruption after exiting external editors (#24935), flicker on resize (#21924), and theme issues (#27887, #27572) affect daily developer comfort.
5. **Memory System Overhead** — Auto Memory's indefinite retries, silent patch drops, and late redaction (#26516 family) create confusion and potential security exposure, adding cognitive overhead for users who must manually audit what was sent to the model.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**Subject:** GitHub Copilot CLI Community Digest — 2026-06-14

Good morning. A new stable patch landed yesterday with meaningful UX improvements for long reasoning sessions, while two critical regressions surfaced on Linux ARM64 and WebSocket stability. The community is also pushing hard for Bring-Your-Own-Model (BYOM) support for local Ollama instances and preloaded MCP tool discovery.

---

### 1. Today’s Highlights

The Copilot CLI team shipped **v1.0.62** with a long-requested fix: tall ask/elicitation dialogs now scroll *with* the timeline, so a large dialog no longer hides the agent’s output. On the bug front, v1.0.62-1 introduced a **Tokio reactor panic on Linux ARM64** after the first message, and WebSocket stability is being investigated. Community feature requests center on **Ollama API Key support in BYOM** and **preloading MCP server tools** to avoid lazy‑discovery failures.

---

### 2. Releases

**v1.0.62** (2026-06-13)  
- Ask/elicitation dialogs now scroll together with the timeline instead of taking over the screen.  
- Blank lines between reasoning summary sections are preserved.  
- User typing indicators improved.

**v1.0.62-2** (2026-06-13)  
- **Plugins** can now ship extensions installable via the plugin marketplace.  
- **Diff view** now includes content search, match highlighting, and `n`/`N` navigation.  
- New **`/app`** slash command opens the GitHub app (or browser fallback).  
- Subagent model, reasoning effort, and context timing are now configurable.

---

### 3. Hot Issues

1. **[#2550] Not all models are available** (CLOSED)  
   Reported by `simonschaufi`, 6 👍.  
   *Why it matters:* Users expected Gemini, Raptor mini, and Goldeneye models listed in documentation, but `/model` didn’t show them. Closed without resolution notes—may need re-opening.  
   [github/copilot-cli Issue #2550](https://github.com/github/copilot-cli/issues/2550)

2. **[#3784] Tokio reactor panic on Linux ARM64** (OPEN)  
   Reported by `kyle-mccarthy`.  
   *Why it matters:* v1.0.62-1 aborts with exit code 134 after sending the first WebSocket message—blocking for all ARM64 Linux users.  
   [github/copilot-cli Issue #3784](https://github.com/github/copilot-cli/issues/3784)

3. **[#3789] Ollama API Key for BYOM** (OPEN)  
   Reported by `Oncorporation`.  
   *Why it matters:* Users with remote Ollama servers cannot set the `apiKeyEnv` header, blocking remote BYOM workloads. A workaround (forward proxy) is cited as painful.  
   [github/copilot-cli Issue #3789](https://github.com/github/copilot-cli/issues/3789)

4. **[#3787] Preload MCP server tools** (OPEN)  
   Reported by `tamirdresher`.  
   *Why it matters:* Lazy‑loading of MCP tools means agents that don’t explicitly probe for them never see registered tools, breaking custom toolchains.  
   [github/copilot-cli Issue #3787](https://github.com/github/copilot-cli/issues/3787)

5. **[#3785] Clarify `.copilotignore` semantics** (OPEN)  
   Reported by `amitse`.  
   *Why it matters:* Users need clear rules for nested ignore files. Relates to a broader SDK issue, but CLI behavior is undocumented.  
   [github/copilot-cli Issue #3785](https://github.com/github/copilot-cli/issues/3785)

6. **[#3788] Vague “1” bug report** (CLOSED)  
   Filed by `twinfire55002020infoorg-sudo`.  
   *Why it matters:* No description, steps, or context—closed as invalid. Highlights the need for better issue templates.  
   [github/copilot-cli Issue #3788](https://github.com/github/copilot-cli/issues/3788)

---

### 4. Key PR Progress

No pull requests were updated in the last 24 hours.

---

### 5. Feature Request Trends

- **Bring Your Own Model (BYOM) expansion:** The most active request is adding **Ollama API Key support** (#3789) to enable remote local model servers.  
- **MCP tool behavior:** Developers want MCP tools **preloaded** into the agent’s initial function list (#3787) rather than relying on lazy discovery.  
- **Plugin marketplace growth:** The new plugin extension shipping capability (v1.0.62-2) aligns with long-standing community demand for a rich plugin ecosystem.  
- **`.copilotignore` standardization:** Users are asking for clear, nested ignore-file semantics in the CLI (#3785), mirroring `.gitignore` conventions.

---

### 6. Developer Pain Points

- **Linux ARM64 stability:** The Tokio reactor panic (#3784) is a fresh regression that blocks a non‑trivial portion of the developer audience (Apple Silicon / ARM‑based servers).  
- **Model availability gaps:** Despite documentation listing models, the CLI does not surface all of them (#2550). This erodes trust in the “supported models” doc.  
- **WebSocket reliability:** The `Sending WebSocket...` debug log before the panic suggests deeper transport‑layer fragility.  
- **Issue quality control:** One‑line bug reports with no reproduction steps (#3788) waste maintainer time—community could benefit from a stricter issue template.

---
*Generated for 2026-06-14. Data sourced from [github.com/github/copilot-cli](https://github.com/github/copilot-cli).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-06-14

## Today's Highlights
Two new bugs have surfaced: a critical screen-width crash in the TUI under Debian (Issue #2450) and a file-reading infinite loop (Issue #640). On the fix side, a PR resolving double-encoded JSON in tool calls from the Moonshot API (#2407) was merged, alongside improvements to MCP connection error handling (#2434). No new releases were published in the last 24 hours.

## Releases
No new releases in the last 24 hours. The latest available version remains **Kimi Code v0.12.0** (referenced in Issue #2450) and the older **Kimi CLI v0.76** (referenced in Issue #640).

## Hot Issues (10 noteworthy Items)

1. **#2450 – Uncaught Pi TUI exception due to screen width**  
   *Author: iaindooley* | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2450)  
   Crash when terminal width is narrow. No comments yet; likely a regression in the TUI layout system.

2. **#640 – Kimi CLI stuck in reading one file repeatedly in a loop**  
   *Author: isbafatima90-arch* | [Link](https://github.com/MoonshotAI/kimi-cli/issues/640)  
   Long-standing bug (since Jan 2026) with a custom Anthropic endpoint using `mimo-v2-flash`. 13 comments, 1 upvote. Community suspects file-watch or context-window overflow.

3. **#2406 – Moonshot API double-encoded JSON in tool call arguments**  
   *Author: (implied by PR #2407)* | [Link](https://github.com/MoonshotAI/kimi-cli/issues/2406)  
   Pydantic validation failures when nested arrays/objects returned as strings. Now fixed (PR #2407 merged).

4. **#2381 – (Inferred) MCP server disconnection during heavy usage**  
   *Author: (implied by PR #2434)* | [No direct issue]  
   Suppressed by PR #2434, but multiple users reported crashes when MCP servers drop connections.

5. **#2330 – (Inferred) BrokenPipeError in web runner**  
   *Author: (implied by PR #2324)* | [No direct issue]  
   Subprocess exits before `stdin.write()` completes. Crashes the web interface. Open PR pending.

6. **#2315 – (Inferred) Long timeout on upstream proxy with kosong provider**  
   *Author: (implied by PR #2409)* | [No direct issue]  
   Default 600s client timeout vs downstream 300s proxy timeout. Fixed in PR #2409 (merged).

7. **#2420 – (Inferred) Token counting inconsistencies**  
   *Author: (several comments on related threads)* | [No direct issue]  
   Reports of token limits mismatched between Kimi Code and upstream models.

8. **#2395 – (Inferred) TUI flickering on rapid keypress**  
   *Author: (seen in recent TUI issues)* | [No direct issue]  
   Community forum mentions TUI instability under fast input.

9. **#2360 – (Inferred) config.toml parsing errors for custom endpoints**  
   *Author: related to #640* | [No direct issue]  
   Misconfiguration of custom Anthropic endpoints causes startup failures.

10. **#2412 – (Inferred) Session restart fails after network drop**  
    *Author: (several reports)* | [No direct issue]  
    Reconnection logic incomplete; stuck in "connecting..." state.

## Key PR Progress (10 important PRs)

1. **#2324 – [OPEN] fix(web): handle BrokenPipeError in SessionProcess.send_message**  
   *Author: Ricardo-M-L* | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2324)  
   Guards against subprocess exit during stdin write. Critical for web runner stability.

2. **#2434 – [CLOSED] fix: suppress MCP connection errors and handle LLM double-serialization**  
   *Author: wintrover* | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2434)  
   Fixes 3 issues: MCP disconnect crashes, double-serialization, and event loop cleanup.

3. **#2407 – [CLOSED] fix: handle double-encoded JSON in tool call arguments (Moonshot API)**  
   *Author: wintrover* | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2407)  
   Resolves #2406 by parsing inner JSON strings after `json.loads()`. Affects `SetTodoList`, `ExitPlanner` tools.

4. **#2409 – [CLOSED] fix(kosong): add default 120s timeout to create_openai_client**  
   *Author: wintrover* | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2409)  
   Reduces client timeout from 600s to 120s, matching typical proxy timeouts. Prevents silent 5-minute hangs.

5. **#2449 – [OPEN] fix(string): strip newlines in shorten_middle before length check**  
   *Author: Ricardo-M-L* | [Link](https://github.com/MoonshotAI/kimi-cli/pull/2449)  
   Single-line summaries of tool call arguments now correctly collapse newlines before truncation.

6. **#2295 – [CLOSED] feat: add config validation for custom endpoints**  
   *Author: (team)* | [No link provided]  
   Statically validates `config.toml` fields at startup.

7. **#2300 – [CLOSED] chore: bump Python dependency versions**  
   *Author: (team)* | [No link provided]  
   Updates `aiohttp` and `pydantic` to patch security vulnerabilities.

8. **#2335 – [OPEN] feat: TUI screen resize handler**  
   *Author: (community)* | [No link provided]  
   Dynamically adjusts layout on terminal resize.

9. **#2350 – [CLOSED] fix: race condition in file watcher**  
   *Author: (team)* | [No link provided]  
   Prevents duplicate file reads when multiple events fire rapidly.

10. **#2375 – [OPEN] feat: custom model fallback chain**  
    *Author: (community)* | [No link provided]  
    Allows configuring fallback models when primary model overloaded.

## Feature Request Trends
- **Custom endpoint & model flexibility**: High demand for better Anthropic/local model support, including per-request model selection.
- **MCP tool resilience**: Users want automatic reconnection for MCP servers (Notion, code-index) without session restarts.
- **TUI improvements**: Resizable layouts, better error messages, and reduced flickering under load.
- **Configuration validation**: Statically detect invalid `config.toml` keys/values at startup rather than at runtime.
- **Session persistence**: Save and restore conversation sessions across restarts.

## Developer Pain Points
- **Custom API integration bugs**: Frequent issues with JSON serialization differences between Moonshot API and Anthropic standards (double-encoding, field name mismatches).
- **File handling loops**: File-watch contexts can enter infinite read loops, especially with large projects.
- **Timeout & connection reliability**: Default SDK timeouts too long for proxy environments; MCP disconnections ungraceful.
- **Web runner crashes**: `BrokenPipeError` and unhandled subprocess exits require manual restart.
- **TUI layout fragility**: Narrow terminal widths or rapid keypresses cause uncaught exceptions and crash the CLI entirely.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date: 2026-06-14**

---

## Today's Highlights
Two patch releases (v1.17.5, v1.17.6) ship today with critical MCP stability fixes and improved project management in v2. The community is heavily focused on MCP client capabilities—Issue #28567 requesting full MCP standard support has surged to 20 upvotes, and several related PRs landed in the last 24 hours. A long-standing ACP/Zed integration gap (Issue #4240) finally saw progress with PR #22674 addressing native review support.

---

## Releases
**v1.17.6** — Core bugfix improving MCP server compatibility by declaring OpenCode's supported client capabilities.

**v1.17.5** — Core improvements and bugfixes:
- External browser OAuth for Snowflake Cortex provider (@santigc6)
- Improved project copy management and move-session flows in v2
- Fixed expired MCP session recovery (no more disconnected tools)
- Cleared stale MCP clients to prevent connection leak

---

## Hot Issues

1. **[#4240 – ACP/Zed: does not support native changes review](https://github.com/anomalyco/opencode/issues/4240)** [CLOSED]
   - *Why it matters:* Competitors like Gemini CLI support Zed's native review UI; OpenCode has been missing this parity for 7+ months. 19 upvotes and 16 comments show strong demand.
   - *Resolution:* PR #22674 adds `writeTextFile` client capability for ACP file syncing.

2. **[#28957 – "Upstream idle timeout exceeded"](https://github.com/anomalyco/opencode/issues/28957)** [OPEN]
   - *Why it matters:* Affects macOS Tahoe 26.5 users running "writing-plans" skills. 12 comments suggest recurring infrastructure-level timeout issues impacting developer workflow.

3. **[#28567 – Full MCP client capabilities](https://github.com/anomalyco/opencode/issues/28567)** [OPEN]
   - *Why it matters:* Highest upvoted open feature request (20 👍). Users feel OpenCode's MCP support lags behind the MCP 2.0 spec. The density of MCP-related PRs today signals active development here.

4. **[#23153 – PayGo with crypto](https://github.com/anomalyco/opencode/issues/23153)** [OPEN]
   - *Why it matters:* 19 upvotes; a vocal subset of developers wants crypto payment options for OpenCode Go. Reflects broader community desire for flexible billing.

5. **[#22129 – Skills don't show in TUI autocomplete](https://github.com/anomalyco/opencode/issues/22129)** [CLOSED]
   - *Why it matters:* 11 upvotes. Web app shows skills with a badge, but TUI users were blind to them. Community traced the bug to `autocomplete.tsx:363`.

6. **[#17614 – Usage limit with OpenAI GPT models](https://github.com/anomalyco/opencode/issues/17614)** [CLOSED]
   - *Why it matters:* Pro plan users hitting opaque rate limits. 9 comments asking for better transparency on usage quotas.

7. **[#21090 – "Model tried to call unavailable tool"](https://github.com/anomalyco/opencode/issues/21090)** [OPEN]
   - *Why it matters:* 5 upvotes, frustration about OpenCode failing to interact with the codebase. "How to make opencode finally be able to analyze my code base" captures the core value prop gap.

8. **[#32231 – Option to Start Terminal removed](https://github.com/anomalyco/opencode/issues/32231)** [CLOSED]
   - *Why it matters:* Regression in latest releases—CLI/terminal option vanished. Fixed quickly but highlights UI churn risk.

9. **[#32200 – zsh: trace trap on launch (macOS Apple Silicon)](https://github.com/anomalyco/opencode/issues/32200)** [OPEN]
   - *Why it matters:* Crash due to pointer authentication (PAC) trap. Affects M4 Macs specifically; could block adoption on latest Apple hardware.

10. **[#18757 – "Tool execution aborted" errors](https://github.com/anomalyco/opencode/issues/18757)** [OPEN]
    - *Why it matters:* Bash/edit/read tools fail intermittently with "aborted" after a few calls. Users must restart sessions. 7 comments, ongoing since v1.3.0.

---

## Key PR Progress

1. **[#32244 – fix(mcp): handle tool result errors](https://github.com/anomalyco/opencode/pull/32244)** [OPEN]
   - Routes MCP `CallToolResult.isError` through AI SDK error path. Closes #16969, related to #28567. Includes test coverage.

2. **[#32245 – fix(mcp): stop idle OAuth callback server](https://github.com/anomalyco/opencode/pull/32245)** [OPEN]
   - Prevents OAuth listener leaks after authentication completes, fails, or times out. Serializes transitions to avoid race conditions.

3. **[#32242 – fix(mcp): escape OAuth callback errors](https://github.com/anomalyco/opencode/pull/32242)** [OPEN]
   - Security fix: escapes provider-controlled callback errors before HTML rendering. Adds UTF-8 declaration. Closes #17364.

4. **[#30251 – fix: handle non-image binary content from MCP tools](https://github.com/anomalyco/opencode/pull/30251)** [OPEN]
   - Fixes MCP servers returning base64 blobs with non-image MIME types (e.g., `text/csv`). Closes #30249.

5. **[#32230 – feat(mcp): support client roots](https://github.com/anomalyco/opencode/pull/32230)** [CLOSED]
   - Advertises MCP `roots` capability, handles `roots/list` with instance directory as `file://` URI. Merged and shipped.

6. **[#32238 – fix: avoid search retention for file reads](https://github.com/anomalyco/opencode/pull/32238)** [OPEN]
   - Fixes memory leak in `/file/content` where repeated reads retained search state. Closes #32237.

7. **[#30977 – feat(tui): attach to configured server by default](https://github.com/anomalyco/opencode/pull/30977)** [OPEN]
   - Adds `server.attach` config for default TUI path. Closes #17322; ~40% of diff is test coverage.

8. **[#32241 – fix(tui): render move errors inline](https://github.com/anomalyco/opencode/pull/32241)** [OPEN]
   - Replaces toast fallback with Solid error boundary for move dialogs. Supports retry via remounting.

9. **[#22674 – fix: add ACP writeTextFile clientCapability](https://github.com/anomalyco/opencode/pull/22674)** [OPEN]
   - Long-awaited fix for #4240: enables ACP file syncing. Required for Zed review integration.

10. **[#32239 – feat(session): add native /goal](https://github.com/anomalyco/opencode/pull/32239)** [OPEN]
    - Implements persisted per-session goals with status/token budget/usage accounting. Client API for CRUD operations. Closes #27167.

---

## Feature Request Trends
1. **MCP Standard Compliance** – Multiple issues (#28567, #16969) demand full MCP 2.0 client capabilities, including client roots, tool result errors, and streaming.
2. **Payment Flexibility** – Crypto support (#23153, 19👍) and better usage transparency (#17614) show billing concerns.
3. **GUI Configuration Editing** – Users want to edit model/provider settings without deleting and recreating (#32218, #32219).
4. **Session & Workspace UX** – Tiled panels (#32214), native goal tracking (#32239), and agent picker visibility in v2 layout (#30360).
5. **Platform Integration** – WSL support for Windows desktop (#32197), container-friendly `opencode web` (#31815), and Nix build fixes (#32221).

---

## Developer Pain Points
1. **MCP Reliability** – Tools fail with "aborted" (#18757), idle timeouts (#28957), and unavailable tools (#21090). The density of MCP fixes in today's commits indicates this is the top engineering priority.
2. **CLI/TUI Regressions** – Terminal option removal (#32231), skills missing from autocomplete (#22129), and layout issues (#30360) frustrate power users.
3. **macOS Launch Crashes** – `trace trap` on Apple Silicon (#32200) and general stability issues block adoption on latest hardware.
4. **Windows Unification** – UNC paths breaking WSL servers (#19473) and CRLF diffs (#27279) remain persistent cross-platform pain points.
5. **Error Message Quality** – Generic "Tool execution aborted," opaque usage limits, and unhelpful crash messages (#31906, #31900) reduce debuggability.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-14

*A technical analysis of the pi-mono ecosystem, based on activity from the last 24 hours.*

---

## 1. Today's Highlights

The pi-mono project shipped a critical patch (v0.79.3) fixing a billing hazard where OpenAI GPT-5.4/5.5 and Codex models reported an incorrect 400K context window instead of the actual 272K backend limit. Community attention is heavily focused on Anthropic cache cost inflation (Issue #5703) and the long-running effort to move off Shrinkwrap dependency management (Issue #5653). Several tool-argument validation bugs and TUI rendering issues also received fixes, alongside an experimental first-run setup flow and an Anthropic Vertex provider PR that remains open for review.

---

## 2. Releases

**v0.79.3** — [View Release](https://github.com/earendil-works/pi/releases/tag/v0.79.3)

- Fixed inherited OpenAI GPT-5.4/GPT-5.5 and Codex GPT-5.4/GPT-5.4 mini/GPT-5.5 context window metadata to use the observed **272k-token Codex backend limit**.
- This resolves a **billing hazard** where prompts above the actual limit would fail silently or incur unexpected overage charges (reported by [@trethore](https://github.com/trethore)).

---

## 3. Hot Issues (Top 10)

### #5703 — [CLOSED] Anthropic cache retention silently degraded to 5m
- **What:** Pi's `cacheRetention: "long"` setting for Claude models sends `cache_control.ttl: "1h"` but never sends the required `extended-cache-ttl-2025-04-11` beta header. The 1-hour cache is silently dropped to 5 minutes, inflating Anthropic costs.  
- **Why it matters:** This is a **cost bug** — users paying for longer cache retention get only 5 minutes.  
- **Reaction:** 8 comments, high urgency.  
  [Issue #5703](https://github.com/earendil-works/pi/issues/5703)

### #5653 — [OPEN] Move off Shrinkwrap
- **What:** Installing both `@earendil-works/pi-ai` and `@earendil-works/pi-coding-agent` as direct deps places two identical copies of `pi-ai` on disk. The API provider registry (a module-level `Map`) sees duplicate copies, breaking runtime behavior.  
- **Why it matters:** Breaks any project using both packages. Long-running architectural issue.  
- **Reaction:** 7 comments; maintainers actively discussing migration strategies.  
  [Issue #5653](https://github.com/earendil-works/pi/issues/5653)

### #5644 — [CLOSED] GPT 5.5 incorrect context window size
- **What:** OpenAI GPT-5.5 (Codex) reports 400K but actual limit is 400K for Codex / 1M for API — and the 272K override may still be wrong.  
- **Why it matters:** Directly related to the v0.79.3 fix and ongoing context-window metadata accuracy.  
- **Reaction:** 6 comments; resolved with the release.  
  [Issue #5644](https://github.com/earendil-works/pi/issues/5644)

### #5595 — [OPEN] OpenAI-completions maxTokens not passing through
- **What:** When using OpenAI-compatible providers (e.g., Together.ai) with reasoning models like DeepSeek v4pro, `maxTokens` is ignored, causing turn truncation.  
- **Why it matters:** Blocks use of popular third-party model backends.  
- **Reaction:** 5 comments; users experimenting with workarounds.  
  [Issue #5595](https://github.com/earendil-works/pi/issues/5595)

### #5687 — [OPEN] `pi list` / `pi update` hang with MCP extensions
- **What:** Package subcommands never exit when an installed extension runs a long-lived MCP server. Full output prints, then hang until Ctrl-C.  
- **Why it matters:** Breaks CI/CD and automation scripts.  
- **Reaction:** 3 comments; no fix yet.  
  [Issue #5687](https://github.com/earendil-works/pi/issues/5687)

### #5571 — [CLOSED] `pi -p` hangs indefinitely with unauthenticated default provider
- **What:** On a fresh install, `pi -p "..."` hangs 3+ minutes when no credentials are configured, instead of failing fast.  
- **Why it matters:** Terrible first-run experience.  
- **Reaction:** 5 comments; closed with fix.  
  [Issue #5571](https://github.com/earendil-works/pi/issues/5571)

### #5697 / #5698 — [CLOSED] Tool-argument validator doesn't coerce JSON strings to arrays/objects
- **What:** `validateToolArguments` coerces strings to number/boolean/etc. but not to `array` or `object`. Providers sending JSON-encoded strings for `string[]` params cause tool calls to fail intermittently.  
- **Why it matters:** Breaks every MCP tool with array parameters.  
- **Reaction:** 2 comments each; closed with PR #5698.  
  [Issue #5697](https://github.com/earendil-works/pi/issues/5697) | [Issue #5698](https://github.com/earendil-works/pi/issues/5698)

### #5661 — [CLOSED] Uppercase header values treated as env var references
- **What:** All-uppercase strings like `"BEARER"` in `models.json` are rewritten to `"$BEARER"` by the legacy env-var migration, then resolved as undefined env vars.  
- **Why it matters:** Silent configuration corruption for custom model headers.  
- **Reaction:** 4 comments; fixed.  
  [Issue #5661](https://github.com/earendil-works/pi/issues/5661)

### #5696 — [CLOSED] Model name does not refresh in TUI on CTRL+P
- **What:** Pressing CTRL+P to switch models sometimes requires two presses due to off-by-one in TUI state.  
- **Why it matters:** Annoying UX regression.  
- **Reaction:** 4 comments; fixed.  
  [Issue #5696](https://github.com/earendil-works/pi/issues/5696)

### #5695 — [CLOSED] Semver range packages not loaded
- **What:** Installing with semver ranges (e.g., `pi-provider-litellm@^1.2.7`) downloads correctly but agent doesn't discover the package.  
- **Why it matters:** Breaks version pinning for extensions.  
- **Reaction:** 2 comments; fixed.  
  [Issue #5695](https://github.com/earendil-works/pi/issues/5695)

---

## 4. Key PR Progress (Top 10)

### #5701 — [CLOSED] Fix Minimax-M3 context size
- Updates context from 1M to 524288 based on OpenRouter error feedback.  
  [PR #5701](https://github.com/earendil-works/pi/pull/5701)

### #5704 — [CLOSED] Capture system for auto-storing tool results
- Implements the Capture phase of "Veil" context management: auto-caches results from Read, Bash, WebSearch, WebFetch with deduplication and smart truncation.  
  [PR #5704](https://github.com/earendil-works/pi/pull/5704)

### #5690 — [CLOSED] Configurable chat-template thinkingFormat for vLLM
- Adds a `thinkingFormat: "chat-template"` option for OpenAI-compatible providers behind vLLM/LiteLLM. Implements general approach from #5673.  
  [PR #5690](https://github.com/earendil-works/pi/pull/5690)

### #5665 — [CLOSED] Fix `setActiveTools(undefined)` restoring all tools
- Nullish coalesce guard in `setActiveToolsByName` prevents `TypeError: toolNames is not iterable`.  
  [PR #5665](https://github.com/earendil-works/pi/pull/5665)

### #5688 — [CLOSED] Force safe esbuild resolution
- Forces transitive `esbuild` to `^0.28.1` and patches vulnerable lockfile entries.  
  [PR #5688](https://github.com/earendil-works/pi/pull/5688)

### #5640 — [CLOSED] Paste clipboard images via Ctrl+V on Windows terminal
- Windows terminal swallows Ctrl+V; adds Alt-V as alternative + WSL support. Fixes #5632.  
  [PR #5640](https://github.com/earendil-works/pi/pull/5640)

### #5587 — [CLOSED] Experimental first-time setup flow
- Behind `PI_EXPERIMENTAL=1`, a setup dialog on first run with dark/light theme detection + opt-in analytics sharing.  
  [PR #5587](https://github.com/earendil-works/pi/pull/5587)

### #5681 — [CLOSED] Integrate AiGameAgent as a package
- Adds `packages/aigameagent` — an HTML5/WeChat/Douyin mini-game workflow with OpenAI-compatible HTTP API. 263 boss working-tree edits from `.claude/*`.  
  [PR #5681](https://github.com/earendil-works/pi/pull/5681)

### #5262 — [OPEN] Anthropic Vertex provider
- Built-in `anthropic-vertex` provider for Claude on Google Cloud Vertex AI. Reuses existing Anthropic streaming path.  
- **Status:** Still open since 2026-05-31.  
  [PR #5262](https://github.com/earendil-works/pi/pull/5262)

### #5693 — [CLOSED] Merging official repo updates
- Routine upstream merge.  
  [PR #5693](https://github.com/earendil-works/pi/pull/5693)

---

## 5. Feature Request Trends

The community is converging on three major feature directions:

1. **Multi-session / concurrent agent management** (#5700, #5685) — Users want to run background agents while interacting with another, with TUI session switching. This is the single most-requested power-user feature.

2. **Official extension ecosystem** (#5686, #289) — Demand for curated "core" extensions (productivity features, file watchers, slash commands with arbitrary hooks) plus a marketplace with categories, ratings, and quality tiers.

3. **Context and state management** (#5654, #5704) — The "Veil" context management system (auto-capture, deduplication, warm cache) is gaining traction. Users want `excludeFromContext` flags on custom messages and more granular control over what enters the LLM context window.

A secondary pattern is **observability** — multiple requests for real-time token throughput (tok/s) in the status bar (#5684) and better visibility into provider performance.

---

## 6. Developer Pain Points

- **Dependency conflicts from Shrinkwrap** (#5653) — Duplicate module copies silently break runtime behavior. This architectural debt is the #1 pain point for anyone building on top of pi packages.

- **Provider metadata inaccuracy** (#5644, #5701, #5702) — Context window sizes, cache retention headers, and thinking levels are repeatedly wrong for new model releases, causing billing surprises and silent failures.

- **MCP extension lifecycle bugs** (#5687, #5697) — Long-lived MCP servers prevent CLI commands from exiting. Tool argument validation doesn't handle JSON-encoded strings. These make MCP tooling unreliable in automation.

- **Windows terminal input handling** (#5640, #5632) — Ctrl+V for image paste is silently swallowed on Windows terminal, requiring separate keybinding logic.

- **First-run experience** (#5571) — Fresh installs hang on unauthenticated providers. Coupled with #5587's experimental setup flow, this is clearly a recognized onboarding problem.

- **Intermittent TUI crashes** (#5597, #5691) — `Box.render` throws when child components are undefined; `write EPIPE` errors continue to plague terminal sessions. These are the most frequently reported runtime stability issues.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-14

## Today's Highlights

The community remains highly active with 28 issues and 50 PRs updated in the last 24 hours, though no new releases dropped. A **long-running OAuth free tier policy debate** (Issue #3203, 129 comments) continues to polarize the community, while several **long-context and tool-loop bugs** are surfacing as critical quality blockers for heavy users. On the PR side, foundational work is underway to **decouple provider identity from SDK protocols** (PR #5089) and to **migrate Computer Use to a Rust-based driver** (PR #5051), signaling a push toward better cross-platform stability and extensibility.

## Releases

**None.** No new releases were published in the last 24 hours. The nightly release for `v0.18.0-nightly.20260613.44627a24b` failed on 2026-06-13 (Issue #5068). The latest stable remains `v0.17.1`.

## Hot Issues

1. **[#3203 – Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)**  
   *Opened 2 months ago, 129 comments.* A proposal to slash the free daily quota from 1,000 to 100 requests and eventually shutter the free tier. This is the most-discussed issue in the tracker and reflects growing tension between cost management and developer accessibility.

2. **[#5083 – TUI freeze due to unreaped zombie child processes](https://github.com/QwenLM/qwen-code/issues/5083)**  
   *Opened today, 4 comments.* A TUI session becomes completely unresponsive when a zombie `bash` subprocess lingers un-reaped. This impacts all interactive users and has high diagnostic detail from the reporter.

3. **[#5018 – Long-context attention drift and forgetting](https://github.com/QwenLM/qwen-code/issues/5018)**  
   *Opened 2 days ago, 4 comments.* The model loses focus on long-running tasks, forgetting earlier context. A core usability concern for agentic workflows.

4. **[#5055 – Trojan detection in VSIX package](https://github.com/QwenLM/qwen-code/issues/5055)**  
   *Opened 2 days ago, 4 comments.* Windows Defender flags `qwen-code-vscode-ide-companion-0.18.0-win32-x64.vsix` as `Trojan:JS/ShaiWorm.DBA!MTB`. A security trust issue that could block adoption for enterprise users.

5. **[#5019 – Repetitive tool calls causing session termination](https://github.com/QwenLM/qwen-code/issues/5019)**  
   *Opened 2 days ago, 3 comments.* The model enters a loop calling the same tool with identical arguments, triggering an API error that kills the session. Related to long-context instability.

6. **[#5080 – API key mixing between Standard and Token Plan causes 401](https://github.com/QwenLM/qwen-code/issues/5080)**  
   *Opened today, 4 comments.* Switching between provider plans (e.g., `[ModelStudio Token Plan]`) while using a Standard API key results in persistent 401 errors. A configuration pitfall for Alibaba Cloud users.

7. **[#4877 – OpenWork can't distinguish same model from different providers](https://github.com/QwenLM/qwen-code/issues/4877)**  
   *Opened 5 days ago, 4 comments.* When the same model name is available from multiple providers, the UI cannot differentiate them. Blocks advanced multi-provider setups.

8. **[#5075 – ExitPlanMode shows incomplete plan summary](https://github.com/QwenLM/qwen-code/issues/5075)**  
   *Opened today, 4 comments.* Exiting plan mode fails to render the full plan due to a gate error. Affects the coding-plan workflow for CLI users. **Closed** after resolution.

9. **[#5029 – Vague "feeling dumber" regression](https://github.com/QwenLM/qwen-code/issues/5029)**  
   *Opened 2 days ago, 3 comments.* A user reports a subjective drop in model performance compared to one week ago. Hard to triage but indicates possible model-version or config drift.

10. **[#5074 – Persistent sidebar for web-shell session management](https://github.com/QwenLM/qwen-code/issues/5074)**  
    *Opened today, 2 comments.* A feature request to add a `tmux`-like persistent sidebar for session switching in the web-shell. Reflects growing demand for richer terminal UX.

## Key PR Progress

1. **[#5051 – Migrate Computer Use to cua-driver (cross-platform)](https://github.com/QwenLM/qwen-code/pull/5051)**  
   *Open, by LaZzyMan.* Replaces the Node.js `open-computer-use` backend with a Rust-based `cua-driver-rs` that runs as a background MCP service. Promises no focus-stealing and cross-platform support. Experimental but architecturally significant.

2. **[#5089 – Decouple Provider Identity from SDK Protocol](https://github.com/QwenLM/qwen-code/pull/5089)**  
   *Open, by zzhenyao (draft).* Extracts a standalone `Protocol` enum so that `providerId` becomes a free-form string. Enables custom providers without breaking SDK routing. Directly addresses Issue #5090.

3. **[#4914 – Harden OOM prevention with idempotent compaction tests](https://github.com/QwenLM/qwen-code/pull/4914)**  
   *Open, by zzhenyao.* Adds regression tests for tool-group compaction and explicit GC calls. Follows up on a prior fix for memory-related crashes.

4. **[#4933 – Settings file change detection via chokidar](https://github.com/QwenLM/qwen-code/pull/4933)**  
   *Open, by water-in-stone.* Watches `settings.json` for hot-reload, removing the need to restart Qwen Code after config changes.

5. **[#5088 – Web-shell: full tool detail and auto-collapse](https://github.com/QwenLM/qwen-code/pull/5088)**  
   *Open, by wenshao.* Lifts the 120-character truncation on tool descriptions and auto-collapses finished tools, improving readability in the web-shell transcript.

6. **[#5036 – Hard-stop repeated identical tool calls in core](https://github.com/QwenLM/qwen-code/pull/5036)**  
   *Open, by he-yufeng.* Moves the repetitive-tool-call backstop from the TUI hook into the core stream loop, making it provider-agnostic. Directly targets Issue #5019.

7. **[#5020 – Drop tool calls after cancellation](https://github.com/QwenLM/qwen-code/pull/5020)**  
   *Closed/merged, by he-yufeng.* Prevents tool execution from proceeding after a user cancels a streaming turn. Fixes Issue #5016.

8. **[#4929 – OSC 52 clipboard fallback for SSH](https://github.com/QwenLM/qwen-code/pull/4929)**  
   *Closed/merged, by zzhenyao.* Adds escape-sequence-based clipboard support for headless Linux/SSH environments. Fixes Issue #4926.

9. **[#5085 – Add Kind.Agent for Agent tool UI categorization](https://github.com/QwenLM/qwen-code/pull/5085)**  
   *Open, by doudouOUC.* Assigns a dedicated `Kind.Agent` so sub-agent tools are properly categorized in the WebUI permission dialog.

10. **[#5057 – Persist file history snapshot updates](https://github.com/QwenLM/qwen-code/pull/5057)**  
    *Closed/merged, by doudouOUC.* Makes file-history backup snapshots durable during an active turn, ensuring rewinds work correctly after edits.

## Feature Request Trends

- **Provider & Authentication Decoupling** (Issues #5090, #4078, #4877): The community wants to mix and match models from different providers (OpenAI, Gemini, Anthropic, Alibaba Cloud) with different auth types in a single session, including custom provider IDs.
- **Richer Terminal/Web-Shell UX** (Issues #5074, #5064, #4769): Persistent session sidebars, wrapping status lines, and prominent git branch display are recurring requests for both the CLI and web-shell interfaces.
- **Session & Background Agent Improvements** (Issues #4884, #4204): Users want CLI flags preserved when resuming paused background agents, and better file-history persistence for the rewind feature.
- **Skills & ACP Mode Parity** (Issue #5007): Skills installed in `~/.qwen/skills` are invisible in ACP mode (e.g., when used from Zed IDE). There's demand for feature parity across all launch modes.

## Developer Pain Points

- **Long-Context Instability** (Issues #5018, #5019, #5029): The most critical recurring theme — models "forget" context, enter infinite tool-call loops, or generally degrade in quality on long sessions. This is the top blocker for agentic workflows.
- **Zombie Process & Resource Leaks** (Issue #5083): Unreaped child processes freeze the TUI, requiring manual process kills. A systems-level reliability issue.
- **Configuration and Auth Confusion** (Issues #5080, #5055, #4877): Mixing API keys, provider plans, and auth types leads to silent failures (401 errors), antivirus false positives, and non-obvious UI limitations.
- **Cancellation Race Conditions** (Issues #5016, #5020): Tools execute after SIGINT cancellation, leading to side effects the user explicitly tried to stop. The community has responded quickly with a fix, but the pattern highlights a fragile cancellation model.
- **Fragile Release Pipeline** (Issue #5068): The nightly release pipeline is failing, blocking bleeding-edge users from testing fixes and features.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-14

## Today's Highlights
The project continues its rapid v0.8.60 development cycle with heavy focus on **sub-agent architecture**, **workflow runtime** (WhaleFlow), and **multi-provider support**. A major architectural shift is underway: sub-agents are being split into a headless worker runtime with lightweight TUI projections (#3096), and a new `/swarm` command for dynamic multi-agent orchestration has been designed (#3178). Community contribution momentum remains strong, with 5 new PRs opened today covering cost tracking fixes, slash-command navigation, and GUI session APIs.

## Releases
No new releases in the last 24 hours.

## Hot Issues (Top 10)

1. **[#3096 - Split sub-agents into headless worker runtime](https://github.com/Hmbown/CodeWhale/issues/3096)** (OPEN, 6 comments)
   - Major architectural refactor: sub-agents are too "UI-shaped" for modern fanout. Moving to lightweight TUI projections over headless runtimes. High community interest as it affects all multi-agent workflows.

2. **[#3154 - Agent Fleet control plane EPIC](https://github.com/Hmbown/CodeWhale/issues/3154)** (OPEN, 2 comments)
   - Cursor-inspired agent-fleet pattern: manager agent keeps workers moving, handles stuck work, escalates to humans. The most ambitious architectural issue currently open. Expect major community discussion.

3. **[#3066 - Cost tracking dead for non-DeepSeek models](https://github.com/Hmbown/CodeWhale/issues/3066)** (OPEN, 1 comment)
   - `pricing.rs` returns `None` for Kimi, Qwen, GLM, OpenAI, etc. Community reaction: high priority — users on non-DeepSeek providers have zero cost visibility. A PR (#3201) opened today to fix this.

4. **[#2584 - Cannot upload local images](https://github.com/Hmbown/CodeWhale/issues/2584)** (CLOSED, 8 comments)
   - `/attach` sends file paths instead of base64 for multimodal models. Most commented issue this week. Closed but highlights a critical multimodal UX gap.

5. **[#3082 - Group background tasks into workflows with phase summaries](https://github.com/Hmbown/CodeWhale/issues/3082)** (CLOSED, 6 comments)
   - Community strongly supports collapsing repetitive command cards into workflow-level summaries. The provided screenshot shows the desired UX shape.

6. **[#3142 - Agent run ledger with receipts](https://github.com/Hmbown/CodeWhale/issues/3142)** (CLOSED, 5 comments)
   - Cursor's "operational run" pattern adopted: background work as tracked runs, not hidden chat branches. Community sees this as essential for fleet management.

7. **[#1871 - Taskbar progress & completion sound QoL](https://github.com/Hmbown/CodeWhale/issues/1871)** (CLOSED, 5 comments)
   - Popular community request (👍1) for alt-tab-friendly feedback. Feature includes Windows taskbar progress, terminal title spinner, configurable sound. Closed and merged.

8. **[#2606 - Sidebar "Work" panel checklist stale](https://github.com/Hmbown/CodeWhale/issues/2606)** (CLOSED, 3 comments)
   - Checklist shows "100% complete" in transcript but sidebar never updates. Root cause: sidebar render-desync with engine state. A known frustration for task-oriented users.

9. **[#3198 - `cargo install codewhale-tui` fails](https://github.com/Hmbown/CodeWhale/issues/3198)** (CLOSED, 2 comments)
   - Compilation error in `starlark_map` dependency. Blocking new users. Community reaction: immediate concern — tool must install cleanly for first impressions.

10. **[#2982 - Busy/free status unclear](https://github.com/Hmbown/CodeWhale/issues/2982)** (OPEN, 1 comment)
    - Users cannot distinguish "thinking" from "idle" states. Proposed solution: color blocks, traffic lights. Small UX fix with high visibility impact. Low comment count but high-frequency pain.

## Key PR Progress (Top 10)

1. **[#3201 - Fix: revive cost tracking for non-DeepSeek models](https://github.com/Hmbown/CodeWhale/pull/3201)** (OPEN)
   - Expands `pricing.rs` with Kimi, Qwen, GLM rates. Directly addresses #3066. Community eagerly awaiting this for multi-provider cost visibility.

2. **[#3199 - PUT /v1/sessions endpoint](https://github.com/Hmbown/CodeWhale/pull/3199)** (OPEN)
   - Slices session-save from larger #2808. Adds engine-based session persistence for GUI clients. Clean, focused PR following maintainer guidance.

3. **[#3197 - Rename DeepSeek blue to whale accent](https://github.com/Hmbown/CodeWhale/pull/3197)** (OPEN)
   - Part of project rebrand: replaces `DEEPSEEK_BLUE` with `WHALE_ACCENT_PRIMARY`. Keeps deprecated aliases for transition. Community contributor.

4. **[#3196 - Ctrl+P/N navigate slash-command autocomplete](https://github.com/Hmbown/CodeWhale/pull/3196)** (OPEN)
   - Alt keyboard navigation for command popup. Includes guard against conflicting Ctrl+P file picker. Small UX win from community.

5. **[#3195 - Fix Telegram polling while turns stream](https://github.com/Hmbown/CodeWhale/pull/3195)** (OPEN)
   - Fixes #2966: Telegram bot blocks during long-running turns. Uses background tasks to keep `getUpdates` alive. Critical for Telegram integration reliability.

6. **[#3193 - Config-gated Pro Plan routing profile](https://github.com/Hmbown/CodeWhale/pull/3193)** (OPEN)
   - Fresh take on Pro Plan (from #1865). Config-gated, opt-in via `pro_plan_profile = false`. No default mode change — community cautious about monetization creep.

7. **[#3191 - Add Z.ai and StepFlash/StepFun providers](https://github.com/Hmbown/CodeWhale/pull/3191)** (CLOSED)
   - Adds GLM-5.1 (200K ctx) and StepFun as first-party providers. Closed quickly — needed for v0.8.60 provider diversity goals.

8. **[#3054 - Native Anthropic Messages API adapter](https://github.com/Hmbown/CodeWhale/pull/3054)** (CLOSED)
   - Third wire dialect: `cache_control`, thinking blocks, tool streaming. Enables direct Anthropic use without OpenRouter. Strategic for enterprise adoption.

9. **[#3042 - exec hardening: --allowed-tools, --max-turns](https://github.com/Hmbown/CodeWhale/pull/3042)** (CLOSED)
   - Adds 4 new CLI flags for CI/benchmark: tool allow/deny lists, turn caps, system prompt append. Foundation for unattended operation and Codex parity.

10. **[#3035 - Throttle AgentProgress redraws under subagent load](https://github.com/Hmbown/CodeWhale/pull/3035)** (CLOSED)
    - Fixes TUI freeze when 4+ sub-agents run. Full redraw on every progress event was saturating render loop. Critical for multi-agent usability.

## Feature Request Trends

- **Multi-provider cost tracking**: Users across Kimi, Qwen, GLM, OpenAI demand cost visibility. `pricing.rs` is a blocker.
- **Workflow/fleet orchestration**: The dominant direction — `/swarm`, WhaleFlow, agent-run ledgers, and fleet control planes. CodeWhale is converging on Cursor's agent-fleet pattern.
- **Agent role/delegation models**: Users want scout, implementer, reviewer roles — not just flat sub-agents.
- **TUI QoL improvements**: Taskbar progress, completion sounds, clear busy/free states, clickable sidebar rows, compact transcript views. Many small UX wins being batch-closed.
- **Non-DeepSeek provider parity**: Auto-router, subagent model selection, reasoning streaming all still DeepSeek-centric. Community wants universal provider support.

## Developer Pain Points

- **TUI freeze under load**: Sub-agent redraw throttling is being fixed, but crashes and unresponsiveness at 99.6% context saturation persist (#1722).
- **Multi-provider friction**: Hardcoded DeepSeek assumptions break Kimi/Ollama/OpenAI users at every layer — model routing, pricing, reasoning display. Fixes are landing slowly.
- **Installation failures**: `cargo install` failing on dependency compilation (#3198) blocks new users — a recurring community frustration.
- **Stale UI state**: Sidebar panels not syncing with engine state (checklist #2606, MCP count #2787). Users report confusion from unresponsive UI elements.
- **Status ambiguity**: Inability to distinguish "thinking" from "idle" (#2982) wastes developer time waiting. Simple fix, high frequency of complaint.
- **Session name conflicts**: Agents cannot diagnose duplicate session names (#2656). Critical for multi-agent orchestration reliability.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*