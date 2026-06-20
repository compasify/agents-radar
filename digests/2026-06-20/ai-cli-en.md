# AI CLI Tools Community Digest 2026-06-20

> Generated: 2026-06-20 00:28 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem: Cross-Tool Comparison Report
**Date:** 2026-06-20

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is experiencing a period of intense maturation, with six major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI—all actively shipping features while grappling with stability regressions. The ecosystem is converging around several critical themes: subagent orchestration reliability, cross-platform consistency, permission system hardening, and cost transparency. However, each tool exhibits distinct platform weaknesses: Claude Code and OpenAI Codex struggle with Windows stability, Gemini CLI and DeepSeek TUI face Linux compatibility issues, and Qwen Code's QQ Bot channel shows insufficient testing. The most urgent cross-cutting concern is runaway token consumption from recursive agent spawning, which has reached critical severity across multiple tools this week.

---

## 2. Activity Comparison

| Tool | Open Issues (24h change) | PRs Updated (24h) | Releases (24h) | Key Stability Flags |
|---|---|---|---|---|
| **Claude Code** | 10 hot issues, 1 critical bug | 1 | v2.1.183 | ⚠️ Subagent recursion bug (#68619) critical |
| **OpenAI Codex** | 10 hot issues, 4 crash-related | 10 | 4 alpha builds | ⚠️ Windows crash loop, Intel Mac SIGTRAP |
| **Gemini CLI** | 50+ issues updated | 10 | None | ⚠️ Agent hangs, false success reporting |
| **GitHub Copilot CLI** | 10 selected, 15 total updated | 0 | v1.0.64-1 | ⚠️ GUI hangs, Alpine architecture bug |
| **Kimi Code CLI** | None updated | 1 | None | Low activity overall |
| **OpenCode** | 50+ issues filed | 10 | None | ⚠️ CPU spin (#32965), memory leaks |
| **Pi** | 10 hot issues | 5+ | v0.79.8 | Streaming scroll-jacking bug |
| **Qwen Code** | 10 noteworthy | 10 | None | QQ Bot reliability, shell self-kill |
| **DeepSeek TUI** | 10 hot issues | 10+ | None (v0.8.63 prep) | glibc incompatibility, sidebar regression |

**Summary:** Claude Code, OpenCode, Qwen Code, and DeepSeek TUI show the highest PR velocity. Kimi Code CLI and GitHub Copilot CLI are less active. The most critical stability issues cluster around Claude Code (subagent recursion), OpenAI Codex (Windows crashes), and OpenCode (CPU spin).

---

## 3. Shared Feature Directions

The following requirements appear across **multiple** tool communities, indicating strong market demand:

### 3.1 Subagent Orchestration & Reliability
- **Tools:** Claude Code (#68619), OpenAI Codex (#26930), Gemini CLI (#21409, #22323), OpenCode (#32010), Qwen Code (#5180, #5239), DeepSeek TUI (#3327)
- **Needs:** Recursion guards, crash notification to parent sessions, token budget regulation, permission propagation to child agents, transparent retry logic
- **Urgency:** HIGH—runaway token burn is a critical financial risk

### 3.2 Cross-Platform Consistency
- **Tools:** Claude Code (Windows MSIX #26073), OpenAI Codex (Windows crashes), Gemini CLI (Wayland #21983), GitHub Copilot CLI (Alpine arch #3696, Windows MCP #3455), Pi (WSL bash escaping #5893), Qwen Code (Windows path parsing #5386)
- **Needs:** First-class Windows support, consistent shell detection, Wayland compatibility, Alpine Linux builds
- **Urgency:** HIGH—blocks entire user segments on non-macOS platforms

### 3.3 Intelligent Model Selection & Cost Transparency
- **Tools:** Claude Code (#15721), OpenAI Codex (#28879, #9046), Gemini CLI (#5225), OpenCode (#17223), Pi (#5897), Qwen Code (#4951)
- **Needs:** Automatic model tier switching by task complexity, per-session token budget visibility, cost tracking for custom providers
- **Urgency:** MEDIUM-HIGH—cost surprises erode user trust

### 3.4 Permission System Hardening
- **Tools:** Claude Code (auto-mode safety, #46868), OpenAI Codex (#28988, #29117), Gemini CLI (#22672), GitHub Copilot CLI (#2893), OpenCode (#2242)
- **Needs:** Guardrails for destructive commands, permission propagation to subagents, parallel tool call bypass prevention
- **Urgency:** HIGH—data loss risk from silent permission bypasses

### 3.5 Agent State Management (Checkpoint/Rewind)
- **Tools:** OpenAI Codex (#11626—166 upvotes), Claude Code (session portability), Pi (Fast Sessions #5804), Qwen Code (virtualized history #5142)
- **Needs:** Named checkpoints restoring both chat and file state, session portability between tools
- **Urgency:** MEDIUM—top user request for quality-of-life improvement

### 3.6 Plugin/MCP Ecosystem Expansion
- **Tools:** OpenAI Codex (#29150, #26234), Gemini CLI (#24246—128-tool limit), GitHub Copilot CLI (#1665), Pi (MCP hooks), Qwen Code (#5422), DeepSeek TUI (#3333)
- **Needs:** OAuth-based MCP installation, project-scoped plugins, non-OpenAI model compatibility, tool count ceiling increases
- **Urgency:** MEDIUM—growing importance as extensibility drives adoption

### 3.7 Sandboxing & Security
- **Tools:** OpenCode (#2242—55 upvotes), Claude Code (auto-mode), Gemini CLI (#22672), Pi (HITL #5901), DeepSeek TUI (#3332)
- **Needs:** Terminal/file-system sandboxing, seatbelt-style restrictions, destructive command blocks, human-in-the-loop approvals
- **Urgency:** MEDIUM-HIGH—enterprise adoption blocker

### 3.8 Voice Input
- **Tools:** OpenCode (#30634), Claude Code (community request history)
- **Needs:** Local-first speech-to-text, multi-modal interaction
- **Urgency:** LOW—nascent interest, no movement yet

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|
| **Primary UX** | Auto-mode with subagents | Desktop + CLI + TUI | CLI-first | CLI + VS Code | Desktop + CLI | CLI + WebBridge | CLI + QQ Bot | TUI |
| **Model Strategy** | Anthropic-only | OpenAI-only | Google-only | GitHub/OpenAI | Multi-provider | Multi-provider | Qwen + custom | Multi-provider |
| **Plugin System** | MCP + Skills | MCP + Plugins | Custom skills | MCP | Skills + MCP | Extensions | MCP + QQ Bot | MCP |
| **Platform Support** | macOS/Linux/Windows (weak) | macOS/Linux/Windows (weak) | macOS/Linux (no Wayland) | macOS/Linux/Windows (fragile) | macOS/Linux/Windows/Android (PR) | macOS/Linux/WSL | macOS/Linux/Windows (weak) | Linux/Mac (glibc requirement) |
| **Subagent Model** | Fork/recursive | Delegation | Defer delegation | Fleet/parallel | Background agents | Headless SDK | Hierarchical session | First-class toggle |
| **Key Strength** | Safety updates, auto-mode | Refactored runtime, build toolchain | Eval infrastructure, PR velocity | Git worktree, MCP DevOps | Skill loading, AI SDK migration | Provider extensibility, HITL | QQ Bot, custom providers | Sub-agent toggle, modular refactor |
| **Key Weakness** | Subagent recursion bug | Windows crashes, SSD writes | Agent hangs, false success | GUI hangs, Alpine bug | CPU spin, memory leaks | Streaming UX, silent data loss | QQ Bot reliability, Windows | glibc, sidebar regression |

**Key Differentiation Points:**

- **OpenAI Codex** is investing heavily in **infrastructure refactoring** (transport-neutral runtime, hermetic builds), while **Claude Code** leads on **safety hardening** for auto-mode.
- **Gemini CLI** has the strongest **evaluation infrastructure** push (behavioral evals, CLI inventory), indicating focus on quality regression prevention.
- **OpenCode** is the most **ecosystem-pluralistic** tool, with the highest community engagement on sandboxing and custom provider support.
- **DeepSeek TUI** and **Pi** are the most **modular/refactor-focused**, splitting monolithic files and adding configurable sub-agent control.
- **Kimi Code CLI** is notably quiet—a single PR today suggests low community engagement or internal development.
- **GitHub Copilot CLI** adds a **worktree-native development** feature, differentiating via git workflow integration.

---

## 5. Community Momentum & Maturity

### High Activity / Rapid Iteration
| Tool | Signal | Assessment |
|---|---|---|
| **OpenCode** | 50+ issues/24h, 10 PRs, 98-comment memory thread | Most active community; high engagement on features but severe stability issues |
| **Qwen Code** | 10 hot issues, 10 PRs merged, 4 QQ Bot fixes | High velocity; fixes landing quickly but channel-specific reliability gaps |
| **DeepSeek TUI** | 10+ PRs, epic refactoring, v0.8.63 prep | Rapid iteration on architecture; security fixes responsive |
| **Gemini CLI** | 50+ issues updated, 10 PRs, heavy eval work | Active but reactive to bugs; agent hangs persist as pain point |

### Moderate Activity / Stable
| Tool | Signal | Assessment |
|---|---|---|
| **Claude Code** | 1 release, 1 PR, critical bug focused | Release velocity slowed likely due to #68619 triage; safety hardening well-received |
| **OpenAI Codex** | 4 alpha releases, 10 PRs, but platform crisis | High PR count but Windows/cost issues indicate stretched stability |

### Low Activity / Quiet
| Tool | Signal | Assessment |
|---|---|---|
| **Kimi Code CLI** | 1 PR, no issues updated, no releases | Lowest engagement; proxy fix suggests enterprise focus |
| **GitHub Copilot CLI** | 1 release, 0 PRs, 15 issues | Low development visibility; worktree feature is notable but overall quiet |

### Maturity Indicators
- **Most mature feature set:** OpenAI Codex (transport-neutral runtime, plugin ecosystem, OAuth stacks)
- **Best safety practices:** Claude Code (auto-mode hardening, destructive command blocks)
- **Strongest testing infrastructure:** Gemini CLI (76 behavioral evals across 6 models)
- **Most responsive to community:** OpenCode (memory thread acknowledged, skill loading shipped day-of)
- **Worst stability this week:** OpenAI Codex (Windows crash loop, SSD killer), Claude Code (subagent recursion)

---

## 6. Trend Signals

### 6.1 Subagent Complexity is Outpacing Infrastructure
The most critical trend: **recursive agent spawning** (#68619 in Claude Code) and **silent subagent failures** (Gemini CLI #22323, Qwen Code #5180) are the top pain points across the ecosystem. The industry has shipped multi-agent capabilities faster than guardrails, resulting in:
- Token burn from uncontrolled recursion (Claude Code, DeepSeek TUI #3321)
- Silent permission bypasses under concurrency (GitHub Copilot CLI #2893)
- Misleading success reporting hiding failures (Gemini CLI #22323)
- No crash notification to parent sessions (Qwen Code #5239)

**Action for developers:** Implement token budget ceilings, recursion depth limits, and bidirectional agent communication channels as table-stakes requirements when evaluating any multi-agent tool.

### 6.2 The "Backend of AI CLI" is Consolidating
Three infrastructure trends emerge:
- **Transport-neutral runtimes** (OpenAI Codex PR #28787) enabling sandboxed/remote execution
- **Hermetic build toolchains** (OpenAI Codex PR #29149, Gemini CLI eval infrastructure)
- **Plugin/MCP ecosystem standards** moving toward OAuth-based auth (OpenAI Codex PR stack #29017-21, Gemini CLI PR #27889)

**Signal:** The next 6 months will see a separation between **agent frontends** (UX/chat) and **agent backends** (runtimes, sandboxing, auth). Tools that invest in decoupled architecture (OpenAI Codex, DeepSeek TUI, Pi) are positioning for platform-level adoption.

### 6.3 Windows is the Battleground for Enterprise Adoption
Every major tool except DeepSeek TUI has active Windows-specific bugs this week:
- Claude Code: MSIX config file mismatch, PowerShell detection
- OpenAI Codex: Crash loop, RAM exhaustion, Intel Mac regression
- GitHub Copilot CLI: MCP fetch broken, Alpine arch bug
- Qwen Code: Path parsing failures on drive letters
- Pi: WSL bash variable escaping

**Signal:** Enterprise Windows users are the largest untapped market. Tools that solve Windows stability (especially MCP integration, shell detection, and MSIX packaging) will gain a decisive advantage in corporate environments.

### 6.4 Cost Transparency is Becoming a Purchase Criterion
Users are increasingly:
- Requesting automatic model switching (Claude Code #15721, Gemini CLI #5225, Qwen Code #5225)
- Reporting surprise token spikes (OpenAI Codex #28879, Qwen Code #4951)
- Demanding API access to usage data (OpenCode #16017)
- Raising hardware-damaging I/O concerns (OpenAI Codex #28224—640 TB/year SSD writes)

**Signal:** The next wave of AI CLI tools will compete on **cost observability** and **budget management** as differentiators. "Show me my spending" is no longer optional.

### 6.5 Safety is Shifting from Compliance to UX Differentiation
Claude Code's auto-mode safety hardening (#183) and GitHub Copilot CLI's worktree isolation (# v1.0.64-1) signal a shift: **safety features are becoming selling points, not burdens**. Users are:
- Asking for sandboxing as a top feature (OpenCode #2242—55 upvotes)
- Appreciating destructive command blocks (Gemini CLI #22672, Qwen Code #5409)
- Adopting worktree-native workflows for isolation

**Signal:** The tools that make safety invisible (auto-mode risk reduction) or integrated (worktree isolation) will win over users tired of manual guardrails. The tools that treat safety as secondary (permission loops, silent bypasses) will lose trust.

### 6.6 Lightweight Activity Signals
- **Voice input** is emerging as a nascent interest (OpenCode #30634)
- **Android/Termux support** (OpenCode PR #33010) signals mobile development interest
- **Conversation compression** (DeepSeek TUI #3324) indicates concern about long-context costs
- **Plugin removal from core** (OpenAI Codex PR #29150 removing imagegen) suggests a move toward leaner base binaries with optional add-ons

---

## Summary for Technical Decision-Makers

| If you prioritize... | Consider... | Because... |
|---|---|---|
| **Safety & guardrails** | Claude Code (v2.1.183) | Best destructive command blocks, auto-mode hardening |
| **Plugin ecosystem maturity** | OpenAI Codex | Most advanced MCP OAuth stacks, refactored runtime |
| **Evaluation & testing** | Gemini CLI | Strongest behavioral eval infrastructure (76 tests) |
| **Git workflow integration** | GitHub Copilot CLI | Worktree-native, branch commands, MCP DevOps |
| **Multi-provider flexibility** | OpenCode, Pi | Native multi-provider, custom provider support |
| **Rapid iteration / early adopter** | DeepSeek TUI | Fastest PR velocity, modular refactoring |
| **Chinese cloud ecosystem** | Qwen Code | QQ Bot channel, Baidu/AliCloud compatibility |
| **Cost control** | Gemini CLI (automatic switching) + OpenCode (API usage) | Most advanced model tiering + usage visibility efforts |

**Risk Warning:** All tools have critical stability issues. Claude Code's subagent recursion (#68619) and OpenAI Codex's Windows crash loop represent **immediate adoption risks** for production workflows. Teams should deploy with:
- Token budget ceilings
- Recursion depth limits
- Session timeout mechanisms
- Proxy retry logic for rate limits

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Based on the data from the `anthropics/skills` repository (as of 2026-06-20), here is the community highlights report for the Claude Code Skills ecosystem.

---

### 1. Top Skills Ranking

The following five Skills generated the most discussion and attention within the community:

1.  **Document Typography (`document-typography`)** [PR #514]
    - **Functionality:** Prevents common typographic issues in AI-generated documents, such as orphaned words, widowed headers, and numbering misalignment.
    - **Discussion Highlights:** The primary discussion centered on the universal nature of this problem—these formatting errors affect almost every document Claude generates. The PR author framed it as a critical quality-of-life improvement for output polish.
    - **Status:** Open
    - **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

2.  **ODT / OpenDocument Format (`odt`)** [PR #486]
    - **Functionality:** Enables Claude to create, fill, read, and convert OpenDocument files (.odt, .ods), specifically targeting LibreOffice and other open-source ecosystems.
    - **Discussion Highlights:** The conversation focused on the Skill’s broad trigger vocabulary and the need for reliable template filling. The community viewed this as essential for enterprise users working in non-Microsoft document ecosystems.
    - **Status:** Open
    - **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

3.  **Frontend Design Improvement (`frontend-design`)** [PR #210]
    - **Functionality:** Revises the existing frontend-design Skill to ensure instructions are actionable, clear, and specific enough for Claude to execute within a single conversation.
    - **Discussion Highlights:** The author argued that the existing Skill was too vague, leading to generic output. The discussion centered on making Skill instructions granular enough to steer Claude’s behavior without human intervention.
    - **Status:** Open
    - **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

4.  **Meta Skills: Quality & Security Analysis (`skill-quality-analyzer`, `skill-security-analyzer`)** [PR #83]
    - **Functionality:** Two "meta-skills" that analyze other Skills. The quality analyzer evaluates structure, documentation, and examples, while the security analyzer checks for common vulnerabilities.
    - **Discussion Highlights:** This was an early, high-engagement PR (Nov 2025). The debate revolved around whether Anthropic should officially maintain these tools in the marketplace vs. leaving them as user-side scripts.
    - **Status:** Open
    - **Link:** [PR #83](https://github.com/anthropics/skills/pull/83)

5.  **Bug Fix Cluster: Run Eval & Windows Support** (PRs #1298, #1099, #1050)
    - **Functionality:** A series of critical patches fixing the `run_eval.py` and `run_loop.py` scripts, which were broken on Windows and returning "0% recall" for all queries.
    - **Discussion Highlights:** This was the highest-volume conversation in the PRs shown. Multiple authors independently reproduced the bug, confirming that the description-optimization loop was "optimizing against noise." This bug effectively rendered the official toolchain unusable for a large segment of users.
    - **Status:** Open
    - **Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298), [PR #1099](https://github.com/anthropics/skills/pull/1099)

---

### 2. Community Demand Trends

The highest-priority community demands, as reflected in Issues, are:

- **Windows Compatibility:** Issues #556 and #1061 detail how the core `run_eval.py` toolchain is fundamentally broken on Windows due to Unix-first assumptions (subprocess, encoding, pipe handling). This is the single largest operational blocker.
- **Org-Wide Skill Sharing & Governance:** Issue #228 demands a native sharing mechanism for skills within organizations, rather than manual file transfers. Issue #492 highlights a security concern regarding the trust boundary when community skills are distributed under the official `anthropic/` namespace.
- **Deduplication & Plugin Hygiene:** Issue #189 identifies a packaging error where the `document-skills` and `example-skills` plugins contain identical content, leading to duplicates and wasted context window space.
- **Security & Access Control:** Issue #1175 raises concerns about embedding access control logic directly within SKILL.md files when handling sensitive data (e.g., SharePoint Online), suggesting a desire for a more secure permission model.

---

### 3. High-Potential Pending Skills

These PRs have recent activity and significant community traction, indicating they are likely to be merged soon:

- **ServiceNow Platform Skill** [PR #568]: A broad platform assistant covering ITAM, SecOps, and IntegrationHub. High enterprise value; actively developed.
    - **Link:** [PR #568](https://github.com/anthropics/skills/pull/568)
- **Testing Patterns Skill** [PR #723]: A comprehensive skill covering unit testing, React component testing, and the Testing Trophy model. Addresses a standard developer workflow gap.
    - **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)
- **AURELION Cognitive Skill Suite** [PR #444]: Four skills providing structured thinking templates and memory management. High conceptual ambition, but requires careful design to avoid context bloat.
    - **Link:** [PR #444](https://github.com/anthropics/skills/pull/444)
- **CONTRIBUTING.md** [PR #509]: Adds a community health file. While not a Skill, this is blocking for open-source contributions and has direct support from maintainers.
    - **Link:** [PR #509](https://github.com/anthropics/skills/pull/509)

---

### 4. Skills Ecosystem Insight

The community's most concentrated demand is for **toolchain reliability and portability**, specifically fixing the broken skill-creation evaluation pipeline to ensure it works cross-platform (Windows), followed by enterprise-grade skill governance (sharing, security, and deduplication).

---

# Claude Code Community Digest — 2026-06-20

## Today's Highlights

Anthropic shipped **v2.1.183** with critical auto-mode safety hardening, blocking destructive git commands unless explicitly requested by the user. Meanwhile, a severe **subagent recursion bug** (#68619) is burning tokens uncontrollably, spawning agents 50+ levels deep and ignoring environment variables meant to prevent forking. The community continues to push for cross-platform skill syncing (#20697, 118 👍) and automatic model switching for plan mode (#15721).

---

## Releases

### v2.1.183
[Release Link](https://github.com/anthropics/claude-code/releases/tag/v2.1.183)

**Safety improvements for auto mode:**
- **Blocked destructive git commands** when the user didn't explicitly ask to discard local work: `git reset --hard`, `git checkout -- .`, `git clean -fd`, `git stash drop`
- **Blocked `git commit --amend`** when the commit wasn't made by the agent in the current session

This addresses a long-standing community concern about accidental work loss in auto mode. No other changes were reported.

---

## Hot Issues (Top 10 by Community Engagement)

### 1. [FEATURE] Sync Skills between Claude Desktop and Claude Code CLI
[#20697](https://github.com/anthropics/claude-code/issues/20697) — 118 👍, 34 comments  
The most-upvoted open feature request. Users want Skills authored in Claude Desktop to automatically sync with Claude Code CLI and vice versa. Currently, Skills are siloed per-platform, forcing manual duplication. Community reaction is overwhelmingly positive, with many calling this the "missing link" for workflow portability.

### 2. [FEATURE] Automatic Model Switching for Plan Mode
[#15721](https://github.com/anthropics/claude-code/issues/15721) — 36 👍, 20 comments  
Users want Claude Code to automatically switch to a cheaper/faster model for planning/reasoning tasks, then switch back to a more capable model for execution. The cost-saving implications are significant — one commenter estimated 40-60% token reduction for complex sessions.

### 3. [BUG] Windows MSIX: "Edit Config" opens wrong claude_desktop_config.json
[#26073](https://github.com/anthropics/claude-code/issues/26073) — 31 👍, 18 comments  
A persistent Windows packaging bug where the MSIX installer's "Edit Config" button opens a different configuration file than the one actually loaded by the app. MCP servers silently fail to load as a result. Community frustration is high — multiple users report spending hours debugging "invisible" MCP failures.

### 4. [CRITICAL] Subagent spawning and subagent pattern bugs trigger infinite recursion
[#68619](https://github.com/anthropics/claude-code/issues/68619) — 3 👍, 15 comments  
**NEW this week — critical severity.** Multiple regressions compound: subagents recursively spawn child agents 50+ levels deep, ignoring `CLAUDE_CODE_FORK_SUBAGENT=0`. Permission denials trigger more spawning instead of stopping. Agents fetch individual files from GitHub repos via HTTP instead of cloning. The community is alarmed by the potential for catastrophic token burn. Likely Anthropic's top priority.

### 5. [BUG] Background subagents silently auto-deny permissions
[#32402](https://github.com/anthropics/claude-code/issues/32402) — 4 👍, 10 comments (CLOSED)  
Background subagents running in parallel auto-deny permission prompts, silently failing to write files or execute commands. Closed as resolved, but the recurrence pattern has been noted in #68619.

### 6. [FEATURE] Auto-allow piped/chained commands when all components are individually allowed
[#46868](https://github.com/anthropics/claude-code/issues/46868) — 3 👍, 5 comments (CLOSED)  
Permissive piped commands (`cmd1 | cmd2`) prompt separately for each component even when individually approved. Duplicate of existing request; closed, but the desire for streamlined permission workflows remains strong.

### 7. [BUG] Plugin MCP tools not injected despite server showing "Connected"
[#49019](https://github.com/anthropics/claude-code/issues/49019) — 1 👍, 5 comments (CLOSED)  
Plugin-registered MCP servers show "Connected" status but their tools aren't injected into the session. A regression that appears resolved but highlights fragility in the plugin/MCP integration layer.

### 8. [BUG] Server-side rate limits break parallel agent workflows
[#60562](https://github.com/anthropics/claude-code/issues/60562) — 2 👍, 4 comments  
Open issue. Parallel agent workflows hit API rate limits and fail without transparent retry logic. Users running multi-agent architectures report unpredictable failures. The ask is for built-in exponential backoff and automatic retries.

### 9. [BUG] PowerShell commands executed through bash instead of PowerShell
[#56452](https://github.com/anthropics/claude-code/issues/56452) — 1 👍, 4 comments (CLOSED)  
On Windows, Claude Code routes PowerShell commands through bash, causing syntax failures. Closed as resolved, but Windows-specific shell detection remains a recurring pain point.

### 10. Code Review: claude[bot] reacts with 👀 but no check run is created
[#67540](https://github.com/anthropics/claude-code/issues/67540) — 7 👍, 3 comments  
The managed Code Review integration (no GitHub Actions workflow) shows the bot reacting but never posts reviews. Users on the Team plan report this as a blocker for adopting Claude Code for PR workflows.

---

## Key PR Progress

Only **one PR** was updated in the last 24 hours:

### fix(scripts): break pagination when page is not full, not only when empty
[#68673](https://github.com/anthropics/claude-code/pull/68673) — **OPEN**  
A script fix for pagination logic: previously, pagination only stopped when a page was empty; now it also stops when a page is not full (partial page = last page). A small but correctness-critical fix for any tooling that iterates over paginated API responses.

*No other PRs were updated in this window. This is unusually low activity; the community is likely focused on the critical subagent bug (#68619).*

---

## Feature Request Trends

Across all open issues and comments, three major feature directions dominate:

1. **Cross-Platform Sync & Portability** — Skills syncing (#20697), session state portability between Desktop and CLI, shared configuration across environments. The community wants a unified Claude experience regardless of frontend.

2. **Intelligent Model Selection** — Automatic switching between models based on task complexity (#15721), exposing token usage to the model for self-regulation (#65832), cost-aware agent behavior. Users are increasingly cost-conscious and want automatic optimization.

3. **Agent Orchestration & Safety** — Better subagent lifecycle management, permission propagation to child agents (#51289), rate-limit resilience (#60562), and transparent retry logic. As multi-agent workflows become mainstream, the tooling needs to catch up on reliability.

---

## Developer Pain Points

Recurring frustrations from the last 24 hours of issues:

- **Permission system fragility** — Permissions don't propagate to subagents, auto-deny silently in background, and piped commands re-prompt. Multiple closed issues suggest fixes have been partial.
- **Windows ecosystem gaps** — MSIX packaging (#26073, #48437, #60459), PowerShell detection (#56452), pipe handle incompatibilities (#60825), and Bun runtime crashes (#60847) make Windows a second-class platform.
- **Token cost surprises** — Users report unexpected session limits (#69592), unexplained token usage spikes (#60529), and no visibility into consumption during sessions (#65832). The "how much is this costing me?" question remains unanswered.
- **Subagent reliability** — The critical infinite recursion bug (#68619) is the top concern, but even in normal operation, subagents lose work, miss permissions, and orphan sessions (#60860).
- **Plugin/MCP integration jank** — Connected MCP servers that don't inject tools (#49019), notification hooks that don't fire (#60870), and skill evaluation scripts broken on Windows (#60825) erode trust in the extension ecosystem.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — June 20, 2026

## Today's Highlights

Multiple Windows Desktop crashes and memory leaks continue to plague users after recent updates, with five separate crash/hang reports from the same reporter this month alone. On the positive side, the team landed a major refactor with a transport-neutral session runtime (PR #28787) and introduced a fully-hermetic Windows Rust build toolchain using gnullvm (PR #29149) to prevent future CI breakage. A controversial **SIGTRAP crash** on Intel macOS in Codex CLI 0.141.0 is affecting a significant number of users, with downgrading to 0.140.0 as the only current workaround.

## Releases

Four alpha releases of the Rust build landed in the last 24 hours (v0.142.0-alpha.3 through v0.142.0-alpha.6). All releases share the same minimal changelog: "Release 0.142.0-alpha.x." No release notes or feature descriptions were provided, indicating these are rapid-iteration internal builds.

**Links:**
- [v0.142.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.6)
- [v0.142.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.5)
- [v0.142.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.4)
- [v0.142.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.3)

## Hot Issues

### 1. Windows Desktop crash loop after June updates (4 related issues)
**#27979, #27175, #28980, #28524** — A series of reports from user `SocialK` shows that recent Windows updates (26.609.4994.0 through 26.616.30709) cause the desktop app to crash on launch, fail to hydrate existing sessions, and exhaust 32 GB of RAM while idle. Community reaction is frustrated, with 6+ upvotes and consistent reproduction across multiple machines. **Why it matters:** Critical usability regression affecting paying Pro users ($200/mo) on the most common desktop platform.

**Links:**
- [#27979](https://github.com/openai/codex/issues/27979)
- [#27175](https://github.com/openai/codex/issues/27175)
- [#28980](https://github.com/openai/codex/issues/28980)
- [#28524](https://github.com/openai/codex/issues/28524)

### 2. Full Access mode repeatedly asks for permission
**#28988, #29117** — Users on both macOS (26.614.11602) and Windows report that Codex Desktop/CLI keeps prompting for file system permission even after granting "Full Access." The issue appeared after recent updates and is affecting Pro Max subscribers. 19+ upvotes each suggests widespread impact. **Why it matters:** Blocks all agent functionality that requires file access—effectively making Codex unusable for common coding workflows.

**Links:**
- [#28988](https://github.com/openai/codex/issues/28988)
- [#29117](https://github.com/openai/codex/issues/29117)

### 3. Rate limit cost jumped 10-20x since June 16
**#28879** — A Plus subscriber reports that `gpt-5.5` budget consumption per prompt spiked from ~20 prompts per 5h budget to just 2-3 prompts, citing `token_count` and `rate_limits` session logs. 15 upvotes in 2 days. **Why it matters:** Could indicate a backend pricing bug or unintended model upgrade—affects all Plus-tier users' daily productivity.

**Link:** [#28879](https://github.com/openai/codex/issues/28879)

### 4. Codex ran out of context window on first question
**#9046** — User reports hitting the context window limit at the very start of a conversation with a single question on v0.80.0. 34 comments but only 1 upvote suggests many users experiencing similar frustration without rallying. **Why it matters:** Points to aggressive context compaction or an edge case where system prompts consume disproportionate space.

**Link:** [#9046](https://github.com/openai/codex/issues/9046)

### 5. `/rewind` checkpoint restore for both chat + code edits
**#11626** — Highly requested enhancement (166 upvotes, 34 comments) asking for a native `/rewind` command that restores both conversation state and workspace file edits from a named checkpoint. Current Esc rewind only reverts chat. **Why it matters:** Managing AI-generated code changes is the #1 pain point for developer users—this is the most upvoted feature request in the entire issue tracker.

**Link:** [#11626](https://github.com/openai/codex/issues/11626)

### 6. GitHub PR review uses deactivated workspace
**#26867** — After migrating from Business to Personal Pro, Codex's GitHub PR review integration still points to the deactivated Business workspace, blocking all PR reviews. 12 upvotes. **Why it matters:** Affects migration workflow for organizations transitioning between plans; breaks CI/CD integration.

**Link:** [#26867](https://github.com/openai/codex/issues/26867)

### 7. SIGTRAP crash on Intel macOS in CLI 0.141.0
**#29000, #29047** — Codex CLI 0.141.0 crashes with SIGTRAP on Intel macOS when invoking any tool/skill, with the crash traced to V8 Isolate initialization. Downgrading to 0.140.0 resolves the issue completely. 5+ upvotes across two reports. **Why it matters:** Blocks all tool-using workflows on Intel Macs—regression introduced between minor versions.

**Links:**
- [#29000](https://github.com/openai/codex/issues/29000)
- [#29047](https://github.com/openai/codex/issues/29047)

### 8. MCP namespace tools broken for non-OpenAI providers
**#26234** — When using Codex with Ollama, LM Studio, OpenRouter, or AWS Bedrock Mantle, MCP-provided tools are never callable because Codex serializes them inside a proprietary `{"type": "namespace", ...}` structure that non-OpenAI models cannot parse. 28 upvotes—one of the highest-engagement open issues. **Why it matters:** Blocks local/infrastructure AI usage and vendor diversity; affects the entire self-hosted community.

**Link:** [#26234](https://github.com/openai/codex/issues/26234)

### 9. SQLite feedback logs writing ~640 TB/year to SSD
**#28224** — Codex continuously writes enormous data to local SQLite feedback logs (`logs_2.sqlite`), consuming SSD endurance at alarming rates. 11 upvotes. **Why it matters:** Permanently degrades hardware; users on laptops or small SSDs face real durability concerns.

**Link:** [#28224](https://github.com/openai/codex/issues/28224)

### 10. Excessive SQLite WAL writes during streaming from TRACE logs
**#17320** — TRACE-level logging writes to SQLite WAL during every streaming token, ignoring `RUST_LOG` environment variable settings. 10 upvotes. **Why it matters:** Compounds with #28224—the combination of both issues can destroy consumer SSDs within months.

**Link:** [#17320](https://github.com/openai/codex/issues/17320)

### Bonus: Reasoning level resets after delegation
**#26930** — `xhigh`/`high` reasoning level silently resets to `low` within the same thread after subagent delegations or continuation turns. **Why it matters:** Users paying for high-reasoning-capability plans lose that capability mid-session without warning.

**Link:** [#26930](https://github.com/openai/codex/issues/26930)

---

## Key PR Progress

### 1. Transport-neutral session runtime (High Impact)
**PR #28787** by `cconger` — Introduces a new `code-mode` session runtime that decouples session state and cell lifecycle from the protocol adapter. This refactoring makes it possible to run sessions in a separate process, paving the way for sandboxed execution and remote sessions. **Why it matters:** Foundational work for sandboxing and remote SSH reliability fixes.

**Link:** [#28787](https://github.com/openai/codex/pull/28787)

### 2. Hermetic Windows Rust build toolchain
**PR #29149** by `anp-oai` — Moves Windows build from system-level MSVC to `gnullvm` for full hermeticity in Bazel. Addresses #28940 where updated CI images broke the build. **Why it matters:** Eliminates recurring "works on CI but not locally" Windows build failures.

**Link:** [#29149](https://github.com/openai/codex/pull/29149)

### 3. Allow `/resume` and settings during tasks/MCP startup
**PR #29154** by `etraut-openai` — Currently, the TUI blocks `/resume` and settings commands during active turns and MCP startup. This PR permits non-conflicting commands during running tasks. **Why it matters:** Directly addresses user frustration with slow MCP startups blocking all interaction.

**Link:** [#29154](https://github.com/openai/codex/pull/29154)

### 4. Remove bundled imagegen system skill
**PR #29150** by `daniel-oai` — Removes the bundled `imagegen` system skill from Codex and moves it to an installable plugin. Includes regression assertion. **Why it matters:** Signals a shift toward plugin-based architecture for non-core capabilities, reducing base binary size.

**Link:** [#29150](https://github.com/openai/codex/pull/29150)

### 5. Shared auth system proxy contract (PAC 2)
**PR #26707** by `canvrno-oai` — Adds a shared auth/system-proxy contract that routes Codex-owned auth and startup HTTP through a common boundary. **Why it matters:** Foundation for fixing corporate proxy and VPN issues that affect enterprise users.

**Link:** [#26707](https://github.com/openai/codex/pull/26707)

### 6. Restore custom Windows runner with hermetic LLVM 0.7.9
**PR #29143** by `anp-oai` — Returns the `argument-comment-lint` CI job to its custom Windows runner after fixing hermetic LLVM extraction. **Why it matters:** Prevents CI flakiness that blocked Windows-focused PRs.

**Link:** [#29143](https://github.com/openai/codex/pull/29143)

### 7. Plugin roots URI-native
**PR #28918** by `jif-oai` — Requires environment capability roots to use `PathUri` serialization (`file://` paths). **Why it matters:** Resolves cross-platform path handling issues, especially Windows vs Unix path separators.

**Link:** [#28918](https://github.com/openai/codex/pull/28918)

### 8. Serialize MCP OAuth refresh transactions (stack of 5 PRs)
**PRs #29017-#29021** by `stevenlee-oai` — A five-PR stack serializing MCP OAuth login, logout, and refresh operations to prevent race conditions with rotating tokens. **Why it matters:** Critical for stability of MCP-based workflows that depend on OAuth-protected APIs.

**Link (main):** [#29017](https://github.com/openai/codex/pull/29017)

### 9. Optimize resume and fork history
**PR #28806** by `anaiskillian` — Checkpoint-backed resume and copy-on-write fork optimization, reducing cold-start work for `thread/resume` and `thread/fork`. **Why it matters:** Directly improves perceived responsiveness for users resuming long sessions.

**Link:** [#28806](https://github.com/openai/codex/pull/28806)

### 10. Centralize plugin analytics metadata
**PR #27102** by `jameswt-oai` — Moves `PluginTelemetryMetadata` construction into `PluginsManager`. **Why it matters:** Enables richer analytics for plugin usage patterns, which will inform future plugin ecosystem investment.

**Link:** [#27102](https://github.com/openai/codex/pull/27102)

---

## Feature Request Trends

1. **Checkpoint / Undo System (Highest Demand)** — Issue #11626 (166 upvotes) dominates: users want a `/rewind` command that reverts both chat context AND file edits simultaneously. This is the single most-requested feature.

2. **Plugin Ecosystem Expansion** — Multiple PRs (#29150 removing bundled imagegen, #28918 URI-native plugins, #27102 analytics centralization) indicate a deliberate push toward a full plugin marketplace. Users are requesting installable, discoverable, removable capabilities.

3. **Non-OpenAI Model Support** — Issue #26234 (28 upvotes) voices strong demand for MCP tool compatibility with Ollama, LM Studio, OpenRouter, and AWS Bedrock. The community clearly wants model vendor diversity.

4. **Background Service Monitoring** — Issue #2062 requests the ability to monitor long-running builds/servers without blocking the agent, allowing log inspection after completion.

5. **Custom Install Location** — Issue #21074 asks for Windows app install path customization, suggesting corporate IT policy constraints are affecting adoption.

---

## Developer Pain Points

1. **Windows Desktop Stability Crisis** — Four crash/hang issues from a single reporter in June alone (#27979, #27175, #28980, #28524) paint a picture of a platform in crisis. Users report RAM saturation to 99% of 32GB, unrecoverable hangs requiring reboot, and session loss.

2. **Full Access Permission Loops** — #28988 and #29117 describe an infinite-permission-prompt loop on both macOS and Windows that blocks all agent functionality. This affects the core value proposition of Codex.

3. **Runaway Disk I/O Killing SSDs** — #28224 (640 TB/year SQLite writes) and #17320 (excessive WAL writes from TRACE logs) together represent a hardware-destroying bug. Developers with 256GB SSDs face real durability concerns.

4. **Intel Mac Regression** — #29000 and #29047 show that CLI 0.141.0 crashes on Intel Macs with SIGTRAP, with no workaround other than downgrading. Affects a significant portion of the Mac user base.

5. **Rate Limit Inconsistency** — #28879 (10-20x cost jump) and #29152 (vanishing rate resets) suggest instability in the billing/rate-limiting backend that erodes user trust in predictable pricing.

6. **Context Window Issues** — #9046 shows users hitting context limits on the very first question, undermining the advertised conversation capacity.

---

*This digest was generated based on GitHub data from openai/codex as of 2026-06-20. Community sentiments and impact assessments reflect technical analyst opinion.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-20

## Today's Highlights

No new releases landed today, but the repo saw heavy maintenance activity with 24 PRs and 50 open issues updated in the last 24 hours. Critical fixes are coalescing around path resolution bugs (the `@`-prefix issue), MCP OAuth token handling, and the ongoing effort to stabilize the agent sub-system. A new `eval:inventory` CLI command was merged, adding much-needed visibility into the evaluation suite.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)** (👍8, 7 comments) — P1 bug where the CLI hangs forever when deferring to the generalist agent for simple tasks like folder creation. Users report that instructing the model *not* to use sub-agents resolves the issue. High community impact.

2. **[Shell command execution stuck on "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** (👍3, 4 comments) — P1 core bug. After a shell command finishes, the CLI hangs showing "Awaiting user input" even for trivial commands that never prompt. Persistent frustration for daily users.

3. **[Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (7 comments) — Epic tracking the next phase of behavioral evals (76 tests so far across 6 Gemini models). Critical for preventing regressions as the agent system grows.

4. **[Subagent recovery after MAX_TURNS reported as "GOAL" success](https://github.com/google-gemini/gemini-cli/issues/22323)** (👍2, 6 comments) — Misleading success reporting hides agent failures. The `codebase_investigator` subagent hits turn limits but tells the orchestrator everything is fine.

5. **[Auto Memory silently retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (5 comments) — Auto Memory never marks low-signal sessions as processed, causing them to resurface repeatedly. Drives unnecessary API calls.

6. **[Auto Memory logs sensitive content before redaction](https://github.com/google-gemini/gemini-cli/issues/26525)** (5 comments) — Extraction prompt asks the model to redact secrets, but content is already in model context. A security concern for teams using memory features.

7. **[Browser agent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (👍1, 4 comments) — `browser_agent` subagent fails on Linux with Wayland display servers, reporting "GOAL" but producing no useful output. Linux users are impacted.

8. **[Gemini does not use custom skills and sub-agents autonomously](https://github.com/google-gemini/gemini-cli/issues/21968)** (6 comments) — Even when skills like "gradle" or "git" are explicitly configured with descriptions, the model rarely invokes them without direct instruction.

9. **[400 error when >128 tools are available](https://github.com/google-gemini/gemini-cli/issues/24246)** (3 comments) — The API rejects requests when tool count exceeds 128. Users with many MCP servers or custom tools hit this ceiling regularly.

10. **[Agent performs destructive git/DB operations](https://github.com/google-gemini/gemini-cli/issues/22672)** (👍1, 3 comments) — Models sometimes use `git reset --force` or destructive DB commands when safer alternatives exist. Community asking for guardrails around dangerous operations.

## Key PR Progress

1. **[Fix Jupyter Notebook and JSON corruption in write_file](https://github.com/google-gemini/gemini-cli/pull/28000)** — Critical fix for `write_file` silently corrupting `.ipynb` and JSON files. Resolves environment-dependent data loss in Colab/JupyterLab.

2. **[Fix `@`-prefixed path resolution in filesystem tools](https://github.com/google-gemini/gemini-cli/pull/28053)** (size/xl) — Comprehensive fix for production bug where `read_file`, `replace`, and `write_file` fail when the model passes paths like `@policies/new-policies.txt`. Also fixes macOS test flakes.

3. **[MCP OAuth refresh with auto-discovered client ID](https://github.com/google-gemini/gemini-cli/pull/27889)** (P1, area/agent) — Fixes OAuth token refresh after `/mcp auth` for servers without a static `oauth.clientId` in settings. Prevents silent auth failures.

4. **[Strip trailing periods from error URLs](https://github.com/google-gemini/gemini-cli/pull/28054)** (help wanted, size/s) — Small but thoughtful UX fix: removes punctuation that accidentally gets attached to URLs in error messages, making links navigable again.

5. **[Validate GCP project IDs to prevent memory corruption](https://github.com/google-gemini/gemini-cli/pull/27916)** — Prevents auto-memory from storing display names/aliases instead of valid project IDs, stopping 403/CONSUMER_INVALID errors in downstream sessions.

6. **[Thai/Lao SARA AM width fix for rendering](https://github.com/google-gemini/gemini-cli/pull/25385)** (help wanted) — Fixes cursor desync and output corruption in tmux when rendering Thai/Lao characters. Root cause: `Intl.Segmenter`/`string-width` width mismatch with terminal behavior.

7. **[Fix skill discovery for single-line SKILL.md frontmatter](https://github.com/google-gemini/gemini-cli/pull/28042)** (help wanted, size/m) — Skills with single-line `description` in frontmatter were completely invisible. Now properly parsed and listed in `/skills list`.

8. **[Fix `.gitignore`/`.geminiignore` directory leaking into session context](https://github.com/google-gemini/gemini-cli/pull/27678)** — Hides ignored directories from the initial session context tree. Reduces noise and prevents the model from accessing irrelevant files.

9. **[Atomic MCP OAuth token writes](https://github.com/google-gemini/gemini-cli/pull/27664)** (P1, area/security) — Security fix: writes tokens through a temp file with atomic rename, preventing partial/corrupt token files on crash. Fixes #27663.

10. **[Fix MCP tool name parsing for servers with underscores](https://github.com/google-gemini/gemini-cli/pull/28033)** — Longest-prefix matching prevents incorrect tool routing when MCP server names contain underscores. Fixes #27981.

## Feature Request Trends

The community is pushing in three clear directions:

- **Evaluation infrastructure maturity** — Multiple epics (e.g., #24353, #23166, PR #28009) focus on building behavioral eval suites, stabilizing tests, and adding CLI reporting. The team is investing heavily in quality regression prevention.

- **Agent self-awareness and reliability** — Users want the model to understand its own capabilities (#21432), use configured skills autonomously (#21968), and accurately report agent failures instead of faking success (#22323).

- **Memory system hardening** — Auto Memory is under scrutiny: issues about infinite retries (#26522), secret redaction before model exposure (#26525), and invalid patch handling (#26523) indicate the feature is maturing but needs production hardening.

## Developer Pain Points

- **Agent hangs and false success reporting** are the most emotionally charged issues. The generalist agent hanging indefinitely (#21409), subagents reporting "GOAL" while doing nothing (#22323), and shell commands stuck on "Waiting input" (#25166) erode user trust.

- **Browser agent is fragile** — Fails on Wayland (#21983), ignores settings overrides (#22267), and has brittle lock recovery (#22232). Linux users are particularly affected.

- **Tool count limits** — The 128-tool ceiling (#24246) directly conflicts with power users running many MCP servers and custom agents. The current workaround (manual tool scoping) is not viable at scale.

- **Destructive operations without guardrails** — Models using `--force` flags, destructive git commands, and unsafe DB operations (#22672) have users asking for sandboxing or confirmation steps.

- **File I/O corruption** — Silent corruption of `.ipynb`/JSON files (PR #28000) and `@`-prefixed path resolution failures (PR #28053) are genuine data-loss risks for anyone using the CLI for development work.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-20

## Today's Highlights

A new release (v1.0.64-1) introduces `/branch` as an alias for `/fork` and an experimental `--worktree` flag. The issue tracker shows a burst of activity with 15 updated items, including several new triage-level reports about GUI hangs and missing context window indicators. A critical closed issue confirms that auto-update on Alpine Linux can download the wrong architecture package, breaking the runtime.

## Releases

**v1.0.64-1** — [Full diff](https://github.com/github/copilot-cli/releases/tag/v1.0.64-1)

- **New:** `/branch` as an alias for `/fork`, aligning with Claude Code's command naming.
- **Experimental:** `--worktree [name]` (`-w`) flag (enable via `/experimental`) creates or reuses a git worktree under `<repo>.worktrees/` and starts the session inside it.
- **New:** Tab completion for `/agent n`.

This is a minor feature release; no breaking changes or critical bugfixes are called out.

## Hot Issues (10 selected)

1. **[#731 — [CLOSED] Z shell / direnv session ID incompatibility](https://github.com/github/copilot-cli/issues/731)**  
   *Author: peterbecich · 14 👍*  
   A long-standing incompatibility between Copilot CLI’s session management and Z shell + direnv (likely nix-direnv) has finally been closed after ~6 months. The error (`Invalid session ID`) plagued users with shell-integrated environment switching.

2. **[#1665 — [CLOSED] Plugin scoping per project/repository](https://github.com/github/copilot-cli/issues/1665)**  
   *Author: willmarkley · 17 👍*  
   A highly-upvoted feature request — plugins are currently installed globally, making per-repo configurations cumbersome. This is now resolved, enabling teams to bundle project-specific plugins.

3. **[#1901 — [OPEN] autopilot_fleet plan approval race condition](https://github.com/github/copilot-cli/issues/1901)**  
   *Author: Arithmomaniac · 0 👍*  
   When selecting “Accept plan and build on autopilot + /fleet”, fleet mode may not activate immediately. The agent continues interactively for up to ~50 minutes before transitioning. A timing bug in the approval-to-fleet handoff.

4. **[#3455 — [OPEN] github-mcp-server “fetch failed” on Windows since v1.0.51](https://github.com/github/copilot-cli/issues/3455)**  
   *Author: bartuszekj · 0 👍*  
   Built-in MCP server stopped working on Windows after v1.0.51, with no prior connection attempts logged. Affects all Windows users relying on GitHub MCP for agent-driven workflows.

5. **[#2893 — [OPEN] preToolUse hooks silently bypassed under parallel tool calls](https://github.com/github/copilot-cli/issues/2893)**  
   *Author: torumakabe · 0 👍*  
   A subtle permissions bug: `timeoutSec` does not terminate the hook subprocess. If a `preToolUse` hook times out, the CLI falls back to allowing the tool call — effectively bypassing security hooks when tools run in parallel.

6. **[#3371 — [OPEN] CLI silently hangs on stalled HTTPS sockets](https://github.com/github/copilot-cli/issues/3371)**  
   *Author: jay-tau · 1 👍*  
   The CLI can hang indefinitely with data stuck in TCP send buffers to `api.github.com`, producing zero output to logs or `events.jsonl`. No timeout mechanism exists for stalled sockets.

7. **[#3821 — [CLOSED] /update from resumed session leaves conflicting flags](https://github.com/github/copilot-cli/issues/3821)**  
   *Author: jay-tau · 0 👍*  
   Running `/update` while in a resumed session (`copilot -r`) causes the CLI to restart with both `--session-id` and `-r` flags, breaking session continuity.

8. **[#3868 — [OPEN] App hangs on right-click with multiple chats open](https://github.com/github/copilot-cli/issues/3868)**  
   *Author: Youssefzakims · 0 👍*  
   New triage report: with multiple sessions open, right-clicking any session freezes the entire application. Likely a UI thread deadlock.

9. **[#3867 — [OPEN] No context window visibility or compaction notification](https://github.com/github/copilot-cli/issues/3867)**  
   *Author: sonydogg · 0 👍*  
   Users have no indicator of token usage or remaining context. Context compaction happens silently — a significant UX gap for long-running sessions.

10. **[#3866 — [OPEN] Thinking/reasoning text unreadable on dark backgrounds](https://github.com/github/copilot-cli/issues/3866)**  
    *Author: ayackel · 0 👍*  
    A recent update hardcoded a dark gray foreground for “Thinking…” text, rendering it nearly invisible on dark terminals. A theming/accessibility regression.

## Key PR Progress

*No pull requests were updated in the last 24 hours (0 items).* This is unusual; active development may have shifted to internal branches or the release cycle.

## Feature Request Trends

From the issue tracker, the most requested feature directions are:

- **Project-scoped plugins** (resolved in #1665) — Users want plugin configurations that travel with a repository, not per-user global settings.
- **Context / token budget visibility** (#3867) — A strong theme: users want a persistent indicator of context window usage and explicit notifications when compaction occurs.
- **Worktree-native development** (v1.0.64-1 experimental `--worktree`) — The new flag aligns with requests for better multi-branch workspace management.
- **LLM-invocable directory change** (#3865) — Users want the CLI’s `/cd` tool to update the status bar and maintain `pwd` awareness across worktree switches.

## Developer Pain Points

Recurring frustrations from recent issues:

1. **MCP integration friction** — Two issues today (#3455 Windows MCP fetch failure, #3835 incompatible schema with VSCode) highlight that MCP server configuration remains fragile across platforms and editors.
2. **Hook/permissions bypass under concurrency** — #2893 shows that plugin security hooks (`preToolUse`) can be silently circumvented when tools run in parallel — a serious trust boundary concern.
3. **Silent failures / hangs** — #3371 (stalled HTTPS sockets) and #1901 (fleet mode race) both involve the CLI progressing without user awareness. Developers expect clear error propagation.
4. **Docker/environment portability** — #3864 (absolute `cache_path` breaks in Docker) and #3696 (wrong arch on Alpine) show that the CLI assumes a stable `$HOME` and platform — problematic for containerized workflows.
5. **Inconsistent documentation vs. behavior** — #3861 specifically calls out that sandbox docs promise per-host filtering and cross-platform isolation that do not actually function.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-20

## Today's Highlights
Today's activity is light, with no new releases or open issues updated in the last 24 hours. The sole notable activity is a single pull request (#2463) aimed at fixing a critical proxy configuration gap in the `FetchURL` utility. This fix addresses an ongoing pain point for developers operating in restricted network environments.

## Releases
No new releases in the last 24 hours.

## Hot Issues
No issues were updated in the last 24 hours. The community is waiting for maintainer feedback on previously filed items.

## Key PR Progress
1. **[#2463] fix: respect system proxy settings in FetchURL**  
   *Author: itxaiohanglover*  
   Previously, the `FetchURL` component ignored HTTP_PROXY/HTTPS_PROXY environment variables because `aiohttp.ClientSession` does not honor them by default. This caused `Connection reset by peer` errors when direct internet access was unavailable. The PR implements explicit proxy configuration reading from environment variables.  
   **Impact**: Critical for enterprise and restricted network users. Community reaction is muted (0 reactions) likely due to low daily activity.  
   [PR #2463](https://github.com/MoonshotAI/kimi-cli/pull/2463)

## Feature Request Trends
With no new issues filed today, the overall feature request landscape remains dominated by:
- **Better network/proxy configuration**: Developers frequently request explicit proxy support (e.g., PAC files, SOCKS proxies) beyond basic env vars.
- **Windows-first features**: Several open requests for native Windows installers (MSI) and PowerShell command completion.
- **Language server protocol (LSP) integration**: Users want CLI commands that integrate with editors for real-time code analysis.

## Developer Pain Points
Recurring frustrations evident from open issues include:
- **Inconsistent environment handling**: Multiple issues report that environment variable conventions (e.g., `HTTP_PROXY` vs `http_proxy`) are not uniformly applied.
- **Dependency bloat**: Several developers have raised concerns about the size of the `aiohttp` dependency tree for basic HTTP operations.
- **Lack of offline documentation**: Some users request built-in `--help` enhancements or offline man pages for air-gapped environments.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-20

## Today's Highlights

A busy week in the OpenCode ecosystem with major progress on skill loading, Android/Termux support, and AI SDK migration. Developer attention remains sharply focused on memory stability, agent sandboxing, and cost tracking for custom providers. The community submitted over 50 issues and 20 PRs in the last 24 hours, with particular heat around GLM model variant support and an indefinite CPU spin bug.

---

## Releases

**No new releases in the last 24 hours.** The latest stable version remains v1.17.8 (desktop) and v1.17.4 (CLI), though users report regressions in both.

---

## Hot Issues

1. **[#20695 — Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** *(98 comments, 71 👍)*
   Persistent memory leak reports consolidated. Community is collecting heap snapshots. Core team has asked users **not** to ask LLMs for solutions (they are "always wrong"). This remains the single most active thread.

2. **[#2242 — Sandbox the agent](https://github.com/anomalyco/opencode/issues/2242)** *(74 comments, 55 👍)*
   Long-running request for terminal/file-system sandboxing. Users want seatbelt-style restrictions (like Gemini CLI or Codex CLI). No official response yet after 10 months.

3. **[#988 — MCP remote using OAuth](https://github.com/anomalyco/opencode/issues/988)** *(39 comments, 95 👍)*
   Highly upvoted feature request for OAuth 2.1-based MCP server installation. Would eliminate secret copying. Recently closed — perhaps landed in dev.

4. **[#16017 — Go plan usage/balance API endpoint](https://github.com/anomalyco/opencode/issues/16017)** *(19 comments, 70 👍)*
   Developers want programmatic access to subscription usage data (rolling/weekly/monthly). Dashboard already shows this data; API exposure is blocker for tooling.

5. **[#32444 — GLM-5.2 thinking-effort variants not exposed](https://github.com/anomalyco/opencode/issues/32444)** *(6 comments, 12 👍)*
   `ProviderTransform.variants()` blanket-excludes any model ID containing `"glm"`, blocking GLM-5.2 High/Max thinking modes. Users hitting this with Z.AI.

6. **[#31119 — Error: no such column: name](https://github.com/anomalyco/opencode/issues/31119)** *(6 comments, 5 👍)*
   Returning users on v1.16.2 hit a SQLite schema error. Likely a migration gap for stale databases. No fix mentioned.

7. **[#24817 — Ctrl+Z suspends OpenCode on Linux](https://github.com/anomalyco/opencode/issues/24817)** *(6 comments, 3 👍)*
   Ctrl+Z sends SIGTSTP instead of performing undo. Minor but high-friction for Linux users. Workaround: remap terminal.

8. **[#32010 — promptAsync messages silently dropped](https://github.com/anomalyco/opencode/issues/32010)** *(5 comments, 0 👍)*
   Background-agent wake prompts are persisted but the session loop is never scheduled, causing silent message loss. Affects oh-my-openagent plugin users on Linux.

9. **[#17223 — Cost tracking broken for custom providers](https://github.com/anomalyco/opencode/issues/17223)** *(5 comments, 19 👍)*
   Custom `@ai-sdk/openai-compatible` providers show `$0.00` regardless of usage. Built-in providers use models.dev; custom ones get no pricing data.

10. **[#32965 — CPU spin at 100% after bootstrap](https://github.com/anomalyco/opencode/issues/32965)** *(4 comments, 0 👍)*
    Fresh report: main thread pins a core at ~100% indefinitely with no logs or I/O. Happens on large multi-module projects. Ignores SIGTERM. Critical stability issue.

---

## Key PR Progress

1. **[#33040 — fix(tui): render console org load errors inline](https://github.com/anomalyco/opencode/pull/33040)** *(merged)*
   Prevents the "Switch org" dialog from crashing on load failure. Errors now display inline rather than tearing down the UI.

2. **[#32933 — AI SDK 6 migration, flag cleanup](https://github.com/anomalyco/opencode/pull/32933)** *(merged)*
   Migrates `.nullish()` to `.optional()` in OpenAI Responses provider schema. Also removes dead feature flags and deduplicates setting definitions.

3. **[#33038 — Native on-demand skill loading](https://github.com/anomalyco/opencode/pull/33038)** *(merged)*
   Introduces `type: core | non-core` skill frontmatter, `skills.autoLoad` config, and a `/skills` TUI dialog. Major UX improvement for skill management.

4. **[#33039 — Remove steering wrapper that can bust cache](https://github.com/anomalyco/opencode/pull/33039)** *(merged)*
   Prompts submitted during active runs now go as normal user messages. Removes the steering-only wrapper that was causing cache invalidation issues.

5. **[#33019 — feat(tui): add inline skill picker](https://github.com/anomalyco/opencode/pull/33019)** *(open)*
   Typing `$` as a token opens a skill picker inline. References multiple feature requests (#20982, #15617, #29217, #25439).

6. **[#33010 — Add Android/Termux support](https://github.com/anomalyco/opencode/pull/33010)** *(open)*
   Closes four long-standing issues (#961, #10504, #21043, #30248). Handles `os.platform() === "android"` in postinstall, wrapper, and publish scripts.

7. **[#29937 — LiteLLM plugin integration](https://github.com/anomalyco/opencode/pull/29937)** *(open)*
   Adds LiteLLM as a plugin with `LITELLM_BASE_URL`/`LITELLM_API_KEY` config. Models sync automatically. Long-running PR (since May 29).

8. **[#33030 — fix(bedrock): forward topK to Converse](https://github.com/anomalyco/opencode/pull/33030)** *(open)*
   Bedrock Converse path was silently dropping `topK`. Now forwarded via `additionalModelRequestFields`.

9. **[#28308 — fix(console): strip reasoning from oa-compatible history](https://github.com/anomalyco/opencode/pull/28308)** *(merged)*
   Some OpenAI-compatible providers reject non-standard fields like `reasoning_content` in history messages. Now stripped before sending.

10. **[#28342 — fix(opencode): rename bin entry to .cjs](https://github.com/anomalyco/opencode/pull/28342)** *(merged)*
    Fixed `require is not defined` error in ESM context. Node.js was resolving `bin/opencode` as ESM despite CommonJS syntax.

---

## Feature Request Trends

- **MCP ecosystem expansion:** Strong demand for OAuth-based MCP remote installation (#988), session-aware MCP tool calls (#33035), and better MCP server retry logic (#33012).
- **Sandboxing & security:** Agent sandboxing (#2242) remains the top security request after 10 months. Users want seatbelt-style file/terminal restrictions.
- **Voice input:** A new request for local-first speech-to-text (#30634) joins the backlog. No movement yet.
- **Custom provider parity:** Cost tracking (#17223) and reasoning/thinking field schemas (#33013) for custom providers are increasingly requested as the ecosystem grows beyond built-in models.
- **Android/Termux:** PR #33010 addresses this long-standing gap, which should satisfy several feature requests once merged.

---

## Developer Pain Points

- **Memory & CPU instability:** The Memory Megathread (#20695) and the new CPU spin bug (#32965) indicate core stability issues under heavy workloads. The 100% CPU spin is especially concerning as it ignores SIGTERM.
- **Desktop regressions:** Multiple reports (#29829, #31878, #32746) of missing terminal, file tree, and "Open in Explorer" features in recent desktop versions (v1.15.6+). Lag/freezing on Windows 10 with v1.17.8.
- **Cost tracking opacity:** Custom provider users cannot see their spending (#17223), and Go plan subscribers want API access to usage data (#16017). This blocks tooling and budgeting.
- **Session/chat data loss:** Silent message drops for background agents (#32010), orphaned shared sessions (#32062), and disappearing old messages (#7380) erode trust in session persistence.
- **Model compatibility friction:** Blanket exclusions (like the GLM variant block #32444) and reasoning field stripping (#24714, #28308) create integration headaches for non-standard providers.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-20

## Today's Highlights
Pi v0.79.8 introduces selective provider base entry points, allowing SDK users to exclude unused provider transports from bundled applications. A critical streaming bug (scroll-jacking in markdown rendering) has an open fix in progress, while the community continues to drive improvements around session performance, tool reliability, and provider compatibility.

## Releases
**v0.79.8** — [Release Notes](https://github.com/earendil-works/pi/releases/tag/v0.79.8)
- **Selective provider base entry points**: SDK users can now pair `@earendil-works/pi-ai/base` and `@earendil-works/pi-agent-core/base` with explicit provider registration to keep bundled applications from including unused provider transports. See [`pi-ai` Base Entry Point](https://github.com/earendil-works/pi).

## Hot Issues

1. **[#5825 — Streaming markdown forces scroll to bottom](https://github.com/earendil-works/pi/issues/5825)** (OPEN, 24 comments)
   - **Summary**: When `clear on shrink` is enabled, Pi forces a scroll-to-bottom while the agent streams markdown output, making it impossible to read ahead.
   - **Why it matters**: This breaks the core reading experience during long generations. High engagement suggests widespread impact.

2. **[#5897 — Unavailable models offered in Copilot integration](https://github.com/earendil-works/pi/issues/5897)** (CLOSED, 9 comments)
   - **Summary**: Copilot users see unsupported models (e.g., Opus variants, GPT nano) that fail on use.
   - **Why it matters**: Directly impacts onboarding for Copilot subscribers — offering broken options erodes trust.

3. **[#5673 — Add "vllm-deepseek" thinking format for DeepSeek models](https://github.com/earendil-works/pi/issues/5673)** (CLOSED, 4 comments)
   - **Summary**: Request for a new `thinkingFormat` value to support vLLM-proxied DeepSeek models, which require `chat_template_kwargs: { thinking: true }`.
   - **Why it matters**: Self-hosted DeepSeek users face a hard blocker without this. Rapid closure suggests strong maintainer interest.

4. **[#5871 — Anthropic OAuth-token detection is hardcoded to sk-ant-oat](https://github.com/earendil-works/pi/issues/5871)** (OPEN, 2 comments)
   - **Summary**: The `isOAuthToken()` check relies on a substring match for `sk-ant-oat`, preventing explicit declaration of OAuth credentials.
   - **Why it matters**: Blocks legitimate OAuth token use with custom/workaround configurations. Marked as in-progress.

5. **[#5899 — Edit tool fuzzy match silently rewrites whole file](https://github.com/earendil-works/pi/issues/5899)** (CLOSED, 2 comments)
   - **Summary**: Fuzzy match on `edit()` normalizes the entire file (strips trailing whitespace, folds smart quotes), causing data loss on untouched lines.
   - **Why it matters**: A silent data-loss bug in a core coding tool — community concern is high, though a fix (PR #5898) followed quickly.

6. **[#5804 — Fast Sessions](https://github.com/earendil-works/pi/issues/5804)** (OPEN, 2 comments)
   - **Summary**: Proposal to support SQLite session storage for faster loading/searching, while keeping JSONL as default.
   - **Why it matters**: Session management speed is a recurring pain point; SQLite storage could significantly improve UX for heavy users.

7. **[#5901 — Durable HITL tool-call interrupts](https://github.com/earendil-works/pi/issues/5901)** (CLOSED, 2 comments)
   - **Summary**: Headless SDK integration requests durable human-in-the-loop approval for tool calls, similar to LangGraph/LangChain middleware.
   - **Why it matters**: Reflects growing enterprise/headless use of Pi, where production-grade HITL is essential.

8. **[#5893 — Bash variable escaping behaves oddly on Windows/WSL](https://github.com/earendil-works/pi/issues/5893)** (CLOSED, 3 comments)
   - **Summary**: WSL bash variables expand too early when the agent invokes commands; `\$` escaping works but shouldn't be required.
   - **Why it matters**: Windows/WSL users continue to face cross-platform tooling friction.

9. **[#5906 — Bash and Read Tools Display Only Preview Lines](https://github.com/earendil-works/pi/issues/5906)** (CLOSED, 1 comment)
   - **Summary**: `bash` and `read` tools show only 5-10 lines when `expanded=false`, while other tools work properly — caused by hardcoded limits.
   - **Why it matters**: Truncates critical output, undermining tool utility for debugging.

10. **[#5854 — Enable prompt caching for mistral provider](https://github.com/earendil-works/pi/issues/5854)** (CLOSED, 3 comments)
    - **Summary**: The Mistral npm package supports prompt caching; this requests Pi to wire it through.
    - **Why it matters**: Prompt caching can significantly reduce costs and latency for Mistral API users.

## Key PR Progress

1. **[#5846 — fix(tui): stabilize streaming code fence rendering](https://github.com/earendil-works/pi/pull/5846)** (OPEN)
   - **What**: Fixes the scroll-jacking behavior in streaming markdown (#5825). Core TUI fix.
   - **Impact**: Directly resolves the highest-engagement open bug.

2. **[#5898 — fix(coding-agent): preserve untouched content in fuzzy edit matches](https://github.com/earendil-works/pi/pull/5898)** (CLOSED)
   - **What**: Prevents whole-file normalization on fuzzy edits, fixing the silent data-loss issue (#5899).
   - **Impact**: Critical data integrity fix for the edit tool.

3. **[#5900 — feat(coding-agent): emit OSC 9998/9999 for freecode-web adapter](https://github.com/earendil-works/pi/pull/5900)** (CLOSED)
   - **What**: Adds a WebBridge for accurate status/cost/context display in freecode-web UI.
   - **Impact**: Enables proper telemetry passthrough for web-based Pi sessions.

4. **[#5866 — feat(ai): add OpenRouter Fusion alias](https://github.com/earendil-works/pi/pull/5866)** (CLOSED)
   - **What**: Introduces `openrouter/fusion` as a synthetic router alias, mirroring `openrouter/auto`.
   - **Impact**: Gives users explicit access to OpenRouter's Fusion routing without needing metadata workarounds.

5. **[#5509 — feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/5509)** (OPEN)
   - **What**: New provider for Amazon Bedrock Mantle's OpenAI Responses API (GPT 5.5/5.4 models).
   - **Impact**: Expands Pi's cloud provider coverage to AWS Mantle, a significant enterprise addition.

6. **[#4794 — chore: run pi-test through tsx](https://github.com/earendil-works/pi/pull/4794)** (CLOSED)
   - **What**: Fixes test infrastructure so TypeScript source is exercised directly, not compiled output.
   - **Impact**: Improves test reliability and developer experience for contributors.

7. **[#5356 — docs: add containerization guide and Gondolin example](https://github.com/earendil-works/pi/pull/5356)** (CLOSED)
   - **What**: Adds a guide for running Pi in containers, with Gondolin as reference example.
   - **Impact**: Addresses a common onboarding friction for containerized deployments.

8. **[#5380 — Extension loading performance: 3x faster startup, 53x faster resume](https://github.com/earendil-works/pi/issues/5380)** (CLOSED)
   - **What**: Replaces extension loading with caching and cross-session resource reuse.
   - **Impact**: Dramatic performance improvement for users with many extensions (was ~4s startup with 50 extensions).

9. **[#5845 — Compaction-related fixes](https://github.com/earendil-works/pi/issues/5845)** (CLOSED)
   - **What**: Three fixes to compaction inefficiencies (parallel execution, unnecessary calls).
   - **Impact**: Reduces latency and token waste for local model users during session compaction.

10. **[#5152 — Support Codex websocket responses api with bearer token](https://github.com/earendil-works/pi/issues/5152)** (CLOSED)
    - **What**: Allows custom providers using `openai-codex-responses` to authenticate with plain bearer tokens, not only ChatGPT JWTs.
    - **Impact**: Unlocks Codex-compatible API use without ChatGPT OAuth dependency.

## Feature Request Trends

- **Provider extensibility**: Multiple requests around custom `thinkingFormat` values (vLLM-DeepSeek), new providers (Bedrock Mantle, OpenRouter Fusion), and flexible OAuth detection — the community wants Pi to support an ever-wider array of backend LLM services.
- **Session performance**: Fast Sessions (SQLite storage), optimized same-directory switching, and extension caching point to growing frustration with session load/resume times as users accumulate history.
- **Human-in-the-loop tooling**: Headless SDK users are requesting durable HITL interrupts for tool calls, signaling shift toward production/enterprise use cases.
- **Customization of system prompts**: Requests for tool prompt placeholders in custom `SYSTEM.md` and configurable compaction options reflect users wanting finer control over Pi's internal behavior.

## Developer Pain Points

- **Cross-platform tooling bugs**: Bash variable escaping on WSL, MinGW file-write failures, and tmux extended-keys warnings — Windows/Linux-mixed environments remain a persistent source of friction.
- **Streaming UX breakage**: The markdown scroll-jacking bug (#5825) is the most active open issue, highlighting how streaming output interactions can undermine the core chat experience.
- **Silent data corruption**: The fuzzy edit normalization bug (#5899) — while quickly patched — underscores the risk of "helpful" normalization in file-editing tools. Developers want precision, not convenience, when rewriting code.
- **API provider integration gaps**: Unavailable models offered in Copilot (#5897), Moonshot/Kimi schema rejections (#5822), and hardcoded OAuth detection (#5871) show that provider compatibility remains a major integration burden for users.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-20

## Today's Highlights
A major wave of bug fixes and stability improvements landed, particularly around the QQ Bot channel (multiple reconnection and token refresh issues resolved) and CLI input handling (keypress subscriptions, settings validation). Community engagement remains high, with users filing detailed reports on multi-agent communication gaps, MCP hook inconsistencies, and sandbox parsing failures on Windows. No new releases were published in the last 24 hours.

## Releases
No new releases in the last 24 hours.

## Hot Issues (10 Noteworthy)

1. **#5267: `context.fileName` in setting file doesn't work?** — [Link](https://github.com/QwenLM/qwen-code/issues/5267)  
   *Scope: configuration, memory, Windows*  
   The documented feature to customize context-attached files via `settings.json` does not function as expected. 9 comments suggest community confusion; the author provided exact JSON reproduction. A documentation-behavior mismatch is suspected.

2. **#5142: Virtualized History Mode — history not visible until `/` pressed** — [Link](https://github.com/QwenLM/qwen-code/issues/5142)  
   *Scope: CLI, rendering*  
   A rendering regression in virtualized history mode makes past conversations invisible. Users must press `/` to reveal history. 5 comments confirm impact on CLI workflows.

3. **#4814: UI should simplify adding new models for Custom Provider users** — [Link](https://github.com/QwenLM/qwen-code/issues/4814)  
   *Category: UI, configuration*  
   On first launch, third-party providers like OpenRouter are wizard-guided, but Custom Provider users face a tedious manual process. 5 comments highlight onboarding friction as a top UX concern.

4. **#5422: `PostToolUseHook` declares `updatedMCPToolOutput` but never consumes it** — [Link](https://github.com/QwenLM/qwen-code/issues/5422)  
   *Scope: MCP, hooks*  
   A public hook field advertises the ability to rewrite MCP tool outputs, yet the runtime never reads it. This broke expectations for users relying on hook-based MCP output transformations. Acknowledged with a `welcome-pr` label.

5. **#5180: Main session as project manager, subagent crashes mid-task** — [Link](https://github.com/QwenLM/qwen-code/issues/5180)  
   *Scope: multi-agent, memory, token management*  
   In a hierarchical agent setup, the subagent crashes silently mid-execution; the main session is never notified. The reporter used a file-monitoring workaround, underscoring a critical missing notification mechanism. 6 comments, high relevance for multi-agent roadmap.

6. **#5239: Weak subagent ↔ main session communication** — [Link](https://github.com/QwenLM/qwen-code/issues/5239)  
   *Scope: session management, multi-agent*  
   Subagents lack bidirectional notification channels. When a subagent hangs, the main session has no awareness. The reporter resorted to file-based monitoring hacks. 4 comments, directly tied to roadmap multi-agent items.

7. **#5225: Automatic switching between Pro and Flash models** — [Link](https://github.com/QwenLM/qwen-code/issues/5225)  
   *Scope: model switching, performance*  
   A user requests dynamic model tier selection based on task complexity (pro vs. flash). Already present in competing agents. 3 comments, strong cost-saving argument.

8. **#3361: Agent misinterprets shell output as empty despite success** — [Link](https://github.com/QwenLM/qwen-code/issues/3361)  
   *Scope: CLI, OpenAI-compatible API*  
   Commands like `git` produce visible output in the UI, but the agent treats it as empty. Long-standing open issue with 5 comments; impacts developer trust in automation.

9. **#4951: Accuracy of in/out tokens in statusline** — [Link](https://github.com/QwenLM/qwen-code/issues/4951)  
   *Scope: token management, settings*  
   A user reports token counts reaching "hundreds of K" after a few exchanges and "millions" shortly after. 4 comments raise questions about counting methodology vs. actual API billing.

10. **#4063: Core + CLI architecture review — 12 structural issues** — [Link](https://github.com/QwenLM/qwen-code/issues/4063)  
    *Category: core, CLI*  
    A thorough audit identifies foundational problems: Google GenAI type contamination across 136 files, circular dependency risks, inconsistent error patterns. 1 thumb-up signals community interest; no action taken yet.

## Key PR Progress (10 Important)

1. **#5423: Fix — remove dead `updatedMCPToolOutput` field** — [Link](https://github.com/QwenLM/qwen-code/pull/5423)  
   Direct fix for #5422. The declared-but-unconsumed hook output field is removed. Clean repo-wide search confirmed no consumers. *Merged.*

2. **#5409: Block broad shell self-kill commands** — [Link](https://github.com/QwenLM/qwen-code/pull/5409)  
   Prevents the agent from terminating its own process via `taskkill`, `killall`, `pkill` patterns. Mitigates the "session suicide" problem reported in #4854. *Merged.*

3. **#5415: Bound QQ Bot gateway reconnect retries** — [Link](https://github.com/QwenLM/qwen-code/pull/5415)  
   Counts gateway-reachable cycles against `maxReconnectAttempts` to avoid infinite retries. Also fixes timer reference and `.unref()` for clean process shutdown. *Merged.*

4. **#5418: Narrow settings enum schemas** — [Link](https://github.com/QwenLM/qwen-code/pull/5418)  
   Restricts `context.importFormat` to `tree | flat` and `dnsResolutionOrder` to `ipv4first | verbatim`. Regenerates VS Code settings schema for proper autocomplete. *Merged.*

5. **#5404: Preserve custom provider models on install** — [Link](https://github.com/QwenLM/qwen-code/pull/5404)  
   Fixes a regression where installing a new custom provider overwrote previously configured models. Now merges by model identity and preserves `baseUrl`. *Merged.*

6. **#5002: Unify session title/displayName into single field** — [Link](https://github.com/QwenLM/qwen-code/pull/5002)  
   Consolidates `title` and `displayName` into one field across daemon API. Adds persistence so display names survive restarts. *Merged.*

7. **#5421: Keep keypress handlers current** — [Link](https://github.com/QwenLM/qwen-code/pull/5421)  
   Stabilizes keypress subscriptions in AskUserQuestionDialog. Fixes a regression where `j`/`k` navigation broke after dialog re-renders. *Merged.*

8. **#5414: Keep QQ Bot token refresh retrying** — [Link](https://github.com/QwenLM/qwen-code/pull/5414)  
   Ensures token refresh retries every 60s after repeated failures, with proper disposal stop. Fixes #5411 (permanent token expiry after 2 failures). *Merged.*

9. **#5407: Target microcompaction cache disarms** — [Link](https://github.com/QwenLM/qwen-code/pull/5407)  
   Avoids reporting evicted read paths when same-path tool results remain quotable. Adds path-level `FileReadCache` fallback for stat failures/inode mismatches. *Merged.*

10. **#5396: Reduce UI flicker — throttle + compact transition + batch STREAM_TEXT** — [Link](https://github.com/QwenLM/qwen-code/pull/5396)  
    Three-part fix: throttles stream from 60→100ms, wraps compact mode toggle in `startTransition`, batches `STREAM_TEXT` per chunk. Addresses two flicker regressions (#4561, #3838). *Open.*

## Feature Request Trends

1. **Multi-agent orchestration** — Multiple high-comment issues (#5180, #5239) demand bidirectional communication between main sessions and subagents, crash notification, and task progress monitoring. The existing file-monitoring workaround is unsustainable.

2. **Automatic Pro/Flash model switching** — Users want cost optimization via tiered models based on task difficulty (#5225). Already a feature in competing tools.

3. **Custom provider UX** — The onboarding wizard for custom model providers is far behind third-party presets (#4814). Users want easier model addition without manual configuration.

4. **History and rendering controls** — Users request persistent collapse-on-resume settings (#4085), visible history in virtualized mode (#5142), and opt-in estimated response time display (#5366).

5. **Extension and archive support** — A PR (#4909) adds `.zip`/`.tar.gz` extension sources. The web shell also gains extension management (#5398), signaling a broader platform vision.

## Developer Pain Points

1. **Context file configuration silently broken** (#5267) — A documented feature (`context.fileName`) doesn't work, causing confusion and wasted debugging time.

2. **Token counting lacks transparency** (#4951) — Inflated or unclear token counts in the statusline erode user trust in billing accuracy.

3. **Self-kill vulnerability** (#4854, #5409) — The agent can accidentally kill its own process when managing project dev servers. Users have to manually work around this.

4. **Windows path parsing failures** — Multiple issues (#5386: sandbox mounts, #5370: grep output parsing) break on Windows drive letters due to colon-based splitting.

5. **MCP hook capability mismatch** (#5422) — A declared feature (tool output rewriting via hooks) is unimplemented, leading to broken expectations for extension developers.

6. **QQ Bot channel reliability** — Three issues (#5410, #5411, #5412) in one day exposed infinite reconnect loops, permanent token expiry, and multi-instance file contention — all from a single code review, indicating insufficient testing of the channel.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-20

## Today's Highlights
The community is abuzz with v0.8.63 preparation, featuring a new sub-agent toggle and token budget regulation for high-fan-out AI workflows. A major refactoring push is underway across config structure, MCP header helpers, and Codex response retry logic, alongside a flood of dependency updates from Dependabot. Notably, the project repository is listed as **Hmbown/CodeWhale**, indicating the original **DeepSeek-TUI** name may have been superseded.

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. **#2870 — EPIC: Staged command-boundary refactor**  
   *Tracker for breaking #2791 into mergeable layers. Critical infrastructure work with 6 comments.*

2. **#3238 — Does not work in Ubuntu 22.04 LTS (glibc version mismatch)**  
   *System-level compatibility blocker for Linux developers. 4 comments show community concern.*

3. **#3328 — v0.8.62 doesn't show sidebar**  
   *Fresh regression report: `/sidebar` command acknowledges but UI element missing. 1 comment.*  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/3328)

4. **#3324 — Recommendation: MIT library for long-context coding (mosaic-compress)**  
   *External library pitch for stateless conversation compression. Prompting exploration of infinite-context solutions.*  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/3324)

5. **#3320 — Alibaba Cloud Bailian API key not integrated**  
   *Chinese cloud provider support gap. Blocks developers using AliCloud models.*

6. **#3307 — Config tests live in production lib.rs**  
   *Architecture concern flagged by cyq1017 — inline tests increase conflict surface. Being addressed by PR #3345.*

7. **#3273 — Proxy env not propagated to Node child processes**  
   *Network configuration blocker for corporate environments. Fix incoming in PR #3331.*

8. **#3258 — App-server allows non-loopback binds without authentication**  
   *Security vulnerability: exposed server without auth required. Fix incoming in PR #3332.*

9. **#3019 — Codex responses streaming lacks retry logic**  
   *Reliability issue: single attempt fails on transport errors. Fix incoming in PR #3344.*

10. **#2791 — Command-boundary architecture discussion**  
    *Foundational refactor enabling modular command execution. Epic #2870 tracks its sub-PRs.*

## Key PR Progress
1. **#3327 — v0.8.63: Add first-class sub-agent toggle**  
   *New `/config subagents on|off|status` command for runtime sub-agent control. Session-only + persistence modes.*  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/3327)

2. **#3345 — refactor(config): move inline tests to module**  
   *Extracts test code from `lib.rs` to dedicated `tests.rs`. Reduces production binary size and merge conflicts. Closes #3307.*  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/3345)

3. **#3344 — fix(tui): retry Codex responses requests**  
   *Routes `/codex/responses` through `send_with_retry` with per-attempt rebuild. Fixes #3019.*  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/3344)

4. **#3330 — Layer 4: replay FEAT-005 command extraction**  
   *Semantic replay of command extraction onto Hunter architecture. Part of #2870 EPIC.*  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/3330)

5. **#3331 — fix(tui): enable proxy env for js execution**  
   *Mirrors proxy variables into Node environment. Fixes #3273.*  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/3331)

6. **#3332 — fix(app-server): require auth for non-loopback binds**  
   *Security fix: rejects non-loopback binds without explicit auth token. Fixes #3258.*  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/3332)

7. **#3321 — fix(workflow): add token budget regulator for high fan-out agent runs**  
   *Enforces token budgets on protocol runtime layer for sub-agent orchestration.*  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/3321)

8. **#3300 — feat(tui): preserve thinking/tool blocks when seeding thread**  
   *Block-type-aware thread seeding preserves `Thinking`, `ToolUse`, `ToolResult` blocks. Fixes conversation reconstruction.*  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/3300)

9. **#3329 — fix(config): restore huggingface env precedence**  
   *Restores Hugging Face API key env var precedence to pass CI lint gates.*  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/3329)

10. **#3333 — refactor(tui): split MCP header helpers**  
    *Extracts HTTP header formatting from transport code. Prepares for MCP transport split (#3310).*  
    [GitHub](https://github.com/Hmbown/CodeWhale/pull/3333)

## Feature Request Trends
- **Sub-agent orchestration**: Multiple PRs (#3327, #3321) focus on first-class sub-agent toggles and token budget regulation for multi-agent runs.
- **Thread fidelity**: Growing demand to preserve complete conversation state including thinking blocks and tool calls (#3300).
- **Provider expansion**: Requests for Alibaba Cloud Bailian (#3320) and conversation compression libraries (#3324) indicate desire for broader cloud and long-context support.
- **Architecture modularity**: Strong momentum toward splitting large files (config tests #3345, MCP headers #3333, command-boundary #2870) for incremental review and maintainability.

## Developer Pain Points
1. **glibc incompatibility**: Ubuntu 22.04 LTS users cannot install via npm (#3238) — a blocking issue for Linux developers without newer glibc.
2. **UI regressions**: v0.8.62 sidebar disappearance (#3328) frustrates users with missing navigation.
3. **Missing retry logic**: Codex responses (#3019) and proxy env (#3273) gaps cause reliability issues in proxied/corporate environments.
4. **Security concerns**: Unauthenticated app-server binds (#3258) raise immediate security flags.
5. **Testing surface inflation**: Inline test code in production modules (#3307) increases merge conflict risk during active development.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*