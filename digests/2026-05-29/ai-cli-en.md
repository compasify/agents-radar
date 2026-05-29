# AI CLI Tools Community Digest 2026-05-29

> Generated: 2026-05-29 00:28 UTC | Tools covered: 9

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

# AI CLI Developer Tools Ecosystem: Cross-Tool Comparison Report
**Date:** 2026-05-29

---

## 1. Ecosystem Overview

The AI CLI tool landscape is experiencing a **convergence phase** where all major tools are racing toward multi-agent orchestration, extended thinking (reasoning) support, and remote/daemon operation modes. However, this convergence is creating a **stability crisis**—Claude Code's "thinking blocks cannot be modified" 400 errors, Copilot CLI's duplicate-item websocket failures, and Gemini CLI's subagent reliability issues all point to systemic challenges in managing long-running, stateful agent sessions. The community is demanding session resilience as a first-class feature, with users reporting that model updates, interruptions, or async completions can permanently brick sessions. Meanwhile, a **platformization trend** is emerging: tools are evolving from single-user CLI wrappers into extensible ecosystems with plugin systems (Claude Code, OpenCode), ACP protocol implementations (Kimi, Qwen), and remote-control APIs (Pi), signaling that the market is maturing toward enterprise-grade, integrable infrastructure.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | Open PRs (24h) | Release Status | Community Engagement |
|------|-----------------|----------------|----------------|---------------------|
| **Claude Code** | 10 (7+ thinking block bugs) | 4 (2 open, 1 closed, 1 merged) | **v2.1.154** (today) | Highest pain-point volume; 90+ comments on mega-thread |
| **OpenAI Codex** | 10 (regional gating, /compact regression) | 10 (heavy: 3-part suggestion engine, zsh-fork) | **rust-v0.135.0** (today) | Strong feature demand (35 👍 "Copy Plan") |
| **Gemini CLI** | 10 (subagent hangs, false success) | 10 (PTY fixes, OIDC auth, Amazon URL parsing) | **v0.44.1, v0.45.0-preview.1** (today) | Steady; subagent reliability dominates |
| **GitHub Copilot CLI** | 10 (duplicate-item websocket errors) | **0** (none updated in 24h) | **v1.0.56-0** (today) | Surging websocket errors; low PR activity |
| **Kimi Code CLI** | 10 (community trust, nested skills, ACP gaps) | 10 (undo fix, ACP MCP loading, shell fixes) | **No new release** | Active; strategic uncertainty (#2381) |
| **OpenCode** | 10 (GPT latency #29079: **102 comments**) | 10 (skill permissions, session move, Drizzle adapter) | **v1.15.12** (today) | Most commented issue across all tools; vibrant |
| **Pi** | 10 (Codex hang, cross-provider resume, tmux) | 10 (GC fix, remote APIs, name CLI flag) | **v0.77.0** (today) | Deep technical engagement; extension API emerging |
| **Qwen Code** | 10 (daemon parity, body timeout, computer use) | 10 (daemon /btw, TUI spacing, compaction model) | **v0.16.1-nightly** (nightly) | Rapid iteration; daemon mode focus |
| **DeepSeek TUI (CodeWhale)** | 10 (IME, security model, Docker) | 10 (IME fix, Unix socket hook, localization) | **v0.8.47** (latest stable) | Robust Chinese community; Docker issue is top pain point |

---

## 3. Shared Feature Directions

### Requirements Appearing Across Multiple Tool Communities

| Requirement | Affected Tools | Specific Needs |
|-------------|---------------|----------------|
| **Session Resilience & Recovery** | **Claude Code, Copilot CLI, Pi** | Users demand sessions that survive model switches, interruptions, and updates without corruption. Claude Code's 400 errors, Copilot's websocket duplicates, and Pi's cross-provider resume failures are variations of the same problem: **session state is fragile** |
| **Dynamic Model Routing / Per-Subtask Model Selection** | **OpenCode, DeepSeek TUI, Copilot CLI** | Users want to route cheap models for routine edits, powerful reasoning models for analysis—all within the same session. OpenCode #6651 (46 👍) and DeepSeek TUI #2300 explicitly request this |
| **Remote / Daemon Operation** | **Kimi Code, Qwen Code, Pi** | ACP protocol, daemon modes, and remote-control APIs are being built in parallel. Pi's extension API (#5140), Qwen's daemon parity (#4175), and Kimi's ACP session history (#2127) all target headless/IDE integration |
| **Plugin / Extension Ecosystem** | **Claude Code, OpenCode, DeepSeek TUI, Pi** | Hooks, plugins, and skill systems are proliferating. Claude Code's side-threads plugin (#63262) and Hookify (#63382), OpenCode's marketplace request (#28696), and DeepSeek TUI's custom slash commands (#2326) show ecosystem thinking |
| **Context Window Transparency & Management** | **Copilot CLI, OpenCode, Qwen Code** | Users demand visibility into context utilization and better compaction. Copilot's 73% MCP bloat (#3539), OpenCode's compaction backoff (#29801), and Qwen's "summary+restoration" compaction (#4592) all target smarter context management |
| **Cost Visibility & API Quota Management** | **OpenCode, Kimi Code, Copilot CLI** | Token usage reporting, pricing adjustment, and API key pooling are emerging. OpenCode's DeepSeek price cut (#28846, 46 👍), Kimi's missing per-turn token reporting (#2394), and Copilot's token governance opacity |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------|-----------|----------|-----|-----------|--------------|
| **Primary Model** | Claude Opus 4.8 | GPT-5.5 / Codex | Gemini 2.5+ | Multi-model (GPT/Claude) | Kimi | Multi-provider | Multi-provider | Qwen | DeepSeek |
| **Key Differentiator** | Dynamic workflows (hundreds of sub-agents) | Next-prompt suggestions / zsh-fork unified exec | Sub-agent reliability / OIDC auth | GitHub ecosystem integration / VS Code | ACP protocol / IDE integration | Plugin ecosystem / SQLite persistence | Extension APIs / remote control | Daemon mode / computer use | IME support / Chinese ecosystem |
| **Target User** | Power developers doing large-scale refactors | Enterprise devs with Codex API access | Google ecosystem devs | GitHub-centric dev teams | Moonshot AI / Chinese market | Open-source community / skill authors | Cross-platform / terminal purists | QwenLM / Chinese dev ecosystem | DeepSeek / Chinese-speaking devs |
| **Stability Risk** | **HIGH** (thinking block 400s, runaway processes) | **MODERATE** (regional gating, /compact regression) | **HIGH** (subagent hangs, false success) | **HIGH** (websocket duplicates, context bloat) | **MODERATE** (community trust erosion) | **MODERATE** (GPT latency, startup errors) | **LOW-MODERATE** (cross-provider resume) | **MODERATE** (body timeout, IDE bugs) | **MODERATE** (Docker, IME, security model) |
| **Release Cadence** | Multiple per week | Weekly (rust channel) | Multiple per day | Daily | Slower (no release today) | Daily | Daily | Nightly | Slower (v0.8.47 stable) |

---

## 5. Community Momentum & Maturity

### Most Active Communities (by engagement volume)
1. **OpenCode** – #29079 (GPT latency, 102 comments) is the single most commented issue across all tools. 46 👍 feature requests appear regularly. The community actively drives feature direction.
2. **Claude Code** – Highest raw issue count with 7+ fresh variants of the same 400 error in 24 hours. Users are engaged but frustrated. The "session bricker" nickname indicates deep emotional investment.
3. **DeepSeek TUI (CodeWhale)** – #1615 (Docker) has **191 comments**, the highest single-issue engagement. Strong Chinese-speaking community driving IME and localization fixes.

### Most Rapidly Iterating
- **Gemini CLI** – Three releases in one day (stable, preview, nightly), with PTY fixes cherry-picked from PR to stable within hours. Indicates tight release discipline and high responsiveness.
- **Qwen Code** – Nightly releases with 10 PRs updated. Daemon mode development is moving fast and breaking things.
- **Pi** – Daily releases with consistent bugfix and feature PRs. The remote-control extension API direction is architecturally significant.

### Maturity Assessment
- **Claude Code** – Most feature-rich but **most unstable**. The dynamic workflows feature (hundreds of sub-agents) is ambitious but shipping with critical bugs. Feels like a v2.0 that wasn't ready for prime time.
- **OpenAI Codex** – Steady, methodical progress. The next-prompt suggestion engine (3 PR stack) and zsh-fork unified exec (4 PR stack) show disciplined engineering but slower feature velocity.
- **Pi** – Most **architecturally deliberate**. The remote-control extension API, GC fix, and cross-provider handling show deep understanding of the problem space. Smallest community but highest code quality per PR.
- **Copilot CLI** – **Stalling**. Zero PRs in 24 hours, yet critical websocket and context-window issues are surging. Suggests the team may be resource-constrained or prioritizing a different release.

---

## 6. Trend Signals

### Industry Trends from Community Feedback

1. **Session State is the New Bottleneck** – Across all tools, session persistence, resumption, and state management are the #1 source of bugs. The "thinking blocks cannot be modified" error, websocket duplicate IDs, cross-provider resume failures, and `/clear` creating new sessions all point to the same challenge: **serializing and restoring agent session state reliably is unsolved**. This is the most important infrastructure problem in the ecosystem.

2. **Multi-Agent Orchestration is Demanding Observability** – Claude Code's dynamic workflows (hundreds of sub-agents) and OpenCode's subagent model selection request both highlight that **users need visibility into sub-agent states, tool calls, and outcomes**. The next frontier is an "agent debugger" or "agent inspector" that shows the execution graph.

3. **Platformization is Inevitable** – Every tool is becoming a platform: plugins (Claude Code, OpenCode), extension APIs (Pi), ACP protocols (Kimi, Qwen), custom slash commands (DeepSeek TUI), and suggestion engines (Codex). The market is moving from "AI CLI tool" to **"AI development platform"** with ecosystem lock-in.

4. **Chinese Ecosystem is a Parallel Universe** – Kimi Code, Qwen Code, and DeepSeek TUI are building fundamentally similar features but optimized for Chinese-speaking users: IME support, Chinese model providers, and localization. They are interoperating with the global ecosystem (ACP protocol, Codex compatibility) but driving distinct feature sets. **Cross-ecosystem compatibility will be a major strategic question** for global tool makers.

5. **Cost Sensitivity is Spiking** – DeepSeek's permanent 75% price cut triggered immediate community demands for pricing adjustments (OpenCode #28846). Users are increasingly cost-aware and want price-to-capability transparency. Tools that offer **model routing by cost** (cheap for routine edits, expensive for analysis) will win cost-sensitive users.

6. **Terminal Compatibility Remains Fragmented** – tmux broken images (Pi), Wayland browser agents (Gemini), Zellij crashes (Gemini), Windows terminal issues (Copilot, Kimi, Qwen), and terminal color problems (DeepSeek TUI) show that **terminal emulator fragmentation is a persistent barrier to reliable TUI experiences**. Tools investing in terminal protocol normalization will have an advantage.

---

**Bottom Line for Decision-Makers:**
- If you need **maximum capability today** and can tolerate instability: Claude Code (dynamic workflows)
- If you need **enterprise stability** and GitHub integration: Copilot CLI (but watch the websocket issues)
- If you need **cross-platform reliability** and extensibility: Pi (smallest community but highest code quality)
- If you operate in **Chinese markets**: Qwen Code or DeepSeek TUI (best local support)
- If you want **multi-provider flexibility** and community-driven features: OpenCode (most engaged community)
- **Do not** build critical production workflows on tools that are actively regressing on session resilience (Claude Code's 400 errors, Copilot's websocket duplicates) without extensive testing and fallback procedures.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-29 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following pull requests have generated the most community discussion and represent the most-watched Skill development activity:

### #514 — Document Typography Skill (Open, 50+ comments)
**Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents—issues that affect virtually every document Claude generates.
**Discussion highlights:** Community recognized this addresses a universal pain point in LLM-generated content. The PR description notes these typographic issues are "rarely asked for" but consistently degrade output quality.
**Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

### #486 — ODT Skill (Open, 50+ comments)
**Functionality:** Enables creation, template filling, reading, and conversion of OpenDocument Format files (.odt, .ods), targeting LibreOffice and ISO-standard document workflows.
**Discussion highlights:** Addresses demand for open-source document format support beyond the existing DOCX/PDF skills. The skill triggers on mentions of "ODT", "ODS", "ODF", and "OpenDocument."
**Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

### #210 — Frontend-Design Skill Clarity (Open, 50+ comments)
**Functionality:** Revises the frontend-design skill for improved clarity, actionability, and internal coherence—ensuring every instruction is executable within a single conversation.
**Discussion highlights:** Focused on skill quality rather than new functionality. The community debated the balance between comprehensive guidance and token-efficient instructions.
**Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

### #83 — Skill-Quality-Analyzer & Skill-Security-Analyzer (Open, 50+ comments)
**Functionality:** Two meta-skills: one evaluates Skills across five quality dimensions (Structure, Documentation, Edge Cases, Testing, Examples); the other performs security analysis on SKILL.md files for prompt injection, file access risks, and dependency vulnerabilities.
**Discussion highlights:** Generated significant interest as these are "skills about skills"—enabling automated quality assurance for the ecosystem. The security analyzer addresses growing concerns about trust boundaries in community-submitted Skills.
**Link:** [PR #83](https://github.com/anthropics/skills/pull/83)

### #538 — PDF Case-Sensitivity Fix (Open, 50+ comments)
**Functionality:** Fixes 8 case-sensitivity mismatches in PDF skill file references that break on case-sensitive file systems (Linux, macOS).
**Discussion highlights:** Despite being a simple bug fix, this PR attracted attention because it highlights cross-platform compatibility issues that affect many Skills. Raised awareness of Windows vs. Unix file system differences.
**Link:** [PR #538](https://github.com/anthropics/skills/pull/538)

### #539 — Skill-Creator YAML Validation (Open, 50+ comments)
**Functionality:** Adds pre-parse validation to detect unquoted `description` fields containing colons, preventing silent YAML parsing failures.
**Discussion highlights:** Tooling improvements for Skill authors resonated strongly. The community recognized this as a common pain point when writing SKILL.md files manually.
**Link:** [PR #539](https://github.com/anthropics/skills/pull/539)

### #541 — DOCX Tracked Changes ID Collision (Open, 50+ comments)
**Functionality:** Fixes document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks, caused by shared `w:id` namespace collisions in OOXML.
**Discussion highlights:** High technical depth discussion around OOXML internals. Community appreciated the detailed root-cause analysis and the fix's prevention of document corruption.
**Link:** [PR #541](https://github.com/anthropics/skills/pull/541)

### #1099 — Skill-Creator Windows Subprocess Fix (Open, 50+ comments)
**Functionality:** Fixes `run_eval.py` crash on Windows where every query was recorded as "not triggered" due to a `[WinError 10038]` socket operation error.
**Discussion highlights:** Windows compatibility emerged as a major theme. Multiple PRs (#1050, #1099) address the same root issue—Claude Code's CLI infrastructure has significant Windows gaps.
**Link:** [PR #1099](https://github.com/anthropics/skills/pull/1099)

---

## 2. Community Demand Trends

From Issues analysis, the community's most-anticipated new Skill directions are:

### 🏢 Enterprise Document & Workflow Automation
- **Org-wide Skill sharing** ([Issue #228](https://github.com/anthropics/skills/issues/228), 13 comments, 7 👍): Users request direct sharing links and shared skill libraries instead of manual .skill file transfers via Slack/Teams.
- **SharePoint Online document handling** ([Issue #1175](https://github.com/anthropics/skills/issues/1175)): Emerging demand for enterprise document management with security and context window concerns.
- **Agent Governance & Safety** ([Issue #412](https://github.com/anthropics/skills/issues/412), 4 comments): Proposed Skill for policy enforcement, threat detection, and audit trails in AI agent systems.

### 🔧 Tooling & Ecosystem Reliability
- **Windows compatibility** (Multiple Issues/PRs): A cluster of reports around `run_eval.py` failures (Issue #556, 9 comments, 6 👍) and subprocess handling bugs. Windows support is the single largest infrastructure gap.
- **Plugin installation accuracy** ([Issue #1087](https://github.com/anthropics/skills/issues/1087), 2 comments): The `document-skills` plugin loads all 17 skills instead of the declared 4—indicating demand for precise plugin scoping.
- **Skill-creator best practices** ([Issue #202](https://github.com/anthropics/skills/issues/202), 8 comments): Community wants the skill-creator itself rewritten as an actionable instruction set rather than developer documentation.

### 🔐 Security & Trust Boundaries
- **Namespace impersonation** ([Issue #492](https://github.com/anthropics/skills/issues/492), 6 comments, 2 👍): Community skills distributed under `anthropic/` namespace create trust boundary vulnerabilities. Users may grant elevated permissions to community skills believed to be official.

### 🌐 Integration & Protocol
- **Skills as MCPs** ([Issue #16](https://github.com/anthropics/skills/issues/16), 4 comments): Proposal to expose Skills through Model Context Protocol for standardized API signaling.
- **AWS Bedrock support** ([Issue #29](https://github.com/anthropics/skills/issues/29), 4 comments): Demand for Skills to work outside Claude Code's native environment.

---

## 3. High-Potential Pending Skills

These active-comment PRs are not yet merged but show strong momentum:

### #723 — Testing Patterns Skill (Open, created 2026-03-22)
**Description:** Comprehensive testing skill covering unit testing (AAA pattern), React component testing (Testing Library), E2E testing, and testing philosophy (Trophy model).
**Signals:** Likely to land as it fills a clear gap—there is no dedicated testing skill in the official collection.
**Link:** [PR #723](https://github.com/anthropics/skills/pull/723)

### #568 — ServiceNow Platform Skill (Open, created 2026-03-08)
**Description:** Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, Vulnerability Response, and IntegrationHub.
**Signals:** Enterprise demand is high. The skill is comprehensive but may face scope concerns during review.
**Link:** [PR #568](https://github.com/anthropics/skills/pull/568)

### #444 — AURELION Skill Suite (Open, created 2026-02-21)
**Description:** Four skills—aurelion-kernel (structured cognitive framework), advisor, agent, and memory—for professional knowledge management and AI collaboration.
**Signals:** Long-running PR (3 months) with continuous updates. Represents a complete ecosystem rather than a single skill, which may slow merge.
**Link:** [PR #444](https://github.com/anthropics/skills/pull/444)

### #190 — n8n-Builder & n8n-Debugger (Open, created 2025-12-31)
**Description:** Skills for building and debugging n8n automation workflows, plus faf-expert for persistent project context management.
**Signals:** 5 months open but recently updated (2026-05-18). Automation workflow skills are in high demand.
**Link:** [PR #190](https://github.com/anthropics/skills/pull/190)

### #147 — Codebase Inventory Audit Skill (Open, created 2025-12-16)
**Description:** 10-step workflow for identifying orphaned code, unused files, documentation gaps, and infrastructure bloat, producing a CODEBASE-STATUS.md report.
**Signals:** Addresses the "codebase cleanup" pain point that affects all development teams.
**Link:** [PR #147](https://github.com/anthropics/skills/pull/147)

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for enterprise document workflow automation (ODT, typography quality, SharePoint integration) combined with cross-platform tooling reliability (Windows compatibility, YAML validation, plugin scoping), revealing that the Skills ecosystem is transitioning from experimental community contributions to production-ready enterprise infrastructure.**

---

# Claude Code Community Digest
**2026-05-29**

## Today's Highlights

Opus 4.8 arrives with `xhigh` effort defaults and a groundbreaking dynamic workflows feature that orchestrates work across hundreds of sub-agents, but the release is shadowed by a surge of "thinking blocks cannot be modified" 400 errors that are bricking extended-thinking sessions. The community is reporting at least 7 fresh variants of this API error in the last 24 hours alone, making it the most critical stability concern.

---

## Releases

**v2.1.154** (latest)
- [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.154)
- **Opus 4.8** is now the default model; `/effort xhigh` available for hardest tasks
- **Dynamic workflows**: Claude can create multi-agent orchestrations spanning "tens to hundreds" of background agents for complex, large-scale tasks

**v2.1.153** (prev)
- [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.153)
- Added `skipLfs` option for Git plugin sources to avoid LFS downloads
- One-time npm auto-update notice with `/doctor` fix suggestions
- `COLUMNS` environment variable now passed to status line commands

---

## Hot Issues

1. **[#63147](https://github.com/anthropics/claude-code/issues/63147) – Resuming extended-thinking sessions permanently broken (400)**  
   *23 comments, 30 👍* — Fresh bug: when resuming a session that used extended thinking with tool calls, every turn returns "thinking blocks cannot be modified." The transcript stores thinking text as empty but keeps signatures, making the session unrecoverable. Dubbed the "session bricker" by users.

2. **[#10199](https://github.com/anthropics/claude-code/issues/10199) – API Error 400 - Thinking Block Modification Error**  
   *90 comments, 55 👍* — The long-running mega-thread on thinking block corruption. First filed October 2025, still open. Today's v2.1.154 has triggered a new wave of duplicates.

3. **[#63394](https://github.com/anthropics/claude-code/issues/63394) – v2.1.154 regression: bridge/remote-control session replay re-sends empty-text thinking blocks**  
   *6 comments, 1 👍* — Cloud bridge sessions now replay empty thinking blocks with signatures, triggering the same 400. Filed same day as release—critical for anyone using remote control.

4. **[#63322](https://github.com/anthropics/claude-code/issues/63322) – Regression (v2.1.147–150): model-switch bricks extended-thinking sessions**  
   *6 comments, 1 👍* — Sessions that worked on v2.1.146 throw unrecoverable 400s immediately after updating to v2.1.150. User had zero errors for a week prior.

5. **[#63393](https://github.com/anthropics/claude-code/issues/63393) – 400 error when `run_in_background` tool completes with interleaved thinking**  
   *2 comments* — Async tool results injected back into conversation trigger the modifiable-thinking error specifically on Opus 4.8 with 1M context.

6. **[#63418](https://github.com/anthropics/claude-code/issues/63418) – API Error: 400 messages.7.content.12: thinking blocks cannot be modified**  
   *2 comments* — Another variant: the exact content block index is reported, suggesting the error is deterministic and positional.

7. **[#63423](https://github.com/anthropics/claude-code/issues/63423) – CLI 2.1.154 breaks with API Error 422 - Invalid message role "system"**  
   *1 comment, 1 👍* — A *separate* API error: the new release appears to be sending an invalid "system" role to the API, distinct from the thinking block 400s.

8. **[#58192](https://github.com/anthropics/claude-code/issues/58192) – `/goal` Stop hook fails with "Prompt is too long"**  
   *14 comments, 13 👍* — Long-standing ergonomic issue: large goal text causes the stop hook to crash instead of truncating or summarizing, effectively punishing verbose goal-setting.

9. **[#62193](https://github.com/anthropics/claude-code/issues/62193) – Claude Code spawned ~3,000 parallel bash processes in 17 seconds**  
   *6 comments, 2 👍* — OOM crash and hard reboot. User reports uncontrolled process forking, raising concerns about runaway agent loops without proper process limits.

10. **[#30492](https://github.com/anthropics/claude-code/issues/30492) – Feature Request: Real-time steering channel mid-execution**  
    *16 comments, 21 👍* — Strong community demand for a "priority message channel" that lets users redirect Claude mid-task without interrupting the current step.

---

## Key PR Progress

1. **[#63382](https://github.com/anthropics/claude-code/pull/63382) – Fix Hookify tests example semantics** (OPEN)  
   Clarifies substring-based matching behavior in the Hookify plugin's stop-before-tests example, moving from regex-looking syntax to explicit `not_contains` checks.

2. **[#63262](https://github.com/anthropics/claude-code/pull/63262) – feat: add side-threads plugin** (CLOSED)  
   A Slack-style `/thread <question>` and `/back` plugin for side conversations within a Claude session. Only hours old but already merged.

3. **[#63189](https://github.com/anthropics/claude-code/pull/63189) – Use PR template in `/commit-push-pr` command** (OPEN)  
   Smart integration: auto-detects `.github/PULL_REQUEST_TEMPLATE.md` and feeds it into context so generated PRs follow repo conventions.

4. **[#62941](https://github.com/anthropics/claude-code/pull/62941) – fix(ralph-wiggum): correctly read last assistant text from transcript** (OPEN)  
   Bugfix for the Ralph Wiggum stop hook: was reading only the last line of transcript, missing multi-line assistant responses. Now properly extracts text blocks.

---

## Feature Request Trends

1. **Mid-execution steering** (#30492, 21 👍) – The most-requested feature: a priority channel to redirect Claude mid-task without aborting. Multiple comments mention multi-file refactors where a wrong turn costs 5+ minutes.

2. **Dynamic workflows** (just shipped in v2.1.154) – Already live, but community interest suggests deep adoption. Users are likely to request visibility into sub-agent states and outcomes.

3. **Plugin ecosystem expansion** – The side-threads PR (#63262) and PR template integration (#63189) show community hunger for workflow customization rather than model-level changes.

4. **Session resilience** – Indirectly requested via the 400 error surge: users want sessions that survive updates, model switches, and interruptions without corruption.

---

## Developer Pain Points

1. **Extended Thinking + Session Resumption is fundamentally broken** – The "thinking blocks cannot be modified" 400 error is the top pain point. 7+ fresh issues in 24 hours. Users report that *any* interruption, update, or async tool completion can permanently brick a session. Workaround: don't resume extended-thinking sessions.

2. **Opus 4.8 stability is concerning** – Combined with the thinking block bug, the 422 "invalid message role" error (#63423), and the runaway process issue (#62193), the v2.1.154 release feels rushed. Multiple users report "I was fine on v2.1.146, updated, and everything broke."

3. **Windows and Cowork remain fragile** – Ongoing EXDEV bugs (#27897), VHDX ELOOP errors (#61872), and Google Drive MCP issues (#53442) suggest the desktop/Cowork experience on Windows is still maturing.

4. **Sandbox overreach on Rails projects** (#56331) – Auto-detecting `config/` as `denyWithinAllow` blocks common git operations. Users want opt-out or explicit configuration rather than heuristics.

5. **Runaway process protection missing** (#62193) – 3,000 parallel bash processes in 17 seconds with no throttling or limit enforcement. For production use, agent process limits should be a priority.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-29

## 1. Today's Highlights
A new Rust‑SDK feature request (0.135.0) landed with improved diagnostics in `codex doctor`, deeper remote‑connection visibility in `/status`, and foundational Vim mode work. The community is buzzing about a regional‑gate bug blocking the Chrome plugin for EU/Windows users (#21598), and a `/compact` regression that broke a core context‑management workflow (#21671). On the PR front, a multi‑PR stack introducing **next‑prompt suggestions** (engine → app‑server → TUI) and a sprawling series on **zsh‑fork unified exec** signal major UX and sandbox reliability upgrades ahead.

## 2. Releases
- **`rust-v0.135.0`**:  
  - **`codex doctor`** now emits richer environment, Git, terminal, app‑server, and thread‑inventory diagnostics for faster support triage.  
  - **`/status`** shows remote‑connection details and server version over remote transports.  
  - **Vim mode** foundational work (details not yet released).  
  - [Release notes](https://github.com/openai/codex/releases/tag/rust-v0.135.0)

## 3. Hot Issues (10 noteworthy)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|-------------------|
| 1 | [#21598](https://github.com/openai/codex/issues/21598) – Chrome plugin unavailable in Norway/EU | Regional gating blocks a core browser‑use feature for European users; Windows Desktop shows “Connected” but the `@Chrome` route never appears. | 25 comments, 11 👍 – high frustration, likely rollout/config bug. |
| 2 | [#21671](https://github.com/openai/codex/issues/21671) – `/compact` fails with unknown `service_tier` | Regression from 0.128.0 → 0.129.0 breaks the primary way users reclaim context window space. | 22 comments, 5 👍 – confirmed by multiple users. |
| 3 | [#10561](https://github.com/openai/codex/issues/10561) – Plan Mode: “Copy Plan” button & clear‑context workflow | Long‑standing request to bridge planning and execution without manual cleanup; 35 👍 indicates strong organic demand. | 16 comments, 35 👍 – one of the highest‑voted feature requests. |
| 4 | [#14601](https://github.com/openai/codex/issues/14601) – Separate `projects.xxxx.trusted_level` from `config.toml` | Users want fine‑grained trust policies per project without polluting global config; 37 👍 shows broad appeal. | 11 comments, 37 👍 – strong support. |
| 5 | [#24391](https://github.com/openai/codex/issues/24391) – Windows sandbox spawn setup refresh fails on 0.133.0 | Shell commands break after upgrade – core functionality regression for Windows CLI users. | 6 comments, 15 👍 – rising urgency. |
| 6 | [#18299](https://github.com/openai/codex/issues/18299) – Display dot files (.agents/.codex) in file viewer | Power users need visibility into hidden project‑scoped configs. | 10 comments, 19 👍 – simple UX gap with high demand. |
| 7 | [#24969](https://github.com/openai/codex/issues/24969) – Windows Store Codex blocks network URLs via enterprise policy | Enterprise users can’t browse at all with Store version; Chrome extension doesn’t help. | 7 comments, 0 👍 – niche but critical for Windows enterprise adoption. |
| 8 | [#13165](https://github.com/openai/codex/issues/13165) – Specify shell Codex uses on Windows | PowerShell‑only breaks MinGW Bash/WSL workflows; high demand (21 👍) for Windows‑native devs. | 5 comments, 21 👍 – consistent request. |
| 9 | [#18708](https://github.com/openai/codex/issues/18708) – Edit any message, not just last | Forking is heavy; inline editing is faster and less disruptive. | 6 comments, 4 👍 – quality‑of‑life UX issue. |
| 10 | [#24810](https://github.com/openai/codex/issues/24810) – Session Bridge: structured context preservation | Proposes routing knowledge to permanent storage before session reset, not just compression. | 2 comments, 0 👍 – early, but a promising pattern. |

## 4. Key PR Progress (10 important)

| # | PR | Feature / Fix | Why it matters |
|---|----|---------------|----------------|
| 1 | [#24979](https://github.com/openai/codex/pull/24979) | Gate unified exec zsh‑fork composition | Enables a composed mode for enterprise rollouts that preserves long‑running command support while adding sandbox reliability. |
| 2 | [#24980](https://github.com/openai/codex/pull/24980) | Hide shell override for zsh‑fork unified exec | Prevents model from overriding shell binary when zsh‑fork is active – stabilizes exec interception. |
| 3 | [#24981](https://github.com/openai/codex/pull/24981) | Fix sandbox zsh‑fork unified exec trampoline | Ensures escalated sandbox requests are honored even when a trampoline process is involved. |
| 4 | [#24982](https://github.com/openai/codex/pull/24982) | Honor parent approvals for intercepted execs | Eliminates double‑approval prompts for children of already‑approved commands. |
| 5 | [#22668](https://github.com/openai/codex/pull/22668) | Wire managed MITM CA trust into child env | HTTPS clients spawned by Codex will trust the proxy CA – critical for managed‑proxy and traffic‑inspection features. |
| 6 | [#24126](https://github.com/openai/codex/pull/24126) | Next‑prompt suggestion engine (1/3) | Core engine for suggesting what to type next – foundational for a “ghost text” feature. |
| 7 | [#24127](https://github.com/openai/codex/pull/24127) | Next‑prompt suggestion RPC (2/3) | Adds `thread/suggestNextPrompt` v2 API – enables clients to request suggestions. |
| 8 | [#23976](https://github.com/openai/codex/pull/23976) | TUI next‑prompt suggestions (3/3) | Renders lightweight ghost text in composer – final piece of the suggestion pipeline. |
| 9 | [#24124](https://github.com/openai/codex/pull/24124) | `/usage` report command (4/4) | Adds `/usage`, `/usage week` commands to inspect token consumption per feature. |
| 10 | [#24987](https://github.com/openai/codex/pull/24987) | Hide background MCP startup status in TUI | Prevents slow MCP servers from dominating the initial TUI experience – reduces startup noise. |

## 5. Feature Request Trends
- **Plan‑to‑execute pipeline**: Multiple requests for a “Copy Plan” button, clear‑context‑after‑plan, and inline editing of any message (not just last) – users want to iterate plans without losing state.
- **Configuration isolation**: Strong demand (37 👍) for per‑project `trusted_level` instead of global `config.toml` pollution (#14601). Users want different trust rules per workspace.
- **Next‑prompt suggestions**: The multi‑PR stack on suggestion engine + RPC + TUI rendering indicates this is an actively prioritized feature – likely landing soon.
- **Shell/exec customization**: Windows users repeatedly ask for configurable shell (PSH, MinGW Bash, or WSL) and better sandbox integration for non‑PowerShell shells.
- **Session persistence**: Interest in “Session Bridge” (#24810) and general desire to preserve context across restarts without manual compression.

## 6. Developer Pain Points
- **Regional Chrome plugin gating** (#21598, #21791, #21851, #21741) – European and Brazilian users are unable to use the Chrome plugin despite correct installation. Multiple reports suggest a rollout/config bug.
- **`/compact` regression** (#21671, #22876, #24920) – Broken on 0.129.0+ due to `service_tier` parameter being sent to non‑OpenAI providers or incorrect API usage. Core workflow is blocked.
- **Windows sandbox failures** (#24391, #24963, #12496, #13165) – Multiple users reporting `spawn setup refresh` errors on CLI 0.133.0 and inability to run Node REPL/browser automation. Windows continues to be a second‑class citizen for sandbox features.
- **Session history loss** (#15349, #15709) – App and CLI users lose large portions of conversation history after restart or session resume – a persistent, unresolved frustration.
- **Broken DLL/shell load on Windows** (#23972) – App update corrupts DLL loading, requiring full reinstall. Indicates missing regression testing for Windows packaging.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-05-29

## Today’s Highlights
The team shipped **three releases** today, including a **stability patch for the v0.44 stable line** and a preview patch addressing a **critical PTY resize crash** (cherry-picked from #27496). The **nightly** build includes a fix for unmapped Vim normal keys, courtesy of first-time contributor @MukundaKatta. Agent reliability continues to dominate the issue tracker, with several high-activity bugs around **subagent hangs** and **false success reporting** still under investigation.

## Releases
- **v0.44.1** – Cherry-picks the PTY resize hardening from PR #27496 into the stable release line. This fixes a `libc++abi` crash on terminal resize when the underlying process has already exited.  
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.44.0...v0.44.1)

- **v0.45.0-preview.1** – Preview channel receives the same critical PTY fix.  
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.45.0-preview.0...v0.45.0-preview.1)

- **v0.45.0-nightly.20260528.g5cac7c10f** – Includes a fix for unmapped Vim normal keys being incorrectly consumed. Welcome @MukundaKatta!  
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.45.0-nightly.20260527.g41c9260ca...v0.45.0-nightly.20260528.g5cac7c10f)

## Hot Issues (10 Notable)
1. **#24353 – Robust component-level evaluations**  
   Epic tracking the expansion of behavioral eval tests from 76 toward comprehensive coverage. Critical for preventing regressions as the agent system grows. 👤 @gundermanc  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/24353)

2. **#21409 – Generalist agent hangs indefinitely**  
   High-pain bug: the CLI hangs when deferring to the generalist agent for trivial tasks (e.g., folder creation). Workaround exists (disable subagents) but impacts all users relying on multi-agent workflows. 👍 8  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#22323 – Subagent recovery falsely reports `GOAL` success after MAX_TURNS**  
   The `codebase_investigator` hits max turns, does zero analysis, but reports `status: "success"`. Users lose trust in terminal states. 👤 @matei-anghel  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

4. **#25166 – Shell command stuck in `Waiting input` after completion**  
   Simple commands finish but the UI never releases the command view. Affects core UX flow. 👍 3  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

5. **#21968 – Gemini under-uses custom skills and sub-agents**  
   Users report that even when highly relevant skills are defined (e.g., Gradle, Git), the model rarely activates them autonomously. Only works with explicit instruction.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/21968)

6. **#26525 – Add deterministic redaction and reduce Auto Memory logging**  
   Auto Memory reads local transcripts and sends selected content to the model _before_ the redaction prompt runs. This is a security concern—secrets can be logged or sent to model context. 👤 @SandyTao520  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/26525)

7. **#26523 – Surface or quarantine invalid Auto Memory inbox patches**  
   Invalid `.patch` files are silently skipped, but the background extractor still reads them every cycle. Creates unnecessary load and risk.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/26523)

8. **#24246 – 400 error when >128 tools configured**  
   The CLI hits API limits when the toolset grows beyond threshold. Users with many custom tools are blocked. Needs smarter tool scoping.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/24246)

9. **#21983 – Browser subagent fails on Wayland**  
   The browser agent’s session mode is incompatible with Wayland display servers, blocking Linux users.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/21983)

10. **#22093 – Subagents running without permission since v0.33.0**  
    Users who disabled agents in config find subagents still spawning. Breaks expectation for MCP-only setups.  
    [Issue](https://github.com/google-gemini/gemini-cli/issues/22093)

## Key PR Progress (10 Important)
1. **#27496 – Harden PTY resize against native crashes** (CLOSED)  
   Implements a defense-in-depth strategy to prevent `libc++abi` crashes from `node-pty` when resize events race with process exit. ❗Cherry-picked into two releases today. 👤 @scidomino  
   [PR](https://github.com/google-gemini/gemini-cli/pull/27496)

2. **#27531 – Handle `EBADF` error when resizing a closed PTY** (CLOSED)  
   Fixes crashes triggered by rapid layout changes in tiled window managers / Zellij. Complements #27496. 👤 @anexoluiz  
   [PR](https://github.com/google-gemini/gemini-cli/pull/27531)

3. **#26559 – OIDC auth provider for remote agents** (CLOSED)  
   Adds OpenID Connect support for Agent-to-Agent communication, enabling enterprise-grade auth. Pending final reviews. 👤 @alexandrevarga  
   [PR](https://github.com/google-gemini/gemini-cli/pull/26559)

4. **#26536 – System-wide fallback for ripgrep detection** (CLOSED)  
   When bundled ripgrep is missing (e.g., alternate installation), the CLI now falls back to system-installed `rg`. Improves cross-distro compatibility. 👤 @alexandrevarga  
   [PR](https://github.com/google-gemini/gemini-cli/pull/26536)

5. **#22590 – Include all executing subagent tool calls in `useToolScheduler` state** (OPEN)  
   Fixes a bug where tool scheduler misses subagent calls in `Executing` state, causing visual gaps in tool execution rendering. 👤 @TravisHaa  
   [PR](https://github.com/google-gemini/gemini-cli/pull/22590)

6. **#27529 – Handle errors safely in `shellExecutionService`** (OPEN)  
   Gracefully handles `EBADF` during PTY resize loops rather than crashing. Provides a `return` inside the catch block. 👤 @samuelgirmametaferia  
   [PR](https://github.com/google-gemini/gemini-cli/pull/27529)

7. **#27455 – Amazon URL parsing and metadata extraction** (OPEN)  
   Enables `web-fetch` to resolve Amazon short URLs and extract product metadata for comparison workflows. Useful for shopping/price-check agents. 👤 @shaurya-cd  
   [PR](https://github.com/google-gemini/gemini-cli/pull/27455)

8. **#27521 – Fix `settings.json` filename in max session turns message** (OPEN)  
   Corrects a wrong filename in error feedback—improves usability when users hit session limits. 👤 @amitesh0303  
   [PR](https://github.com/google-gemini/gemini-cli/pull/27521)

9. **#26088 – F10 fallback for approval mode cycling** (OPEN)  
   Adds `F10` keybinding for Windows/WezTerm users whose terminal mangles `Shift+Tab`. 👤 @Gitanaskhan26  
   [PR](https://github.com/google-gemini/gemini-cli/pull/26088)

10. **#27522 / #27523 – Terminal serializer and empty-parts guards** (OPEN)  
    Two safety fixes: skip width-0 continuation cells in terminal output, and guard against empty parts in function call/response checks. 👤 @amitesh0303  
    [PR #27522](https://github.com/google-gemini/gemini-cli/pull/27522) | [PR #27523](https://github.com/google-gemini/gemini-cli/pull/27523)

## Feature Request Trends
- **AST-aware code intelligence** – Multiple issues (#22745, #22746, #22747) are investigating AST-level file reads, search, and codebase mapping to reduce token waste and improve tool precision.
- **Server-driven model management** – Epic #20878 proposes centralizing model routing via a remote endpoint instead of local config, enabling hot-swappable models without CLI updates.
- **Remote Agents (OIDC / A2A)** – PR #26559 and epic #20303 signal a push toward enterprise-grade agent-to-agent communication with full auth delegation.
- **Auto Memory improvements** – Multiple issues from @SandyTao520 (#26516, #26522, #26523, #26525) request deterministic redaction, session retry limits, and patch validation—showing the team is hardening the memory system.
- **Agent self-awareness** – Issue #21432 asks the agent to understand its own CLI flags, hotkeys, and capabilities, enabling it to act as its own expert guide for users.

## Developer Pain Points
- **Subagent reliability** is the top recurring frustration: agents hang (#21409), report false success (#22323), run without permission (#22093), and ignore custom skills (#21968). Each issue has multiple comments and maintainer attention.
- **PTY/terminal instability** is a close second: crashes on resize (#27496, #27531, #27529), corruption after external editor exit (#24935), and flickering (#21924) degrade the interactive experience.
- **Tool/shell execution** remains fragile: commands stuck in "Waiting input" after completion (#25166), 400 errors with many tools (#24246), and scripts written to random temp directories (#23571).
- **Browser agent incompatibility** on Wayland (#21983) and ignored settings overrides (#22267) block Linux and power-user workflows.
- **Memory system overhead** from invalid patches (#26523) and low-signal retries (#26522) creates unnecessary load and security concerns (#26525).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest**
**Date:** 2026-05-29

---

### 1. Today's Highlights
Today's release (v1.0.56-0) brings improved trust-prompt clarity alongside continued stability work. The community is reporting a surge in duplicate-item websocket errors that break agentic workflows, with three related fresh issues filed today alone. Additionally, concerns around context-window bloat from multi-MCP setups and silent model downgrades via the `task` tool are dominating the discussion.

---

### 2. Releases
**v1.0.56-0** (2026-05-29)
- **Improved:** Trusted folder confirmation message now clarifies that permissions may be remembered for the session.
- **Fixed:** Context window tier selection now persists durably in session events and survives SDK-only resume paths, ensuring tier-derived limits are reapplied to request, compaction, and truncation logic.

**v1.0.55** (2026-05-28)
- Free and Student plan users on token-based billing are now restricted to Auto model selection (explanation shown in model picker).
- Added support for reporting Claude thinking (reasoning) tokens in session usage summaries.
- Added support for Claude Opus 4.8.
- Fixed a loading spinner hang.

---

### 3. Hot Issues
1. **#3560, #3559, #3558 — "Duplicate item found with id fc_call_*" errors** [OPEN]  
   *Multiple reports of sudden 400 websocket errors on tool-call turns. Plain chat works; failures occur after function calls.*  
   👤 10 comments total, 8 👍  
   [Link](https://github.com/github/copilot-cli/issues/3560) | [Link](https://github.com/github/copilot-cli/issues/3559) | [Link](https://github.com/github/copilot-cli/issues/3558)

2. **#223 — "Copilot Requests" permission not visible for org-owned fine-grained tokens** [OPEN]  
   *Enterprise admin pain point: orgs want to restrict PATs but the permission is hidden for org-owned tokens.*  
   💬 27 comments, 73 👍  
   [Link](https://github.com/github/copilot-cli/issues/223)

3. **#1274 — CLI getting constant 400 errors for invalid request body** [OPEN]  
   *~95% of code-review prompts failing with 400 errors. User reports server-side validation issue or malformed request crafting.*  
   💬 24 comments, 11 👍  
   [Link](https://github.com/github/copilot-cli/issues/1274)

4. **#1044 — Slash commands not supported in `copilot --acp`** [OPEN]  
   *ACP frontends (e.g. Zed) cannot use slash commands because `available_commands_update` is never sent.*  
   💬 15 comments  
   [Link](https://github.com/github/copilot-cli/issues/1044)

5. **#3565 — Task tool silently downgrades subagent model via multiplier guard** [OPEN]  
   *Subagent model overrides (frontmatter or explicit) are ignored if they’re more expensive than the parent session model.*  
   👤 0 comments (new)  
   [Link](https://github.com/github/copilot-cli/issues/3565)

6. **#3539 — System/Tools consume 73% of context window with 10+ MCP servers** [OPEN]  
   *Immediate auto-compaction triggered on first message; negative free space before user input.*  
   💬 3 comments, 2 👍  
   [Link](https://github.com/github/copilot-cli/issues/3539)

7. **#3527 — `contextTier` setting persisted but not applied on session start** [CLOSED]  
   *Long-context tier opt-in silently ignored; sessions default to 200k.*  
   💬 2 comments  
   [Link](https://github.com/github/copilot-cli/issues/3527)

8. **#3355 — Claude Opus 4.6 capped at 200K despite 1M native capability** [OPEN]  
   *80% context reduction forces frequent summarization during deep sessions.*  
   💬 2 comments, 2 👍  
   [Link](https://github.com/github/copilot-cli/issues/3355)

9. **#2540 — Plugin-defined `preToolUse` hooks do not fire** [OPEN]  
   *Hooks defined in `hooks.json` never execute in main session or subagents.*  
   💬 3 comments, 3 👍  
   [Link](https://github.com/github/copilot-cli/issues/2540)

10. **#3520 — CLI writes session events without required `ephemeral` field** [OPEN]  
    *v1.0.54 broke VS Code session resume by omitting the `ephemeral` field.*  
    💬 1 comment  
    [Link](https://github.com/github/copilot-cli/issues/3520)

---

### 4. Key PR Progress
*No pull requests were updated in the last 24 hours.*

---

### 5. Feature Request Trends
- **MCP lifecycle management** — Users want to enable/disable MCP servers from the `/mcp show` menu without editing configs (#3564). Also, persistent `github-mcp-server` enablement without manual re-enable per session (#3548).
- **Dedicated security command** — A `/security-review` command for automated vulnerability detection before commit, inspired by Claude Code (#1133).
- **VS Code MCP integration** — Load MCP servers already configured in VS Code into Copilot CLI sessions (#39).
- **Context-window transparency** — Users want configurable context windows matching model capabilities (e.g., 1M for Opus 4.6) (#3355).
- **Enterprise governance** — Restrict VS Code extensions from installing unapproved MCP servers outside private registries (#3207).

---

### 6. Developer Pain Points
- **Duplicate-item websocket errors** — Spiking trend: three new issues (#3560, #3559, #3558) all report session-state replay creating duplicate `fc_call_*` IDs. Breaks entirely on tool-call turns.
- **Context-window starvation with MCP** — Multi-server setups consume >70% of the window pre-user-input (#3539), forcing compaction and quality degradation.
- **Silent model downgrading** — The `task` tool quietly uses cheaper models even when explicitly overridden (#3565), undermining agentic delegation.
- **Token governance opacity** — Free/Student users forced to Auto model selection without clear visibility (#v1.0.55 release); orgs can’t enforce fine-grained token permissions (#223).
- **Session event schema drift** — v1.0.54 writes events missing required `ephemeral` field, breaking VS Code resume (#3520).
- **Plugin hook unreliability** — `preToolUse` hooks completely non-functional (#2540); `ask` permission decisions trigger duplicate prompts (#3042).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-05-29

## Today's Highlights
A major community discussion has erupted around **Project #2381**, questioning Moonshot AI's strategic shift from `kimi-cli` to a rebuilt `kimi-code`, with users expressing concern about ecosystem fragmentation. On the technical side, there's been a surge of fixes and features across ACP protocol compliance, session stability, and tool error handling — 13 PRs updated in the last 24 hours. The community remains highly engaged on nested skill directory compatibility and the unresolved terminal hang issue.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#2381] Why abandon kimi-cli and redo kimi code?** (OPEN, 🔥 3 comments)  
   A strongly worded community concern about Moonshot AI splitting the CLI user base by rebuilding from scratch instead of maintaining `kimi-cli`. Users fear losing trust in the product as a long-term productivity tool.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2381)

2. **[#1894] Kimi CLI cannot recursively load nested skill directories** (OPEN, 5 comments)  
   Codex compatibility gap: nested `.agents/skills/{name}/skills/xxx` structure works on Codex but not on Kimi CLI. Blocks users sharing skill configurations across tools.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1894)

3. **[#2394] ACP server does not report per-turn token usage** (OPEN)  
   ACP host applications cannot track token consumption even though Kimi computes it internally. Critical for cost monitoring in orchestrated workflows.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2394)

4. **[#2384] Large context requests frequent ConnectTimeout, timeout not configurable** (OPEN)  
   Sessions exceeding ~120k input tokens consistently hit `httpx` connect timeouts with no user-configurable timeout option. Blocks long-context workflows.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2384)

5. **[#2385] File search in Zed falls into infinite loop** (OPEN)  
   Integration with Zed editor causes infinite loops during file lookups, severely impacting IDE usability.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2385)

6. **[#2127] ACP protocol `session/list` and `session/get` not implemented** (CLOSED)  
   Zed users could not resume past conversations after closing/reopening the editor. Fixed by PR #2132.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2127)

7. **[#1984] Terminal hang on exit and MCP connection leak** (CLOSED)  
   Long sessions caused terminal to hang on `/exit`, requiring force-close. Isolated MCP connections remained after process termination. Fixed by PR #1985.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1984)

8. **[#2386] /undo and fork broken with slash-command-only turns** (related PR open)  
   Sessions using only slash-commands (no real user message) cause undo to fail due to incorrect turn indexing in `wire.jsonl`.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1974)

9. **[#2336] Orphan tool_calls after mid-turn kill** (related PR open)  
   Sessions killed mid-turn leave incomplete `tool_call` states in `context.jsonl`, corrupting replay.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2336)

10. **[#2017] Unsupported image formats block ReadMediaFile tool** (related PR open)  
    Calling `ReadMediaFile` on `.ico` or other non-supported formats causes failures since providers accept only PNG/JPG/GIF/WebP.  
    [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2017)

## Key PR Progress

1. **[#2047] fix(acp): load ~/.kimi/mcp.json in ACP server sessions** (OPEN)  
   Ensures locally configured MCP tools are available when Kimi runs as an ACP server (Zed integration). Previously users only got built-in tools.  
   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2047)

2. **[#2393] docs: update evolution banner to announce rebuilt CLI release** (CLOSED)  
   Documentation banner now points users to `MoonshotAI/kimi-code`, signaling the strategic shift.  
   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2393)

3. **[#2391] chore(release): bump kimi-cli to 1.46.0** (OPEN)  
   Version bump with release notes reorganization.  
   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2391)

4. **[#1985] fix(term, app): prevent TTY hang on exit and close MCP connections** (CLOSED)  
   Root cause fix for terminal hang: made `os.read()` non-blocking with `set_blocking(False)`, and added proper MCP connection cleanup on shutdown.  
   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1985)

5. **[#2132] fix(acp): replay session history on load** (CLOSED)  
   Implements `session/list` and `session/get` for ACP protocol, enabling Zed to resume past conversations.  
   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2132)

6. **[#2390] feat(shell): update welcome tip link and support styled Text** (CLOSED)  
   Redirects users to new `kimi.com/code` landing page and adds clickable hyperlinks in the shell UI.  
   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2390)

7. **[#2389] fix(tools): include trailing output in error briefs** (OPEN)  
   When shell commands fail, the error summary now shows trailing stdout/stderr output instead of truncated middle.  
   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2389)

8. **[#2388] fix(shell): persist pasted text placeholders** (OPEN)  
   Long pasted text shown as `[Pasted text #1]` would disappear after session recall. This fix persists the placeholder-to-text mapping.  
   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2388)

9. **[#2386] fix(session): map undo wire turns to context turns** (OPEN)  
   Fixes `/undo` for sessions where only slash commands are used (no user messages), by correctly indexing turns across `wire.jsonl` and `context.jsonl`.  
   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2386)

10. **[#2369] feat(subagent): add API key pool for parallel subagent execution** (OPEN)  
    Round-robin API key allocator enabling parallel subagent execution without key exhaustion. Critical for multi-agent orchestration.  
    [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2369)

## Feature Request Trends

- **Codex compatibility parity**: Users consistently request recursive skill directory loading (#1894), highlighting the need for cross-platform agent skill sharing
- **ACP protocol completeness**: Multiple issues target missing ACP endpoints (`session/list`, token usage reporting) for better IDE integration
- **Configurable timeouts**: Large-context workflows need user-settable HTTP timeouts (#2384)
- **Image format support expansion**: `ReadMediaFile` should auto-convert unsupported formats (ICO, BMP) to supported ones (#2017)
- **Parallel execution**: API key pooling (#2368) and subagent parallelism are emerging as high-value features for complex workflows

## Developer Pain Points

- **Community trust erosion**: Issue #2381 reflects deep frustration over the `kimi-cli` → `kimi-code` migration strategy, with users fearing abandonment of a tool they've adopted for production
- **Session stability**: Terminal hangs on exit (fixed in #1985) and orphan tool_calls after crashes (#2336) erode confidence in long-running sessions
- **IDE integration friction**: Zed-specific bugs (infinite file search loops, missing session history) indicate incomplete ACP server implementation
- **Large context unreliability**: Frequent timeout errors at ~120k tokens with no configuration escape hatch block users working with large codebases
- **Skill ecosystem fragmentation**: Incompatibility between Kimi CLI and Codex on nested skill discovery forces users to maintain duplicate configurations

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-29

## Today’s Highlights
OpenCode v1.15.12 ships experimental WebSocket transport for streaming and ACP-next integration for richer provider communications. The community is intensely discussing GPT model latency (#29079, 102 comments) and pushing for dynamic subagent model selection (#6651). Meanwhile, DeepSeek’s permanent 75% price cut has sparked a major feature request to adjust subscription usage limits (#28846).

---

## Releases

**v1.15.12** — [changelog](https://github.com/anomalyco/opencode/releases/tag/v1.15.12)  
- **Core Improvements:** ACP integrations can now send prompts, slash commands, and usage updates via the new `acp-next` protocol.  
- **New Transport:** WebSocket transport for OpenAI responses on supported channels (opt-in via `OPENCODE_EXPERIMENTAL_WEBSOCKETS=true`).  
- **Bugfixes:** Adaptive reasoning controls for Anth (Anthropic models) are now re-enabled, resolving a regression where students were silently ignored.

---

## Hot Issues (Top 10 by Community Activity)

1. **[#29079 – GPT Models takes too long to respond](https://github.com/anomalyco/opencode/issues/29079)**  
   *MarcoLouisNarca* • 102 comments • 48 👍  
   **Why it matters:** GPT-5.4 with `xhigh` variant can stall for minutes on trivial commands. This is the most commented issue across the entire tracker, indicating a widespread user experience regression. Community suspects provider-side throttling or misconfigured retry logic.

2. **[#6651 – [FEATURE]: Dynamic model selection for subagents via Task tool](https://github.com/anomalyco/opencode/issues/6651)**  
   *mcking-07* • 36 comments • 46 👍  
   **Why it matters:** Authors of multi-agent workflows cannot dynamically route sub-tasks to cheaper or faster models without hardcoding. This request has been open since January and remains a top ask for advanced users.

3. **[#28846 – [FEATURE]: Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction](https://github.com/anomalyco/opencode/issues/28846)**  
   *icocoon* • 28 comments • 46 👍  
   **Why it matters:** DeepSeek slashed V4 Pro prices permanently. Users want OpenCode Go subscriptions to reflect this immediately to avoid overpaying per token.

4. **[#27530 – "4 of 5 requests failed: config.providers: Unexpected server error" on startup](https://github.com/anomalyco/opencode/issues/27530)**  
   *chrissound* • 19 comments • 10 👍  
   **Why it matters:** A show-stopper for new users — OpenCode fails to launch entirely. Multiple provider requests failing suggests a server-side or authentication regression.

5. **[#29618 – reasoning_content missing when using DeepSeek V4 Flash in thinking mode](https://github.com/anomalyco/opencode/issues/29618)**  
   *beeckrumi0000* • 11 comments • 3 👍  
   **Why it matters:** The thinking-mode loop breaks with DeepSeek V4 over OpenRouter, causing agent stalls. Affects a large subset of users who rely on chain-of-thought reasoning.

6. **[#11232 – Feature Request: Native Scheduling for OpenCode](https://github.com/anomalyco/opencode/issues/11232)**  
   *dzianisv* • 10 comments • 11 👍  
   **Why it matters:** Users want `opencode schedule --cron` to run skills on a timer, removing dependency on system crontab. A long-standing gap for automation use-cases.

7. **[#20066 – [FEATURE]: Make "Allow always" permission option persist across sessions](https://github.com/anomalyco/opencode/issues/20066)**  
   *Speedymr01* • 5 comments • 6 👍  
   **Why it matters:** Permission grants are lost on restart, forcing users to re-approve every tool every session. A basic UX friction that blocks smooth multi-session workflows.

8. **[#28686 – Desktop V2 UI hides prompt controls and status popover](https://github.com/anomalyco/opencode/issues/28686)**  
   *9drbxz8jnt-hash* • 2 comments • 4 👍  
   **Why it matters:** The new V2 titlebar removes access to agent selector, reasoning-effort slider, and MCP/LSP status popover. Power users cannot change model or diagnose plugin state.

9. **[#28696 – [FEATURE]: Plugin/Agent/Skills/etc marketplace](https://github.com/anomalyco/opencode/issues/28696)**  
   *rekram1-node* • 2 comments • 8 👍  
   **Why it matters:** A unified discovery hub for plugins, skills, and agents. The community is rallying for an official registry to reduce fragmentation.

10. **[#29051 – V2 prompt input hides model reasoning selector](https://github.com/anomalyco/opencode/issues/29051)**  
    *Ogyeet10* • 4 comments • 0 👍  
    **Why it matters:** Users of GPT-5.5 and reasoning variants cannot change reasoning effort from the prompt bar in the desktop V2 UI — a direct UX degration for paid-tier users.

---

## Key PR Progress (Top 10 by Complexity/Impact)

1. **[#29803 – fix(desktop): bump @lydell/node-pty to 1.2.0-beta.12](https://github.com/anomalyco/opencode/pull/29803)**  
   Fixes repeated Windows sidecar crashes and stderr floods (#29599). Critical for Windows desktop users.

2. **[#29738 – fix(opencode): update skill handling in context and permissions](https://github.com/anomalyco/opencode/pull/29738)**  
   Closes #29727 & #21793. Filters skill list by permissions and respects `allow`/`deny` scoping. Essential for enterprise security.

3. **[#29666 – fix(opencode): enforce storage path invariants](https://github.com/anomalyco/opencode/pull/29666)**  
   Adds a `PathStorage` value object to normalize relative/absolute paths across SQLite schema. Underpins long-term session portability.

4. **[#29801 – fix: de-flake compaction backoff-abort and openai ws-pool tests](https://github.com/anomalyco/opencode/pull/29801)**  
   Fixes wall-clock races in compaction and websocket pool tests. Also fixes a real race-condition bug in the WS pool.

5. **[#24728 – feat: `opencode session move` / `session detached`](https://github.com/anomalyco/opencode/pull/24728)**  
   Adds CLI commands to move and detach sessions, enabling session migration and orphan recovery (#23249).

6. **[#24740 – fix(opencode): batch vcs git show calls](https://github.com/anomalyco/opencode/pull/24740)**  
   Batches `git show HEAD:<file>` calls for multi-file diffs, drastically speeding up `/vcs/diff` on large refactors.

7. **[#24707 – Add Effect Drizzle SQLite adapter](https://github.com/anomalyco/opencode/pull/24707)**  
   Experimental `@opencode-ai/effect-drizzle-sqlite` package for Bun SQLite + Drizzle with Effect v4 error handling. Signals architectural direction.

8. **[#24852 – feat: add skills.format config option](https://github.com/anomalyco/opencode/pull/24852)**  
   Lets users serialize skills as XML, JSON, or Markdown. Unlocks custom skill deployment pipelines.

9. **[#24753 – feat(tui): implement model and provider theme auto-selection](https://github.com/anomalyco/opencode/pull/24753)**  
   Auto-switches TUI theme based on active model/provider (#6631). A quality-of-life win for multi-model users.

10. **[#24720 – fix(desktop): prevent 100% CPU usage caused by infinite reconnects](https://github.com/anomalyco/opencode/pull/24720)**  
    Resolves 100% CPU spike in `opencode-cli serve` on Linux/WSL. Root causes were recursive directory traversal and reconnect storms.

---

## Feature Request Trends

1. **Dynamic Model Routing** — #6651 leads a cluster of requests for per-subagent model selection. Users want reasoning models for analysis, cheap models for routine edits.  
2. **Scheduling & Cron** — #11232 (native scheduling) has sustained demand since January. Automating recurring skills (e.g., weekly code review, daily standup) is a common workflow.  
3. **Marketplace & Registry** — #28696 (plugin/agent marketplace) is gaining steam. Community wants an official discovery, installation, and versioning system to replace scattered GitHub repos.  
4. **Pricing & Quota Adjustments** — #28846 (DeepSeek price cut reflection) and #23722 (Qwen quota errors) show users are cost-sensitive and want real-time pricing sync.  
5. **Persistence & Permissions** — #20066 (persistent “allow always”), #27497 (subagent permission inheritance), and #29727 (skill visibility) point to a systematic permissions model overhaul.

---

## Developer Pain Points

- **GPT latency regression** (#29079): Random multi-minute stalls on simple prompts — most upvoted pain point. Investigate provider backpressure or retry budget.  
- **DeepSeek thinking-mode breakage** (#29618): `reasoning_content` not passed back by OpenRouter, causing agent deadlocks. Requires protocol-level fix.  
- **Desktop V2 UI regression** (#28686, #29051): Removal of model selector, reasoning slider, and status popover. High friction for power users on the new interface.  
- **Unexpected server errors on startup** (#27530): Blocking issue for 10+ users. Likely provider fetch race or auth token expiry.  
- **File write/edit silent abort >6KB** (#29779): Tools truncate silently without error. Dangerous for large refactors — users report lost work.  
- **Windows desktop sidecar crashes** (#29803 PR): node-pty regression causing stderr floods and repeated crashes on Windows. Now fixed in preview PR.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-29

## Today's Highlights
Pi v0.77.0 launched with Claude Opus 4.8 support and a highly requested `--exclude-tools` flag for granular tool control. The community is actively converging on an extension API to enable non-TUI remote clients (phone apps, web bridges), with multiple complementary PRs and feature requests filed in the last 48 hours. A critical GC root cause fix for file review diffs going empty (PR #5139) was merged and released, resolving a long-standing bug that affected coding-agent sessions.

## Releases
**v0.77.0** — released today
- **Claude Opus 4.8 support**: Adds Anthropic Claude Opus 4.8 metadata and updates Opus adaptive-thinking coverage.
- **Selective tool disablement**: New `--exclude-tools` / `-xt` flag disables specific built-in, extension, or custom tools while leaving the rest available. See [Tool Options](https://github.com/badlogic/pi-mono).

## Hot Issues

1. **[#4945](https://github.com/earendil-works/pi/issues/4945) — `openai-codex` hangs on "Working..." with zero-usage aborted turns** (OPEN, 45 comments, 22 👍)  
   GPT-5.5 via Codex intermittently freezes the TUI with no streamed text or tool calls. Only Escape recovers, recording aborted turns. Top-voted issue; happening repeatedly over days — high impact for Codex users.

2. **[#5089](https://github.com/earendil-works/pi/issues/5089) — `timeoutMs` not respected past a certain value** (CLOSED, 8 comments)  
   On underpowered machines (e.g., CPU-only Qwen 3.6 27B), Pi ignores the timeout setting for long-running operations like reading large files. Affects users on constrained hardware.

3. **[#4801](https://github.com/earendil-works/pi/issues/4801) — DeepSeek v4 Pro "xhigh" reasoning_effort rejected on OpenRouter** (CLOSED, 7 comments)  
   `xhigh` reasoning effort sent as-is fails validation; OpenRouter expects a different enum set. Fixed after community debugging of OpenRouter API behavior.

4. **[#5148](https://github.com/earendil-works/pi/issues/5148) — Resuming a ChatGPT 5.5 session after Claude Opus extended thinking returns 400** (CLOSED, 4 comments, 6 👍)  
   Cross-provider session resumes fail with duplicate message ID errors. The fallback ID generator (`msg_${msgIndex}`) clashes when switching between Anthropic and OpenAI output formats.

5. **[#5103](https://github.com/earendil-works/pi/issues/5103) — Windows bash detector fails with non-default Git Bash install paths** (OPEN, 4 comments)  
   Hardcoded `C:\Program Files` path check misses Git Bash on `D:\` drives. Affects developers with custom drive layouts — a common Windows setup.

6. **[#5087](https://github.com/earendil-works/pi/issues/5087) — GPT-5.5 context window capped at 272K vs. documented 1.05M** (CLOSED, 4 comments)  
   Pi's metadata shows 272K tokens, but OpenAI docs and Shopify AI Proxy report ~1M. Likely a stale model definition issue.

7. **[#5117](https://github.com/earendil-works/pi/issues/5117) — Qwen 3.7 Max on OpenRouter broken** (OPEN, 3 comments)  
   `developer` role messages are rejected — OpenRouter endpoint expects only `system`/`assistant`/`user`/`tool`/`function`. Pi's OpenAI adapter may be injecting developer messages for this model.

8. **[#5145](https://github.com/earendil-works/pi/issues/5145) — Skills with `.gitignore` in directory are not discovered** (CLOSED, 3 comments)  
   A `.gitignore` containing `*` hides the skill directory entirely, even if `SKILL.md` isn't ignored. Skill loader needs to exclude gitignore logic.

9. **[#5040](https://github.com/earendil-works/pi/issues/5040) — `PI_CODING_AGENT_SESSION_DIR` forces flat storage** (OPEN, 3 comments)  
   Sessions stored flat instead of nested under `--<cwd>--/`, breaking `/resume` filtering by current folder. All sessions appear in every project context.

10. **[#5098](https://github.com/earendil-works/pi/issues/5098) — Inline images and arrow keys broken inside tmux** (OPEN, 2 comments)  
    `detectCapabilities()` returns `images: null` unconditionally under `$TMUX`, even when the parent terminal supports image protocols. Arrow key sequences also misbehave in tmux.

## Key PR Progress

1. **[#5139](https://github.com/earendil-works/pi/pull/5139) — File review diff empty root cause fix + v0.74.56** (CLOSED)  
   Rewrites `InternalGit.gc()` to auto-protect tree objects and referenced blobs. Fixes the bug where subagent GC deletes blobs needed by the main session, causing file review diffs to return null. Critical stability fix for coding-agent sessions.

2. **[#5140](https://github.com/earendil-works/pi/pull/5140) — Extension APIs for remote-control clients** (CLOSED)  
   Adds `ctx.executeInputLine(text)`, `pi.withTui(false)`, and `session.waitForUserInput()` for non-TUI remote clients (phone apps, web bridges). RFC patch set from the `pi-remote-control` project.

3. **[#5156](https://github.com/earendil-works/pi/pull/5156) — `--name/-n` CLI flag for session display name** (OPEN)  
   Allows setting session name at startup via CLI, matching the existing `/name` TUI command. Simple UX improvement for scripted / headless usage.

4. **[#5088](https://github.com/earendil-works/pi/pull/5088) — Experimental grouped tool calls** (OPEN)  
   Groups related tool calls together in the TUI output. Not yet ready for consumption, but signals future UX direction for reducing visual noise from parallel tool invocations.

5. **[#5029](https://github.com/earendil-works/pi/pull/5029) — Abort in-flight LLM call on `AgentSession.dispose()`** (CLOSED)  
   Fixes resource leaks where `switchSession`/`newSession`/`fork`/`clone` left previous LLM HTTP requests running until they naturally completed. Prevents wasted tokens and potential stale state.

6. **[#5091](https://github.com/earendil-works/pi/pull/5091) — Harden keyboard protocol negotiation** (CLOSED)  
   Another attempt to fix keyboard input issues (#3259) in the TUI, improving terminal compatibility across platforms.

7. **[#5115](https://github.com/earendil-works/pi/pull/5115) — Drain follow-ups queued during `agent_end`** (CLOSED)  
   Fixes a bug where extensions queueing follow-up messages during `agent_end` got stuck until the next user message, because they needed explicit `deliverAs` to bypass "Agent is already processing" errors.

8. **[#5118](https://github.com/earendil-works/pi/pull/5118) — Buffer `reasoning_details` arriving before `tool_calls`** (CLOSED)  
   OpenRouter and other providers stream encrypted thought signatures before the tool call chunk they reference. This PR buffers them until the tool call chunk arrives, fixing silent signature dropping.

9. **[#4971](https://github.com/earendil-works/pi/pull/4971) — `allowEmptySignature` compat option for Anthropic providers** (CLOSED)  
   Some Anthropic-compatible providers return thinking blocks with empty `thinkingSignature` but accept them on replay. Prevents rewriting empty-signature blocks as plain text, which broke prompt caching and caused 400 errors.

10. **[#3102](https://github.com/earendil-works/pi/pull/3102) — Wrap markdown links in OSC 8 hyperlink sequences** (CLOSED)  
    Makes rendered links clickable (cmd/ctrl-click) in Kitty, iTerm2, Ghostty, WezTerm, and Windows Terminal. A long-awaited UX polish item finally merged from April.

## Feature Request Trends

The dominant feature direction this week is **Remote Control & Non-TUI Client APIs** — multiple contributors filed related PRs and issues (#5140, #5142) to enable phone apps, web bridges, and other remote interfaces to drive the pi interactive experience. The proposed surface includes `executeInputLine`, `withTui(false)`, and `waitForUserInput`.

Other notable trends:
- **Provider expansion**: NVIDIA NIM support (#5101), Anthropic Vertex AI (#5082), and Ant-Ling Ling/Ring 2.6 models (#5110) — the community is actively filling provider gaps.
- **Session naming & management**: Multiple requests for CLI-level session naming (#5156, #5153) and better session directory isolation (#5040).
- **Tool introspection**: Exposing full tool definitions to extensions (#5085, #4954) to enable tool-use debugging UIs and manual tool invocation.

## Developer Pain Points

1. **Cross-provider session resumption** — Switching between Anthropic and OpenAI models in the same session consistently produces duplicate message ID errors (#5148, #5149). The fallback ID generation scheme breaks when message formats differ.

2. **Terminal compatibility fragmentation** — tmux users face broken inline images and arrow keys (#5098); ANSI colors in the installer are unreadable on some terminals (#5124); keyboard protocol negotiation remains fragile (#5091, #3259).

3. **OpenRouter model compatibility** — Multiple providers (DeepSeek, Qwen, Xiaomi Mimo) fail on OpenRouter due to subtle API differences: role restrictions (#5117), reasoning effort enum mismatches (#4801), and reasoning_content requirements (#5106).

4. **Resource cleanup on non-graceful exit** — SIGTERM/SIGHUP kills leave extension sockets and other resources dangling (#5080). Only Ctrl+D properly triggers cleanup.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-29

## Today's Highlights

The Qwen Code team made significant progress on two major fronts: daemon (serve) mode parity with CLI and TUI display optimization. A new `POST /session/:id/btw` endpoint for side questions was added to the daemon, while multiple PRs address TUI spacing, thinking output transience, and compact-first layouts. On the bug front, a critical fix for local LLM body timeout errors (300s cap) is under review, and the community continues to push for Claude Code-style stats, computer use, and compaction models.

## Releases

**v0.16.1-nightly.20260528.34b7d472e** — Nightly release with one fix:
- `fix(cli): surface startup warnings on stderr before TUI render (#4448)` — improves error visibility during CLI initialization

## Hot Issues

1. **#4175** — `[type/feature-request] proposal(serve): Mode B feature-priority roadmap toward v0.16 production-ready`  
   *Author: doudouOUC | Comments: 41*  
   Roadmap for daemon mode (`qwen serve`) after Stage 1 merge. Defines remaining work: non-blocking prompt, workspace refactor. High community engagement.  
   [Issue #4175](https://github.com/QwenLM/qwen-code/issues/4175)

2. **#4493** — `[type/bug] rider无法登录qwen code` (rider cannot log in to Qwen Code)  
   *Author: youxi777 | Comments: 5*  
   OAuth login redirect loop in rider IDE; prevents token plan usage. Blocks JetBrains users.  
   [Issue #4493](https://github.com/QwenLM/qwen-code/issues/4493)

3. **#4604** — `[type/bug] API Error: terminated (cause: Body Timeout Error)`  
   *Author: denysobukh | Comments: 3*  
   Web page processing fails after 300s. Root cause identified as undici body timeout. Being fixed in PR #4605.  
   [Issue #4604](https://github.com/QwenLM/qwen-code/issues/4604)

4. **#4597** — `[type/feature-request] feat(stats): 增强stats能力，支持跨session的全局用量统计`  
   *Author: BenGuanRan | Comments: 2 | 👍: 1*  
   Requests persistent cross-session usage tracking with interactive dashboard, similar to Claude Code stats.  
   [Issue #4597](https://github.com/QwenLM/qwen-code/issues/4597)

5. **#4589** — `[type/bug] vscode ide fetchFN issue`  
   *Author: ZeyuanXu4 | Comments: 1*  
   Fetch function import fails in VS Code extension after Node.js undici update. Breaks installation.  
   [Issue #4589](https://github.com/QwenLM/qwen-code/issues/4589)

6. **#4586** — `[type/bug] qwen cli 升级后，在pycharm 终端中使用qwen cli 容易因为按ctrl +c导致意外退出`  
   *Author: supermova2024 | Comments: 1*  
   Ctrl+C now triggers instant exit (previously required double press). ESC doesn't interrupt conversation in PyCharm.  
   [Issue #4586](https://github.com/QwenLM/qwen-code/issues/4586)

7. **#4591** — `[type/feature-request] Built-in Computer Use support with zero-config installation flow`  
   *Author: LaZzyMan | Comments: 1*  
   Proposes nine built-in `computer_use__*` tools for desktop app automation via MCP. PR #4590 implements this.  
   [Issue #4591](https://github.com/QwenLM/qwen-code/issues/4591)

8. **#4582** — `[type/feature-request] [Daemon] RFC: POST /prompt should be non-blocking`  
   *Author: chiga0 | Comments: 1*  
   Daemon's prompt endpoint blocks until agent turn completes, causing timeout issues. Proposes async trigger/status pattern.  
   [Issue #4582](https://github.com/QwenLM/qwen-code/issues/4582)

9. **#4593** — `[type/enhancement] /clear should not switch to a new session ID`  
   *Author: zjgzx1988 | Comments: 1*  
   `/clear` creates new session, breaking session-based debugging and log lookup. Requested to clear in-place.  
   [Issue #4593](https://github.com/QwenLM/qwen-code/issues/4593)

10. **#4592** — `[type/feature-request] refactor(core): replace tail-preservation compaction with "summary + restoration attachments"`  
    *Author: LaZzyMan | Comments: 0*  
    Proposes Claude Code-style compaction that always sends entire curated history to summary side-query. PR #4599 implements this.  
    [Issue #4592](https://github.com/QwenLM/qwen-code/issues/4592)

## Key PR Progress

1. **#4610** — `feat(daemon): add POST /session/:id/btw endpoint for side questions`  
   *Author: doudouOUC*  
   Adds daemon REST endpoint for side questions (`/btw`), extracts shared utilities, wires through ACP bridge. Unblocks daemon/CLI parity for interactive features.  
   [PR #4610](https://github.com/QwenLM/qwen-code/pull/4610)

2. **#4563** — `refactor(serve): extract DaemonWorkspaceService from AcpSessionBridge (issue #4542, 方案 C)`  
   *Author: doudouOUC*  
   Extracts workspace-scoped capabilities (File/Auth/Agents/Memory) into separate service facade. Reduces bridge complexity for daemon mode.  
   [PR #4563](https://github.com/QwenLM/qwen-code/pull/4563)

3. **#4608** — `feat(telemetry): add tool spans and session.id to daemon/ACP path`  
   *Author: doudouOUC*  
   Adds `session.id` attributes and tool execution spans to daemon telemetry. Enables ARMS querying by session and aligns with CLI tracing.  
   [PR #4608](https://github.com/QwenLM/qwen-code/pull/4608)

4. **#4595** — `fix(tui): Tighten message and tool spacing`  
   *Author: chiga0*  
   Centralizes and reduces spacing between assistant responses and tool calls. Part of TUI optimization epic #4588.  
   [PR #4595](https://github.com/QwenLM/qwen-code/pull/4595)

5. **#4598** — `fix(tui): Make thinking output transient`  
   *Author: chiga0*  
   Makes thinking output scroll away (preview/loading modes) instead of persisting. Configurable via `ui.thinkingDisplayMode`.  
   [PR #4598](https://github.com/QwenLM/qwen-code/pull/4598)

6. **#4605** — `fix(core): disable undici 300s bodyTimeout for no-proxy Node.js path`  
   *Author: Pepograminger*  
   Fixes "Body Timeout Error" after exactly 300s when using local LLM backends (LM Studio, Ollama) without proxy.  
   [PR #4605](https://github.com/QwenLM/qwen-code/pull/4605)

7. **#4590** — `[Very Important] feat(computer-use): zero-config built-in via open-computer-use MCP`  
   *Author: LaZzyMan*  
   Adds nine computer use tools for desktop app automation. Zero-config installation on macOS/Windows/Linux.  
   [PR #4590](https://github.com/QwenLM/qwen-code/pull/4590)

8. **#4599** — `refactor(core)!: replace tail-preservation compaction with summary + restoration attachments`  
   *Author: LaZzyMan*  
   Implements Claude Code-style full-history summary with post-compact restoration attachments. Breaking change to compaction model.  
   [PR #4599](https://github.com/QwenLM/qwen-code/pull/4599)

9. **#4570** — `feat(skill): add /triage skill for AI-native PR intake and issue triage`  
   *Author: yiliang114*  
   Adds maintainer skill for automated PR/issue triage via `/triage` command. Consolidates multiple design docs.  
   [PR #4570](https://github.com/QwenLM/qwen-code/pull/4570)

10. **#4606** — `feat(daemon): add request-level logging for serve routes`  
    *Author: doudouOUC*  
    Adds access-log middleware for method, path, sessionId, status, duration. Distinguishes session spawn/attach/prompt events.  
    [PR #4606](https://github.com/QwenLM/qwen-code/pull/4606)

## Feature Request Trends

- **Daemon/CLI Parity**: Multiple issues request daemon match CLI features (non-blocking prompt #4582, side questions, `/btw` endpoint #4610, stats #4597)
- **TUI Polish**: Epic #4588 tracks spacing, branding, compact layouts. PRs #4595, #4598, #4422 address this.
- **Compaction Model**: Replacement of tail-preservation with summary+restoration (#4592, PR #4599) is gaining traction — Claude Code-inspired.
- **Computer Use**: Built-in desktop automation (#4591, PR #4590) with zero-config installation.
- **IDE Integration**: Rider login fix (#4493), PyCharm terminal behavior (#4586), VS Code fetch issue (#4589).
- **Hot Reload**: Comprehensive hot-reload for skills/extensions/MCP/config without restart (#3696).

## Developer Pain Points

- **Body Timeout on Local LLMs**: 300s undici bodyTimeout causes failures with Ollama/LM Studio (#4604, PR #4605). Affects users without proxy.
- **Session Management Confusion**: `/clear` creating new sessions (#4593), unbounded memory growth (#2128), misleading rewind errors (#4579).
- **IDE Compatibility**: Rider login redirect loop (#4493), PyCharm Ctrl+C behavior change (#4586), VS Code fetch function failure (#4589).
- **Error Reporting**: DOMException errors with local models (#4609), mid-turn rewind failures (#4579), missing daemon telemetry context (#4602).
- **Installation Friction**: No standalone executable or OpenCode-style installer (#3728), VS Code extension fetch issues (#4589).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-29

**Project Note:** The repository has been renamed from `Hmbown/DeepSeek-TUI` to `Hmbown/CodeWhale`. The community digest reflects this ongoing transition.

---

## 1. Today's Highlights

Activity surged with **41 open PRs** and **16 updated Issues**, signaling a major development sprint. Key themes include **IME/hanzi input fixes** (multiple PRs landing), **security model inconsistencies** around `exec_shell` and `allow_shell`, and a **brand-alignment push** moving all traces from "DeepSeek TUI" to "CodeWhale". The community is also organizing around **custom API provider support** and **multi-model orchestration** as top feature requests.

---

## 2. Releases

No new releases in the last 24 hours. The latest stable version remains **v0.8.47**.

---

## 3. Hot Issues (10 Selected)

### #1615 — Docker launch produces garbled output (CLOSED)
**Author:** chccl | **Comments:** 191 | [View Issue](https://github.com/Hmbown/CodeWhale/issues/1615)

The most commented issue on the board. User reports running the official Docker image produces terminal corruption on every launch, despite following documentation exactly. The frustration level is high — the author called the project "garbage" and resorted to force-restarting Linux servers. This is a critical onboarding friction point for Docker-based users. Closed without resolution visible in the thread.

### #2247 — Support custom DeepSeek-compatible API providers
**Author:** hatakes | **Comments:** 4 | [View Issue](https://github.com/Hmbown/CodeWhale/issues/2247)

Currently CodeWhale only supports the official DeepSeek provider. This issue requests the ability to configure third-party providers (e.g., SiliconFlow, local vLLM deployments) that offer DeepSeek-compatible APIs. Widely relevant as users seek price arbitrage and self-hosted options. Receives strong implicit support from related issues like #2300.

### #1747 — Cache hit problem / UI readability concerns
**Author:** Amund | **Comments:** 3 | 👍: 2 | [View Issue](https://github.com/Hmbown/CodeWhale/issues/1747)

A long-time contributor reports that the TUI is "somewhat hard to read" when following agent coding sessions. While the author felt this might seem minor, the issue touches on core UX quality — if developers can't follow the model's reasoning in real-time, trust in agent outputs erodes.

### #2309 — `/statusline` picker hides undiscovered options
**Author:** zhyuzhyu | **Comments:** 2 | [View Issue](https://github.com/Hmbown/CodeWhale/issues/2309)

The status-line picker only shows items already listed in `config.toml`. This means users cannot discover available status-line chips through the UI alone — they must know the config key names in advance. A discoverability design gap.

### #2323 — Chinese IME (Input Method) not adapted (OPEN)
**Author:** cmdcorp6534 | **Comments:** 1 | [View Issue](https://github.com/Hmbown/CodeWhale/issues/2323)

When using Chinese input methods, two issues manifest: inline hints remain visible during pinyin composition (UI overlay), and keystrokes accidentally feed into the model input buffer when modal dialogs are open. This is a hard blocker for native Chinese-speaking users.

### #2303 — `allow_shell` default false blocks `exec_shell` but not `task_shell_start`
**Author:** zlh124 | **Comments:** 1 | [View Issue](https://github.com/Hmbown/CodeWhale/issues/2303)

A security bypass: the `allow_shell` gate blocks `exec_shell` by default, but `task_shell_start` circumvents the same check entirely. This makes the security model both incomplete and misleading — users may think they've locked down shell execution when they haven't.

### #2328 — `exec_shell` mode availability inconsistent
**Author:** octasin | **Comments:** 0 | [View Issue](https://github.com/Hmbown/CodeWhale/issues/2328)

`exec_shell` works in YOLO mode but fails in Agent mode with a misleading "tool not available" error. Documentation does not mention this mode restriction. A clear documentation-vs-behavior mismatch.

### #2317 — Reply too long blocks further questions
**Author:** LujZhang | **Comments:** 0 | [View Issue](https://github.com/Hmbown/CodeWhale/issues/2317)

After a long model execution (18 minutes in the reporter's test), the conversation becomes unresponsive — no new input is accepted. Likely a state-management bug in the turn loop after large token completions.

### #2307 — Right-click context menu always in English
**Author:** yan-zay | **Comments:** 0 | [View Issue](https://github.com/Hmbown/CodeWhale/issues/2307)

With locale set to `zh-Hans`, the right-click menu renders entirely in English while the rest of the UI displays correctly. The root cause is hardcoded strings in `mouse_ui.rs`. Affects all non-English locales.

### #2322/#2321 — Config directory mismatch (legacy `~/.deepseek` vs `~/.codewhale`)
**Author:** yyyCode | **Comments:** 0 | [View Issue](https://github.com/Hmbown/CodeWhale/issues/2322)

Documentation still references the old `~/.deepseek` directory, but v0.8.47 creates `~/.codewhale` as the state directory. There is a legacy fallback but no official docs update. Causes confusion for new users on Windows.

---

## 4. Key PR Progress (10 Selected)

### #2332 — Add opt-in TUI render-diff debug logging
**Author:** cyq1017 | [View PR](https://github.com/Hmbown/CodeWhale/pull/2332)

Introduces `CODEWHALE_TUI_DEBUG=1` logging that captures per-frame size, diff cell count, and sampled coordinates. Useful for diagnosing performance issues in complex terminal renderings. Defaults to the new CodeWhale log directory with legacy fallback.

### #2333 — UnixSocketHookSink for real-time event streaming
**Author:** lihuan215 | [View PR](https://github.com/Hmbown/CodeWhale/pull/2333)

Adds a new hook sink that streams lifecycle events over Unix domain sockets. Enables low-latency local IPC for external monitoring dashboards and notification systems. Extends hook system beyond stdout/JSONL/webhook.

### #2302 — Animated "compacting" label replaces static text
**Author:** donglovejava | [View PR](https://github.com/Hmbown/CodeWhale/pull/2302)

During the session-compacting phase, the footer showed static text while loading phases showed elapsed seconds. This made compacting appear to hang. Now uses the same animated spinner with timer.

### #2329 — Skip hidden worktrees in workspace discovery
**Author:** donglovejava | [View PR](https://github.com/Hmbown/CodeWhale/pull/2329)

Sub-agent fan-out creates hidden git worktrees (`.claude/worktrees/`, `.worktrees/`) that trigger massive file tree walks, consuming excessive I/O. Skipping these prevents TUI saturation during agent-heavy workflows.

### #2330 — Route IME-committed Chinese characters to composer
**Author:** donglovejava | [View PR](https://github.com/Hmbown/CodeWhale/pull/2330)

Fixes a critical bug: Chinese IME characters were consumed by the paste-burst heuristic on terminals without bracketed paste support (Windows Terminal, SSH, tmux). Users saw nothing on screen despite typing. Now correctly routes to composer.

### #2331 — Eagerly load all `exec_shell` companion tools
**Author:** donglovejava | [View PR](https://github.com/Hmbown/CodeWhale/pull/2331)

Adds six shell companion tools to `DEFAULT_ACTIVE_NATIVE_TOOLS` so they are available at startup. Directly addresses #2328's Agent mode tool availability issue.

### #2326 — Enforce allowed tools for custom slash commands
**Author:** aboimpinto | [View PR](https://github.com/Hmbown/CodeWhale/pull/2326)

Phase 1 of custom slash command lifecycle architecture. Parses frontmatter for `description`, `argument-hint`, and `allowed-tools`. Surfaces command descriptions in autocomplete. Keeps scope narrow for reviewability.

### #2324 — Fix `/statusline` picker selection visibility
**Author:** reidliu41 | [View PR](https://github.com/Hmbown/CodeWhale/pull/2324)

When the terminal is too short to show all status items, the cursor could move onto clipped rows, making the selection appear to disappear. Fixes navigational clipping.

### #2320 — Localize right-click context menu labels
**Author:** zlh124 | [View PR](https://github.com/Hmbown/CodeWhale/pull/2320)

Directly addresses #2307. Wires context menu strings through the i18n system so "Paste" → "粘贴", "Command palette" → "命令面板" under zh-Hans locale.

### #2319 — Update terminal tab title from 'DeepSeek TUI' to 'CodeWhale'
**Author:** zlh124 | [View PR](https://github.com/Hmbown/CodeWhale/pull/2319)

Brand consistency fix: three source locations (spinner base title, notification completion marker, tab header) still said "DeepSeek TUI". Updated to "CodeWhale".

---

## 5. Feature Request Trends

The following directional themes emerge from the issue corpus:

- **Custom API Provider Support** (#2247, #2300): Multiple requests to support non-official DeepSeek providers (SiliconFlow, local vLLM, OpenAI-compatible endpoints). Users want price flexibility and self-hosting.
- **Multi-Model Orchestration** (#2300): Ability to configure multiple models and auto-select based on task type (vision, OCR, vectorization). Suggests users want a model router within the TUI.
- **Per-Task Model Selection** (#2300): Allowing the system to automatically choose the best model for each subtask rather than one model for the whole session.
- **Custom Slash Command Extensibility** (#2326, #2318): Mutable hooks for text transformation and lifecycle events at the command level. This is the most architecturally significant trajectory.
- **Improved Chinese IME Support** (#2323, #1675, #2330): Multiple overlapping issues around garbled output and input method integration. High priority for the Chinese-speaking developer base.

---

## 6. Developer Pain Points

Recurring frustrations from the past 24 hours:

- **Docker Reliability** (#1615): The Docker image remains broken for a subset of users. 191 comments with no clear resolution or fix merged. This is the single largest support burden.
- **Security Model Confusion** (#2303, #2328): `allow_shell` behavior is inconsistent across modes. Users cannot trust that their security settings are effective. Important for teams deploying CodeWhale in shared environments.
- **GLIBC Version Lockout** (#2299): Pre-built binary requires GLIBC_2.39, blocking users on Debian 12 / Deepin 21 (GLIBC 2.38). No statically linked or alternate distribution available.
- **No Escape for Leading Slash** (#2310): Cannot send a normal message starting with `/` — unconditionally treated as a command. A simple but frustrating UX gap for technical users.
- **Documentation Lag** (#2322): Docs reference `~/.deepseek` while the binary creates `~/.codewhale`. New users on Windows hit config-not-found errors if following outdated docs.
- **Long Session Deadlock** (#2317): After lengthy agent executions, the TUI becomes unresponsive. Forces hard kill of the process and loss of session state.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*