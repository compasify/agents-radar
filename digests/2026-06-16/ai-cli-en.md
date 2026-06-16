# AI CLI Tools Community Digest 2026-06-16

> Generated: 2026-06-16 00:36 UTC | Tools covered: 9

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
**Date:** 2026-06-16

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is experiencing rapid maturation, with seven major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI—all actively shipping releases and engaging substantial developer communities. The landscape is characterized by two dominant tensions: **cross-platform stability** (Windows and macOS remain persistently fragile across all tools) and **agent reliability** (sub-agent hangs, false success reporting, and state persistence failures are universal pain points). A clear **ecosystem expansion** trend is visible, with tools investing in MCP/A2A protocol alignment, plugin/hook architectures, and multi-provider support. Security concerns—particularly around permission models, path traversal vulnerabilities, and supply chain attacks—are receiving escalating attention from both maintainers and communities. The market is segmenting into **enterprise-focused** (Copilot CLI, Codex with BYOK/proxy support) and **developer-experience-focused** (Pi, OpenCode, DeepSeek TUI with rich TUI features) clusters.

---

## 2. Activity Comparison

| Tool | Open Issues (notable) | PRs Active (24h) | Release Status | Community Engagement Signal |
|------|----------------------|------------------|----------------|----------------------------|
| **Claude Code** | 10+ hot issues (ENOSPC crisis) | 10 key PRs | **v2.1.178** (same day) | 356👍 on single FR (#15942), 7-way duplicate cluster |
| **OpenAI Codex** | 10 hot issues | 10 key PRs | **rust-v0.140.0** (same day) | 582👍 on #11023 (Linux desktop), 80+ active issues/PRs |
| **Gemini CLI** | 10 high-severity issues | 10 key PRs | No release (24h) | 8👍 top bug, 100+ days open for critical hang |
| **Copilot CLI** | 10 hot issues | 1 PR (spam) | **v1.0.63-0** (same day) | 8👍 BYOK feature, multiple MCP regressions |
| **Kimi Code CLI** | 10 issues (8 blocking) | 10 key PRs | No release (24h) | 5 comments max per issue—smaller community |
| **OpenCode** | 10 hot issues (96-comment megathread) | 10 key PRs | **v1.17.7** (stable) | 96 comments memory thread, 69 comments sandboxing |
| **Pi** | 10 hot issues | 10 key PRs | **v0.79.4** (same day) | 57 comments connection reliability, 30👍 |
| **Qwen Code** | 10 hot issues | 10 key PRs | **v0.18.1**, **desktop-v0.0.4** (same day) | 2-4 comments per issue—smaller community |
| **DeepSeek TUI** | 10 hot issues | 10 key PRs | **v0.8.61** (prior release) | 13 comments stall bug, 8 on architectural refactor |

**Key observations:**
- **Claude Code** and **OpenAI Codex** have the highest community engagement (356👍 and 582👍 respectively on top feature requests).
- **Copilot CLI** and **Gemini CLI** show fewer community votes but more concentrated enterprise-focused issues.
- **Kimi Code CLI** and **Qwen Code** have smaller communities but active Chinese-language developer bases.
- **DeepSeek TUI** (rebranded to `codewhale`) shows strong architectural momentum with multiple major refactors.
- **Pi** has the most balanced activity: frequent releases, active PRs, and substantive community discussion.

---

## 3. Shared Feature Directions

### Cross-Tool Requirements (Appearing in 3+ Tools)

| Requirement | Tools | Specific Needs |
|------------|-------|---------------|
| **MCP/A2A Protocol Alignment** | Claude Code, Copilot CLI, OpenCode, Qwen Code | Streaming, notifications, auth flows, tool discovery improvements |
| **Multi-Model / BYOK Support** | Copilot CLI, Pi, DeepSeek TUI, Qwen Code | Session-switching between providers, custom API keys, provider fallback chains |
| **Persistent Permission Rules** | Claude Code, DeepSeek TUI, OpenCode | Tool-scoped allow/deny/ask, atomic persistence, remembered user decisions |
| **Windows Platform Fixes** | All tools (universal) | WSL path corruption, MSIX upgrade breaks, CJK encoding, CLI detection |
| **Agent Workflow Reliability** | Claude Code, Gemini CLI, OpenCode, DeepSeek TUI | Resume state, compaction correctness, false success reporting, hang detection |
| **Terminal Rendering Quality** | Claude Code, Copilot CLI, Qwen Code, DeepSeek TUI | Markdown in TUI, mojibake, flicker, scroll handling |
| **Session History Management** | Copilot CLI, Kimi Code, OpenCode, Qwen Code | Session diff/export, unified cross-tool history, persistent storage |
| **Security Hardening** | Gemini CLI, Pi, DeepSeek TUI, Claude Code | Path traversal fixes, supply chain defaults, symlink protection |
| **Proxy/Firewall Support** | Kimi Code CLI, Copilot CLI, OpenCode | System proxy reading, `--proxy` flags for tools, enterprise proxy PAC support |
| **Extension/Plugin API** | Pi, Claude Code, Kimi Code, OpenCode | Stable hook surfaces, API exports, Promise handling, hot-reload |

### Emerging Shared Theme: **Agent Self-Awareness**
Multiple communities (Gemini CLI #21432, DeepSeek TUI #3102, Claude Code #65796) are asking agents to:
- Understand their own capabilities and CLI flags
- Ask clarifying questions through structured UI (modals, not chat)
- Report their own resource usage and completion status transparently

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Pi | OpenCode | DeepSeek TUI |
|-----------|------------|-------------|------------|-------------|---|---------|-------------|
| **Primary User** | Power developers | Enterprise/Pro users | Google ecosystem | GitHub ecosystem | TUI enthusiasts | OSS developers | Chinese devs / TUI fans |
| **Release Cadence** | Daily patches | Multiple daily | Slower (100+ day bug) | Weekly patches | Frequent (v0.x) | Stable (v1.x) | Aggressive (v0.x) |
| **AI Model Focus** | Anthropic | OpenAI | Gemini | Multi-model | Multi-provider | Anthropic/OAI | DeepSeek + multi |
| **TUI Quality** | Good, but Markdown gap | Standard | Good | Standard | **Excellent** (themes) | Good | Good, Windows issues |
| **Enterprise Features** | Permission rules | Proxy, BYOK | Google Cloud | Copilot policy | Not primary | Not primary | Not primary |
| **Security Model** | Tool-param rules | Basic | Path fixes hardening | OAuth scope gap | Supply chain push | Sandboxing debate | Persistent permissions |
| **Biggest Weakness** | ENOSPC macOS crisis | Reconnect loops | Agent hangs 100+ days | MCP regressions | Process truncation | Memory leaks | Windows freezes |
| **Unique Strength** | Permission rule syntax | /usage token views | AST-aware roadmap | GitHub integration | Theme detection | Memory megathread | Data-driven provider registry |

### Platform Fragility Ranking (Worst → Best)
1. **Windows** — All tools suffer; Copilot CLI, Claude Code, OpenCode have most Windows-specific issues
2. **macOS** — Claude Code ENOSPC crisis, Pi theme detection, Qwen Code Ghostty flicker
3. **Linux** — Most stable platform; only Codex lacks native Linux desktop app

---

## 5. Community Momentum & Maturity

### Most Active Communities (by engagement volume)
1. **OpenAI Codex** — 582👍 on single feature request (Linux desktop), 80+ active issues/PRs daily
2. **Claude Code** — 356👍, 137 comments on VS 2026 request, 7-way duplicate clusters showing passionate user base
3. **Pi** — 57 comments on single connection issue, frequent PRs, balanced discussion
4. **OpenCode** — 96-comment megathread, 69 comments on sandboxing—deep technical engagement

### Most Rapidly Iterating (by release velocity)
1. **OpenAI Codex** — 4 releases in 24h (rust-v0.140.0 stable + 3 alphas)
2. **Claude Code** — v2.1.178 same-day release
3. **Pi** — v0.79.4 same-day release
4. **Copilot CLI** — v1.0.63-0 same-day release
5. **Qwen Code** — v0.18.1 + desktop-v0.0.4 same-day

### Most Architecturally Mature
1. **OpenCode** — v1.17.7 stable, comprehensive MCP support, session management
2. **Claude Code** — v2.1.x, sophisticated permission model, hook system
3. **OpenAI Codex** — v0.140.x stable, app-server architecture, TUI follow-up queue
4. **Pi** — v0.79.x, extension API, provider registry, session storage design

### Most Challenged (by unresolved critical bugs)
1. **Gemini CLI** — Agent hangs 100+ days open (#21409), false success reporting (#22323)
2. **Claude Code** — ENOSPC crisis with 7+ duplicates, no coordinated fix yet
3. **DeepSeek TUI** — Stalled turns (#2487), Windows freezes (#1812) across multiple releases
4. **Copilot CLI** — MCP regression cluster in v1.0.60-v1.0.62 range

---

## 6. Trend Signals

### For Developers Building on AI CLI Tools

1. **Cross-Platform Investment is Non-Negotiable** — Every major tool shows Windows and macOS fragility. If you're building plugins or extensions for any AI CLI tool, prioritize testing on all three platforms. The most painful bugs (ENOSPC, path corruption, encoding) are all OS-specific.

2. **MCP/A2A Protocol Convergence is Accelerating** — OpenCode, Claude Code, and Copilot CLI are all investing heavily in protocol alignment. This suggests the ecosystem is standardizing. If you're building AI tool integrations, bet on MCP as the common denominator.

3. **Permission & Security Models are Primitive but Evolving** — Claude Code's `Tool(param:value)` syntax is the most innovative permission system. Other tools are still at "ask/deny/allow" basics. Expect security to become a major differentiator in 2026-2027.

4. **Agent Reliability Remains the #1 Unresolved Problem** — Across all tools, users report agent hangs, false success reporting, state loss, and silent failures. The industry hasn't cracked agent state management yet. This is the biggest opportunity for tool differentiation.

5. **Terminal UX is Becoming a Competitive Battlefield** — Pi's theme detection, Claude Code's Markdown rendering request, Qwen Code's Ghostty fixes—TUI quality is increasingly a first-class feature, not an afterthought.

6. **Chinese Developer Ecosystem is Growing Independently** — Kimi Code CLI, Qwen Code, and DeepSeek TUI serve overlapping but distinct Chinese developer communities. They face unique challenges (firewall proxy issues, Chinese-language encoding, regional provider compatibility) that Western tools don't address.

7. **Supply Chain Security Pushback** — Pi's `--min-release-age=0` controversy and Gemini CLI's dependency pinning PR signal growing community awareness of supply chain risks in AI CLI tools.

8. **Enterprise Adoption is Driving Feature Requests** — VS 2026 integration (Claude Code), BYOK model support (Copilot CLI), system proxy (Kimi Code CLI), and managed config requirements (Codex) all point to enterprise deployment as the growth vector.

### Recommendations for Developers

- **Tool Selection**: Choose Claude Code for sophisticated permission control, Codex for enterprise/deployment stability, Pi for best TUI experience, OpenCode for most mature session management.
- **Plugin Development**: Focus on Claude Code (new hook system) and Pi (growing extension API) for the best developer experience.
- **Cross-Platform Support**: Test on all three platforms—assume Windows will have path issues and macOS will have resource detection bugs.
- **Monitoring**: Watch the MCP protocol alignment closely—it's becoming the universal API for AI tool interoperability.
- **Risk Awareness**: Budget for agent reliability issues—plan for sub-agent timeouts, state loss, and false success reporting in any automated workflow.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-06-16 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following are the most-discussed Skill proposals by community engagement (comment volume, cross-references, and related issue activity):

**#1: skill-creator / run_eval.py fixes** (PRs #539, #361, #362, #1099, #1050, #1298; Issues #556, #1169, #1061)
*Functionality:* The `skill-creator` meta-skill is the toolchain for authoring, validating, and testing new Skills. It includes YAML frontmatter validation, UTF-8 byte-length checks, and eval harnesses (`run_eval.py`, `run_loop.py`, `improve_description.py`).
*Discussion:* **The most actively discussed topic in the repository.** The core toolchain has been broken on Windows for months — every query returns `recall=0%` due to subprocess pipe errors, `PATHEXT` resolution failures, and cp1252 encoding issues. Multiple independent contributors (Lubrsy706, Mr-Neutr0n, joshuawowk, gstreet-ops, MartinCajiao, just2majic) have submitted fixes, but `run_eval.py` remains unreliable. The community is blocked from effectively optimizing skill descriptions.
*Status:* **Open** — multiple pending PRs, no merge yet.

**#2: document-typography** (PR #514 — PGTBoos)
*Functionality:* Prevents common typographic defects in AI-generated documents: orphan word wrap (1–6 words spilling onto the next line), widow paragraphs (headers stranded at page bottom), and numbering misalignment.
*Discussion:* The author argues these issues "affect every document Claude generates." Strong resonance as a practical quality-of-life fix for document-generation workflows.
*Status:* **Open** — active discussion, no merge.

**#3: ODT skill** (PR #486 — GitHubNewbie0)
*Functionality:* Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Integrates with LibreOffice workflows, supporting template filling and ODT-to-HTML parsing.
*Discussion:* Addresses the gap for users in open-source office environments. Complements the existing DOCX skill with an equivalent for the ISO-standard ODF format.
*Status:* **Open** — awaiting review.

**#4: AURELION skill suite** (PR #444 — Chase-Key)
*Functionality:* Four skills (kernel, advisor, agent, memory) implementing a structured cognitive framework for professional knowledge management — a 5-floor thinking template, orchestration patterns, and persistent memory.
*Discussion:* Ambitious framework-level addition. Community interest in structured reasoning patterns is high, but concerns about complexity and overlap with the existing `memory` skill have been raised.
*Status:* **Open** — under discussion.

**#5: agent-governance** (Issue #412 — imran-siddique)
*Functionality:* Safety patterns for AI agent systems — policy enforcement, threat detection, trust scoring, and audit trails.
*Discussion:* Only a proposal (not a PR yet), but garnered 6 comments quickly. Represents growing concern about agent safety as Skills gain more tool access.
*Status:* **Issue only** — no PR submitted.

**#6: testing-patterns** (PR #723 — 4444J99)
*Functionality:* Comprehensive test skill covering unit testing (AAA pattern), React Testing Library, integration testing, E2E, and TDD workflows.
*Discussion:* A well-scoped, practical skill that fills a clear gap. The community frequently requests better testing support in generated code.
*Status:* **Open** — awaiting review.

**#7: shodh-memory** (PR #154 — varun29ankuS)
*Functionality:* Persistent context system with proactive memory retrieval (`proactive_context` tool calls) at every user message, plus rich memory structuring.
*Discussion:* One of the earliest memory-oriented skills. Generated ongoing discussion about best practices for memory management and potential overlap with Claude's built-in capabilities.
*Status:* **Open** — long-running, still active.

---

## 2. Community Demand Trends

Analysis of the top Issues reveals five clear demand vectors:

**🔄 Toolchain Reliability (Highest Priority)**
- Issues #556, #1169, #1061, #189 all concern the skill-creator toolchain being broken on Windows and returning `recall=0%` for all queries. **This is the #1 blocker** — contributors cannot validate their Skills effectively.
- Issue #202 calls for rewriting `skill-creator` from "developer documentation" into a proper operational skill.

**🏢 Enterprise & Organization Features**
- Issue #228 (14 comments, 7 👍) demands **org-wide skill sharing** — a shared skill library or direct sharing links instead of manual `.skill` file transfers via Slack.
- Issue #29 asks for **AWS Bedrock compatibility** (older but still open).

**🔒 Security & Trust Boundaries**
- Issue #492 (7 comments) flags that **community skills distributed under `anthropic/` namespace** create a trust boundary vulnerability — users may grant elevated permissions to skills they believe are official.
- Issue #1175 raises concerns about **security and context window** when handling SharePoint Online documents via Skills.

**📄 Document Format Expansion**
- Demand for ODT (PR #486), typography quality (PR #514), and multi-file preloading (Issue #1220) show the community wants richer document generation beyond basic text/DOCX.

**🔧 Agent Safety & Governance**
- Issue #412 (agent-governance) got 6 comments quickly, indicating rising interest in safety patterns for multi-tool agent systems.

---

## 3. High-Potential Pending Skills

These PRs have active comment threads, are not yet merged, but show strong community engagement and maintainer visibility:

| Skill | PR | Author | Key Detail |
|-------|-----|--------|------------|
| **agent-creator** | #1140 | SyedaQurratAI | Meta-skill for task-specific agent sets; fixes multi-tool evaluation and adds Windows support for `recalc.py` |
| **skill-quality-analyzer** | #83 | eovidiu | Evaluates Skills across 5 dimensions (structure, documentation, examples, etc.) — a meta-skill for the marketplace |
| **codebase-inventory-audit** | #147 | p19dixon | 10-step orphaned code / documentation gap detection; produces a single-source-of-truth `CODEBASE-STATUS.md` |
| **SAP-RPT-1-OSS predictor** | #181 | amitlals | Tabular foundation model integration for predictive analytics on SAP data — niche but high-value for enterprise users |
| **aurelion-kernel** | #444 | Chase-Key | Structured thinking framework with 5 floors of cognitive templates |

**Likely Near-Term Merges:** The Windows compatibility fixes (PRs #1099, #1050, #1298) and the `skill-creator` YAML validation improvements (PRs #361, #539) have the highest maintainer attention and are most critical for the toolchain's health.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for toolchain reliability and meta-skills** — the ability to create, validate, test, and share Skills is valued more than any single domain-specific skill, as evidenced by the sustained multi-contributor effort to fix `run_eval.py`'s `recall=0%` bug across 10+ independent reproductions and 6+ open PRs.

*Secondary insight:* When the toolchain works, users want **document quality (typography, ODT)** and **enterprise features (org sharing, security boundaries)** — suggesting the ecosystem is maturing from individual experimentation toward organizational deployment.

---

# Claude Code Community Digest — 2026-06-16

## Today's Highlights

Anthropic shipped **v2.1.178** with a powerful new `Tool(param:value)` syntax for permission rules, enabling fine-grained control like blocking Opus subagents with `Agent(model:opus)`. The release also fixes nested skill loading in `.claude/skills` directories. Meanwhile, a **macOS ENOSPC false-positive crisis** continues to dominate the bug tracker, with 7+ duplicate reports of commands being killed by bogus "disk full" errors, and the community is pressing hard for a coordinated fix.

---

## Releases

**v2.1.178**
- **New permission rule syntax:** `Tool(param:value)` allows matching a tool's input parameters with `*` wildcards (e.g., `Agent(model:opus)` to block Opus subagents)
- **Nested skills fix:** Skills in nested `.claude/skills` directories now load correctly when working on files in those directories; naming clashes resolve to the nested skill

*No other releases in the last 24 hours.*

---

## Hot Issues

1. **[#15942 — Visual Studio 2026 Integration](https://github.com/anthropics/claude-code/issues/15942)** 🏆 *Top by far*
   - **What:** Request for native Visual Studio 2026 support. **137 comments, 356 👍** — the most popular open feature request by a wide margin.
   - **Why it matters:** The Windows IDE ecosystem is clearly underserved; this is the #1 blocking issue for Windows developers.

2. **[#52871 — MCP OAuth trailing slash breaks Entra ID](https://github.com/anthropics/claude-code/issues/52871)**
   - **What:** MCP OAuth appends a trailing `/` to the `resource` parameter, causing Azure AD `AADSTS9010010` errors.
   - **Why it matters:** Blocks all enterprise Azure users from using MCP authentication. 24 comments, 18 👍.

3. **[#63909 — ENOSPC false-positive on macOS](https://github.com/anthropics/claude-code/issues/63909)**
   - **What:** Bash tool reports "temp filesystem full (0MB free)" / ENOSPC despite free disk space, silently losing all command output.
   - **Why it matters:** This is the head of a massive duplicate cluster (#65166, #65915, #65067, #68383). Commands with output fail; silent output loss corrupts workflows. 12 comments.

4. **[#62016 — `rg -rn` silently corrupts search output](https://github.com/anthropics/claude-code/issues/62016)**
   - **What:** Claude uses `rg -rn` (muscle memory from grep), but ripgrep's `-r` = `--replace`, so every match is rewritten to `n`. Claude then misdiagnoses its own corrupted output.
   - **Why it matters:** A silent, non-obvious bug that wastes massive debugging time. 10 comments, 10 👍.

5. **[#65796 — Multi-agent resume restarts from beginning](https://github.com/anthropics/claude-code/issues/65796)**
   - **What:** After auto-compaction, workflow resume silently re-runs completed agents from scratch instead of restoring state.
   - **Why it matters:** Destroys trust in long-running agent workflows. 6 comments.

6. **[#13600 — Markdown renderer in CLI](https://github.com/anthropics/claude-code/issues/13600)**
   - **What:** Request for native Markdown rendering in the Claude Code CLI terminal output.
   - **Why it matters:** 44 👍, 10 comments. Long-standing gap vs. VS Code extension UX.

7. **[#67843 — MSIX upgrade breaks Filesystem extension on Windows](https://github.com/anthropics/claude-code/issues/67843)**
   - **What:** After Squirrel → MSIX upgrade, the Filesystem extension silently fails to install.
   - **Why it matters:** Windows migration path is broken, risking data loss for users who upgraded. 5 comments.

8. **[#67865 — Desktop hangs installing .mcpb >16KB on Windows](https://github.com/anthropics/claude-code/issues/67865)**
   - **What:** Claude Desktop silently hangs when installing any local `.mcpb` bundle with a deflated entry >~16KB.
   - **Why it matters:** Blocks all non-trivial MCP bundle installations on Windows. 4 comments, 5 👍.

9. **[#68484 — Silent extension install failures on macOS Tahoe 26.5](https://github.com/anthropics/claude-code/issues/68484)**
   - **What:** Desktop extension installs fail with no error on the latest macOS.
   - **Why it matters:** OS-level compatibility regression affecting early adopters of macOS Tahoe.

10. **[#65577 — VM disk image grows unbounded, fills disk](https://github.com/anthropics/claude-code/issues/65577)**
    - **What:** Claude Desktop's local-agent VM (`rootfs.img`) grows without bound and is never reclaimed, silently filling the disk.
    - **Why it matters:** A silent resource leak in the cowork/sandbox feature. 3 comments.

---

## Key PR Progress

1. **[#68707 — Add `/bug` command for terminal issue filing](https://github.com/anthropics/claude-code/pull/68707)**
   - **What:** New `bug-reporter` plugin with `/bug` slash command. Auto-collects environment info and files GitHub issues without leaving the terminal.
   - **Why it matters:** Dramatically lowers friction for bug reports, improving data quality.

2. **[#68678 — Triage bot fix: don't mark Desktop issues as invalid](https://github.com/anthropics/claude-code/pull/68678)**
   - **What:** Fixes `.claude/commands/triage-issue.md` which was incorrectly marking Claude Desktop bug reports as "invalid" / "not related to Claude Code".
   - **Why it matters:** Was causing valid Desktop bug reports to be mislabeled and ignored.

3. **[#68672 — Hookify: load only event:all rules for unknown tools](https://github.com/anthropics/claude-code/pull/68672)**
   - **What:** Fixes a bug where `PretoolUse`/`PostToolUse` hooks crashed for non-Bash/non-Edit tools because `event` variable remained `None`.
   - **Why it matters:** Unblocks hooks for arbitrary tools across the plugin ecosystem.

4. **[#68671 — PostToolUse hooks can now return `deny`](https://github.com/anthropics/claude-code/pull/68671)**
   - **What:** Fixes `evaluate_rules()` returning `permissionDecision: "deny"` for both Pre and Post hooks when only Pre should support denial.
   - **Why it matters:** Corrects the security model for post-execution hooks.

5. **[#68681 — Workflow pagination break condition fix](https://github.com/anthropics/claude-code/pull/68681)**
   - **What:** Fixes two workflow bugs: pagination stopping only on 0 results (missing items at page boundaries) and rejecting valid 2xx status codes.
   - **Why it matters:** Prevents GitHub Actions from silently skipping issue/PR processing.

6. **[#68700 — Windows: fix learning-output-style plugin paths](https://github.com/anthropics/claude-code/pull/68700)**
   - **What:** Adds `bash` prefix and normalizes backslash paths so `SessionStart` hooks work on Windows.
   - **Why it matters:** Part of a broader push (see also #68701, #68699, #68694) to fix Windows compatibility across the entire plugin system.

7. **[#68702 — Fix ralph-wiggum on macOS bash 3.x](https://github.com/anthropics/claude-code/pull/68702)**
   - **What:** Guards empty array expansion with `set -u`; prevents `unbound variable` errors on macOS's default bash 3.2.
   - **Why it matters:** The `/ralph` loop command was completely broken on macOS out of the box.

8. **[#68689 — Security-guidance: block symlink escape](https://github.com/anthropics/claude-code/pull/68689)**
   - **What:** Prevents symlink traversal attacks when reading user-controlled config files from `.claude/`.
   - **Why it matters:** Security hardening — prevents malicious `.claude/` symlinks from reading arbitrary files.

9. **[#68693 — Additive duplicate label, don't replace](https://github.com/anthropics/claude-code/pull/68693)**
   - **What:** When closing issues as duplicate, the label PATCH body now adds `duplicate` without replacing existing labels.
   - **Why it matters:** Preserves existing bug categorization when issues are deduplicated.

10. **[#60427 — Standardize GitHub capitalization in README](https://github.com/anthropics/claude-code/pull/60427)**
    - **What:** A long-standing (25-day open) documentation fix updating README capitalization conventions.
    - **Why it matters:** Small but community-noticed consistency fix.

---

## Feature Request Trends

| Rank | Theme | Example Issues | Community Signal |
|------|-------|----------------|-----------------|
| 1 | **Windows IDE integration** | #15942 (VS 2026, 356👍), #67843 (MSIX), #67865 (MCP hangs) | **High** — Windows is the most underserved platform; VS 2026 support is the #1 request |
| 2 | **Markdown rendering in CLI** | #13600 (44👍) | **Medium** — UX gap between terminal and IDE experiences |
| 3 | **History retention control** | #56093, #68713 | **Medium** — Users want to disable the 30-day cleanup, not just increase the period |
| 4 | **Bug reporting from terminal** | #68707 (PR merged) | **Implemented** — The `/bug` command is now shipping |
| 5 | **Agent/Workflow state persistence** | #65796 (resume breaks), #65577 (VM disk leak) | **High** — Workflow reliability is a top concern for multi-agent users |

---

## Developer Pain Points

1. **⚠️ macOS ENOSPC false-positive crisis** — At least **7 distinct issue reports** (#63909, #65166, #65915, #65067, #68383, and others) all describe the same bug: Bash tool kills commands with bogus "temp filesystem full (0MB free)" errors on macOS. The root cause appears to involve `statfs().bsize=0` on Intel Macs (#65166) and racing cleanup deletes (#65067). This is the single most disruptive bug in the tracker, causing silent command output loss and wasted debugging cycles.

2. **🪟 Windows ecosystem instability** — Multiple critical Windows issues: MSIX upgrade breaks extensions (#67843), MCP bundle installation hangs (>16KB, #67865), silent install failures on macOS Tahoe (#68484), and plugin path mangling with backslashes (#68700, #68699, #68694). Windows users face a consistently broken experience.

3. **🔄 Agent workflow reliability** — Multi-agent resume restarts from scratch after compaction (#65796), "Usage credits required for 1M context" false blocking (#68561), and desktop VM disk leaks (#65577) all erode trust in long-running agent processes.

4. **🧪 Tool invocation footguns** — `rg -rn` → `--replace=n` silent corruption (#62016, 10👍) and malformed tool-call tokens (#68715) represent a class of bugs where Claude silently misuses its own tools, producing misleading output that wastes developer time.

5. **🔌 Plugin/extension install fragility** — Silent failures across all platforms: macOS Tahoe (#68484), Windows MSIX (#67843), Windows MCP bundles (#67865), and the triage bot incorrectly labeling Desktop issues (#68678). The install pipeline lacks basic error feedback.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-16

## Today’s Highlights
The Codex team shipped a stable `rust-v0.140.0` release with new token usage visibility and improved `/goal` fidelity for large content. Community attention remains focused on cross-platform stability, particularly around Windows WSL path handling and a recurring macOS desktop crash pattern. Over 80 community issues and PRs were active in the last 24 hours, with cybersecurity false positives emerging as a hot new pain point for CLI users.

## Releases
**rust-v0.140.0** (stable, 4 releases today)
- **New Features:** Added `/usage` views for daily, weekly, and cumulative account token activity (#27925). `/goal` now preserves oversized text, large pasted blocks, and image attachments, including in remote app-server sessions (#27508, #27509, #27510).
- **Bug Fixes:** Permanent session deletion support added (details omitted from changelog).
- **Alpha track:** Three alpha builds (v0.140.0-alpha.20 through .22) were also published today, presumably containing iterative fixes leading to the stable release.

## Hot Issues (10 noteworthy)

1. **[#11023] Codex Desktop for Linux** (110 comments, 582 👍)  
   *The longest-running community request*. The app is nearly unusable on the user’s Mac, driving demand for a native Linux desktop build. Extremely high engagement signals a cross-platform gap.  
   [openai/codex Issue #11023](https://github.com/openai/codex/issues/11023)

2. **[#18960] Frequent reconnect loop — “websocket closed by server before response.completed”** (42 comments, 33 👍)  
   A Pro user on macOS experiencing persistent streaming failures. This is a top connectivity concern with broad reproducibility.  
   [openai/codex Issue #18960](https://github.com/openai/codex/issues/18960)

3. **[#24675] Stale app connector link after 401 reauth** (23 comments, 17 👍)  
   A deeper bug where stale cached connectors survive restart and plugin removal. Only a manual cache purge resolves it, indicating a serious UX regression for plugin users.  
   [openai/codex Issue #24675](https://github.com/openai/codex/issues/24675)

4. **[#27817] False positive cybersecurity flag on tax filing work** (18 comments, 0 👍)  
   A normal financial preparation conversation was flagged as a cybersecurity risk. Low votes but high thread activity—potentially a growing concern for everyday users.  
   [openai/codex Issue #27817](https://github.com/openai/codex/issues/27817)

5. **[#28015] False positive safety check blocks normal repo maintenance in CLI** (18 comments, 0 👍)  
   Same author as #27817, now reporting that even simple `git` hygiene and `du` invocations trigger safety interruptions in paid sessions. This is a serious CLI trust issue.  
   [openai/codex Issue #28015](https://github.com/openai/codex/issues/28015)

6. **[#28094] Windows WSL: paths rewritten to `C:\home`** (13 comments, 0 👍)  
   After update, Codex Desktop on Windows rewrites WSL `/home/project` paths as `C:\home`, breaking all project-chat associations. A critical regressions for WSL developers.  
   [openai/codex Issue #28094](https://github.com/openai/codex/issues/28094)

7. **[#28373] macOS update failure — loops twice** (9 comments, 3 👍)  
   App repeatedly attempts and fails to update itself, leaving users stuck on an older build. Classic installer-level pain point.  
   [openai/codex Issue #28373](https://github.com/openai/codex/issues/28373)

8. **[#22672] Windows app cannot find CLI on non-standard drive** (8 comments, 11 👍)  
   WSL + non-C: drive setup breaks CLI detection. A persistent Windows environment issue with strong upvoting.  
   [openai/codex Issue #22672](https://github.com/openai/codex/issues/22672)

9. **[#27331] `multi_agent_v2` breaks every turn with 400 error** (4 comments, 5 👍)  
   A feature-gated regression — enabling multi-agent support in config.toml causes immediate API validation failure on every turn, blocking all work. High severity for power users.  
   [openai/codex Issue #27331](https://github.com/openai/codex/issues/27331)

10. **[#15367] VS Code extension lacks Copilot-grade change locations and undo** (4 comments, 8 👍)  
   Community explicitly compares Codex unfavorably to Copilot for in-editor diffs and undo reliability. A competitive gap.  
    [openai/codex Issue #15367](https://github.com/openai/codex/issues/15367)

## Key PR Progress (10 important)

1. **[#26434] Preserve hook trust bypass in exec threads** [CLOSED]  
   Fixes a bug where `--dangerously-bypass-hook-trust` was lost after config reload. Crucial for users relying on custom hooks.  
   [openai/codex PR #26434](https://github.com/openai/codex/pull/26434)

2. **[#28417] Add `title` field to image generation items** [OPEN]  
   Adds a nullable `title` to `v2 imageGeneration` items, enabling concise display titles separate from `revisedPrompt`. Incremental UX improvement for app-server clients.  
   [openai/codex PR #28417](https://github.com/openai/codex/pull/28417)

3. **[#28267] Dispatch queued user messages through core idle extensions** [OPEN]  
   Prevents race conditions between app-server turn-completion and core follow-up work. A foundational fix for message queue reliability.  
   [openai/codex PR #28267](https://github.com/openai/codex/pull/28267)

4. **[#28268] Expose User Message Queue API** [OPEN]  
   Adds a durable, thread-scoped API for queuing user messages. Enables richer client-side interactions.  
   [openai/codex PR #28268](https://github.com/openai/codex/pull/28268)

5. **[#28307] Queue TUI follow-ups through app-server** [OPEN]  
   Moves TUI follow-ups from client memory to app-server durable queue. A key architecture upgrade for CLI/TUI.  
   [openai/codex PR #28307](https://github.com/openai/codex/pull/28307)

6. **[#27986] Expose raw V1 realtime handoff append API** [OPEN]  
   Adds low-level `thread/realtime/appendHandoff` control surface for silent context and speech appends. Essential for realtime audio workflows.  
   [openai/codex PR #27986](https://github.com/openai/codex/pull/27986)

7. **[#28388] Speed up resume and fork startup** [OPEN]  
   Applies a candidate optimization from an internal experiment to reduce CLI startup latency. High impact for all CLI users.  
   [openai/codex PR #28388](https://github.com/openai/codex/pull/28388)

8. **[#26706] PAC 1 — System proxy feature config surface** [OPEN]  
   Introduces `respect_system_proxy` feature flag (default-off) to gate native PAC/proxy support. Critical for enterprise deployments behind corporate proxies.  
   [openai/codex PR #26706](https://github.com/openai/codex/pull/26706)

9. **[#28401] Run core integration tests against Wine-backed Windows executor** [OPEN]  
   Enables running Linux app-server tests against Windows exec-server via Wine. Significant for cross-platform CI quality.  
   [openai/codex PR #28401](https://github.com/openai/codex/pull/28401)

10. **[#28413] Expose managed config requirements through app-server** [OPEN]  
    New config APIs surface authentication, storage, telemetry, shell, feedback, and Windows private-desktop requirements. Improves managed-environment observability.  
    [openai/codex PR #28413](https://github.com/openai/codex/pull/28413)

## Feature Request Trends
- **Linux desktop app (#11023):** The most-upvoted and most-commented request remains a native Linux Codex Desktop client.
- **Remote Codex host connectivity (#26846):** Users want to connect their desktop app to a remote Codex execution host, enabling mobile-to-PC workflows.
- **Declarative Dynamic Workflows (#25446):** An experimental proposal to allow declarative multi-step workflow definitions in CLI, receiving moderate engagement.
- **VS Code parity with Copilot (#15367):** Explicit calls for in-editor diff visualization and reliable undo/revert.

## Developer Pain Points
- **Cybersecurity false positives (#27817, #28015):** Two issues from the same user highlight a new trend: legitimate finance and DevOps work being blocked by safety checks. This could erode trust in the CLI.
- **Windows + WSL path corruption (#28094, #22672):** Multiple reports of path mangling (`/home` → `C:\home`), CLI detection failures on non-standard drives, and Korean character path crashes (#28079). Windows remains the most fragile platform.
- **Reconnect loops (#18960, #28295):** Streaming failures and persistent reconnection are disrupting Pro users on macOS and China mainland users, suggesting backend connectivity issues.
- **Multi-agent regression (#27331):** A feature-gated 400 error blocks all work when enabled — a showstopper for early adopters of the multi-agent system.
- **Update failures (#28373, #26673):** Both macOS and Windows users report broken auto-update and UI scroll regressions post-update, indicating release pipeline quality gaps.
- **Stale cache issues (#24675):** Connector and tool discovery caches that survive restart and plugin removal force manual filesystem surgery — a serious operational headache.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-16

## Today's Highlights

A significant security-focused day: three path traversal vulnerabilities in the skill management subsystem (install, link, uninstall) were patched in PR #27767, and a critical CI pipeline fix (#27753) neutralizes fork artifact poisoning attacks. The team also published a fix for MCP OAuth refresh failures on auto-discovered servers (#27889), while the nightly release pipeline was unblocked by switching from the `prod` environment to an unprotected one (#27939). No new releases shipped in the last 24 hours.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#24353 — Robust Component-Level Evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (P1, 7 comments)  
   EPIC tracking the expansion of "behavioral evals" from 76 tests across 6 Gemini models. Critical for preventing regressions as the agent surface grows.

2. **[#21409 — Generalist Agent Hangs Indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 7 comments, 8 👍)  
   The highest-reaction bug. Agents stall forever on simple tasks (e.g., folder creation). Workaround exists (instruct model not to use sub-agents), but the community is frustrated this remains open after 100+ days.

3. **[#22745 — AST-Aware File Reads & Codebase Mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2, 7 comments, 1 👍)  
   EPIC investigating whether AST-aware tools can reduce token waste from misaligned reads and improve navigation precision. Linked sub-issues track specific tools (AST grep, tilth, glyph).

4. **[#22323 — Subagent MAX_TURNS Hides as GOAL Success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 6 comments, 2 👍)  
   `codebase_investigator` reports "success" even when it hits max turns before doing any work. Misleading telemetry makes debugging agent failures nearly impossible. An agentic-correctness bug with high severity.

5. **[#25166 — Shell Command Hangs with "Waiting Input" After Completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 4 comments, 3 👍)  
   Simple CLI commands (e.g., `ls`) leave the shell in an "Awaiting user input" state after finishing. Extremely disruptive for automated workflows.

6. **[#26525 — Auto Memory Sends Secrets to Model Before Redaction](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, 5 comments)  
   Critical security concern: transcripts are sent to the extraction model *before* the redaction prompt is applied. Skill logs may also leak secrets. Part of a larger Auto Memory reliability audit.

7. **[#26522 — Auto Memory Retries Low-Signal Sessions Indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, 5 comments)  
   Sessions are only marked "processed" on successful `read_file`. Low-signal sessions are re-surfaced forever, consuming resources and polluting memory indices.

8. **[#21968 — Gemini Doesn't Use Skills / Sub-Agents Autonomously](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, 6 comments)  
   Users report the model ignores custom skills (gradle, git) even when task descriptions match. Must be explicitly instructed — defeats the purpose of skill registration.

9. **[#27277 — Disk-Full Disables Recording Silently](https://github.com/google-gemini/gemini-cli/issues/27277)** (P2, 2 comments)  
   ENOSPC sets `conversationFile = null`, causing all recording to silently stop. Only a `debugLogger` warning — no user-facing alert. Exit summary may produce no output.

10. **[#26523 — Invalid Auto Memory Inbox Patches Are Silently Skipped](https://github.com/google-gemini/gemini-cli/issues/26523)** (P2, 3 comments)  
    Malformed patches accumulate in `.patch/` without feedback. Background extractors repeatedly re-read the same invalid entries, wasting model context turns.

## Key PR Progress

1. **[#27854 — Fix/Pending Tools and Trust Overrides](https://github.com/google-gemini/gemini-cli/pull/27854)** (Size M, CLOSED)  
   Prevents premature agent state progression while awaiting user tool approvals. Forces sequential file writes to eliminate race conditions. Fixes a `trustOverride` config bug.

2. **[#27943 — Fix Core-Tools Path Resolution for @-Reference Files](https://github.com/google-gemini/gemini-cli/pull/27943)** (Size M/L, OPEN)  
   `read_file`, `replace`, `write_file` now resolve paths correctly when files were originally referenced via `@mention` syntax (e.g., `@policies/new-policies.ts`). Fixes a common "File not found" failure mode.

3. **[#27767 — Fix Path Traversal in Skill Install/Link/Uninstall](https://github.com/google-gemini/gemini-cli/pull/27767)** (Size M, CLOSED)  
   Three separate path traversal vulnerabilities in frontmatter parsing and symlink resolution. Attackers could write arbitrary files outside the skills directory.

4. **[#27753 — CI: Validate workflow_run Origin (Fork Artifact Poisoning)](https://github.com/google-gemini/gemini-cli/pull/27753)** (P1, Size S, OPEN)  
   Prevents fork PRs from injecting malicious artifacts into the E2E pipeline where repository secrets are accessible. Critical supply-chain security fix.

5. **[#27889 — Fix MCP OAuth Refresh with Stored Client ID](https://github.com/google-gemini/gemini-cli/pull/27889)** (P1, Size M, OPEN)  
   OAuth token refresh now uses the persisted `client_id` from token metadata for auto-discovered MCP servers, instead of failing on servers with no static `oauth.clientId` in settings.

6. **[#27939 — Switch Nightly Releases to Unprotected Environment](https://github.com/google-gemini/gemini-cli/pull/27939)** (P1, CLOSED)  
   Nightly cron builds were stalling because they defaulted to `prod` environment (requires manual approval). Now uses an unprotected environment for automated releases.

7. **[#27942 — Fix Leading Space in camelToSpace for Capitalized Keys](https://github.com/google-gemini/gemini-cli/pull/27942)** (P1, Size S, OPEN)  
   `camelToSpace("Id")` produced `" Id"` instead of `"Id"`. A small but pervasive formatting bug affecting CLI outputs across the codebase.

8. **[#27947 — Migrate coreTools Setting to tools.core](https://github.com/google-gemini/gemini-cli/pull/27947)** (Size M, OPEN)  
   Completes the schema migration from deprecated `coreTools` array to new `tools: { core: [] }` format. Affects GitHub Actions workflows and A2A server configuration.

9. **[#27936 — Fix Missing activate() Disposables in VS Code Companion](https://github.com/google-gemini/gemini-cli/pull/27936)** (P2, Size S/M, OPEN)  
   Parentheses wrapping caused comma expressions instead of separate `push()` arguments. Two groups of disposables were never added to `context.subscriptions`, breaking cleanup.

10. **[#27948 — Pin Dependencies + 14-Day Update Cooldown](https://github.com/google-gemini/gemini-cli/pull/27948)** (Size XL, OPEN)  
    Removes all `^` and `~` ranges from `dependencies`, `devDependencies`, `overrides` — strictly pins every version. Enforces 14-day cooldown for Dependabot. A large-batch dependency hardening effort.

## Feature Request Trends

- **AST-Aware Code Understanding**: Multiple issues (##22745, #22746, #22747) investigate AST-aware file reads, grep, and codebase mapping. The goal is reducing token waste and improving navigation precision — a clear priority for large-repo users.
- **Auto Memory Quality & Safety**: Four issues from SandyTao520 (##26525, #26522, #26523, #26516) target deterministic secret redaction, indefinite retry loops, and invalid patch quarantine. The team is systematically hardening the memory subsystem.
- **Sub-Agent Autonomy & Self-Awareness**: Users want agents to autonomously use registered skills and sub-agents without explicit prompting (#21968). Issue #21432 asks the agent to understand its own CLI flags, hotkeys, and capabilities.
- **Remote Agents & Advanced Auth**: EPIC #20303 (Sprint 2) focuses on task-level authentication, 1P agent support, and background processing for remote agent execution.

## Developer Pain Points

1. **Agent Hangs & False Success Reporting** — Issues #21409 (general hang) and #22323 (MAX_TURNS reported as GOAL success) erode trust. Developers can't tell if an agent is actually done or silently stuck.
2. **Sub-Agent Opt-Out Failures** — Issue #22093 reports sub-agents executing without permission after v0.33.0 upgrade, even when explicitly disabled in config. Configuration consistency is fragile.
3. **Tool & Skill Ignorance** — The model frequently creates tmp scripts in random directories (#23571), ignores custom skills (#21968), and uses destructive `git reset` / `--force` when safer alternatives exist (#22672).
4. **Silent Failures** — Disk-full disables recording invisibly (#27277), Auto Memory skips invalid patches silently (#26523), low-signal sessions retry forever (#26522). Developers discover data loss only after the fact.
5. **Shell & Terminal Regressions** — "Waiting input" hangs after command completion (#25166), tmux false-positive background detection (#27572), flicker on terminal resize (#21924), corruption after external editors (#24935). Terminal reliability remains a persistent pain point.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-16

## Today's Highlights
A minor patch (v1.0.63-0) landed with a long-awaited whitespace toggle for `/diff` and a new `deferTools` option for MCP servers. Community attention remains focused on a cluster of regressions in the v1.0.60–v1.0.62 range, especially around MCP spawing, session recovery, and terminal rendering. Two new feature requests for `/chronicle` to ingest VS Code chat history and enhance Claude prompt caching suggest users are pushing the CLI toward a more unified AI assistant experience.

## Releases
**v1.0.63-0** (latest, 2026-06-16)
- **Added:** Press `w` in `/diff` to toggle whitespace-only changes visibility.
- **Added:** `deferTools` option in MCP server config to keep a server’s tools always available, even when tool search is enabled.
- **Improved:** Reliability of OpenAI, Anthropic, and Azure OpenAI request handling.
- **Experimental:** `/rewind` has been removed.

## Hot Issues (Top 10 by Community Activity)

1. **#953** — [Over excessive permissions Request](https://github.com/github/copilot-cli/issues/953)  
   *Why it matters:* A long-standing concern about OAuth scope granularity. Users want repo/area-scoped authentication. 7 comments, 3 👍. No update from maintainers yet.

2. **#3727** — [Regression: `userPromptSubmitted` hook `additionalContext` no longer injected into planner](https://github.com/github/copilot-cli/issues/3727)  
   *Why it matters:* A clear plugin-breaking regression between v1.0.59 and v1.0.60. Affects all users relying on custom hooks. 4 comments, high urgency.

3. **#3282** — [Add multiple BYOK model capability](https://github.com/github/copilot-cli/issues/3282)  
   *Why it matters:* Users running multiple bring-your-own-key models cannot switch mid-session without restarting. 3 comments, 8 👍 — strong demand.

4. **#3781** — [Session enters unrecoverable 400 error when pasting image with non-multimodal model](https://github.com/github/copilot-cli/issues/3781)  
   *Why it matters:* A state corruption bug that wedges the session permanently. Workaround requires manual JSON editing. Now closed but the pattern repeats.

5. **#3756** — [Third-party MCP Servers disabled by enterprise Copilot policy](https://github.com/github/copilot-cli/issues/3756)  
   *Why it matters:* Enterprise users hit a hard policy block with no workaround. Duplicate of #1707. 3 comments, closed without resolution.

6. **#2966** — [Built-in tooling for managing multiple concurrent CLI sessions](https://github.com/github/copilot-cli/issues/2966)  
   *Why it matters:* Power users running `--yolo --autopilot` across repos need session management. 3 comments, 1 👍.

7. **#3813** — [Copy-paste garbled text in VS Code Terminal (Japanese)](https://github.com/github/copilot-cli/issues/3813)  
   *Why it matters:* Recurring UTF-8 mojibake issue; now affecting iTerm2 vs VS Code Terminal differently.

8. **#3808** — [Enhance prompt caching for Claude Sonnet to reduce latency/token costs](https://github.com/github/copilot-cli/issues/3808)  
   *Why it matters:* Users with long system prompts want Anthropic’s explicit prompt caching. 1 comment, opened yesterday.

9. **#3797** — [Different prompt input box layout in two cmd tabs in same window](https://github.com/github/copilot-cli/issues/3797)  
   *Why it matters:* Terminal rendering inconsistency on Windows — confusing UX.

10. **#3814** — [Requests kept failing but AIC consumption kept increasing](https://github.com/github/copilot-cli/issues/3814)  
    *Why it matters:* Silent billing drain during retry loops. Using GPT 5.4 with 400k context. 1 comment, 1 👍.

## Key PR Progress
*Only one PR updated in the last 24 hours:*

- **#3817** — [kCreate "#"](https://github.com/github/copilot-cli/pull/3817)  
  *Status:* Open. Author: edge500. Summary: `aquellos`. Low-quality/spam PR — no substantive changes.

## Feature Request Trends
- **Unified history across tools:** Two new requests (#3816, plus discussion in #3808) ask `/chronicle` to ingest VS Code Copilot Chat sessions and enable Claude prompt caching — pushing toward a single AI assistant timeline.
- **Granular access control:** Issue #953 continues to gather support for repo/area-scoped auth permissions, a common enterprise ask.
- **Multiple BYOK models:** Issue #3282 and #3399 (custom headers) reflect growing demand for multi-model BYOK support with session-switching.
- **Better session management:** #2966 (multi-session tooling) and #3807 (content search in session history) indicate users want richer session lifecycle tools.

## Developer Pain Points
1. **MCP regressions in v1.0.60–v1.0.62:** Spawning loops (#3782), OAuth fan-out (#3706), subagent MCP access loss (#3812) — MCP stability is the #1 pain point this week.
2. **Terminal rendering issues:** Clusters of repeated characters (#3780), output mangling during streaming (#3769), and Windows cmd layout inconsistency (#3797) degrade the core UX.
3. **Copy-paste mojibake on Windows/Linux:** Issues #3776 and #3813 show UTF-8 corruption when copying from WSL/Ubuntu/VS Code Terminal to Windows apps.
4. **Session recovery failures:** Unrecoverable 400 errors (#3781), oversized attachment wedging (#3767), and resume failure on repo name case mismatch (#3694) leave users stuck.
5. **Silent billing during retry loops:** Issue #3814 highlights a trust-destroying scenario: failed requests still consume AIC tokens with no clear feedback.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-16

## Today's Highlights

Two critical bug fixes are landing today via PRs addressing long-standing issues with the `--continue` session resume and the `UserPromptSubmit` hook receiving empty prompts in interactive mode. Meanwhile, a new report of the `FetchURL` tool bypassing system proxy settings highlights ongoing accessibility challenges for developers behind firewalls.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#2402 – Error: [compaction.failed] APIStatusError: 400 The request was rejected because it was considered high risk](https://github.com/MoonshotAI/kimi-cli/issues/2402)**  
   *Updated: 2026-06-16 | Comments: 2*  
   A compaction error during session persistence on Kimi-k2.6. The `400 high risk` classification is unusual for a compaction operation; likely related to content safety checks during background save. Community: single author report, no workaround yet.

2. **[#2303 – UserPromptSubmit hook receives empty prompt when input comes from shell UI](https://github.com/MoonshotAI/kimi-cli/issues/2303)**  
   *Updated: 2026-06-15 | Comments: 1*  
   `UserPromptSubmit` hook always returns `"prompt": ""` in interactive shell, breaking regex-based prompt matching. This is now fixed by PR #2454. Affects all hook-based tooling and custom plugins.

3. **[#2222 – `kimi --continue` errors "No previous session found" despite visible history](https://github.com/MoonshotAI/kimi-cli/issues/2222)**  
   *Updated: 2026-06-15 | Comments: 1*  
   Cross-platform bug (Windows + reported elsewhere). `--continue` fails to find sessions that `kimi` alone loads successfully. Root cause identified and fixed in PR #2453.

4. **[#2455 – FetchURL doesn't read system proxy, fails in blocked environments](https://github.com/MoonshotAI/kimi-cli/issues/2455)**  
   *Updated: 2026-06-15 | Comments: 0*  
   `FetchURL` tool ignores system proxy (`http_proxy`/`https_proxy`) while `curl` and shell work normally. Critical for WSL2/Linux users behind corporate or regional firewalls. No workaround proposed.

5. **[#2401 – `kimi --ext` extension fails to load on first run](https://github.com/MoonshotAI/kimi-cli/issues/2401)**  
   *Updated: 2026-06-14 | Comments: 2*  
   Extensions fail initialization on fresh install unless restarted. Community suspects a race condition in the extension loader. Still open.

6. **[#2390 – Model switch during session loses context window](https://github.com/MoonshotAI/kimi-cli/issues/2390)**  
   *Updated: 2026-06-14 | Comments: 1*  
   Switching models mid-conversation truncates history arbitrarily. Affects power users experimenting with different Kimi variants.

7. **[#2385 – `kimi init` fails on Python 3.13 due to deprecated `ast` API](https://github.com/MoonshotAI/kimi-cli/issues/2385)**  
   *Updated: 2026-06-13 | Comments: 3*  
   Python 3.13 removed `ast.Num`, `ast.Str` nodes. `kimi init` crashes immediately. Community patch exists but upstream hasn't merged.

8. **[#2360 – Output redirection `>` truncates Japanese/Chinese characters](https://github.com/MoonshotAI/kimi-cli/issues/2360)**  
   *Updated: 2026-06-12 | Comments: 5*  
   Unicode surrogate pair handling broken in `>` write; multi-byte CJK characters get corrupted. High interest from Asian developer community.

9. **[#2345 – Memory leak on long-running sessions with `--watch`](https://github.com/MoonshotAI/kimi-cli/issues/2345)**  
   *Updated: 2026-06-11 | Comments: 4*  
   RSS usage grows linearly over time when `--watch` file changes. Confirmed by multiple users with 24h+ sessions.

10. **[#2322 – `kimi config set` does not persist to `~/.config/kimi/` on macOS](https://github.com/MoonshotAI/kimi-cli/issues/2322)**  
    *Updated: 2026-06-10 | Comments: 2*  
    Config written to temp or cwd instead of XDG path on macOS. Settings lost on restart. Affects Apple Silicon users primarily.

## Key PR Progress

1. **[#2454 – fix(hooks): pass prompt text to UserPromptSubmit from structured input](https://github.com/MoonshotAI/kimi-cli/pull/2454)**  
   *Opened: 2026-06-15 | Author: logicwu0*  
   Fixes #2303. Modifies `KimiSoul._turn` to extract `text_input` instead of empty structured prompt. Will enable regex-based hook matching again after merge.

2. **[#2453 – fix(session): resume latest session when last_session_id is missing](https://github.com/MoonshotAI/kimi-cli/pull/2453)**  
   *Opened: 2026-06-15 | Author: logicwu0*  
   Fixes #2222. `Session.continue_` now falls back to scanning `work_dir` history when `last_session_id` is absent. Critical for Windows users.

3. **[#2448 – feat(tool): add `--proxy` flag to FetchURL tool](https://github.com/MoonshotAI/kimi-cli/pull/2448)**  
   *Opened: 2026-06-14 | Author: sunxyw*  
   Explicit proxy configuration for FetchURL; still open for review. Would address #2455 if merged.

4. **[#2442 – fix(init): support Python 3.13 by using `ast.Name` compatible with new syntax](https://github.com/MoonshotAI/kimi-cli/pull/2442)**  
   *Opened: 2026-06-13 | Author: qingfengtsui*  
   Replaces deprecated `ast.Num`/`ast.Str` with `ast.Constant`. Blocked by test coverage gaps.

5. **[#2435 – perf(session): implement incremental compaction to reduce memory pressure](https://github.com/MoonshotAI/kimi-cli/pull/2435)**  
   *Opened: 2026-06-12 | Author: starry97*  
   Splits compaction into smaller writes; may also help #2402 (compaction failure). 3 approvals, awaiting merge.

6. **[#2428 – feat(watch): add dedup interval for file change events](https://github.com/MoonshotAI/kimi-cli/pull/2428)**  
   *Opened: 2026-06-11 | Author: wit_com*  
   Mitigates memory leak in `--watch` by debouncing rapid file changes. Addresses #2345 partially.

7. **[#2420 – fix(config): respect `XDG_CONFIG_HOME` on macOS for config persistence](https://github.com/MoonshotAI/kimi-cli/pull/2420)**  
   *Opened: 2026-06-10 | Author: yunbin*  
   Ensures `kimi config set` writes to proper XDG path on macOS. Fixes #2322.

8. **[#2415 – feat(server): add `/health` endpoint for Kubernetes liveness probes](https://github.com/MoonshotAI/kimi-cli/pull/2415)**  
   *Opened: 2026-06-09 | Author: kevinhui*  
   Adds a simple `GET /health` to the built-in server mode. Useful for containerized deployments.

9. **[#2409 – fix(encoding): use UTF-8 with BOM for output redirection on Windows](https://github.com/MoonshotAI/kimi-cli/pull/2409)**  
   *Opened: 2026-06-08 | Author: wenxuan*  
   Addresses #2360 (CJK truncation). Adds proper surrogate pair handling for all Unicode output files.

10. **[#2398 – chore(deps): bump `openai` from 1.30.0 to 1.35.0](https://github.com/MoonshotAI/kimi-cli/pull/2398)**  
    *Opened: 2026-06-07 | Author: deps[bot]*  
    Routine dependency bump to latest OpenAI SDK. Includes streaming fixes upstream that may help with long responses.

## Feature Request Trends

- **Proxy/firewall support (5 issues):** `FetchURL` ignoring system proxy (#2455), no `--proxy` flag for tools, inability to configure per‑tool proxy.
- **Session management improvements (4 issues):** Better `--continue` fallback (now fixed), session diff/compare, session export/import.
- **Python 3.13+ compatibility (3 issues):** Deprecated AST APIs, removed `imp` module, `distutils` removal.
- **Extension/plugin system (3 issues):** Extension first-load failures, no hot-reload, limited hook surface.
- **Unicode/encoding fixes (2 issues):** CJK truncation in output redirection, emoji handling in interactive mode.

## Developer Pain Points

- **Session persistence fragility**: #2402 (compaction failure), #2222 (missing session on `--continue`), #2345 (memory leak) — core workflow stability remains a top concern.
- **Platform inconsistency**: Windows and macOS users disproportionately affected by config path issues (#2322), shell encoding (#2360), and file watcher bugs (#2345).
- **Network access limitations**: #2455 highlights that agent tools lack proxy awareness, making Kimi Code CLI unusable in many corporate and geoblocked environments.
- **Hook/extension fragility**: #2303 shows hooks can silently fail (empty prompt), degrading custom toolchains without clear error messages.
- **Upgrade latency**: Python 3.13 support (#2385) remains unfixed despite community patches (#2442), blocking users on newer OS distributions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-16

## Today's Highlights
A massive influx of automated PR cleanups landed today, addressing long-standing bugs across session management, LSP integration, and MCP authentication. The community remains focused on two major pain points: memory management (96-comment megathread) and agent sandboxing for file system access (69 comments). Meanwhile, billing and subscription activation issues have spiked, with multiple users reporting payment processing failures.

## Releases
No new releases in the last 24 hours. Latest stable version remains v1.17.7.

## Hot Issues

1. **[#20695 — Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (96 comments, 65 👍)  
   Central issue aggregating memory leak reports. Maintainers specifically request heap snapshots and warn against AI-suggested solutions. Critical for anyone experiencing OOM crashes during long sessions.

2. **[#2242 — Sandbox agent filesystem access](https://github.com/anomalyco/opencode/issues/2242)** (69 comments, 53 👍)  
   Persistent demand for restricting agent terminal/file access to current directory. Community references macOS seatbelt implementations as precedent. No resolution after 10 months.

3. **[#8003 — VS Code Diff Preview for code changes](https://github.com/anomalyco/opencode/issues/8003)** (15 comments, 68 👍)  
   Strong community interest in TUI diff preview improvements. Current TUI struggles with large file diffs. Feature request for VS Code integration to review AI-generated changes.

4. **[#6930 — Anthropic OAuth ban issue](https://github.com/anomalyco/opencode/issues/6930)** (22 comments, 14 👍)  
   User banned after using OpenCode OAuth with Anthropic. Raises critical trust and compliance concerns for users relying on official authentication flows.

5. **[#28567 — Full MCP client capabilities](https://github.com/anomalyco/opencode/issues/28567)** (13 comments, 22 👍)  
   OpenCode's MCP client is behind latest spec. Request for streaming, notifications, and improved tool discovery. MCP ecosystem growth makes this urgent.

6. **[#28957 / #31456 — "Upstream idle timeout exceeded"](https://github.com/anomalyco/opencode/issues/28957)** (14 + 4 comments)  
   Recurring timeout errors, especially with long-running writing-plans skill and slower models. Suggests session/connection management issues.

7. **[#19252 — Build command freezes after completion](https://github.com/anomalyco/opencode/issues/19252)** (10 comments, 7 👍)  
   Build completes but AI hangs, blocking workflow continuation. Particularly affects Maven/Gradle projects.

8. **[#32420 — Paid Go subscription not activating](https://github.com/anomalyco/opencode/issues/32420)** (3 comments, new)  
   Multiple users report payment charged but subscription inactive. No response from support email. Payment/revenue integrity issue.

9. **[#32484 — Build agent worse than subagents](https://github.com/anomalyco/opencode/issues/32484)** (3 comments, new)  
   Consistent empirical report that the dedicated build agent underperforms general/explore subagents across models. Agent specialization quality concern.

10. **[#32200 — macOS trace trap crash on launch](https://github.com/anomalyco/opencode/issues/32200)** (3 comments)  
    `SIGTRAP` crash on Apple Silicon macOS 15.3.1 due to pointer authentication (PAC) trap. Affects users on recent macOS versions.

## Key PR Progress

1. **[#32487 — Configurable cost display currency](https://github.com/anomalyco/opencode/pull/32487)** (OPEN)  
   Adds `display.currency` and `display.currency_rate` config for localized usage cost formatting. Practical UX improvement for international users.

2. **[#32479 — Windows clipboard image paste in TUI](https://github.com/anomalyco/opencode/pull/32479)** (CLOSED)  
   Fixes Ctrl+Shift+V paste for screenshots on Windows by handling FileDrop format. Resolves long-standing Windows TUI limitation.

3. **[#27773 — findSymbol LSP endpoint](https://github.com/anomalyco/opencode/pull/27773)** (CLOSED)  
   Replaces stub `findSymbol` handler with actual `workspaceSymbol` query against active LSP servers. Improves code navigation for IDE-like workflows.

4. **[#27737 — Git snapshot from worktree directory](https://github.com/anomalyco/opencode/pull/27737)** (CLOSED)  
   Fixes git operations running from wrong directory when using worktrees. Essential for users with complex git workflows.

5. **[#27730 — Compact finished overflowed turns](https://github.com/anomalyco/opencode/pull/27730)** (CLOSED)  
   Fixes auto-compaction edge cases where finished assistant turns weren't properly compacted, causing context window waste.

6. **[#27725 — Synthetic authenticate tool for MCPs](https://github.com/anomalyco/opencode/pull/27725)** (CLOSED)  
   Exposes `__authenticate` synthetic tool for MCPs in `needs_auth` state. Enables programmatic OAuth flow activation directly from AI.

7. **[#27704 — MCP auth on toggle in picker](https://github.com/anomalyco/opencode/pull/27704)** (CLOSED)  
   Pressing space on `needs_auth` MCP in `/mcps` picker now triggers OAuth flow instead of failing silently.

8. **[#27702 — Support legacy message rows](https://github.com/anomalyco/opencode/pull/27702)** (CLOSED)  
   Fixes crashes when loading sessions created before `MessageV2` schema migration. Backward compatibility fix.

9. **[#27800 — Lazy-load CLI commands](https://github.com/anomalyco/opencode/pull/27800)** (CLOSED)  
   Defers command-module imports to reduce startup time for `--help`/`--version`/completion. Improves CLI responsiveness.

10. **[#27673 — WSL localhost detection for desktop workspace](https://github.com/anomalyco/opencode/pull/27673)** (CLOSED)  
    Fixes desktop app workspace selection when connecting to WSL-hosted servers via localhost. Critical for Windows + WSL workflows.

## Feature Request Trends

- **Enhanced code review UX**: Strong demand for visual diff preview (VS Code integration, sidebar diff totals, OSC 1337 image support) instead of TUI-only change inspection.
- **MCP ecosystem alignment**: Multiple requests for streaming, notifications, authentication flows, and tool discovery features matching the latest MCP spec.
- **Agent-scoped skills/configuration**: Users want per-agent skill loading and tool configuration, rather than monolithic context injection.
- **Granular file/permission sandboxing**: Growing concern about agent access to `.env` files, project-adjacent directories, and system commands.
- **Session lifecycle management**: Features for session reload (`/reload` command), pending review indicators, and billing-aware session termination.

## Developer Pain Points

- **Memory instability**: The open Memory Megathread (#20695) continues to collect heap snapshot reports. Long sessions with complex workflows regularly trigger OOM.
- **Timeout errors on slow models**: "Upstream idle timeout" (#28957, #31456) consistently frustrates users of free or slower inference models, especially for planning-heavy tasks.
- **Build command hangs**: Terminal processes (Gradle, Maven, long-running builds) complete but agents fail to detect completion, stalling workflows (#19252, #22154).
- **Agent quality inconsistency**: Multiple reports that the "build" agent underperforms general subagents (#32484), undermining trust in specialized agent profiles.
- **Payment/subscription friction**: Cluster of reports (#32420, #32466) about charged but unactivated subscriptions, with unresponsive support — a critical trust issue for a paid product.
- **Platform-specific crashes**: macOS 15.3.1 PAC trap (#32200), Windows CJK path stack buffer overrun (#29033), and false positive antivirus detections (#32350) highlight cross-platform stability gaps.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-16

## Today's Highlights
A high-volume 24-hour period with the release of **v0.79.4** featuring automatic first-run theme detection and a standalone binary distribution. The community is actively debating **OpenAI Codex connection reliability** (Issue #4945, 57 comments) and pressing for **supply chain security defaults** (Issue #5785). A cluster of fixes landed around **bash tool truncation** (PR #5753) and **extension API Promise handling** (PR #5752), addressing two persistent developer pain points.

---

## Releases

### v0.79.4
- **Automatic theme selection** — pi now detects terminal background on first run and defaults to `dark` or `light` theme. [Theme docs](https://github.com/earendil-works/pi/blob/v0.79.4/packages/coding-agent/docs/themes.md#selecting-a-theme)
- **Standalone binary distribution** — platform-specific builds now available as GitHub release assets (separate from npm).

---

## Hot Issues

1. **[#4945 — openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945)** — Open (57 comments, 30 👍)  
   TUI gets stuck on "Working..." with no streamed text or visible errors when using `gpt-5.5`. Recovery requires Escape (aborting the turn). **Impact:** Core UX broken for many daily-driver users.

2. **[#5103 — pi-windows-x64.zip can't detect git-bash from PATH](https://github.com/earendil-works/pi/issues/5103)** — Open (21 comments)  
   Pre-built Windows binary fails to locate Git Bash. **Pain point:** Downstream packaging regression — users on official builds get a different experience than those building from source.

3. **[#5785 — Do not pass --min-release-age=0 to npm on pi update](https://github.com/earendil-works/pi/issues/5785)** — Closed (2 comments)  
   Sharp community criticism: `pi update` overrides npm's supply-chain protection (minimum release age). **Tension:** Feature velocity vs. security posture.

4. **[#5736 — Escape no longer interrupts active interactive task](https://github.com/earendil-works/pi/issues/5736)** — Closed (7 comments)  
   Escape key advertised as interrupt mechanism stopped working reliably. Co-authored with `gpt-5.5` — interesting pattern of AI-assisted bug reporting.

5. **[#5653 — Move off Shrinkwrap](https://github.com/earendil-works/pi/issues/5653)** — Open (10 comments)  
   Duplicate `pi-ai` copies on disk because shrinkwrap hoisting differs from npm's. Causes separate module-level `Map` instances for provider registries. **Core architecture issue.**

6. **[#5363 — Add amazon-bedrock-mantle provider](https://github.com/earendil-works/pi/issues/5363)** — Open (13 comments, 3 👍)  
   Bedrock Mantle models use OpenAI-compatible API, incompatible with existing Converse API provider. A parallel PR (#5509) already in progress.

7. **[#4877 — Session folder collision](https://github.com/earendil-works/pi/issues/4877)** — Open (15 comments)  
   Paths like `/a/b/c/d` and `/a-b/c-d` hash to same session folder. Low severity but design smell in session storage.

8. **[#5755 — Export generateDiffString, generateUnifiedPatch to extensions](https://github.com/earendil-works/pi/issues/5755)** — Open (5 comments)  
   Extension authors need diff utilities for codex-like patching. Signals growing extension ecosystem demand.

9. **[#5208 — pi crashes with uncaughtException on background process late output](https://github.com/earendil-works/pi/issues/5208)** — Closed (5 comments)  
   `ProcessRegistry` finishes output accumulator before `stdout` pipe closes — classic race condition in process management.

10. **[#5774 — pi install/update with npmCommand ["bun"] creates package.json in caller cwd](https://github.com/earendil-works/pi/issues/5774)** — Closed (2 comments)  
    `pi update` from home directory with Bun as npm command polluted user's home with `package.json` and `bun.lock`. Isolation failure.

---

## Key PR Progress

1. **[#5753 — fix: drain stdout before resolving when a child holds the pipe past exit](https://github.com/earendil-works/pi/pull/5753)** — Closed (merged)  
   Fixes #5303: 100ms timer in `waitForChildProcess` was destroying streams too aggressively. Child processes that keep stdout open past exit now get drained before resolution. **Direct fix for `git commit` truncation with pre-commit hooks.**

2. **[#5758 — diagnose when a child holds stdio open past exit](https://github.com/earendil-works/pi/pull/5758)** — Closed (merged)  
   Follow-up to #5753: adds diagnostic logging when detached descendants keep writing after shell exit. Maintains the re-armed grace period to prevent tail truncation.

3. **[#5752 — fix: pi.sendUserMessage/sendMessage return Promise](https://github.com/earendil-works/pi/pull/5752)** — Closed (merged)  
   `await pi.sendUserMessage()` was resolving immediately (~1ms) instead of waiting for agent completion. **Critical for extension reliability in print mode.**

4. **[#5587 — feat: add experimental first-time setup flow](https://github.com/earendil-works/pi/pull/5587)** — Closed (merged)  
   Behind `PI_EXPERIMENTAL=1`: theme selection dialog on first run (detects terminal appearance) + opt-in analytics. Pair with v0.79.4's automatic theme detection.

5. **[#5743 — refactor: decompose generate-models.ts into data-driven generator](https://github.com/earendil-works/pi/pull/5743)** — Closed (merged)  
   Follow-up to #5702: replaces sprawling `if/else` chains in model registry generation with data-driven approach. **Maintainability win** for the provider ecosystem.

6. **[#5765 — feat: split createDPiExtension into remote-executor-extension and multi-agent-extension](https://github.com/earendil-works/pi/pull/5765)** — Closed (merged)  
   Decomposes monolithic d-pi extension into two focused, independently registrable extensions. Enables selective feature loading.

7. **[#5756 — feat: Expose edit-diff for extensions](https://github.com/earendil-works/pi/pull/5756)** — Open  
   Closes #5755: exports `generateDiffString`, `generateUnifiedPatch`, `EditDiffResult` from core tools. Targets extension authors building patch-based agents.

8. **[#5675 — fix: stabilize compaction after reload](https://github.com/earendil-works/pi/pull/5675)** — Closed (merged)  
   Compaction could fail after reload or during queued message delivery. Preserves token boundaries across repeated compactions. **Silent data loss fix.**

9. **[#5762 — Add ZAI-CN (bigmodel.cn) provider](https://github.com/earendil-works/pi/pull/5762)** — Closed (merged)  
   Resolves #4902: new provider for Chinese AI service provider. **Expanding geographic coverage** of pi's provider ecosystem.

10. **[#5509 — feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/5509)** — Open  
    Models after Azure's OpenAI Responses provider. Adds support for GPT 5.5 and 5.4 via Bedrock Mantle. **High-value enterprise integration.**

---

## Feature Request Trends

1. **Provider ecosystem expansion** — Dominant theme: Bedrock Mantle (#5363, #5509), ZAI-CN (#5762), Gemini 3.5 Flash on Vertex (#5761), and generic `auth.json` provider config (#5728). Community wants pi to be a universal AI backend.

2. **Extension API surface growth** — Multiple requests to expose internal utilities: diff generation (#5755), OAuth callback customization (#5372), `sendMessage` Promise semantics (#5751). **Signals maturing extension ecosystem** requiring stable, well-documented APIs.

3. **Security hardening** — Supply chain attack defaults (#5785), SHA256 checksums + provenance attestations for binaries (#5739). Community pushing back against convenience-over-security defaults.

4. **Agent orchestration patterns** — d-pi decomposition (#5765), gentle-ai 4R review agent port (#5771), session sorting by subtree activity in threaded mode (#5784). **Trend toward composable agent architectures.**

5. **Process lifecycle management** — Graceful handling of child processes holding stdio (#5303, #5753), `uncaughtException` on late output (#5208). Underlying infrastructure stability work.

---

## Developer Pain Points

1. **Process output truncation** — Bash tool silently loses output when child processes outlive their parent (pre-commit git hooks, background processes). Multiple related issues (#5303, #5208) with high reproduction rates. **Most painful development UX issue.**

2. **Security defaults vs. developer velocity** — `--min-release-age=0` override (Issue #5785) triggered strong community backlash. Signal that users want explicit opt-in for risk, not silent defaults.

3. **Windows parity gap** — Pre-built Windows zip can't detect Git Bash (#5103). Official binary distribution introduces different behavior than source builds. **Regression for Windows developers.**

4. **Module duplication / architecture debt** — Shrinkwrap causing duplicate `pi-ai` copies (#5653), session folder collisions (#4877), monolithic model registry generator (#5702). **Growing pains from rapid feature addition.**

5. **Core interrupt/resume reliability** — Escape key interrupt broken (#5736), working spinner reappears after response ends (#5008), compaction failures after reload (#5675). **Basic UX primitives showing instability** under concurrent feature pressure.

6. **NPM/Bun isolation failures** — `pi update` with Bun creates files in user's home directory (#5774). Tool chain integration needs sandboxing guarantees.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-16

## Today’s Highlights
The team shipped **v0.18.1** with a critical opt-in gate for daemon shell sessions, alongside **desktop-v0.0.4** fixing MCP server persistence and model defaults. A major `/loop` re-alignment effort is under way, with **eight linked issues** progressing through task-file support, cancellation, and wakeup scheduling. Two high-severity bugs landed: the discontinued OAuth model still appearing in the model picker, and an OOM crash on `/quit` caused by managed auto-memory.

---

## Releases

### v0.18.1
- **Change:** Direct session shell in the daemon now requires explicit opt-in (behind a feature gate).
- **PR:** [QwenLM/qwen-code #5050](https://github.com/QwenLM/qwen-code/pull/5050)

### desktop-v0.0.4
- **Fixes:**
  - MCP server removals now persist across restarts ([#4535](https://github.com/QwenLM/qwen-code/pull/4535))
  - Raw model-derived defaults are refreshed on launch
- **Auto-update feed** points to `desktop-latest`.

---

## Hot Issues (10 selected)

1. **#5142** — *Virtualized History Mode hides history; only visible on slash key*  
   *Priority P2, bug, needs-triage.* The CLI history area is invisible until `/` is pressed; history input also fails to stay at the bottom. 4 comments, no community votes yet.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/5142)

2. **#5160** — *`/model` lists discontinued `qwen-oauth` coder-model even without OAuth*  
   *Priority P2, bug.* Confuses users who never configured OAuth. A community fix PR (#5167) is already open. 3 comments.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/5160)

3. **#5173** — *Model provider disambiguation fails when multiple providers share the same model ID*  
   *Priority P2, bug.* Selecting IdeaLab’s `qwen3.7-max` does not persist if another provider offers the same model ID. 2 comments, author @doudouOUC.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/5173)

4. **#5147** — *OOM after `/quit` when managed auto-memory builds transcript from large text-only history*  
   *Priority P2, bug, performance.* Even with zero tool calls, large histories trigger V8 heap OOM during background auto-memory summarization. 2 comments.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/5147)

5. **#4966** — *SchemaValidator rejects numeric strings for MCP tools (e.g., `"3"` instead of `3`)*  
   *Priority P2, bug, closed.* Repeated tool failures on strict MCP servers; the fix adds numeric-string coercion to the validator. 2 comments.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/4966)

6. **#5101** — *Large tool results repeated through provider history cause context blowup*  
   *Priority P1, bug, closed.* A deterministic provider emits the same large outputs, and Qwen Code re-sends them until the request context exceeds capacity. 2 comments.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/5101)

7. **#5159** — *Trackpad scroll in tmux triggers prompt history instead of viewport scrolling*  
   *Priority P3, bug.* macOS + tmux users cannot scroll conversation history. 2 comments.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/5159)

8. **#3979** — *Plan mode causes continuous screen flicker in Ghostty terminal*  
   *Priority P2, bug, needs-triage.* Terminal-ux regression on macOS, still unresolved since May 9. 2 comments.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/3979)

9. **#5119** — *No way to allow `sudo` commands when agent requests them*  
   *Priority P2, feature-request, closed.* Agent fails ungracefully. Proposal: permission dialogue should detect and allow `sudo` after user confirmation. 2 comments.  
   [GitHub](https://github.com/QwenLM/qwen-code/issues/5119)

10. **#5052** — *PR review job reports green success when Qwen exits early due to API error*  
    *Priority P2, bug, closed.* Mid-review API disconnect causes job to show ✓ but post no comments. 2 comments.  
    [GitHub](https://github.com/QwenLM/qwen-code/issues/5052)

---

## Key PR Progress (10 selected)

1. **#5174** — `feat(cli): Add daemon status API`  
   Read-only `GET /daemon/status` with summary/full levels—reports session counts, rate-limit rejections, permission pressure. Open, no comments yet.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/5174)

2. **#5172** — `docs: fix MCP token path, daemon UI event count, add Feishu channel`  
   Corrects stale documentation (MCP `v2` encrypted file, event count 36→34, new Feishu link). Open.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/5172)

3. **#5175** — `feat(daemon): deliver web-shell mid-turn messages into the running turn`  
   Lets users type during an active turn; messages are drained between tool-execution batches. Open.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/5175)

4. **#5148** — `feat(loop): align /loop command surface and add task-file reader`  
   First slice of the `/loop` overhaul. Adds `/proactive` alias, bare/interval-only defaults, and task-file lookup (no wakeup or tick templates yet). Open.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/5148)

5. **#5167** — `fix(cli): hide unconfigured discontinued OAuth model`  
   Direct fix for #5160—hides the discontinued Qwen OAuth model when user is on another provider. Open.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/5167)

6. **#5141** — `fix(core): Track supported sed edits in file history`  
   Treats safe single-file `sed -i` substitutions as normal edits (previews diff, tracks file history). Open.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/5141)

7. **#5171** — `fix(core): auto-retry transport stream errors before the first chunk`  
   Adds bounded automatic retry for transient transport drops that occur before any content is received. Open.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/5171)

8. **#5168** — `fix: Qwen PR review proxy bypass, stale-worktree cleanup, and footer line break`  
   Three reliability fixes: proxy bypass for review workflow, cleanup of stale worktrees, and fixed markdown footer. Open.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/5168)

9. **#5157** — `Upgrade GitHub Actions for Node 24 compatibility`  
   Upgrades 15+ actions to versions that support Node 24 ahead of Node 20 EOL in April 2026. Open.  
   [GitHub](https://github.com/QwenLM/qwen-code/pull/5157)

10. **#5145** — `feat(cli): show follow-up suggestion in input placeholder`  
    Displays a model-generated follow-up prompt directly in the input area (using the fast model). Open.  
    [GitHub](https://github.com/QwenLM/qwen-code/pull/5145)

---

## Feature Request Trends

- **`/loop` automation overhaul** (8 linked issues): Users want self-paced, cancellable, task-file-driven loop workflows with wakeup scheduling and token-efficient tick templates.  
- **Context/memory improvements** (multiple issues): Automatic context-size warnings for `QWEN.md`, deduplication of large tool outputs in provider history, and managed auto-memory that doesn’t OOM.  
- **Git branch visibility in Desktop UI** (#4769): Users want the current git branch shown prominently, not just in a tooltip.  
- **Token/cost tracking** (PR #4564): Persistent token-usage accounting with daily/monthly breakdowns and CSV/JSON export.  
- **`sudo` command support** (#5119): Agent should be allowed to run `sudo` commands after user confirmation, not force manual copy-paste.

---

## Developer Pain Points

1. **Terminal rendering regressions** — Persistent flickering in Ghostty (#3979) and Tabby (#3949) terminals on macOS, unresolved for over a month.
2. **Model picker confusion** — Discontinued OAuth model appears even without OAuth (#5160), and same-ID models from different providers don’t persist (#5173).
3. **OOM on `/quit`** — Large text-only histories trigger V8 heap exhaustion during background auto-memory summarization (#5147).
4. **Tool-result context bloat** — Repeated large outputs from deterministic providers inflate request context without deduplication (#5101).
5. **CI false positives** — PR review jobs report green success when API failures occur mid-review, masking broken pipelines (#5052).
6. **MCP tool validation fragility** — Strict schemas reject numeric strings from LLMs (#4966); self-hosted LLMs emit non-string param types (#4793).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-16

## Today's Highlights

The project continues its aggressive stabilization cycle under the rebranded `codewhale` binary, with maintainer @Hmbown driving multiple release-blocker and reliability fixes through the queue. A wave of community-contributed provider integrations (DeepInfra, Atlas Cloud) and a WeChat bridge PR signal growing ecosystem adoption. However, persistent sub-agent timeouts and TUI freezes on Windows remain the top pain points, with user frustration evident in several open issues.

## Releases

No new releases in the last 24 hours. The last tagged release remains **v0.8.61**, which shipped the sub-agent headless worker split (#3096) and continued stabilization work.

## Hot Issues

1. **[#2487 – Frequent error: Turn stalled – no completion signal received](https://github.com/Hmbown/CodeWhale/issues/2487)** (13 💬)
   A critical usability blocker in YOLO mode where operations freeze entirely and even `continue` cannot resume. The 13 comments reflect community frustration and ongoing diagnostic attempts. Labeled both `bug` and `enhancement` for v0.8.61.

2. **[#3063 – v0.8.59 Release Tracker: TUI mouse-report leak & runtime safety](https://github.com/Hmbown/CodeWhale/issues/3063)** (11 💬)
   Maintainer tracker for the v0.8.59 stabilization release. Documents the macOS TUI input leak fix and triage of the PR/issue queue before cutting. Closed with the release.

3. **[#1186 – Typed persistent permission rules](https://github.com/Hmbown/CodeWhale/issues/1186)** (9 💬)
   Long-running enhancement for execution policy: allow/deny/ask rules scoped by tool, command prefix, and path. Targeted at v0.9.0. Community interest is high as it directly addresses security concerns.

4. **[#891 – Support Codex /goal long-running task mode](https://github.com/Hmbown/CodeWhale/issues/891)** (8 💬)
   High-impact feature request to port Codex’s persistent objective mode. The 8 comments include architectural discussion on turn-loop continuation and SQLite-backed goals. Closed in favor of #2058.

5. **[#3096 – Split sub-agents into headless worker runtime](https://github.com/Hmbown/CodeWhale/issues/3096)** (8 💬)
   Major architectural refactor for v0.8.61. Moves sub-agents from UI-heavy in-process tasks to lightweight async projections. Closed with the release.

6. **[#3192 – Put CodeWhale on Agent Client Protocol registry](https://github.com/Hmbown/CodeWhale/issues/3192)** (6 💬)
   Community push for Zed and other ACP-compatible editors to discover and install CodeWhale. 6 comments indicate strong interest in ecosystem integration.

7. **[#1812 – TUI freeze on Windows (crossterm poll)](https://github.com/Hmbown/CodeWhale/issues/1812)** (6 💬)
   Persistent Windows 11 freeze bug. Two documented events with logs and thread-state analysis. The crossterm polling path is the suspected root cause; community is seeking a fix.

8. **[#2574 – Provider fallback chain on API failure](https://github.com/Hmbown/CodeWhale/issues/2574)** (4 💬)
   Auto-switch between providers on 401/429/5xx errors instead of requiring manual `/provider` command. 4 comments from users who want zero-touch failover. Originally filed in Chinese.

9. **[#3102 – First-class clarification question requests for agents](https://github.com/Hmbown/CodeWhale/issues/3102)** (4 💬)
   Feature request for agents to ask clarifying questions through modals rather than plain chat messages. Maintainer-tracked for v0.8.62 with UX and reliability labels.

10. **[#2666 – Token and resource usage telemetry during long tasks](https://github.com/Hmbown/CodeWhale/issues/2666)** (3 💬)
    Calls for visible token budget, context pressure, elapsed time, and child-agent status for long-running/multi-agent tasks. Directly addresses the "black box" problem in agent harness testing.

## Key PR Progress

1. **[#3005 – Refactor provider metadata into data-driven registry](https://github.com/Hmbown/CodeWhale/pull/3005)** (Merged)
   Eliminates ~100 hand-maintained match arms across two crates. Moves provider id, display name, aliases, and defaults into a static `PROVIDER_REGISTRY`. A major maintenance win for the growing provider ecosystem.

2. **[#3244 – Retry release lookups and downloads](https://github.com/Hmbown/CodeWhale/pull/3244)** (Merged)
   Fixes transient GitHub release metadata failures with retry logic and fallback URL construction. Closes a common `codewhale update` failure path.

3. **[#3241 – Accept dollar skill aliases (`$skill-name`)](https://github.com/Hmbown/CodeWhale/pull/3241)** (Merged)
   Adds `$skill-name` as a direct alias for skill activation in the composer, alongside existing `/skill` and `/<skill>` flows. Backward compatible.

4. **[#3235 – Add DeepInfra provider support](https://github.com/Hmbown/CodeWhale/pull/3235)** (Merged)
   Community contribution adding DeepInfra (100+ open-source models, DeepSeek V4 included). Config aliases cover "deepinfra", "deep-infra", and "deep_infra".

5. **[#3233 – Persist ask-only permission rules atomically](https://github.com/Hmbown/CodeWhale/pull/3233)** (Merged)
   Extracts persistence foundation from the broader persistent-permissions work. Adds `ConfigStore::append_ask_rules` with atomic writes.

6. **[#3257 – Make app-server the canonical runtime API entrypoint](https://github.com/Hmbown/CodeWhale/pull/3257)** (Merged)
   Delegates `codewhale app-server --http/--mobile` to the existing `serve` runtime path. Preserves legacy behavior. Adds release smoke tests.

7. **[#3206 – WeChat bridge via Feishu and Tencent OpenClaw](https://github.com/Hmbown/CodeWhale/pull/3206)** (Merged)
   Community contribution enabling CodeWhale usage from WeChat by leveraging the existing Feishu bridge. Includes screenshots of the working integration.

8. **[#2986 – Harvest-credit close template + stewardship documentation](https://github.com/Hmbown/CodeWhale/pull/2986)** (Merged)
   Process improvement: harvested PRs now get a close comment naming the contributor and landing commits. Written down from the triage session pattern.

9. **[#3242 – Add workspace_follow_symlinks setting](https://github.com/Hmbown/CodeWhale/pull/3242)** (Open)
   Community PR for symlink-aware directory traversal in walk-based tools and UI components. Still open for review.

10. **[#2239 – i18n Phase 1-4b wiring across 47 files](https://github.com/Hmbown/CodeWhale/pull/2239)** (Open)
    Large localization effort rebasing PR #812. Adds 55 new MessageIds, fixes 109 compile errors. Still open; represents a significant UX improvement for non-English users.

## Feature Request Trends

- **Provider flexibility**: Multiple requests for auto-fallback chains (#2574), dynamic API keys via scripts (#3004), and expanded provider support (DeepInfra #3235, Atlas Cloud #3239, SiliconFlow #2629). The ecosystem is demanding zero-config failover and secret management.
- **Agent UX improvements**: Persistent goal/objective mode (#891, #2058), agent-to-user clarification modals (#3102), and visible token/resource telemetry (#2666). Users want agents that are cooperative and transparent, not black boxes.
- **Ecosystem integration**: Listing on the Agent Client Protocol registry (#3192) and WeChat/Feishu bridges (#3206) show demand for embedding CodeWhale into existing developer workflows and chat platforms.
- **Persistent permissions**: Typed allow/deny/ask rules (#1186) and atomic persistence (#3233) are building toward a mature security model that remembers user decisions across sessions.

## Developer Pain Points

- **Sub-agent reliability**: The 120s API timeout (#1806), stalled YOLO mode (#2487), and task execution freezes (#2739) dominate the bug tracker. Users report that sub-agents for parallel tasks (SOP generation, script review) fail consistently, forcing fallback to serial execution.
- **Windows TUI freezes**: Issue #1812 documents intermittent unresponsiveness on Windows 11 with crossterm polling. Despite multiple releases, the problem reappears, eroding trust among Windows users.
- **Task interruption and resume**: Multiple issues report that cancelling a long task and using `--continue` loses the session entirely (#2739). The lack of mid-turn intervention granularity (#874) compounds this.
- **Chinese-language provider friction**: SiliconFlow and Tencent TokenHub return 401 errors (#2629), and the leading Chinese-language issue (#2574) indicates that users in China face unique API compatibility hurdles.
- **glibc version mismatch**: Issue #1067 shows that the prebuilt binary requires glibc 2.38+, excluding Ubuntu 22.04 LTS and older servers—a significant deployment barrier.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*