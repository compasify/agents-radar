# AI CLI Tools Community Digest 2026-06-23

> Generated: 2026-06-23 00:28 UTC | Tools covered: 9

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
**Date: 2026-06-23**

---

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a competitive ecosystem with seven major players, each serving distinct developer workflows. Anthropic's Claude Code and OpenAI's Codex lead in community size and issue volume (70,000+ and 28,000+ issues respectively), while Google's Gemini CLI and MoonshotAI's Kimi Code are rapidly iterating but smaller in scale. The ecosystem is converging around MCP (Model Context Protocol) as the standard integration layer, yet every tool struggles with MCP lifecycle management—server spawning, deduplication, authentication, and configuration merging. A clear stratification is emerging: battle-tested tools (Claude Code, Codex) face scaling pains and regression accumulation, while newer entrants (OpenCode, Pi, CodeWhale) focus on extensibility and provider flexibility. Windows and Termux remain systematically underserved across the board, with most tools shipping Linux/macOS-first experiences.

---

## 2. Activity Comparison

| Tool | Open Issues | PRs (24h Activity) | Latest Release | Release Cadence |
|------|------------|-------------------|----------------|-----------------|
| **Claude Code** | 70,000+ | 5 PRs (1 merged) | v2.1.186 (today) | ~Daily (patch) |
| **OpenAI Codex** | ~28,800 | 10+ PRs merged | rust-v0.142.0 | ~Weekly (stable + alpha) |
| **Gemini CLI** | ~26,500 | 10 PRs (8 merged) | No new release today | ~Weekly |
| **GitHub Copilot CLI** | ~3,900 | 0 PRs today | v1.0.64-3 (recent) | ~Biweekly |
| **Kimi Code CLI** | ~2,470 | 3 PRs (2 merged) | v1.48.0 (yesterday) | ~Weekly |
| **OpenCode** | ~33,450 | 10 PRs (1 merged) | v1.17.9 | ~Monthly |
| **Pi** | ~6,000 | 10 PRs (5+ merged) | v0.79.10 (today) | ~Weekly |
| **Qwen Code** | ~5,720 | 20+ PRs (5 merged) | v0.18.5-nightly | ~Daily (nightly) |
| **CodeWhale** (DeepSeek TUI) | ~3,360 | 10 PRs (3 merged) | v0.8.64 | ~Biweekly |

**Key observations:**
- Claude Code dominates raw issue volume (70K+) but with significant noise from stale/autoclose policy debates
- OpenAI Codex shows the highest PR throughput today with 10+ merged PRs across stack (logging, MCP, security)
- Qwen Code had the most aggressive fix activity (20+ PRs from single contributor), all input validation fixes
- GitHub Copilot CLI and Kimi Code show lower activity—smaller communities or slower release cycles
- CodeWhale (renamed from DeepSeek TUI) is actively rebranding and restructuring its architecture

---

## 3. Shared Feature Directions

### MCP Lifecycle Management (ALL TOOLS)
Every tool community is demanding:
- **Singleton server management** — Claude Code (#64366 macOS kernel panics), Kimi Code (#2457 auto-recovery of deleted servers), Copilot CLI (#3887 registry interpolation), OpenCode (#28567 full MCP spec)
- **Lazy-loading / autoStart: false** — Claude Code (#70015), multiple unlisted requests in Copilot CLI and Kimi Code
- **Approval flow fixes** — Claude Code (#70156 stalled in worktrees), OpenCode (no equivalent but MCP approval UX requested)

### Performance & Resource Monitoring (Claude Code, Codex, OpenCode, Qwen Code, CodeWhale)
- **Timing/duration visibility** — Copilot CLI (#3278, #3111, #3055 all requesting elapsed-time indicators), Claude Code (token counter disappearing), Qwen Code (#5722 tok/s display bugs), CodeWhale (#3289 freeze monitoring)
- **Memory leak diagnosis** — Claude Code (#64366 32GB MCP fan-out), OpenCode (#20695 Memory Megathread, #33213 26.8 GiB server), Pi (no equivalent)

### Session Persistence & Portability (Claude Code, Codex, Gemini CLI, OpenCode)
- **Thread/workspace path portability** — Codex (#15347 move workspace without losing history), Gemini CLI (not explicit but parallel concern), OpenCode (#33447 pre-migration sessions stranded)
- **Resume reliability** — Copilot CLI (#3596 auth loss on resume, #3886 credit consumption on restart), Claude Code (missing content after update #53717), CodeWhale (auto-spawn freezes #3289)

### Provider Extensibility (Pi, CodeWhale, Qwen Code, Gemini CLI)
- **Custom provider APIs** — Pi (#3357 local LLM provider, #5859 Merge Gateway, #5262 Anthropic Vertex), CodeWhale (#2608 provider/model fact separation, #2629 SiliconFlow/Tencent auth), Qwen Code (#5090 decouple provider identity from SDK protocol)
- **Multi-model routing** — CodeWhale (#2300 auto-selection, #2608 route resolution), Pi (DeepSeek auto-router PR #5970), Gemini CLI (no explicit equivalent)

### Cross-Platform Parity (Claude Code, Codex, Gemini CLI, OpenCode)
- **Windows fragmentation** — Claude Code (#51143 blank screen, #53717 data loss), Codex (#14461 WSL crash, #13846 UNC path loss), Copilot CLI (no major Windows issues today), Kimi Code (no Windows-specific reported)
- **Termux/Android broken** — Claude Code (#50270, 66 days open, no fix), Codex (no Android support), others (not supported)

### Security & Access Control (ALL)
- **Credential/secret management** — Claude Code (#70181 304 cache zeroes managed-settings), Gemini CLI (#26525 deterministic redaction), Pi (#5871 OAuth token hardcoded detection), Copilot CLI (#3887 registry interpolation preventing secure config)
- **Destructive operation guards** — Gemini CLI (#22672 stop destructive behavior), Pi (#5955 secret-disclosure scope), CodeWhale (#2942 unrequested command execution)
- **CI/CD supply chain security** — Qwen Code (#5634 label injection via untrusted issue content), OpenCode (#33463 backup/credentials guard)

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | CodeWhale |
|-----------|------------|-------------|------------|-------------|-----------|----------|-----|-----------|-----------|
| **Primary user** | Pro developers, heavy MCP users | Enterprise/Pro users, API integrators | GCP/Google ecosystem | GitHub ecosystem | East Asian markets | Open-source community | Extension developers | Chinese enterprise + open-source | Chinese cloud + multi-provider |
| **Core strength** | Agent depth, MCP maturity, model behavior | Speed + reliability focus, plugin catalog | Subagent architecture, GCP integration | GitHub native, skills ecosystem | Tool-call escalation, reasoning fixes | Plugin system, edit mode, session management | Extension API, provider flexibility | Input validation, VSCode integration | Provider routing, Fleet orchestration |
| **Key weakness** | Memory leaks (MCP fan-out), Windows instability | Rate-limit cost unpredictability, Electron perf | Agent false-positives, tool limit crashes | Low community engagement, MCP config gaps | MCP server bugs, ACP mode incomplete | Worker crashes, memory leaks, plugin silent failures | Module duplication, hardcoded assumptions | CI/CD security, terminal compatibility | Auto-spawn freezes, auth confusion |
| **Technical approach** | JS/TS, MCP-first, native binary | Rust, Electron desktop, session logging | TypeScript, subagent orchestration | TypeScript, GitHub API integration | TypeScript, kosong runtime | TypeScript, event-sourcing persistence | TypeScript, RPC protocol, extensibility | TypeScript, VSCode companion, ACP | Rust, Fleet architecture, DSML |
| **Release cadence** | Daily patches | Weekly stable + alpha | Weekly | Biweekly | Weekly | Monthly | Weekly | Daily nightly | Biweekly |

### Strategic Differentiators

- **Claude Code** invests deepest in model behavior alignment (#60226 reasoning gap analysis) and MCP maturity—but pays for it with architectural complexity (MCP fan-out, worktree approvals).

- **OpenAI Codex** focuses on operational reliability (SQLite 640TB/year fix, retry safety) and plugin ecosystem (5-PR remote catalog stack), with explicit enterprise features (proxy architecture, Bedrock credentials).

- **Gemini CLI** differentiates via subagent architecture and GCP-native workflows (Cloud Run webhook ingestion, Auto Memory), but subagent reliability issues (#22323 false-success, #21409 hangs) undermine its core value proposition.

- **GitHub Copilot CLI** has the smallest community and slowest iteration, but benefits from deep GitHub integration. Its key differentiators (skills, autopilot mode) are under-requested.

- **Kimi Code CLI** focuses on tool-call escalation and reasoning content handling—a niche but important reliability improvement for agent loops.

- **OpenCode** prioritizes open extensibility (namespaced plugin API, native edit mode, session management APIs) but suffers from systemic stability issues ("Worker terminated" crashes, 26.8 GiB memory).

- **Pi** is the most extensibility-focused, with explicit extensions API, RPC protocol, and provider ecosystem expansion. Its Shrinkwrap module duplication (#5653) is a unique architectural challenge.

- **Qwen Code** excels in input validation (20+ PRs today) and VSCode integration, but CI/CD security vulnerabilities (#5634) and terminal compatibility (#5713 Alacritty) need attention.

- **CodeWhale** (ex-DeepSeek TUI) focuses on provider routing with multi-Chinese-cloud support, but has the most severe trust issue (unrequested command execution #2942).

---

## 5. Community Momentum & Maturity

### High Momentum / Rapid Iteration
- **Qwen Code** — 20+ PRs in 24 hours (all from one contributor), active nightly builds, strong validation-fix cadence. Community is smaller but highly engaged and productive.
- **OpenAI Codex** — Highest PR throughput with meaningful infrastructure changes (SQLite fix, proxy architecture, plugin catalog UI). Stable release cadence with alpha channel.
- **Pi** — 10 PRs today spanning new providers (Merge Gateway, Anthropic Vertex), extension API improvements, and security fixes. Weekly releases with growing extension ecosystem.
- **Gemini CLI** — Steady weekly contribution with infrastructure investments (Cloud Run triage, MCP elicitation spec). Community-driven PRs dominate (8 of 10 merged today).

### Mature / Stable
- **Claude Code** — Largest ecosystem but growing pains: 70K+ issues, stale/autoclose policy debate, MCP lifecycle complexity. Daily patches show maintenance maturity but slow response to deep architectural bugs (Termux regression 66 days).
- **GitHub Copilot CLI** — Lowest activity, smallest community. New features (proxy setting, session resume) but no PRs today. Risk of stagnation.

### Growing / In Transition
- **CodeWhale** (DeepSeek TUI rebrand) — Active restructuring: Fleet architecture, provider scoping, security hardening. High community energy but rebrand migration friction and auto-spawn freezes signal instability.
- **Kimi Code CLI** — Small but focused community. Memory system feature request (#1283) is the highest-signal demand. Three MCP bugs in 24 hours suggest growing pains.
- **OpenCode** — Large community (33K+ issues) but maintenance bandwidth concerns: Memory Megathread growing, pre-migration data stranded, silent plugin loading failures. Monthly releases may be too slow for bug volume.

### Community Health Signals
| Metric | Leader | Laggard |
|--------|--------|---------|
| **Issue response time** | Qwen Code (20 PRs in 24h) | Claude Code (66-day no-fix regression) |
| **Community PR contribution** | Pi, Gemini CLI (community-driven) | Copilot CLI (0 PRs today) |
| **Bug report quality** | OpenCode (maintainers request heap snapshots) | CodeWhale (#2942 closed without root cause) |
| **Breaking change management** | OpenAI Codex (alpha channel) | Claude Code (glibc regression, no fallback) |

---

## 6. Trend Signals

### 1. MCP Becomes Both Standard and Pain Point
MCP has won as the integration protocol—every tool supports it—but no one has solved lifecycle management. **Claude Code's unbounded MCP fan-out causing kernel panics** (#64366) and **Copilot CLI's broken registry interpolation** (#3887) are symptoms of premature standardization. Expect consolidation: either a standardized MCP process manager emerges, or tools differentiate on server lifecycle quality. **Impact**: Developers should expect MCP-related breakage in any tool they choose; evaluate based on server lifecycle handling, not just spec compliance.

### 2. Multi-Provider Routing Becomes Table Stakes
Pi (Merge Gateway, Vertex), CodeWhale (5+ Chinese cloud providers), and Qwen Code (#5090 provider protocol decoupling) signal that **developers want one CLI to rule all models**. The "provider descriptor" pattern—separating identity, model, and route—is emerging as the architecture of choice. **Impact**: Single-provider CLIs (Claude Code, Copilot CLI) face pressure to open up; Codex's Codex Responses API gives it unique lock-in leverage.

### 3. Agent Reliability Reality Sets In
Across every tool, the pattern is identical: **agents hang, report false success, or act unpredictably**. Gemini CLI (#22323 MAX_TURNS reported as success), Kimi Code (#2468 process hangs), CodeWhale (#2942 self-corruption), OpenCode (#28015 Worker terminated). The industry is discovering that agent orchestration is harder than expected. **Impact**: Companies investing in AI CLI tools should budget for significant agent behavior engineering and implement guardrails regardless of tool choice.

### 4. Windows Neglect Has Consequences
Claude Code (#51143 blank screen, #53717 data loss), Codex (#14461 WSL crash, #13846 UNC path), and Pi (no explicit Windows support) show that **macOS/Linux-first development systematically under-serves Windows users**. The Termux/Android regression (#50270, 66 days) extends this to mobile Linux. **Impact**: Windows-centric organizations should expect friction; consider Codex (most Windows issues reported = most attention) or wait for cross-platform maturity.

### 5. Security Awareness Is Rising
Qwen Code (#5634 autofix label injection), Pi (#5955 secret-disclosure guard), Claude Code (#70181 304 cache zeroes managed-settings), and Copilot CLI (#3881 credit overcharging) show that **as tools gain autonomy, they create attack surfaces and trust issues**. The shift from "can this tool write code?" to "can this tool safely write code?" is accelerating. **Impact**: Security teams should demand audit trails, confirmation gates, and credential handling transparency before approving any AI CLI tool for enterprise use.

### 6. Extensibility Wars Begin
OpenCode (namespaced plugin API), Pi (extension API + RPC), Codex (plugin catalog), and CodeWhale (script plugins) are competing to define **how third-party code integrates with AI CLIs**. Pi's approach—full extension API with typescript—appears most developer-friendly; OpenCode's plugin system is most flexible but buggy (silent loading failures since 1.17.0). **Impact**: Organizations should evaluate plugin ecosystems based on stability and documentation, not just feature breadth. Pi and OpenCode lead in extensibility; Claude Code and Copilot CLI lag.

### 7. The "Reasoning Gap" Problem
Claude Code (#60226: model identifies logical flaws but proceeds anyway) and Gemini CLI (#22323: subagent reports success despite zero analysis) point to a **fundamental model behavior issue**: LLMs can recognize errors but continue regardless. This is not a steered response—it's a reasoning chain disconnect. **Impact**: Until model providers solve this, developers cannot fully trust AI CLI tools for autonomous multi-step tasks. Human-in-the-loop workflows remain necessary.

---

## Summary for Decision-Makers

| Use Case | Recommended Tool | Key Caveat |
|----------|-----------------|------------|
| **MCP-heavy workflows** | Claude Code | Monitor for memory leaks; avoid unbounded server fan-out |
| **Enterprise / Pro reliability** | OpenAI Codex | Budget for rate-limit cost spikes (#28879) |
| **GCP/Google ecosystem** | Gemini CLI | Expect subagent false-positives; disable if unreliable |
| **GitHub-native workflows** | Copilot CLI | Limited community; slow iteration |
| **East Asian / Chinese enterprise** | Kimi Code or Qwen Code | Kimi Code for reasoning; Qwen Code for VSCode integration |
| **Extensibility / custom providers** | Pi | Manage Shrinkwrap duplication (#5653) |
| **Multi-provider / cost optimization** | CodeWhale | Wait for auto-spawn freeze fix (#3289) |
| **Open-source / plugin ecosystem** | OpenCode | Worker crash risk (#28015, #32694) |

**Bottom line**: No tool is fully production-ready across all dimensions. The fastest-moving tools (Pi, Qwen Code, CodeWhale) have the most stability risks; the most stable (Copilot CLI) has the least momentum. Choose based on your tolerance for MCP friction, platform support requirements, and willingness to invest in agent behavior engineering.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the **anthropics/skills** repository, based on data from 2026-06-23.

---

## Claude Code Skills Community Highlights Report

### 1. Top Skills Ranking

The following Skills (Pull Requests) have generated the most discussion and represent the community’s highest engagement.

1.  **fix(skill-creator): run_eval.py always reports 0% recall** [#1298](https://github.com/anthropics/skills/pull/1298) *(Open)*
    - **Functionality:** A critical patch to the skill-creator toolset. This PR fixes `run_eval.py` so that the description-optimization loop (`run_loop.py`, `improve_description.py`) stops reporting `recall=0%` for every skill, a bug that made the entire auto-optimization pipeline useless.
    - **Discussion:** This is the most active PR on the board, directly addressing the community’s top pain point (Issue #556) with 10+ independent reproductions. It includes fixes for Windows stream reading, trigger detection, and parallel workers.
    - **Status:** Open. Highly anticipated patch.

2.  **Add document-typography skill** [#514](https://github.com/anthropics/skills/pull/514) *(Open)*
    - **Functionality:** Solves common AI-generated document issues: orphan word wrap, widow paragraphs, and numbering misalignment.
    - **Discussion:** A clean, universally applicable skill. Users note these issues affect nearly every document Claude generates, making this a high-value quality-of-life improvement.
    - **Status:** Open, awaiting merge.

3.  **Add skill-quality-analyzer and skill-security-analyzer** [#83](https://github.com/anthropics/skills/pull/83) *(Open)*
    - **Functionality:** Two “meta-skills” for the marketplace. The quality analyzer evaluates skills across five dimensions (Structure, Documentation, Examples, Resources, Robustness), while the security analyzer checks for dangerous code patterns and prompt injection risks.
    - **Discussion:** Represents a community effort toward self-regulation and quality assurance. High interest from skill creators.
    - **Status:** Open.

4.  **Add ODT skill** [#486](https://github.com/anthropics/skills/pull/486) *(Open)*
    - **Functionality:** Adds full support for OpenDocument Format files (.odt, .ods), enabling creation, template filling, and conversion to HTML.
    - **Discussion:** Driven by the LibreOffice community. A clear gap in the document skills ecosystem that has strong demand for cross-platform compatibility.
    - **Status:** Open.

5.  **Improve frontend-design skill** [#210](https://github.com/anthropics/skills/pull/210) *(Open)*
    - **Functionality:** A major revision to the existing `frontend-design` skill to improve clarity and actionability, ensuring instructions are specific enough to guide Claude’s behavior without overlap.
    - **Discussion:** Addresses a common user complaint: skills that are too vague. This PR focuses on making the skill executable within a single conversation.
    - **Status:** Open.

6.  **Fix Windows compatibility (Multiple PRs)** [#538](https://github.com/anthropics/skills/pull/538), [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) *(Open)*
    - **Functionality:** A wave of Windows-specific fixes including case-sensitive file references, subprocess `PATHEXT` handling, and encoding bugs.
    - **Discussion:** The crowd-sourced nature of these fixes (from Lubrsy706, joshuawowk, gstreet-ops, Mr-Neutr0n) highlights a massive community blocker: skill-creator is nearly unusable on Windows. This is the single most reported pain point.
    - **Status:** All open, some overlapping.

---

### 2. Community Demand Trends

From the top Issues, three clear demand vectors emerge:

- **Enterprise & Security Governance:** Issue #228 (org-wide skill sharing) and #492 (trust boundary abuse) show the community is pushing for enterprise-grade controls. Users want to share skills organizationally and need clear security boundaries between official and community skills.
- **Windows Compatibility:** Issue #1061 is a direct call to action. The skill-creator and evaluation scripts are "Unix-first" and fail on native Windows Python due to subprocess handling, encoding, and pipe reading. This is the most significant barrier to adoption for a large developer segment.
- **Skill Quality & Ecosystem Health:** Issue #189 (duplicate skill content) and #202 (skill-creator best practices) show the community is concerned with ecosystem hygiene. There is strong demand for a curated, deduplicated, and well-documented marketplace.

---

### 3. High-Potential Pending Skills

These PRs have active discussion and are likely to land soon:

- **feat: add testing-patterns skill** [#723](https://github.com/anthropics/skills/pull/723) — A comprehensive skill covering the testing trophy model, unit testing, and React component testing. Directly addresses a gap in developer workflow skills.
- **feat: add ServiceNow platform skill** [#568](https://github.com/anthropics/skills/pull/568) — Enterprise IT automation covering ITSM, ITOM, SecOps, and more. High interest from enterprise users.
- **Add shodh-memory skill** [#154](https://github.com/anthropics/skills/pull/154) — Persistent memory for AI agents. This is part of a broader trend toward context-preserving skills for long-running agent sessions.
- **feat: add AURELION skill suite** [#444](https://github.com/anthropics/skills/pull/444) — A professional knowledge management framework with structured thinking templates. Represents the growing demand for cognitive scaffolding skills.

---

### 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for ecosystem plumbing: fixing a broken evaluation pipeline (0% recall bug), achieving cross-platform parity (Windows compatibility), and establishing governance for quality and security, rather than adding novel functional skills.**

The most-watched activities are not about what the skills *do*, but about making the skill infrastructure work reliably.

---

# Claude Code Community Digest — 2026-06-23

## Today's Highlights
Release **v2.1.186** ships today with two notable quality-of-life additions: CLI-based MCP authentication (`claude mcp login/logout`) with SSH-friendly `--no-browser` support, and status filtering for the `/workflows` agent view. Meanwhile, the community is buzzing around a critical Termux regression that has broken Claude Code on Android since v2.1.113, and a deeply-reported model behavior bug where Claude self-identifies logical gaps in its reasoning yet proceeds to act regardless. The issue tracker crossed the 70,000 mark with fresh reports of macOS kernel panics from unbounded MCP server fan-out.

## Releases
**[v2.1.186](https://github.com/anthropics/claude-code/releases/tag/v2.1.186)**
- `claude mcp login <name>` and `claude mcp logout <name>` now allow authenticating MCP servers directly from the CLI, bypassing the interactive `/mcp` menu. The `--no-browser` flag supports stdin redirect for SSH completions.
- The `/workflows` agent now supports status filtering by pressing `f`.

No other releases in the last 24 hours.

## Hot Issues

1. **[#64366 — Unbounded MCP server fan-out kernel-panics macOS (M2 Max / 32 GB)](https://github.com/anthropics/claude-code/issues/64366)**
   - *Severity:* Critical. Four kernel panics and forced power-offs. Each cowork/agent session spawns its own copy of every MCP server without deduplication, rapidly exhausting RAM. Community is calling for a singleton MCP process manager.

2. **[#60226 — Claude states its analysis is unfounded, then completes it anyway](https://github.com/anthropics/claude-code/issues/60226)**
   - *Severity:* High. The model explicitly identifies blocking logical gaps in its own reasoning but proceeds to output the flawed analysis. The author meticulously distinguishes this from the "act-first" bias tracked in #57836. 45 comments debating behavioral alignment and whether this warrants a model-level fix vs. prompt engineering.

3. **[#50270 — v2.1.113+ broken on Termux/Android (glibc requirement)](https://github.com/anthropics/claude-code/issues/50270)**
   - *Severity:* Regression. The switch from a JS entry point to a native glibc binary broke Android support entirely. 55 comments, 51 👍. Community is frustrated that no JS fallback was preserved. No fix in sight as of v2.1.186.

4. **[#18170 — Copy/paste includes unwanted indentation and trailing spaces](https://github.com/anthropics/claude-code/issues/18170)**
   - *Severity:* Annoyance. #1 most-upvoted open issue (265 👍, 124 comments). Every code block copy from terminal output carries leading whitespace from the TUI prompt alignment. Six months old with no fix.

5. **[#51143 — Desktop blank/white screen on Windows](https://github.com/anthropics/claude-code/issues/51143)**
   - *Severity:* High. Persistent blank screen after launch; cowok unusable. Multiple reinstalls ineffective. 15 comments, 12 👍. Affects a core feature on a major platform.

6. **[#53717 — Windows: Message content lost after auto-update](https://github.com/anthropics/claude-code/issues/53717)**
   - *Severity:* Data loss. Sessions appear in the sidebar but all message content is missing. JSONL persistence files are empty or malformed. 10 comments.

7. **[#70156 — Subagents stall waiting for MCP approval in merged worktrees](https://github.com/anthropics/claude-code/issues/70156)**
   - *Severity:* High for multi-repo workflows. Subagents hang forever when `.mcp.json` files are merged into worktrees because the approval dialog never fires. Fresh issue, rapidly gaining attention.

8. **[#29937 — Terminal rendering corruption in tmux](https://github.com/anthropics/claude-code/issues/29937)**
   - *Severity:* Medium. Text overlap and overwriting in tmux sessions. 23 comments, 50 👍. Long-standing (March 2026) with no fix.

9. **[#70181 — Empty 304 cache zeroes out managed-settings.json](https://github.com/anthropics/claude-code/issues/70181)**
   - *Severity:* Security. Enterprise-managed permission rules (`allow`/`deny`) are silently discarded when the server responds with a 304 (Not Modified). Token enforcement rules never applied. Filed today.

10. **[#70177 — JSON Parse error listing Chrome browsers on macOS](https://github.com/anthropics/claude-code/issues/70177)**
    - *Severity:* Low-Medium. Browser automation tooling broken by unexpected identifier token in Chrome's response. Fresh report.

## Key PR Progress

1. **[#70173 — Fix `/clean_gone` branch detection](https://github.com/anthropics/claude-code/pull/70173)**
   - Fixes a bug where `git branch -v` instead of `git branch -vv` was used to detect `[gone]` branches, rendering the cleanup command a no-op. Also fixes `sed`/`awk` parsing for non-English locales.

2. **[#63686 — Bump stale/autoclose from 14 to 90 days](https://github.com/anthropics/claude-code/pull/63686)**
   - A policy change to reduce aggressive auto-closure of issues. The 14-day window was causing valid bug reports to be swept before maintainers could triage. Still open after 25 days.

3. **[#70074 — Fix stale marketplace name in plugin-dev README](https://github.com/anthropics/claude-code/pull/70074)**
   - Doc fix: `claude-code-marketplace` → `claude-code-plugins` (3 occurrences). Closes #70064.

4. **[#70066 — Update marketplace install docs for plugins](https://github.com/anthropics/claude-code/pull/70066)**
   - Updates plugin-dev README to use the official marketplace name and replaces `cc --plugin-dir` with `claude --plugin-dir` in examples.

5. **[#63686 — (continuing) Issue lifecycle policy change](https://github.com/anthropics/claude-code/pull/63686)**
   - Proposal to extend both stale-marking and auto-close timeouts from 14 to 90 days. Stalled in review. Community sentiment strongly supportive.

## Feature Request Trends

1. **Lazy-loading MCP servers** (#70015): Multiple requests for an `autoStart: false` flag in `.mcp.json` so servers register but don't start until explicitly enabled. Addresses performance concerns in large projects.

2. **Multi-account switching** (#36151): 369 👍, 103 comments. Users want to switch between personal/professional Anthropic accounts without sharing email or logging out. Tagged as [invalid] by maintainers, suggesting architectural resistance.

3. **Non-steering follow-up messages** (#70176): A submit modifier to queue messages as follow-ups rather than steering in-flight agent responses. Would allow users to add context without interrupting active tool calls.

4. **Desktop webhook/notification hooks** (#53242): Feature request for webhook-based notifications in Desktop mode (works in CLI). Closed as stale after maintainer inactivity.

5. **Session archival transparency** (#66053): Users want visibility into why sessions are silently archived from the sidebar. Currently intermittent and non-reproducible.

## Developer Pain Points

- **MCP server lifecycle management** dominates the tracker: unbounded fan-out (#64366), stalled approval in worktrees (#70156), silent skipping of `.mcp.json` (#58924), and the new lazy-loading request (#70015). MCP infrastructure is the single largest source of complex bugs.
- **Data loss on Windows** is a recurring theme: session content lost after auto-update (#53717), sidebar history lost on disk-full (#69003), and the persistent blank screen (#51143). Windows remains the least stable platform.
- **Termux/Android regression** (#50270) has been open for 66 days with no resolution. The glibc dependency is a fundamental architecture choice that appears not to have a planned revert.
- **Model behavior consistency** is drawing increased scrutiny: the "reason-about-gaps-then-act" bug (#60226), CLAUDE.md rule violations (#70125), and context loss in multi-day sessions (#70175). Users are expecting better adherence to explicit configuration.
- **TUI/terminal quirks** — copy-paste indentation (#18170, 265 👍), tmux corruption (#29937), focus-loss unselectable choices (#70178), disappearing token counter (#70159) — remain unfixed for months, eroding trust in the terminal experience.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest – 2026-06-23

## Today's Highlights
Rate-limit cost spikes remain the dominant community concern, with issue #28879 (gpt-5.5 Plus budget draining 10–20x faster since June 16) reaching 117 comments and 238 reactions. Meanwhile, the team is shipping multiple improvements: a new MCP cross-platform path fix (#29493), code-mode retry safety and cell ID overhaul (#29397–#29398), and a massive SQLite logging fix that avoids ~640 TB/year of writes (#28224 closed). The plugin ecosystem is also maturing with remote catalog UI polish landing across a 5-PR stack (PRs #26704–#26705).

## Releases
**rust-v0.142.0** (stable):
- `/usage` now displays and redeems earned usage-limit reset credits with confirmation, retry, and refreshed availability states (#28154, #28793)
- `/plugins` organizes remote plugins into OpenAI Curated, Workspace, and Shared with me sections; eligible turns can recommend plugins

**Alpha releases**: rust-v0.142.0-alpha.11, rust-v0.142.0-alpha.12, rust-v0.143.0-alpha.1 (no detailed changelog provided).

## Hot Issues
| Issue | Why It Matters |
|-------|----------------|
| [#28879 – Rate-limit cost per token jumped ~10-20x since June 16](https://github.com/openai/codex/issues/28879) | **Most upvoted and discussed** – gpt-5.5 Plus users see their 5-hour budget drain in 2–3 prompts instead of 20+. Community is alarmed; logs confirm token-level cost scaling without model change. |
| [#3962 – Play a sound when Codex finishes a prompt/task](https://github.com/openai/codex/issues/3962) | Consistent high demand (177 👍, 52 comments). Users want an audible completion signal for background workflows—a simple UX quality-of-life fix that keeps reappearing. |
| [#28224 – SQLite feedback logs can write ~640 TB/year](https://github.com/openai/codex/issues/28224) | **Now closed** after 85% log reduction fixes. Original report raised SSD endurance concerns for heavy users. Fix merged today via #29432 and #29457. |
| [#11984 – App UI slow/laggy during long sessions](https://github.com/openai/codex/issues/11984) | Electron performance regression. Multiple workarounds attempted; users on Pro plan report severe degradation after 30+ minute sessions. |
| [#15347 – Support moving workspace folders without losing thread history](https://github.com/openai/codex/issues/15347) | Persistent request from developers who reorganize projects. Threads remain bound to original paths, causing lost context after relocation. |
| [#18299 – Display dot files/folders in file viewer](https://github.com/openai/codex/issues/18299) | .agents/.codex directories hidden in sidebar – impacts configuration management and agent metadata visibility. |
| [#14461 – Windows Codex cannot start with WSL mode enabled](https://github.com/openai/codex/issues/14461) | `terminalShell=wsl` configuration crashes app startup. Impacts Windows users relying on WSL toolchains. |
| [#13846 – Threads disappear after restart on mapped network drives](https://github.com/openai/codex/issues/13846) | UNC path normalization issue (`//?/unc/...`) on Windows causes permanent thread loss. Reproducible. |
| [#24948 – Session logs grow to 700MB–2GB from compaction history](https://github.com/openai/codex/issues/24948) | Storage bloat from repeated compaction cycles; raw tool output accumulates without cleanup. Affects TUI users. |
| [#28504 – Pro account missing reset bank and referral entitlement](https://github.com/openai/codex/issues/28504) | $200/month Pro users unable to access advertised rate-limit reset credits or referral rewards. |

## Key PR Progress
| PR | What It Does |
|----|--------------|
| [#29493 – MCP: accept foreign absolute cwd for remote stdio](https://github.com/openai/codex/pull/29493) | Fixes Windows ↔ POSIX path mismatch for remote stdio MCP servers. A Windows absolute path (`C:\Users\...`) is now accepted by POSIX orchestrators. Critical for cross-platform MCP workflows. |
| [#29498 – Instrument rollout persistence bytes](https://github.com/openai/codex/pull/29498) | Adds 1%-sampled metrics for JSON payload sizes in thread persistence. Helps diagnose overhead from conditionally persisted completion events. |
| [#26704 + #26705 – TUI Plugin Sharing (remote catalog UI)](https://github.com/openai/codex/pull/26704) | 5-PR stack adding remote plugin catalog flows to TUI: loading/navigation states, admin-disabled plugins shown as read-only, counting/sorting by installation source. Final polish in #26705. |
| [#28426 – Share resumed rollout history](https://github.com/openai/codex/pull/28426) | Eliminates repeated deep-cloning of rollout history during thread resume. Reduces memory pressure for long-lived sessions. |
| [#28992 – Better expired Bedrock credential errors](https://github.com/openai/codex/pull/28992) | Amazon Bedrock `Signature expired:` now surfaces a clear recovery message instead of a generic `unexpected status` error. Important for AWS-integrated workflows. |
| [#28976 – Add MCP tool call error metrics](https://github.com/openai/codex/pull/28976) | Counts `CallToolResult.isError` as failed calls (distinct from transport-level failures) with new `codex.mcp.call.error` metric for observability. |
| [#27248 – PAC 5: network proxy system proxy routing](https://github.com/openai/codex/pull/27248) | Extends sandboxed command egress to use system proxy/PAC/WPAD resolution when `respect_system_proxy` is enabled. Part of ongoing proxy architecture overhaul. |
| [#29508 – Propagate dynamic tool failures in code mode](https://github.com/openai/codex/pull/29508) | Failed dynamic-tool responses now throw JavaScript exceptions in code mode instead of silently failing. Preserves successful call paths. |
| [#24092 – Reject unlowered PowerShell AST regions](https://github.com/openai/codex/pull/24092) | Security fix: prevents PowerShell safe-command bypass by rejecting AST constructs that cannot be lowered to command-word analysis. |
| [#29397–#29399 – Code-mode retry safety + cell ID overhaul](https://github.com/openai/codex/pull/29398) | Three-PR refactor: adds idempotency keys to cell creation, generates stable 16-char CellIds in Core, and makes pending frontiers generation-resumable. Foundation for reliable pause/resume in code execution. |

## Feature Request Trends
1. **Thread portability** – Move/copy workspace folders without losing thread history (#15347, high engagement). Users reorganize projects frequently and lose session context.
2. **Background workflow notifications** – Audible completion sound (#3962) and desktop notifications for approval prompts (#17716) are repeatedly requested for non-blocking workflows.
3. **File visibility** – Show dot files/directories in the app sidebar (#18299). Developers need access to `.agents/`, `.codex/`, and other metadata directories.
4. **PR body customization** – Let users prompt the PR body template rather than just appending instructions (#10639). Users want control over `pull_request_template.md` interaction.
5. **Cross-platform path compatibility** – Multiple issues on Windows (#13846, #14461, #15179) and non-ASCII paths (#15499, #15711) indicate systemic path normalization problems.

## Developer Pain Points
- **Rate-limit cost instability** – #28879 shows token-cost multipliers varying 10–20x without model changes, draining budgets unpredictably. Most urgent community concern.
- **Session persistence fragility** – Thread loss (#13846, #14370), resume failures (#14396), and ballooning logs (#24948) erode trust in long-running workflows.
- **Windows ecosystem fragmentation** – WSL startup crash (#14461), sandbox ACL failures (#15179), UAC installer detection (#26477), missing native pipes (#26587), and mouse hijacking (#16188) make Windows the most buggy platform.
- **UI performance under load** – Laggy sessions (#11984) and checklist stalling (#14390) suggest Electron rendering bottlenecks for long prompts.
- **Approval model friction** – Users with full-access mode report being asked for approval on every action (#29043), while approval prompts cancel dictation (#13590). The sandbox permission UX needs refinement.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-23

## Today's Highlights
No new releases shipped in the last 24 hours, but the team landed several high-signal fixes addressing critical bugs around file corruption, tool-call cancellation safety, and configuration merging. Community-submitted PRs continue to drive the bulk of activity, particularly around the A2A server, MCP compliance, and telemetry hardening. A notable security PR remediates GitHub Actions workflow risks from untrusted public inputs.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** [priority/p1, 7 comments]  
   The follow-up epic to behavioral evals has generated 76 tests across 6 Gemini variants. The team is formalizing component-level eval infrastructure — a foundational enabler for agent quality gates.

2. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** [priority/p1, 7 comments, 👍2]  
   Critical bug: `codebase_investigator` subagent reports `"success"` even when it hit `MAX_TURNS` and performed zero analysis. This false-positive masks agent failures and undermines trust in subagent results.

3. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** [priority/p1, 7 comments, 👍8]  
   Community upvoted: the generalist subagent hangs indefinitely on simple tasks (e.g., folder creation). The recommended workaround — disabling sub-agent use entirely — is a blunt instrument that nullifies the agent architecture.

4. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** [priority/p2, 6 comments]  
   Custom skills (e.g., Gradle, Git) are defined but almost never auto-invoked. Users must explicitly instruct the model, which defeats the purpose of declarative skill configuration.

5. **[#25166 — Shell command execution gets stuck with “Waiting input”](https://github.com/google-gemini/gemini-cli/issues/25166)** [priority/p1, 4 comments, 👍3]  
   Simple CLI commands that finish cleanly still appear as awaiting input, causing the agent to hang. A common frustration that breaks interactive workflows.

6. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** [priority/p2, 5 comments]  
   Auto Memory sends transcripts to an extraction model before redacting secrets. The prompt-based redaction is not deterministic, meaning secrets may leak into model context before filtering.

7. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** [priority/p2, 5 comments]  
   Sessions with low information density are never marked as processed, leading to infinite retries. The system can saturate its own queue on noisy sessions.

8. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** [priority/p1, 4 comments]  
   Browser agent crashes on Linux Wayland displays. A recurring compatibility issue for Linux users running modern desktop environments.

9. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** [priority/p2, 3 comments]  
   Hitting the model’s tool limit triggers a 400 error with no graceful degradation. Users with many MCP servers or custom tools effectively break the CLI.

10. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** [priority/p2, 3 comments, 👍1]  
    The model occasionally uses `git reset --force`, `rm -rf`, or other destructive commands when safer alternatives exist. A request for safety rails on high-risk operations.

## Key PR Progress

1. **[#28065 — Bump node google-auth-library version to 10.8.1](https://github.com/google-gemini/gemini-cli/pull/28065)** [size/xs]  
   Follow-up patch for an auth library bugfix in google-cloud-node#8701. Simple dependency bump with upstream implications for GCP-authenticated sessions.

2. **[#28000 — Fix Jupyter Notebook and JSON corruption in write_file](https://github.com/google-gemini/gemini-cli/pull/28000)** [size/m, CLOSED]  
   Critical bugfix merged: `write_file` silently corrupted `.ipynb` and JSON files, causing Colab/JupyterLab to discard changes. Resolves a latent data-loss vector.

3. **[#28015 — Implement Cloud Run webhook ingestion service](https://github.com/google-gemini/gemini-cli/pull/28015)** [size/l, OPEN]  
   New Caretaker Agent infrastructure: a Cloud Run service that ingests GitHub webhooks, validates signatures, stores issues via Firestore, and publishes to Pub/Sub. Automates triage pipeline.

4. **[#28053 — Defensive path resolution for @-prefixed files + macOS test fixes](https://github.com/google-gemini/gemini-cli/pull/28053)** [size/xl, OPEN]  
   Fixes a critical bug where `read_file`/`write_file`/`replace` fail on `@policies/new-policies.txt` format paths. Also repairs macOS CI test suite.

5. **[#28100 — Register Disposables leaked by comma operators](https://github.com/google-gemini/gemini-cli/pull/28100)** [size/s, priority/p2]  
   JavaScript comma operator bug in VS Code extension: `(A, B)` collapsed to only `B`, so half of all disposables were never registered. Results in resource leaks.

6. **[#28099 — Show descriptive sandbox label instead of “current process”](https://github.com/google-gemini/gemini-cli/pull/28099)** [size/s, priority/p2]  
   Fixes #26697: On macOS with seatbelt profiles, the footer now displays the actual sandbox name instead of the generic “current process.”

7. **[#28098 — Update public workflow trust and readme](https://github.com/google-gemini/gemini-cli/pull/28098)** [size/l, CLOSED]  
   Security remediation: removes `GEMINI_CLI_TRUST_WORKSPACE: 'true'` from public workflows and disables core tools. Prevents secret exfiltration via untrusted issue/PR inputs.

8. **[#28096 — Drop late tool calls after SIGINT cancellation](https://github.com/google-gemini/gemini-cli/pull/28096)** [size/m, priority/p2]  
   Closes #28091: A SIGINT during tool-call streaming could still execute late-arriving provider chunks as side effects. Now properly discards them on cancellation.

9. **[#28094 — Deep-merge user and workspace settings for A2A server](https://github.com/google-gemini/gemini-cli/pull/28094)** [size/m, priority/p2]  
   Shallow object spread was silently dropping nested sections (`tools`, `telemetry`, etc.) when merging workspace over user settings. Deep merge fixes configuration loss.

10. **[#28089 — Implement MCP elicitation (form + url) capability](https://github.com/google-gemini/gemini-cli/pull/28089)** [size/l, priority/p2]  
    Implements the 2025-11-25 MCP elicitation spec for forms and URLs. Enables interactive resource acquisition from MCP servers, closing two previously deferred feature requests (#15613, #22249).

## Feature Request Trends

- **Agent self-awareness & transparency**: Multiple issues request that the CLI understand its own flags, hotkeys, and capabilities so it can act as its own expert guide (#21432). Subagent trajectories should be shareable via `/chat share` (#22598).
- **Safety rails & permission controls**: Strong demand for guards against destructive operations (git force, destructive shell commands) with user confirmation (#22672). Also: subagents running without consent (#22093).
- **AST-aware code understanding**: Two issues (#22745, #22746) explore AST-aware file reads, searches, and codebase mapping to reduce token waste and improve navigation precision.
- **Memory system hardening**: Multiple issues from one author (#26523, #26516, #26522, #26525) point to a coordinated push to quarantine invalid memory patches, fix indefinite retries on low-signal sessions, and add deterministic secret redaction.
- **Browser agent resilience**: Requests for automatic session takeover on locked profiles, lock recovery, and Wayland compatibility (#22232, #21983).

## Developer Pain Points

- **Agent unreliability**: The most recurring frustration is agents that hang, report false success, or ignore configuration (maxTurns, disabling sub-agents). Issues #22323, #21409, #21968, and #25166 are all P1/P2 with sustained community engagement.
- **Tool limit crashes**: Hitting 128+ tools causes hard 400 errors with no graceful fallback (#24246). No tool prioritization or filtering mechanism exists.
- **File corruption**: Silent corruption of `.ipynb` and JSON files via `write_file` (#28000) erodes confidence in file operations — the top recently merged fix.
- **Configuration merging defects**: Shallow merges in A2A settings (#28094) and ignored settings.json overrides (#22267) mean users’ explicit configurations are silently discarded.
- **Memory system inefficiency**: Auto Memory retries low-signal sessions forever (#26522), logs secrets before redaction (#26525), and silently drops invalid patches (#26523) — a cluster of systemic reliability issues under active investigation.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-23

## Today's Highlights
Version `1.0.64-3` shipped with a new HTTP(S) proxy user setting and fixes for session resume with spaces and unsupported slash commands in remote-hosted sessions. The community is closely watching the growing need for per-response timers (three related feature requests), a recurring MCP registry interpolation bug, and an escalating concern around unexpected AI-credit consumption on session restart/resume operations.

## Releases
**v1.0.64-3** (latest)
- **Added:** User setting for HTTP(S) proxy configuration
- **Fixed:** Resume sessions by name even when the name contains spaces; hide unsupported slash commands in remote-hosted sessions

**v1.0.64-2**
- **Added:** Setting to hide conversation scrollbar; inline image rendering in the CLI; argument-hint frontmatter support for skills; OpenTelemetry metadata for compaction spans (`gen_ai.conversation.compacted=true`)

## Hot Issues (Top 10)

1. **#1632 — Support subfolders for skills**  
   *Area: plugins*  
   Users with 10+ custom skills want hierarchical organization instead of a flat folder. +20 👍, 8 comments, open since February.  
   [github/copilot-cli Issue #1632](https://github.com/github/copilot-cli/issues/1632)

2. **#3596 — "Not authenticated" error when resuming sessions with `/model`**  
   *Area: authentication, sessions, models*  
   Resuming a specific session breaks model listing; starting a new session works fine. +11 👍, trending bug.  
   [github/copilot-cli Issue #3596](https://github.com/github/copilot-cli/issues/3596)

3. **#3886 — Restarting/resuming sessions consumes AI credits**  
   *Area: sessions, models*  
   `/restart` and `/resume` reportedly burn ~174 AI credits per operation, despite documentation suggesting otherwise. 0 comments yet, but high urgency.  
   [github/copilot-cli Issue #3886](https://github.com/github/copilot-cli/issues/3886)

4. **#3278 — Display per-response elapsed time**  
   *Area: terminal-rendering*  
   No indication of generation duration, especially painful in autopilot mode. +1 👍.  
   [github/copilot-cli Issue #3278](https://github.com/github/copilot-cli/issues/3278)

5. **#3111 — Add a timer for Agent Thought duration**  
   *Area: terminal-rendering*  
   Mirrors #3278; users want visible "thinking time" counters.  
   [github/copilot-cli Issue #3111](https://github.com/github/copilot-cli/issues/3111)

6. **#3055 — Execution timer for `shell` tool**  
   *Area: tools*  
   Third request in this family — shell command runtime visibility remains a common pain point.  
   [github/copilot-cli Issue #3055](https://github.com/github/copilot-cli/issues/3055)

7. **#3887 — `/mcp` install from registry doesn't interpolate `packageArguments` variables**  
   *Area: MCP*  
   Raw placeholders (e.g. `{ado_org}`) are written literally into `mcp-config.json` instead of substituted. Blocking registry-based MCP workflows.  
   [github/copilot-cli Issue #3887](https://github.com/github/copilot-cli/issues/3887)

8. **#1579 — Copilot CLI ignores MCP server "instructions"**  
   *Area: configuration, MCP*  
   MCP lifecycle instructions meant to guide LLM behavior are discarded. +3 👍, open since February.  
   [github/copilot-cli Issue #1579](https://github.com/github/copilot-cli/issues/1579)

9. **#3885 — Long text not scrolling inside input**  
   *Area: input-keyboard, terminal-rendering*  
   Overflow text in the textarea scrolls the outer view instead of the input. Affects editing of long prompts.  
   [github/copilot-cli Issue #3885](https://github.com/github/copilot-cli/issues/3885)

10. **#3881 — Quota overcharged: 6x model subtracted 5% instead of 2%**  
    *Area: models*  
    User reports a 5% credit deduction for a request that should have consumed 2%. 3% overcharge dispute.  
    [github/copilot-cli Issue #3881](https://github.com/github/copilot-cli/issues/3881)

## Key PR Progress
No pull requests were updated or created in the last 24 hours.

## Feature Request Trends
Three distinct but related feature requests (#3278, #3111, #3055) converge on **timing visibility** — users want to see both agent thinking time and shell command execution duration. The subfolder organization for skills (#1632) and i18n support for top-10 languages (#3883) represent the strongest organizational and accessibility demands. MCP lifecycle compliance (#1579, #3887) continues to be a recurring theme.

## Developer Pain Points
- **Session resume fragility**: Authentication state is lost (#3596) and AI credits are incorrectly consumed (#3886) during resume/restart operations.
- **MCP configuration gaps**: Registry variable interpolation is broken (#3887) and lifecycle instructions are ignored (#1579), breaking advanced MCP integrations.
- **Timing opacity**: No built-in elapsed-time indicators for responses, agent thoughts, or shell commands (three separate issues).
- **Credit accounting errors**: Users report significant quota overcharges with premium model multipliers (#3881), eroding trust in billing accuracy.
- **Input & rendering quirks**: Long-text scrolling (#3885) and file-reference autocompletion regressions (#3854) degrade daily editing workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-06-23

---

## Today's Highlights

The Kimi Code CLI team shipped **v1.48.0** with improved tool-call escalation handling and reasoning content fixes. Meanwhile, the community is buzzing around a critical **memory system feature request** (#1283) and multiple **MCP server loading bugs** (#2457, #2464, #2469) that are causing workflow disruptions. A promising **Monitor tool PR** (#2471) for real-time stdout streaming has also been opened.

---

## Releases

### v1.48.0 (Released 2026-06-22)
- **Fix:** Round-trip empty reasoning content in `kosong` ([PR #2446](https://github.com/MoonshotAI/kimi-cli/pull/2446))
- **Feature:** Escalating repeated-tool-call reminders and force-stop on dead-end streaks in `soul` ([PR #2466](https://github.com/MoonshotAI/kimi-cli/pull/2466))
- **Chore:** Internal release bump to 1.48.0 and kosong 0.54.0 ([PR #2467](https://github.com/MoonshotAI/kimi-cli/pull/2467))

---

## Hot Issues

1. **[#1283] Feature Request: Memory System**  
   *Persistent context across sessions*  
   Created Feb 2026, still active with 6 comments. This is the most upvoted feature request—community heavily wants AI-managed and user-defined memory for context persistence.  
   [Issue Link](https://github.com/MoonshotAI/kimi-cli/issues/1283)

2. **[#2457] Bug: MCP server auto-discovery after deletion causes 400 errors**  
   *Deleted MCP servers are re-discovered, leading to unfixable 400 errors*  
   Affects v0.15.0. User reports the CLI stubbornly re-adds servers, breaking workflows permanently.  
   [Issue Link](https://github.com/MoonshotAI/kimi-cli/issues/2457)

3. **[#2469] Bug: `kimi web` launches MCP servers from CLI install dir**  
   *Workspace-relative MCP tools break because servers are started from the wrong directory*  
   Fresh issue affecting v0.18.0. Critical for users relying on relative paths in MCP configurations.  
   [Issue Link](https://github.com/MoonshotAI/kimi-cli/issues/2469)

4. **[#2468] Bug: CLI hangs after detached child-process tool call**  
   *Process hangs indefinitely*  
   Reproduced on v1.47.0 with local mock provider on Linux. No comments yet, but suggests a serious blocking issue.  
   [Issue Link](https://github.com/MoonshotAI/kimi-cli/issues/2468)

5. **[#2465] Bug: `kosong` emits invalid `reasoning_effort: null`**  
   *Breaks strict APIs, does not disable reasoning*  
   OpenAILegacy provider sends `null` instead of omitting the field, causing schema violations.  
   [Issue Link](https://github.com/MoonshotAI/kimi-cli/issues/2465)

6. **[#2464] Bug: `kimi acp` does not load MCP servers**  
   *`--mcp-config-file` is inert in ACP mode*  
   MCP tools work in interactive mode but break in ACP mode—major gap for programmatic use.  
   [Issue Link](https://github.com/MoonshotAI/kimi-cli/issues/2464)

---

## Key PR Progress

1. **[#2471] feat(tools): Add Monitor tool for per-line stdout streaming**  
   *Feature proposal*  
   Adds a streaming counterpart to background tools, enabling real-time output monitoring. No related issue yet.  
   [PR Link](https://github.com/MoonshotAI/kimi-cli/pull/2471)

2. **[#2467] chore(release): bump kimi-cli to 1.48.0 and kosong to 0.54.0**  
   *Merged*  
   Internal release with `kosong[contrib]` pin sync. No changelog entries.  
   [PR Link](https://github.com/MoonshotAI/kimi-cli/pull/2467)

3. **[#2466] feat(soul): escalate repeated-tool-call reminders and force-stop**  
   *Merged*  
   Ports repeated-tool-call handling from kimi-code: 3+ consecutive calls trigger escalating reminders (r1/r2/r3), then force-stop on dead-end streak.  
   [PR Link](https://github.com/MoonshotAI/kimi-cli/pull/2466)

---

## Feature Request Trends

- **Memory System (#1283):** Persistent context across sessions remains the top community desire, with support for both automatic AI-managed notes and manual user-defined instructions.
- **MCP server reliability:** Multiple issues (#2457, #2464, #2469) indicate strong demand for robust MCP server lifecycle management—particularly proper scoping, deletion handling, and ACP mode support.

---

## Developer Pain Points

1. **MCP server management bugs**  
   Three distinct MCP-related issues surfaced in 24 hours: auto-recovery of deleted servers (#2457), wrong working directory in `kimi web` (#2469), and inert config in ACP mode (#2464). This is the top pain point.

2. **CLI hangs and blocking issues**  
   A process hang after detached tool calls (#2468) and invalid API payloads (#2465) suggest stability and compliance gaps that will block pipeline usage.

3. **ACP mode incompleteness**  
   The fact that `kimi acp` ignores `--mcp-config-file` (#2464) frustrates users seeking headless/automated workflows—a recurring theme from past digests.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**2026-06-23**

---

## Today's Highlights

The community is feeling the strain of persistent stability issues this week, with major thread **#20695 "Memory Megathread"** dominating discussion. Multiple reports of "Worker has been terminated" crashes (issues **#28015** and **#32694**) are eroding developer trust in session reliability. On the positive side, the MCP ecosystem is seeing strong contributions, including a new namespaced plugin hook API from core team members, and resumed efforts to bring native Git GUI functionality into the desktop app. A large-scale session migration bug has also stranded pre-migration data, creating a significant data loss concern for long-term users.

---

## Releases

No new releases in the last 24 hours. The latest available version remains **1.17.9**.

---

## Hot Issues

1. **[#20695 - Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (99 comments, 72 👍)  
   The central collection point for all memory-related reports continues to grow. The maintainers explicitly request heap snapshots (not LLM-generated guesses) to diagnose leaks. This is the highest-engagement open issue and signals a systemic resource management problem.

2. **[#32832 - MCP tool can no longer return image attachments](https://github.com/anomalyco/opencode/issues/32832)** (22 comments)  
   A clear regression: MCP tools returning images work in 1.17.4 but break in 1.17.5+. Image rendering in tool outputs is critical for data analysis and visualization workflows.

3. **[#28567 - Full MCP client capabilities](https://github.com/anomalyco/opencode/issues/28567)** (17 comments, 24 👍)  
   The community is pushing for parity with the latest MCP specification. Central feature requests include streaming tool calls and prompt templates. High consensus but still no concrete timeline from maintainers.

4. **[#4489 - Ephemeral one‑off sessions for `opencode run`](https://github.com/anomalyco/opencode/issues/4489)** (12 comments, 12 👍)  
   Author volunteers to implement this feature. Persistent sessions for ad-hoc scripting is wasteful; ephemeral sessions would streamline CI/CD and automation use cases.

5. **[#28015 - Worker terminated with multiple subagents](https://github.com/anomalyco/opencode/issues/28015)** (11 comments)  
   Parallel subagent execution causes the TUI to crash irrecoverably. Affected users cannot resume existing sessions. This is a high-severity blocker for power users running multi-agent workflows.

6. **[#32694 - Worker terminated on first message](https://github.com/anomalyco/opencode/issues/32694)** (6 comments, 4 👍)  
   A more aggressive variant of the same worker termination bug: crashes immediately after the first interaction. Highly reproducible with search-enabled providers.

7. **[#33213 - Server mode accumulates 26.8 GiB memory](https://github.com/anomalyco/opencode/issues/33213)** (4 comments)  
   Long-running `opencode serve` instances show extreme memory fragmentation, reaching 26.8 GiB memory peak and 2.86 GiB swap usage within 1.5 days. Production deployment viability is questioned.

8. **[#33411 - Scrollbar hidden by default in TUI](https://github.com/anomalyco/opencode/issues/33411)** (3 comments)  
   A UX bug: long conversations have no visible scrollbar, forcing users to rely on keyboard navigation. Small fix, high impact on daily usability.

9. **[#33447 - Pre-migration sessions stranded](https://github.com/anomalyco/opencode/issues/33447)** (1 comment)  
   Sessions created before the June event-sourcing migration are invisible and unresumable. Data still exists in legacy tables but is disconnected from the new session picker. Potential data loss for long-time users.

10. **[#33455 - Plugins silently not loaded since 1.17.0](https://github.com/anomalyco/opencode/issues/33455)** (2 comments)  
    Config-defined plugins (`plugin` array) are silently ignored with no error or warning since v1.17.0. Affects all plugins — both npm packages and local paths.

---

## Key PR Progress

1. **[#33416 - Namespaced plugin hook API](https://github.com/anomalyco/opencode/pull/33416)**  
   Replaces the v2 plugin host surface with namespaced `hook` and `reload` capabilities. Adds Promise-based plugin definitions and scoped reconciliation. Core infrastructure improvement by maintainer **thdxr**.

2. **[#33465 - `--no-open` flag for `opencode web`](https://github.com/anomalyco/opencode/pull/33465)**  
   Prevents automatic browser launch in headless environments (Docker, CI). Backward-compatible, small but critical for server deployments.

3. **[#33460 - Preserve queue after provider failure](https://github.com/anomalyco/opencode/pull/33460)**  
   Distinguishes terminal provider failures from transient ones, preserving pending work for explicit resume. Key fix for multi-provider workflows where one backend goes down.

4. **[#33464 - Fix websearch SSE handling](https://github.com/anomalyco/opencode/pull/33464)**  
   Replaces incorrect `.text()` with proper SSE response body collection. Fixes "Tavily API error: 400" in the built-in websearch tool.

5. **[#33462 - Expose Copilot long-context model](https://github.com/anomalyco/opencode/pull/33462)**  
   Exposes GitHub Copilot long-context model as `-long-context` opt-in, preserving accurate tiered pricing from Copilot's token pricing API. Important for enterprise users.

6. **[#33458 - Scope file autocomplete to session](https://github.com/anomalyco/opencode/pull/33458)**  
   Fixes file autocomplete and mention paths to be relative to the current session location instead of the project root. Reduces errors in multi-session workflows.

7. **[#33017 - Edit files directly in the app](https://github.com/anomalyco/opencode/pull/33017)**  
   Adds edit mode with save/back-to-read-only toggle. Users no longer need to ask the AI for small edits. A long-standing UX wish granted.

8. **[#33246 - Make system prompt immutable after session creation](https://github.com/anomalyco/opencode/pull/33246)**  
   Caches system prompt per session ID to prevent unintended mutation. Closes **#29672**. Improves consistency in long-running sessions.

9. **[#13885 - Native status line template system](https://github.com/anomalyco/opencode/pull/13885)**  
   Merged: users can define per-target status line templates with built-in variables, shell commands, and plugin-provided data. Closes **#8619**.

10. **[#33463 - Guard against deleting backups/credentials](https://github.com/anomalyco/opencode/pull/33463)**  
    Closes **#33379**: prevents cleanup tasks from deleting backup files and credentials. Safety fix for users whose AI agents run broad cleanup instructions.

---

## Feature Request Trends

1. **Git GUI Integration (Desktop)**  
   Two parallel issues (**#15886**, **#26558**) request a native Git panel for staging, committing, and pushing without terminal commands. Meanwhile, PR **#28828** adds the backend API endpoints to support this, suggesting imminent delivery.

2. **Extended MCP Client Capabilities**  
   Issue **#28567** (24 👍) demands full MCP specification compliance including streaming tool calls and prompt templates. Expect increasing pressure as more MCP servers adopt the latest spec.

3. **Cross-Project Session Management**  
   Issue **#31932** requests a session picker that spans multiple projects, motivated by developers working across several repos simultaneously.

4. **Rate Limiting Middleware**  
   Issue **#33459** requests built-in rate limiting for providers with strict quotas (e.g., Alibaba Cloud Model Studio). Will become more common as custom enterprise model endpoints proliferate.

5. **Persistent Plugin Status Display**  
   Issue **#18969** proposes `tui.footer.items` for persistent status display (token counters, TPS meters) as an alternative to disruptive toast notifications.

---

## Developer Pain Points

- **"Worker has been terminated" crashes** — Two separate issues report TUI crashes under different circumstances (parallel agents, single message). This is the #1 reliability concern this week.
- **Memory leaks in server/long-running mode** — The Memory Megathread (#20695) and the 26.8 GiB server memory issue (#33213) point to serious resource management problems in background sessions.
- **MCP regression in image handling** — Image attachments from MCP tools broken since 1.17.5, a hard blocker for any multimodal workflow.
- **Silent plugin loading failures** — Since 1.17.0, plugins listed in config are ignored without any error message (#33455). Debugging this is time-consuming.
- **Pre-migration session data stranded** — The event-sourcing migration broke session resumption for pre-migration users, causing potential data loss with no migration path (#33447).
- **Config-defined agents/model selection broken** — Desktop UI unable to cycle/select agents for a given model (#33414). High annoyance for multi-model users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-23

## Today's Highlights

Pi v0.79.10 ships with a significant extension API improvement: compaction events now expose the reason and retry status, closing a long-standing gap between the RPC protocol and extension surface. The community continues to converge around provider extensibility, with two major PRs adding Merge Gateway and Anthropic Vertex providers, alongside a flurry of fixes addressing tool call validation, URL linkification, and agent identity resolution via daemon.

## Releases

**v0.79.10** — Extension compaction event context  
Extension `session_before_compact` and `session_compact` events now include `reason` (`"manual" | "threshold" | "overflow"`) and `willRetry`, enabling extensions to differentiate manual `/compact`, auto-compaction, and overflow retry flows. This closes a long-standing feature gap exposed by [Issue #5217](https://github.com/earendil-works/pi/issues/5217).

## Hot Issues

1. **[#4945](https://github.com/earendil-works/pi/issues/4945) — openai-codex Connection Reliability Issues** (64 comments, 30 👍)  
   Users report `Working...` hangs with no streamed text or tool calls. Only Escape key recovers, producing an aborted assistant turn. High community engagement suggests this is the top pain point for OpenAI Codex users this week.

2. **[#3357](https://github.com/earendil-works/pi/issues/3357) — Official local LLM provider extension** (27 comments, 36 👍)  
   Long-running feature request to dynamically fetch model lists from `{baseUrl}/models`, enabling seamless integration with llama.cpp, Ollama, LM Studio. The high vote count signals strong demand for local-first workflows.

3. **[#5653](https://github.com/earendil-works/pi/issues/5653) — Move off Shrinkwrap** (15 comments)  
   Duplicate `pi-ai` copies appear when both `pi-ai` and `pi-coding-agent` are direct dependencies because the API provider registry is module-level. The community is debating package management alternatives.

4. **[#5916](https://github.com/earendil-works/pi/issues/5916) — Support provider extensions with model aliases and improve search** (11 comments)  
   Configuring OpenRouter providers via `models.json` is cumbersome without a UI. User needs explicit model alias declaration in provider configs.

5. **[#4748](https://github.com/earendil-works/pi/issues/4748) — `getKeybindings()` realm/instance singleton breaks extensions** (5 comments)  
   Extensions loaded by `pi-coding-agent` resolve `pi-tui` from their own `node_modules`, creating a separate singleton. Cross-extension keybinding configuration remains broken.

6. **[#5871](https://github.com/earendil-works/pi/issues/5871) — Anthropic OAuth-token detection hardcoded to sk-ant-oat** (4 comments)  
   The hardcoded substring check prevents users with custom auth configurations from using OAuth tokens. PR [#5977](https://github.com/earendil-works/pi/pull/5977) is in progress to address this.

7. **[#5263](https://github.com/earendil-works/pi/issues/5263) — Make in-session model changes ephemeral by default** (4 comments, 4 👍)  
   Users want `/model` to only affect the active session, with a separate "Default model" setting for persistence. Current behavior silently overwrites global defaults.

8. **[#5751](https://github.com/earendil-works/pi/issues/5751) — `sendUserMessage()` doesn't return Promise** (3 comments)  
   Extension API methods resolve immediately instead of waiting for agent processing, causing fire-and-forget behavior in print mode. A critical usability bug for extension authors.

9. **[#5810](https://github.com/earendil-works/pi/issues/5810) — RPC: expose session entries and tree** (3 comments)  
   Users driving Pi from external tools need read-only access to session state via RPC. The proposed `get_entries` and `get_tree` commands would enable richer integrations.

10. **[#5932](https://github.com/earendil-works/pi/issues/5932) — Expose `navigateTree()` on ExtensionContext** (3 comments)  
    Extension authors building custom agent workflows (e.g., `/goal` implementations) need tree navigation outside of command contexts.

## Key PR Progress

1. **[#5987](https://github.com/earendil-works/pi/pull/5987) — fix(coding-agent): resolve --session by agent name via identity daemon**  
   Fixes core's failure to query the identity daemon when `--session` is passed an agent name, completing the daemon lookup loop.

2. **[#5859](https://github.com/earendil-works/pi/pull/5859) — fix(ai): send responses prompts as instructions**  
   OpenAI Responses APIs expect system prompts in top-level `instructions`, not as replayed `input` messages. Fixes compatibility for OpenAI, Azure OpenAI, and Codex Responses.

3. **[#5985](https://github.com/earendil-works/pi/pull/5985) — feat(ai): add Merge Gateway provider**  
   New built-in provider reaching 40+ models through a single API key. Mirrors the existing OpenAI-compatible provider pattern.

4. **[#5981](https://github.com/earendil-works/pi/pull/5981) — Linkify plain URLs in Text output**  
   Auto-links `http://`/`https://` URLs with OSC 8 hyperlinks when terminal supports it. Fixes the long-URL wrapping issue reported in [#5978](https://github.com/earendil-works/pi/issues/5978).

5. **[#5977](https://github.com/earendil-works/pi/pull/5977) — feat(ai): allow explicit authMode overrides for Anthropic provider**  
   Introduces `authMode` compatibility flag, removing hardcoded `sk-ant-oat` heuristic. Addresses [#5871](https://github.com/earendil-works/pi/issues/5871).

6. **[#5262](https://github.com/earendil-works/pi/pull/5262) — feat(ai): add Anthropic Vertex provider**  
   Opens (still open) PR adding a built-in provider for Claude on Google Cloud Vertex AI, reusing the Anthropic Messages streaming path.

7. **[#5970](https://github.com/earendil-works/pi/pull/5970) — feat: add auto-router extension for DeepSeek V4 Pro/Flash**  
   Community extension that routes simple tasks to Flash and complex tasks to Pro, saving 60-70% API costs. Demonstrates the emerging pattern of cost-optimization extensions.

8. **[#5962](https://github.com/earendil-works/pi/pull/5962) — fix(coding-agent): add compaction reason and willRetry**  
   Implements the v0.79.10 release feature, closing [#5217](https://github.com/earendil-works/pi/issues/5217). Extensions can now distinguish manual, threshold, and overflow compaction.

9. **[#5963](https://github.com/earendil-works/pi/pull/5963) — fix(ai): reject malformed final tool call arguments**  
   Validates final streamed tool-call arguments in the shared AI stream path, failing with `stopReason: "error"` before malformed data reaches tool execution.

10. **[#5955](https://github.com/earendil-works/pi/pull/5955) — fix(coding-agent): add secret-disclosure scope discipline**  
    Adds safety measures to prevent Pi from sweeping secrets into destinations, addressing a vulnerability where broad file copy tasks could leak secret-bearing files.

## Feature Request Trends

- **Provider ecosystem expansion**: Strong demand for new built-in providers (Merge Gateway, Anthropic Vertex, Neuralwatt, local LLM support) and dynamic model list fetching. The community clearly wants Pi to be a universal LLM client.
- **Session management APIs**: Multiple requests for exposing session switching, creation, and tree navigation on `ExtensionContext` (not just command contexts). Extension authors are building bespoke agent workflows that need full session lifecycle control.
- **Cost optimization**: The DeepSeek auto-router extension and discussions around model selection highlight growing interest in intelligent, cost-aware routing strategies.
- **RPC-driven automation**: Developers want to drive Pi programmatically via RPC, with explicit requests for session entry access, tree inspection, and remote session management.

## Developer Pain Points

- **Module duplication with Shrinkwrap** ([#5653](https://github.com/earendil-works/pi/issues/5653)): When two packages depend on `pi-ai`, the module-level provider registry creates identical but distinct copies, breaking cross-extension configuration.
- **Hardcoded provider assumptions** ([#5871](https://github.com/earendil-works/pi/issues/5871)): Both Anthropic OAuth detection and provider labeling (ZAI vs Z.AI) rely on brittle string heuristics, frustrating users with non-standard setups.
- **Silent state mutation** ([#5263](https://github.com/earendil-works/pi/issues/5263), [#5976](https://github.com/earendil-works/pi/issues/5976)): `/model` and similar commands silently overwrite global defaults without warning, violating user expectations of ephemeral session-scoped changes.
- **Extension API asynchrony gaps** ([#5751](https://github.com/earendil-works/pi/issues/5751)): `sendUserMessage()` and `sendMessage()` not returning Promises causes unpredictable fire-and-forget behavior, particularly harmful in print mode.
- **Stream reliability with OpenAI Codex** ([#4945](https://github.com/earendil-works/pi/issues/4945)): Stuck `Working...` states with no error recovery path remain the top user complaint for the OpenAI provider.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**2026-06-23 Edition**

---

## Today's Highlights

A massive wave of input validation fixes landed today, with **tt-a1i** submitting 20+ PRs addressing fractional and unsafe parameter acceptance across CLI commands, MCP configuration, and core tooling. The community also raised critical concerns around CI/CD security and subagent token counting accuracy. A new **nightly release (v0.18.5)** auto-publishes the VSCode companion extension on stable releases.

---

## Releases

- **v0.18.5-nightly.20260622.6bc3f853e** — Bug fixes and CI automation improvements. The VSCode companion extension now auto-publishes after stable releases.

---

## Hot Issues

1. **#5090 — Decouple Provider Identity from SDK Protocol**  
   *[CLOSED, feature-request]*  
   Proposes making `providerId` a free-form string (not an enum) with a new `Protocol` enum (`OPENAI | GEMINI | ANTHROPIC | QWEN_OAUTH`) that controls SDK routing. This would enable custom providers with arbitrary IDs while maintaining type safety. Community activity suggests strong interest in provider extensibility.

2. **#3877 — Missing API key error despite `.env` file**  
   *[OPEN, bug]*  
   User reports Qwen Code forces authentication selection on startup even when `OPENCODE_GO_API_KEY` is properly set in `~/.qwen/.env`. This longstanding issue (created May 6) continues to frustrate new users expecting seamless configuration.

3. **#5634 — Autofix tier-1 trusts LLM-applied labels**  
   *[OPEN, security, P2]*  
   A critical workflow vulnerability: `qwen-autofix.yml` fast-tracks issues labeled `status/ready-for-agent` into the develop-fix agent, but that label can be applied by an LLM processing untrusted issue text. The community flags this as an escalation-of-privilege risk.

4. **#5656 — Move tool-use summaries from history to loading indicator**  
   *[OPEN, feature-request, roadmap/terminal-ux]*  
   When fast models generate tool call summaries (e.g., "Fixed NPE in UserService"), they currently appear as separate lines in conversation history. The request: display these inline in the loading indicator for a cleaner UX.

5. **#5641 — Repeated shell tool results with OpenAI-compatible providers**  
   *[OPEN, bug, P2]*  
   Deterministic OpenAI-compatible providers cause Qwen Code to re-submit completed shell tool results. The reporter provides a standalone reproducer against the latest npm package, making this actionable.

6. **#5708 — Session list cursor accepts negative/unsafe values**  
   *[OPEN, bug, P3, welcome-pr]*  
   Pagination cursors derived from `mtimeMs` lack validation for negative or out-of-range values. This affects both REST and ACP HTTP `/session/list` endpoints.

7. **#5683 — Subagent token counting accuracy issue**  
   *[OPEN, bug, need-information]*  
   User reports subagent token consumption shows "29xx k tokens" — far exceeding configured limits. Requires investigation into counting logic for local LLM subagents.

8. **#5713 — Semi-invisible cursor in Alacritty**  
   *[OPEN, bug, welcome-pr]*  
   The terminal cursor renders faintly in Alacritty but correctly in Xterm. A rendering compatibility issue specific to this terminal emulator.

9. **#5611 — `web_fetch` can't fetch JSON APIs**  
   *[OPEN, bug, P2]*  
   The tool only sends `text/*` Accept headers, causing HTTP 415 errors when fetching JSON endpoints (e.g., GitHub REST API). Blocks workflows that need to query REST APIs.

10. **#5722 — Token speed display bugs**  
    *[OPEN, bug, P2, welcome-pr]*  
    Three rendering issues: `tok/s` disappears during thinking phase, stalls during tool calls, and displays inaccurate values. Affects real-time performance monitoring in the TUI.

---

## Key PR Progress

1. **#5724 — Isolate ACP integration tests via QWEN_HOME**  
   *[CLOSED]*  
    Spawns each ACP integration test with a per-agent `QWEN_HOME` to eliminate parallel-setting race conditions. Test-only fix preventing CI flakiness.

2. **#5723 — Strengthen PR gate with batch detection**  
   *[OPEN]*  
    Introduces batch submission detection and pattern matching to flag validation-noise PRs (11 of 20 PRs from one bot were deemed noise). Aims to reduce maintainer overhead.

3. **#5678 — Validate IDE server port env**  
   *[CLOSED]*  
    Ensures `QWEN_CODE_IDE_SERVER_PORT` is a valid TCP port (1–65535). Invalid values are ignored to avoid broken IDE discovery.

4. **#5699 — Declare integer tool params in JSON Schema**  
   *[CLOSED]*  
    Aligns `run_shell_command.timeout`, `monitor.max_events`, and `monitor.idle_timeout_ms` schema with runtime validation by marking them as `integer` instead of `number`.

5. **#5696 — Require integer LSP tool positions**  
   *[CLOSED]*  
    Tightens LSP tool schema: `line`, `character`, `endLine`, `endCharacter`, and `limit` now enforce `integer` type, preventing fractional LSP requests.

6. **#5693 — Require integer read_file ranges**  
   *[CLOSED]*  
    `offset` and `limit` for `read_file` tool now enforce integer validation, rejecting fractional line indexes.

7. **#4653 — Respect configurable agent ignore files**  
   *[OPEN, feature-request]*  
    Adds support for `.agentignore` and `.aiignore` alongside existing `.qwenignore`. Includes a `context.needsReview` hook for extensibility.

8. **#5561 — MCP servers hot-reload on settings change**  
   *[OPEN]*  
    Implements long-requested feature (#3696): editing `mcpServers` in `settings.json` now connects/disconnects servers live without restarting.

9. **#5638 — Refresh workspace provider defaults from daemon**  
   *[OPEN]*  
    `GET /workspace/providers` now builds snapshots daemon-side from fresh settings and environment, ensuring provider defaults reflect current state.

10. **#5711 — Clamp open file positions in VSCode**  
    *[OPEN]*  
    Fixes negative editor positions when `openFile` receives zero line/column values (e.g., `src/app.ts:0:0`). Normalizes to start-of-file.

---

## Feature Request Trends

The community is pushing in two primary directions:

1. **Provider Extensibility** — Demand for custom provider support with arbitrary IDs (#5090) and easier model addition for custom provider users (#4814) indicates a shift toward BYO-model flexibility.

2. **Terminal UX Refinement** — Requests include moving tool-use summaries to loading indicators (#5656) and fixing tok/s display bugs (#5722). Users expect a polished, real-time feedback experience in the TUI.

Secondary trends: ACP/gRPC parity for daemon commands (#5677), configurable ignore files (#4653 via PR), and MCP server hot-reload (#5561 via PR).

---

## Developer Pain Points

- **Configuration friction persists** — Issue #3877 (env var not respected) remains open for 48 days, indicating fundamental configuration loading issues that affect onboarding.
- **Validation gaps create subtle bugs** — A wave of 20+ PRs from one contributor all address the same class of bug: missing or insufficient input validation (fractional values, negative cursors, non-integer limits). This bulk submission itself became a maintainability concern (see PR #5723).
- **CI/CD security vulnerabilities** — Issue #5634 reveals that automated triage workflows are susceptible to label injection attacks via untrusted issue content. The autofix pipeline lacks human verification gates.
- **Token counting accuracy** — Issue #5683 suggests subagent token tracking may be systematically overcounting, impacting users who rely on token limits for cost management.
- **Terminal compatibility** — Alacritty-specific rendering bugs (#5713) highlight the challenge of maintaining consistent UI across diverse terminal emulators.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-23

## Today's Highlights

The project has completed its full rebrand from `deepseek-tui` to **CodeWhale**, with the legacy npm package deprecated and all development now under the new identity. A **v0.8.64 security release** is rolling, and the team is deep in the **v0.8.65 cycle** focused on Fleet architecture, provider-scoped routing, and multi-provider reliability. The community is actively reporting bugs around auto-spawn freezes, tool-call streaming regressions, and missing provider integrations.

## Releases

**v0.8.64 — CodeWhale** [GitHub Release](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.64)
- Finalizes the rebrand: canonical project/command/npm package name is now **CodeWhale**; legacy `deepseek-tui` npm package is deprecated
- Carries security/code-scanning hardening, auto-review/provenance rails, read-before-edit/apply_patch guardrails, and CI workflow fixes
- Bundle includes `codewhale` and `codewhale-tui` binaries with install scripts

## Hot Issues (10 noteworthy)

1. **[#2942 — CLOSED] CodeWhale会自问自答** — User reports the tool spontaneously executes unrequested commands, corrupting projects. High severity: the TUI acting without user input undermines trust. Community is watching for root cause analysis. [Issue](https://github.com/Hmbown/CodeWhale/issues/2942)

2. **[#3289 — OPEN] Regression fixture for fanout, Fleet workers, and TUI freeze resilience** — Auto-spawn freezes block TUI input/render/cancel. Critical for Fleet stability. 5 comments of debate on reproduction steps. [Issue](https://github.com/Hmbown/CodeWhale/issues/3289)

3. **[#2608 — OPEN] EPIC: Separate provider facts, model facts, offerings, and route resolution** — Architecturally foundational. The community & maintainers agree that mixing provider identity with model strings is the root cause of many routing bugs. [Issue](https://github.com/Hmbown/CodeWhale/issues/2608)

4. **[#2629 — OPEN] SiliconFlow and Tencent TokenHub auth/base-url route fixture** — Provider-specific 401 errors with unclear auth configuration. Users want a pattern, not a one-off hack. [Issue](https://github.com/Hmbown/CodeWhale/issues/2629)

5. **[#3320 — OPEN] Alibaba Bailian API key and provider onboarding fixture** — Missing API key integration prevents calls to Bailian. Popular Chinese cloud provider; high demand in East Asian markets. [Issue](https://github.com/Hmbown/CodeWhale/issues/3320)

6. **[#2989 — OPEN] Ollama/qwen3-coder premature completed-state regression** — Local route completion accounting is broken: stream ending ≠ successful completion. Affects Fleet/subagent run status for local models. [Issue](https://github.com/Hmbown/CodeWhale/issues/2989)

7. **[#2900 — OPEN] DSML tool-call streaming regression for SiliconFlow DeepSeek route** — Tool-call markup streams as plain text instead of being parsed as DSML invocations. Breaks tool use on Windows/SiliconFlow. [Issue](https://github.com/Hmbown/CodeWhale/issues/2900)

8. **[#3154 — OPEN] EPIC: Fleet execution substrate for profiled workers** — Core Fleet infrastructure. Community wants Fleet to be a "durable execution substrate" not a separate agent engine. [Issue](https://github.com/Hmbown/CodeWhale/issues/3154)

9. **[#3357 — OPEN] Baidu Qianfan custom/first-class provider route fixture** — Another major Chinese cloud provider with no working tool support. Users need `--provider` custom option for URL/API key/model config. [Issue](https://github.com/Hmbown/CodeWhale/issues/3357)

10. **[#2300 — OPEN] Multi-model compatibility, provider docs, and automatic Fleet loadout selection** — Users confused by `provider = vllm` vs `provider = openai` for local endpoints. Documentation gap + missing auto-selection. [Issue](https://github.com/Hmbown/CodeWhale/issues/2300)

## Key PR Progress (10 important)

1. **[#3424 — OPEN] test(provider): document DashScope OpenAI-compatible fixture** — Proves Alibaba Bailian / Model Studio DashScope works as an OpenAI-compatible route with proper scoping. [PR](https://github.com/Hmbown/CodeWhale/pull/3424)

2. **[#3423 — OPEN] docs(provider): document OpenRouter-compatible base URLs** — Validates and documents `provider = "openrouter"` + custom `base_url` for OpenRouter-compatible gateways. [PR](https://github.com/Hmbown/CodeWhale/pull/3423)

3. **[#3422 — OPEN] test(tui): cover Codex Responses retry edges** — Strengthens reliability for OpenAI Codex/Responses route with transient 503 regression coverage. [PR](https://github.com/Hmbown/CodeWhale/pull/3422)

4. **[#3370 — OPEN] feat(integrations): add WeCom intelligent robot bridge** — Community contribution adding enterprise WeChat integration. Shows growing commercial/enterprise demand. [PR](https://github.com/Hmbown/CodeWhale/pull/3370)

5. **[#3347 — CLOSED] v0.8.63 release train** — Merged 52 commits: subagent budgets, command extraction, reliability fixes, dependency bumps. [PR](https://github.com/Hmbown/CodeWhale/pull/3347)

6. **[#3373 — CLOSED] v0.8.64 security and release integration** — Carries the security hardening and code-scanning rails for the latest release. [PR](https://github.com/Hmbown/CodeWhale/pull/3373)

7. **[#3327 — OPEN] Add first-class sub-agent toggle** — Makes `features.subagents` configurable via `/config` commands (runtime + persistent). Addresses UX gap. [PR](https://github.com/Hmbown/CodeWhale/pull/3327)

8. **[#3169 — CLOSED] feat(tui): add /plugins slash command** — New TUI command to list and inspect discovered script plugin tools. [PR](https://github.com/Hmbown/CodeWhale/pull/3169)

9. **[#3168 — CLOSED] Runtime API Phase 0 + Phase 1** — Brand-neutral naming + dynamic tool protocol types. Renames user-facing strings from DeepSeek to CodeWhale. [PR](https://github.com/Hmbown/CodeWhale/pull/3168)

10. **[#3346 — CLOSED] style(clippy): fix clippy warnings** — Community cleanup PR running `cargo clippy --fix`. Lowers maintenance burden. [PR](https://github.com/Hmbown/CodeWhale/pull/3346)

## Feature Request Trends

- **Universal provider routing**: Top theme — users want a unified, documented way to configure any provider (DeepSeek, OpenAI, Alibaba, Baidu, SiliconFlow, Tencent, Xiaomi) without workarounds. The "provider descriptor" architecture in v0.8.65 is the answer.
- **Fleet/agent orchestration**: Heavy demand for Fleet profiles — users want configurable agent roles, loadouts, permissions, and delegation (Issues #3167, #3154, #3205).
- **WhaleFlow swarm synthesis**: Requests for a reduce/synthesis stage that merges many workers' outputs into one coherent result (Issue #3230).
- **Provider-scoped secrets**: Users want API keys from external commands/secret managers instead of plaintext in config files (Issue #3004).
- **Multi-provider fallback with visibility**: Automatic fallback when active provider is unavailable, with visible route switching — not silent vendor substitution (Issue #2574).

## Developer Pain Points

- **Auto-spawn freezes**: TUI freezing when Fleet/subagent workers spawn spontaneously — blocks input/render/cancel (Issue #3289). Highest recurrence among reliability reports.
- **Unrequested command execution**: CodeWhale "talking to itself" and corrupting projects — trust-destroying bug (Issue #2942, now closed but no root cause published).
- **Provider auth confusion**: Each provider (SiliconFlow, Bailian, Qianfan, Tencent) has a different auth scheme, and there's no standard onboarding path. Users are tired of "header hacks."
- **Tool-call streaming fragility**: DSML tool-call markup streaming as plain text on some routes (Issue #2900). Breaks tool use unpredictably.
- **Local model completion accounting**: Ollama/qwen3-coder streams ending early, marked as "completed" incorrectly (Issue #2989). Affects all local model workflows.
- **Rebrand migration friction**: Users still hit the deprecated `deepseek-tui` npm package; those on v0.8.x need clear migration documentation (linked `docs/REBRAND.md`).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*