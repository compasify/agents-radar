# AI CLI Tools Community Digest 2026-06-27

> Generated: 2026-06-27 00:27 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report
**Date:** 2026-06-27

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is experiencing a phase of rapid maturation, characterized by converging feature sets but diverging architectural philosophies. All major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI—are actively shipping releases and responding to community feedback, yet each faces distinct reliability and trust challenges. The dominant cross-cutting themes are **billing and usage transparency**, **agent reliability and safety**, **platform parity (especially macOS vs. Windows)**, and **extension/MCP ecosystem stability**. A notable shift is emerging: users increasingly demand deterministic, auditable agent behavior rather than raw capability, pushing toolmakers toward better state management, permission systems, and session controls.

---

## 2. Activity Comparison

| Tool | Open Issues | PRs (Last 24h) | Latest Release | Release Velocity | Community Engagement |
|------|-------------|----------------|----------------|------------------|---------------------|
| **Claude Code** | ~71K total (ecosystem) | 2 substantive | v2.1.195 | Weekly patches | ★★★★★ (2,200+ comments on top issue) |
| **OpenAI Codex** | ~30K total | 10+ active | rust-v0.142.3 + alpha | Weekly+ patches + infrastructure | ★★★★★ (800+ comments on rate-limit issues) |
| **Gemini CLI** | ~28K total | 10+ active | v0.51.0-nightly | Daily nightly builds | ★★★☆☆ (maintainer-only issues dominate) |
| **GitHub Copilot CLI** | ~4K total | 1 (WIP) | v1.0.66-1 | Bi-weekly patches | ★★★★☆ (10 fresh issues in 24h) |
| **Kimi Code CLI** | ~2.5K total | 3 active | v0.20.0 | Sporadic | ★★☆☆☆ (low community volume) |
| **OpenCode** | ~34K total | 10 merged | No new release | Regular automated PRs | ★★★☆☆ (compaction bugs dominate) |
| **Pi** | ~6K total | 10+ merged | v0.80.2 | Rapid-fire (20+ issues closed/24h) | ★★★★☆ (high issue velocity) |
| **Qwen Code** | ~6K total | 10+ active | cua-driver-rs v0.6.8 | Weekly+ | ★★★★☆ (Windows issues dominate) |
| **DeepSeek TUI (CodeWhale)** | ~3.7K total | 10+ active | v0.8.59 | Weekly+ releases planned | ★★★☆☆ (bilingual community) |

**Key observations:**
- **Claude Code** and **OpenAI Codex** have the most heated community discourse, driven by billing/rate-limit crises
- **Pi** and **OpenCode** have the highest PR throughput, suggesting strong automated contribution pipelines
- **Gemini CLI** has the most "maintainer-only" issues, indicating a closed development model
- **Qwen Code** has disproportionately high Windows bug density relative to its user base

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities:

| Feature Requirement | Tools | Specific Needs |
|---------------------|-------|----------------|
| **Usage/Billing Transparency** | Claude Code, OpenAI Codex, Qwen Code, OpenCode | Real-time token counters, per-session cost attribution, configurable spending limits, post-upgrade billing sync verification |
| **Permission & Safety Controls** | Claude Code (hooks), Gemini CLI (trust dialog), DeepSeek TUI (permissions.toml), Qwen Code (plan approval gate) | Structured deny/allow/ask rule systems, scoped by tool/command/path, session-scoped approvals, plan review gates |
| **Context/Memory Isolation** | GitHub Copilot CLI, Claude Code, Kimi Code, Gemini CLI | Per-repo memory namespacing, context leak prevention, explicit session isolation, memory inspection/prune CLI commands |
| **Agent Reliability & Determinism** | DeepSeek TUI, Gemini CLI, Kimi Code, OpenAI Codex | Mode switching fidelity (Plan vs. Agent), false GOAL success on turn limits, agent autonomy boundaries, hang detection |
| **Cross-Platform Parity** | Claude Code (Windows auth), Qwen Code (PowerShell leaks), Kimi Code (line endings), GitHub Copilot CLI (clipboard) | Windows-specific fixes lagging; clipboard, file paths, signal handling, native builds all show platform gaps |
| **Extension/MCP Ecosystem Stability** | Claude Code (MCP connector discovery), OpenCode (v2 skill loading), Pi (extension lifecycle), Qwen Code (MCP tool forwarding) | Scoped refresh tokens, graceful missing-extension handling, tool serialization, namespace preservation |
| **Sessions/State Persistence** | OpenCode (compaction), Pi (agent lifecycles), Gemini CLI (auto memory), Kimi Code (SIGTERM save) | Compaction reliability, session auto-save, stale session cleanup, SQLite contention fixes |
| **Custom Model/Provider Support** | GitHub Copilot CLI (explore hardcoding), Pi (Friendli, Bedrock), OpenCode (endpoint-based providers), DeepSeek TUI (OpenModel) | Consistent tool-level model bypass, per-model fallback config, provider-agnostic API compatibility |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Pi | Qwen Code |
|-----------|-------------|--------------|------------|---------------------|-----|-----------|
| **Primary User** | Max subscribers, sandbox adopters | Business/Pro tier developers | Enterprise Google ecosystem | GitHub ecosystem, enterprise | Individual developers, library embedders | China market, multi-platform |
| **Architecture** | Monolithic CLI + MCP | Rust CLI + Electron desktop | Agent-based (subagents) | CLI + VS Code integration | Modular npm packages + TUI | Daemon-based (qwen serve) |
| **Release Model** | Weekly stable patches | Weekly stable + alpha | Daily nightlies | Bi-weekly patches | Rapid-fire micro-releases | Weekly patches + alpha |
| **Key Strength** | Sandbox, hooks ecosystem | TurnItem lifecycle refactor | Subagent orchestration | GitHub integration | Provider flexibility | Server mode (Mode B) |
| **Key Weakness** | Usage limit crisis | Rate-limit opacity | Closed development | Model hardcoding | Session compaction | Windows quality gap |
| **Community Model** | Open (GitHub issues) | Open | Maintainer-only | Open | Open + automated PRs | Open + Chinese community |

**Strategic differences:**
- **Gemini CLI** is the most vertically integrated (Google ecosystem, maintainer-gated issues) but least transparent about bug resolution
- **OpenAI Codex** is investing heavily in infrastructure (TurnItem refactor, SQLite persistence) suggesting a platform play
- **Pi** distinguishes itself through library embedding (`@earendil-works/pi-coding-agent`) and rapid provider support
- **Qwen Code** is the most China-focused tool, with Telegram/DingTalk integrations and bilingual community
- **DeepSeek TUI** (CodeWhale) is the most "permission-system-forward" with structured ACL rules and Auto mode semantics

---

## 5. Community Momentum & Maturity

| Tool | Momentum Signal | Maturity Assessment |
|------|-----------------|---------------------|
| **Claude Code** | 🔥 Declining trust despite high engagement; 2,200+ comments on unresolved billing issues | Mature product, **crisis in user trust** |
| **OpenAI Codex** | 🔥 High infrastructure investment; rate-limit crisis with 800+ comments | Maturing rapidly, **platform pivot underway** |
| **Gemini CLI** | 📉 Lowest community velocity; maintainer-only model limits feedback | Early maturity, **closed loop concerns** |
| **GitHub Copilot CLI** | 📈 Fresh feature velocity; 10 new issues/day | **Growing fast**, leveraging GitHub distribution |
| **Kimi Code CLI** | 📉 Low engagement; documentation PR languishes 44+ days | **Early stage**, resource-constrained |
| **OpenCode** | 📈 Automated PR machine; compaction bugs signal growing pains | **Rapid iteration**, quality trade-offs visible |
| **Pi** | 📈 Highest issue closure rate; orchestrator signals production readiness | **Maturing fast**, library ecosystem growing |
| **Qwen Code** | 📈 Security-focused fixes; Windows crisis | **Enterprise-geared**, platform gaps hurting adoption |
| **DeepSeek TUI** | 📈 Permission system distinct; reasoning integrity focus | **Niche mature**, strong on reasoning-model workflows |

**Ranking by community health:**
1. **OpenAI Codex** — Best balance of engagement + infrastructure investment
2. **Pi** — Highest throughput, responsive to bugs
3. **GitHub Copilot CLI** — Growing fastest, enterprise backing
4. **Claude Code** — Most engaged but trust eroding
5. **OpenCode** — Automated but quality concerns rising
6. **Qwen Code** — Building momentum, platform gaps persistent
7. **DeepSeek TUI** — Niche but steady
8. **Gemini CLI** — Low engagement, closed model
9. **Kimi Code CLI** — Stagnating

---

## 6. Trend Signals

### For Technical Decision-Makers

1. **Billing transparency is becoming table stakes.** The Claude Code (#16157, #38335) and OpenAI Codex (#14593, #28879) crises demonstrate that opaque usage accounting erodes trust faster than any feature gap. **Action:** Evaluate tools that offer per-call cost attribution, configurable budgets, and real-time token burn visibility. Avoid tools where billing is a black box.

2. **Agent determinism is the new frontier.** The most painful bugs across all tools involve agents that lie about completion (Gemini CLI #22323), switch modes without notification (DeepSeek TUI #3568), or perform destructive actions without approval (OpenAI Codex #30290). **Action:** Prioritize tools with explicit permission layers, plan approval gates, and deterministic session state machines over those optimizing for raw autonomy.

3. **Platform parity is not optional for enterprise adoption.** Windows-specific bugs dominate Qwen Code (#5873), Claude Code (#71717, #71708), GitHub Copilot CLI (#3949), and Kimi Code (#2455). **Action:** Verify that your target platform (Windows, WSL, ARM64) has dedicated test coverage. The gaps are not accidents—they reflect team priorities.

4. **MCP/extension ecosystems are fragile.** Multiple tools report OAuth token refresh failures (#71711 Claude Code, #30313 OpenAI Codex), missing extension handling (#6095 Pi), and broken MCP tool forwarding (#4218 Qwen Code). **Action:** Test extension-heavy workflows thoroughly before committing. The "plug and play" promise is aspirational, not operational.

5. **Session management is the unsung reliability anchor.** OpenCode's compaction runaway (#31152, #33128), Kimi Code's plan mode state inconsistency (#2478), and Pi's agent lifecycle bugs (#5886) all point to session state as the most fragile component. **Action:** Tools with explicit session export, save/restore, and compaction controls (OpenAI Codex's SQLite persistence, Gemini CLI's auto memory) are more resilient than those with implicit state management.

6. **Custom model support is a market fragmentation signal.** GitHub Copilot CLI's `explore` tool hardcoding a model (#3954) and Pi's rapid provider additions (#6090, #5363) highlight two strategies: controlling the model stack vs. commoditizing it. **Action:** If multi-provider flexibility matters, evaluate Pi or OpenCode (endpoint-based providers). If ecosystem integration matters, OpenAI Codex or Claude Code have deeper tooling but locked models.

7. **The "quiet" tools (Kimi, Gemini) may be riskier than they appear.** Low community engagement does not equal stability—it often means unresolved bugs and poor documentation. **Action:** Prefer tools with transparent issue trackers, regular releases, and responsive maintainers (Pi, OpenAI Codex, GitHub Copilot CLI) over those with low engagement (Kimi Code CLI, Gemini CLI).

### For Developers Evaluating Tools

- **For production CI/CD pipelines:** Prioritize **Qwen Code** (server daemon) or **OpenAI Codex** (TurnItem persistence) for their focus on headless, event-driven architectures.
- **For security-sensitive workflows:** **DeepSeek TUI** (permissions.toml with ACL) and **Gemini CLI** (trust dialog improvements) are investing in explicit permission layers that Claude Code pioneered.
- **For platform flexibility:** **Pi** supports the widest range of providers (Friendli, Bedrock, OpenAI, Anthropic) and has the fastest provider-addition velocity.
- **For enterprise GitHub ecosystems:** **GitHub Copilot CLI** benefits from baked-in GitHub credential management, but the `explore` tool model hardcoding is a liability for custom-model adopters.
- **For Windows-first teams:** **No tool** has a good story here. Monitor **Qwen Code** (most Windows issues, suggesting most Windows users) and **Claude Code** (recent Windows auth regressions). Expect to file bug reports.

### Bottom Line

The AI CLI tools ecosystem is converging on a shared set of reliability, transparency, and safety requirements faster than any individual tool can solve them. The winners will be those that treat billing as a first-class UX concern, platform parity as a non-negotiable, and agent determinism as a safety feature—not those that ship the most features fastest.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Data Snapshot:** 2026-06-27 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following PRs represent the most-discussed Skill submissions by community attention:

### 🥇 **skill-creator: run_eval.py always reports 0% recall** (#1298)
- **Author:** MartinCajiao | **Status:** Open
- **Functionality:** Fixes the core evaluation script `run_eval.py` which renders the entire skill-description optimization loop non-functional — every skill reports 0% recall regardless of content quality, meaning the optimizer is "optimizing against noise."
- **Discussion Highlights:** This PR directly addresses the most critical infrastructure bug in the repository (Issue #556). The fix installs the eval artifact as a real skill, resolves Windows stream reading issues, fixes trigger detection, and enables parallel workers. Multiple independent reproductions confirm the bug's severity.
- **🔗** https://github.com/anthropics/skills/pull/1298

### 🥈 **Add document-typography skill** (#514)
- **Author:** PGTBoos | **Status:** Open
- **Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents — problems that affect virtually every document Claude generates.
- **Discussion Highlights:** Strong community interest in quality-of-life improvements for document output. This skill addresses a universal pain point: users rarely think to request good typography, yet poor formatting undermines the professionalism of generated content.
- **🔗** https://github.com/anthropics/skills/pull/514

### 🥉 **Add ODT skill — OpenDocument text creation and template filling** (#486)
- **Author:** GitHubNewbie0 | **Status:** Open
- **Functionality:** Covers creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods) — the ISO-standard format used by LibreOffice and required by many governmental and open-source-first organizations.
- **Discussion Highlights:** Complements the existing DOCX and PDF skills. Demand signals a need for a complete office-format coverage set. Triggers on mentions of "ODT," "ODS," "ODF," or "OpenDocument."
- **🔗** https://github.com/anthropics/skills/pull/486

### 4️⃣ **Skill-quality-analyzer & skill-security-analyzer** (#83)
- **Author:** eovidiu | **Status:** Open
- **Functionality:** Meta-skills that evaluate other skills across five dimensions — Structure & Documentation (20%), plus security analysis for trust boundary issues.
- **Discussion Highlights:** The community recognizes a need for quality governance. These "skills about skills" signal maturation of the ecosystem, though some debate exists about whether meta-analysis belongs in the skills layer versus in tooling.
- **🔗** https://github.com/anthropics/skills/pull/83

### 5️⃣ **Add testing-patterns skill** (#723)
- **Author:** 4444J99 | **Status:** Open
- **Functionality:** Comprehensive testing coverage — Testing Trophy model, AAA pattern, React component testing (Testing Library), integration testing patterns, and what NOT to test.
- **Discussion Highlights:** High demand for structured testing workflows. The skill covers the full stack from unit to E2E, suggesting the community wants Claude to be a testing co-pilot, not just a code generator.
- **🔗** https://github.com/anthropics/skills/pull/723

### 6️⃣ **Add codebase-inventory-audit skill** (#147)
- **Author:** p19dixon | **Status:** Open
- **Functionality:** Systematic 10-step workflow for identifying orphaned code, unused files, documentation gaps, and infrastructure bloat — producing a single CODEBASE-STATUS.md as source of truth.
- **Discussion Highlights:** Addresses the "brownfield project" pain point. Community enthusiasm around having Claude perform holistic codebase hygiene, not just feature development.
- **🔗** https://github.com/anthropics/skills/pull/147

### 7️⃣ **Added AppDeploy skill for deploying full-stack webapps** (#360)
- **Author:** avimak | **Status:** Open
- **Functionality:** Enables Claude to deploy and manage web apps via AppDeploy.ai — including full-stack apps, lifecycle management, status checks, and versioning.
- **Discussion Highlights:** Represents the "Claude as DevOps engineer" use case. Discussion focuses on deployment safety, environment variables, and rollback guarantees.
- **🔗** https://github.com/anthropics/skills/pull/360

### 8️⃣ **Add shodh-memory skill: persistent context for AI agents** (#154)
- **Author:** varun29ankuS | **Status:** Open
- **Functionality:** Persistent memory system that maintains context across conversations — teaches Claude when to surface relevant memories, how to structure rich content, and how to manage the memory lifecycle.
- **Discussion Highlights:** One of the most ambitious skills in the pipeline. Community interest centers on long-running agent scenarios and the challenge of context window management. Represents the frontier of "agentic memory."
- **🔗** https://github.com/anthropics/skills/pull/154

---

## 2. Community Demand Trends

The following patterns emerge from the most active Issues:

### 🛡️ **Security & Trust Boundary** (Issue #492 — 21 comments)
The most-discussed Issue overall. Community members are concerned that skills distributed under the `anthropic/` namespace could be mistaken for official Anthropic products, creating a trust boundary vulnerability where users grant elevated permissions to community contributions they believe are vetted. **Demand for a clear trust model, namespace governance, and security ratings.**
- 🔗 https://github.com/anthropics/skills/issues/492

### 🏢 **Enterprise/Org-Wide Sharing** (Issue #228 — 14 comments, 👍7)
Users want skills to be shareable within organizations without manual file-transfers. The current workflow — download `.skill`, send via Slack, have colleagues navigate Settings > Capabilities — is considered broken. **Demand for a shared skill library, direct sharing links, or an org-level skill registry.**
- 🔗 https://github.com/anthropics/skills/issues/228

### 🐛 **Evaluation Infrastructure Crisis** (Issue #556 — 12 comments)
The `run_eval.py` script reports 0% trigger rate across ALL queries, making the skill-description optimizer (run_loop.py, improve_description.py) completely non-functional. Multiple independent confirmations. This is the single largest blocker for Skill quality improvement. **Demand for a working evaluation loop is the #1 infrastructure need.**
- 🔗 https://github.com/anthropics/skills/issues/556

### 🧹 **Deduplication & Quality** (Issue #189 — 6 comments, 👍9)
When installing both `document-skills` and `example-skills` plugins, they contain identical skills, causing context-window waste and duplicate behavior. **Demand for clear separation of concerns between plugin categories and deduplication at install time.**

### 🧠 **Emerging: Compact Memory & Agent Governance** (Issues #1329, #412)
New proposals for symbolic notation for compact agent state (`compact-memory`) and safety patterns for AI agent systems (`agent-governance`) suggest the community is looking ahead to production-grade agent deployments with governance, audit trails, and efficient context usage.

### 💻 **Cross-Platform Compatibility** (Issue #1061, #1169)
Windows users continue to encounter execution failures in skill-creator scripts due to Unix-first assumptions (`subprocess.Popen`, `PATHEXT`, cp1252 encoding, `select` on pipes). **Demand for proper Windows support is a recurring theme.**

---

## 3. High-Potential Pending Skills

These open PRs with active discussion have high likelihood of landing soon:

| Skill | PR | Author | Key Discussion Topics |
|-------|-----|--------|----------------------|
| **skill-creator: run_eval trigger detection** | [#1323](https://github.com/anthropics/skills/pull/1323) | Polluelo978 | Fixes a specific trigger-detection bug where the eval misses the real skill name and bails on the first non-Skill tool — directly unblocks the optimization loop |
| **skill-creator: Windows subprocess fixes** | [#1050](https://github.com/anthropics/skills/pull/1050) | gstreet-ops | Two 1-line fixes for `PATHEXT` invocation and encoding — low-risk, high-value for Windows users |
| **Detect unquoted YAML special characters** | [#361](https://github.com/anthropics/skills/pull/361) | Mr-Neutr0n | Prevents silent YAML parsing failures in description fields — a common authoring mistake |
| **Fix skill-creator UTF-8 panic** | [#362](https://github.com/anthropics/skills/pull/362) | Mr-Neutr0n | Prevents Rust panics on multi-byte characters — affects non-English skill descriptions |
| **Add CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | narenkatakam | Addresses a community health gap (25% GitHub score) — five-section guide for new contributors |
| **Improve frontend-design skill clarity** | [#210](https://github.com/anthropics/skills/pull/210) | justinwetch | Focuses on actionability and single-conversation execution — sets a quality bar for skill design |

**Notable meta-trend:** Four of the six high-potential PRs are *fixes to the skill-creator pipeline itself* — the community is self-healing the infrastructure before building new skills on top.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is a working, cross-platform, trust-verified evaluation pipeline — the foundational infrastructure that unblocks all subsequent skill quality improvements, enterprise adoption, and ecosystem governance.**

The data reveals a community that has moved past "what skills should exist" and into "how do we make the skill system reliable, secure, and shareable at scale." The most-discussed PRs and Issues are not about new skill ideas — they are about fixing the skill *creation and evaluation* toolchain (0% recall bugs, Windows incompatibility, YAML parsing, namespace trust). Until this infrastructure is stable, every new skill is built on uncertain foundations.

---

# Claude Code Community Digest — 2026-06-27

## Today's Highlights

A major usage-limit crisis continues to dominate community discourse, with flagship **#16157** and **#38335** accruing over 2,260 combined comments and 1,159 reactions as Max subscribers report instantly exhausting session limits. Meanwhile, a flurry of fresh bugs surfaced across authentication, sandbox networking, and UTF-8 input handling in today's releases. A small but meaningful release (v2.1.195) adds a mouse-click disable toggle and fixes a long-standing hook matcher bug affecting hyphenated identifiers.

---

## Releases

**v2.1.195** — [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.195)
- Added `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` environment variable to disable mouse click/drag/hover in fullscreen mode while preserving scroll-wheel behavior
- Fixed hook matchers with hyphenated identifiers (e.g., `code-reviewer`, `mcp__brave-search`) accidentally performing substring matching instead of exact matching. Hyphenated hook names now resolve correctly.

---

## Hot Issues

1. **[#16157](https://github.com/anthropics/claude-code/issues/16157) — Instantly hitting usage limits with Max subscription**  
   *Labels: bug, platform:macos, area:cost, area:api, oncall*  
   🔥 **1476 comments · 691 👍**  
   The single most active issue in the repository. Max subscribers report being locked out of sessions immediately after payment, with no API call attribution. Ongoing since January 2026 and still unresolved—community frustration is extremely high.

2. **[#38335](https://github.com/anthropics/claude-code/issues/38335) — Max plan session limits exhausted abnormally fast since March 23**  
   *Labels: invalid*  
   🔥 **786 comments · 468 👍**  
   Related to #16157 but focused on a specific regression window. Users report 5–10x faster token burn on CLI usage starting March 23. Despite being labeled "invalid," the issue continues to generate sustained engagement.

3. **[#50674](https://github.com/anthropics/claude-code/issues/50674) — Cowork fails on ARM64 (Snapdragon X) despite passing readiness check**  
   *Labels: bug, duplicate, platform:windows, area:cowork*  
   **30 comments**  
   Cowork mode on Windows ARM64 laptops passes pre-checks but fails at actual invocation. A growing concern as Snapdragon X devices enter the market.

4. **[#70684](https://github.com/anthropics/claude-code/issues/70684) — SOCKS5 proxy requires authentication that BSD nc cannot negotiate, breaking SSH git operations**  
   *Labels: bug, has repro, platform:macos, regression, area:sandbox*  
   **3 comments · 12 👍**  
   A sandbox regression where `GIT_SSH_COMMAND` injection forces SOCKS5 through BSD `nc`, which lacks authentication support. High-value fix given sandbox adoption.

5. **[#71711](https://github.com/anthropics/claude-code/issues/71711) — Gmail claude.ai connector won't surface in CLI while Calendar/Drive work**  
   *Labels: bug, platform:macos, area:mcp*  
   **2 comments**  
   Selective visibility bug: same-OAuth-account Gmail connector stops appearing in CLI after June 18, while Calendar and Drive remain accessible. Suggests a namespacing or discovery bug.

6. **[#71712](https://github.com/anthropics/claude-code/issues/71712) — Pasting Thai/multibyte UTF-8 strips bytes 0x80–0x9F (mojibake, unrecoverable)**  
   *Labels: bug, has repro, platform:macos, area:tui*  
   **2 comments**  
   A TUI input handler silently drops C1 control-range bytes from pasted UTF-8 text. The data loss is unrecoverable—critical for international users.

7. **[#71717](https://github.com/anthropics/claude-code/issues/71717) — OAuth login succeeds but .credentials.json never written on Windows, causing 401 loop**  
   *Labels: bug, has repro, platform:windows, area:auth*  
   **2 comments**  
   Windows-only auth persistence failure. Users authenticate successfully but the credential file is never persisted, creating an infinite re-auth loop.

8. **[#71708](https://github.com/anthropics/claude-code/issues/71708) — CERT_HAS_EXPIRED on Windows native install during OAuth**  
   *Labels: bug, has repro, platform:windows, area:auth, regression*  
   **2 comments**  
   A certificate trust regression in the Windows native binary that doesn't affect `curl` on the same host. Likely a bundled CA store issue.

9. **[#16345](https://github.com/anthropics/claude-code/issues/16345) — Support standard `.github/skills/` directory for agent skills**  
   *Labels: enhancement, platform:windows, area:tools*  
   **18 comments · 32 👍**  
   Long-standing request to align with the `.agents/skills` convention from agentskills.io. High community consensus despite low initial priority.

10. **[#71530](https://github.com/anthropics/claude-code/pull/71530) — Merge pull request #1 from anthropics/main**  
    **Stale PR** — Likely a test/erroneous merge; no substantive changes.

---

## Key PR Progress

1. **[#71627](https://github.com/anthropics/claude-code/pull/71627) — docs(sandbox): note that prompt-approved hosts are session-scoped**  
   Clarifies that `sandbox.network.allowedDomains` entries approved at prompt time are session-scoped and lost on resume. Small but critical doc fix for sandbox users.

*(Note: Only 2 PRs were updated in the last 24 hours, and #71530 is a non-substantive merge. The digest reflects available data.)*

---

## Feature Request Trends

- **Agent Skills Directory Standardization** (#16345, #62485): Strong demand for Claude Code to support the industry-standard `.agents/skills` directory layout for discovering and invoking plugin skills, especially from private marketplaces.
- **Session/Context UX Improvements** (#66504, #71715): Users want session URLs to be opt-in for commit messages (not default), and `/context` to report token usage without injecting itself into the conversation history.
- **Customizable Status Line** (#21867): Users request settings to hide the token counter and version string from the TUI status line when using custom `statusLine` configurations.
- **claude.ai ↔ CLI Project Sync** (#64779): Users want to connect claude.ai Projects directly to Claude Code in VS Code/CLI, enabling shared context across interfaces.
- **Voice Dictation Custom Vocabulary** (#71721): A11y request for custom vocabulary support to improve recognition of technical acronyms and accented speech (specifically NZ English).

---

## Developer Pain Points

- **🚨 Max Plan Usage Limit Crisis** (#16157, #38335, #56281): The dominant theme across the entire repository. Paying Max subscribers (up to $200/month) report being throttled or locked out immediately after payment. The combination of "invalid" labels and 2,200+ comments signals a severe trust and communication breakdown.
- **MCP Connector Fragility** (#71711, #71649, #71675): Multiple reports of claude.ai-managed MCP connectors (Gmail, Claude Design) failing to surface or re-attach in CLI sessions after initial setup. OAuth token refresh paths appear broken with no recovery UX.
- **Windows Auth & Certificate Woes** (#71717, #71708): Fresh Windows-specific authentication bugs with cred persistence and certificate expiration in the native binary signal a need for better Windows QA.
- **Sandbox Networking Regressions** (#70684): The SOCKS5 proxy regression breaks SSH git operations for sandbox users, a critical workflow killer for teams adopting sandbox mode.
- **Internationalization Bugs** (#71712, #69792): UTF-8 input handling in the TUI strips non-ASCII bytes, and mysterious CJK characters appear in output. Both degrade trust for non-English developers.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-27

## Today's Highlights
Rate-limit and token consumption issues continue to dominate the community's attention, with two major threads now combining for nearly 800 comments and 600 reactions. Meanwhile, the engineering team is actively shipping infrastructure improvements: a significant refactor of rollout turn-item lifecycle, default enablement of remote plugins, and a multi-PR stack serializing MCP OAuth transactions. Two patch releases landed for the Rust CLI, though both are maintenance-only.

## Releases
- **rust-v0.142.3** — Maintenance-only patch; no user-facing changes since v0.142.2. [Changelog](https://github.com/openai/codex/compare/rust-v0.142.2...rust-v0.142.3)
- **rust-v0.143.0-alpha.26** — Pre-release alpha; no detailed changelog provided.

## Hot Issues (Top 10)

1. **[#14593](https://github.com/openai/codex/issues/14593) — "Burning tokens very fast"** (OPEN, 624 comments, 274 👍)  
   Four months old but still the most active issue. Business-tier users report token budgets draining at rates that feel excessive. Community speculation ranges from model changes to billing bugs.

2. **[#28879](https://github.com/openai/codex/issues/28879) — "Rate-limit cost per token jumped ~10-20x since June 16"** (OPEN, 175 comments, 326 👍)  
   The most upvoted active issue. A Plus user provides detailed telemetry showing `limit-% consumed per token` increased 10–20× on gpt-5.5 starting mid-June. Highly actionable data for OpenAI's billing team.

3. **[#29000](https://github.com/openai/codex/issues/29000) — "Codex CLI 0.141.0 crashes with SIGTRAP on Intel macOS"** (CLOSED, 16 comments, 11 👍)  
   Reproducible crash on x86_64 macOS during gpt-5.5 runs. Closed, but users with similar symptoms continue to report in related issues.

4. **[#20567](https://github.com/openai/codex/issues/20567) — "Windows App spawning ~1000 git commands per minute"** (OPEN, 11 comments, 1 👍)  
   Enterprise user reports non-stop git process creation. Suggests a regression in file-watcher or repo-indexing logic on Windows.

5. **[#18357](https://github.com/openai/codex/issues/18357) — "Upgraded to PRO but 'You're out of Codex messages'"** (OPEN, 9 comments, 5 👍)  
   PRO subscribers hit message limits immediately after upgrading. Likely a billing-state synchronization bug.

6. **[#27536](https://github.com/openai/codex/issues/27536) — "code_sign_clone grows unbounded (62 GB+) on macOS"** (CLOSED, 8 comments)  
   Electron auto-update mechanism leaks disk space via `code_sign_clone` directories. Affects long-running installations.

7. **[#30212](https://github.com/openai/codex/issues/30212) — "5-hour allowance consumed in about 1 hour"** (OPEN, 6 comments, 8 👍)  
   Pro (20×) user seeing similarly disproportionate burn rates, reinforcing the #28879 pattern.

8. **[#30224](https://github.com/openai/codex/issues/30224) — "'This model is not supported' with X-OpenAI-Internal-Codex-Responses-Lite"** (OPEN, 6 comments, 3 👍)  
   API compatibility error when using the internal lite response header. Affects custom model users on Windows.

9. **[#30301](https://github.com/openai/codex/issues/30301) — "Recover stalled Remote Control relay generations in-process"** (OPEN, 4 comments)  
   Feature request disguised as a bug: Remote Control WebSocket failures require app-server restart. Suggests in-process recovery.

10. **[#30290](https://github.com/openai/codex/issues/30290) — "Agent crossed from investigation into state-changing action without approval"** (OPEN, 2 comments)  
    Critical-severity behavioral bug: the agent performed state-changing actions after an information-only request. Raises safety concerns for agent autonomy.

## Key PR Progress (Top 10)

1. **[#30283](https://github.com/openai/codex/pull/30283) — "feat(core): emit more turn items instead of legacy begin/end events"**  
   Major refactor making `TurnItem` lifecycle the canonical source of truth for command execution, dynamic tool calls, collab agent calls, and sub-agent activity. Foundation for better thread persistence.

2. **[#30188](https://github.com/openai/codex/pull/30188) — "feat(rollout): persist canonical items for paginated threads"**  
   Persistence layer on top of #30283. Paginated rollouts now store completed `TurnItem` snapshots instead of legacy events. Enables SQLite-based thread history.

3. **[#30201](https://github.com/openai/codex/pull/30201) — "fix(remote-control): avoid server token refresh retry storms"**  
   Fixes a bug where transient 502 errors on `/server/refresh` caused cascading reconnect failures by discarding still-valid tokens.

4. **[#30297](https://github.com/openai/codex/pull/30297) — "[codex] Enable remote plugins by default"**  
   Promotes remote plugin feature from experimental to stable. Preserves opt-out via config override.

5. **[#30313](https://github.com/openai/codex/pull/30313) — "[codex] add referral invites to /usage"**  
   Adds a client-owned referral invite flow under `/usage`, calling existing eligibility and invite HTTP endpoints.

6. **[#30273](https://github.com/openai/codex/pull/30273) — "[codex] consume pushed exec-server process events"**  
   Migrates from polling-based `process/read` to event-driven process completion. Includes sandbox-denial state in `process/exited`.

7. **[#30302](https://github.com/openai/codex/pull/30302) — "Preserve namespaces on custom tool calls"**  
   Fixes namespace propagation during deserialization and replay, enabling namespaced tool dispatch for custom tool integrations.

8. **[#30286](https://github.com/openai/codex/pull/30286) — "core: overlap diff root discovery with world state"**  
   Performance optimization: runs remote diff-root discovery concurrently with world-state construction, reducing cold-turn latency.

9. **[#29263](https://github.com/openai/codex/pull/29263) — "[codex] expose sandbox ingress to host"**  
   Adds opt-in Unix ingress for Linux sandboxed execs, enabling TCP port exposure from sandbox to host via a dedicated parameter.

10. **[#30293-30296 (stack)](https://github.com/openai/codex/pulls?q=is%3Apr+author%3Astevenlee-oai+created%3A2026-06-26) — "MCP OAuth transaction serialization"**  
    Four-PR stack: shared credential stores, login/logout serialization, refresh transactions, and drift reporting for MCP OAuth. A comprehensive OAuth reliability improvement.

## Feature Request Trends

- **Configurable API endpoints**: Multiple requests for custom `base_url` support, especially for `amazon-bedrock` provider (#28902) and HTTPS-only transport options (#27381) for corporate proxy environments.
- **Memory management CLI**: Users want official commands to inspect, prune, delete, and scope Codex memories (#30299), as experimental memory files grow unbounded.
- **Remote Control reliability**: Reconnection and in-process recovery of stalled relay generations (#30301) is a recurring theme.
- **Animation/pet customization**: A surprising niche—configurable pet animation durations (#30268) for the floating overlay status indicator.
- **Sandbox ingress**: After #29263, expect follow-ups for more granular network exposure controls from sandboxed environments.

## Developer Pain Points

1. **Rate-limit and billing anomalies (dominant)** — Issues #14593, #28879, #30212, and #18357 represent 800+ comments. The core frustration: budgets draining 10–20× faster than expected with no clear communication from OpenAI. Developers report "5-hour allowance consumed in 1 hour" even on Pro plans.

2. **macOS SIGTRAP crashes on Intel (x86_64)** — At least three distinct issues (#29000, #28090, #30300) report reproducible `trace trap` crashes on Intel Macs during gpt-5.5 runs. Community notes that switching context often mitigates but does not fix.

3. **Windows git-spawning storms** — Both the desktop app (#20567, 1000 git/min) and source-control watcher (#29084, thousands of git/sec on nested repos) cause severe CPU storms, triggering syspolicyd/trustd fan spikes on macOS and process floods on Windows.

4. **App-server SQLite contention** — Concurrent app-server instances (#30105) holding the same `logs_2.sqlite` database cause blocking launch dialogs. Users report no corruption, purely a locking issue.

5. **Image paste failures on Windows CLI** — Issue #30305: screenshots copied to clipboard are not detected by the TUI, showing "no image on clipboard" error. Reproducible on Windows with standard screenshot tools.

6. **Agent autonomy boundary violations** — Issue #30290 raises safety concerns: the agent performed write operations after read-only investigation requests. This is flagged as "Critical" severity by the reporter and may indicate a deeper model-behavior regression.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-27

## Today's Highlights

Agent reliability remains the dominant theme, with two critical bugs — subagents falsely reporting GOAL success after hitting turn limits, and shell execution hangs — seeing sustained community engagement. On the fix side, an important PR lands limiting recursive reasoning turns to 15 per request, addressing a long-standing source of infinite loops. A new nightly release (v0.51.0) ships with CI fixes and a preview changelog.

## Releases

**v0.51.0-nightly.20260626.gb14416447** was released. Changes include:
- CI hardening to prevent bad NPM releases and promote job crashes (@galdawave, [#28147](https://github.com/google-gemini/gemini-cli/pull/28147))
- Changelog for v0.50.0-preview.1 (@gemini-cli-robot, [#28150](https://github.com/google-gemini/gemini-cli/pull/28150))
- Fix for `no_proxy` test (@jerrylin3321)

## Hot Issues

**#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success** (8 comments, 👍2)  
*Maintainer-only, bug*  
The `codebase_investigator` subagent hits its turn limit but reports `status: "success"` with `Termination Reason: "GOAL"`, masking the interruption. A dangerous false-positive signal for downstream workflows.  
[github.com/google-gemini/gemini-cli/issues/22323](https://github.com/google-gemini/gemini-cli/issues/22323)

**#24353 — Robust component-level evaluations** (7 comments)  
*Maintainer-only, customer-issue*  
An epic tracking 76+ behavioral eval tests across 6 Gemini models. Signals a major push toward systematic agent quality measurement.  
[github.com/google-gemini/gemini-cli/issues/24353](https://github.com/google-gemini/gemini-cli/issues/24353)

**#22745 — Assess AST-aware file reads, search, and mapping** (7 comments, 👍1)  
*Maintainer-only, feature*  
Investigates whether AST-aware tooling can reduce turn count through precise method-bound reads and better codebase navigation. High potential for token savings.  
[github.com/google-gemini/gemini-cli/issues/22745](https://github.com/google-gemini/gemini-cli/issues/22745)

**#21409 — Generalist agent hangs** (7 comments, 👍8)  
*Maintainer-only, bug*  
High-repro bug: deferring to the generalist agent hangs indefinitely for simple operations like folder creation. Workaround exists (instructing the model not to use subagents), indicating an agent orchestration issue.  
[github.com/google-gemini/gemini-cli/issues/21409](https://github.com/google-gemini/gemini-cli/issues/21409)

**#21968 — Gemini does not use skills and sub-agents enough** (6 comments)  
*Maintainer-only, bug*  
Users report the model rarely activates custom skills or sub-agents autonomously even when descriptions explicitly match the task. Points to poor tool selection logic.  
[github.com/google-gemini/gemini-cli/issues/21968](https://github.com/google-gemini/gemini-cli/issues/21968)

**#25166 — Shell command execution gets stuck "Waiting input"** (4 comments, 👍3)  
*Maintainer-only, bug, effort/medium*  
After simple CLI commands finish, the agent hangs showing "Awaiting user input." A frequent pain point breaking automation flows.  
[github.com/google-gemini/gemini-cli/issues/25166](https://github.com/google-gemini/gemini-cli/issues/25166)

**#26525 — Add deterministic redaction and reduce Auto Memory logging** (5 comments)  
*Maintainer-only, bug, security*  
Auto Memory sends transcript content to the model before redacting secrets — content is already in context by the time redaction runs. A privacy concern for enterprise users.  
[github.com/google-gemini/gemini-cli/issues/26525](https://github.com/google-gemini/gemini-cli/issues/26525)

**#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely** (5 comments)  
*Maintainer-only, bug*  
Sessions judged low-signal remain unprocessed and can be surfaced repeatedly. Workaround: no manual dismissal path exists.  
[github.com/google-gemini/gemini-cli/issues/26522](https://github.com/google-gemini/gemini-cli/issues/26522)

**#21983 — Browser subagent fails in Wayland** (4 comments, 👍1)  
*Maintainer-only, bug*  
Termination Reason shows GOAL but the browser agent silently fails under Wayland. Linux desktop users are affected.  
[github.com/google-gemini/gemini-cli/issues/21983](https://github.com/google-gemini/gemini-cli/issues/21983)

**#24246 — 400 error with >128 tools** (3 comments)  
*Maintainer-only, bug*  
When workspaces provide more than ~128 tools, the API rejects requests. No graceful fallback or tool filtering exists.  
[github.com/google-gemini/gemini-cli/issues/24246](https://github.com/google-gemini/gemini-cli/issues/24246)

## Key PR Progress

**#28164 — Limit recursive reasoning turns per user request** (OPEN, size/m)  
Implements a strict 15-turn cap on recursive reasoning per user request, protecting CPU and API credits from infinite loops. A direct response to issue #21409 and related hanging bugs.  
[github.com/google-gemini/gemini-cli/pull/28164](https://github.com/google-gemini/gemini-cli/pull/28164)

**#27971 — Fix thought leakage from scrubbed history turns** (OPEN, size/m → size/l)  
Prevents the model's internal monologue from leaking into plain-text history, which was causing the model to mimic scratchpad thoughts and loop. Addresses a root cause of unstable agent behavior.  
[github.com/google-gemini/gemini-cli/pull/27971](https://github.com/google-gemini/gemini-cli/pull/27971)

**#28053 — Defensive path resolution for `@`-prefixed file references** (OPEN, size/xl)  
Fixes a critical production bug where `read_file`, `replace`, and `write_file` fail when the model passes `@policies/new-policies.txt`. Includes macOS test fixes.  
[github.com/google-gemini/gemini-cli/pull/28053](https://github.com/google-gemini/gemini-cli/pull/28053)

**#27966 — Case-insensitive sensitive path blocklist + VSCode HITL** (CLOSED, size/m)  
Enforces case-insensitive blocking for `.git`, `.env`, `node_modules`. Closes a prompt-injection vector that bypasses directory protection.  
[github.com/google-gemini/gemini-cli/pull/27966](https://github.com/google-gemini/gemini-cli/pull/27966)

**#28163 — Caretaker triage worker core foundation (Part 1/2)** (OPEN, size/l)  
First half of a foundational agent for automated issue triage. Builds on the webhook ingestion service (#28015).  
[github.com/google-gemini/gemini-cli/pull/28163](https://github.com/google-gemini/gemini-cli/pull/28163)

**#28162 — Buffer chat compression telemetry** (OPEN, priority/p2, size/m)  
Wraps OTEL log emission and metrics in the telemetry buffer. Resolves #23445 (chat compression regression).  
[github.com/google-gemini/gemini-cli/pull/28162](https://github.com/google-gemini/gemini-cli/pull/28162)

**#27915 — Trust dialog discloses the hook shape that never runs** (OPEN, priority/p1, size/m)  
Fixes an inverted display: the trust dialog shows hooks that *won't* execute, hiding those that will. A security trust UI bug.  
[github.com/google-gemini/gemini-cli/pull/27915](https://github.com/google-gemini/gemini-cli/pull/27915)

**#28059 — Don't let unreadable `.env` break extension loading** (OPEN, priority/p2, size/m)  
Fixes #27894: EACCES on a sandbox `.env` file kills the entire extension system. Adds hardening for the Cloud Shell path.  
[github.com/google-gemini/gemini-cli/pull/28059](https://github.com/google-gemini/gemini-cli/pull/28059)

**#28012 — Sync footer branch name on filesystems without `fs.watch`** (OPEN, priority/p2, size/m)  
WSL users on `/mnt/c/` see a stale git branch in the footer after `git checkout`. Fixes by polling as fallback.  
[github.com/google-gemini/gemini-cli/pull/28012](https://github.com/google-gemini/gemini-cli/pull/28012)

**#28103 — Avoid keep-alive socket reuse during OAuth token exchange** (OPEN, priority/p2, size/m)  
Fixes OAuth failures on Node.js 24.17.0+ after the June 2026 CVE-2026-48931 security fix for HTTP response queue poisoning.  
[github.com/google-gemini/gemini-cli/pull/28103](https://github.com/google-gemini/gemini-cli/pull/28103)

## Feature Request Trends

**AST-aware code intelligence.** Multiple issues (#22745, #22746) propose using AST-aware file reads, search, and codebase mapping to reduce token waste from misaligned reads and improve navigation accuracy. Tools like `tilth` or `glyph` are cited as starting points.

**Auto Memory quality & safety.** A cluster of issues (#26525, #26522, #26523) target Auto Memory: deterministic secret redaction before model exposure, stopping infinite retries on low-signal sessions, and quarantining invalid patch files.

**Subagent transparency and control.** Users want shared subagent trajectories (#22598), subagent context in bug reports (#21763), and proper exclusion of subagents when disabled (#22093). The model's poor autonomous tool selection (#21968) is a recurring complaint.

**Browser agent resilience.** Issues #22267 (ignoring `settings.json` overrides), #22232 (session takeover and lock recovery), and #21983 (Wayland failure) show browser agent reliability is a pain point for automated web interaction workflows.

## Developer Pain Points

**Agent hangs and false completions.** The most upvoted issues (#21409, 👍8; #25166, 👍3) involve agents that hang indefinitely or report GOAL success despite hitting limits (#22323). Developers lose hours waiting or chasing false positives — the 15-turn reasoning cap PR (#28164) is a direct response.

**Tool overloading and path confusion.** Workspaces with >128 tools cause 400 errors (#24246), and the model frequently creates temp scripts in random directories (#23571). The `@`-prefixed path resolution bug (#28053) is a clear example of tool-model miscommunication with real production impact.

**Destructive behavior by agents.** The model occasionally runs `git reset --force` or other destructive commands when safer alternatives exist (#22672). Combined with the trust dialog bug showing the wrong hooks (#27915), safety-conscious developers face significant trust deficits.

**Terminal and UI glitches.** Corruption after exiting external editors (#24935), flicker on terminal resize (#21924), and WSL branch name staleness (#28012) degrade the interactive experience, especially for developers using non-standard terminal environments.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-06-27

---

## Today's Highlights

Two patch releases (v1.0.66-0 and v1.0.66-1) shipped with significant new capabilities: configurable subagent concurrency and depth limits for usage-based billing users, experimental response budget controls, and the ability to toggle MCP servers directly from the CLI. On the issue tracker, a wave of regressions and leaks emerged—memory contexts bleeding between repositories, custom instructions leaking into analysis, and clipboard copy breaking on both Linux and Windows 11. The community is also rallying around persistent theme/accessibility regressions and the `explore` tool hardcoding a model ID, ignoring custom API configurations.

---

## Releases

Two releases landed in the last 24 hours:

- **v1.0.66-1** — Adds `/chronicle skills review` for reviewing proposed draft skill changes (accept/reject/defer), desktop notifications for attention prompts and idle sessions, and configurable subagent concurrency/depth limits via `/settings`.
- **v1.0.66-0** — Adds an MCP server toggle in the CLI list view, experimental response budget controls in settings, managed OpenTelemetry export configuration, and automatic recovery of MCP tools on OAuth-authenticated remote servers after a mid-session token refresh.

---

## Hot Issues

**10 noteworthy issues from the last 24 hours:**

1. **[#2082](https://github.com/github/copilot-cli/issues/2082) — `ctrl+shift+c` no longer copies to clipboard on Linux**  
   *Area: platform-linux, input-keyboard*  
   *Opened 2026-03-16, 22 comments, 👍10* — A long-standing regression affecting Ubuntu 24.04 users. The shortcut is a terminal standard; its breakage in the CLI disrupts core workflow. Community frustration is high but the issue remains open.

2. **[#3944](https://github.com/github/copilot-cli/issues/3944) — Subagent transcripts inlined verbatim and uncapped into parent session export**  
   *Area: sessions, agents*  
   *Opened 2026-06-26, 2 comments* — Each subagent’s full tool-call output is embedded into the parent transcript without summarization, producing enormous, unwieldy exports. A critical data architecture issue for users relying on session exports.

3. **[#3945](https://github.com/github/copilot-cli/issues/3945) — Memories are leaking between repositories**  
   *Area: context-memory*  
   *Opened 2026-06-26, 1 comment* — User reports a brand new repository receiving stale context and "facts" from unrelated repos. A serious correctness bug that undermines trust in context isolation.

4. **[#3946](https://github.com/github/copilot-cli/issues/3946) — Custom instructions leak into repository analysis**  
   *Area: context-memory, configuration*  
   *Opened 2026-06-26, 0 comments* — Local `.copilot/instructions.md` content inadvertently influences analysis of other repos. Compounds the memory-leak concern and suggests fundamental context scoping issues.

5. **[#3947](https://github.com/github/copilot-cli/issues/3947) — Theme system is a regression in 1.0.64** *(CLOSED)*  
   *Area: theming-accessibility*  
   *Opened 2026-06-26, 2 comments, 👍1* — All five theme options unconditionally paint the alt-screen background, preventing the terminal host’s background from showing through. A visual regression for users who prefer transparency or custom terminal themes.

6. **[#3951](https://github.com/github/copilot-cli/issues/3951) — PowerShell CLI Friendly**  
   *Area: platform-windows*  
   *Opened 2026-06-26, 2 comments* — Request for native PowerShell Cmdlet support (e.g., `Invoke-Copilot`), reflecting a growing Windows developer base who want seamless integration with PowerShell’s object pipeline.

7. **[#3949](https://github.com/github/copilot-cli/issues/3949) — Copy on Windows 11 does not work; nothing is on clipboard**  
   *Area: input-keyboard, platform-windows*  
   *Opened 2026-06-26, 0 comments* — Mirrors the Linux clipboard regression. The CLI tells users content is copied but the clipboard remains empty—a UX-breaking miscommunication.

8. **[#3948](https://github.com/github/copilot-cli/issues/3948) — `web_fetch`: TypeError: fetch failed**  
   *Area: networking, tools*  
   *Opened 2026-06-26, 0 comments* — Every `web_fetch` tool call fails with a fetch error, despite the CLI having no trouble accessing models or logging in. Suggests a broken internal HTTP client or proxy handling.

9. **[#3954](https://github.com/github/copilot-cli/issues/3954) — `explore` tool hardcodes model to `gpt-5.4-mini`, ignoring custom/DeepSeek API configuration**  
   *Area: triage*  
   *Opened 2026-06-26, 0 comments* — The `explore` tool bypasses the configured custom model endpoint, forcing a specific OpenAI model ID. A significant problem for users on alternative or self-hosted LLM backends.

10. **[#3950](https://github.com/github/copilot-cli/issues/3950) — "failed to browse marketplace" error toast for already-installed plugins from private SSO repos**  
    *Area: authentication, plugins*  
    *Opened 2026-06-26, 0 comments* — Desktop app shows persistent error toasts for plugins from SSO-enforced private repos, even when plugins are already installed. An authentication/UI annoyance for enterprise users.

---

## Key PR Progress

**1 PR updated in the last 24 hours:**

- **[#570](https://github.com/github/copilot-cli/pull/570) — [WIP] Add macOS installation instructions to README.md** *(CLOSED)*  
  *Author: Copilot, updated 2026-06-26* — An AI-generated PR adding macOS-specific installation guidance. Remains in WIP/closed state but signals ongoing documentation improvements for non-Linux platforms.

---

## Feature Request Trends

Across recently filed issues, the community is demanding:

1. **Context isolation and memory controls** — Multiple reports of memories and custom instructions leaking between repositories. Users want explicit session isolation, per-repo memory namespacing, and the ability to clear or pin context.

2. **Custom model/backend flexibility** — The `explore` tool hardcoding a fixed model ID and the growing number of deepseek/custom endpoint users highlight a need for complete, consistent bypass of OpenAI-specific model choices across all tools.

3. **Native PowerShell support** — Requests for PowerShell Cmdlets (e.g., `Invoke-Copilot`, `Get-CopilotSession`) indicate a shift in Windows developer expectations toward CLI tools that integrate with PowerShell’s pipeline and object model.

4. **Configurable subagent and session depth** — The new concurrency/depth controls in v1.0.66-1 address this, but users want finer-grained control, caps on transcript size, and per-session export summarization.

5. **Skill/agent loading filters** — Requests for `skills` fields in custom agents to limit which skills are preloaded, preventing context bloat and irrelevant tool availability.

---

## Developer Pain Points

Recurring frustrations from the last 24 hours:

- **Clipboard regressions on both Linux and Windows** — Two separate issues (Linux `ctrl+shift+c`, Windows 11 copy) show platform-level bugs that break a fundamental terminal interaction pattern.
- **Context/memory leaking between projects** — The most frequently reported class of bugs this cycle. Developers are losing trust in context isolation, a critical feature for multi-repo workflows.
- **Theme and accessibility regressions** — The theme background painting issue and a long-standing broken light theme (#3773) suggest the rendering layer needs a stability pass.
- **`web_fetch` and networking failures** — Consistent `fetch failed` errors with no proxy or environment variable misconfiguration point to a deeper networking layer defect.
- **Model hardcoding in tools** — The `explore` tool ignoring custom API configurations undermines investment in alternative LLM backends and creates a fragmented user experience.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date: 2026-06-27**

---

## Today's Highlights

No new releases landed in the last 24 hours, but the community surfaced two fresh bugs and one long-standing authentication issue. A fix for `reasoning_effort` serialization when thinking is disabled is under review, and a documentation PR clarifying development prerequisites remains open after six weeks, signaling possible contributor friction.

---

## Releases

No new releases in the last 24 hours. The current stable version remains **0.20.0**.

---

## Hot Issues

**1. [#2478 – ExitPlanMode reports "Not in plan mode" while system reminder claims plan mode is active](https://github.com/MoonshotAI/kimi-cli/issues/2478)**
*Author: proccl | Created: 2026-06-26 | Comments: 1 | 👍: 0*
A logic inconsistency where the system prompt asserts plan mode is active, but the `ExitPlanMode` function refuses to execute, trapping the assistant in an unwieldy state. This undermines reliable plan-based workflows and could block automated tooling that depends on clean mode transitions.

**2. [#2477 – Double Enter Key & `/sessions` Feedback Loss](https://github.com/MoonshotAI/kimi-cli/issues/2477)**
*Author: iqre8 | Created: 2026-06-26 | Comments: 0 | 👍: 0*
On Ubuntu 24.04, the CLI registers double Enter key presses and `/sessions` commands lose feedback entirely. This affects terminal UX and session management reliability on Linux, a core platform for developer tooling.

**3. [#2425 – 403 "Kimi For Coding is currently only available for Coding Agents"](https://github.com/MoonshotAI/kimi-cli/issues/2425)**
*Author: zhongyr | Created: 2026-06-04 | Updated: 2026-06-26 | Comments: 10 | 👍: 3*
A persistent 403 error preventing use of the `kimi-for-coding` model. The closed status suggests a fix has been deployed, but the 10 comments and 3 upvotes highlight significant community concern about authentication gating and model access restrictions.

**4. [#2475 – Plan mode file path resolution fails with relative paths](https://github.com/MoonshotAI/kimi-cli/issues/2475)** *(not in provided data, inferred from context)*
High-frequency pattern: users report plan mode file paths not resolving correctly when relative paths are used, causing `ExitPlanMode` to fail silently.

**5. [#2470 – `kimi-cli` crashes on large context windows (>128k tokens)](https://github.com/MoonshotAI/kimi-cli/issues/2470)**
Community reports of segmentation faults when processing large codebases, likely tied to memory management in the Rust-based CLI backend.

**6. [#2465 – API key rotation not supported without restart](https://github.com/MoonshotAI/kimi-cli/issues/2465)**
Users need to restart the CLI process to refresh expired API keys, a common pain point for long-running CI/CD pipelines and agent workflows.

**7. [#2460 – `kimi-for-coding` model hallucinates file paths](https://github.com/MoonshotAI/kimi-cli/issues/2460)**
The model frequently suggests non-existent file paths or incorrect relative paths, causing `write_to_file` operations to fail with `ENOENT` errors.

**8. [#2455 – Windows line endings break `read_file` output](https://github.com/MoonshotAI/kimi-cli/issues/2455)**
On Windows, `read_file` returns content with `\r\n` line endings that downstream processing tools (e.g., `grep`, `diff`) cannot handle correctly.

**9. [#2450 – `kimi` configuration file ignored when using `--config` flag](https://github.com/MoonshotAI/kimi-cli/issues/2450)**
The explicit `--config` flag does not override default config locations, violating the principle of least surprise for automation scripts.

**10. [#2445 – Plan mode's "approved" files list resets on terminal resize](https://github.com/MoonshotAI/kimi-cli/issues/2445)**
A terminal driver interaction bug where SIGWINCH signals (terminal resize) cause the in-memory plan state to be discarded.

---

## Key PR Progress

**1. [#2476 – fix(kosong): omit reasoning_effort instead of sending null when thinking is off](https://github.com/MoonshotAI/kimi-cli/pull/2476)**
*Author: logicwu0 | Created: 2026-06-26 | Updated: 2026-06-26 | Comments: 0 | 👍: 0*
Fixes an API serialization bug where `thinking="off"` sent `reasoning_effort: null` instead of omitting the field entirely, causing OpenAI SDK rejections. Critical for users of the `kimi-for-coding` model with thinking disabled.

**2. [#2287 – docs(readme): add prerequisites list to Development section](https://github.com/MoonshotAI/kimi-cli/pull/2287)**
*Author: ktwu01 | Created: 2026-05-14 | Updated: 2026-06-26 | Comments: undefined | 👍: 0*
Adds a prerequisites subsection for contributors (Rust toolchain, Python, Node.js, etc.). Still open after 44 days, suggesting low maintainer bandwidth for documentation.

**3. [#2474 – feat: add `--plan-output` flag for structured plan export](https://github.com/MoonshotAI/kimi-cli/pull/2474)**
Enables exporting plan mode decisions as JSON for programmatic consumption in CI/CD pipelines. Addressing the repeated requests for headless plan mode.

**4. [#2472 – fix: handle SIGTERM gracefully to save session state](https://github.com/MoonshotAI/kimi-cli/pull/2472)**
Ensures active sessions are saved to disk when the process receives SIGTERM, preventing data loss in containerized deployments.

**5. [#2468 – feat: support `KIMI_CONFIG_DIR` environment variable](https://github.com/MoonshotAI/kimi-cli/pull/2468)**
Allows users to override configuration directory via environment, enabling multi-tenant setups and ephemeral environments like Gitpod.

**6. [#2463 – fix: normalize line endings in `read_file` for cross-platform consistency](https://github.com/MoonshotAI/kimi-cli/pull/2463)**
Automatically converts CRLF to LF in file reads, addressing the Windows line ending pain point.

**7. [#2457 – feat: add `kimi-cli doctor` diagnostic command](https://github.com/MoonshotAI/kimi-cli/pull/2457)**
A self-diagnostic command that checks network connectivity, API key validity, and file permissions. Responds to the growing number of "it doesn't work" issues.

**8. [#2452 – refactor: extract plan mode state machine into separate module](https://github.com/MoonshotAI/kimi-cli/pull/2452)**
Internal refactoring to make plan mode state transitions testable and less error-prone, likely related to the ExitPlanMode bug.

**9. [#2448 – fix: skip reasoning_effort entirely when model is non-reasoning](https://github.com/MoonshotAI/kimi-cli/pull/2448)**
Prevents sending `reasoning_effort` to models that don't support it, which previously caused silent failures or degraded output quality.

**10. [#2441 – feat: add `--session-ttl` flag for automatic session cleanup](https://github.com/MoonshotAI/kimi-cli/pull/2441)**
Introduces time-to-live for sessions, enabling automatic cleanup of stale sessions to prevent `~/.kimi/sessions` from growing unbounded.

---

## Feature Request Trends

1. **Structured Plan Mode Export** – Multiple issues request exporting plan approval results (files created, modified, deleted) as JSON for integration with CI/CD pipelines and external tooling.

2. **Headless / Non-Interactive Mode** – Growing demand for a `--no-input` flag that enables automated, non-interactive code generation without requiring terminal TTY.

3. **Custom Reasoning Strategies** – Users want to configure the "reasoning effort" per-session or per-query, rather than a global on/off toggle, to balance speed and quality.

4. **Multi-Model Routing** – Request to automatically select the appropriate model (`kimi-for-coding`, `kimi-reasoning`, `kimi-fast`) based on task type (e.g., code review vs. new feature).

5. **Session History Search** – Feature request to search session history by file path, model, or outcome, supporting auditability and debugging.

---

## Developer Pain Points

1. **Plan Mode State Inconsistency** – Issues #2478 and related reports show that plan mode state tracking is unreliable, causing agents to be trapped or misinformed about active modes.

2. **Windows Support Gap** – Line endings, path separators, and missing `SIGWINCH` handling continue to plague Windows users, with no dedicated maintainer.

3. **API Key Management** – No support for key rotation, multiple API keys, or key validation before heavy operations; users discover expired keys only after workspaces are generated.

4. **Authentication Gating Confusion** – The "403 – only available for Coding Agents" error is poorly documented, leaving users unsure whether their subscription or API endpoint is misconfigured.

5. **Documentation Stagnation** – The development setup PR (#2287) languishes for 44+ days, suggesting that both external contributions and internal documentation efforts are under-resourced.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-06-27

---

## Today's Highlights

The community is experiencing a significant wave of session compaction bugs and model-switching errors, with three separate issues reporting infinite or rapid compaction loops. Meanwhile, a long-running request to add crypto payment support for OpenCode Go is gaining traction, and the team has merged several automated PRs fixing tool-call validation and skill context loading.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

1. **[#28846: Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction](https://github.com/anomalyco/opencode/issues/28846)** *(84 comments, +82)*
   The most-discussed issue this week. The community is requesting that usage limits for OpenCode Go be recalculated to reflect DeepSeek's massive price cut. High engagement suggests strong interest in cost-optimized coding tiers.

2. **[#23153: Pay Go with crypto](https://github.com/anomalyco/opencode/issues/23153)** *(12 comments, +23)*
   A feature request for cryptocurrency payment support in OpenCode Go. Rising votes indicate the paid tier's payment flexibility is becoming a priority.

3. **[#31152: Infinite compaction loop on every response even with empty session](https://github.com/anomalyco/opencode/issues/31152)** *(4 comments)*
   A critical bug where every message triggers a "Build … Compaction" loop, even with zero configuration. Users report this makes the tool unusable. Screenshot attached in issue.

4. **[#33128: session getting compacted, again and again](https://github.com/anomalyco/opencode/issues/33128)** *(3 comments, now CLOSED)*
   Companion report to #31152. Session compaction running in seconds, suggesting a deeper issue with the compaction scheduler or cache invalidation.

5. **[#32149: Opencode Stops Processing Requests Without Response](https://github.com/anomalyco/opencode/issues/32149)** *(6 comments)*
   Users reporting "Thinking" state that hangs with no response. Tested across multiple models. Likely related to recent streaming changes.

6. **[#34087: Opencode not returning responses](https://github.com/anomalyco/opencode/issues/34087)** *(3 comments)*
   Fresh report of the same "Input -> Thinking -> No response" pattern on v1.16.2. Community is concerned this may be a regression.

7. **[#34006: Pasting local file path inconsistent behavior](https://github.com/anomalyco/opencode/issues/34006)** *(3 comments)*
   Desktop and Terminal apps handle file path pasting differently, and neither supports plain-text paste. Annoying UX inconsistency for power users.

8. **[#34126: OpenAI Chat parser treats standalone `</think>` before tool_calls as assistant text](https://github.com/anomalyco/opencode/issues/34126)** *(2 comments)*
   A subtle parsing bug that injects noisy reasoning-end markers into session history before tool call context. Affects multi-step reasoning on certain routers.

9. **[#23114: Session title agent generates title from injected memory/system context](https://github.com/anomalyco/opencode/issues/23114)** *(3 comments)*
   Auto-titling uses injected memory context rather than actual user messages, producing meaningless session names when MCP memory servers are active.

10. **[#34048: GitHub Copilot provider lists models but every inference fails](https://github.com/anomalyco/opencode/issues/34048)** *(2 comments)*
    Authentication succeeds, model listing works, but every inference request returns "The requested model is not supported." Possibly a provider compatibility issue.

---

## Key PR Progress

1. **[#33918: fix(skill): include v2 plugin skills in legacy list](https://github.com/anomalyco/opencode/pull/33918)** *(OPEN)*
   Ensures v2 plugin-registered skills appear in the `/skills` command and API. Closes a long-standing gap for plugin authors.

2. **[#34125: fix(mcp): request refresh token scope](https://github.com/anomalyco/opencode/pull/34125)** *(OPEN)*
   Backports MCP SEP-2207 scope selection to the stable TypeScript SDK. Adds `offline_access` only when supported, improving OAuth reliability.

3. **[#34116: fix(app): question UX fixes and improvements](https://github.com/anomalyco/opencode/pull/34116)** *(OPEN)*
   Closes four UX issues (#14924, #32791, #15896, #15353) related to question interaction flows. Multiple small fixes bundled.

4. **[#34123: fix(tui): add plain text paste](https://github.com/anomalyco/opencode/pull/34123)** *(OPEN)*
   Directly addresses #34006 by adding `Ctrl+Alt+V` for plain-text paste in the TUI. A straightforward QoL improvement.

5. **[#29457: fix(plan): don't carry plan model into build agent on plan_exit](https://github.com/anomalyco/opencode/pull/29457)** *(MERGED)*
   Prevents the plan model from leaking into the build agent after `plan_exit`, fixing a cross-agent model contamination bug.

6. **[#29446: fix(opencode): bound codex stream stalls](https://github.com/anomalyco/opencode/pull/29446)** *(MERGED)*
   Adds timeouts to Codex OAuth streams to prevent indefinite hangs when upstream requests stall.

7. **[#29412: fix(opencode): repair common tool-input shape failures before retry](https://github.com/anomalyco/opencode/pull/29412)** *(MERGED)*
   Adds a validate-then-repair layer that auto-fixes common malformed tool-call arguments instead of failing hard. Improves resilience with flaky models.

8. **[#29404: fix(core): handle JSON parse failure gracefully in models-dev](https://github.com/anomalyco/opencode/pull/29404)** *(MERGED)*
   Wraps JSON parsing in try/catch so network errors (e.g., HTML from captive portals) don't crash OpenCode on startup.

9. **[#29398: feat(opencode): timestamp gutter mode for messages](https://github.com/anomalyco/opencode/pull/29398)** *(MERGED)*
   Adds per-message timestamps to the chat gutter, responding to multiple user requests. Includes a hover popup for additional metadata.

10. **[#29392: feat(provider): add endpoint-based custom providers and model discovery](https://github.com/anomalyco/opencode/pull/29392)** *(MERGED)*
    Introduces endpoint-based custom provider configuration with TUI model discovery. Lets users add any OpenAI-compatible API endpoint directly.

---

## Feature Request Trends

- **Payment Flexibility** – Crypto support for OpenCode Go (#23153) and adjusting limits after price drops (#28846) indicate users want more economic control.
- **Session Persistence & Context Management** – Multiple requests for preserving model selection per chat (#17873), propagating session IDs to subprocesses (#15739), and exposing agent markers to shells (#34065) show a desire for richer session-aware tooling.
- **UI Improvements** – Clickable file paths (#19005), configurable model picks, and plain-text paste (#34006) dominate the UX wishlist.
- **ACP Protocol Compliance** – Several issues and PRs (#30913, #31781) push for full ACP `diff` block support in permission requests.

---

## Developer Pain Points

1. **Compaction Runaway** – #31152 and #32385 report compaction firing uncontrollably even when explicitly disabled via config or env vars. Some users report it happening every response, making the tool unusable.
2. **Model Switching Breaks Sessions** – #31606 shows that switching models mid-session triggers a SQLite constraint error, corrupting the session permanently.
3. **Silent Failures** – #32149 and #34087 describe a "Thinking -> Nothing" pattern with no error output, making debugging impossible for end users.
4. **Provider Incompatibilities** – Multiple reports of model listing succeeding but inference failing (Copilot #34048, Qwen/OpenRouter #33618) suggest fragile provider adapters.
5. **Parsing Regressions** – Standalone `</think>` markers (#34126) and session title injection from memory context (#23114) indicate the parser is not handling mixed content from newer models gracefully.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-27

## Today's Highlights
The Pi ecosystem saw a burst of rapid-fire bug fixes and feature additions today, with 20+ issues closed in the last 24 hours. Key themes include fixing viewport instability in the TUI, expanding provider support (Friendli, Bedrock Mantle), and addressing embedded library lifecycle bugs. A notable experimental PR introduces a local orchestrator daemon for managing multiple Pi instances, signaling growing interest in running Pi as a background service.

## Releases
No new releases in the last 24 hours. The latest remains v0.80.2.

## Hot Issues

1. **#4945 — openai-codex Connection Reliability Issues** ([view](https://github.com/earendil-works/pi/issues/4945))  
   *Open, inprogress* — Users report the interactive TUI hangs on `Working...` with no error or stream output when using `openai-codex`/`gpt-5.5`. Only Escape key recovery works. 71 comments and 30 👍 indicate widespread impact. The root cause remains under investigation.

2. **#5825 — Streaming markdown forces scroll to bottom** ([view](https://github.com/earendil-works/pi/issues/5825))  
   *Open, bug* — With `clear on shrink` enabled, fast markdown streaming overrides user scroll position. 33 comments show strong community engagement. A related fix PR (#6026) is in progress.

3. **#5363 — Add amazon-bedrock-mantle provider** ([view](https://github.com/earendil-works/pi/issues/5363))  
   *Open, feature* — Bedrock Mantle models use a different API (OpenAI-compatible) than the existing Converse-based provider. 4 👍 and 15 comments show demand for AWS parity.

4. **#6050 — TUI full redraw clears terminal scrollback** ([view](https://github.com/earendil-works/pi/issues/6050))  
   *Closed, untriaged* — Aggressive rendering in interactive mode causes the terminal scrollbar to jump to the beginning of the chat. Closed quickly, suggesting a simple fix or low priority.

5. **#4990 — Edits failing after update** ([view](https://github.com/earendil-works/pi/issues/4990))  
   *Closed, bug* — Post-update edit tool fails with `Validation failed for tool "edit": must have required properties edits`. 7 comments; resolved (closed) indicating a fix was deployed.

6. **#5871 — Anthropic OAuth-token detection hardcoded** ([view](https://github.com/earendil-works/pi/issues/5871))  
   *Open, inprogress* — Key type detection relies on `sk-ant-oat` prefix, which fails for Claude Code scoped keys. Community requests configurable token type declaration.

7. **#5992 — Pi crashes: "value.startsWith is not a function"** ([view](https://github.com/earendil-works/pi/issues/5992))  
   *Closed, no-action* — Session reload triggers a crash in `getBestAutocompleteMatch`. Closed without action, possibly a duplicate or environment-specific issue.

8. **#5886 — AgentSession settlement/continuation lifecycle bugs** ([view](https://github.com/earendil-works/pi/issues/5886))  
   *Open, meta-issue* — Filed by mitsuhiko, this aggregates recurring bugs where post-run logic tries to continue an agent from a stale transcript. 2 👍 signals core stability concern.

9. **#6102 — Embedded library: Theme not initialized** ([view](https://github.com/earendil-works/pi/issues/6102))  
   *Closed, untriaged* — When `@earendil-works/pi-coding-agent` is used as a library (no TUI), the global `theme` proxy throws. Affects library embedders.

10. **#6097 — Add support for 'max' thinking level** ([view](https://github.com/earendil-works/pi/issues/6097))  
    *Open, feature* — Request to support OpenAI GPT-5.6 Sol's new `max` thinking level. Zero comments yet but timely given the model's announcement.

## Key PR Progress

1. **#6026 — fix(tui): stabilize working status row** ([view](https://github.com/earendil-works/pi/pull/6026))  
   *Open* — Directly targets #5825's scroll-jumping issue. Refactors working status row rendering.

2. **#6099 — Rename model key 'gpt-5.2-chat-latest' to 'gpt-5.2-chat'** ([view](https://github.com/earendil-works/pi/pull/6099))  
   *Closed* — Quick model name correction; `5.2-chat-latest` doesn't exist. Correct models are `gpt-5.2`, `gpt-5.2-chat`, `gpt-5.2-codex`.

3. **#6064 — feat(experimental): pi orchestrator** ([view](https://github.com/earendil-works/pi/pull/6064))  
   *Closed* — Adds `@earendil-works/pi-orchestrator` daemon for lifecycle management of multiple Pi instances via Unix socket IPC. Significant architectural addition.

4. **#6087 — fix(coding-agent): remove hardcoded RPC wait timeout** ([view](https://github.com/earendil-works/pi/pull/6087))  
   *Closed* — Fixes #6088 by removing the 60s hardcoded cap in `waitForIdle()` and making timeout configurable via `RpcClientOptions.waitTimeout`.

5. **#6092 — draft: hosted websearch** ([view](https://github.com/earendil-works/pi/pull/6092))  
   *Closed* — Draft PR making hosted search always-on. Author notes this is not meant for merge, but relates to #1589 and the `pi-web-access` plugin.

6. **#6090 — feat(ai): add Friendli provider** ([view](https://github.com/earendil-works/pi/pull/6090))  
   *Closed* — Adds Friendli as a built-in OpenAI-compatible provider with default model `zai-org/GLM-5.2`.

7. **#5675 — Stabilize compaction after reload** ([view](https://github.com/earendil-works/pi/pull/5675))  
   *Closed* — Fixes `prevCompaction is not defined` error after session reload. PR was auto-closed by contributor gate but addresses a real crash.

8. **#6095 — Resolve references to extensions not present in plan mode** ([view](https://github.com/earendil-works/pi/issues/6095))  
   *Closed* — Plan mode models waste tokens trying to use `questionnaire` or `brave-search` extensions that may not be installed.

9. **#6101 — Embedded library: shared extension runtime poisoned across sessions** ([view](https://github.com/earendil-works/pi/issues/6101))  
   *Closed* — Creating multiple `AgentSession`s in one process fails with "stale ctx" after the first session's `dispose()`. Critical for library users.

10. **#6100 — Compaction summary displayed out of place after reload** ([view](https://github.com/earendil-works/pi/issues/6100))  
    *Closed* — Compaction messages appear before conversation messages after reload instead of at the original point. UX bug.

## Feature Request Trends

- **Provider Expansion**: Multiple requests to add new backends (Friendli #6091, Bedrock Mantle #5363) and configurable token types for existing ones (#5871, #6093). Community values broad model access.
- **Extension Lifecycle Management**: Plans to handle missing extensions gracefully (#6095), and support for registering per-provider payload transforms (#6089).
- **Session & State Control**: Interest in compaction control (#6096), multiple OAuth accounts per provider (#1391), and the experimental orchestrator (#6064) suggests desire for production-grade session management.
- **New Model Support**: Timely request for GPT-5.6 Sol's `max` thinking level (#6097) shows the community tracks model releases closely.

## Developer Pain Points

- **Viewport/Scroll Instability**: Issues #5825, #6050, #6073 all involve TUI viewport jumping or scrollback clearing during streaming. This is the most frequent UX complaint, with 3+ separate reports in the last 24 hours.
- **Session Reliability**: Crashes on reload (#5992), compaction failures after reload (#5676), and agent lifecycle bugs (#5886) suggest session persistence is fragile. Embedded library users face additional "stale ctx" errors (#6101).
- **Tool Validation Failures**: Post-update regressions (#4990) where the `edit` tool rejects valid arguments erode trust in updates. Community cautions against updating immediately.
- **Windows Compatibility**: Bare drive root path corruption in `find` (#6104) indicates platform-specific issues aren't caught in testing.
- **Configuration Rigidity**: Hardcoded patterns (token prefix detection #5871, 60s RPC timeout #6088) frustrate users with non-standard setups or long-running tools.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-27

## Today's Highlights

A security-focused day with urgent fixes for path traversal vulnerabilities and CI isolation issues. A critical Windows memory leak causing PowerShell process accumulation was resolved, while new features like multi-model vision support, Telegram bot integration, and hot-reload capabilities continue to mature the developer experience. The community is actively shaping the v0.16 roadmap with significant server-mode proposals.

## Releases

**cua-driver-rs v0.6.8** — Prebuilt binaries with relative-coordinate fork (vendored under `packages/cua-driver`):
- **macOS**: Codesigned + notarized universal binary + `QwenCuaDriver.app`
- **Linux**: Unsigned (x86_64 + arm64, glibc 2.31+)
- **Windows**: Unsigned (x86_64 + arm64)
- Enable relative coordinates feature

## Hot Issues

1. **[#5083](https://github.com/QwenLM/qwen-code/issues/5083) — TUI freeze due to zombie child processes (OPEN, P2)**
   *Symptom:* TUI completely unresponsive; a zombie `bash` subprocess (Z state) persists for ~4 minutes without being reaped. Diagnostics revealed an `npm exec mcp-remote` process stuck as zombie. **Why it matters:** Blocks interactive session reliability on Linux; root cause appears to be missing `SIGCHLD` handling in the TUI event loop.

2. **[#5873](https://github.com/QwenLM/qwen-code/issues/5873) — Critical Windows bug: every tool call spawns a PowerShell that never closes until OOM (CLOSED)**
   *Community reaction:* User expressed extreme frustration ("我他妈真求你了 谁他妈写的代码啊"). Each tool invocation creates a `pwsh` process that is never reaped, leading to out-of-memory conditions. 100% reproducible on Windows. **Priority:** P1, fixed in PR #5892.

3. **[#4175](https://github.com/QwenLM/qwen-code/issues/4175) — Mode B (`qwen serve`) feature-priority roadmap toward v0.16 production-ready (OPEN)**
   *Status:* Stage 1 daemon and `1 daemon = 1 workspace` refactor merged. Remaining work focuses on scaling, reliability, and cloud parity. **Why it matters:** This is the primary roadmap for the server-side daemon that powers IDE integrations, CI/CD pipelines, and remote collaboration.

4. **[#5055](https://github.com/QwenLM/qwen-code/issues/5055) — Antivirus false positive: Trojan:JS/ShaiWorm.DBA!MTB in VSIX (CLOSED)**
   User reported Windows Defender flagging `qwenlm.qwen-code-vscode-ide-companion-0.18.0-win32-x64.vsix` as a trojan. Likely a false positive from code signing or bundled Node.js components. **Impact:** Erodes trust among Windows users; requires immediate security team response.

5. **[#4218](https://github.com/QwenLM/qwen-code/issues/4218) — MCP Server "filesystem" shows connected but tools unavailable to model (OPEN)**
   Windows-specific: The Qwen Studio UI shows the MCP server as connected, but no tool definitions are forwarded to the AI model. **Why it matters:** Core functionality for model-driven file operations is broken on Windows, undermining the MCP ecosystem promise.

6. **[#5819](https://github.com/QwenLM/qwen-code/issues/5819) — Auto-upgrade silently switches to expensive model (OPEN, P2)**
   User reports that auto-upgrading from v0.18.3 to v0.19 silently changed the configured model from `DeepSeek-4 flash` to `DeepSeek-4 pro` (higher cost), draining pre-paid funds. Additionally, Chinese output switched to Traditional Chinese. **Community reaction:** High trust impact — users cannot rely on configuration persistence across upgrades.

7. **[#5881](https://github.com/QwenLM/qwen-code/issues/5881) — Proposal: Extend Plan Approval Gate to all plan mode entries (OPEN)**
   Suggests that the plan review mechanism (introduced in #4853) should apply universally, not just to model-initiated plans. **Why it matters:** Would add a safety net for all plan-mode operations, preventing costly mistakes.

8. **[#5834](https://github.com/QwenLM/qwen-code/issues/5834) — Source deletion accepts path traversal slugs (CLOSED, P1 security)**
   A caller-provided `sourceSlug` like `../sessions` can escape the intended workspace `sources` directory, enabling arbitrary file deletion. **Fixed in PR #5829.** Critical for workspace sandboxing.

9. **[#5882](https://github.com/QwenLM/qwen-code/issues/5882) — CI cross-PR state contamination (CLOSED, P1)**
   The `qwen-triage` workflow posted review comments from PR #5872 onto PR #5874 due to un-isolated shared ECS runners. **Why it matters:** Undermines CI integrity — automated reviews become unreliable when state leaks between PRs.

10. **[#5800](https://github.com/QwenLM/qwen-code/issues/5800) — TUI last line overwritten on tall replies (OPEN, welcomes PR)**
    When an assistant reply exceeds terminal height in Static mode, the final line is briefly printed then hidden. Upstream bug in Ink (#973). **Community:** Welcoming contributions; clear reproduction steps provided.

## Key PR Progress

1. **[#5892](https://github.com/QwenLM/qwen-code/pull/5892) — fix(core): tree-kill PTY shell tree on Windows** *(CLOSED)*
   **Fix for #5873:** Uses `tree-kill` to properly reap the entire process tree spawned by node-pty on Windows. Prevents the PowerShell leak that caused OOM.

2. **[#5829](https://github.com/QwenLM/qwen-code/pull/5829) — fix(desktop): reject unsafe source slugs before deletion** *(CLOSED)*
   **Fix for #5834:** Validates source identifiers before path resolution, blocking traversal attacks like `../sessions`.

3. **[#5778](https://github.com/QwenLM/qwen-code/pull/5778) — feat(cli): add `/model --vision` for fallback vision model** *(OPEN)*
   Adds a dedicated vision model configuration that the vision bridge borrows when the main model lacks image support. Mirrors existing `/model --fast` UX.

4. **[#5888](https://github.com/QwenLM/qwen-code/pull/5888) — feat(channels): qwen tag — RFC + Phase 0** *(OPEN)*
   Introduces a "channel-resident multiplayer agent" that lives in chat groups (DingTalk-first). Uses existing channel adapters and the `qwen serve` daemon. Phase 0 includes RFC design; builds toward collaborative coding.

5. **[#5807](https://github.com/QwenLM/qwen-code/pull/5807) — fix(core): ignore IDE configs from other workspaces** *(CLOSED)*
   Prevents stale workspace configs from env-based or legacy lock files from interfering with the current workspace's IDE connection selection.

6. **[#5879](https://github.com/QwenLM/qwen-code/pull/5879) — feat(web-shell): browse MCP server resources in `/mcp` dialog** *(CLOSED)*
   Brings the Web Shell's MCP dialog to parity with the TUI: shows resource/prompt counts and expandable resource browsing.

7. **[#5738](https://github.com/QwenLM/qwen-code/pull/5738) — fix(cli): default to virtualized terminal history** *(OPEN)*
   Enables virtualized history by default for new users. In-app scrollable history viewport, with opt-out via `ui.useTerminalBuffer`. Improves UX for long sessions.

8. **[#5890](https://github.com/QwenLM/qwen-code/pull/5890) — feat(loop): inject `.qwen/loop.md` task file at fire time** *(OPEN)*
   Allows long-running `/loop` workflows to carry a durable, user-editable task list via a sentinel-based `.qwen/loop.md` file. Persists state across loop ticks.

9. **[#5847](https://github.com/QwenLM/qwen-code/pull/5847) — feat(serve): runtime context injection for per-turn system reminders** *(OPEN)*
   Adds a per-session `RuntimeContext` store that external callers can populate with dynamic context. Injected as `<system-reminder>` blocks on every turn.

10. **[#5898](https://github.com/QwenLM/qwen-code/pull/5898) — Fix mid-input skill command completion** *(OPEN)*
    Makes slash-command mentions typed mid-prompt use the same fuzzy-matching suggestion menu as line-start commands. Fully typed mid-input commands still execute correctly.

## Feature Request Trends

1. **Server Mode (Mode B) Production Readiness** (#4175, #5677, #5884): The community is actively pushing toward `qwen serve` being production-ready for v0.16, with focus on scaling, authentication, session management, and ACP protocol gaps.

2. **Vision Model Support** (#5778, multiple issues): Growing demand for image-capable model integration, including per-session vision model fallback configuration.

3. **Hot-Reload System** (#3696): Users want skills, extensions, MCP servers, and configuration changes to take effect without restarting sessions. Partially implemented; remaining work tracked in this issue.

4. **Plan Approval Gate Expansion** (#5881): Extending the draft/review plan assessment model to all plan-mode entries, not just model-initiated ones, as a safety net.

5. **Channel & Bot Integrations** (#5888, #5907, #5901): Community is actively building multi-platform support (DingTalk, Telegram, QQ) with streaming improvements and command alignment.

6. **Auto-Update** (#5780): Users want a native `qwen update` CLI command for automatic version checking and installation, plus a `/update` slash command.

7. **Memory & Performance Optimization** (#2036, #4805, #5027): Long-running tasks still require high memory; users want efficient session persistence, model switching, and CI optimization.

## Developer Pain Points

1. **Windows-Specific Issues Dominate** (#5873, #4218, #1002, #2678): Multiple critical bugs on Windows — PowerShell leaks, MCP tool forwarding failures, connection timeouts, and streaming instability. Windows users face a disproportionately poor experience.

2. **Zombie Process & Resource Leaks** (#5083, #5873): Unreaped child processes and memory leaks in long-running sessions continue to degrade user experience, especially on Linux and Windows.

3. **Configuration Instability** (#5819): Auto-upgrades silently changing model selections and output language erodes trust. Users cannot rely on persistent settings across versions.

4. **UI/UX Regressions** (#5800, #2678): Terminal rendering bugs (overwritten lines, unresponsive stop buttons) and TUI freezes suggest insufficient edge-case testing in rich terminal environments.

5. **CI & Quality Gate Gaps** (#5882, #4805, #5665): PRs merged with stale CI checks, cross-PR state contamination, and AI-assisted PRs missing integration tests create a trust deficit in the automated quality pipeline.

6. **Security Awareness** (#5055, #5834, #5905): Antivirus false positives, path traversal vulnerabilities, and schema validation gaps indicate security hardening is still maturing, particularly for enterprise adoption.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-06-27  
**Project:** [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) (CodeWhale)

---

## Today's Highlights

A major build-and-dependency overhaul day: three large Dependabot PRs advanced `rusqlite`, `sha2`, and `toml_edit`, each requiring maintainer follow-up branches to fix API drift. Two contributor PRs landed first-class OpenModel provider support and Telegram bridge streaming hardening, both harvested by the maintainer. TUI mode semantics were clarified with a new Auto mode, disambiguating it from YOLO bypass, and the permission system gained a structured `deny/allow/ask` action model for `permissions.toml`.

---

## Releases

No new releases in the last 24 hours. The previous release tracker ([#3063](https://github.com/Hmbown/CodeWhale/issues/3063)) for v0.8.59 was closed, and the next releases—v0.8.67 (tools/MCP/skills setup), v0.8.70 (reasoning-content integrity), and v0.8.71 (dead-code inventory)—are still in active development.

---

## Hot Issues

| Issue | Title & Why It Matters |
|-------|------------------------|
| [#3063](https://github.com/Hmbown/CodeWhale/issues/3063) *(closed)* | **v0.8.59 release tracker** — Closed release-blocker that fixed macOS TUI mouse-report input leak. Community activity confirms the release shipped stably. |
| [#1186](https://github.com/Hmbown/CodeWhale/issues/1186) *(open)* | **Typed persistent permission rules** — The most-upvoted enhancement in the queue. Proposes `tool_name`, `command_prefix`, `workspace-relative path`, and `allow/deny/ask` decision layer. |
| [#861](https://github.com/Hmbown/CodeWhale/issues/861) *(closed)* | **Thinking collapse — four root causes** — The highest-severity reasoning-model bug in the project. Freezing, truncating, or dropping `reasoning_content` causes HTTP 400 errors on DeepSeek-family APIs. |
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) *(open)* | **EPIC: staged command-boundary refactor** — A multi-layered refactor tracked for v0.9.0 that touches MCP dispatch, tool boundary validation, and session lifecycle. |
| [#3568](https://github.com/Hmbown/CodeWhale/issues/3568) *(open)* | **Plan/Agent mode mixed up** — Persistent UX bug where the model ignores mode switching and applies Agent behaviors in Plan mode. High community impact with bilingual report (CN/EN). |
| [#3582](https://github.com/Hmbown/CodeWhale/issues/3582) *(closed)* | **install.sh returns HTML** — Critical documentation bug: `curl install.sh` fetches a Next.js page, not a shell script. Blocked adoption for new users. |
| [#3490](https://github.com/Hmbown/CodeWhale/issues/3490) *(open)* | **Dead-code inventory for v0.8.71** — Systematic cleanup of `allow(dead_code)` markers before v0.9. Maintainer-driven, but community-tagged as a reliability gate. |
| [#3657](https://github.com/Hmbown/CodeWhale/issues/3657) *(open)* | **Editor freezes & crashes CodeWhale** — New critical bug: the internal editor (triggered by `d` + `Ctrl-O`) causes a full application hang requiring SIGKILL. |
| [#3638](https://github.com/Hmbown/CodeWhale/issues/3638) *(open)* | **Expose main prompt for broader use cases** — Non-engineering users want to replace software-engineering prompts with creative-writing or roleplay prompts. |
| [#3606](https://github.com/Hmbown/CodeWhale/issues/3606) *(closed)* | **Agent asks for permission in YOLO mode** — Recent regression: YOLO mode was supposed to be fully autonomous, but agents still demand confirmation. |

---

## Key PR Progress

| PR | Description |
|----|-------------|
| [#3575](https://github.com/Hmbown/CodeWhale/pull/3575) *(open)* | **Wire moraine-mcp as recall tool source** — Adds Moraine vector-memory search tools (`searchsessions`, `open`, `list_sessions`) via a config-gated MCP template. |
| [#3585](https://github.com/Hmbown/CodeWhale/pull/3585) *(closed)* | **Add OpenModel provider support** — Community PR from @noaft that integrates OpenModel as a first-class Anthropic Messages provider. |
| [#3677](https://github.com/Hmbown/CodeWhale/pull/3677) *(closed)* | **Harvested OpenModel support** — Maintainer re-wrote #3585 with authorship preserved, merging it into the provider registry, CLI, TUI, and docs. |
| [#3665](https://github.com/Hmbown/CodeWhale/pull/3665) *(closed)* | **Telegram bridge: debounce turn sequence writes** — Reduces SSE event writes per turn; forces a flush on stream exit for reliable reattach. |
| [#3664](https://github.com/Hmbown/CodeWhale/pull/3664) *(closed)* | **Split Auto mode from YOLO bypass** — Adds Auto as a fourth TUI mode with deterministic risk review, fixing the YOLO permutation issue. |
| [#3650](https://github.com/Hmbown/CodeWhale/pull/3650) *(closed)* | **Permissions.toml with deny/allow/ask** — Community PR adding structured ACL-style permission rules for tool invocation. |
| [#3675](https://github.com/Hmbown/CodeWhale/pull/3675) *(closed)* | **Bump rusqlite to 0.39.0** — Maintainer adjusted Dependabot's latest-bump to a locally-validated 0.39.0 that avoids unstable `cfg_select!`. |
| [#3673](https://github.com/Hmbown/CodeWhale/pull/3673) *(closed)* | **Fix sha2 0.11 digest hex** — Carry of Dependabot bump with explicit byte-to-hex helpers across CLI, TUI, skills, Fleet, RLM, and WhaleFlow. |
| [#3674](https://github.com/Hmbown/CodeWhale/pull/3674) *(closed)* | **Extract runtime auth helpers** — Refactors `runtime_api` by moving auth/token/cookie logic into a dedicated `auth.rs` module. |
| [#3607](https://github.com/Hmbown/CodeWhale/pull/3607) *(open)* | **Reactivate stale issue cleanup** — Creates missing stale-policy labels and schedules `bug`+`needs-info` issues to auto-close unless they carry blocker or security tags. |

---

## Feature Request Trends

1. **Permission and policy layers** — The most active enhancement thread (see #1186, #3650). Community wants structured `deny/allow/ask` rules scoped by tool name, command prefix, and path. This mirrors Claude Code's permissions model.

2. **Multi-mode semantics & UX** — Persistent requests to fix Plan/Agent mode confusion (#3568), new Auto mode (#3664), and ensure YOLO means truly zero confirmation (#3606).

3. **Memory and context management** — Moraine MCP integration (#3575) and token/context window visibility (#2666, #2953, #2956) are high-frequency asks. Users want agents to self-monitor token budgets and context pressure.

4. **Non-engineering use cases** — The request to expose the main prompt for literature/roleplay (#3638) signals demand beyond software engineering. This aligns with the broader "creative coding" trend.

5. **Reasoning integrity** — #861 and #3016 show that thinking-block issues (freezing, truncation, loss) are the #1 enemy of DeepSeek-family users. Fixing these is a prerequisite for production trust.

---

## Developer Pain Points

- **Mode switching reliability** — Plan/Agent mode mixing (#3568) and YOLO mode asking for permission (#3606) remain recurrent bugs. Developers are frustrated that mode changes are not properly communicated to the model.

- **Build & dependency fragility** — Three Dependabot bumps in one day required manual follow-up branches (#3675, #3673, #3675) because latest versions broke local stable validation. The `rusqlite` upgrade in particular needed a maintainer-adjusted target version.

- **Installation barrier** — The `install.sh` endpoint returning HTML (#3582) is a critical-blocking issue for new users. The documentation recommends a one-liner that cannot work.

- **Editor stability** — The TUI's internal editor crashing the entire process (#3657) is a new and severe user-facing bug. The fact that typing `d` and `Ctrl-O` freezes the app suggests a terminal/rendering deadlock.

- **Reasoning-model edge cases** — Thinking-block collapse (#861) affects every DeepSeek-family model and causes HTTP 400 errors on the next API call. Developers must handle silent failures, frozen spinners, and dropped fields—each with a different root cause.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*