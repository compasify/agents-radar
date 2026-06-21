# AI CLI Tools Community Digest 2026-06-21

> Generated: 2026-06-21 00:29 UTC | Tools covered: 9

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
**Date:** 2026-06-21

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is experiencing a **maturation phase marked by scaling pains**. Across all seven tools surveyed, communities are grappling with critical reliability regressions (subagent infinite loops, API connectivity breaks, sandbox policy failures) while demanding better observability, cost controls, and security hardening. The landscape is bifurcating: tools like Claude Code and OpenAI Codex face backlash from rapid-release regressions, while smaller tools (Pi, DeepSeek TUI) invest in architectural debt reduction. A clear convergence is emerging around **sub-agent governance**, **context window transparency**, and **OS-level sandboxing** as non-negotiable requirements for production use. The "move fast" mindset is yielding to demands for stability, especially from cost-sensitive professional users.

---

## 2. Activity Comparison

| Tool | Hot Issues (Today) | PRs (Active/Today) | Release Status | Disruption Level |
|---|---|---|---|---|
| **Claude Code** | 10 (3 critical regressions) | 5 (3 open, 1 merged) | v2.1.185 patch (minor UX) | 🔴 High — Linux MIA, recursion bug |
| **OpenAI Codex** | 10 (1 critical regression) | 10 (1 revert, 8 open) | rust-v0.142.0-alpha.7 (no changelog) | 🔴 High — sandboxPolicy broken |
| **Gemini CLI** | 10 (4 P1 bugs) | 10 (8 open, 2 CVE fixes) | No release | 🟡 Medium — agent hangs, CVE patches |
| **GitHub Copilot CLI** | 10 | 3 (1 merged, 2 open) | No release | 🟢 Low — cleanup day, no regressions |
| **Kimi Code CLI** | 4 (2 closed) | 3 (1 open, 1 merged) | No release | 🟢 Low — proxy fix pending |
| **OpenCode** | 10 | 10 (all open) | v1.17.9 step-limit fixes | 🟡 Medium — Alpine regression |
| **Pi** | 10 | 10 (1 open, 8 closed) | v0.79.9 thinking compatibility | 🟢 Low — steady iteration |
| **Qwen Code** | 10 | 10 (5 open, 5 closed) | v0.18.4 + v0.18.4-preview.0 | 🟡 Medium — 30+ bug batch fix |
| **DeepSeek TUI** | 10 | 10 (all open) | v0.8.63 release train (pending) | 🟡 Medium — TUI freezes, monolith split |

**Key Observation:** Only 2 of 9 tools shipped a release today. Claude Code and OpenAI Codex are in "firefighting" mode with critical regressions. Qwen Code shipped the most bug fixes (30+) but the fixes are systemic (case-sensitivity, path traversal) — not architectural.

---

## 3. Shared Feature Directions

### 3.1 Sub-Agent Governance & Cost Controls *(7/9 tools)*
| Tool | Specific Need |
|---|---|
| Claude Code | Infinite recursion cap, `CLAUDE_CODE_FORK_SUBAGENT=0` enforced |
| Gemini CLI | MAX_TURNS false success report, indefinite loop in web_search |
| OpenAI Codex | *(Implicit via Protected Data Mode)* |
| GitHub Copilot CLI | Subagent model compatibility with `deferTools: never` |
| OpenCode | Agent step limits (fixed in v1.17.9), subagent recovery |
| DeepSeek TUI | Token budget regulator, agent scope overreach |
| Pi | Token spend pacing for high-fanout agent runs |

**Pattern:** The community is demanding **hard limits on agent autonomy** — both in recursion depth and token spend. No tool has a complete solution. Gemini CLI's false-success reporting (hiding failures) is particularly dangerous.

### 3.2 Context Window Transparency *(5/9 tools)*
| Tool | Specific Need |
|---|---|
| Claude Code | `/goal` long prompt has no collapse control |
| OpenAI Codex | *(Context compaction reminder PR)* |
| GitHub Copilot CLI | No context window visibility, no compaction notification |
| OpenCode | Context usage breakdown TUI (#6152, 112 👍) |
| Pi | Compaction inefficiency fixes |

**Pattern:** Users want to **see where their tokens are going** — especially cost-conscious Plus/Pro subscribers. GitHub Copilot CLI and OpenCode have the strongest demands for visible token economics.

### 3.3 Sandboxing & Security *(6/9 tools)*
| Tool | Specific Need |
|---|---|
| Claude Code | *(Chrome extension over-blocking)* |
| OpenAI Codex | Protected Data Mode (merged), `.codexignore` request (#2847, 409 👍) |
| Gemini CLI | Secrets sent before redaction (P2 security bug) |
| OpenCode | Sandbox agent terminal to cwd (#2242, 55 👍) |
| Pi | *(Human-in-the-loop tool approval)* |
| Qwen Code | Path traversal via raw prefix matching (6+ bugs) |

**Pattern:** Security is a **top-upvoted feature** across the board. OpenAI Codex's `.codexignore` is the most-requested feature in the entire ecosystem today (409 👍). The threat model is clear: preventing the agent from reading/exfiltrating sensitive files.

### 3.4 Windows/Linux Compatibility Gaps *(6/9 tools)*
| Tool | Platform Issue |
|---|---|
| Claude Code | Linux API regression (#69358) |
| OpenAI Codex | Windows sandboxPolicy broken, WSL incompatibility |
| Gemini CLI | Wayland browser agent failure |
| Kimi Code CLI | Git Bash vs Code extraction issue |
| OpenCode | Alpine/musl TUI breakage |
| DeepSeek TUI | Windows TUI freeze, proxy-invisible JS execution |

**Pattern:** **Linux-first** tools (Claude Code, Gemini CLI) struggle with Linux-specific regressions. **Windows support** is universally poor — every tool has at least one Windows-specific bug. Cross-platform CI is a systemic weakness.

### 3.5 Provider/Model Extensibility *(4/9 tools)*
| Tool | Direction |
|---|---|
| Pi | OpenRouter UI, provider extensions with model aliases |
| Qwen Code | `customHeaders` pattern for new providers, Requesty support |
| DeepSeek TUI | Non-DeepSeek thinking parsing (MiniMax, Qwen, GLM) |
| OpenCode | Provider-specific API regressions (MiniMax, GLM) |

**Pattern:** Tools are converging on **declarative provider configs** (Pi's `models.json` override, Qwen's `customHeaders`) rather than hardcoded provider classes. DeepSeek TUI's monolithic config files (9,402 lines) are the anti-pattern everyone seeks to avoid.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|
| **Primary User** | CLI power users, cost-sensitive | Desktop/mobile developers | Enterprise + Google ecosystem | GitHub-centric teams | Linux CLI enthusiasts | TUI-focused power users | Asian market, Qwen ecosystem | DeepSeek loyalists |
| **Feature Focus** | Subagent orchestration | Sandboxing, MCP ecosystem | Agent delegation, memory | Plugin/hook management | Sandbox, context UX | Provider extensibility | Voice, OAuth security | Sub-agent governance |
| **Technical Approach** | Hookify, session MCP | Protected Data Mode, ExecutorFS | Auto Memory, skills | GitHub Agentic Workflows | Agent teams, lazy-scroll | Shrinkwrap, thinking levels | `customHeaders` pattern | Monolithic Rust monorepo |
| **Community Size** | Large (55 👍 avg) | Large (409 👍 top) | Medium (8 👍 avg) | Small (0-1 👍 avg) | Large (112-183 👍) | Small-Medium (20 👍 max) | Small (1-5 👍 avg) | Small-Medium |
| **Release Cadence** | Rapid (multiple/day) | Rapid | Slower | Slow | Steady | Steady | Steady | Pending (v0.8.63) |
| **Maturity Signal** | Regressions outpacing fixes | Revert needed for sandbox | CVE patches needed | Early feature exploration | Scaling pains | Architecture cleanup | Bug batch fixing | Monolith splitting |

**Key Insight:** **GitHub Copilot CLI** is the least mature — low engagement, basic features being opened. **Claude Code** and **OpenAI Codex** have the largest communities but are paying the price of rapid release cycles. **Pi** and **OpenCode** are quietly building solid foundations with less hype.

---

## 5. Community Momentum & Maturity

### Active Communities (High Engagement)
- **OpenCode** — Highest upvote counts (183, 112, 55) with strong issue discussion. The v1.17.9 release with step-limit fixes shows responsive development. Agent teams PR (#33144) is a major architectural feature.
- **Claude Code** — Largest absolute community, but engagement is **negative** (angry about regressions). 55 👍 on a "why doesn't it work" issue is a trust problem.
- **OpenAI Codex** — `.codexignore` at 409 👍 is ecosystem-wide #1 feature request. Protected Data Mode (merged) shows proactive compliance thinking.

### Rapid Iteration (Risky)
- **Claude Code** — Multiple releases per day. The Linux regression (#69358) was introduced across two patches with no hotfix in sight. The infinite recursion bug (#68619) persists despite high awareness.
- **OpenAI Codex** — Pre-release alpha channels (rust-v0.142.0-alpha.7) with no changelog. The sandboxPolicy revert (#29268) is an emergency fire drill.

### Stable Builders
- **Pi** — v0.79.9 shipped with real thinking compatibility. 10 PRs with 8 closed. This is the healthiest cadence among the tools surveyed.
- **Qwen Code** — 30+ bugs fixed in one batch. The focus on **systemic patterns** (case-sensitivity, path traversal) rather than one-offs is a sign of engineering maturity.
- **DeepSeek TUI** — Architectural refactoring (monolith split) is painful but necessary. The v0.8.63 release train with 29 commits is a positive signal.

**Maturity Verdict:** Pi > OpenCode > Qwen Code > GitHb Copilot CLI > Gemini CLI > DeepSeek TUI > Claude Code ≈ OpenAI Codex

---

## 6. Trend Signals

### 6.1 "Agent Safety" Is the New Performance
The single strongest signal is the **demand for agent guardrails**. Infinite recursion bugs (Claude Code, Gemini CLI), over-autonomous scope creep (DeepSeek TUI), secrets leaked before redaction (Gemini CLI), and false-success reporting (Gemini CLI) all point to a market that has moved past "can it work?" to "**can I trust it not to burn money or leak secrets?**"

**Reference value:** Any new agent tool should ship with **default-on cost caps**, **recursion depth limits**, and **scope-of-work confirmation** from day one. The lack of these is the #1 reason users are switching away from otherwise capable tools.

### 6.2 Platform Portability Is Still an Afterthought
Every tool has at least one major platform gap: Linux regressions (Claude Code), Windows sandbox breaks (OpenAI Codex, DeepSeek TUI), Wayland incompatibility (Gemini CLI), musl/Alpine breakage (OpenCode). The **Windows developer** is particularly underserved — every tool has a Windows-specific issue.

**Reference value:** If targeting enterprises, **Windows + WSL compatibility** is a non-negotiable baseline. Linux (especially musl-based/containerized) is the second gap. macOS-only tools are leaving money on the table.

### 6.3 MCP Integration Is Fragile, But Everyone Wants It
MCP is the **universal plugin protocol**, but quality varies wildly across tools:
- **Claude Code:** VS Code ignores MCP entirely (#19054), OAuth flow broken (#69797)
- **OpenCode:** MCP null parameters for MiniMax (#33160)
- **GitHub Copilot CLI:** No MCP-specific issues (too early)
- **Pi:** Shrinkwrap causes duplicate provider registries (#5653)

**Reference value:** Tools that get MCP right (robust authentication, reliable tool propagation, IDE integration) will win ecosystem lock-in. Currently, none do.

### 6.4 The "Planner vs. Autopilot" Debate Is Unsolved
GitHub Copilot CLI (#3878) explicitly surfaces a friction: users want **Plan mode as default**, but sessions auto-advance to Autopilot after implementation. DeepSeek TUI (#3275) reports the agent self-generating approval text. This is a **UX design gap** — tools lack a clean "review then execute" workflow.

**Reference value:** The next generation of AI CLI tools should treat **confirmation boundaries** as a first-class UI concept, not an afterthought.

### 6.5 Declarative Provider Configs Are Winning
Pi's `models.json` overrides and Qwen Code's `customHeaders` pattern are converging on a **declarative, file-based provider configuration** model. DeepSeek TUI's monolithic 9,402-line config is the cautionary tale.

**Reference value:** Tools should expose provider configuration as **a schema-validated JSON/YAML file**, not code changes or CLI flags. This reduces friction for community contributions and enterprise configuration management.

---

## Summary: The Call to Action

| If you are... | You should care about... |
|---|---|
| **A Claude Code user** | The Linux regression and recursion bug are costing real money. Consider pinning to v2.1.180 until fixes ship. |
| **An OpenAI Codex user** | Don't upgrade to 26.616 yet. The revert PR (#29268) is in flight. `.codexignore` is the ecosystem's #1 feature — endorse it. |
| **A Gemini CLI user** | Agent hangs and false-success reporting are the blockers. The CVE fixes are critical. |
| **A GitHub Copilot CLI user** | The tool is early. Plugin/hook visibility and context transparency are the gaps to watch. |
| **An OpenCode user** | Sandbox and context transparency are your top asks. The agent teams feature is promising. |
| **A Pi user** | You have the most stable tool. Provider extensibility and HITL are the emerging strengths. |
| **A Qwen Code user** | The batch fix pattern is healthy. Voice dictation is the standout new feature. |
| **A DeepSeek TUI user** | TUI freezes are the top frustration. The architectural refactoring will pay off in stability. |
| **Building a new AI CLI tool** | Ship **default cost caps, sandboxing, platform portability (Windows + musl), and plan-review-execute UX**. Learn from everyone else's regressions. |

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the `anthropics/skills` repository, based on the most-watched activity as of June 21, 2026.

---

## Claude Code Skills Community Highlights Report

### 1. Top Skills Ranking (by Discussion Activity)

**1. Document Typography / Quality Control** — PR #514 (Open)
- **Functionality:** Prevents common typesetting errors in AI-generated documents, such as orphaned words (1-6 words on their own line), stranded section headers (widow paragraphs), and numbering misalignment.
- **Discussion:** The primary discussion centers on the ubiquity of the problem; the author argues these issues affect "every document Claude generates." A strong reception with **0 (undefined) comments** suggests a clear and uncontentious proposal.
- **Status:** Open. [GitHub Link](https://github.com/anthropics/skills/pull/514)

**2. ODT (OpenDocument) Skill** — PR #486 (Open)
- **Functionality:** Enables creation, template filling, reading, and conversion of ODT/ODS files, critical for LibreOffice and ISO-standard document workflows.
- **Discussion:** This is a highly requested format bridge. The discussion focuses on the complexity of maintaining a full-parser skill versus a simpler template filler.
- **Status:** Open. [GitHub Link](https://github.com/anthropics/skills/pull/486)

**3. Frontend-Design Skill Clarity** — PR #210 (Open)
- **Functionality:** A revised version of the existing `frontend-design` skill, aiming for single-conversation actionability and specific behavioral steering.
- **Discussion:** A meta-discussion on skill quality itself. The author provides a rigorous framework for what makes a "good" skill (specific, actionable, coherent), sparking debate on skill design philosophy.
- **Status:** Open. [GitHub Link](https://github.com/anthropics/skills/pull/210)

**4. ServiceNow Platform Skill** — PR #568 (Open)
- **Functionality:** A broad assistant for the ServiceNow platform, covering ITSM, ITOM, SecOps, ITAM, SPM, and IntegrationHub.
- **Discussion:** Represents the largest single-vendor enterprise skill submitted. Discussion centers on scope management—whether a single skill can effectively handle such a broad platform versus a suite of specific sub-skills.
- **Status:** Open. [GitHub Link](https://github.com/anthropics/skills/pull/568)

**5. Testing-Patterns Skill** — PR #723 (Open)
- **Functionality:** Covers unit testing (AAA pattern, naming), React component testing (Testing Library), and testing philosophy (Trophy model).
- **Discussion:** A standard but highly practical addition. Comments focus on language support (JS/TS vs. Python) and whether it should be language-agnostic.
- **Status:** Open. [GitHub Link](https://github.com/anthropics/skills/pull/723)

**6. Shodh-Memory (Persistent Context)** — PR #154 (Open)
- **Functionality:** Teaches Claude to maintain a persistent memory layer via a `proactive_context` signal, allowing context retention across conversations.
- **Discussion:** A high-concept skill that solves a fundamental Claude Code pain point. The discussion involves implementation complexity and context window trade-offs.
- **Status:** Open. [GitHub Link](https://github.com/anthropics/skills/pull/154)

### 2. Community Demand Trends (from Issues)

- **Enterprise Plugin & Cloud Integration:** The strongest single demand is for **SharePoint Online (SPO) document handling** (Issue #1175) and broader **Bedrock deployment support** (Issue #29). The community wants skills that interface with real enterprise SaaS platforms.
- **Org-Wide Skill Governance & Sharing:** Issue #228 (14 comments, 7 upvotes) reveals a strong demand for **org-wide skill libraries and sharing**, bypassing the current manual `.skill` file distribution.
- **Cross-Platform & ISO Standard Formats:** The demand for **ODT support** (PR #486) and a general request to expose skills as **MCPs (Model Context Protocol)** (Issue #16) indicate a desire for open-standard interoperability, not just proprietary Anthropic formats.
- **Security & Trust Boundaries:** Issue #492 highlights a significant security concern: **community skills impersonating official Anthropic skills** under the `anthropic/` namespace. This signals a need for a review process or verification badges.

### 3. High-Potential Pending Skills (Likely to Land Soon)

| PR | Skill | Status |
|----|-------|--------|
| #514 | **Document Typography** | Open, non-contentious, solves a universal problem |
| #509 | **CONTRIBUTING.md** (Meta-skill) | Open, directly addresses a **community health gap** (GitHub score 25%) |
| #539 | **YAML Special Character Detection** (Meta-tooling) | Open, targeted fix for silent skill-breaking bugs |
| #444 | **AURELION Suite** (Kernel/Advisor/Agent/Memory) | Open, a full ecosystem of structured thinking skills |
| #335 | **Masonry Image & Video Generation** | Open, multi-modal generation (Imagen/Veo) |

### 4. Skills Ecosystem Insight

**The community's most concentrated demand is for platform-bridging skills (O365, ServiceNow, SPO) combined with tooling reliability fixes (Windows compatibility, YAML parsing, eval accuracy), reflecting a shift from "what can Claude do" to "how can Claude safely and reliably integrate into existing enterprise workflows."**

---

# Claude Code Community Digest — 2026-06-21

## Today's Highlights
A minor patch (v2.1.185) improves API timeout ergonomics, but the community is battling two major regressions: a **critical infinite recursion bug** in subagent spawning that causes runaway token consumption, and a **Linux API connectivity regression** in recent builds that leaves many users unable to use the tool at all. Three open PRs address hookify, Statsig telemetry, and plugin installation documentation.

## Releases
**v2.1.185** — Stream-stall timeout UX improved:
- Hint text changed from *"No response from API · Retrying in …"* to *"Waiting for API response · will retry in …"*
- Timeout threshold increased from **10s** to **20s** of silence before retry hint appears

This is a small ergonomic fix; the underlying API availability issues (see Issue #69358) remain unaddressed in this release.

---

## Hot Issues

### 🔥 #69358 — [BUG] No Response From API 2.1.181, 2.1.183 (constantly)
- **Platform:** Linux | **Reactions:** 👍55, 💬19 | [GitHub](https://github.com/anthropics/claude-code/issues/69358)
- **Why it matters:** A regression in two recent builds makes Claude Code effectively unusable on Linux. Heavy upvote count indicates widespread impact. Still open — no fix shipped yet.

### 🔥 #68619 — [CRITICAL] Subagent spawning bugs trigger infinite recursion, infinite token usage
- **Platform:** macOS | **Reactions:** 👍5, 💬18 | [GitHub](https://github.com/anthropics/claude-code/issues/68619)
- **Why it matters:** Subagents recursively spawn 50+ child agents, ignore the `CLAUDE_CODE_FORK_SUBAGENT=0` escape hatch, and permission denials trigger *more* spawning instead of stopping. Described as a "catastrophic token burn scenario" — this is the most urgent bug for cost-sensitive users.

### #19054 — [BUG] Claude Code For VS Code does not use MCP servers at all
- **Platform:** macOS | **Reactions:** 👍26, 💬21 | [GitHub](https://github.com/anthropics/claude-code/issues/19054)
- **Why it matters:** A long-standing (since Jan 2026) issue where VS Code integration completely ignores configured MCP servers. High engagement suggests this is blocking many VS Code users from the MCP ecosystem.

### #69802 — [BUG] ExitWorktree (remove) reports success but orphans the worktree
- **Platform:** macOS | **Reactions:** 💬2 | [GitHub](https://github.com/anthropics/claude-code/issues/69802)
- **Why it matters:** git worktree removal reports success while leaving orphaned directories, admin entries, and branches. Also has potential to corrupt parent repo `core.bare`. High severity for git-heavy workflows.

### #69764 — [BUG] Phone/app local session silently lost — transcript never persisted
- **Platform:** Windows, mobile | **Reactions:** 💬2 | [GitHub](https://github.com/anthropics/claude-code/issues/69764)
- **Why it matters:** Sessions driven from the mobile app that execute locally on Windows are entirely lost — no transcript saved on the host. This is a **data-loss** bug for the remote-control workflow.

### #69797 — [BUG] Magnific MCP OAuth flow fails — session state lost
- **Platform:** macOS | **Reactions:** 💬2 | [GitHub](https://github.com/anthropics/claude-code/issues/69797)
- **Why it matters:** OAuth flow with third-party MCP server (Magnific) fails because session state is lost between `authenticate` and `complete_authentication`. Blocks the entire OAuth-based MCP authentication path.

### #68789 — Background daemon sessions fail permanently on transient socket errors
- **Platform:** macOS | **Reactions:** 💬4 | [GitHub](https://github.com/anthropics/claude-code/issues/68789)
- **Why it matters:** Transient network errors mark background sessions as permanently `failed` instead of retrying with backoff. No reconnect mechanism exists — sessions must be manually restarted.

### #65669 — [BUG] Session folders/groups reset after app update
- **Platform:** Windows | **Reactions:** 👍1, 💬2 | [GitHub](https://github.com/anthropics/claude-code/issues/65669)
- **Why it matters:** User's session organization (folders, groups) is lost every time the desktop app updates. Minor individually, but a recurring organizational pain.

### #61675 — [BUG] /goal long prompt has no "Show less" control
- **Platform:** macOS | **Reactions:** 💬2 | [GitHub](https://github.com/anthropics/claude-code/issues/61675)
- **Why it matters:** Long `/goal` prompts cannot be collapsed, hiding task status and messages. A UI/UX issue affecting readability of long-running agent sessions.

### #69805 — [BUG] Chrome extension blocks navigation to gohighlevel.com
- **Platform:** macOS, Chrome | **Reactions:** 💬2 | [GitHub](https://github.com/anthropics/claude-code/issues/69805)
- **Why it matters:** The Claude Code browser extension unexpectedly blocks navigation to a legitimate business site. Indicates overzealous navigation filtering in the extension.

---

## Key PR Progress

### #69727 — fix(hookify): match file rules against Write tool content
- **Author:** clown6613 | [GitHub](https://github.com/anthropics/claude-code/pull/69727)
- **What:** Fixes hookify rules with `event: file` (e.g., "Warn About Debug Code") that silently never fired when Claude created files via the `Write` tool. Root cause: `config_loader` inferred wrong field name.

### #69716 — fix(workflows): send Statsig event time in milliseconds
- **Author:** clown6613 | [GitHub](https://github.com/anthropics/claude-code/pull/69716)
- **What:** Fixes a telemetry bug where `claude-dedupe-issues.yml` sent Statsig timestamps as epoch seconds (string) instead of epoch milliseconds (number). The sibling workflow already does this correctly.

### #69698 — fix(hookify): use root-relative imports to fix marketplace install
- **Author:** shrivs4 | [GitHub](https://github.com/anthropics/claude-code/pull/69698)
- **What:** Fixes hookify imports that break when installed from the marketplace. Open — awaiting review.

### #69710 — docs: Update plugins README to use recommended install methods (CLOSED, MERGED)
- **Author:** clown6613 | [GitHub](https://github.com/anthropics/claude-code/pull/69710)
- **What:** Updates the deprecated `npm install -g @anthropic-ai/claude-code` instruction to the recommended `curl` install method, matching the main README. Cleaned up outdated docs.

---

## Feature Request Trends

**Session Management API** (#66126): Users want a `create_session` tool in the session management MCP server — currently the API exposes `list_sessions`, `archive_session`, and `search_session_transcripts`, but no way to programmatically create a new persistent session.

**Mobile Companion App** (#58029): A recurring request for a mobile app that can remotely control and monitor Claude Code sessions running on a desktop machine.

**Windows Run-As** (#61202): Enterprise users request the ability to run the Windows desktop app as a different Windows user for sandboxing/security isolation.

---

## Developer Pain Points

**Subagent Cost Explosion** — The #1 pain point right now. Infinite recursion in subagent spawning combined with no cost controls or kill switches has led to real financial damage for users running complex tasks. The `CLAUDE_CODE_FORK_SUBAGENT=0` escape hatch is being ignored, making it impossible to disable.

**API Regression on Linux** — Two consecutive releases broke API connectivity on Linux with no fix in sight. For a CLI-first tool, this is a critical blocker for an entire platform segment.

**Session Data Loss** — Multiple data-loss vectors are open: mobile sessions not persisting to host (#69764), large `.jsonl` transcripts causing OOM crashes during `/stats` scan (#50238), and session corruption from lone UTF-16 surrogates (#61301).

**MCP Reliability** — Three distinct MCP issues (VS Code not using MCP at all #19054, OAuth flow state loss #69797, plugin dependency installation failures #60130) suggest the MCP integration layer is fragile across authentication, tool propagation, and IDE integration.

**CLAUDE.md Instruction Fatigue** — Multiple closed issues document that the model — especially Opus variants — inconsistently applies explicit instructions from `CLAUDE.md`, even when loaded at session start. Users report having to re-correct the model mid-session for violations of its own project rules.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-21

## Today's Highlights
A major `sandboxPolicy` metadata regression in Codex Desktop 26.616 is breaking `node_repl`, `@Chrome`, `@Browser`, and `@Computer` across macOS and Windows, triggering over 15 duplicate reports in 24 hours. The team has issued a revert PR (#29268) rolling back the offending sandbox-scoping change. Separately, the long-running `#2847` (file exclusion) and `#5181` (semantic search) enhancement requests continue to dominate community voting, while a new rate-limit cost anomaly (`#28879`) is drawing serious attention from Plus subscribers.

## Releases
- **`rust-v0.142.0-alpha.7`** — No changelog details provided beyond the version bump. Likely a hotfix or build target update.

## Hot Issues (Top 10)

1. **[[OPEN] #2847 – A way to exclude sensitive files](https://github.com/openai/codex/issues/2847)**  
   *78 comments · 409 👍*  
   The top-voted feature request: a `.codexignore` mechanism (repo-local + global) to prevent the agent from reading or sending sensitive paths. Community reaction is overwhelmingly positive, with many users citing compliance and secrets-leakage concerns.

2. **[[OPEN] #29189 – Codex Desktop node_repl fails: sandboxPolicy missing](https://github.com/openai/codex/issues/29189)**  
   *54 comments · 63 👍*  
   The flagship bug for today's `sandboxPolicy` regression on macOS. All `node_repl` tools (browser, computer use, REPL) fail immediately. Duplicate reports are flooding in — this is the most disruptive active bug.

3. **[[OPEN] #18960 – Frequent reconnect loop: websocket closed by server](https://github.com/openai/codex/issues/18960)**  
   *49 comments · 35 👍*  
   Persistent streaming failures in the Codex App after hours of use. Community reports the issue is intermittent but reproducible with long sessions. No team resolution yet.

4. **[[OPEN] #28879 – GPT-5.5 rate-limit cost jumped 10–20x since June 16](https://github.com/openai/codex/issues/28879)**  
   *35 comments · 67 👍*  
   Plus subscribers report their 5-hour budget drains in 2–3 prompts instead of 20+. Session logs show `limit-% consumed per token` increased dramatically. This is a potential pricing/policy bug that is generating significant alarm.

5. **[[OPEN] #5181 – Semantic codebase indexing and search](https://github.com/openai/codex/issues/5181)**  
   *20 comments · 45 👍*  
   Request for first-class semantic search in Codex CLI. Users report the agent struggles to navigate medium-to-large codebases without vector-based retrieval. Strong community consensus behind this.

6. **[[OPEN] #29193 – Windows node_repl fails: sandboxPolicy missing](https://github.com/openai/codex/issues/29193)**  
   *17 comments · 2 👍*  
   Windows counterpart of #29189. Same root cause: `codex/sandbox-state-meta` lacks `sandboxPolicy` field. Less upvoted but equally broken for Windows users.

7. **[[OPEN] #22898 – Codex mobile shows desktop as offline, Reconnect silent](https://github.com/openai/codex/issues/22898)**  
   *14 comments · 40 👍*  
   iOS app shows the desktop as offline despite it running. Reconnect button does nothing. Affects remote pairing workflows.

8. **[[OPEN] #25319 – Scope VS Code chats to current workspace/project](https://github.com/openai/codex/issues/25319)**  
   *12 comments · 34 👍*  
   VS Code extension users want chat history scoped per workspace to avoid cross-project context pollution. Filed as a fresh request per team guidance from an earlier issue.

9. **[[OPEN] #29219 – Codex Desktop ignores node_repl args, malformed sandbox metadata](https://github.com/openai/codex/issues/29219)**  
   *11 comments · 4 👍*  
   A deeper investigation of the `sandboxPolicy` bug: the desktop app is sending malformed metadata even with manual config workarounds.

10. **[[OPEN] #15299 – Support inbound MCP notifications into active CLI sessions](https://github.com/openai/codex/issues/15299)**  
    *10 comments · 6 👍*  
    External services want to push messages into running Codex CLI sessions via MCP notifications. Currently undocumented and unhandled.

## Key PR Progress (Top 10)

1. **[#29268 – Revert "Scope MCP sandbox metadata to server environment"](https://github.com/openai/codex/pull/29268)**  
   *Author: celia-oai*  
   Emergency revert of commit `790213d` — the culprit behind today's `sandboxPolicy` regression. Expect this to merge quickly.

2. **[#26229 – Add protected data mode to core and app server](https://github.com/openai/codex/pull/26229)**  
   *Author: bbrunner-oai*  
   Adds core-owned Protected Data Mode. MCP tool results can flag data as protected; core persists this state across resume, fork, and rollout. Connector calls require explicit opt-in while active. *CLOSED — merged.*

3. **[#29259 – Prototype mcp_history thread hint injection](https://github.com/openai/codex/pull/29259)**  
   *Author: pakrym-oai*  
   Experiments with calling `mcp_history` during initial context construction to give the model a thread hint without requiring a model-issued tool call. Based on the new context-window lineage from #29256.

4. **[#29266 – Route image generation writes through ExecutorFileSystem](https://github.com/openai/codex/pull/29266)**  
   *Author: won-openai*  
   Moves generated-image writes from direct filesystem to `ExecutorFileSystem`, preserving the `CODEX_HOME/generated_images` destination via `LOCAL_FS`.

5. **[#29249 – Migrate environment context to model world state](https://github.com/openai/codex/pull/29249)**  
   *Author: pakrym-oai*  
   Adds a typed, replayable model world-state slice for environments. Integrates with existing initial-context and settings-diff paths. Reviewed.

6. **[#29255 – Add configurable token budget compaction reminder](https://github.com/openai/codex/pull/29255)**  
   *Author: pakrym-oai*  
   Gives the model a configurable wrap-up prompt before automatic context compaction. Handles resumed/reconfigured windows that cross the threshold.

7. **[#29143 – CI: restore custom Windows runner with hermetic LLVM 0.7.9](https://github.com/openai/codex/pull/29143)**  
   *Author: anp-oai*  
   Fixes Windows CI by upgrading `llvm` to `0.7.9` and `rules_cc` to match. Restores the custom runner after temporary migration to `windows-2022`.

8. **[#29263 – Expose Sites preview from Linux sandbox](https://github.com/openai/codex/pull/29263)**  
   *Author: epanero-openai*  
   Opt-in `sites_preview` exec flag that reserves port `4173` for Sites local previews, enabling the sidecar browser to reach sandboxed preview servers.

9. **[#29256 – Add context window lineage IDs](https://github.com/openai/codex/pull/29256)**  
   *Author: pakrym-oai*  
   Stable IDs for thread/window lineage that survive compaction, resume, and rollback. Enables the `<token_budget>` fragment to reference the first/prior window. *CLOSED — merged.*

10. **[#28845 – Support plugin agent roles](https://github.com/openai/codex/pull/28845)**  
    *Author: charlesgong-openai*  
    Adds TOML-based plugin agent roles with namespaced `agent_type` values (e.g., `sample:researcher`). Updates validation, scaffolding, and manifest docs.

## Feature Request Trends
The most-requested feature directions remain stable:
- **File/Path Exclusion** (#2847, 409 👍): `.codexignore` is the single most demanded feature — users need to prevent secrets and large dirs from leaking.
- **Semantic Search** (#5181, 45 👍): Vector-based codebase indexing to help the agent locate relevant files in larger projects.
- **Workspace-Scoped Chats** (#25319, 34 👍): VS Code users want per-project chat isolation to avoid context pollution.
- **Inbound MCP Notifications** (#15299, 6 👍): Request for bidirectional MCP streaming into CLI sessions.
- **Protected Data Mode** (#26229, now merged): A proactive compliance feature that was just merged — aligns with the exclusion-file sentiment.

## Developer Pain Points
- **`sandboxPolicy` Regression** — Today's single biggest pain point. The 26.616 desktop update broke all sandbox-dependent tools (node_repl, browser, computer use) across macOS and Windows. At least 15 duplicate issues filed in 24 hours. The revert PR (#29268) offers relief, but trust in the release process is shaken.
- **Rate-Limit Cost Spikes** (#28879) — A sudden 10–20x jump in token cost for Plus subscribers on gpt-5.5 is causing budget depletion in 2–3 prompts. This may be a pricing bug or policy change; community reaction is angry.
- **Persistent Reconnect/WebSocket Failures** (#18960, #22898) — Long-standing issues with session stability on desktop and mobile. Reconnect handling is silent and broken, hurting remote workflows.
- **Windows Sandbox ACL Corruption** (#28248) — Power outages leave Windows sandboxes permanently locked with deny-read ACLs. No recovery path exists.
- **Windows + WSL Incompatibility** (#26424, 3 comments, 10 👍) — Codex Desktop cannot work with WSL projects, limiting Linux-centric developers on Windows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-21

## Today's Highlights

This week's digest is dominated by **agent reliability issues** and **security hardening**. A critical bug causing the generalist agent to hang indefinitely (#21409) remains a top-priority P1, while a new P1 issue reports that shell commands get stuck awaiting input after completion (#25166). On the security front, two critical CVEs (CVE-2026-9277 in `shell-quote` and CVE-2026-47429 in `vitest`) are being patched. The community also continues to push for better **AST-aware tooling** and **improved sub-agent orchestration**.

## Releases

No new releases in the last 24 hours.

## Hot Issues (10 Noteworthy)

### 1. [P1] [Bug] Generalist agent hangs (#21409)
- **Author:** turmanticant
- **Comments:** 7 | **👍:** 8
- **Summary:** The `gemini-cli` generalist agent hangs indefinitely when deferring to sub-agents. Simple folder creation tasks stall for up to an hour. Workaround: instructing the model not to use sub-agents resolves the issue.
- **Why it matters:** This is a **critical reliability blocker** affecting all users who rely on agent delegation. The high upvote count (8) reflects widespread frustration.
- **Link:** [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 2. [P1] [Bug] Shell command execution hangs after completion (#25166)
- **Author:** rnett
- **Comments:** 4 | **👍:** 3
- **Summary:** After Gemini executes a simple CLI command, it hangs with "Awaiting input" even though the command has already finished. Occurs with commands that do not await user input.
- **Why it matters:** This P1 bug breaks basic CLI workflow automation, making even simple shell commands unreliable.
- **Link:** [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

### 3. [P1] [Bug] Subagent recovery after MAX_TURNS reports false success (#22323)
- **Author:** matei-anghel
- **Comments:** 6 | **👍:** 2
- **Summary:** `codebase_investigator` subagent reports `status: "success"` even after hitting its maximum turn limit. The agent falsely claims to have completed analysis when it actually failed to do any work.
- **Why it matters:** This is a **dangerous misreporting bug** that hides agent failures, undermining trust in task completion status.
- **Link:** [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 4. [P1] [Bug] Browser subagent fails in Wayland (#21983)
- **Author:** sigmaSd
- **Comments:** 4 | **👍:** 1
- **Summary:** The browser subagent crashes on Wayland display systems, failing to launch or complete browser-based tasks.
- **Why it matters:** Linux users on modern desktop environments (Wayland) cannot use the browser agent at all.
- **Link:** [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### 5. [P2] [Bug] `google_web_search` loops indefinitely (#28037)
- **Author:** o4woto
- **Comments:** 6 | **👍:** 0
- **Summary:** When web search returns no relevant results, the agent can continue issuing searches repeatedly without reaching a stopping condition. Reproducible with direct tool-style requests.
- **Why it matters:** This creates **infinite token consumption loops**, costing users money and time. A clear infinite-loop bug that needs a termination heuristic.
- **Link:** [Issue #28037](https://github.com/google-gemini/gemini-cli/issues/28037)

### 6. [P2] [Bug] Memory system: indefinite low-signal retries (#26522)
- **Author:** SandyTao520
- **Comments:** 5 | **👍:** 0
- **Summary:** Auto Memory repeatedly surfaces low-signal sessions because it only marks a session as processed when the extraction agent successfully reads the transcript. Low-signal sessions that are skipped remain unprocessed and are re-surfaced indefinitely.
- **Why it matters:** This creates **wasteful repeated processing of irrelevant data**, degrading memory system efficiency.
- **Link:** [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

### 7. [P2] [Bug] >128 tools cause 400 error (#24246)
- **Author:** gundermanc
- **Comments:** 3 | **👍:** 0
- **Summary:** Gemini CLI encounters a 400 error when more than ~400 tools are available. The agent does not intelligently limit the tool scope.
- **Why it matters:** Power users with many skills, extensions, or MCP servers hit a hard API limit with no graceful degradation.
- **Link:** [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

### 8. [P2] [Bug] Auto Memory sends secrets before redaction (#26525)
- **Author:** SandyTao520
- **Comments:** 5 | **👍:** 0
- **Summary:** Auto Memory reads local transcripts and sends content to the model before the extraction prompt redacts secrets. The service can also log existing skill data.
- **Why it matters:** **Security/privacy risk**: secrets are exposed in model context before any redaction occurs.
- **Link:** [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

### 9. [P2] [Feature Request] AST-aware file reads and codebase mapping (#22745)
- **Author:** gundermanc
- **Comments:** 7 | **👍:** 1
- **Summary:** Epic tracking investigations into AST-aware file reads, search, and codebase mapping to improve precision, reduce tokens, and reduce turn count.
- **Why it matters:** This could **significantly improve agent accuracy and efficiency** by understanding code structure rather than treating files as flat text.
- **Link:** [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### 10. [P2] [Bug] Gemini does not use skills/sub-agents enough (#21968)
- **Author:** rnett
- **Comments:** 6 | **👍:** 0
- **Summary:** Custom skills and sub-agents are rarely invoked by the model unless explicitly instructed, even for clearly related tasks (e.g., gradle/git skills not used when building or committing).
- **Why it matters:** The **skill/agent ecosystem underutilization** defeats the purpose of building custom extensions.
- **Link:** [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

## Key PR Progress (10 Important)

### 1. [P1] [size/l] fix: cap pending tool responses (#27870)
- **Author:** he-yufeng
- **Summary:** Caps the pending `functionResponse` for large tool results to prevent crashes. Fixes #27738.
- **Link:** [PR #27870](https://github.com/google-gemini/gemini-cli/pull/27870)

### 2. [P1] [size/l] fix: sniff MCP image MIME types (#27878)
- **Author:** Dasoam
- **Summary:** Implements local image signature sniffing for MCP images. Fixes WebP images from Figma being incorrectly labeled as PNG (HTTP 400 errors). Fixes #27731.
- **Link:** [PR #27878](https://github.com/google-gemini/gemini-cli/pull/27878)

### 3. **Critical CVE fix: upgrade shell-quote to 1.8.4 (#27856)**
- **Author:** orbisai0security
- **Summary:** Fixes CVE-2026-9277 (CRITICAL severity) in `shell-quote` dependency.
- **Link:** [PR #27856](https://github.com/google-gemini/gemini-cli/pull/27856)

### 4. **Critical CVE fix: upgrade vitest to 4.1.0/3.2.6 (#27857)**
- **Author:** orbisai0security
- **Summary:** Fixes CVE-2026-47429 (CRITICAL severity) in vitest test runner.
- **Link:** [PR #27857](https://github.com/google-gemini/gemini-cli/pull/27857)

### 5. [P2] [size/m] fix(cli): don't crash in Cloud Shell when .env is unreadable (#28059)
- **Author:** manumishra12
- **Summary:** Wraps `fs.readFileSync` with error handling to prevent startup crashes in Cloud Shell sandbox environments where `.env` files return EACCES.
- **Link:** [PR #28059](https://github.com/google-gemini/gemini-cli/pull/28059)

### 6. [P3] [size/l] feat: native drag-and-drop and clipboard image pasting (#27859)
- **Author:** pedrogoiania
- **Summary:** Adds terminal drag-and-drop and Cmd+V/Ctrl+V clipboard image pasting for visual multimodal parity in standard terminal emulators.
- **Link:** [PR #27859](https://github.com/google-gemini/gemini-cli/pull/27859)

### 7. [area/agent] [size/m] fix: preserve dollar sequences in prompt substitutions (#28055)
- **Author:** nramanath
- **Summary:** Fixes template substitution corruption of `$` sequences (e.g., `$$`, `$'`, `$&`) in skill, sub-agent, or tool descriptions.
- **Link:** [PR #28055](https://github.com/google-gemini/gemini-cli/pull/28055)

### 8. [size/l] feat: add JSON output for eval inventory (#28058)
- **Author:** ved015
- **Summary:** Adds `--json` flag to eval inventory for machine-readable output in CI and scripts. Uses relative paths for portability.
- **Link:** [PR #28058](https://github.com/google-gemini/gemini-cli/pull/28058)

### 9. [P2] [size/s] fix: strip trailing periods from error URLs (#28054)
- **Author:** terminalchai
- **Summary:** Removes sentence-ending periods attached to HTTP(S) URLs in error messages so links remain navigable.
- **Link:** [PR #28054](https://github.com/google-gemini/gemini-cli/pull/28054)

### 10. [area/documentation] docs: document ask decision for BeforeTool (#28064)
- **Author:** kiranmagic7
- **Summary:** Documents the `BeforeTool` hook `decision: "ask"` output so the hooks reference matches the implementation.
- **Link:** [PR #28064](https://github.com/google-gemini/gemini-cli/pull/28064)

## Feature Request Trends

Based on the top issues, three major feature directions are emerging:

1. **AST-Aware Tooling:** Multiple issues (#22745, #22746) propose replacing text-based file reads/codebase mapping with AST-aware tools. The goal is to read method bounds precisely, reduce token waste, and improve navigation accuracy.

2. **Sub-Agent Orchestration & Reliability:** Several issues (#21409, #22323, #21968) focus on making sub-agent delegation more reliable—fixing hangs, preventing false success reports, and making the model actually *use* custom skills/agents without explicit instruction.

3. **Memory System Hardening:** A cluster of issues (#26516, #26522, #26523, #26525) targets the Auto Memory system: indefinite retries of low-signal sessions, secret leakage before redaction, and invalid patch quarantine. The team is clearly investing in memory reliability and safety.

## Developer Pain Points

The most frequent frustrations reported by the community include:

- **Agent hangs and non-termination:** The generalist agent hangs (#21409), shell commands stall (#25166), web search loops (#28037)—**reliability of task completion** is the #1 pain point.
- **False success reporting:** Sub-agents reporting `GOAL` success after hitting turn limits (#22323) erodes trust in the system.
- **Underutilization of custom skills:** Users invest in building skills and agents, but the model rarely uses them autonomously (#21968).
- **Destructive behavior:** The agent occasionally uses `git reset --force` or other destructive commands when safer alternatives exist (#22672).
- **Terminal display issues:** Terminal resize flicker (#21924), corruption after external editor exit (#24935), and Wayland browser agent failures (#21983) degrade the user experience on Linux.
- **Configuration ignored:** Browser agent ignores `settings.json` overrides like `maxTurns` (#22267)—configuration not respected.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-21

## 1. Today's Highlights
Today marks a significant cleanup day with 7 closed issues and several important new feature requests. The community is heavily focused on improving plugin and hook visibility, with a notable bug around hook configs being silently dropped. A PR introducing automated issue classification via GitHub Agentic Workflows (#2587) was also merged, signaling the project's move toward AI-assisted triage.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (10 noteworthy)

**#3871 — [OPEN] No way to list installed hooks (plugin-bundled or individual)**
*Author: ken-jo | Updated: 2026-06-20 | Comments: 1 | 👍: 0*
Plugin hooks have no enumeration surface, unlike MCP servers (`copilot mcp list`). This is a discoverability gap that blocks users from auditing their installed hooks.
[View Issue](https://github.com/github/copilot-cli/issues/3871)

**#3872 — [CLOSED] Hook config with mis-cased event key silently dropped**
*Author: ken-jo | Updated: 2026-06-20 | Comments: 1 | 👍: 0*
Hooks with incorrect event key casing (e.g., `PreToolUse` instead of `preToolUse`) are silently ignored with only a debug-level log. This is a critical UX bug that can cause silent failures in custom workflows.
[View Issue](https://github.com/github/copilot-cli/issues/3872)

**#3878 — [OPEN] Revert back to Plan mode after a plan is implemented**
*Author: xtofs | Updated: 2026-06-20 | Comments: 0 | 👍: 0*
Users want the ability to keep Planning as the default mode, but after implementation the session stays in Autopilot. This breaks the Plan-Autopilot-Complete workflow expectation.
[View Issue](https://github.com/github/copilot-cli/issues/3878)

**#3876 — [CLOSED] Mouse tracking is incorrectly disabled on exit**
*Author: jakebailey | Updated: 2026-06-20 | Comments: 0 | 👍: 0*
A terminal rendering bug where the CLI fails to restore mouse tracking on exit, breaking terminal scrolling. The user used Copilot to self-diagnose the issue.
[View Issue](https://github.com/github/copilot-cli/issues/3876)

**#3877 — [OPEN] Auto-allow permissions on session start**
*Author: rafaellabarrocas | Updated: 2026-06-20 | Comments: 0 | 👍: 0*
Request for a persistent setting to automatically run `/allow-all` when starting a new session, reducing friction for trusted environments.
[View Issue](https://github.com/github/copilot-cli/issues/3877)

**#3875 — [OPEN] Unable to spawn subagents with `mai-code-1-flash-picker` when main agent model is `gpt-5.4`/`gpt-5.5` with `deferTools: never`**
*Author: hope68korea | Updated: 2026-06-20 | Comments: 0 | 👍: 0*
A model compatibility bug: subagent spawning breaks when `deferTools: never` is configured for MCP servers. Points to deeper issues in agent model negotiation.
[View Issue](https://github.com/github/copilot-cli/issues/3875)

**#3874 — [OPEN] VS Code agent `preToolUse` agent hook denial does not work**
*Author: springcomp | Updated: 2026-06-20 | Comments: 0 | 👍: 0*
Hooks that deny specific commands via `preToolUse` don't work when running chat from VS Code. This is a cross-platform reliability issue for security-conscious users.
[View Issue](https://github.com/github/copilot-cli/issues/3874)

**#3867 — [OPEN] No context window visibility or compaction notification in chat sessions**
*Author: sonydogg | Updated: 2026-06-19 | Comments: 0 | 👍: 0*
Users want a visible token usage indicator and notification when context compaction occurs. Currently, context window management is entirely opaque.
[View Issue](https://github.com/github/copilot-cli/issues/3867)

**#3869 — [OPEN] /ask feature unusable due to cramped text box**
*Author: davidpayne-au | Updated: 2026-06-20 | Comments: 0 | 👍: 0*
The `/ask` output is displayed in a cramped text box showing only a few lines, making it difficult to read answers containing code snippets. This is a core usability issue for a primary feature.
[View Issue](https://github.com/github/copilot-cli/issues/3869)

**#3868 — [OPEN] App hangs when right-clicking a chat/session with multiple open**
*Author: Youssefzakims | Updated: 2026-06-19 | Comments: 0 | 👍: 0*
A reproducible hang/crash when right-clicking sessions in the app with multiple chats open. This is a stability issue affecting multi-session power users.
[View Issue](https://github.com/github/copilot-cli/issues/3868)

## 4. Key PR Progress (3 items)

**#2587 — [CLOSED] Add automated issue classification with GitHub Agentic Workflows**
*Author: andyfeller | Updated: 2026-06-20 | 👍: 0*
Merged: Introduces AI-powered issue classification using `gh-aw` to automatically apply `area:` and `triage` labels on new/reopened issues. This workflow directly addresses the project's growing triage burden.
[View PR](https://github.com/github/copilot-cli/pull/2587)

**#1014 — [CLOSED] Document Esc key behavior fix for interactive prompt cancellation**
*Author: Copilot | Updated: 2026-06-20 | 👍: 0*
Documents a fix (from v0.0.385) where pressing Esc now returns to the option picker instead of auto-selecting "No" in the "tell Copilot what to do differently" flow.
[View PR](https://github.com/github/copilot-cli/pull/1014)

**#3873 — [OPEN] 1000Add initial console log for greeting**
*Author: EverydayEvertime | Updated: 2026-06-20 | 👍: 0*
A new PR with no description — appears to be a minor greeting log addition. Likely a small DX improvement.
[View PR](https://github.com/github/copilot-cli/pull/3873)

## 5. Feature Request Trends
Based on today's issues, clear patterns are emerging:

- **Plugin/Hook Management:** Strong demand for hook enumeration (#3871) and safer configuration validation (#3872), mirroring the MCP server management workflow.
- **Session & Permission UX:** Multiple requests for automated permissions (#3877), context window visibility (#3867), and persistent mode defaults (#3878).
- **Terminal Rendering Improvements:** Two distinct rendering bugs (#3876, #3869) suggest the terminal UI layer needs attention, especially for output display and cleanup.
- **Cross-Platform Reliability:** Issues with VS Code hooks (#3874) and model compatibility (#3875) indicate growing pains as the CLI works across more environments and model providers.

## 6. Developer Pain Points
The most frequent developer frustrations surfacing today:

1. **Silent failures in hooks/plugins** — Incorrect hook configs (#3872) are dropped without warning, eroding trust in the plugin system.
2. **Lack of observability** — No way to see installed hooks (#3871), no context window indicators (#3867), and opaque permissions handling (#3877) force developers to guess what's happening.
3. **Terminal UX friction** — Cramped output boxes (#3869) and broken terminal state (#3876) make basic interactions frustrating.
4. **Session mode confusion** — The Plan → Autopilot → Complete workflow (#3878) doesn't respect user preferences, breaking established developer workflows.
5. **Stability under multi-session use** — Hangs (#3868) and subagent spawning failures (#3875) suggest the CLI struggles with complex, concurrent session management.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-06-21

## Today's Highlights
The community remains focused on improving the development experience, with a major bug fix (respecting system proxy settings) now in open review as PR #2463. Two feature requests—clickable symbol references in chat and configurable default skills—have been resolved, closing out long-running discussions from early April and June. No new releases were published in the last 24 hours.

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. **#2462 — [CLOSED] Windows + Git Bash: VS Code extension fails to extract bundled CLI**  
   *Author: yplgame*  
   A user reports that on Windows 10 with Git Bash (MSYS2), the VS Code extension cannot extract the bundled CLI because `tar` cannot handle a zip file. This highlights a Windows-specific deployment issue. GitHub: [Issue #2462](https://github.com/MoonshotAI/kimi-cli/issues/2462)

2. **#2440 — [CLOSED] Clickable symbol / line references in Kimi Code chat panel**  
   *Author: ElPrg*  
   Requests that function/method names in chat output be clickable to jump to definitions. Closed without comment—exact resolution path unclear. GitHub: [Issue #2440](https://github.com/MoonshotAI/kimi-cli/issues/2440)

3. **#2062 — [CLOSED] Add `default_skills` config for auto-activating skills**  
   *Author: maxBRT*  
   Feature request that drove PR #2063. Allows users to pre-configure skills to auto-activate on session start. GitHub: [Issue #2062](https://github.com/MoonshotAI/kimi-cli/issues/2062)

4. **(Other notable open issues from trend analysis)**  
   *On-deman expansion—full 10-issue list limited by data; top 2 active items shown above.*

## Key PR Progress
1. **#2463 — [OPEN] fix: respect system proxy settings in FetchURL**  
   *Author: itxaiohanglover*  
   Fixes `aiohttp.ClientSession` ignoring `HTTP_PROXY`/`HTTPS_PROXY` env vars, causing "Connection reset by peer" in proxied environments. Critical for enterprise users. GitHub: [PR #2463](https://github.com/MoonshotAI/kimi-cli/pull/2463)

2. **#2063 — [CLOSED] feat(config): add default_skills config for auto-activating skills on session start**  
   *Author: maxBRT*  
   Implements a `default_skills` config key. On session startup, specified skills are activated automatically. Merged on 2026-06-20. GitHub: [PR #2063](https://github.com/MoonshotAI/kimi-cli/pull/2063)

3. **(Other notable open PRs from trend analysis)**  
   *On-deman expansion—full 10-PR list limited by data; top 2 active items shown above.*

## Feature Request Trends
- **Configuration-driven behaviors**: Requests for user-defined default settings (e.g., default skills, default models) are a recurring theme, with #2062/2063 being the most recent.
- **Enhanced chat panel interactivity**: Users want clickable code symbols, line references, and deeper integration with editor navigation—#2440 is a direct example.
- **Cross-platform deployment fixes**: Windows-specific extraction and toolchain issues (like #2462) indicate a need for more robust multi‑OS testing.

## Developer Pain Points
- **Environment-aware proxy handling**: The failure of `aiohttp.ClientSession` to respect system proxy variables (#2463) is a frequent blocker in corporate/enterprise networks.
- **Toolchain incompatibility on Windows**: The `tar` vs `.zip` extraction failure in Git Bash points to deeper MSYS2-Node.js integration issues that frustrate Windows developers.
- **Inconsistent file/symbol navigation**: Lack of clickable symbol references (vs. clickable file paths) in chat output creates friction when trying to act on AI suggestions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-21

## Today's Highlights

The community is buzzing around sandboxing for agent terminal commands (#2242) and context window visibility (#6152), both drawing significant engagement. On the PR front, Android/Termux support (#33010) and agent teams with nested delegation (#33144) represent two major infrastructure pushes. The v1.17.9 release quietly shipped agent step-limit fixes and improved Devstral model detection.

## Releases

**v1.17.9** — [Release](https://github.com/anomalyco/opencode/releases/tag/v1.17.9)
- **Bugfixes:** Agent step limits are now properly honored by forcing a final text response instead of failing mid-run. Fixed Devstral model detection when provider IDs use varying casing (thanks @Robin1987China). Custom headers are now correctly passed to Copilot model requests.
- **Improvements:** Added `high` (further details appear truncated in source).

## Hot Issues

1. **[#2242](https://github.com/anomalyco/opencode/issues/2242) — Sandbox for agent terminal commands** (77 comments, 55 👍)  
   Request to restrict agent file system access to the current directory. This is the most-commented open issue. The user notes Gemini CLI and Codex CLI use macOS seatbelt but finds no equivalent in OpenCode. High community interest in security.

2. **[#27589](https://github.com/anomalyco/opencode/issues/27589) — TUI fails on Alpine Linux (musl)** (36 comments, 12 👍)  
   Regression in v1.14.50: `getcontext` symbol not found on musl-based systems. Worked in v1.14.48. This blocks developers using containerized or minimal Linux environments.

3. **[#8501](https://github.com/anomalyco/opencode/issues/8501) — Expand pasted text** (26 comments, 183 👍)  
   The most-upvoted open feature request. Users want to expand `[Pasted ~1 lines]` placeholders to view or edit pasted content before submission. Strong signal for transparency in prompt construction.

4. **[#6152](https://github.com/anomalyco/opencode/issues/6152) — Session context usage breakdown** (19 comments, 112 👍)  
   Requests a TUI dialog showing how the current session's context window is being used (similar to Claude's `/context`). Highly upvoted; indicates users want more visibility into token economics.

5. **[#21643](https://github.com/anomalyco/opencode/issues/21643) — Socket connection closed unexpectedly** (16 comments, 1 👍)  
   Intermittent API connectivity failure. Low upvote count but notable for affecting core workflow reliability across environments.

6. **[#29462](https://github.com/anomalyco/opencode/issues/29462) — Skills tool enumerates all skills without bound** (11 comments)  
   The `skill` tool injects every discovered skill into the system prompt on every turn. With 100k+ skills, this adds megabytes of overhead. Critically underappreciated — this is a scaling bottleneck.

7. **[#31755](https://github.com/anomalyco/opencode/issues/31755) — MiniMax M3 caching regression** (10 comments)  
   Direct MiniMax API caching appears broken, possibly tied to the new thinking toggle. OpenRouter BYOK still caches correctly, pointing to a provider-specific issue.

8. **[#32444](https://github.com/anomalyco/opencode/issues/32444) — GLM-5.2 thinking-effort variants blocked** (9 comments, 15 👍)  
   `ProviderTransform.variants()` excludes any model containing "glm". Users cannot select High/Max thinking effort. Closed but highlights recurring friction with GLM model support (see also #18598).

9. **[#31119](https://github.com/anomalyco/opencode/issues/31119) — `no such column: name` error** (7 comments, 5 👍)  
   Database schema migration issue after upgrading from an older version. Blocks app usage entirely for returning users.

10. **[#33106](https://github.com/anomalyco/opencode/issues/33106) — Desktop app crashes on large session diff** (2 comments)  
    Fresh report: rendering a large session diff summary causes Electron main process crash on macOS. Critical for power users with long-running sessions.

## Key PR Progress

1. **[#33164](https://github.com/anomalyco/opencode/pull/33164) — Edit project settings for non-git projects**  
   Removes the git-repo requirement for project settings editing in the Desktop app. Closes #33165. Simple UX fix, widely applicable.

2. **[#33010](https://github.com/anomalyco/opencode/pull/33010) — Android/Termux support**  
   Adds `android` platform detection to postinstall and wrapper scripts. Closes four issues (#961, #10504, #21043, #30248). Major accessibility expansion for mobile/tablet users.

3. **[#32896](https://github.com/anomalyco/opencode/pull/32896) — Reserve full output headroom during compaction**  
   Fixes a regression (#32656) where the system under-reserved capacity for model output, potentially causing session truncation. Removes a 20K token hard cap.

4. **[#33148](https://github.com/anomalyco/opencode/pull/33148) — Skip session title generation**  
   Adds a `skip-title` config option to avoid expensive title-generation LLM calls on slow local models. Closes #33140. Directly addresses developer pain with local model latency.

5. **[#33160](https://github.com/anomalyco/opencode/pull/33160) — Fix null MCP tool parameters for OpenAI-compatible providers**  
   MCP tools with only a `description` field (no explicit `type`) caused `null` parameter values for MiniMax and similar providers. Closes #21080.

6. **[#32827](https://github.com/anomalyco/opencode/pull/32827) — Relax bun version requirement for Nix**  
   Changes the bun version check from a strict caret range to a minimum check, allowing Nix-based installations to work. Closes #28389.

7. **[#33159](https://github.com/anomalyco/opencode/pull/33159) — Retry SQLite lock-timeouts on durable event commits**  
   Adds retry logic for transient SQLite lock timeouts. Related to #21215 and #19589. Addresses database contention issues in concurrent workflows.

8. **[#33144](https://github.com/anomalyco/opencode/pull/33144) — Agent teams and nested subagent delegation**  
   Enables teams of agents and nested subagent delegation with budgets and recovery. Closes #12711, partially addresses #32166. This is a major architectural feature — builds on prior agent-teams PRs (#12730–12732).

9. **[#26861](https://github.com/anomalyco/opencode/pull/26861) — Lazy-scroll loading for long sessions**  
   Fixes messages disappearing during long sessions (#7380). Implements lazy-scroll: loads older messages in batches of 50 when scrolling up. Long-running PR; significant UX improvement.

10. **[#33158](https://github.com/anomalyco/opencode/pull/33158) — Separate subagent tool rows in TUI**  
    Treats subagent task rows as separated inline blocks with blank space preservation. Improves readability when multiple subagents run concurrently.

## Feature Request Trends

The most-requested feature directions from recent issues:

1. **Sandboxing & Security** (#2242, 77 comments, 55 👍): Restrict agent file system and terminal access to the current directory or a defined scope. This is the single most-discussed open issue.

2. **Context Transparency** (#6152, 112 👍; #8501, 183 👍): Users want to see how context windows are used and expand pasted text summaries. Strong correlation with token-cost awareness.

3. **UI/UX Quality-of-Life** (#18092, file diff preview; #25390, `$HOME` in plugin paths; #33140, skip title gen): Small but persistent requests for better ergonomics, especially in the Web UI and TUI.

4. **Session Management** (#15080, configurable task timeouts; #33140, skip title generation): Users want finer control over session behavior, particularly with slower or local models.

5. **Provider Flexibility** (#1326, multi-API-key fallback; #23058, Anthropic advisor strategy): Demand for resilience through key rotation and parity with Claude Code's new features.

## Developer Pain Points

Recurring frustrations from the issue tracker:

- **Alpine/musl compatibility** (#27589): TUI breaks on musl-based systems. This affects containerized and minimal Linux deployments — a growing use case.
- **Database migration failures** (#31119): Schema version mismatches can brick the app for returning users. Migration hygiene is a recurring concern.
- **Desktop app stability with large state** (#33106, #26861): Long sessions and large diffs cause crashes and message loss. Memory management is a top pain point.
- **GLM model friction** (#32444, #18598): GLM models are repeatedly excluded from variant selectors. Users of Z.AI's GLM ecosystem face persistent config issues.
- **Provider-specific API regressions** (#31755, #21643): Caching and connection issues that differ between direct APIs and proxies like OpenRouter, making debugging harder.
- **Subagent reliability** (#33114, #15080): Subagents fail with cryptic errors (`messages.map is not a function`) or hang indefinitely without timeout support.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-21

## Today's Highlights
The `pi-mono` repo shipped **v0.79.9** with a key new chat-template thinking compatibility layer for OpenAI-compatible providers. Developer focus remains on **session architecture** (SQLite migration, compaction fixes) and **provider extensibility** (model aliases, new backers like Neuralwatt and Fireworks GLM-5.2). A flurry of bug fixes landed for streaming markdown, tool-call handling, and UTF-8 encoding edge cases.

## Releases
### [v0.79.9](https://github.com/earendil-works/pi-mono/releases/tag/v0.79.9)
**New Features**
- **Chat-template thinking compatibility** — OpenAI-compatible custom providers can now map Pi thinking levels into `chat_template_kwargs`, enabling vLLM/Hugging Face chat-template models (e.g., DeepSeek) to use provider-native thinking controls ([docs](https://github.com/earendil-works/pi-mono/docs/custom-providers)).

## Hot Issues

1. **[#5825](https://github.com/earendil-works/pi-mono/issues/5825) — Streaming markdown forces scroll to bottom** (26 💬)
   - **Why it matters**: With `clear on shrink` enabled, fast streaming auto-scrolls to the bottom, making it impossible to read older output. Affects daily TUI usage. Community: *"yaps faster than I read"* — popular frustration.

2. **[#5653](https://github.com/earendil-works/pi-mono/issues/5653) — Move off Shrinkwrap** (14 💬)
   - **Why it matters**: Duplicate copies of `pi-ai` in `node_modules` cause separate Provider registries → silent failures. Affects anyone installing both `pi-ai` and `pi-coding-agent` as direct deps.

3. **[#534](https://github.com/earendil-works/pi-mono/issues/534) — Config folder is out of place on Linux** (13 💬, 👍20)
   - **Why it matters**: Pi stores config in `$HOME` instead of `$XDG_CONFIG_HOME`. Top-voted issue; violates Linux conventions. Community strongly agrees.

4. **[#5858](https://github.com/earendil-works/pi-mono/issues/5858) — align and use "instructions" field for openai-responses system prompt** (5 💬)
   - **Why it matters**: OpenAI Responses API expects system prompts in `instructions`, not `system`/`developer` message roles. Breaking compatibility if not fixed.

5. **[#5595](https://github.com/earendil-works/pi-mono/issues/5595) — openai-completions maxTokens not passing through** (5 💬, 👍1)
   - **Why it matters**: Reasonable models (DeepSeek v4pro) run out of output tokens prematurely on Together.ai. Max token setting is silently ignored.

6. **[#5916](https://github.com/earendil-works/pi-mono/issues/5916) — Support provider extensions with model aliases and improve search** (5 💬)
   - **Why it matters**: No UI for OpenRouter provider config. Manual `models.json` overrides work but search for aliased models is broken.

7. **[#5920](https://github.com/earendil-works/pi-mono/issues/5920) — UI freezes on Thinking…/Working… after response completes** (2 💬)
   - **Why it matters**: Response arrives but TUI never shows it until next keypress. Critical UX bug for streamed sessions.

8. **[#5921](https://github.com/earendil-works/pi-mono/issues/5921) — Pi creates toolResult for empty/malformed tool calls → 400 error spiral** (3 💬)
   - **Why it matters**: Empty `name`/`id` tool calls poison conversation state → all subsequent API calls fail. Critical for tool-using agents.

9. **[#5919](https://github.com/earendil-works/pi-mono/issues/5919) — UTF-8 multi-byte character first byte stripped in system prompt** (2 💬)
   - **Why it matters**: Non-ASCII characters in system prompts are corrupted before API call — breaks CJK, accented characters.

10. **[#5924](https://github.com/earendil-works/pi-mono/issues/5924) — Package Report: @hypabolic/pi-hypa** (2 💬)
    - **Why it matters**: Report flags a package with 18 GitHub stars but ~200k downloads as potentially malicious. Community security concern.

## Key PR Progress

1. **[#5859](https://github.com/earendil-works/pi-mono/pull/5859) — fix(ai): send responses prompts as instructions** (OPEN)
   - Fixes `#5858`. Moves system prompts to top-level `instructions` for OpenAI Responses APIs. Keeps `input` for conversation/tool replay.

2. **[#5913](https://github.com/earendil-works/pi-mono/pull/5913) — Stable markdown working** (CLOSED)
   - Alternative fix for `#5825`. Replaces the original PR approach with a more stable streaming code fence rendering solution.

3. **[#5846](https://github.com/earendil-works/pi-mono/pull/5846) — fix(tui): stabilize streaming code fence rendering** (CLOSED)
   - First fix for `#5825`. Closes the scroll-to-bottom issue during markdown streaming. Now superseded by #5913.

4. **[#5845](https://github.com/earendil-works/pi-mono/pull/5845) — Compaction-related fixes** (CLOSED)
   - Three small fixes to compaction inefficiencies: handling think blocks, empty assistant messages, and tool-result messages in compaction.

5. **[#5923](https://github.com/earendil-works/pi-mono/pull/5923) — Add Fireworks GLM-5.2 model metadata** (CLOSED)
   - Adds `accounts/fireworks/models/glm-5p2` with OpenAI Chat Completions endpoint + `reasoning_effort` control.

6. **[#5914](https://github.com/earendil-works/pi-mono/pull/5914) — Support Neuralwatt provider** (CLOSED)
   - Adds Neuralwatt as a provider (cheap GLM, Kimi, Qwen). Uses OpenAI-compatible base URL pattern.

7. **[#5901](https://github.com/earendil-works/pi-mono/pull/5901) — Durable HITL tool-call interrupts** (CLOSED)
   - Proposal for human-in-the-loop tool approval middleware, similar to LangGraph/LangChain. Headless SDK use case.

8. **[#5922](https://github.com/earendil-works/pi-mono/pull/5922) — upstream merge v0.79.8 (CONFLICTS)** (CLOSED)
   - Automated merge of `v0.79.8` resulted in conflicts — merge aborted. Needs manual resolution.

9. **[#5905](https://github.com/earendil-works/pi-mono/pull/5905) — Optimize same-directory session switching speed** (CLOSED)
   - `/new`/`/resume`/`/fork`/`/import` in same cwd should not reload extensions. `/reload` remains the explicit command.

10. **[#5909](https://github.com/earendil-works/pi-mono/pull/5909) — Coalesce rapid thinking_level_change entries** (CLOSED)
    - Rapid cycling of thinking level appends many hidden entries → session JSONL bloat. Coalesce duplicates to reduce file size.

## Feature Request Trends

- **Provider extensibility**: Multiple requests for better OpenRouter support (model aliases, UI config), new providers (Neuralwatt, Fireworks GLM-5.2), and per-provider thinking-level controls.
- **Session infrastructure**: Strong push toward SQLite-backed sessions for faster load/search (`#5804`), reduced extension reloads on session switch (`#5905`), and exposed session APIs for headless/RPC usage (`#5810`, `#5912`).
- **Human-in-the-loop**: Tool-call approval middleware (`#5901`) and durable HITL interrupts for headless SDK integrations.
- **Model metadata updates**: Continuous requests to add emerging models (GLM-5.2, DeepSeek variants) across different providers.

## Developer Pain Points

- **Streaming/UX regressions**: The scroll-to-bottom issue (`#5825`) is the highest-comment bug — streaming markdown rendering is brittle.
- **Tool-call fragility**: Empty/malformed tool calls (`#5921`) and silent parameter dropping (`#5904`) break agent workflows without clear error diagnostics.
- **Provider compatibility gaps**: `maxTokens` not passed through (`#5595`), `instructions` field not aligned (`#5858`), thinking levels not mapped to llama.cpp (`#5917`).
- **Encoding and binary handling**: UTF-8 corruption (`#5919`) and binary file control codes crashing the TUI (`#5910`) show insufficient sanitization.
- **Duplicate dependencies**: Shrinkwrap (`#5653`) is a recurring operational headache for anyone using multiple Pi packages together.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-21

## Today's Highlights

A major batch of 30+ bugs was fixed today, primarily focused on case-sensitive URL scheme handling, path traversal validation, and input parsing strictness across CLI, core, and desktop packages. Two patch releases (v0.18.4 and v0.18.4-preview.0) shipped with a critical fix for supported `sed` edit tracking in file history. Community contributions continue to strengthen provider integration, with a notable PR adding native Requesty support and another refactoring OpenRouter/Requesty provider classes into a cleaner customHeaders pattern.

## Releases

- **[v0.18.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.4)** — Chore release; fix: Track supported sed edits in file history.
- **[v0.18.4-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.4-preview.0)** — Preview release; same fix included.

## Hot Issues

1. **[#5442](https://github.com/QwenLM/qwen-code/issues/5442) — Qwen OAuth endpoint normalization prefixes uppercase URL schemes**  
   `baseEndpoint.startsWith('http')` is case-sensitive, so `HTTPS://api.example.com` is treated as protocol-less. 6 comments, community tag `welcome-pr`.

2. **[#5462](https://github.com/QwenLM/qwen-code/issues/5462) — Uppercase absolute favicon URLs are treated as relative**  
   Same case-sensitivity pattern: `HTTPS://cdn.example.com/icon.svg` gets incorrectly rewritten. 5 comments.

3. **[#5444](https://github.com/QwenLM/qwen-code/issues/5444) — @file temp directory exception matches sibling path prefixes**  
   Path boundary check uses raw `startsWith`, allowing `/tmp/qwen/tmp-other/` to bypass the temp directory exception. Security-relevant.

4. **[#5440](https://github.com/QwenLM/qwen-code/issues/5440) — Installation detection matches project-root prefixes without path boundary**  
   `realPath.startsWith(normalizedProjectRoot)` can match sibling directories. Affects both local git clone and npm install detection.

5. **[#5465](https://github.com/QwenLM/qwen-code/issues/5465) — DingTalk reactions treat uppercase webhook URLs as conversation IDs**  
   `!chatId.startsWith("http")` is case-sensitive; `HTTPS://...` webhooks are misrouted as conversation IDs.

6. **[#5451](https://github.com/QwenLM/qwen-code/issues/5451) — HTTP marketplace sources use the HTTPS client**  
   `loadMarketplaceConfigFromSource` accepts `http://` but the fetch helper only calls `https.get`. Requests to plain HTTP marketplaces fail silently.

7. **[#5472](https://github.com/QwenLM/qwen-code/issues/5472) — Restore real-time full-pane thinking streaming (regression from v0.18.2)**  
   Feature request: `Ctrl+O` works post-hoc but real-time streaming of chain-of-thought was removed. 1 👍, 5 comments — community wants this back.

8. **[#5471](https://github.com/QwenLM/qwen-code/issues/5471) — Remote input ignores commands after input file truncation**  
   `RemoteInputWatcher` tracks consumed bytes; if the file is truncated and rewritten, new commands are skipped. Affects CI/automation workflows.

9. **[#5518](https://github.com/QwenLM/qwen-code/issues/5518) — bundle restore rejects target directories with trailing separators**  
   `fullPath.startsWith(targetDir + sep)` fails when `targetDir` already ends with `/`, causing restore errors for users who pass paths with trailing slashes.

10. **[#5436](https://github.com/QwenLM/qwen-code/issues/5436) — Npm extension registry fetch misroutes uppercase HTTPS URLs**  
    Case-sensitive `url.startsWith("https://")` check causes registry overrides with uppercase schemes to use the wrong HTTP client.

## Key PR Progress

1. **[#5539](https://github.com/QwenLM/qwen-code/pull/5539) — refactor(core): replace OpenRouter/Requesty provider classes with customHeaders**  
   Removes two provider classes in favor of a declarative `customHeaders` field on `ProviderConfig`. Cleaner and more extensible.

2. **[#5502](https://github.com/QwenLM/qwen-code/pull/5502) — feat(voice): voice dictation with native capture, streaming, and biasing**  
   Adds `/voice` command with hold/tap modes, transcription model selection, and silence-based auto-submit. Major UX improvement.

3. **[#5432](https://github.com/QwenLM/qwen-code/pull/5432) — perf(core): read current git branch directly from .git**  
   Eliminates two `git rev-parse` subprocess calls per render by reading `.git/HEAD` directly. Performance win for the CLI status line.

4. **[#5478](https://github.com/QwenLM/qwen-code/pull/5478) — feat(core): add Requesty provider**  
   First-class support for the Requesty model gateway, mirroring the OpenRouter provider pattern. Community contribution by @Thibaultjaigu.

5. **[#5473](https://github.com/QwenLM/qwen-code/pull/5473) — fix(cli): handle truncated remote input files**  
   Detects file truncation/rotation and resets read offset so new commands aren't lost after the input file is rewritten.

6. **[#5245](https://github.com/QwenLM/qwen-code/pull/5245) — fix: hide empty native sessions on Windows**  
   Fixes Windows `~\` path expansion and tilde handling in desktop shared package. Still open and awaiting review.

7. **[#5494](https://github.com/QwenLM/qwen-code/pull/5494) — fix(core): don't treat an empty-parts message as a function call/response**  
   `[].every(...)` returns `true`, so empty messages were misclassified as all-function-calls. Subtle but critical for message routing.

8. **[#5488](https://github.com/QwenLM/qwen-code/pull/5488) — Use VS Code theme tokens for companion scrollbar**  
   Improves scrollbar visibility in the companion panel by respecting VS Code theme colors. Community UX polish.

9. **[#5511](https://github.com/QwenLM/qwen-code/pull/5511) — fix(desktop): validate generic oauth token responses**  
   Rejects missing `access_token`, validates `expires_in` without partial parsing, and reuses validation for refresh responses. Security hardening.

10. **[#5507](https://github.com/QwenLM/qwen-code/pull/5507) — fix(desktop): enforce session plans path boundary**  
    Replaces raw `path.startsWith` with resolved path-boundary checking for `SubmitPlan` paths. Prevents sibling directory escapes.

## Feature Request Trends

- **Voice dictation** — The `/voice` command (#5502) is the most substantive new feature in flight, with hold/tap modes and silence detection. Community interest in real-time interaction.

- **Real-time thinking streaming** — Issue #5472 shows strong demand (1 👍, 5 comments) for restoring uncollapsed chain-of-thought display during generation, which regressed in v0.18.2.

- **Provider extensibility** — Multiple PRs (#5539, #5478) simplify adding new model providers via `customHeaders` or subclassing. The pattern is converging toward declarative provider configs.

- **Windows parity** — PR #5245 (still open) addresses Windows tilde expansion and empty session display, indicating ongoing desktop platform gap.

## Developer Pain Points

- **Case-insensitive URL schemes** — 8+ issues today (#5442, #5462, #5465, #5469, #5436, etc.) stem from `startsWith("http")` or `startsWith("https")` being case-sensitive. URL schemes are officially case-insensitive per RFC 3986. This is a systemic pattern that needs a centralized fix.

- **Path traversal via raw prefix matching** — 6+ issues (#5444, #5440, #5455, #5506, #5518, #5459) use `startsWith` or prefix-only checks for path security boundaries. Sibling directories with shared prefixes bypass security checks. Multiple PRs (#5507, #5515, #5521) are now addressing this pattern.

- **Partial numeric parsing with parseInt** — 6+ issues (#5485, #5474, #5495, #5499, #5490, #5492) report that `parseInt` silently accepts malformed values like `"2abc"`, `"1.5"`, or `"0x10"`. Values are truncated or misinterpreted instead of rejected. The pattern appears across CLI args, env vars, and config options.

- **Input file truncation handling** — Issue #5471 and PR #5473 highlight that the remote input watcher cannot handle file rotation/truncation, which breaks automation pipelines that write commands via append-then-truncate workflows.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-21

## Today's Highlights
The v0.8.63 release train is in active integration (#3347), consolidating sub-agent budget regulators, command extraction, and reliability fixes. A major architectural cleanup push emerged from the maintainer, proposing to split six large Rust monoliths (config, runtime, UI event loop, MCP transports, history renderers, and the App god object) into focused modules (#3306–#3314). Meanwhile, a new DeepSeek GUI desktop app (Tauri-based) was opened as PR #3349, signaling potential platform expansion.

---

## Releases
No new releases in the last 24 hours. The v0.8.63 integration PR (#3347) is pending CI validation on `main`.

---

## Hot Issues

1. **#2487 — `Turn stalled - no completion signal received`** [OPEN]  
   *Why it matters*: A core reliability bug causing TUI freezes in `yolo` mode. 17 comments and active triage; the error blocks any long-running operation.  
   [URL](https://github.com/Hmbown/CodeWhale/issues/2487)

2. **#1812 — TUI freeze on Windows 11 (crossterm-poll)** [OPEN]  
   *Why it matters*: Windows users experience complete UI unresponsiveness (no keyboard, no screen updates) while the process stays alive. Two confirmed incidents with logs.  
   [URL](https://github.com/Hmbown/CodeWhale/issues/1812)

3. **#3275 — Agent over-extends scope, self-answering without user confirmation** [OPEN]  
   *Why it matters*: A regression where CodeWhale autonomously proposes, answers, and executes modifications far beyond user intent. Serious trust/control implications. 7 comments.  
   [URL](https://github.com/Hmbown/CodeWhale/issues/3275)

4. **#3289 — UI freeze after auto-spawning several agents** [OPEN]  
   *Why it matters*: Plan mode users hit UI freezes when sub-agents spawn concurrently. Impact on workflow-heavy usage.  
   [URL](https://github.com/Hmbown/CodeWhale/issues/3289)

5. **#3238 — glibc mismatch on Ubuntu 22.04 LTS** [CLOSED]  
   *Why it matters*: Blocked Linux LTS users from `npm install -g codewhale`. Closed with fix.  
   [URL](https://github.com/Hmbown/CodeWhale/issues/3238)

6. **#2608 — Refactor provider registry from ballooning config files** [OPEN]  
   *Why it matters*: Config files at 4,719 and 9,402 lines respectively. Every new provider requires 15–30 match arm changes — a maintainability crisis flagged by the lead maintainer.  
   [URL](https://github.com/Hmbown/CodeWhale/issues/2608)

7. **#3222 — Broken reasoning content parsing for MiniMax M3 / Qwen / GLM** [OPEN]  
   *Why it matters*: Non-DeepSeek providers with thinking blocks cannot be parsed correctly, breaking inline-tag thinking block rendering.  
   [URL](https://github.com/Hmbown/CodeWhale/issues/3222)

8. **#3240 — Legacy `.deepseek` config directory still created** [CLOSED]  
   *Why it matters*: Migration completion issue — renamed project still writes to old path. Confused Windows users.  
   [URL](https://github.com/Hmbown/CodeWhale/issues/3240)

9. **#3273 — `js_execution` tool ignores proxy config on Windows** [CLOSED]  
   *Why it matters*: Enterprise users behind VPN/proxy cannot use the built-in JavaScript execution tool. Timed out with Undici connect errors.  
   [URL](https://github.com/Hmbown/CodeWhale/issues/3273)

10. **#2900 — DSML calls output as plain text, context explosion** [OPEN]  
    *Why it matters*: Model intermittently dumps DSML tool calls as text, causing massive context blowup (minutes of output). Hard to reproduce, high impact when triggered.  
    [URL](https://github.com/Hmbown/CodeWhale/issues/2900)

---

## Key PR Progress

1. **#3347 — v0.8.63 release train** [OPEN]  
   *What*: Integration PR for the v0.8.63 release — sub-agent budgets, command extraction, workflow reliability, dependency bumps. 29 commits, all local gates green.  
   [URL](https://github.com/Hmbown/CodeWhale/pull/3347)

2. **#3321 — Token budget regulator for high-fanout agent runs** [OPEN]  
   *What*: Adds token spend pacing (not just agent count caps) for workflows and sub-agents. Closes the enforcement gap between protocol and runtime.  
   [URL](https://github.com/Hmbown/CodeWhale/pull/3321)

3. **#3330 — Layer 4: replay command extraction onto main** [OPEN]  
   *What*: Replays FEAT-005 command extraction architecture targeting `main`. Refactors command routing and ownership.  
   [URL](https://github.com/Hmbown/CodeWhale/pull/3330)

4. **#3349 — DeepSeek GUI desktop app (Tauri)** [CLOSED]  
   *What*: New Tauri-based GUI with 161 files, Composer clickability fixes, three-column layout, and CI packaging for Windows NSIS + macOS DMG. Closed (likely merged or superseded).  
   [URL](https://github.com/Hmbown/CodeWhale/pull/3349)

5. **#3350 — `/model pro|flash` shortcuts and CLI model set command** [OPEN]  
   *What*: Adds `pro`/`flash` aliases to canonical model names and a `codewhale model set` CLI subcommand. Supports DeepSeek-v4 models.  
   [URL](https://github.com/Hmbown/CodeWhale/pull/3350)

6. **#3317 — Tear down delegated serve child on dispatcher exit** [OPEN]  
   *What*: Fixes orphan `codewhale-tui` listeners left running after dispatcher kill. Partial fix for #3259.  
   [URL](https://github.com/Hmbown/CodeWhale/pull/3317)

7. **#3300 — Preserve thinking/tool blocks when seeding thread from session** [OPEN]  
   *What*: Replaces text-only thread seeding with block-type-aware implementation, preserving Thinking/ToolUse/ToolResult as distinct TurnItem entries.  
   [URL](https://github.com/Hmbown/CodeWhale/pull/3300)

8. **#3346 — Fix clippy warnings** [OPEN]  
   *What*: Lint fixes across the codebase, including a `const _: () = assert!` pattern to suppress clippy warnings on compile-time checks.  
   [URL](https://github.com/Hmbown/CodeWhale/pull/3346)

9. **#3348 — Harden release branch hygiene checks** [OPEN]  
   *What*: Fixes for `--remote` support in fork checkouts and fully qualified remote refs. Addresses #3214.  
   [URL](https://github.com/Hmbown/CodeWhale/pull/3348)

10. **#3302 — Keep onboarding marker in `codewhale` home** [OPEN]  
    *What*: Preserves `.onboarded` marker path for fresh installs, while backward-compatible with legacy `.deepseek` path.  
    [URL](https://github.com/Hmbown/CodeWhale/pull/3302)

---

## Feature Request Trends

- **Sub-agent governance** (highest volume): Users want explicit on/off switches (#3305), editable recursion/concurrency controls (#3304), token budgets (#3319), and queue-and-drain admission (#3318) for workflow fan-out.
- **Configuration discoverability and editability** (#3303): Users want to discover, edit, and persist config keys from within the TUI, not just in `config.toml`.
- **Rich model/provider support** (#3222): Demand for proper reasoning block parsing across OpenAI-compatible providers (MiniMax, Qwen, GLM), beyond DeepSeek-native.
- **Visual inspection artifacts** (#3145): Inspired by Cursor's Design Mode — users want richer evidence loops for browser/UI tasks (screenshots, element relationships, layout context).
- **User intent/scope guardrails** (#3275, #3315): Strong demand for provenance enforcement — the agent must not fabricate user approval text ("改吧" / "嗯") or over-extend scope autonomously.

---

## Developer Pain Points

1. **TUI freezes on Windows** (#1812, #2487, #3289): Three open freeze bugs across different scenarios (crossterm-poll, stalled turns, agent spawn). Unresponsive UI despite alive process — highest frustration signal.
2. **Monolithic codebase maintainability** (#2608, #3306–#3314): Seven PRs from the maintainer propose splitting 4,000+ line files. Every new provider or feature requires touching 15–30 match arms across duplicated enums. This is actively slowing iteration.
3. **Agent over-autonomy without user confirmation** (#3275): The agent self-generates approval text ("改吧", "嗯") and proceeds with broad modifications. Users report feeling "locked out" of the decision loop.
4. **Cross-platform compatibility gaps** (#3238, #3273): glibc mismatch on Ubuntu LTS, proxy-invisible JavaScript execution on Windows. Blocks enterprise and Linux LTS users.
5. **Intermittent context blowup from DSML output** (#2900): Model randomly dumps tool calls as plain text, causing minutes-long output and context exhaustion. Difficult to reproduce, catastrophic when hit.
6. **Orphaned child processes** (#3259, #3317): Dispatcher exit leaves `codewhale-tui` listeners running. Needs process group or PID tracking improvements for clean shutdown.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*