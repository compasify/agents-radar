# AI CLI Tools Community Digest 2026-06-17

> Generated: 2026-06-17 00:32 UTC | Tools covered: 9

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
**Analysis Date:** 2026-06-17

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem continues its rapid maturation, with **open-source community engagement exceeding first-party vendor activity** on most projects. Today's digests reveal a sector transitioning from novelty to production reliability: context compaction bugs, token accounting mismatches, and multi-agent coordination failures dominate community discussions across all major tools. The competitive landscape is bifurcating between **ecosystem-agnostic tools** (Claude Code, OpenCode, Pi) and **platform-locked offerings** (GitHub Copilot, Gemini CLI, Qwen Code), with the former group seeing higher community contribution velocity. Notably, **session state management** and **provider interop** have emerged as the two critical battlegrounds where user trust is won or lost. The rebranding of DeepSeek TUI → CodeWhale signals a strategic pivot toward broader model support beyond a single provider.

---

## 2. Activity Comparison (Last 24 Hours)

| Tool | Open Issues | PRs Active | Releases Today | Community Comments | Top Issue Reactions |
|---|---|---|---|---|---|
| **Claude Code** | 10 tracked | 10 PRs | ✅ v2.1.179 | ~130+ | 27 on #19471 |
| **OpenAI Codex** | 10 tracked | 10 PRs | ✅ 4 alphas (v0.141) | ~870+ | 612 on #14593 |
| **Gemini CLI** | 10 tracked | 10 PRs | ❌ None | ~45 | 8 on #21409 |
| **GitHub Copilot CLI** | 10 tracked | ❌ None | ✅ v1.0.63 | ~10 | 4 on #3730 |
| **Kimi Code CLI** | 5 tracked | 1 PR | ❌ None | ~5 | 3 on #1632 |
| **OpenCode** | 10 tracked | 10 PRs | ❌ None | ~160 | 87 on #27167 |
| **Pi** | 10 tracked | 10 PRs | ✅ v0.79.6 | ~120 | 30 on #4945 |
| **Qwen Code** | 10 tracked | 10 PRs | ✅ patch | ~50 | 6 on #5210 |
| **CodeWhale** | 10 tracked | 7 PRs | ✅ v0.8.61 | ~45 | 14 on #2487 |

**Key Observations:**
- **OpenCode** leads community engagement (87 👍 on top feature request)
- **OpenAI Codex** has the most active issue thread (612 comments on token burn)
- **GitHub Copilot CLI** shows lowest community contribution velocity (0 PRs, <10 comments)
- **Gemini CLI** and **Kimi Code** had zero releases today, suggesting slower iteration cycles

---

## 3. Shared Feature Directions

### 3.1 Deterministic Session Execution & Automation (6/9 tools)
| Tool | Specific Need |
|---|---|
| **Claude Code** | Deterministic CI/CD execution (#58933) |
| **OpenAI Codex** | Automations stack (10 PRs merging cron-like scheduling) |
| **Qwen Code** | `/loop` alignment (PRs #5182, #5197 - wakeup engine) |
| **OpenCode** | `/goal` (#27167) and `/loop` (#18001) commands |
| **Pi** | RPC session control (#5810) |
| **CodeWhale** | Clarification modal (#3102) |

**Signal:** Every major tool is building toward scheduled/repeatable agent executions—the "cron for AI agents" paradigm.

### 3.2 Provider Compatibility & Model Flexibility (8/9 tools)
| Tool | Specific Pain Point |
|---|---|
| **OpenCode** | MiniMax M3 rejection, Azure encrypted content (#29879) |
| **Pi** | DeepSeek V4 tool serialization (#5811), multiple provider schema issues |
| **CodeWhale** | Moonshot/Kimi API failures (#3265), Novita provider gaps |
| **Gemini CLI** | MCP OAuth token persistence (#27889, #27664) |
| **Qwen Code** | Vision bridge for text-only models (#5126) |
| **OpenAI Codex** | Amazon Bedrock integration (#28148) |

**Signal:** Users demand model/provider diversity—vendor lock-in is actively rejected. Tool-specific serialization formats create friction.

### 3.3 Context Compaction & Token Budget Management (7/9 tools)
| Tool | Specific Issue |
|---|---|
| **Claude Code** | CLAUDE.md rules dropped after compaction (#19471) |
| **OpenAI Codex** | Shared session token budgets (#28494), 3-5x token burn (#14593) |
| **Gemini CLI** | Thought leakage in history (#27971), Auto Memory redaction (#26525) |
| **GitHub Copilot CLI** | Silent model downgrade (#3823) |
| **OpenCode** | Infinite compaction loop (#32615, #27919) |
| **Pi** | Memory bloat in session listing (#5556) |
| **Qwen Code** | ExitPlanMode stuck for hours (#5210) |

**Signal:** Token economics and context integrity are the #1 user trust issue across the ecosystem.

### 3.4 Multi-Agent Coordination (6/9 tools)
| Tool | Specific Pain Point |
|---|---|
| **Claude Code** | 12 coordination bugs (#54393), subagent state loss (#59309) |
| **Gemini CLI** | Subagent false success reporting (#22323) |
| **GitHub Copilot CLI** | Sub-agents lose MCP tools (#3812), wrong model (#3824) |
| **Qwen Code** | Sub-agent crashes (#5180), parallelism control (#5176) |
| **OpenCode** | Duplicate agent responses (#32598) |
| **CodeWhale** | sub-agent deadlock with block=True (#3266) |

**Signal:** Multi-agent workflows are immature across the board—this is the next frontier for reliability engineering.

### 3.5 Platform-Specific Friction (7/9 tools)
| Tool | Platform Issues |
|---|---|
| **Claude Code** | WSL2 scrolling, Windows path normalization (#68694) |
| **OpenAI Codex** | Windows full-screen (#25154), macOS Gatekeeper (#28190), ARM64 WSL (#13565) |
| **Gemini CLI** | Wayland browser agent (#21983) |
| **GitHub Copilot CLI** | Windows ARM64 crashes (#3687) |
| **Kimi Code** | Windows 10 MCP persistence (#2457) |
| **Pi** | CP-1252 encoding, Windows Terminal scrolling (#5576) |
| **Qwen Code** | Antivirus false positives (#5055) |
| **CodeWhale** | Ubuntu glibc mismatch (#3238), missing deps (#3268) |

**Signal:** Cross-platform support remains an afterthought in most tools. Windows, ARM64, and older Linux distros are consistently second-class.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | OpenCode | Pi | Qwen Code | CodeWhale |
|---|---|---|---|---|---|---|---|---|
| **Primary Model** | Anthropic Claude | OpenAI GPT | Gemini | Multi-model (Copilot) | Multi-provider | Multi-provider | Qwen | Multi-provider |
| **Ecosystem Lock** | High (Claude API) | High (OpenAI infra) | High (Google Cloud) | Extreme (GitHub) | Low | Low | Medium (Qwen) | Low |
| **Community Contribution** | High (15+ PRs/day) | Medium | Medium | Low | Very High | High | Medium | Medium |
| **Windows Support** | Improving | Poor | N/A | Poor | Good | Good | Improving | Poor |
| **Enterprise Focus** | Medium | High (Business plans) | High (GCP) | Very High (GitHub) | Low | Medium | Medium | Low |
| **Multi-Agent Maturity** | Leading but buggy | Foundational | Improving | Basic | Basic | Basic | Foundational | Basic |
| **Plugin/Skill System** | Mature | Early | Mature | Basic | Mature | Mature | Early | Early |
| **Token Cost Transparency** | Poor | Very Poor | Good | Poor | Good | Good | Poor | Poor |

### Strategic Positioning

- **Claude Code** is the most **feature-rich** but struggles with regression stability and ecosystem lock-in. Its plugin system is the most mature.
- **OpenAI Codex** has the **largest user base** (by comment volume) but faces the most severe **token cost backlash**. The automations stack suggests an enterprise pivot.
- **Gemini CLI** focuses on **safety and security** (path traversal, OAuth atomicity, thought leakage fixes) but has lower community velocity.
- **GitHub Copilot CLI** is the **most locked-down** but least innovative—zero PRs today despite multiple critical regressions. Enterprise admin control is the sole differentiator.
- **OpenCode** is the **community darling**—highest feature request engagement, most active PR pipeline, but least official support structure.
- **Pi** is the **Swiss Army knife**—most provider-agnostic, best cross-platform, but suffers from provider schema fragmentation.
- **Qwen Code** is making a **strategic play for Asian markets** (QQ Bot adapter, localization PRs) while fixing fundamental state machine bugs.
- **CodeWhale** (formerly DeepSeek TUI) is in **rebranding transition**—innovative memory system (hippocampal v2) but plagued by installation friction and a persistent "stalled turn" bug.

---

## 5. Community Momentum & Maturity

### High Velocity (Rapid iteration, high community engagement)
- **OpenCode** — 87 👍 on `/goal`, 160+ comments daily, aggressive PR merging
- **Claude Code** — 15+ community PRs/day, but fix quality is mixed (reopened bugs)
- **Pi** — v0.79.5→v0.79.6 within 24h, strong community contribution pipeline

### Medium Velocity (Active but slower iteration)
- **OpenAI Codex** — High issue volume (870+ comments) but slow resolution (#14593 open 3 months)
- **Qwen Code** — steady weekly releases, QQ Bot contribution signals community growth
- **Gemini CLI** — Prioritizes security over velocity; slower feature delivery but higher fix quality

### Low Velocity (Stagnant or reactive)
- **GitHub Copilot CLI** — Zero community PRs, only 10 comments across 10 tracked issues. Critical regressions (#3812, #3824) with no visible fix pipeline.
- **Kimi Code** — One stale PR (#1771, 71 days open), minimal community activity
- **CodeWhale** — High issues but low PR throughput relative to bug count. Rebranding may have slowed development.

### Maturity Assessment

| Tool | Stability | Community Trust | Feature Completeness | Enterprise Readiness |
|---|---|---|---|---|
| Claude Code | ⚠️ Medium | Medium | High | Medium |
| OpenAI Codex | ⚠️ Low | Low | Medium | High |
| Gemini CLI | ✅ High | Medium | Medium | ✅ High |
| GitHub Copilot CLI | ⚠️ Low | Low | Low | ✅ High |
| OpenCode | ⚠️ Medium | ✅ High | Medium | ❌ Low |
| Pi | ✅ High | Medium | High | Medium |
| Qwen Code | ⚠️ Low | Medium | Medium | Medium |
| CodeWhale | ❌ Low | ❌ Low | Low | ❌ Low |

---

## 6. Trend Signals for Developers

### 🟢 Positive Signals
1. **Cron-like agent scheduling is becoming standard** — Qwen Code's `/loop` alignment and Codex's automations stack suggest scheduled agent tasks will be table stakes within 6 months.
2. **Provider-agnostic architecture is winning** — OpenCode, Pi, and CodeWhale all support multiple model backends. Users consistently choose flexibility over deep integration.
3. **Security hardening is accelerating** — Gemini CLI's 3 security PRs (#27966, #27889, #27971) and Claude Code's symlink escape fix (#68689) show growing maturity.
4. **Session persistence is being addressed** — OpenCode's compaction loop fix (#27919), Codex's token budgets (#28494), and Claude Code's compaction fix (#19471) indicate vendors recognize the problem.

### 🔴 Critical Risks for Developers
1. **Token cost unpredictability is an existential threat** — Codex's #14593 (612 comments, 269 👍) is the most active issue across any tool. If cost visibility doesn't improve, enterprise adoption will stall.
2. **Multi-agent workflows are not production-ready** — Every tool has documented multi-agent failures. Building autonomous pipelines today requires significant error handling.
3. **Windows/Linux ARM support remains poor** — 7/9 tools have Windows-specific critical bugs. Developers on these platforms should budget for friction.
4. **Context compaction continues to break workflows** — Despite multiple patches, silent loss of configuration is the #1 cross-tool complaint. No vendor has a complete fix.
5. **Releases are increasingly unstable** — Claude Code v2.1.179 introduced a regression (#3812), Codex's 26.311 release triggered token burn complaints, and GitHub Copilot v1.0.63 broke MCP tool access. Quality assurance is struggling to keep pace with feature velocity.

### Strategic Recommendations

- **For tool selection**: Choose **Pi** or **OpenCode** if you value provider flexibility and community support. Choose **Claude Code** if you need the most mature plugin ecosystem. Choose **OpenAI Codex** only if deeply integrated into OpenAI infrastructure—the cost issues are severe.
- **For build vs. buy**: The ecosystem is still too immature for building production-critical workflows atop any single tool. Invest in abstraction layers that decouple you from tool-specific formats.
- **For enterprise deployment**: GitHub Copilot CLI offers the best admin controls but worst reliability. Gemini CLI offers the best security posture. Both lack community momentum—expect to build custom tooling.

---

*Report generated from community digest data collected 2026-06-17. All metrics reflect activity within the preceding 24-hour window unless otherwise noted.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-06-17** | Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following Pull Requests have attracted the most community discussion and represent the most-watched Skill development activity:

### 1. Add document-typography skill (#514)
- **Author:** PGTBoos | **Status:** Open (since 2026-03-04)
- **Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents—issues affecting nearly every document Claude produces.
- **Discussion highlights:** Strong agreement that typographic quality is a universal pain point. Community members noted this addresses a "silent failure" mode users often accept as inevitable.
- **Link:** https://github.com/anthropics/skills/pull/514

### 2. Add ODT skill — OpenDocument text creation and template filling (#486)
- **Author:** GitHubNewbie0 | **Status:** Open (since 2026-03-01)
- **Functionality:** Create, fill, read, and convert OpenDocument Format files (.odt, .ods), including LibreOffice-compatible document workflows.
- **Discussion highlights:** High demand for open-source document format support. Complements the existing DOCX skill and addresses enterprise users who require ISO-standard formats.
- **Link:** https://github.com/anthropics/skills/pull/486

### 3. Improve frontend-design skill clarity and actionability (#210)
- **Author:** justinwetch | **Status:** Open (since 2026-01-05)
- **Functionality:** Revises the frontend-design skill to ensure every instruction is concretely actionable within a single conversation, improving specificity and behavioral steering.
- **Discussion highlights:** Community debate on skill granularity—whether broad design guidance or narrow, executable instructions produce better results.
- **Link:** https://github.com/anthropics/skills/pull/210

### 4. Add skill-quality-analyzer and skill-security-analyzer (#83)
- **Author:** eovidiu | **Status:** Open (since 2025-11-06)
- **Functionality:** Two meta-skills: one evaluates Skills across structure, documentation, performance, and security dimensions; the other performs security-specific analysis.
- **Discussion highlights:** Interest in meta-level quality assurance for the Skills ecosystem itself. Questions about integration with CI/CD pipelines.
- **Link:** https://github.com/anthropics/skills/pull/83

### 5. Fix PDF case-sensitive file references (#538) / Fix DOCX tracked change w:id collision (#541)
- **Author:** Lubrsy706 | **Status:** Open (since 2026-03-06)
- **Functionality:** Bug fixes for the PDF skill (case-sensitive file references breaking on Linux/macOS) and DOCX skill (tracked change ID collisions with existing bookmarks causing document corruption).
- **Discussion highlights:** These maintenance PRs received disproportionate attention because they highlight real-world reliability issues in popular document Skills. The `w:id` collision fix was particularly valued by teams using tracked changes in shared documents.
- **Links:** https://github.com/anthropics/skills/pull/538 | https://github.com/anthropics/skills/pull/541

### 6. Fix skill-creator: run_eval.py always reports 0% recall (#1298)
- **Author:** MartinCajiao | **Status:** Open (since 2026-06-10)
- **Functionality:** Fixes the skill-creator's evaluation pipeline where `run_eval.py` reports 0% recall for every skill description, breaking the description-optimization loop. Includes Windows stream reading, trigger detection, and parallel worker fixes.
- **Discussion highlights:** Ties directly to the most-commented issue (#556) and represents the community's most urgent infrastructure concern.
- **Link:** https://github.com/anthropics/skills/pull/1298

### 7. Add testing-patterns skill (#723)
- **Author:** 4444J99 | **Status:** Open (since 2026-03-22)
- **Functionality:** Covers the full testing stack: philosophy (Testing Trophy model), unit testing (AAA pattern, naming conventions), React component testing (Testing Library), and edge case handling.
- **Discussion highlights:** Strong interest in opinionated, battle-tested testing guidance. Community sees this as filling a gap between generic coding skills and specific framework expertise.
- **Link:** https://github.com/anthropics/skills/pull/723

---

## 2. Community Demand Trends

Analysis of the most active Issues reveals five concentrated demand areas:

### A. Skill Infrastructure & Reliability (Highest Priority)
- **#556** (14 comments): `run_eval.py` never triggers skills—0% trigger rate across all queries, breaking the optimization loop. This is the community's most urgent infrastructure blocker.
- **#202** (8 comments): skill-creator reads like developer documentation, not an operational skill. Demands a rewrite for token efficiency and Claude-native behavior.
- **#1061** (3 comments): Windows compatibility failures across multiple scripts (subprocess, encoding, pipe handling).
- **Demand signal:** **Critical infrastructure.** The community cannot effectively develop or test Skills until the evaluation tooling is reliable.

### B. Collaboration & Sharing Mechanisms
- **#228** (14 comments): Org-wide skill sharing—users must currently download `.skill` files and manually distribute them. Demands a shared skill library or direct sharing links within Claude.ai.
- **Demand signal:** **High.** Teams want to adopt Skills at scale but are blocked by distribution friction.

### C. Security & Trust Boundaries
- **#492** (7 comments): Community Skills distributed under the `anthropic/` namespace impersonate official Anthropic Skills, enabling trust boundary abuse and potential privilege escalation.
- **#1175** (4 comments): Security and context window concerns when handling SharePoint Online documents via Skills—access control logic written in SKILL.md raises auditability questions.
- **Demand signal:** **Growing concern.** As the Skills ecosystem expands, namespace verification and permission scoping become critical.

### D. Format & Platform Expansion
- **#412** (6 comments): Proposal for an agent-governance Skill covering policy enforcement, threat detection, trust scoring, and audit trails for AI agent systems.
- **#1220** (2 comments): Multi-file preload/inline bundling for Skill reference files—currently only SKILL.md is delivered, but complex Skills split across multiple files break on invocation.
- **Demand signal:** **Moderate.** Users want Skills to support richer structures and new governance domains.

### E. Platform Compatibility
- **#29** (4 comments): Skills do not work with AWS Bedrock.
- **#16** (4 comments): Skills should be exposable as MCPs (Model Context Protocol) for standardized API integration.
- **Demand signal:** **Niche but vocal.** Users want Skills to function beyond Claude Desktop/Claude Code.

---

## 3. High-Potential Pending Skills

These active-comment PRs are not yet merged but show strong community engagement and likelihood of landing soon:

| PR | Skill | Author | Key Feature | Engagement |
|----|-------|--------|-------------|------------|
| #1298 | run_eval.py fix (0% recall) | MartinCajiao | Fixes broken evaluation pipeline, Windows support | Very high—direct fix for #556 |
| #1099 | skill-creator Windows fix | joshuawowk | Subprocess pipe reading on Windows | High—complements #1298 |
| #1050 | skill-creator Windows bugs | gstreet-ops | PATHEXT and encoding fixes | High—overlapping with #1099 |
| #361 | Unquoted YAML detection | Mr-Neutr0n | Prevents silent parsing failures | Moderate—long-running PR |
| #362 | UTF-8 panic fix | Mr-Neutr0n | Multi-byte character handling | Moderate—blocks non-English users |
| #444 | AURELION skill suite | Chase-Key | 4-skill cognitive framework (kernel, advisor, agent, memory) | Moderate—ambitious scope |
| #568 | ServiceNow platform skill | Vanka07 | ITSM, ITOM, SecOps, ITAM, FSM, SPM, CSDM, IntegrationHub | Moderate—enterprise demand |
| #723 | testing-patterns skill | 4444J99 | Full-stack testing guidance | Moderate—broadly applicable |
| #181 | SAP-RPT-1-OSS predictor | amitlals | Tabular foundation model for predictive analytics | Low—niche domain |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *reliable tooling infrastructure* — fixing the skill-evaluation pipeline (0% recall bug, Windows compatibility, silent parsing failures) and enabling *collaboration at scale* (org-wide sharing, namespace security, multi-file support) — before expanding into new Skill domains.**

---

# Claude Code Community Digest — 2026-06-17

## Today's Highlights

A major patch (v2.1.179) lands with fixes for mid-stream connection drops and WSL2 scrolling regressions, while the community fixers led by AZERDSQ131 submitted 15+ targeted PRs across security, scripting, and plugin infrastructure. Meanwhile, the long-simmering issue of CLAUDE.md rules being dropped after context compaction remains the most active open conversation, now spanning 27 comments across three overlapping bug reports.

## Releases

**v2.1.179** — [View Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.179)
Three targeted fixes:
- Fixed mid-stream connection drops: partial responses are now preserved instead of showing a raw error, and the spinner no longer gets stuck at "running tool"
- Fixed mouse-wheel scrolling in WSL2 under Windows Terminal and VS Code (regression in 2.1.172)
- Sandbox `denyR` fix (continued from previous build)

## Hot Issues

1. **#19471 — CLAUDE.md instructions ignored after context compaction** (CLOSED, 27 comments, 9👍)  
   The top-voted issue this week. Users report that after context compaction (cache-triggered truncation), CLAUDE.md rules are silently dropped. The fix was shipped in a prior release but the discussion reveals the fix may be partial — spawned agent subagents still lose rules.  
   [Issue Link](https://github.com/anthropics/claude-code/issues/19471)

2. **#47166 — JetBrains plugin request** (OPEN, 24 comments)  
   Community consensus: the IntelliJ IDEA experience is "a joke" compared to VS Code. Users want a real plugin (not the existing half-baked one) that supports /ide-style integration.  
   [Issue Link](https://github.com/anthropics/claude-code/issues/47166)

3. **#65514 — Pro plan blocked despite 17% usage when requesting 1M context** (OPEN, 16 comments, 2👍)  
   A tier-cap confusion: users on the Pro (20x) plan hitting a hard block when attempting to use 1M-context windows, even when well under their usage limit. Reports suggest the credit estimation logic double-counts extended context.  
   [Issue Link](https://github.com/anthropics/claude-code/issues/65514)

4. **#54393 — 12 multi-agent coordination bugs from one overnight session** (OPEN, 15 comments)  
   A thorough post-mortem cataloging systemic failures in multi-agent workflows: subagents not inheriting state, task queue corruption, and context collisions. The community is flagging this as a blocker for autonomous agent pipelines.  
   [Issue Link](https://github.com/anthropics/claude-code/issues/54393)

5. **#52135 — Max (20x) plan quota depleting disproportionately** (CLOSED, 14 comments, 4👍)  
   Users on the $100+/month Max tier seeing 51% of weekly quota consumed mid-week, with ~17% burned within minutes of a session reset. The fix appears to have shipped, but trust remains shaken.  
   [Issue Link](https://github.com/anthropics/claude-code/issues/52135)

6. **#59309 — CLAUDE.md rules not propagated to Agent subagents** (CLOSED, 12 comments, 1👍)  
   Confirmed that spawned subagents do not inherit the parent's CLAUDE.md configuration. Closed as a duplicate of #19471, but users note this is a separate class of bug.  
   [Issue Link](https://github.com/anthropics/claude-code/issues/59309)

7. **#68933 — skill-creator eval leaks MCP child processes via headless `claude -p`** (OPEN, 3 comments)  
   A serious resource leak: `skill-creator`'s evaluation harness spawns a headless `claude -p` process per test query, each booting MCP servers. One user hit a forced hard reboot from memory exhaustion.  
   [Issue Link](https://github.com/anthropics/claude-code/issues/68933)

8. **#68940 — Anthropic API rate limit: server-side throttling** (OPEN, 2 comments)  
   `500 {"type":"error","error":{"type":"rate_limit_error"}}` errors reported — this is server-level throttling (not user quota), suggesting infrastructure pressure.  
   [Issue Link](https://github.com/anthropics/claude-code/issues/68940)

9. **#68578 — "Fable 5 unavailable" banner has no dismiss button** (CLOSED, 2 comments, 4👍)  
   A UI polish issue: the model selector already greys out unavailable models, but a persistent undismissable banner duplicates the information. The community appreciates the quick closure.  
   [Issue Link](https://github.com/anthropics/claude-code/issues/68578)

10. **#68932 — Rude and pressuring behavior from Claude** (OPEN, 1 comment)  
    A behavior-report concerning Claude adopting a pushy, impatient tone when users are slow to respond. The model's system prompt may need guardrails for multi-turn patience.  
    [Issue Link](https://github.com/anthropics/claude-code/issues/68932)

## Key PR Progress

1. **#68707 — Add `/bug` command to file GitHub issues from terminal** (OPEN)  
   Enables users to file bug reports inline via `/bug` slash command — reduces friction for capturing repro steps immediately after a failure.  
   [PR Link](https://github.com/anthropics/claude-code/pull/68707)

2. **#68786 — Fix shell injection in test-hook.sh via stdin redirection** (OPEN)  
   Closes a security vulnerability where `$HOOK_SCRIPT` embedded in single-quoted strings within `bash -c` could be exploited for control character injection.  
   [PR Link](https://github.com/anthropics/claude-code/pull/68786)

3. **#68785 — Fix hook JSON output to stdout and tighten su* glob** (OPEN)  
   Three reference hook scripts were writing decision JSON to stderr instead of stdout, making them non-functional as examples. Fixes glob pattern for `sudo`/`su` matching.  
   [PR Link](https://github.com/anthropics/claude-code/pull/68785)

4. **#68689 — Block symlink escape in extensibility config reads** (OPEN)  
   A security hardening PR: prevents malicious symlinks from reading arbitrary files during extensibility configuration loading.  
   [PR Link](https://github.com/anthropics/claude-code/pull/68689)

5. **#68694 — Normalize CLAUDE_PLUGIN_ROOT path separators on Windows** (OPEN)  
   Fixes a Windows-only bug where mixed forward/backslash paths in plugin root configuration caused file resolution failures.  
   [PR Link](https://github.com/anthropics/claude-code/pull/68694)

6. **#68699 — Add Python wrapper and normalize plugin root paths on Windows** (OPEN)  
   Companion to #68694 — adds a Windows-compatible Python wrapper for hook execution to handle path normalization at the system level.  
   [PR Link](https://github.com/anthropics/claude-code/pull/68699)

7. **#68701 — Strip CRLF from Python version probe on Windows** (OPEN)  
   Windows line endings were breaking version detection — CRLF stripped before comparison to maintain cross-platform compatibility.  
   [PR Link](https://github.com/anthropics/claude-code/pull/68701)

8. **#68702 — Guard PROMPT_PARTS expansion against bash 3.x on macOS** (OPEN)  
   macOS ships bash 3.2 by default, which lacks `set -u` compatibility with array expansions used in newer scripts.  
   [PR Link](https://github.com/anthropics/claude-code/pull/68702)

9. **#68678 — Don't mark Claude Desktop issues as invalid** (OPEN)  
   The triage bot was incorrectly labeling Desktop-specific issues as invalid. This PR adds an allowlist for Desktop-area labels.  
   [PR Link](https://github.com/anthropics/claude-code/pull/68678)

10. **#46351 — Enable PowerShell tool on macOS and Linux when pwsh is available** (CLOSED)  
    Long-standing feature request (closed after 67 days): PowerShell tool now enabled cross-platform when PowerShell 7+ is detected. Opt-in via `CLAUDE_CODE_USE_POWERSHELL_TOOL=1`.  
    [PR Link](https://github.com/anthropics/claude-code/pull/46351)

## Feature Request Trends

1. **JetBrains IDE integration** (#47166, #61306) — Demand is growing for a real IntelliJ/WebStorm plugin that supports `/ide`-style integration. The current plugin is widely considered incomplete.

2. **Deterministic execution for automation** (#58933) — Users building CI/CD pipelines need replayable, deterministic Claude Code sessions. The current nondeterministic nature forces teams onto the Agent SDK, which has higher per-call costs.

3. **Configuration persistence across compaction** (#44166, #19471) — Multiple requests for exempting CLAUDE.md and auto-memory files from context compaction, so project conventions survive cache refreshes.

4. **Agent view UX improvements** (#59846, #57743, #65216) — The "agent view" (single pane of glass for all sessions) needs better naming, visual summaries for completed work, and reliable reconnection for worktree-relocated agents.

5. **Remote control in-session** (#60699) — Users want the ability to enable `--remote-control` on an already-running session via a slash command, rather than having to pre-configure it at launch.

## Developer Pain Points

1. **Context compaction silently dropping configuration** — The #1 complaint this week. CLAUDE.md rules, skill definitions, and project conventions degrade or disappear after compaction. Three different issues (#19471, #59309, #29423) describe variations of this bug, all receiving high comment and reaction counts.

2. **Plan tier vs. actual consumption mismatch** — Users on Pro and Max plans report feeling misled: "20x" weekly quota depleting disproportionately (#52135), being blocked from 1M context despite low usage (#65514), and unclear credit accounting for extended-context sessions.

3. **Multi-agent coordination fragility** — The post-mortem (#54393) and worktree session management bugs (#62309, #62431, #65216) paint a picture of multi-agent workflows being brittle. Subagents lose context, worktree removal destroys live sessions, and agent view crash-loops on reconnection.

4. **Windows ecosystem friction** — Silent install failures on macOS Tahoe (#68484), 30-second PATH polling for tool detection (#58732), and the Fable 5 undismissable banner (#68578) — while minor individually, they accumulate into a perception that non-macOS/Linux platforms are second-class.

5. **Headless/MCP process leakage** — The `skill-creator` memory exhaustion bug (#68933) highlights a broader pattern: headless `claude -p` instances don't clean up MCP child processes. For projects with resource-heavy MCP servers (Firebase, database connectors), this can crash the host system.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-17

## Today's Highlights

The Codex team pushed four Rust alpha releases (v0.141.0-alpha.1–4) and merged a major **automations service** stack spanning 10+ PRs, laying groundwork for scheduled agent tasks and stateful workflows. Meanwhile, the community continues to report acute pain around **token burn rates**, **model capacity errors**, and **session history loss** across Desktop, CLI, and WSL environments.

## Releases

- **[rust-v0.141.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.1)** through **[rust-v0.141.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.4)** — Four sequential alpha releases of the Rust-based Codex core engine. Release notes are sparse ("Release 0.141.0-alpha.N"), but the rapid iteration suggests active stabilization work, likely tied to the automations and session-token-budget PRs visible in today's activity.

## Hot Issues

1. **[#14593 — "Burning tokens very fast"](https://github.com/openai/codex/issues/14593)** (612 comments, 269 👍)  
   *Status: OPEN* — The top-voted community concern. Users on Business plans report token usage 3–5x higher than before the 26.311 release. Still unresolved after three months; the thread has become a central rallying point for quota complaints.

2. **[#23794 — "Codex Desktop no longer shows visible context/token usage indicator"](https://github.com/openai/codex/issues/23794)** (169 comments, 168 👍)  
   *Status: CLOSED* — A UI regression that removed the token counter was fixed. High engagement suggests developers rely heavily on this indicator for cost awareness.

3. **[#28190 — "rg is blocked by macOS"](https://github.com/openai/codex/issues/28190)** (26 comments, 40 👍)  
   *Status: OPEN* — `ripgrep` is flagged by macOS Gatekeeper when invoked by Codex CLI. Users on Pro plans with gpt-5.5 are blocked from file searches. Quick upvote velocity indicates a breaking DX issue on macOS.

4. **[#28507 — "Selected model is at capacity. Please try a different model."](https://github.com/openai/codex/issues/28507)** (13 comments, 11 👍)  
   *Status: OPEN* — Pro 5x subscribers hit model-capacity errors on gpt-5.5 during peak hours. No workaround offered beyond model switching. Signals backend scaling issues.

5. **[#21128 — "Codex Desktop silently hides project conversations outside the global recent-50 window"](https://github.com/openai/codex/issues/21128)** (26 comments, 17 👍)  
   *Status: OPEN* — Project chats vanish from UI after 50 conversations. Makes the app unreliable for long-running projects. Community frustration is growing.

6. **[#21211 — "Thread navigation/loading slows from unbounded metadata and eager large-history hydration"](https://github.com/openai/codex/issues/21211)** (11 comments, 2 👍)  
   *Status: OPEN* — SQLite thread-list bloat causes multi-second loading delays. Supersedes an earlier ticket; performance is degrading linearly with usage.

7. **[#26306 — "Dramatically increased Codex quota consumption"](https://github.com/openai/codex/issues/26306)** (11 comments)  
   *Status: OPEN* — Another report of quota spikes, this time on ChatGPT Plus. Users suspect the new context-windowing logic is charging for more tokens than displayed.

8. **[#25154 — "Codex Desktop App Windows Full Screen Issue"](https://github.com/openai/codex/issues/25154)** (9 comments, 20 👍)  
   *Status: OPEN* — Full-screen mode on Windows causes rendering artifacts. High upvote-to-comment ratio suggests many affected users but few workarounds.

9. **[#27287 — "Computer Use bootstrap fails on Windows: @oai/sky internal subpath is not exported"](https://github.com/openai/codex/issues/27287)** (8 comments, 9 👍)  
   *Status: OPEN* — A packaging/version mismatch breaks Computer Use on Windows. The same root cause appears in #28121. Affects the flagship agentic feature.

10. **[#28575 — "How do I even uninstall this?"](https://github.com/openai/codex/issues/28575)** (3 comments, 1 👍)  
    *Status: OPEN* — A documentation gap: no official uninstall guide for Codex CLI. The AI-generated answer provided a crude shell script. Highlights missing onboarding/offboarding polish.

## Key PR Progress

1. **[#28629 — "core: restore absolute turn context cwd"](https://github.com/openai/codex/pull/28629)** — Fixes a regression where `TurnContextItem.cwd` was changed to `PathUri`, breaking rollout reconstruction. Reverts to a stable absolute-path representation.

2. **[#28609–#28620 — "automations" stack (10 PRs)](https://github.com/openai/codex/pull/28609)** — A massive new feature: scheduled agent tasks with durable state store, CRUD handlers, heartbeat dispatch, cooldown logic, and a background worker loop. This is the foundation for a cron-like agent scheduler.

3. **[#28494 — "add shared session token budgets"](https://github.com/openai/codex/pull/28494)** — Opt-in token budget across root + descendant threads. One in-memory ledger charges completions and remote compactions. Directly addresses the runaway-token concerns in #14593.

4. **[#28623 — "Reuse parsed plugin skill root snapshots"](https://github.com/openai/codex/pull/28623)** — Introduces a `SkillRootLoader` cache (256-entry limit) to avoid re-parsing plugin skill roots. Performance optimization for plugin-heavy setups.

5. **[#28624 — "Load plugins and skill roots concurrently"](https://github.com/openai/codex/pull/28624)** — Parallelizes plugin loading (up to 8 concurrent) with order-preserving buffering. Reduces startup latency in multi-plugin environments.

6. **[#28148 — "add experimental managed Amazon Bedrock login and logout"](https://github.com/openai/codex/pull/28148)** — Allows app-server clients to create/remove AWS-managed credentials for Amazon Bedrock. Opens Codex to AWS-hosted models.

7. **[#28409 — "Enforce exact managed config values"](https://github.com/openai/codex/pull/28409)** — Locks down critical config fields (`sqlite_home`, `log_dir`, `model_catalog_json`, etc.) to exact values, preventing accidental overrides in managed deployments.

8. **[#28411 — "Add keyed shell environment rules to config"](https://github.com/openai/codex/pull/28411)** — New `[shell_environment_policy.filters]` syntax for include/exclude patterns (e.g., `"CORP_*" = "include"`), replacing the less expressive array format.

9. **[#27982 — "Start the guardian child session when parent session is started"](https://github.com/openai/codex/pull/27982)** — Eliminates the first-review latency by pre-creating the Guardian child session during parent initialization, leveraging WebSocket prewarm.

10. **[#28628 — "Handle colons in skill descriptions"](https://github.com/openai/codex/pull/28628)** — Fixes YAML frontmatter parsing failures for descriptions like `description: Build for AWS: ECS` by quoting the value. Community marketplace audit-driven fix.

## Feature Request Trends

- **Automations & Scheduling**: The 10-PR automations stack (#28609–#28620) is clearly the team's focus. Users want scheduled agent runs, cron-like triggers, and background tasks without manual intervention.
- **Token Budgets & Cost Transparency**: #28494 (shared session token budgets) and #28541 (benevolent limit reset) reflect a community desperate for predictable, visible token consumption. The sheer volume of rate-limit issues confirms this is the #1 pain point.
- **Session Export**: #13267 ("/export") has 9 comments and remains open since March. Users want JSON/markdown export of entire sessions for archival and sharing.
- **PreToolUse Human Approval Hooks**: #28437 requests native support for hooks returning `permissionDecision: "ask"` to escalate tool calls to human approval. A security/control feature for enterprise deployments.

## Developer Pain Points

1. **Token Burn / Rate Limits** — Three separate open issues (#14593, #26306, #28507) with 636+ combined comments. Users report 3–5x token consumption spikes and model-capacity errors. The community is actively demanding per-session budgets and visible counters.

2. **Session History Loss & Corruption** — Multiple reports of chats disappearing after updates (#27353), the 50-conversation window hiding project history (#21128), and full history loss on Windows (#28606). Database integrity is a recurring concern.

3. **Computer Use / Plugin Unavailability** — Windows (#27287, #28121) and macOS (#18803, #22927) both suffer from "plugin unavailable" errors due to packaging mismatches and missing exports in `@oai/sky`. The flagship agentic feature is unreliable across platforms.

4. **macOS Gatekeeper & WSL Integration** — CLI tools (`rg`, `git`) blocked by macOS security (#28190), WSL mode broken on arm64 (#13565), and `syspolicyd` file descriptor leaks (#26341) causing DMG corruption. Platform-specific friction is high.

5. **Performance Degradation Over Time** — Unbounded SQLite metadata (#21211), RAM exhaustion during session hydration (#28524), and slow thread navigation. Long-running users experience progressive slowdowns with no built-in cleanup.

6. **Basic UX Gaps** — No uninstall guide for CLI (#28575), Windows full-screen rendering bugs (#25154), and update installation that fails to relaunch (#24047). These non-functional issues erode trust in the product's maturity.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-17

## Today's Highlights

A quiet day on the release front, but the community continues to surface critical regressions in subagent behavior, particularly around hang-on-completion and incorrect success reporting after turn limits. The maintainers are actively merging high-severity security fixes for MCP OAuth token persistence, path traversal protection, and a thoughtful fix for thought leakage in history scrubbing. Meanwhile, AST-aware codebase mapping and deeper subagent autonomy remain top-level strategic EPICs under investigation.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues (Top 10)

1. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**
   *Priority P1 | 7 comments | 0 👍* — A follow-up EPIC to the original behavioral evals infrastructure. 76 tests now exist across 6 Gemini models, and this issue tracks expanding coverage, adding OSS benchmarks, and improving result reporting.

2. **[#22745 — Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**
   *Priority P2 | 7 comments | 1 👍* — A strategic investigation into whether AST-aware tools can reduce token waste and tool-call misalignment during codebase navigation. Directly feeds into improved `codebase_investigator` subagent quality.

3. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**
   *Priority P1 | 7 comments | 8 👍 (highest reaction count)* — The community's most-upvoted open bug: simple folder creation hangs indefinitely when the generalist agent is invoked. Workaround exists (disable sub-agent delegation), but the root cause remains a top priority.

4. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**
   *Priority P1 | 6 comments | 2 👍* — A subtle but critical bug where a subagent that hits its turn limit and does zero work still reports `status: "success"` to the orchestrator. This hides silent failures and undermines trust in agent reporting.

5. **[#25166 — Shell command execution stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)**
   *Priority P1 | 4 comments | 3 👍* — A user-frustrating regression where simple, non-interactive shell commands leave the tool in a "waiting for input" state indefinitely. The fix likely requires tighter lifecycle tracking in the shell execution tool.

6. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**
   *Priority P1 | 4 comments | 1 👍* — Browser automation breaks under Wayland due to display server incompatibility. Termination reason is misleadingly "GOAL" despite failure.

7. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**
   *Priority P2 | 5 comments | 0 👍* — A security/safety issue: Auto Memory sends transcript content to the extraction model *before* redacting secrets. The extraction prompt asks for redaction, but content has already left the client.

8. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**
   *Priority P2 | 6 comments | 0 👍* — Anecdotal but consistent: even when high-quality custom skills (e.g., git, gradle) are configured, the orchestrator seldom invokes them without explicit user instruction. Points to weak tool-awareness heuristics.

9. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**
   *Priority P2 | 3 comments | 1 👍* — The agent occasionally uses `git reset --force` or other destructive commands when safer alternatives exist. A request for a safety guardrail layer.

10. **[#22267 — Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)**
    *Priority P2 | 3 comments | 0 👍* — The `browser_agent` doesn't respect `settings.json` overrides like `maxTurns`, making configuration non-deterministic for users relying on per-project settings.

---

## Key PR Progress (Top 10)

1. **[#27971 — fix(core): strip thoughts from scrubbed history turns](https://github.com/google-gemini/gemini-cli/pull/27971)**
   *Size M | New* — A critical fix for "thought leakage": internal model reasoning monologues leaking into plain-text history, causing the model to emulate scratchpad thoughts in subsequent turns. **Potential game-changer for session continuity.**

2. **[#27966 — enforce case-insensitive sensitive path blocklist](https://github.com/google-gemini/gemini-cli/pull/27966)**
   *Size M | Open* — Implements case-insensitive blocking of `.git`, `.env`, `node_modules` and `vscode` from tool writes. Addresses a prompt-injection bypass vector where attackers used mixed case.

3. **[#27889 — fix(core): refresh MCP OAuth with stored client ID](https://github.com/google-gemini/gemini-cli/pull/27889)**
   *Priority P1 | Size M | Open* — Fixes OAuth refresh failures for auto-discovered MCP servers that don't have a static `clientId`. Critical for MCP reliability.

4. **[#27948 — chore(deps): pin dependencies and enforce 14-day update cooldown](https://github.com/google-gemini/gemini-cli/pull/27948)**
   *Size XL | Open* — An operational improvement: strips all version ranges, pins to exact versions, and enforces a 14-day delay on automated updates. Reduces supply-chain risk.

5. **[#27664 — write MCP OAuth tokens atomically](https://github.com/google-gemini/gemini-cli/pull/27664)**
   *Priority P1 | Size M | Open* — Prevents token file corruption via temp-file + atomic rename. Small change, high impact for headless/automated workflows.

6. **[#27915 — trust dialog discloses the hook shape that never runs](https://github.com/google-gemini/gemini-cli/pull/27915)**
   *Priority P1 | Size M | Open* — Fixes a UI/security mismatch: the workspace-trust dialog shows the *inverse* of the hooks that actually execute. A project with a `SessionStart` hook in the canonical form runs arbitrary code but the dialog doesn't display it.

7. **[#27943 — resolve defensive path resolution for @-reference files [CLOSED]](https://github.com/google-gemini/gemini-cli/pull/27943)**
   *Size M | Merged* — A defensive `resolveDefensiveToolPath` function strips leading `@` reference prefixes from LLM-generated file paths in `ReadFileTool`, `WriteFileTool`, and `EditTool`. Reduces tool hallucination damage.

8. **[#27959 — preserve newlines when truncating multi-line text](https://github.com/google-gemini/gemini-cli/pull/27959)**
   *Size S | Merged* — A bug where `truncateString` silently deleted all newlines because the grapheme regex lacked the `dotAll` flag. Small fix, visible impact on multi-line output display.

9. **[#27859 — add native drag-and-drop and Cmd+V clipboard image pasting](https://github.com/google-gemini/gemini-cli/pull/27859)**
   *Priority P3 | Size M/L | Open* — Brings visual multimodal parity: first-class terminal drag-and-drop and clipboard image support. Addresses a long-standing user request.

10. **[#27964 — scope resource resolution to prevent cross-server URI confusion](https://github.com/google-gemini/gemini-cli/pull/27964)**
    *Size M | Open* — Prevents a second connected MCP server from silently shadowing a trusted server's resource on URI collision. Resolution now fails closed when multiple servers expose the same URI.

---

## Feature Request Trends

Three major feature directions dominate the open issues:

1. **AST-Aware Tooling** — Multiple EPICs (e.g., #22745, #22746, #22747) are investigating whether Abstract Syntax Tree-aware file reads, search, and codebase mapping can reduce token waste and improve subagent precision. The team is actively prototyping with tools like `tilth`, `glyph`, and `ast-grep`.

2. **Subagent Autonomy & Safety** — Users want agents that proactively use configured skills (#21968), stop destructive behavior (#22672), and maintain accurate post-execution state (#22323). The tension is between autonomous action and safe defaults.

3. **Memory & Context Improvements** — Issues around Auto Memory (#26522, #26523, #26525) show demand for deterministic secret redaction, better low-signal session filtering, and quarantine of invalid memory patches. The community wants memory that is both persistent and trustworthy.

---

## Developer Pain Points

| Pain Point | Frequency | Key Issue(s) |
|---|---|---|
| Agent hangs / stuck shell | High | #21409, #25166 |
| Subagent misreporting failure as success | High | #22323 |
| Subagents not using configured skills | Medium | #21968 |
| Browser agent broken on Wayland | Medium | #21983 |
| Settings.json overrides ignored | Medium | #22267 |
| OAuth token corruption on write | Medium | #27664 |
| Sensitive path bypass via case-mangling | Medium | #27966 |
| Thought leakage confusing session state | Medium | #27971 |
| Destructive git/command behavior | Low | #22672 |
| Auto Memory retrying low-signal sessions | Medium | #26522 |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — June 17, 2026

## Today's Highlights
A significant release (v1.0.63) landed with better vision-error messaging and sorted help output, while the community flagged several critical regressions. Two severe bugs emerged: sub-agents can no longer access MCP tools, and the CLI crashes when `ContentExclusionFilter` encounters undefined services. A notable feature request for **Enterprise-managed custom models** continues to gain traction.

## Releases
**v1.0.63** — *2026-06-15*
- 📸 **Vision errors explained:** Blocked image attachments now tell users to enable vision via "Editor preview features" policy, switch to a vision-capable model, or try a different image
- 📋 **Sorted help output:** Options in `--help` now appear alphabetically (including two-letter options)
- [View release](https://github.com/github/copilot-cli/releases/tag/v1.0.63)

## Hot Issues
*Picked 10 of the most noteworthy, focusing on bugs regressions and high-impact requests.*

1. **[#3828] ContentExclusionFilter.isExcluded crash** — `rg` tool crashes with `TypeError: Cannot read properties of undefined (reading 'isExcluded')`. Blocks grep-like operations for users with content exclusion policies. *No comments, brand new.*
   → [Issue #3828](https://github.com/github/copilot-cli/issues/3828)

2. **[#3812] Sub-agents can no longer access MCP tools** — A regression in v1.0.63 breaks custom sub-agents' ability to see or invoke MCP tools. Top-level agent still works. *1 comment, 🔥 suspected high impact.*
   → [Issue #3812](https://github.com/github/copilot-cli/issues/3812)

3. **[#3824] Sub-agents run a different model than the configured session model** — Spawned sub-agents silently execute on a different model due to agent-type defaults and experiment overrides, with no UI indicators. *0 comments, discovered today.*
   → [Issue #3824](https://github.com/github/copilot-cli/issues/3824)

4. **[#3687] copilot.exe fatal-aborts under load on Windows ARM64** — Hard crash (`BEX64 / 0xc0000409`) reproducible across 1.0.57 and 1.0.60 when multiple sessions start concurrently. *5 comments, 1 👍, ongoing pain point.*
   → [Issue #3687](https://github.com/github/copilot-cli/issues/3687)

5. **[#3825] `--allow-all` read permissions leak to UI dispatcher** — Using `--allow-all` with `-i`/`--resume` causes permission prompts to wedge the TUI, leaving no input box. *0 comments, critical UX regression.*
   → [Issue #3825](https://github.com/github/copilot-cli/issues/3825)

6. **[#3826] "Operation cancelled by user" re-injected as a user message** — Cancelling a turn (`Esc`/`Ctrl-C`) sends the cancellation line to the model as a real user message, causing hallucinations. *0 comments, confusing behavior.*
   → [Issue #3826](https://github.com/github/copilot-cli/issues/3826)

7. **[#3823] Reasoning effort "xhigh" silently downgraded to "medium"** — Models without `xhigh` support fall back to `medium` instead of clamping to `max`, silently reducing reasoning quality. *0 comments, impacts Claude-opus/sonnet users.*
   → [Issue #3823](https://github.com/github/copilot-cli/issues/3823)

8. **[#3730] Support Enterprise-Managed Custom Models** — Copilot CLI doesn't use custom AI models configured in the Enterprise Admin dashboard. *1 comment, 4 👍, highest-voted feature request.*
   → [Issue #3730](https://github.com/github/copilot-cli/issues/3730)

9. **[#1168] Authorization fatigue — excessive prompting** — A single request triggers more than a dozen authorization prompts. *2 comments, 2 👍, long-standing UX friction.*
   → [Issue #1168](https://github.com/github/copilot-cli/issues/1168)

10. **[#3821] `/update` from resumed session leaves conflicting flags** — Running `/update` in a resumed session restarts with both `--session-id` and `-r/--resume`, causing failures. *1 comment, newly reported.*
    → [Issue #3821](https://github.com/github/copilot-cli/issues/3821)

## Key PR Progress
*No pull requests were updated in the last 24 hours.* The recent release appears to have been merged without overlapping PR activity in this window.

## Feature Request Trends
The most requested feature directions, distilled from this week's issues:

1. **Enterprise custom model support** — Administrators want centrally managed AI models (configured in Copilot Admin dashboard) to be available in Copilot CLI, mirroring VS Code behavior. (#3730)
2. **Session restore/unarchive** — Users accidentally archive long-running orchestrator sessions and cannot recover them. Desired: a way to restore archived project sessions. (#3518)
3. **Asynchronous read-only commands** — `/mcp show` and `/plugin list` should execute immediately like `/tasks`, not wait for an agent turn. (#3829)
4. **Repo-level skill directories** — Support `skillDirectories` in `.github/copilot-skills.yml` to include skills from multiple repos or monorepo subdirectories. (#3822)
5. **Document matcher support for command hooks** — Users need clear docs on using `matcher` to run formatters/linters only after file-edit tools. (#3820)

## Developer Pain Points
Recurring frustrations and high-frequency issues in today's digest:

- **Authorization fatigue** (#1168) remains the most commented pain point — excessive prompts degrade workflow
- **Windows ARM64 crashes** (#3687) — reproducible fatal exits under load, affecting Surface Pro X / Windows on Arm users
- **Silent model downgrades** (#3823, #3824) — sub-agents and reasoning efforts use unintended models with no user visibility
- **Permission UI wedging** (#3825) — `--allow-all` + resume mode blocks all input in terminal TUI
- **Cancellation confusion** (#3826) — cancel messages interpreted as user commands, triggering unwanted responses
- **MCP tool regressions** (#3812) — sub-agents losing tool access after v1.0.63
- **Rate-limit timezone ambiguity** (#3819) — error message omits timezone, leaving users unable to plan

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-17

## Today's Highlights
No new releases were published in the last 24 hours, but the community remains active with several high-signal bug reports and a long-dormant enhancement request gaining traction. A fresh install issue (#2456) and an auto-discovery bug (#2457) have emerged as key blockers for new and advanced users alike, while a four-month-old PR (#1771) fixing a critical tool message serialization error has resurfaced for review.

## Releases
No new versions were published in the last 24 hours. The latest release remains v0.15.0.

## Hot Issues

1. **[#2457] Kimi Code CLI auto-discovers MCP server after user deleted it, causing unfixable 400 errors**  
   *Opened: 2026-06-16 | 👍 0 | Comments: 0*  
   A serious persistence bug: once an MCP server is added, deleting it does not prevent the CLI from re-discovering it on restart, leading to persistent 400 errors. Windows 10 user reports no workaround. This affects reliability for MCP-heavy workflows.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2457)

2. **[#2456] Fresh install reports "LLM not set" with no guidance to run login**  
   *Opened: 2026-06-16 | 👍 0 | Comments: 0*  
   Homebrew users hitting a dead-end on first run. The error message is opaque and offers no action hint. A simple UX regression that increases time-to-first-query.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2456)

3. **[#1327] Enhancement: More Steps per turn by default**  
   *Opened: 2026-03-03 | Updated: 2026-06-16 | 👍 0 | Comments: 3*  
   The default 100-step limit triggers prematurely even when context is only 34.5% used. Poster argues that the default should scale with context usage or be increased. Low engagement but a quality-of-life pain point for long-running sessions.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1327)

4. **[#1632] [CLOSED] Feature Request: Option to hide thinking content while using thinking models**  
   *Opened: 2026-03-29 | Updated: 2026-06-16 | 👍 3 | Comments: 2*  
   Closed without resolution. Users want to use K2.7 Turbo’s reasoning quality without visual clutter. Community upvoted, but no action taken—likely due to complexity in streaming render control.  
   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1632)

5. **No other issues met the 24h update threshold** — only 4 total items were updated in the last day.

## Key PR Progress

1. **[#1771] fix: always stringify tool message content in Chat Completions provider**  
   *Opened: 2026-04-06 | Updated: 2026-06-16 | 👍 0*  
   Addresses a persistent 400 error when tool results contain multiple `ContentPart` objects. The fix forces `content` to be a plain string for `role: "tool"`, aligning with OpenAI API requirements. After 71 days open, this PR is now active again and could unblock many multi-turn tool-calling workflows.  
   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1771)

## Feature Request Trends
- **Step limit configurability**: Users want a higher default or context-aware step limits (#1327).
- **Thinking model display control**: Repeated asks to hide or simplify the "Thinking..." spinner and grey italic text for cleaner terminal output (#1632).
- **First-run onboarding**: Fresh install experience is bare; users expect a guided login prompt (#2456).

## Developer Pain Points
- **MCP server state persistence bugs**: Deleting a server doesn’t stop auto-discovery, leading to unfixable 400 errors (#2457).
- **Opaque error messages**: "LLM not set" with no actionable next step (#2456) frustrates new adopters.
- **Stale PRs blocking tool-calling reliability**: PR #1771 sat idle for over two months despite fixing a clear API compliance issue, delaying fixes for tool message serialization.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-17

## Today's Highlights

A significant spike in bug reports around model provider compatibility dominated today's activity, with three separate issues filed against MiniMax M3 rejecting tool-heavy sessions. The team is already shipping fixes, with PR #32609 landing to sanitize MiniMax tool result text. A critical infinite compaction loop fix also made it through cleanup, and the ecosystem saw a wave of infrastructure PRs improving compression, caching, and service worker support.

## Releases

No new releases in the last 24 hours.

## Hot Issues

### 1. [#27167] [FEATURE]: Add native session goals with /goal
- **Author:** jorgitin02 | **Created:** 2026-05-12 | **Comments:** 50 | **👍:** 87
- **Why it matters:** The most-upvoted open feature request. Users want a persistent `/goal` command to set session-level objectives across turns, reducing repetitive prompting.
- **Link:** https://github.com/anomalyco/opencode/issues/27167

### 2. [#4276] Is zen/big-pickle glm 4.6?
- **Author:** aziham | **Created:** 2025-11-13 | **Comments:** 28 | **👍:** 3
- **Why it matters:** Long-running speculation about model identity. The 200K context window similarity to GLM 4.6 continues to draw user curiosity.
- **Link:** https://github.com/anomalyco/opencode/issues/4276

### 3. [#2047] LM Studio Failure to refresh models
- **Author:** blankenshipz | **Created:** 2025-08-18 | **Comments:** 17 | **👍:** 4
- **Why it matters:** A longstanding pain point for local-first users. Models added/removed in LM Studio don't refresh in OpenCode even after re-authentication.
- **Link:** https://github.com/anomalyco/opencode/issues/2047

### 4. [#28957] [BUG] "Upstream idle timeout exceeded"
- **Author:** VENAXIS | **Created:** 2026-05-23 | **Comments:** 15 | **👍:** 0
- **Why it matters:** Session timeouts when using "writing-plans" skill on macOS Tahoe (Apple M4). Points to infrastructure-level idle timeouts between client and model service.
- **Link:** https://github.com/anomalyco/opencode/issues/28957

### 5. [#8345] zsh: illegal hardware instruction opencode
- **Author:** yujianfeikong | **Created:** 2026-01-14 | **Comments:** 15 | **👍:** 6
- **Why it matters:** OpenCode 1.1.19 crashes on certain hardware with SIGILL. Affects users on older Mac hardware lacking ISA extensions the binary expects.
- **Link:** https://github.com/anomalyco/opencode/issues/8345

### 6. [#21470] OpenCode is heavily cpu-bound
- **Author:** tom-neara | **Created:** 2026-04-08 | **Comments:** 11 | **👍:** 10
- **Why it matters:** Users report OpenCode itself consumes more CPU than the model API calls. A session with 300K tokens showed 1.5M+ CPU-bound operations in OpenCode itself.
- **Link:** https://github.com/anomalyco/opencode/issues/21470

### 7. [#18001] [FEATURE]: Implement /loop command for automated iterative task execution
- **Author:** doko89 | **Created:** 2026-03-17 | **Comments:** 9 | **👍:** 27
- **Why it matters:** Strong community demand for a native `/loop` command to replace manual repetitive prompting for time-based or iterative tasks.
- **Link:** https://github.com/anomalyco/opencode/issues/18001

### 8. [#32574] Tool call start time incorrectly reported?
- **Author:** bartlettroscoe | **Created:** 2026-06-16 | **Comments:** 5 | **👍:** 0
- **Why it matters:** Timing data shows suspiciously close start/end times. Triaged by GPT-5.5 High; suggests a defect in how the start time is reset.
- **Link:** https://github.com/anomalyco/opencode/issues/32574

### 9. [#32615] Infinite clarification/compaction loop on empty git repo
- **Author:** Cunhov | **Created:** 2026-06-16 | **Comments:** 3 | **👍:** 0
- **Why it matters:** Correctness and cost-control bug. Empty `.git/` directories cause OpenCode to loop indefinitely, burning tokens with no progress.
- **Link:** https://github.com/anomalyco/opencode/issues/32615

### 10. [#29879] [Bug] @ai-sdk/azure Responses API: encrypted content verification fails after 3-4 tool-calling turns
- **Author:** samuel-pullely | **Created:** 2026-05-29 | **Comments:** 7 | **👍:** 0
- **Why it matters:** Stateless mode (`store: false`) fails predictably after a few tool-calling turns with an encrypted content verification error on Azure.
- **Link:** https://github.com/anomalyco/opencode/issues/29879

## Key PR Progress

### 1. [#32609] fix(provider): sanitize MiniMax tool result text (OPEN)
- **Author:** megamen32 | **Created:** 2026-06-16
- **What it does:** Closes #32608 by sanitizing tool result text that causes MiniMax's "tool call result does not follow tool call" (2013) error. A direct response to today's spike in provider compatibility bugs.
- **Link:** https://github.com/anomalyco/opencode/pull/32609

### 2. [#32610] fix(desktop): skip file watcher on $HOME and filesystem root (OPEN)
- **Author:** vzwjustin | **Created:** 2026-06-16
- **What it does:** Prevents desktop from watching $HOME or `/`, which caused inotify timeouts and CPU pegging. Includes Flatpak workaround and troubleshooting guide.
- **Link:** https://github.com/anomalyco/opencode/pull/32610

### 3. [#32489] fix(opencode): sanitize OpenAI MCP tool schemas (CLOSED)
- **Author:** jquense | **Created:** 2026-06-16
- **What it does:** Addresses #32488 by handling MCP servers with tuple-style `items` in JSON Schema tool inputs. Merged and closed.
- **Link:** https://github.com/anomalyco/opencode/pull/32489

### 4. [#32604] fix(session): preserve reasoning part type on model switch (OPEN)
- **Author:** malventano | **Created:** 2026-06-16
- **What it does:** Fixes prefix cache invalidation causing long delays when switching models mid-session. Preserves reasoning part type across the switch.
- **Link:** https://github.com/anomalyco/opencode/pull/32604

### 5. [#32612] fix(codex): exclude `-pro` models from ChatGPT-account model list (OPEN)
- **Author:** devinoldenburg | **Created:** 2026-06-16
- **What it does:** Prevents `gpt-5.5-pro` from appearing as selectable on ChatGPT OAuth accounts, where every request fails. Closes #26115 and #32435.
- **Link:** https://github.com/anomalyco/opencode/pull/32612

### 6. [#27554] feat(opencode): local LAN provider discovery + auto-discover models (OPEN)
- **Author:** androidand | **Created:** 2026-05-14
- **What it does:** Adds mDNS, DNS-SD, and manual-IP discovery for local OpenAI-compatible servers via `/connect`. Auto-discovers available models on the LAN.
- **Link:** https://github.com/anomalyco/opencode/pull/27554

### 7. [#32512] fix(core): strip perplexity agent response fields (CLOSED)
- **Author:** wgu9 | **Created:** 2026-06-16
- **What it does:** Fixes #32108 by stripping OpenAI Responses fields that Perplexity Agent rejects, enabling compatibility with `perplexity-agent`.
- **Link:** https://github.com/anomalyco/opencode/pull/32512

### 8. [#26861] fix(tui): Old messages disappearing during long sessions (OPEN)
- **Author:** vpetrigo | **Created:** 2026-05-11
- **What it does:** Implements lazy-scroll loading in TUI (50 older messages on scroll-up) and virtualized rendering to prevent message loss in long sessions. Fixes #7380.
- **Link:** https://github.com/anomalyco/opencode/pull/26861

### 9. [#32592] fix(opencode): send system context as structured messages on OpenAI OAuth path (CLOSED)
- **Author:** rodboev | **Created:** 2026-06-16
- **What it does:** Fixes the OAuth/Codex path flattening system context into instructions instead of sending structured messages. Closes #32505.
- **Link:** https://github.com/anomalyco/opencode/pull/32592

### 10. [#27919] fix(session): break infinite compaction loop (CLOSED)
- **Author:** ranxianglei | **Created:** 2026-05-16
- **What it does:** Prevents infinite spinning when compression fails to reduce context below the token limit. Closes #27924. Merged via automated cleanup.
- **Link:** https://github.com/anomalyco/opencode/pull/27919

## Feature Request Trends

1. **Persistent session lifecycle commands** — `/goal` (highest upvoted) and `/loop` for automated iterative execution top the request charts, indicating users want structured session management beyond ad-hoc prompting.

2. **Advanced plugin pipeline** — Community requests for middleware-style data flow (#5148) and regex support in permissions configuration (#11397) suggest a desire to extend OpenCode's plugin system beyond simple event hooks.

3. **Model auto-selection and fallback** — Requests for auto-switching models based on input type (#32601) and configurable fallback model chains reflect frustration with manual model management, especially when using local vs. cloud providers.

4. **UI/UX customization** — Swapable left/right panel layout (#16349), configurable session picker limits (#20754), and RTL text support (#32602) indicate a maturing user base wanting desktop-level customization.

5. **Tiered pricing feedback** — Two issues (#24879, #32605) discuss subscription plans, suggesting users are hitting pay-as-you-go caps and want predictable monthly billing tiers.

## Developer Pain Points

1. **Provider incompatibility pain** — Today's three MiniMax M3 issues (#32608, #32611, #32614) and the Azure encrypted content bug (#29879) show that model provider compatibility remains the top friction point. Users hate cryptic "tool call result does not follow tool call" errors.

2. **Session loop bugs** — Multiple reports of infinite compaction loops (#32615, #27919), duplicate agent responses (#32598), and model switch issues (#32604) suggest the session management core needs hardening, especially around edge cases like empty repos or mid-session model switches.

3. **Resource consumption** — CPU-bound operations (#21470), illegal hardware instructions on older Macs (#8345), and inotify timeouts watching $HOME (#32610) indicate performance regressions on non-bleeding-edge hardware.

4. **State management fragility** — Desktop file watcher issues, OAuth/Codex context flattening (#32505), and TUI message loss during long sessions (#26861) point to state management as a source of persistent developer frustration.

5. **Local model integration** — LM Studio model refresh failures (#2047) and the absence of LAN provider discovery (now being addressed by #27554) highlight tension between remote-first design and local-first developer workflows.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-17

## Today's Highlights
Pi v0.79.6 shipped two critical fixes: HTTP dispatcher now preserves deliberate `fetch` overrides, and DeepSeek V4 thinking-off requests correctly send the `thinking: { type: "disabled" }` parameter. Meanwhile, a flurry of issues and PRs around provider-scoped configuration, timing metrics, and HTTP error transparency signal active community demand for operational clarity and multi-provider flexibility. The 50 open issues and 9 PRs updated in the last 24h reflect a project in rapid iteration.

## Releases
**v0.79.6** (latest)
- **Fixed:** HTTP dispatcher no longer overwrites a caller's explicit `fetch` override when reinstalling the undici global fetch.
- **Fixed:** Inherited OpenCode Go DeepSeek V4 thinking-off requests now send the provider's `thinking: { type: "disabled" }` compatibility parameter.

**v0.79.5**
- **New Feature:** Provider-scoped API key environments — `auth.json` API key entries can now include `env` overrides for provider-specific Cloudflare, Azure OpenAI, Google Vertex, Amazon Bedrock, cache retention, and proxy settings without changing the project shell.

## Hot Issues

1. **#4945 — OpenAI-Codex Connection Reliability Issues**  
   *Author: liushuaiiu | 59 comments | 30 👍*  
   **Summary:** `gpt-5.5` leaves the TUI stuck on "Working..." with no output or error; recovery requires Escape key.  
   **Source:** [Issue #4945](https://github.com/earendil-works/pi/issues/4945)  
   **Why it matters:** The top-voted issue indicates a persistent stream-handling bug in a flagship provider, blocking core workflow.

2. **#4877 — Session folder collision**  
   *Author: olivierverdier | 19 comments*  
   **Summary:** Different file paths can hash to the same session folder (e.g., `/a/b/c/d` vs `/a-b/c-d`).  
   **Source:** [Issue #4877](https://github.com/earendil-works/pi/issues/4877)  
   **Why it matters:** A subtle data-corruption risk that may surprise users with non-flat project structures.

3. **#5696 — Model name does not refresh in TUI on CTRL+P**  
   *Author: mxr576 | 9 comments*  
   **Summary:** Model switching via CTRL+P sometimes lags by 1 press; display does not update immediately.  
   **Source:** [Issue #5696](https://github.com/earendil-works/pi/issues/5696)  
   **Why it matters:** UX friction in a core interaction — model awareness is critical for correctness.

4. **#5687 — `pi list` and `pi update` never exit when extension runs MCP server**  
   *Author: unshipt | 8 comments*  
   **Summary:** Package subcommands hang indefinitely when an installed extension runs a long-lived MCP server.  
   **Source:** [Issue #5687](https://github.com/earendil-works/pi/issues/5687)  
   **Why it matters:** Blocks basic CLI operations in MCP-rich environments.

5. **#5816 — `pi` keeps trying to use `search` tool and failing with "Tool search not found"**  
   *Author: Hashino | 7 comments*  
   **Summary:** v0.79.4 always attempts `search` tool on codebase changes, failing every time.  
   **Source:** [Issue #5816](https://github.com/earendil-works/pi/issues/5816)  
   **Why it matters:** A regression making the agent unusable for basic file-editing tasks.

6. **#5790 — Support `httpProxy` in settings.json for EnvHttpProxyAgent**  
   *Author: moekyo | 7 comments*  
   **Summary:** Users want a fixed HTTP proxy setting without relying on environment variables.  
   **Source:** [Issue #5790](https://github.com/earendil-works/pi/issues/5790)  
   **Why it matters:** Enterprise/corporate environments require explicit proxy configuration.

7. **#5571 — `pi -p` hangs indefinitely when stdin is a non-TTY pipe**  
   *Author: lrhodin | 7 comments*  
   **Summary:** Fresh installs with no credentials cause indefinite hangs instead of fast failure.  
   **Source:** [Issue #5571](https://github.com/earendil-works/pi/issues/5571)  
   **Why it matters:** CI/CD and scripting use cases break silently; no feedback for 3+ minutes.

8. **#5728 — Support provider-specific config in auth.json**  
   *Author: michaeldwan | 7 comments*  
   **Summary:** Providers like Cloudflare AI Gateway need `accountId`/`gatewayId` config beyond API keys.  
   **Source:** [Issue #5728](https://github.com/earendil-works/pi/issues/5728)  
   **Why it matters:** Unlocks full provider functionality without environment variable hacks.

9. **#5763 — Providers swallow HTTP error bodies**  
   *Author: stephanmck | 4 comments*  
   **Summary:** Proxy/gateway errors return opaque messages like "Unknown: UnknownError."  
   **Source:** [Issue #5763](https://github.com/earendil-works/pi/issues/5763)  
   **Why it matters:** Debugging network issues is nearly impossible without raw error details.

10. **#5556 — Session listing keeps full transcript text in allMessagesText**  
    *Author: RFYoung | 5 comments*  
    **Summary:** Even with streaming JSONL loading, `buildSessionInfo()` still appends every text part into memory.  
    **Source:** [Issue #5556](https://github.com/earendil-works/pi/issues/5556)  
    **Why it matters:** Memory bloat in session management defeats the purpose of streaming metadata.

## Key PR Progress

1. **#5820 — Preserve raw HTTP error status and bodies for non-schema errors**  
   *Author: darrendc26*  
   **Summary:** Introduces a shared error-formatting helper to surface HTTP status and raw body from proxies/gateways.  
   **Source:** [PR #5820](https://github.com/earendil-works/pi/pull/5820)  
   **Community significance:** Directly addresses the #5763 pain point — better debugging for gateway users.

2. **#5812 — Protect pipe characters inside inline code in markdown tables**  
   *Author: aliou*  
   **Summary:** Fixes marked library mis-parsing `|` inside backticks as column delimiters.  
   **Source:** [PR #5812](https://github.com/earendil-works/pi/pull/5812)  
   **Community significance:** Renders code snippets in tables correctly — a long-standing rendering bug.

3. **#5807 — Add provider-scoped environment overrides**  
   *Author: mitsuhiko*  
   **Summary:** `auth.json` credentials can now include `env` objects; stream options support `env` directly.  
   **Source:** [PR #5807](https://github.com/earendil-works/pi/pull/5807)  
   **Community significance:** Unlocks multi-provider setups with per-provider secrets — complements v0.79.5.

4. **#5809 — Add durationMs and timeToFirstTokenMs to Usage, display tokens/sec in footer**  
   *Author: martircz*  
   **Summary:** Extends `AssistantMessage.usage` with timing fields and renders throughput in the TUI footer.  
   **Source:** [PR #5809](https://github.com/earendil-works/pi/pull/5809)  
   **Community significance:** Gives users real-time latency and throughput metrics — highly requested for cost/performance monitoring.

5. **#5789 — Restore cursorUp line-start jump before history browsing**  
   *Author: 4h9fbZ*  
   **Summary:** Fixes regression where pressing Up on the first line of input always entered history mode.  
   **Source:** [PR #5789](https://github.com/earendil-works/pi/pull/5789)  
   **Community significance:** Restores TUI editor behavior that was broken by a previous fix.

6. **#5803 — Reject malformed OpenAI tool calls**  
   *Author: woodgear*  
   **Summary:** Rejects streamed tool calls that finish without `id` or `function name`; removes them from error results.  
   **Source:** [PR #5803](https://github.com/earendil-works/pi/pull/5803)  
   **Community significance:** Prevents silent failure and session corruption from malformed provider responses.

7. **#5801 — Nixify pi**  
   *Author: o1lo01ol1o*  
   **Summary:** Adds Nix flake packaging for Pi, enabling `nix build`, `nix run`, and `nix profile add`.  
   **Source:** [PR #5801](https://github.com/earendil-works/pi/pull/5801)  
   **Community significance:** Opens Pi to the Nix ecosystem — a popular packaging for deterministic builds.

8. **#5798 — Add Vercel AI Gateway attribution**  
   *Author: rwachtler*  
   **Summary:** Adds `http-referer` and `x-title` headers for Vercel AI Gateway identification.  
   **Source:** [PR #5798](https://github.com/earendil-works/pi/pull/5798)  
   **Community significance:** Improves observability for Vercel-managed deployments.

9. **#5796 — Bump TS target and lib to ES2024, use Promise.withResolvers()**  
   *Author: Perlence*  
   **Summary:** Replaces hand-rolled `Promise.withResolvers()` with native implementation after target bump.  
   **Source:** [PR #5796](https://github.com/earendil-works/pi/pull/5796)  
   **Community significance:** Modernizes codebase and reduces surface area for concurrency bugs.

10. **#5811 (Issue) — DeepSeek V4 tool-use serialization broken** (closed)  
    *Author: kerushidao | 3 comments*  
    **Summary:** Valid Pi-native toolCall/toolResult pairs produce "role:tool" chain errors in DeepSeek V4.  
    **Source:** [Issue #5811](https://github.com/earendil-works/pi/issues/5811)  
    **Community significance:** Highlights continued friction between Pi's internal tool format and provider expectations.

## Feature Request Trends

- **Provider-Scoped Configuration:** Multiple requests for `auth.json` to carry per-provider environment variables, account IDs, and gateway-specific config (e.g., #5728, #5790). Successfully partially addressed in v0.79.5.
- **OAuth & Subscription Support:** Users want Anthropic OAuth subscription usage (#5821) and custom OAuth callback page rendering (#5372) — a push for simpler billing integration.
- **RPC & External Control:** Growing interest in exposing session data via RPC (`get_entries`, `get_tree` in #5810) and driving Pi from external scripts.
- **Model Support Expansion:** Requests for ZhipuAI (GLM-4 series, #2345), Gemini 3.5 Flash (#5761), and DeepSeek V4 tool-use compatibility (#5811) show demand for wider provider coverage.
- **Diagnostics & Observability:** Users want latency metrics (#5809), raw HTTP error bodies (#5763), and provider attribution headers (#5798) — a clear trend toward operational transparency.

## Developer Pain Points

1. **Provider Connection Instability:** #4945 (OpenAI-Codex hangs), #5778 (stream drops hang agent loop), and #5571 (non-TTY hang) point to systemic stream-reliability issues.
2. **Tool Call Serialization Incompatibility:** Multiple providers (DeepSeek V4, Moonshot/Kimi, OpenAI responses) reject Pi's tool schemas (#5811, #5822, #5819) — a recurring cross-provider problem.
3. **CLI Hang on MCP / Extension Loading:** #5687 shows package subcommands hang if extensions run long-lived MCP servers — impacts basic CLI usability.
4. **Session & File Management Bugs:** Folder collision (#4877), memory bloat (#5556), CP-1252 encoding breakage (#5797), and `package.json` pollution in caller CWD (#5774) erode trust in file operations.
5. **TUI Rendering & Input Regressions:** Double keypress in Kitty (#5407), scrolling jumps in Windows Terminal (#5576), model name refresh delay (#5696), and tab-completion quirks (#5670) degrade experience across terminals.
6. **Inconsistent Error Transparency:** #5763 (swallowed HTTP bodies) and #5607 (misleading update banner) frustrate debugging and create false expectations.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**2026-06-17**

---

## Today's Highlights

The community saw intense activity around terminal behavior, session management, and multi-agent alignment. A critical fix for SGR mouse mode was shipped via PR #5213, while the `/loop` alignment work (PRs #5182, #5197) moved forward with a second-resolution wakeup engine. A long-running bug (#5210) where the model gets stuck in ExitPlanMode for hours surfaced as a top-priority issue, and a new QQ Bot channel adapter (PR #5202) was contributed.

---

## Releases

### v0.18.1-preview.0
- **Fix**: Warn on oversized context instructions (@he-yufeng, [#5073](https://github.com/QwenLM/qwen-code/pull/5073))
- **Docs**: Fix stale defaults, CLI syntax, and tool naming drift (@D)

### v0.18.1-nightly.20260616.a68b2e1e7
- Same fix and docs changes as above.

---

## Hot Issues

1. **[#5210](https://github.com/QwenLM/qwen-code/issues/5210) – ExitPlanMode stuck (P2)**  
   User reports being stuck in ExitPlanMode for over 7 hours with Qwen3.7-max. Previously the model would switch to YOLO mode, but now it hangs indefinitely. High community concern.

2. **[#5160](https://github.com/QwenLM/qwen-code/issues/5160) – Discontinued OAuth model shown in /model (P2)**  
   CLI 0.18.0 lists the discontinued `qwen-oauth coder-model` even when OAuth is not configured. Reported as confusing for new users. Actively welcoming PRs.

3. **[#5055](https://github.com/QwenLM/qwen-code/issues/5055) – Trojan:JS/ShaiWorm.DBA!MTB detection (P1)**  
   Antivirus flags the VSIX package for v0.18.0 as malware. Six comments, high priority due to security concerns and potential distribution block.

4. **[#5206](https://github.com/QwenLM/qwen-code/issues/5206) – Auto-update fails on older glibc (P2)**  
   CentOS 7 users cannot auto-update from 0.18.0→0.18.1 due to silent migration to the standalone installer when npm prefix is root-owned. Affects enterprise environments.

5. **[#4615](https://github.com/QwenLM/qwen-code/issues/4615) – Project-scoped .mcp.json with approval semantics**  
   Feature request for MCP server config with pending-approval state. Gaining traction as MCP ecosystem grows.

6. **[#5180](https://github.com/QwenLM/qwen-code/issues/5180) – Sub-agent crashes mid-task (P2)**  
   Multi-agent session crashes 12+ hours in when sub-agents execute tasks. Long context and memory management suspected. Active discussion.

7. **[#5212](https://github.com/QwenLM/qwen-code/issues/5212) – Terminal stuck in SGR mouse mode (P2)**  
   After Qwen Code exits, terminal remains in mouse-tracking mode, making mouse unusable. Root cause identified and PR submitted (#5213).

8. **[#5177](https://github.com/QwenLM/qwen-code/issues/5177) – exit_plan_mode fails with empty plan (P3)**  
   Model calls `exit_plan_mode` with empty `plan` parameter, wasting retry turns. Quick fix shipped in PR #5188.

9. **[#5208](https://github.com/QwenLM/qwen-code/issues/5208) – Stale .qwen-session marker blocks worktree cleanup (P2)**  
   Sessions refuse to clean up worktrees created by other sessions due to stale markers. Git workflow friction.

10. **[#5199](https://github.com/QwenLM/qwen-code/issues/5199) – Minified React error #185 in Cherry Studio (P2)**  
    UI crash within Cherry Studio environment. Windows-specific; likely a bundling issue with minified React.

---

## Key PR Progress

1. **[#5213](https://github.com/QwenLM/qwen-code/pull/5213) – fix(cli): use writeSync in exit handler to disable SGR mouse mode**  
   Critical fix for Issue #5212. Uses synchronous write in the exit handler to ensure terminal returns to normal mode.

2. **[#5182](https://github.com/QwenLM/qwen-code/pull/5182) – feat(loop): add second-resolution session wakeup engine**  
   Step 1 of `/loop` alignment with Claude Code. Adds `CronScheduler` — a non-durable, independently-scoped wakeup channel.

3. **[#5197](https://github.com/QwenLM/qwen-code/pull/5197) – feat(loop): wire prompt-only /loop to self-paced wakeups**  
   Step 2: Makes `/loop <prompt>` without an interval a self-paced loop, scheduling at most one future continuation. Part of roadmap for background automation.

4. **[#5202](https://github.com/QwenLM/qwen-code/pull/5202) – feat(channel): add QQ Bot (QQ机器人) channel adapter**  
   Community contribution adding a full QQ Bot adapter with WebSocket Gateway, event dispatch, and slash command handling. Joins existing Telegram/WeChat/DingTalk/Feishu adapters.

5. **[#5178](https://github.com/QwenLM/qwen-code/pull/5178) – ci(autofix): prioritize recent unattended bugs over stale ones**  
   Changes issue-autofix scan to prioritize recently-reported, triaged bugs rather than stale ones. Improves CI effectiveness.

6. **[#5126](https://github.com/QwenLM/qwen-code/pull/5126) – feat(vision-bridge): transcribe images to text for text-only models**  
   Opt-in bridge that sends images to a multimodal model for text transcription, enabling vision support on text-only primary models.

7. **[#5183](https://github.com/QwenLM/qwen-code/pull/5183) – fix(cli): Preserve mid-turn image messages**  
   Ensures image messages are not lost during interactive CLI sessions. Important for multimodal workflows.

8. **[#5185](https://github.com/QwenLM/qwen-code/pull/5185) – fix(plan-gate): isolate gate agent AbortSignal from parent signal chain**  
   Fixes infinite retry loop in the Plan Approval Gate when using `exit_plan_mode` in AUTO/YOLO pre-plan mode.

9. **[#5141](https://github.com/QwenLM/qwen-code/pull/5141) – fix(core): Track supported sed edits in file history**  
   Treats a safe subset of `sed -i` commands as normal edit confirmations, previewing diffs and tracking files in history. Improves undo reliability.

10. **[#5209](https://github.com/QwenLM/qwen-code/pull/5209) – fix(core): read SHORT-typed TIFF dimensions correctly on big-endian files**  
    Fixes TIFF dimension parsing for big-endian files, unblocking image tokenization on certain platforms.

---

## Feature Request Trends

1. **Multi-agent orchestration improvements** – Users want configurable sub-agent parallelism ([#5176](https://github.com/QwenLM/qwen-code/issues/5176)), porting Dynamic Workflows from Claude Code ([#4721](https://github.com/QwenLM/qwen-code/issues/4721)), and better background automation via `/loop` alignment ([#5124](https://github.com/QwenLM/qwen-code/issues/5124)).

2. **MCP ecosystem expansion** – Project-scoped `.mcp.json` with approval semantics ([#4615](https://github.com/QwenLM/qwen-code/issues/4615)) and MCP server lifecycle management are recurring themes.

3. **Terminal/hooks enhancements** – The `terminalSequence` field for hooks ([#4882](https://github.com/QwenLM/qwen-code/issues/4882)) and better shell integration (SGR mouse, worktree cleanup) dominate terminal-related requests.

4. **Localization** – A concrete PR to localize remaining hardcoded English UI strings in web-shell ([#5186](https://github.com/QwenLM/qwen-code/issues/5186)) reflects growing international demand.

5. **Channel adapters** – The addition of QQ Bot ([#5201](https://github.com/QwenLM/qwen-code/issues/5201)) suggests interest in expanding beyond Western chat platforms into Asian messaging ecosystems.

---

## Developer Pain Points

1. **Stuck/blocking state bugs** – Both ExitPlanMode ([#5210](https://github.com/QwenLM/qwen-code/issues/5210)) and plan-gate infinite retry loops ([#5185](https://github.com/QwenLM/qwen-code/issues/5185)) highlight brittle state machine transitions that leave sessions hung for hours.

2. **Terminal hygiene after exit** – The SGR mouse mode bug ([#5212](https://github.com/QwenLM/qwen-code/issues/5212)) and worktree cleanup failures ([#5208](https://github.com/QwenLM/qwen-code/issues/5208)) show that cleanup on exit is unreliable, polluting the user's terminal environment.

3. **Update reliability on Linux** – Silent migration to standalone installer on older glibc ([#5206](https://github.com/QwenLM/qwen-code/issues/5206)) and failed v0.18.1 release ([#5150](https://github.com/QwenLM/qwen-code/issues/5150)) erode trust in the update mechanism, especially for enterprise users.

4. **Multi-agent crashes under load** – Sub-agent mid-task crashes ([#5180](https://github.com/QwenLM/qwen-code/issues/5180)) and lack of queue/parallelism control ([#5176](https://github.com/QwenLM/qwen-code/issues/5176)) make long-running multi-agent sessions unreliable.

5. **Antivirus false positives** – The Trojan detection on the VSIX package ([#5055](https://github.com/QwenLM/qwen-code/issues/5055)) blocks enterprise deployment and creates user distrust, even if a false positive.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-17

## Today's Highlights

The **CodeWhale** rebranding is now fully in effect with v0.8.61 — the legacy `deepseek-tui` npm package is officially deprecated. Community activity is high: 17 issues and 7 PRs were updated in the last 24 hours, covering everything from a major v2 memory system overhaul to critical installation failures on Ubuntu 24.04. A recurring "stalled turn" bug (#2487) continues to frustrate users across versions, while the team is actively merging improvements for paste handling and new provider support.

## Releases

**v0.8.61** released (2026-06-17)  
- The project, command, npm package, and release assets are now all named **CodeWhale**.  
- The legacy npm package `deepseek-tui` is **deprecated** and receives no further releases.  
- Users on v0.8.x legacy names (`deepseek` / `deepseek-tui`) should migrate using `docs/REBRAND.md`.

[GitHub Release](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.61)

## Hot Issues

1. **#2487** [OPEN] — *Frequent error: Turn stalled – no completion signal received.*  
   - 14 comments, 1 👍. Users report `yolo` mode freezes, `continue` fails to resume, and Esc leads to timeout messages. This is a high-impact bug affecting long-running tasks across multiple versions.  
   [Issue #2487](https://github.com/Hmbown/CodeWhale/issues/2487)

2. **#3102** [CLOSED] — *Add first-class clarification question requests for agents.*  
   - 5 comments. The core team proposes a native UI modal for agents to ask users clarifying questions, instead of relying on chat messages.  
   [Issue #3102](https://github.com/Hmbown/CodeWhale/issues/3102)

3. **#3268** [OPEN] — *Failed to install on brand new Ubuntu 24.04 LTS.*  
   - 4 comments. `cargo install` fails due to missing `libdbus-1-dev` and `pkg-config`. A known build-time dependency gap for Linux users.  
   [Issue #3268](https://github.com/Hmbown/CodeWhale/issues/3268)

4. **#2739** [OPEN] — *Task execution freezes in Chinese locale (依然会出现任务执行过程中卡死的状态).*  
   - 4 comments. Users report infinite waits, timeout on Esc, and session loss on `--continue`. Regression from v0.8.52 fixes.  
   [Issue #2739](https://github.com/Hmbown/CodeWhale/issues/2739)

5. **#3264** [OPEN] — *Restrict skill scanning to ~/.codewhale/skills/ only.*  
   - 3 comments. Feature request to limit skill discovery to a single directory for performance and clarity.  
   [Issue #3264](https://github.com/Hmbown/CodeWhale/issues/3264)

6. **#3240** [OPEN] — *Legacy deepseek configuration directory created on Windows.*  
   - 2 comments. Despite the rebranding, the program still creates both `.codewhale` and `.deepseek` config folders, causing confusion.  
   [Issue #3240](https://github.com/Hmbown/CodeWhale/issues/3240)

7. **#3238** [OPEN] — *Does not work on Ubuntu 22.04 LTS due to glibc version mismatch.*  
   - 2 comments. Prebuilt binary incompatibility with older glibc — `npm install -g codewhale` fails to run.  
   [Issue #3238](https://github.com/Hmbown/CodeWhale/issues/3238)

8. **#3266** [CLOSED] — *sub-agent agent_eval with block=True causes TUI freeze/deadlock.*  
   - 2 comments. Multiple sub-agents with `block=True` freeze the TUI indefinitely; user must kill the terminal.  
   [Issue #3266](https://github.com/Hmbown/CodeWhale/issues/3266)

9. **#3243** [CLOSED] — *Bare digit keys 1-8 hijack composer input when empty.*  
   - 2 comments. Regression from v0.8.59 — users cannot start messages with digits because hotbar slots trigger instead.  
   [Issue #3243](https://github.com/Hmbown/CodeWhale/issues/3243)

10. **#3273** [OPEN] — *js_execution Node fetch does not honor proxy config/env on Windows.*  
    - 1 comment. Shell tools reach the internet via proxy, but `js_execution` times out with Undici connect timeout.  
    [Issue #3273](https://github.com/Hmbown/CodeWhale/issues/3273)

## Key PR Progress

1. **#3271** [OPEN] — *docs: add Ponytail personality to project instructions.*  
   - Adds a reference to the Ponytail agent; blocked until Ponytail officially lists CodeWhale as a supported agent.  
   [PR #3271](https://github.com/Hmbown/CodeWhale/pull/3271)

2. **#3270** [OPEN] — *docs: add Linux build-time deps to cargo install guides.*  
   - Explicitly documents `libdbus-1-dev` and `pkg-config` as prerequisites for `cargo install` on Ubuntu.  
   [PR #3270](https://github.com/Hmbown/CodeWhale/pull/3270)

3. **#3269** [OPEN] — *feat(tui): expose slash commands as hotbar actions.*  
   - Ref #2067 / #2061. Adds a slash-command source adapter for the Hotbar, allowing binding of commands like `slash.mode`, `slash.task`, `slash.rename`.  
   [PR #3269](https://github.com/Hmbown/CodeWhale/pull/3269)

4. **#2998** [OPEN] — *chore(deps-dev): bump tailwindcss from 3.4.19 to 4.3.1 in /web.*  
   - Dependabot update for the web frontend; breaking changes between major Tailwind versions need review.  
   [PR #2998](https://github.com/Hmbown/CodeWhale/pull/2998)

5. **#3236** [CLOSED] — *add DeepInfra provider support.*  
   - Fixes #3231. Adds runtime/TUI/CLI/TOML alias wiring and provider-registry documentation for DeepInfra.  
   [PR #3236](https://github.com/Hmbown/CodeWhale/pull/3236)

6. **#3267** [CLOSED] — *feat(tui): keep oversized paste inline with truncation and auto-expand.*  
   - Fixes #3263. Instead of replacing large pastes with file mentions, keeps text inline with truncation and auto-expand capability.  
   [PR #3267](https://github.com/Hmbown/CodeWhale/pull/3267)

7. **#2933** [OPEN] — *feat(hippocampal): v2 memory system — glossary, namespaces, rollback, auto-inject, daemon.*  
   - Major upgrade from v1 (entity graph + FTS5) to a full-featured cross-session memory layer with schema migration, namespaces, and background daemon support.  
   [PR #2933](https://github.com/Hmbown/CodeWhale/pull/2933)

8. **#3263** [CLOSED] — *TUI: keep large pasted text editable in composer instead of converting to @file mention.*  
   - Core UX improvement: users can now select, copy, and edit pasted text directly in the composer rather than losing editability to file mentions.  
   [Issue #3263](https://github.com/Hmbown/CodeWhale/issues/3263)

9. **#3265** [CLOSED] — *Moonshot/Kimi API: tools.function.parameters.type required to be "object".*  
   - Fixes the Kimi API incompatibility where empty parameters `{}` were rejected; now properly sets `type: "object"`.  
   [Issue #3265](https://github.com/Hmbown/CodeWhale/issues/3265)

10. **#3072** [CLOSED] — *Hydrate model catalog metadata from provider APIs with offline cache and provenance.*  
    - Enables automatic refresh of model metadata from provider catalogs (OpenRouter, OpenAI-compatible APIs) with offline caching.  
    [Issue #3072](https://github.com/Hmbown/CodeWhale/issues/3072)

## Feature Request Trends

The most requested feature directions from the past 24 hours include:

- **Agent-to-user clarification UI** (#3102) — A first-class modal system for agents to ask clarifying questions, replacing ad-hoc chat messages.
- **Skill directory scoping** (#3264) — Restrict skill scanning to a single `~/.codewhale/skills/` directory for clarity and performance.
- **Model metadata registry** (#3071, #3072) — Replace hard-coded model facts with a dynamic registry that auto-updates from provider APIs.
- **Slash commands in hotbar** (#3269) — Expose existing slash commands as bindable hotbar actions for power users.
- **Paste handling improvements** (#3263) — Keep large pasted text editable inline instead of converting to file mentions.

## Developer Pain Points

Recurring frustrations and high-frequency issues observed in the last 24 hours:

- **"Stalled turn" bug (#2487, #2739)** — Continues to plague users across versions: freezes, timeouts, and lost sessions in `yolo` mode and long-running tasks. Multiple reports in Chinese and English.
- **Installation friction (#3268, #3238)** — New users on Ubuntu 24.04 and 22.04 hit missing build-time deps (`libdbus-1-dev`) or glibc incompatibility. The `cargo install` path needs better documentation or prebuilt binaries for older glibc.
- **Rebranding cleanup debt (#3240)** — The program still creates legacy `.deepseek` config directories on Windows, confusing users post-rename.
- **TUI keyboard regression (#3243)** — Digit keys hijacking composer input is a usability regression that breaks basic text entry.
- **Proxy support gaps (#3273)** — `js_execution` tool on Windows does not respect proxy config/env, breaking workflows behind corporate VPNs.
- **Provider incompatibilities (#3265, #3255)** — Moonshot/Kimi and Novita providers fail with API validation errors (missing `type: "object"`, missing `/openai` segment). These are quick fixes but block users on those providers entirely.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*